import lookalikes from '../data/paid-lookalikes.json';

export const specimenUrl = (family: string) =>
  `https://fonts.google.com/specimen/${encodeURIComponent(family).replace(/%20/g, '+')}`;

export const previewUrl = (id: string, weight: number) =>
  `https://cdn.jsdelivr.net/fontsource/fonts/${id}@latest/latin-${weight}-normal.woff2`;

const LICENSES: Record<string, string> = {
  'OFL-1.1': 'SIL Open Font License · free for personal & commercial use',
  'Apache-2.0': 'Apache 2.0 · free for personal & commercial use',
  'UFL-1.0': 'Ubuntu Font Licence · free for personal & commercial use'
};

export const licenseLabel = (license: string) =>
  LICENSES[license] ?? `${license || 'Open'} license · free to use`;

export const weightLabel = (weight: number) => (weight >= 700 ? 'Bold' : weight === 400 ? 'Regular' : String(weight));

// Reverse of paid-lookalikes.json: free family → commercial fonts it resembles.
const similarTo = new Map<string, string[]>();
for (const [paid, free] of Object.entries(lookalikes as Record<string, string[]>)) {
  for (const family of free) similarTo.set(family, [...(similarTo.get(family) ?? []), paid]);
}

export const paidLookalikes = (family: string) => similarTo.get(family) ?? [];

export const CATEGORY_LABELS: Record<string, string> = {
  'sans-serif': 'Sans',
  serif: 'Serif',
  display: 'Display',
  handwriting: 'Script',
  monospace: 'Mono'
};
