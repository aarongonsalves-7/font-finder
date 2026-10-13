import type { FaqItem } from './faq';

export interface LandingPage {
  slug: string;
  /** <title> and meta description */
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  eyebrow: string;
  h1: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  faq: FaqItem[];
}

export const landingPages: LandingPage[] = [
  {
    slug: 'what-font-is-this',
    metaTitle: 'What Font Is This? Identify a Font from a Picture — Font Finder Tool',
    metaDescription:
      'Wondering “what font is this?” Upload a picture or screenshot and get the closest free Google Fonts, previewed in your own text.',
    breadcrumb: 'What font is this?',
    eyebrow: 'What font is this?',
    h1: 'What font is this? Find out from a picture',
    intro: 'Seen a font on a poster, a website or a menu? Snap it, upload it and get a ranked list of matching typefaces in seconds.',
    sections: [
      {
        heading: 'Answer “what font is this?” in three steps',
        body: [
          'Upload or paste your image, drag a box around the words, and press Identify font. We compare the shape and proportions of each letter — stroke weight, x-height, width and detail — against every font on Google Fonts.',
          'Every result is rendered in your own text so you can check the details that tell similar fonts apart: the tail of the “g”, the leg of the “R”, the shape of the numerals.'
        ]
      },
      {
        heading: 'Where the font usually comes from',
        body: [
          'Websites and apps often use free Google Fonts like Inter, Roboto and Montserrat — those you can match exactly. Print, packaging and brand work more often use commercial families like Helvetica Neue, Gotham or Futura; for those you get the closest free alternatives, and cards note which paid fonts they resemble.'
        ]
      }
    ],
    faq: [
      {
        q: 'Why does the top result look slightly different?',
        a: 'Many fonts are near-identical, and images can blur fine details. Check the second and third matches too, and compare them using the live preview with your own text.'
      },
      {
        q: 'Can I identify a font from a photo taken on my phone?',
        a: 'Yes. Hold the camera straight-on to the text, avoid glare, and crop to a single line before scanning for the best accuracy.'
      }
    ]
  },
  {
    slug: 'free-font-finder',
    metaTitle: 'Free Font Finder — Find Free Fonts from an Image | Font Finder Tool',
    metaDescription:
      'Find free fonts from any image. Every match is a free Google Font licensed for commercial use, with free alternatives to popular paid fonts.',
    breadcrumb: 'Free font finder',
    eyebrow: 'Free font finder',
    h1: 'Find free fonts that match any image',
    intro: 'Every result is a free, open-source Google Font you can download and use today — including in commercial work.',
    sections: [
      {
        heading: 'Free fonts you can actually use',
        body: [
          'Most free matches come from Google Fonts and Fontsource, released under the SIL Open Font License or Apache 2.0. Both allow personal and commercial use, including logos, websites and print.',
          'Each card shows the license so you know where you stand before you download.'
        ]
      },
      {
        heading: 'When the original font is paid',
        body: [
          'If the image uses a commercial typeface, you get the closest free fonts instead. Cards flag well-known paid fonts they resemble — Inter or Arimo for Helvetica, Montserrat for Gotham, Jost for Futura, and many more.'
        ]
      }
    ],
    faq: [
      {
        q: 'Are Google Fonts free for commercial use?',
        a: 'Yes. Google Fonts are released under open licenses (mostly OFL) that allow commercial use, modification and embedding.'
      },
      {
        q: 'What if the font in my image is a paid font?',
        a: 'You will see the most similar free Google Fonts. They will not be identical, but they are chosen by comparing the actual letter shapes, so they are the closest free stand-ins.'
      }
    ]
  },
  {
    slug: 'logo-font-finder',
    metaTitle: 'Logo Font Finder — Identify the Font in Any Logo | Font Finder Tool',
    metaDescription:
      'Find the font used in a logo. Upload the logo, crop the wordmark and get the closest free Google Fonts with license details.',
    breadcrumb: 'Logo font finder',
    eyebrow: 'Logo font finder',
    h1: 'Identify the font in any logo',
    intro: 'Upload a logo, crop the wordmark and see which typefaces come closest — with free alternatives for brand-style lettering.',
    sections: [
      {
        heading: 'Getting a clean logo scan',
        body: [
          'Crop away icons and taglines and keep just the name. If the logo is light on dark, that works too. Higher-resolution files (SVG exports or large PNGs) give more reliable matches than small favicons.'
        ]
      },
      {
        heading: 'Custom lettering and modified fonts',
        body: [
          'Many brands start from a typeface and then adjust spacing, cut letters or draw custom glyphs. In that case there is no exact match, but the closest base fonts are still the best starting point for a similar look.',
          'Remember that a font license does not give you rights to a brand’s trademark — use matches for inspiration, not imitation.'
        ]
      }
    ],
    faq: [
      {
        q: 'Can I use the same font as a famous logo?',
        a: 'You can use the font if you license it properly, but you cannot copy a protected logo or trademark. Use the font to build your own distinct design.'
      },
      {
        q: 'Why are there no exact matches for my logo?',
        a: 'The logo is probably custom-drawn or heavily modified. The results show the closest typefaces you can use instead.'
      }
    ]
  },
  {
    slug: 'google-font-finder',
    metaTitle: 'Google Font Finder — Find a Google Font from an Image | Font Finder Tool',
    metaDescription:
      'Find the Google Font in any image. Upload a screenshot and get matching Google Fonts with live previews and one-click download links.',
    breadcrumb: 'Google Font finder',
    eyebrow: 'Google Font finder',
    h1: 'Find the Google Font in any image',
    intro: 'Upload a screenshot of a website, app or slide and get the matching Google Fonts — previewed in your text, one click from download.',
    sections: [
      {
        heading: 'Search 1,900+ Google Fonts by image',
        body: [
          'Free matches link straight to the Google Fonts specimen page, where you can download the family or copy the embed code for your website.',
          'Because Google Fonts are open source, you can use them for personal and commercial projects, including apps and client work.'
        ]
      },
      {
        heading: 'Close isn’t always identical',
        body: [
          'Families like Inter, Roboto and Arimo look similar at small sizes. Type a word with distinctive letters — “Rag 1984”, for example — into the preview box to compare them properly.'
        ]
      }
    ],
    faq: [
      {
        q: 'How do I add a Google Font to my website?',
        a: 'Open the result’s Google Fonts page, select the styles you need and copy the provided <link> or @import code into your site.'
      },
      {
        q: 'Does this find fonts that are not on Google Fonts?',
        a: 'No — matches always come from Google Fonts, so they are free to use. For commercial fonts you get the closest free alternatives.'
      }
    ]
  }
];
