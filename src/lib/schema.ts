import type { FaqItem } from '../i18n/locales/en';
import type { Lang } from '../i18n/ui';
import { useContent, useTranslatedPath } from '../i18n/utils';

const SITE = 'https://fontfindertool.com';

/** Absolute URL of a language-neutral path in the given language. */
const url = (lang: Lang, path = '/') => `${SITE}${useTranslatedPath(lang)(path)}`;

export const webAppSchema = (lang: Lang, path = '/') => {
  const { schema } = useContent(lang);
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Font Finder Tool',
    url: url(lang, path),
    inLanguage: lang,
    applicationCategory: 'DesignApplication',
    operatingSystem: 'Any',
    description: schema.webAppDescription,
    browserRequirements: schema.browserRequirements,
    isAccessibleForFree: true,
    featureList: schema.featureList,
    image: `${SITE}/og.png`,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
  };
};

export const websiteSchema = (lang: Lang) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Font Finder Tool',
  alternateName: 'Font Finder',
  url: url(lang),
  inLanguage: lang
});

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Font Finder Tool',
  url: SITE,
  logo: `${SITE}/favicon.svg`,
  email: 'hello@fontfindertool.com'
});

export const faqSchema = (items: FaqItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a }
  }))
});

export const breadcrumbSchema = (lang: Lang, name: string, path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Font Finder Tool', item: url(lang) },
    { '@type': 'ListItem', position: 2, name, item: url(lang, path) }
  ]
});
