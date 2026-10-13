import type { APIRoute } from 'astro';
import { defaultLang } from '../i18n/ui';
import { alternates } from '../i18n/utils';
import { pagePaths } from '../i18n/routes';

// One <url> per page per language, each listing every language version (plus x-default) as
// hreflang alternates, so search engines pair the translations.
export const GET = (({ site }) => {
  const urls = pagePaths.flatMap((path) => {
    const alts = alternates(path, site!);
    const links = [
      ...alts.map((alt) => `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${alt.href}"/>`),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${alts.find((alt) => alt.lang === defaultLang)!.href}"/>`
    ].join('\n');
    return alts.map((alt) => `  <url>\n    <loc>${alt.href}</loc>\n${links}\n  </url>`);
  });
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}) satisfies APIRoute;
