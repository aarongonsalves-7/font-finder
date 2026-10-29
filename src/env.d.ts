// Only the binding used by this application; values are supplied by Cloudflare.
declare module 'cloudflare:workers' {
  export const env: {
    PAGE_RATE_LIMITER?: {
      limit(options: { key: string }): Promise<{ success: boolean }>;
    };
  };
}
