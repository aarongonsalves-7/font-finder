// Builds src/data/free-fonts.json from the Fontsource catalog (Google Fonts + other open fonts).
// Keeps the existing file if the network request fails so offline builds still work.
import { writeFile, access } from 'node:fs/promises';

const OUT = new URL('../src/data/free-fonts.json', import.meta.url);

try {
  const res = await fetch('https://api.fontsource.org/v1/fonts');
  if (!res.ok) throw new Error(`Fontsource responded ${res.status}`);
  const fonts = await res.json();

  // Compact rows: [id, family, category, license, source, weight, subset]
  const rows = fonts
    .filter((f) => f.id && f.family && f.weights?.length)
    .map((f) => {
      const weight = f.weights.includes(400) ? 400 : f.weights[0];
      const subset = f.subsets?.includes('latin') ? 'latin' : f.defSubset;
      return [f.id, f.family, f.category ?? 'other', f.license ?? '', f.type ?? 'other', weight, subset];
    })
    .sort((a, b) => a[1].localeCompare(b[1]));

  await writeFile(OUT, JSON.stringify(rows));
  console.log(`[catalog] wrote ${rows.length} free fonts`);
} catch (err) {
  try {
    await access(OUT);
    console.warn(`[catalog] ${err.message}; keeping existing catalog`);
  } catch {
    console.error(`[catalog] ${err.message} and no existing catalog found`);
    process.exit(1);
  }
}
