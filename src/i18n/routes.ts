import en, { type Locale } from './locales/en';

export type LandingSlug = keyof Locale['landing'];
export type ProseSlug = keyof Locale['pages'];

export const landingSlugs = Object.keys(en.landing) as LandingSlug[];
export const proseSlugs = Object.keys(en.pages) as ProseSlug[];

export const isLandingSlug = (slug: string | undefined): slug is LandingSlug => !!slug && slug in en.landing;
export const isProseSlug = (slug: string | undefined): slug is ProseSlug => !!slug && slug in en.pages;

/** "Last updated" dates (ISO) for the legal pages. */
export const proseUpdated: Partial<Record<ProseSlug, string>> = {
  privacy: '2026-10-12',
  terms: '2026-10-12'
};

/** Every indexable page as a language-neutral path. */
export const pagePaths = ['/', ...proseSlugs.map((s) => `/${s}`), ...landingSlugs.map((s) => `/${s}`)];
