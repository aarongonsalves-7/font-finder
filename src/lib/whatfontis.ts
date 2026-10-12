import { findFreeFont, freeMatch } from './catalog';
import type { FontMatch } from './types';

// https://www.whatfontis.com/API-identify-fonts-from-image.html (API 2.2)
const ENDPOINT = 'https://www.whatfontis.com/api2/';

interface WfiFont {
  title: string;
  url: string;
  image?: string;
  image1?: string;
  image2?: string;
  type?: 'Commercial' | 'Free' | string;
  site?: string;
}

export class WhatFontIsError extends Error {
  constructor(
    message: string,
    /** True when the image itself is the problem (no text found, bad type) — no point retrying another engine. */
    readonly imageProblem = false
  ) {
    super(message);
  }
}

export async function identifyWithWhatFontIs(apiKey: string, base64: string): Promise<FontMatch[]> {
  const body = new URLSearchParams({
    API_KEY: apiKey,
    IMAGEBASE64: '1',
    urlimagebase64: base64,
    NOTTEXTBOXSDETECTION: '0',
    FREEFONTS: '0',
    limit: '20',
    mode: 'pro'
  });

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body
  });

  const raw = await res.text();
  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch {
    data = null;
  }

  if (!res.ok || !Array.isArray(data)) {
    // Error codes are returned either as HTTP status or in the body.
    const code = String(res.status !== 200 ? res.status : raw.trim().slice(0, 8));
    const imageProblem = ['4221', '4222', '4223'].some((c) => code.includes(c) || raw.includes(c));
    throw new WhatFontIsError(`WhatFontIs error ${code}`, imageProblem);
  }

  return (data as WfiFont[])
    .filter((f) => f?.title)
    .map((f): FontMatch => {
      const free = findFreeFont(f.title);
      if (free) return freeMatch(free, null);

      const isFree = f.type === 'Free';
      return {
        name: f.title,
        kind: isFree ? 'free' : 'paid',
        confidence: null,
        category: null,
        license: isFree
          ? 'Listed as free · check the license, some are personal-use only'
          : 'Commercial license required',
        source: f.site || 'WhatFontIs',
        url: f.url,
        urlLabel: isFree ? 'Get this font' : 'View & buy',
        previewUrl: null,
        sampleImage: f.image ?? null,
        alternatives: []
      };
    });
}
