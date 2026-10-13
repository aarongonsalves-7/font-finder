import type { APIRoute } from 'astro';

// Kept for crawlers that still request the old @astrojs/sitemap URL; points at the single /sitemap.xml.
export const GET = (({ site }) => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${new URL('/sitemap.xml', site).href}</loc></sitemap>
</sitemapindex>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}) satisfies APIRoute;
