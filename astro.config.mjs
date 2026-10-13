// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
// Pages render on demand in a Cloudflare Worker. Font matching still runs in the browser
// against the prebuilt index in public/glyphs, which is served as static assets.
export default defineConfig({
  site: 'https://fontfindertool.com',

  output: 'server',
  // No <Image>/<Picture> usage, so skip the Cloudflare Images binding.
  adapter: cloudflare({ imageService: 'passthrough' }),
  // No sessions are used, so skip the KV binding the adapter would otherwise provision.
  session: false,

  vite: {
    plugins: [tailwindcss()]
  },

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Geist',
      cssVariable: '--font-geist',
      weights: [400, 500, 600],
      styles: ['normal'],
      fallbacks: ['Arial', 'sans-serif']
    },
    {
      provider: fontProviders.google(),
      name: 'Geist Mono',
      cssVariable: '--font-geist-mono',
      weights: [400, 500],
      styles: ['normal'],
      fallbacks: ['ui-monospace', 'monospace']
    }
  ]
});
