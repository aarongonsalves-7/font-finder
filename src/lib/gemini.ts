import { findFreeFont, freeMatch } from './catalog';
import type { FontMatch } from './types';

const CATEGORIES = ['sans-serif', 'serif', 'display', 'handwriting', 'monospace'] as const;

const PROMPT = `You are an expert typographer. Identify the typeface used for the most prominent text in this image.
Return ONLY JSON with this shape:
{"text": string, "candidates": [{"name": string, "category": "sans-serif"|"serif"|"display"|"handwriting"|"monospace", "confidence": number, "free": boolean}]}
Rules:
- "text": the visible text you read (max 60 characters), or "" if there is no text.
- Up to 8 candidates, most likely first. Use exact font family names without weights (e.g. "Montserrat", not "Montserrat Bold").
- Include both commercial fonts (e.g. Helvetica Neue, Gotham, Futura PT) and free fonts (Google Fonts) when they look alike.
- "confidence": 0-100, how closely the candidate matches the letterforms.
- "free": true only if the font is free (for example on Google Fonts).
- If there is no text, return {"text": "", "candidates": []}.`;

interface GeminiCandidate {
  name?: string;
  category?: string;
  confidence?: number;
  free?: boolean;
}

export async function identifyWithGemini(
  apiKey: string,
  model: string,
  base64: string,
  mimeType: string
): Promise<{ text: string | null; results: FontMatch[] }> {
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
    body: JSON.stringify({
      contents: [{ parts: [{ inline_data: { mime_type: mimeType, data: base64 } }, { text: PROMPT }] }],
      generationConfig: { responseMimeType: 'application/json', temperature: 0.2 }
    })
  });

  if (!res.ok) throw new Error(`Gemini error ${res.status}: ${(await res.text()).slice(0, 200)}`);

  const data = (await res.json()) as {
    candidates?: { content?: { parts?: { text?: string }[] } }[];
  };
  const json = data.candidates?.[0]?.content?.parts?.map((p) => p.text ?? '').join('') ?? '';

  let parsed: { text?: string; candidates?: GeminiCandidate[] };
  try {
    parsed = JSON.parse(json.replace(/^```(?:json)?|```$/g, '').trim());
  } catch {
    throw new Error('Gemini returned invalid JSON');
  }

  const results = (parsed.candidates ?? [])
    .filter((c): c is GeminiCandidate & { name: string } => typeof c.name === 'string' && c.name.trim() !== '')
    .map((c): FontMatch => {
      const confidence =
        typeof c.confidence === 'number' ? Math.max(0, Math.min(100, Math.round(c.confidence))) : null;
      const category = CATEGORIES.includes(c.category as (typeof CATEGORIES)[number]) ? c.category! : null;

      const free = findFreeFont(c.name);
      if (free) return freeMatch(free, confidence);

      const name = c.name.trim();
      return {
        name,
        kind: c.free ? 'free' : 'paid',
        confidence,
        category,
        license: c.free
          ? 'Reported as free · check the license before commercial use'
          : 'Commercial license required',
        source: 'Font foundries',
        url: `https://www.google.com/search?q=${encodeURIComponent(`${name} font license`)}`,
        urlLabel: c.free ? 'Find this font' : 'Where to buy',
        previewUrl: null,
        sampleImage: null,
        alternatives: []
      };
    });

  return { text: parsed.text?.trim() || null, results };
}
