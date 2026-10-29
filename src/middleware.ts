import { env } from 'cloudflare:workers';
import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async ({ url, request }, next) => {
  // No account, admin, API or upload endpoints exist. Do not accept mutations.
  const privatePath = /(?:^|\/)(?:\.[^/]+|node_modules|src|admin|api|wp-admin|wp-login\.php)(?:\/|$)/i.test(url.pathname);
  const bindings = env as unknown as { PAGE_RATE_LIMITER?: { limit(options: { key: string }): Promise<{ success: boolean }> } };
  const ip = request.headers.get('CF-Connecting-IP');
  // No user identities exist; use a generous shared-IP limit for page rendering.
  const limited = ip && bindings.PAGE_RATE_LIMITER
    ? !(await bindings.PAGE_RATE_LIMITER.limit({ key: `fontfindertool:pages:${ip}` })).success : false;
  let response: Response;
  if (limited) response = new Response('Too many requests. Try again in a minute.', { status: 429, headers: { 'Retry-After': '60', 'Cache-Control': 'no-store' } });
  else if (privatePath && !url.pathname.startsWith('/.well-known/')) response = new Response('Not found', { status: 404 });
  else if (!['GET', 'HEAD'].includes(request.method)) response = new Response('Method not allowed', { status: 405, headers: { Allow: 'GET, HEAD' } });
  else response = await next();
  const headers = new Headers(response.headers);
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('X-Frame-Options', 'DENY');
  headers.set('Referrer-Policy', 'no-referrer');
  headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=(), usb=()');
  if (url.protocol === 'https:') headers.set('Strict-Transport-Security', 'max-age=31536000');
  // Inline scripts/styles support Astro's theme and dynamic font previews.
  headers.set('Content-Security-Policy', "default-src 'self'; base-uri 'none'; object-src 'none'; frame-ancestors 'none'; frame-src 'none'; form-action 'none'; script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval' https://cdn.jsdelivr.net; worker-src 'self' blob:; connect-src 'self' https://cdn.jsdelivr.net; font-src 'self' https://cdn.jsdelivr.net; img-src 'self' blob: data:; style-src 'self' 'unsafe-inline'");
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
});
