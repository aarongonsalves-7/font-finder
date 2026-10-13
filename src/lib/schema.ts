import type { FaqItem } from '../data/faq';

const SITE = 'https://fontfindertool.com';

export const webAppSchema = (url = SITE) => ({
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Font Finder Tool',
  url,
  applicationCategory: 'DesignApplication',
  operatingSystem: 'Any',
  description:
    'Free AI font finder: upload an image to identify the font and get matching free Google Fonts, with live text previews and license info.',
  browserRequirements: 'Requires JavaScript and a modern web browser.',
  isAccessibleForFree: true,
  featureList: [
    'Find fonts by image: upload, drag in or paste a screenshot, photo or logo',
    'AI text recognition and shape matching against 1,900+ Google Fonts',
    'Preview every match in your own text',
    'Free alternatives to popular paid fonts',
    'License summary and download link for every result',
    'Runs in your browser: images are never uploaded'
  ],
  image: `${SITE}/og.png`,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
});

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Font Finder Tool',
  alternateName: 'Font Finder',
  url: SITE
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

export const breadcrumbSchema = (name: string, path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Font Finder Tool', item: SITE },
    { '@type': 'ListItem', position: 2, name, item: `${SITE}${path}` }
  ]
});
