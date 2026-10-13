// Result shapes used by the browser detector.

export type Category = 'sans-serif' | 'serif' | 'display' | 'handwriting' | 'monospace';

export interface FontMatch {
  name: string;
  weight: number;
  category: Category | string;
  /** Short human-readable license summary. */
  license: string;
  /** Google Fonts specimen page. */
  url: string;
  /** Fontsource woff2 used for the live preview. */
  previewUrl: string;
  /** Closeness relative to the best match, e.g. "Very close". */
  match: string;
  /** Well-known commercial fonts this free font resembles. */
  similarTo: string[];
}

export interface ScanResult {
  /** Text read from the image. */
  text: string | null;
  /** Number of letters compared. */
  letters: number;
  results: FontMatch[];
}
