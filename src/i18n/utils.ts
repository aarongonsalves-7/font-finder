import { defaultLang, languages, showDefaultLang, ui, type Lang } from './ui';
import type { Locale } from './locales/en';

export const langs = Object.keys(languages) as Lang[];

export const isLang = (value: string | undefined): value is Lang => !!value && value in languages;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  return isLang(lang) ? lang : defaultLang;
}

/** Flat UI strings, falling back to English for any missing key. */
export function useTranslations(lang: Lang) {
  const localized: Partial<Locale['ui']> = ui[lang].ui;
  return function t(key: keyof Locale['ui'], vars: Record<string, string | number> = {}) {
    return format(localized[key] ?? ui[defaultLang].ui[key], vars);
  };
}

/** Structured page content (FAQ, landing pages, prose pages) for a language. */
export const useContent = (lang: Lang) => ui[lang];

/** Prefix a root-relative path ("/about", "/#faq") with a language. */
export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, l: Lang = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}

/** The language-neutral path of a URL: "/es/about" → "/about", "/es/" → "/". */
export function stripLang(pathname: string): string {
  const [, first, ...rest] = pathname.split('/');
  if (!isLang(first)) return pathname;
  return `/${rest.join('/')}`;
}

/** Every language version of a language-neutral path, for hreflang links and the sitemap. */
export function alternates(path: string, site: URL | string) {
  return langs.map((lang) => ({ lang, href: new URL(useTranslatedPath(lang)(path), site).href }));
}

/** Point the root-relative links inside translated HTML at the same language. */
export function localizeHtml(html: string, lang: Lang): string {
  const translatePath = useTranslatedPath(lang);
  return html.replace(/href="(\/[^"]*)"/g, (_, path: string) => `href="${translatePath(path)}"`);
}

/** Fill `{name}` placeholders. */
export function format(template: string, vars: Record<string, string | number> = {}): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in vars ? String(vars[key]) : match));
}

/** Split "Drop an image, or *browse*" into the text before, inside and after the marked part. */
export function splitMarked(text: string): [string, string, string] {
  const [before = '', marked = '', after = ''] = text.split('*');
  return [before, marked, after];
}
