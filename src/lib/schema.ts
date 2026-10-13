import type { FaqItem } from '../data/faq';

const SITE = 'https://fontfindertool.com';

export const webAppSchema = (url = SITE) => ({
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Font Finder Tool',
  url,
  applicationCategory: 'DesignApplication',
  operatingSystem: 'Any',
  description: 'Identify fonts from images and find matching free Google Fonts, with live previews and license info.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
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

export const breadcrumbSchema = (name: string, path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Font Finder Tool', item: SITE },
    { '@type': 'ListItem', position: 2, name, item: `${SITE}${path}` }
  ]
});
