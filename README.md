# Font Finder Tool — fontfindertool.com

Identify fonts from an image, with free and paid matches, a one-tap **Free only** filter, live previews in your own text, license summaries and free lookalikes for commercial fonts.

Astro 7 + Tailwind CSS v4, deployed to Cloudflare Workers. Pages are prerendered; only `POST /api/identify` runs on the Worker.

## How detection works

1. The browser crops/downscales the image and posts it to `/api/identify`.
2. **WhatFontIs API** (free key: 200 identifications/day) is used first, until `WHATFONTIS_DAILY_CAP` is reached.
3. **Gemini** (free tier) is the fallback when the quota is used up or WhatFontIs fails.
4. Results are cross-checked against the Fontsource catalog (`src/data/free-fonts.json`, all Google Fonts + other open fonts) to mark fonts Free/Paid, add licenses, download links and preview files. Paid fonts get free lookalikes from `src/data/paid-alternatives.json`.
5. Per-IP daily limits (`DAILY_LIMIT`, default 10) are stored in the `RATE_KV` KV namespace. Images are never stored.

With no API keys, `astro dev` returns demo results so the UI can be tested.

## Setup

```sh
npm install
cp .dev.vars.example .dev.vars   # add WHATFONTIS_API_KEY and/or GEMINI_API_KEY
astro dev --background           # http://localhost:4321
```

| Command | Action |
| :-- | :-- |
| `npm run catalog` | Refresh `src/data/free-fonts.json` from Fontsource (also runs before every build) |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview the build in the Workers runtime |
| `npm run deploy` | Build and deploy with Wrangler |
| `npm run generate-types` | Regenerate `worker-configuration.d.ts` after editing `wrangler.jsonc` |

## Deploy

```sh
npx wrangler login
npx wrangler secret put WHATFONTIS_API_KEY
npx wrangler secret put GEMINI_API_KEY
npm run deploy
```

Optional overrides (as Worker variables): `GEMINI_MODEL`, `DAILY_LIMIT`, `WHATFONTIS_DAILY_CAP`.

## Structure

- `src/components/Detector.astro` + `src/scripts/detector.ts` — upload / paste / crop / results UI
- `src/pages/api/identify.ts` — detection endpoint; engines in `src/lib/`
- `src/pages/[slug].astro` + `src/data/landing.ts` — SEO landing pages
- `src/styles/global.css` — design tokens from `DESIGN.md`
