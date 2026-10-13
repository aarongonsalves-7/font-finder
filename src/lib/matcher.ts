// Scores every indexed Google Font style against glyphs extracted from the user's image.
// Pure functions (no DOM) so the same code runs in the browser and in Node test scripts.
import { CELLS, decodeLogRatio, glyphFeature, inkBounds, type Box, type GlyphFeature, type InkImage } from './glyph-features.ts';

export type FontEntry = [family: string, id: string, weight: number, category: string, license: string];

export interface IndexMeta {
  grid: number;
  record: number;
  em: number;
  fonts: FontEntry[];
}

export interface QueryGlyph {
  ch: string;
  feature: GlyphFeature;
}

export interface OcrSymbol {
  text: string;
  confidence: number;
  /** Index of the OCR text line the symbol belongs to. */
  line?: number;
  bbox: { x0: number; y0: number; x1: number; y1: number };
}

export interface Ranked {
  index: number;
  /** Lower is better. */
  score: number;
}

// Relative weights of the three signals; tuned with scripts/eval-matcher.mjs.
// Shape = squared error + a correlation term (keeps evenly grey textured fonts from winning).
const W_MSE = 1;
const W_NCC = 0.1;
const W_ASPECT = 0.04;
const W_HEIGHT = 0.08;
const MISSING_PENALTY = 0.12;

/**
 * Convert greyscale pixels to ink coverage. Picks the polarity automatically
 * (dark-on-light or light-on-dark) and stretches contrast between the two levels.
 */
export function toInk(grey: Uint8Array | Uint8ClampedArray, width: number, height: number): InkImage {
  const hist = new Array(256).fill(0);
  for (const v of grey) hist[v]++;
  const t = otsu(hist, grey.length);

  // Median of each class.
  const median = (lo: number, hi: number) => {
    let n = 0;
    for (let v = lo; v <= hi; v++) n += hist[v];
    let acc = 0;
    for (let v = lo; v <= hi; v++) if ((acc += hist[v]) >= n / 2) return v;
    return (lo + hi) / 2;
  };
  let dark = 0;
  for (let v = 0; v <= t; v++) dark += hist[v];
  const darkIsInk = dark <= grey.length / 2; // text is the minority class
  const darkLevel = median(0, t);
  const lightLevel = median(t + 1, 255);
  const fg = darkIsInk ? darkLevel : lightLevel;
  const bg = darkIsInk ? lightLevel : darkLevel;
  const span = fg - bg || 1;

  const ink = new Float32Array(grey.length);
  for (let i = 0; i < grey.length; i++) ink[i] = Math.max(0, Math.min(1, (grey[i] - bg) / span));
  return { ink, width, height };
}

function otsu(hist: number[], total: number): number {
  let sum = 0;
  for (let i = 0; i < 256; i++) sum += i * hist[i];
  let sumB = 0, wB = 0, best = 0, threshold = 127;
  for (let i = 0; i < 256; i++) {
    wB += hist[i];
    if (!wB) continue;
    const wF = total - wB;
    if (!wF) break;
    sumB += i * hist[i];
    const mB = sumB / wB;
    const mF = (sum - sumB) / wF;
    const between = wB * wF * (mB - mF) ** 2;
    if (between > best) {
      best = between;
      threshold = i;
    }
  }
  return threshold;
}

/**
 * Turn OCR symbols into normalised glyph features, skipping unreliable ones.
 * Images often mix fonts (headline + caption), so only the most prominent text is used:
 * the line with the tallest letters, plus any other lines of similar size.
 */
