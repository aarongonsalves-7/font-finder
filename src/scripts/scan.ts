// In-browser font identification: OCR (Tesseract.js) → glyph features → match against the
// prebuilt Google Fonts index in /glyphs. Nothing leaves the device except requests for the
// OCR engine files and the index files themselves.
import type { Worker } from 'tesseract.js';
import { CHARSET, charFile } from '../lib/glyph-features';
import { extractGlyphs, matchLabel, rankFonts, toInk, type IndexMeta, type OcrSymbol } from '../lib/matcher';
import { licenseLabel, paidLookalikes, previewUrl, specimenUrl } from '../lib/fonts';
import type { FontMatch, ScanResult } from '../lib/types';

const MAX_RESULTS = 12;

let workerPromise: Promise<Worker> | null = null;
let metaPromise: Promise<IndexMeta> | null = null;
const recordCache = new Map<string, Promise<Uint8Array>>();

function getWorker(): Promise<Worker> {
  workerPromise ??= import('tesseract.js').then(({ createWorker }) => createWorker('eng'));
  workerPromise.catch(() => (workerPromise = null));
  return workerPromise;
}

function getMeta(): Promise<IndexMeta> {
  metaPromise ??= fetch('/glyphs/fonts.json').then((r) => {
    if (!r.ok) throw new Error('Could not load the font index.');
    return r.json();
  });
  metaPromise.catch(() => (metaPromise = null));
  return metaPromise;
}

function getRecords(ch: string): Promise<Uint8Array> {
  let p = recordCache.get(ch);
  if (!p) {
    p = fetch(`/glyphs/${charFile(ch)}`).then(async (r) => {
      if (!r.ok) throw new Error('Could not load the font index.');
      return new Uint8Array(await r.arrayBuffer());
    });
    p.catch(() => recordCache.delete(ch));
    recordCache.set(ch, p);
  }
  return p;
}

/** Start downloading the OCR engine and index metadata before the user presses Scan. */
export function warmUp() {
  getWorker().catch(() => {});
  getMeta().catch(() => {});
}

export const indexSize = async () => {
  const meta = await getMeta();
  return new Set(meta.fonts.map((f) => f[0])).size;
};

export async function scanCanvas(canvas: HTMLCanvasElement, onStep: (message: string) => void): Promise<ScanResult> {
  onStep('Loading the text reader…');
  const [worker, meta] = await Promise.all([getWorker(), getMeta()]);

  onStep('Reading the letters…');
  const { data: page } = await worker.recognize(canvas, {}, { blocks: true });
  const lines = (page.blocks ?? []).flatMap((b) => b.paragraphs.flatMap((p) => p.lines));
  const symbols: OcrSymbol[] = lines.flatMap((l, line) => l.words.flatMap((w) => w.symbols.map((s) => ({ ...s, line }))));

  const ctx = canvas.getContext('2d', { willReadFrequently: true })!;
  const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const grey = new Uint8ClampedArray(canvas.width * canvas.height);
  for (let i = 0; i < grey.length; i++) {
    grey[i] = 0.299 * data[i * 4] + 0.587 * data[i * 4 + 1] + 0.114 * data[i * 4 + 2];
  }
  const glyphs = extractGlyphs(toInk(grey, canvas.width, canvas.height), symbols, CHARSET);
  if (glyphs.length < 2) {
    throw new Error("We couldn't read enough letters. Try a tighter crop around one line of clear text.");
  }

  const families = new Set(meta.fonts.map((f) => f[0])).size;
  onStep(`Comparing ${glyphs.length} letters with ${families.toLocaleString()} Google Fonts…`);
  const chars = [...new Set(glyphs.map((g) => g.ch))];
  const records = new Map(await Promise.all(chars.map(async (ch) => [ch, await getRecords(ch)] as const)));
  // Let the status message paint before the (short) synchronous ranking.
  await new Promise((r) => setTimeout(r, 0));

  const results: FontMatch[] = [];
  const seen = new Set<string>();
  const ranked = rankFonts(meta, records, glyphs);
  const best = ranked[0]?.score ?? 0;
  for (const { index, score } of ranked) {
    const [family, id, weight, category, license] = meta.fonts[index];
    if (seen.has(family)) continue;
    seen.add(family);
    results.push({
      name: family,
      weight,
      category,
      license: licenseLabel(license),
      url: specimenUrl(family),
      previewUrl: previewUrl(id, weight),
      match: matchLabel(score, best),
      similarTo: paidLookalikes(family)
    });
    if (results.length >= MAX_RESULTS) break;
  }

  const text = page.text.split('\n').map((s) => s.trim()).find(Boolean)?.slice(0, 60) ?? null;
  return { text, letters: glyphs.length, results };
}
