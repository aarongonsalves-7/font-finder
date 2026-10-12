import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import {
  DAILY_LIMIT,
  GEMINI_API_KEY,
  GEMINI_MODEL,
  WHATFONTIS_API_KEY,
  WHATFONTIS_DAILY_CAP
} from 'astro:env/server';
import { dedupe, findFreeFont, freeMatch, withAlternatives } from '../../lib/catalog';
import { identifyWithGemini } from '../../lib/gemini';
import { increment, readCount, secondsUntilReset } from '../../lib/ratelimit';
import type { Engine, FontMatch, IdentifyError, IdentifyResponse } from '../../lib/types';
import { identifyWithWhatFontIs, WhatFontIsError } from '../../lib/whatfontis';

export const prerender = false;

const MAX_BASE64 = 2_000_000; // ~1.5 MB image
const MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

const json = (body: IdentifyResponse | IdentifyError, status = 200, headers: Record<string, string> = {}) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', ...headers }
  });

export const POST: APIRoute = async ({ request, clientAddress }) => {
  let payload: { image?: unknown; mimeType?: unknown };
  try {
    payload = await request.json();
  } catch {
    return json({ error: 'Send a JSON body with an image.', code: 'bad_request' }, 400);
  }

  const image = typeof payload.image === 'string' ? payload.image : '';
  const mimeType = typeof payload.mimeType === 'string' ? payload.mimeType : 'image/jpeg';
  if (image.length < 100 || !MIME_TYPES.includes(mimeType) || !/^[A-Za-z0-9+/=]+$/.test(image.slice(0, 200))) {
    return json({ error: 'Upload a JPG, PNG or WebP image.', code: 'bad_request' }, 400);
  }
  if (image.length > MAX_BASE64) {
    return json({ error: 'That image is too large. Try cropping it.', code: 'too_large' }, 413);
  }

  const kv = env.RATE_KV;
  const ip = request.headers.get('cf-connecting-ip') ?? clientAddress ?? 'unknown';
  const used = await readCount(kv, `ip:${ip}`);
  if (used >= DAILY_LIMIT) {
    const retry = secondsUntilReset();
    return json(
      { error: `You've used all ${DAILY_LIMIT} free scans for today. They reset in ${retry < 3600 ? `${Math.ceil(retry / 60)} min` : `${Math.round(retry / 3600)}h`}.`, code: 'rate_limited' },
      429,
      { 'Retry-After': String(retry) }
    );
  }

  let engine: Engine | null = null;
  let text: string | null = null;
  let results: FontMatch[] = [];

  // 1. WhatFontIs while the shared daily key quota lasts.
  const wfiUsed = WHATFONTIS_API_KEY ? await readCount(kv, 'wfi') : Infinity;
  if (WHATFONTIS_API_KEY && wfiUsed < WHATFONTIS_DAILY_CAP) {
    try {
      results = await identifyWithWhatFontIs(WHATFONTIS_API_KEY, image);
      engine = 'whatfontis';
    } catch (err) {
      if (err instanceof WhatFontIsError && err.imageProblem && !GEMINI_API_KEY) {
        return json({ error: "We couldn't find any text in that image. Try cropping closer to the letters.", code: 'no_text' }, 422);
      }
      console.warn('[identify] WhatFontIs failed, falling back', err);
    } finally {
      await increment(kv, 'wfi', wfiUsed);
    }
  }

  // 2. Gemini as fallback (or when WhatFontIs returned nothing).
  if ((!engine || !results.length) && GEMINI_API_KEY) {
    try {
      ({ text, results } = await identifyWithGemini(GEMINI_API_KEY, GEMINI_MODEL, image, mimeType));
      engine = 'gemini';
    } catch (err) {
      console.error('[identify] Gemini failed', err);
    }
  }

  // 3. Local development without keys: sample results so the UI can be exercised.
  if (!engine && import.meta.env.DEV && !WHATFONTIS_API_KEY && !GEMINI_API_KEY) {
    ({ text, results } = demoResults());
    engine = 'demo';
  }

  if (!engine) {
    return json({ error: 'Font detection is temporarily unavailable. Please try again in a minute.', code: 'unavailable' }, 503);
  }
  if (!results.length) {
    return json({ error: "We couldn't recognise a font in that image. Try a tighter crop around one line of text.", code: 'no_text' }, 422);
  }

  await increment(kv, `ip:${ip}`, used);

  return json({
    engine,
    text,
    results: withAlternatives(dedupe(results)).slice(0, 12),
    remaining: kv ? Math.max(0, DAILY_LIMIT - used - 1) : null
  });
};

function demoResults(): { text: string; results: FontMatch[] } {
  const free = ['Inter', 'Roboto', 'Arimo'].flatMap((n, i) => {
    const f = findFreeFont(n);
    return f ? [freeMatch(f, 88 - i * 9)] : [];
  });
  const paid: FontMatch = {
    name: 'Helvetica Neue',
    kind: 'paid',
    confidence: 93,
    category: 'sans-serif',
    license: 'Commercial license required',
    source: 'Linotype',
    url: 'https://www.google.com/search?q=Helvetica+Neue+font+license',
    urlLabel: 'Where to buy',
    previewUrl: null,
    sampleImage: null,
    alternatives: []
  };
  return { text: 'Find any font', results: [paid, ...free] };
}
