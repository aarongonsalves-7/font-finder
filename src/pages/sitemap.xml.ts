import type { APIRoute } from 'astro';
import { landingPages } from '../data/landing';

// Top-level .astro pages, minus dynamic routes and error pages. Landing pages come from [slug].astro.
const staticPaths = Object.keys(import.meta.glob('./*.astro'))
  .map((file) => file.slice(2, -'.astro'.length))
  .filter((name) => !name.startsWith('[') && name !== '404' && name !== '500')
  .map((name) => (name === 'index' ? '/' : `/${name}/`));

const paths = [...staticPaths, ...landingPages.map((page) => `/${page.slug}/`)].sort();

export const GET = (({ site }) => {
  const urls = paths.map((path) => `  <url><loc>${new URL(path, site).href}</loc></url>`).join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}) satisfies APIRoute;
