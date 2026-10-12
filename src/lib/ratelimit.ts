// Daily counters in Workers KV. KV is eventually consistent, so limits are approximate —
// good enough for fair-use caps, not for billing.

const TTL_SECONDS = 60 * 60 * 26;

export const today = () => new Date().toISOString().slice(0, 10);

/** Seconds until the next UTC midnight, when counters reset. */
export function secondsUntilReset() {
  const now = new Date();
  const next = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1);
  return Math.ceil((next - now.getTime()) / 1000);
}

export async function readCount(kv: KVNamespace | undefined, key: string): Promise<number> {
  if (!kv) return 0;
  try {
    return Number(await kv.get(`${key}:${today()}`)) || 0;
  } catch {
    return 0;
  }
}

export async function increment(kv: KVNamespace | undefined, key: string, current: number) {
  if (!kv) return;
  try {
    await kv.put(`${key}:${today()}`, String(current + 1), { expirationTtl: TTL_SECONDS });
  } catch {
    // KV write quota exhausted or unavailable: fail open rather than blocking scans.
  }
}
