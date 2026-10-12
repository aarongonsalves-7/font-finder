// Shared between the /api/identify endpoint and the browser detector script.

export type FontKind = 'free' | 'paid';
export type Engine = 'whatfontis' | 'gemini' | 'demo';

export interface FreeFontRef {
  name: string;
  /** Fontsource woff2 file used for live previews. */
  previewUrl: string;
  url: string;
}

export interface FontMatch {
  name: string;
  kind: FontKind;
  /** 0–100 when the engine reports confidence, otherwise null. */
  confidence: number | null;
  category: string | null;
  /** Short human-readable license summary. */
  license: string;
  /** Where the font lives (Google Fonts, Fontsource, MyFonts…). */
  source: string;
  url: string;
  urlLabel: string;
  /** Free fonts: woff2 for rendering the user's text. */
  previewUrl: string | null;
  /** Paid fonts: sample image from the engine, if any. */
  sampleImage: string | null;
  /** Free lookalikes (filled for paid matches). */
  alternatives: FreeFontRef[];
}

export interface IdentifyResponse {
  engine: Engine;
  /** Text read from the image, if the engine reports it. */
  text: string | null;
  results: FontMatch[];
  remaining: number | null;
}

export interface IdentifyError {
  error: string;
  code: 'bad_request' | 'too_large' | 'rate_limited' | 'no_text' | 'unavailable';
}
