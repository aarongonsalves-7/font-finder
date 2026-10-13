// Glyph shape features shared by the index builder (scripts/build-glyph-index.ts) and the
// in-browser matcher, so both sides compute exactly the same thing.
// Plain erasable TypeScript only: Node runs this file directly with type stripping.

/** Grid size of the normalised glyph bitmap. */
export const GRID = 12;
export const CELLS = GRID * GRID;
/** Bytes per glyph record in an index file: [height, aspect, ...cells]. */
export const RECORD = 2 + CELLS;

/** Characters indexed per font. File names use the char code (Windows is case-insensitive). */
export const CHARSET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
export const charFile = (ch: string) => `u${ch.charCodeAt(0).toString(16).padStart(4, '0')}.bin`;

export interface InkImage {
  /** Ink coverage per pixel, 0 (background) .. 1 (ink). */
  ink: Float32Array;
  width: number;
  height: number;
}

export interface Box {
  x0: number;
  y0: number;
  /** exclusive */
  x1: number;
  /** exclusive */
  y1: number;
}

export interface GlyphFeature {
  /** Ink box height in pixels (compared as ratios between glyphs, so units don't matter). */
  height: number;
  /** Ink box width / height. */
  aspect: number;
  /** GRID×GRID blurred ink coverage, 0..1. */
  cells: Float32Array;
}

/** Tighten a box to the pixels whose ink exceeds `threshold`. Returns null if empty. */
export function inkBounds(img: InkImage, box: Box, threshold = 0.5): Box | null {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (let y = Math.max(0, box.y0); y < Math.min(img.height, box.y1); y++) {
    for (let x = Math.max(0, box.x0); x < Math.min(img.width, box.x1); x++) {
      if (img.ink[y * img.width + x] > threshold) {
        if (x < x0) x0 = x;
        if (x > x1) x1 = x;
        if (y < y0) y0 = y;
        if (y > y1) y1 = y;
      }
    }
  }
  return x1 < x0 ? null : { x0, y0, x1: x1 + 1, y1: y1 + 1 };
}

/** Area-average the ink inside `box` onto a GRID×GRID bitmap, then blur slightly. */
export function glyphFeature(img: InkImage, box: Box): GlyphFeature {
  const w = box.x1 - box.x0;
  const h = box.y1 - box.y0;
  const cells = new Float32Array(CELLS);

  for (let gy = 0; gy < GRID; gy++) {
    const sy0 = box.y0 + (gy * h) / GRID;
    const sy1 = box.y0 + ((gy + 1) * h) / GRID;
    for (let gx = 0; gx < GRID; gx++) {
      const sx0 = box.x0 + (gx * w) / GRID;
      const sx1 = box.x0 + ((gx + 1) * w) / GRID;
      cells[gy * GRID + gx] = areaAverage(img, sx0, sy0, sx1, sy1);
    }
  }

  return { height: h, aspect: w / h, cells: blur(cells) };
}

/** Mean ink over a fractional rectangle (handles boxes smaller or larger than the grid). */
function areaAverage(img: InkImage, x0: number, y0: number, x1: number, y1: number): number {
  let sum = 0;
  let area = 0;
  for (let y = Math.floor(y0); y < Math.ceil(y1); y++) {
    const fy = Math.min(y + 1, y1) - Math.max(y, y0);
    if (fy <= 0 || y < 0 || y >= img.height) continue;
    for (let x = Math.floor(x0); x < Math.ceil(x1); x++) {
      const fx = Math.min(x + 1, x1) - Math.max(x, x0);
      if (fx <= 0 || x < 0 || x >= img.width) continue;
      sum += img.ink[y * img.width + x] * fx * fy;
      area += fx * fy;
    }
  }
  return area ? sum / area : 0;
}

/** 3×3 [1 2 1] blur so small misalignments don't dominate the distance. */
function blur(src: Float32Array): Float32Array {
  const out = new Float32Array(CELLS);
  const k = [1, 2, 1];
  for (let y = 0; y < GRID; y++) {
    for (let x = 0; x < GRID; x++) {
      let sum = 0;
      let wsum = 0;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const yy = y + dy;
          const xx = x + dx;
          if (yy < 0 || yy >= GRID || xx < 0 || xx >= GRID) continue;
          const wgt = k[dy + 1] * k[dx + 1];
          sum += src[yy * GRID + xx] * wgt;
          wsum += wgt;
        }
      }
      out[y * GRID + x] = sum / wsum;
    }
  }
  return out;
}

// ---------- byte encoding for index files ----------

const LOG_RANGE = 3; // aspect and height ratios stored over e^-3 .. e^3

/** Encode a positive ratio as 1..255 on a log scale (0 means "glyph missing"). */
export const encodeRatio = (v: number) =>
  Math.max(1, Math.min(255, Math.round(((Math.log(v) + LOG_RANGE) / (2 * LOG_RANGE)) * 254) + 1));

export const decodeLogRatio = (b: number) => ((b - 1) / 254) * (2 * LOG_RANGE) - LOG_RANGE;

export function encodeRecord(f: GlyphFeature, emHeight: number, out: Uint8Array, offset: number) {
  out[offset] = encodeRatio(f.height / emHeight);
  out[offset + 1] = encodeRatio(f.aspect);
  for (let i = 0; i < CELLS; i++) out[offset + 2 + i] = Math.round(f.cells[i] * 255);
}
