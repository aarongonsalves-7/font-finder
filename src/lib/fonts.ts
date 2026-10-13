import lookalikes from '../data/paid-lookalikes.json';

export const specimenUrl = (family: string) =>
  `https://fonts.google.com/specimen/${encodeURIComponent(family).replace(/%20/g, '+')}`;

export const previewUrl = (id: string, weight: number) =>
  `https://cdn.jsdelivr.net/fontsource/fonts/${id}@latest/latin-${weight}-normal.woff2`;

// Reverse of paid-lookalikes.json: free family → commercial fonts it resembles.
const similarTo = new Map<string, string[]>();
for (const [paid, free] of Object.entries(lookalikes as Record<string, string[]>)) {
  for (const family of free) similarTo.set(family, [...(similarTo.get(family) ?? []), paid]);
}

export const paidLookalikes = (family: string) => similarTo.get(family) ?? [];
