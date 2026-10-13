import type { Locale } from '../i18n/locales/en';

type UiKey = keyof Locale['ui'];

// Labels are UI string keys; hrefs are language-neutral and get prefixed per language.
export const mainNav: { label: UiKey; href: string }[] = [
  { label: 'nav.howItWorks', href: '/#how-it-works' },
  { label: 'nav.freeFonts', href: '/free-font-finder' },
  { label: 'nav.logoFonts', href: '/logo-font-finder' },
  { label: 'nav.faq', href: '/#faq' }
];

export const footerNav: { title: UiKey; links: { label: UiKey; href: string }[] }[] = [
  {
    title: 'footer.tools',
    links: [
      { label: 'footer.fontFinder', href: '/' },
      { label: 'footer.whatFont', href: '/what-font-is-this' },
      { label: 'footer.freeFinder', href: '/free-font-finder' },
      { label: 'footer.googleFinder', href: '/google-font-finder' },
      { label: 'footer.logoFinder', href: '/logo-font-finder' }
    ]
  },
  {
    title: 'footer.resources',
    links: [
      { label: 'nav.howItWorks', href: '/#how-it-works' },
      { label: 'nav.faq', href: '/#faq' },
      { label: 'footer.about', href: '/about' },
      { label: 'footer.contact', href: '/contact' }
    ]
  },
  {
    title: 'footer.legal',
    links: [
      { label: 'footer.privacy', href: '/privacy' },
      { label: 'footer.terms', href: '/terms' }
    ]
  }
];
