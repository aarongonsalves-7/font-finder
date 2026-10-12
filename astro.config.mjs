// @ts-check
import { defineConfig, envField, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://fontfindertool.com',

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare({ imageService: 'passthrough' }),
  integrations: [sitemap()],

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
  ],

  env: {
    schema: {
      WHATFONTIS_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      GEMINI_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      GEMINI_MODEL: envField.string({ context: 'server', access: 'public', default: 'gemini-3-flash-preview' }),
      // Scans allowed per visitor IP per UTC day.
      DAILY_LIMIT: envField.number({ context: 'server', access: 'public', default: 10 }),
      // WhatFontIs free keys allow 200/day; keep a margin before switching to Gemini.
      WHATFONTIS_DAILY_CAP: envField.number({ context: 'server', access: 'public', default: 190 })
    }
  }
});
