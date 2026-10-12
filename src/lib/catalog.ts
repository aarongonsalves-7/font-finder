import rows from '../data/free-fonts.json';
import paidAlternatives from '../data/paid-alternatives.json';
import type { FontMatch, FreeFontRef } from './types';

// [id, family, category, license, source, weight, subset] — see scripts/build-font-catalog.mjs
type Row = [string, string, string, string, string, number, string];

interface FreeFont {
  id: string;
  family: string;
  category: string;
  license: string;
  source: string;
  weight: number;
  subset: string;
}

const catalog = (rows as Row[]).map(
  ([id, family, category, license, source, weight, subset]): FreeFont => ({
    id, family, category, license, source, weight, subset
  })
);

export const normalize = (name: string) => name.toLowerCase().replace(/[^a-z0-9]/g, '');

const byKey = new Map(catalog.map((f) => [normalize(f.family), f]));
const byFamily = new Map(catalog.map((f) => [f.family, f]));

// Style/weight words engines append to family names ("Montserrat Bold Italic").
const STYLE_WORDS =
  /\b(thin|hairline|extra ?light|ultra ?light|light|book|regular|normal|roman|medium|semi ?bold|demi ?bold|bold|extra ?bold|ultra ?bold|heavy|black|italic|oblique|std|pro|lt|mt|ot|web)\b/gi;

const stripStyles = (name: string) => name.replace(STYLE_WORDS, ' ').replace(/\s+/g, ' ').trim();

export function findFreeFont(name: string): FreeFont | undefined {
  return byKey.get(normalize(name)) ?? byKey.get(normalize(stripStyles(name)));
}

export const previewUrl = (f: FreeFont) =>
  `https://cdn.jsdelivr.net/fontsource/fonts/${f.id}@latest/${f.subset}-${f.weight}-normal.woff2`;

export const downloadUrl = (f: FreeFont) =>
  f.source === 'google'
    ? `https://fonts.google.com/specimen/${encodeURIComponent(f.family).replace(/%20/g, '+')}`
    : `https://fontsource.org/fonts/${f.id}`;

const LICENSES: Record<string, string> = {
  'OFL-1.1': 'SIL Open Font License · free for personal & commercial use',
  'Apache-2.0': 'Apache 2.0 · free for personal & commercial use',
  'UFL-1.0': 'Ubuntu Font Licence · free for personal & commercial use',
  'CC0-1.0': 'Public domain (CC0) · free for any use',
  Unlicense: 'Public domain · free for any use',
  mit: 'MIT License · free for personal & commercial use'
};

export const licenseLabel = (f: FreeFont) => LICENSES[f.license] ?? `${f.license || 'Open'} license · free to use`;

const toRef = (f: FreeFont): FreeFontRef => ({ name: f.family, previewUrl: previewUrl(f), url: downloadUrl(f) });

// Popular free fonts per category, used when no curated lookalike exists.
const CATEGORY_FALLBACKS: Record<string, string[]> = {
  'sans-serif': ['Inter', 'Roboto', 'Open Sans'],
  serif: ['Merriweather', 'Playfair Display', 'Lora'],
  display: ['Bebas Neue', 'Oswald', 'Abril Fatface'],
  handwriting: ['Dancing Script', 'Pacifico', 'Caveat'],
  monospace: ['JetBrains Mono', 'Roboto Mono', 'IBM Plex Mono']
};

const alternativesMap = paidAlternatives as Record<string, string[]>;
const altKeys = Object.keys(alternativesMap).sort((a, b) => b.length - a.length);

/** Free lookalikes for a paid font: curated map first, then same-category popular fonts. */
export function freeAlternatives(name: string, category: string | null): FreeFontRef[] {
  const key = normalize(name);
  const curated = altKeys.find((k) => key.startsWith(k));
  const names = curated ? alternativesMap[curated] : category ? CATEGORY_FALLBACKS[category] ?? [] : [];
  return names.flatMap((n) => {
    const f = byFamily.get(n);
    return f ? [toRef(f)] : [];
  });
}

/** Build a result entry for a font found in the free catalog. */
export function freeMatch(f: FreeFont, confidence: number | null): FontMatch {
  return {
    name: f.family,
    kind: 'free',
    confidence,
    category: f.category,
    license: licenseLabel(f),
    source: f.source === 'google' ? 'Google Fonts' : 'Fontsource',
    url: downloadUrl(f),
    urlLabel: 'Download free',
    previewUrl: previewUrl(f),
    sampleImage: null,
    alternatives: []
  };
}

/** Fill alternatives for paid matches, preferring free fonts that the engine also returned. */
export function withAlternatives(results: FontMatch[]): FontMatch[] {
  const freeInResults = results
    .filter((r) => r.kind === 'free' && r.previewUrl)
    .map((r): FreeFontRef => ({ name: r.name, previewUrl: r.previewUrl!, url: r.url }));

  return results.map((r) => {
    if (r.kind === 'free') return r;
    let alts = freeAlternatives(r.name, r.category);
    if (!alts.length) alts = freeInResults.slice(0, 3);
    return { ...r, alternatives: alts };
  });
}

/** Drop repeated families (engines often return several weights of one font). */
export function dedupe(results: FontMatch[]): FontMatch[] {
  const seen = new Set<string>();
  return results.filter((r) => {
    const key = normalize(stripStyles(r.name));
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