export function extractGlyphs(img: InkImage, symbols: OcrSymbol[], charset: string, max = 48): QueryGlyph[] {
  const candidates: (QueryGlyph & { line: number; confidence: number })[] = [];
  for (const s of symbols) {
    if (s.text.length !== 1 || !charset.includes(s.text) || s.confidence < 55) continue;
    const box: Box = { x0: Math.floor(s.bbox.x0), y0: Math.floor(s.bbox.y0), x1: Math.ceil(s.bbox.x1), y1: Math.ceil(s.bbox.y1) };
    const tight = inkBounds(img, box);
    if (!tight) continue;
    const h = tight.y1 - tight.y0;
    const w = tight.x1 - tight.x0;
    if (h < 8 || w < 2) continue;
    candidates.push({ ch: s.text, feature: glyphFeature(img, tight), line: s.line ?? 0, confidence: s.confidence });
  }

  const byLine = new Map<number, number[]>();
  for (const c of candidates) byLine.set(c.line, [...(byLine.get(c.line) ?? []), c.feature.height]);
  const lineSize = new Map([...byLine].map(([line, heights]) => [line, median(heights)]));
  const biggest = Math.max(0, ...lineSize.values());

  return candidates
    .filter((c) => lineSize.get(c.line)! >= biggest * 0.8)
    .sort((a, b) => b.confidence - a.confidence)
    .slice(0, max)
    .map(({ ch, feature }) => ({ ch, feature }));
}

function median(values: number[]): number {
  const v = [...values].sort((a, b) => a - b);
  return v[Math.floor(v.length / 2)] ?? 0;
}

/** Rank all font styles; `records` maps each character to its index file contents. */
export function rankFonts(meta: IndexMeta, records: Map<string, Uint8Array>, glyphs: QueryGlyph[]): Ranked[] {
  const R = meta.record;
  const usable = glyphs.filter((g) => records.has(g.ch));
  if (!usable.length) return [];

  const qLogH = usable.map((g) => Math.log(g.feature.height));
  const qLogA = usable.map((g) => Math.log(g.feature.aspect));
  const qMean = usable.map((g) => g.feature.cells.reduce((a, b) => a + b, 0) / CELLS);
  const qStd = usable.map((g, i) => Math.sqrt(Math.max(1e-6, g.feature.cells.reduce((a, b) => a + b * b, 0) / CELLS - qMean[i] ** 2)));
  const ranked: Ranked[] = [];

  for (let f = 0; f < meta.fonts.length; f++) {
    let shape = 0;
    let aspect = 0;
    let missing = 0;
    const presentQ: number[] = [];
    const presentF: number[] = [];

    for (let g = 0; g < usable.length; g++) {
      const rec = records.get(usable[g].ch)!;
      const o = f * R;
      if (rec[o] === 0) {
        missing++;
        continue;
      }
      const cells = usable[g].feature.cells;
      const qm = qMean[g];
      const qs = qStd[g];
      let d = 0;
      let sr = 0;
      let srr = 0;
      let sqr = 0;
      for (let i = 0; i < CELLS; i++) {
        const r = rec[o + 2 + i] / 255;
        const diff = cells[i] - r;
        d += diff * diff;
        sr += r;
        srr += r * r;
        sqr += (cells[i] - qm) * r;
      }
      const rm = sr / CELLS;
      const rs = Math.sqrt(Math.max(1e-6, srr / CELLS - rm * rm));
      const ncc = sqr / CELLS / (qs * rs);
      shape += W_MSE * (d / CELLS) + W_NCC * (1 - ncc);
      aspect += (qLogA[g] - decodeLogRatio(rec[o + 1])) ** 2;
      presentQ.push(qLogH[g]);
      presentF.push(decodeLogRatio(rec[o]));
    }

    const n = presentQ.length;
    if (!n) continue;

    // Relative glyph heights (x-height vs caps vs ascenders), independent of image scale.
    let height = 0;
    if (n > 1) {
      const mq = presentQ.reduce((a, b) => a + b, 0) / n;
      const mf = presentF.reduce((a, b) => a + b, 0) / n;
      for (let i = 0; i < n; i++) height += (presentQ[i] - mq - (presentF[i] - mf)) ** 2;
      height /= n;
    }

    const score = shape / n + W_ASPECT * (aspect / n) + W_HEIGHT * height + MISSING_PENALTY * (missing / usable.length);
    ranked.push({ index: f, score });
  }

  return ranked.sort((a, b) => a.score - b.score);
}

/** Describe a result relative to the best match (scores are only meaningful comparatively). */
export type MatchLevel = 'best' | 'veryClose' | 'close' | 'similar';

export function matchLevel(score: number, best: number): MatchLevel {
  if (score <= best) return 'best';
  const ratio = score / best;
  return ratio <= 1.15 ? 'veryClose' : ratio <= 1.4 ? 'close' : 'similar';
}
