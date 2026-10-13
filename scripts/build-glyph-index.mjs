// Builds the glyph index used by the in-browser font matcher:
//   public/glyphs/fonts.json  – one entry per indexed font style
//   public/glyphs/uXXXX.bin   – one file per character, a fixed-size record per font style
//
// Every Google Font with a Latin subset is indexed at weight 400 (plus 700 when available).
// Font files are cached in .cache/fonts. Takes a few minutes on first run:
//   npm run glyphs
import { mkdir, readFile, writeFile, access } from 'node:fs/promises';
import * as fontkit from 'fontkit';
import sharp from 'sharp';
import {
  CHARSET, GRID, RECORD, charFile, encodeRecord, glyphFeature, inkBounds
} from '../src/lib/glyph-features.ts';

const ROOT = new URL('../', import.meta.url);
const CACHE = new URL('.cache/fonts/', ROOT);
const OUT = new URL('public/glyphs/', ROOT);

const EM = 120; // px per em when rasterising
const CELL = 220; // px per glyph cell
const COLS = 8;
const ORIGIN_X = 40;
const BASELINE = 160;
const CONCURRENCY = 12;

const only = process.argv.find((a) => a.startsWith('--limit='));
const LIMIT = only ? Number(only.split('=')[1]) : Infinity;

async function exists(url) {
  try {
    await access(url);
    return true;
  } catch {
    return false;
  }
}

async function fetchFont(id, weight) {
  const file = new URL(`${id}-${weight}.woff2`, CACHE);
  if (await exists(file)) return readFile(file);
  const url = `https://cdn.jsdelivr.net/fontsource/fonts/${id}@latest/latin-${weight}-normal.woff2`;
  for (let attempt = 0; attempt < 3; attempt++) {
    const res = await fetch(url);
    if (res.ok) {
      const buf = Buffer.from(await res.arrayBuffer());
      await writeFile(file, buf);
      return buf;
    }
    if (res.status === 404) return null;
    await new Promise((r) => setTimeout(r, 1000 * (attempt + 1)));
  }
  return null;
}

/** Render all CHARSET glyphs of a font into one grid image and extract features. */
async function featuresFor(buf) {
  const font = fontkit.create(buf);
  const scale = EM / font.unitsPerEm;
  const rows = Math.ceil(CHARSET.length / COLS);
  const paths = [];
  const present = [];

  [...CHARSET].forEach((ch, i) => {
    const glyph = font.glyphForCodePoint(ch.codePointAt(0));
    const ok = glyph && glyph.id !== 0 && glyph.path.commands.length > 0;
    present.push(ok);
    if (!ok) return;
    const cx = (i % COLS) * CELL + ORIGIN_X;
    const cy = Math.floor(i / COLS) * CELL + BASELINE;
    paths.push(`<path transform="translate(${cx} ${cy}) scale(${scale} ${-scale})" d="${glyph.path.toSVG()}"/>`);
  });

  const width = COLS * CELL;
  const height = rows * CELL;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><rect width="100%" height="100%" fill="#fff"/><g fill="#000">${paths.join('')}</g></svg>`;
  const { data } = await sharp(Buffer.from(svg)).greyscale().raw().toBuffer({ resolveWithObject: true });

  const ink = new Float32Array(width * height);
  for (let i = 0; i < ink.length; i++) ink[i] = 1 - data[i] / 255;
  const img = { ink, width, height };

  return [...CHARSET].map((_, i) => {
    if (!present[i]) return null;
    const x = (i % COLS) * CELL;
    const y = Math.floor(i / COLS) * CELL;
    const box = inkBounds(img, { x0: x, y0: y, x1: x + CELL, y1: y + CELL });
    return box ? glyphFeature(img, box) : null;
  });
}

async function main() {
  await mkdir(CACHE, { recursive: true });
  await mkdir(OUT, { recursive: true });

  const res = await fetch('https://api.fontsource.org/v1/fonts');
  if (!res.ok) throw new Error(`Fontsource responded ${res.status}`);
  const catalog = (await res.json())
    .filter((f) => f.type === 'google' && f.subsets?.includes('latin') && f.category !== 'icons')
    .filter((f) => !/^Material (Icons|Symbols)/.test(f.family))
    .sort((a, b) => a.family.localeCompare(b.family))
    .slice(0, LIMIT);

  const jobs = [];
  for (const f of catalog) {
    const regular = f.weights.includes(400) ? 400 : f.weights[0];
    jobs.push({ f, weight: regular });
    if (regular === 400 && f.weights.includes(700)) jobs.push({ f, weight: 700 });
  }
  console.log(`[glyphs] ${catalog.length} families, ${jobs.length} styles`);

  const results = new Array(jobs.length);
  let next = 0;
  let done = 0;
  async function worker() {
    while (next < jobs.length) {
      const i = next++;
      const { f, weight } = jobs[i];
      try {
        const buf = await fetchFont(f.id, weight);
        results[i] = buf ? await featuresFor(buf) : null;
      } catch (err) {
        console.warn(`[glyphs] ${f.family} ${weight}: ${err.message}`);
        results[i] = null;
      }
      if (++done % 200 === 0) console.log(`[glyphs] ${done}/${jobs.length}`);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  // Keep styles that rendered at least the lowercase alphabet.
  const rendered = jobs
    .map((job, i) => ({ ...job, features: results[i] }))
    .filter((j) => j.features && j.features.slice(0, 26).filter(Boolean).length >= 20);

  // Many families share one Latin design (e.g. the "Noto Sans <script>" families all reuse
  // Noto Sans). Collapse styles whose letters match at 4-bit precision and keep the
  // shortest family name, so duplicates don't crowd the results.
  const groups = new Map();
  for (const j of rendered) {
    const sig = j.features
      .map((f) => (f ? `${Math.round(f.aspect * 20)}:${Array.from(f.cells, (v) => Math.round(v * 15).toString(16)).join('')}` : '-'))
      .join('|');
    const key = `${j.weight}|${sig}`;
    const best = groups.get(key);
    if (!best || j.f.family.length < best.f.family.length) groups.set(key, j);
  }
  const keep = new Set(groups.values());
  const kept = rendered.filter((j) => keep.has(j));
  console.log(`[glyphs] ${rendered.length - kept.length} duplicate designs removed`);

  const fonts = kept.map(({ f, weight }) => [f.family, f.id, weight, f.category, f.license]);
  await writeFile(new URL('fonts.json', OUT), JSON.stringify({ grid: GRID, record: RECORD, em: EM, fonts }));

  for (let c = 0; c < CHARSET.length; c++) {
    const out = new Uint8Array(kept.length * RECORD);
    kept.forEach((j, i) => {
      const feat = j.features[c];
      if (feat) encodeRecord(feat, EM, out, i * RECORD);
    });
    await writeFile(new URL(charFile(CHARSET[c]), OUT), out);
  }
  console.log(`[glyphs] wrote ${kept.length} styles × ${CHARSET.length} characters`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
