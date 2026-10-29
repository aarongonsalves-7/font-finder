# Font Finder Tool — fontfindertool.com

Identify fonts from an image and get the closest matches from the Google Fonts catalog, previewed in your own text, with license info and notes on which paid fonts each match resembles.

Astro 7 + Tailwind CSS v4. Pages are rendered on demand in a Cloudflare Worker (`@astrojs/cloudflare`, `output: 'server'`). No API keys are needed: font matching runs entirely in the visitor's browser.

## How matching works

1. The browser crops (and upscales small crops of) the image onto a canvas.
2. [Tesseract.js](https://github.com/naptha/tesseract.js) reads the text and returns a bounding box for every letter.
3. Each letter is normalised into a 12×12 shape bitmap plus its width and relative height (`src/lib/glyph-features.ts`). Only the most prominent line is used, so headline + caption images don't mix fonts.
4. The same features were precomputed for every Google Font (2,400+ styles: weight 400, plus 700 where available) into `public/glyphs/` — one file per character, so the browser downloads only the letters it saw.
5. `src/lib/matcher.ts` scores every style and the top 12 families are shown. Matches that resemble well-known commercial fonts are tagged using `src/data/paid-lookalikes.json`.

Images are never uploaded. First scan downloads ~3 MB of OCR language data, the OCR engine, and ~350 KB per distinct letter of index data; the browser caches all of it.

## Commands

| Command | Action |
| :-- | :-- |
| `astro dev --background` | Site deployed at https://www.fontfindertool.com |
| `npm run build` | Build the Worker (`./dist/server/`) and static assets (`./dist/client/`) |
| `npm run preview` | Preview the build in the local Workers runtime (`workerd`) |
| `npm run deploy` | Build and deploy the Worker to Cloudflare |
| `npm run glyphs` | Rebuild the glyph index from the current Google Fonts catalog (downloads ~2,700 font files into `.cache/`, a few minutes) |
| `npm run eval:matcher -- --n=150` | Accuracy check: renders sample text in random indexed fonts, degrades it and reports where the true font ranks |

Current accuracy on synthetic samples (150, blur + JPEG): exact family ranked first ~74%, in the top 10 ~87%. Misses are mostly flowing scripts and heavily decorative fonts that OCR can't read.

## Structure

- `src/components/Detector.astro` + `src/scripts/detector.ts` — upload / paste / crop / results UI
- `src/scripts/scan.ts` — OCR + index loading + ranking in the browser
- `src/lib/glyph-features.ts`, `src/lib/matcher.ts` — shared feature extraction and scoring (also used by the Node scripts)
- `scripts/build-glyph-index.mjs`, `scripts/eval-matcher.mjs` — index builder and accuracy check
- `src/pages/[slug].astro` + `src/data/landing.ts` — SEO landing pages
- `src/styles/global.css` — design tokens from `DESIGN.md` (light + dark)
