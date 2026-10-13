// Accuracy check for the glyph matcher: renders sample text in random indexed fonts,
// degrades it (blur + JPEG), runs the same OCR + matching pipeline as the browser and
// reports where the true font family ranks.
//   node scripts/eval-matcher.mjs [--n=40] [--seed=1]
import { readFile } from 'node:fs/promises';
import * as fontkit from 'fontkit';
import sharp from 'sharp';
import { createWorker } from 'tesseract.js';
import { CHARSET, charFile } from '../src/lib/glyph-features.ts';
import { extractGlyphs, rankFonts, toInk } from '../src/lib/matcher.ts';

const arg = (name, def) => Number(process.argv.find((a) => a.startsWith(`--${name}=`))?.split('=')[1] ?? def);
const N = arg('n', 40);
let seed = arg('seed', 1);
const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);

const ROOT = new URL('../', import.meta.url);
const GLYPHS = new URL('public/glyphs/', ROOT);
const meta = JSON.parse(await readFile(new URL('fonts.json', GLYPHS), 'utf8'));
const records = new Map();
for (const ch of CHARSET) records.set(ch, new Uint8Array(await readFile(new URL(charFile(ch), GLYPHS))));

const SAMPLES = ['Handgloves Quiz 2048', 'The five boxing wizards jump', 'Bright Vixens Jump; Dozy Fowl', 'Grumpy Kings Fax 365'];

function renderSvg(font, text, em) {
  const run = font.layout(text);
  const scale = em / font.unitsPerEm;
  let x = em * 0.5;
  const base = em * 1.3;
  const paths = [];
  run.glyphs.forEach((g, i) => {
    const pos = run.positions[i];
    paths.push(`<path transform="translate(${x + pos.xOffset * scale} ${base - pos.yOffset * scale}) scale(${scale} ${-scale})" d="${g.path.toSVG()}"/>`);
    x += pos.xAdvance * scale;
  });
  const w = Math.ceil(x + em * 0.5);
  const h = Math.ceil(em * 1.8);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><rect width="100%" height="100%" fill="#f6f3ee"/><g fill="#1d1d1f">${paths.join('')}</g></svg>`;
}

const worker = await createWorker('eng');
const ranks = [];
const failures = [];

for (let t = 0; t < N; t++) {
  const fi = Math.floor(rand() * meta.fonts.length);
  const [family, id, weight] = meta.fonts[fi];
  const text = SAMPLES[t % SAMPLES.length];
  const em = 36 + Math.floor(rand() * 60);
  const blurSigma = 0.3 + rand() * 0.6;
  let jpeg;
  try {
    const font = fontkit.create(await readFile(new URL(`.cache/fonts/${id}-${weight}.woff2`, ROOT)));
    jpeg = await sharp(Buffer.from(renderSvg(font, text, em))).blur(blurSigma).jpeg({ quality: 70 }).toBuffer();
  } catch (err) {
    console.warn(`
  skipped ${family} ${weight}: ${err.message}`);
    continue;
  }
  // Same upscaling rule as the browser (src/scripts/detector.ts).
  const info = await sharp(jpeg).metadata();
  const scale = Math.min(4, Math.max(1, 1200 / Math.max(info.width, info.height)));
  const { data, info: out } = await sharp(jpeg)
    .resize(Math.round(info.width * scale), Math.round(info.height * scale))
    .greyscale()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const png = await sharp(data, { raw: { width: out.width, height: out.height, channels: 1 } }).png().toBuffer();

  const { data: page } = await worker.recognize(png, {}, { blocks: true });
  const lines = (page.blocks ?? []).flatMap((b) => b.paragraphs.flatMap((p) => p.lines));
  const symbols = lines.flatMap((l, line) => l.words.flatMap((w) => w.symbols.map((s) => ({ ...s, line }))));
  const glyphs = extractGlyphs(toInk(data, out.width, out.height), symbols, CHARSET);
  const ranked = rankFonts(meta, records, glyphs);
  const families = [...new Set(ranked.map((r) => meta.fonts[r.index][0]))];
  const rank = families.indexOf(family) + 1 || Infinity;
  ranks.push(rank);
  if (rank > 10) failures.push(`${family} ${weight} (${glyphs.length} glyphs, OCR "${page.text.trim()}") → rank ${rank}, top: ${families.slice(0, 3).join(', ')}`);
  process.stdout.write(rank <= 1 ? '1' : rank <= 5 ? '5' : rank <= 10 ? 'x' : '.');
}
await worker.terminate();

const pct = (k) => `${Math.round((100 * ranks.filter((r) => r <= k).length) / ranks.length)}%`;
const finite = ranks.filter(Number.isFinite).sort((a, b) => a - b);
console.log(`\n${ranks.length} samples: top1 ${pct(1)} · top5 ${pct(5)} · top10 ${pct(10)} · median rank ${finite[Math.floor(finite.length / 2)]}`);
for (const f of failures) console.log('  miss:', f);
