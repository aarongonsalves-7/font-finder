import en, { type Locale } from './locales/en';
import es from './locales/es';
import ja from './locales/ja';
import fr from './locales/fr';
import de from './locales/de';
import pt from './locales/pt';
import ko from './locales/ko';
import it from './locales/it';

/** Language codes double as URL prefixes and hreflang values. */
export const languages = {
  en: 'English',
  es: 'Español',
  ja: '日本語',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
  ko: '한국어',
  it: 'Italiano'
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

/** English stays at the root (/about); other languages get a prefix (/es/about). */
export const showDefaultLang = false;

export const ogLocales: Record<Lang, string> = {
  en: 'en_US',
  es: 'es_ES',
  ja: 'ja_JP',
  fr: 'fr_FR',
  de: 'de_DE',
  pt: 'pt_BR',
  ko: 'ko_KR',
  it: 'it_IT'
};

export const ui: Record<Lang, Locale> = { en, es, ja, fr, de, pt, ko, it };
