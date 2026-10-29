// English source strings. Every other locale must match this shape (see `Locale`).
// Notes for translators:
// - `{name}` style placeholders are filled in at runtime; keep them as is.
// - `*text*` marks the highlighted part of a sentence; keep exactly one pair.
// - `html` fields are trusted markup: keep the tags, and keep internal links as root paths
//   (href="/about"); they are rewritten to the page's language automatically.

export interface ComparisonRow {
  label: string;
  ours: string | boolean;
  theirs: string | boolean;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface LandingContent {
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  eyebrow: string;
  h1: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  faq: FaqItem[];
}

export interface ProseContent {
  title: string;
  description: string;
  heading: string;
  html: string;
}

const en = {
  ui: {
    'site.skip': 'Skip to content',
    'site.logoLabel': 'Font Finder Tool home',
    'site.tagline': 'Identify fonts from any image and find the matching free Google Font.',
    'site.ogImageAlt': 'Font Finder Tool: free font finder that identifies fonts from any image',

    'nav.main': 'Main',
    'nav.mobile': 'Mobile',
    'nav.openMenu': 'Open menu',
    'nav.howItWorks': 'How it works',
    'nav.freeFonts': 'Free fonts',
    'nav.logoFonts': 'Logo fonts',
    'nav.faq': 'FAQ',
    'nav.findFont': 'Find a font',

    'footer.tools': 'Tools',
    'footer.resources': 'Resources',
    'footer.legal': 'Legal',
    'footer.fontFinder': 'Font finder',
    'footer.whatFont': 'What font is this?',
    'footer.freeFinder': 'Free font finder',
    'footer.googleFinder': 'Google Font finder',
    'footer.logoFinder': 'Logo font finder',
    'footer.about': 'About us',
    'footer.contact': 'Contact us',
    'footer.privacy': 'Privacy policy',
    'footer.terms': 'Terms & conditions',
    'footer.fontsFrom': 'Fonts from',
    'footer.via': 'via',

    'lang.label': 'Language',

    'theme.label': 'Color theme',
    'theme.system': 'System',
    'theme.light': 'Light',
    'theme.dark': 'Dark',
    'theme.toDark': 'Switch to dark theme',
    'theme.toLight': 'Switch to light theme',

    'hero.fonts': '1,900+ Google Fonts',
    'hero.crop': 'Crop to the exact text',
    'hero.browser': 'Runs in your browser',

    'faq.eyebrow': 'FAQ',
    'faq.title': 'Frequently asked questions',
    'faq.landingTitle': '{name}: common questions',

    'prose.updated': 'Last updated {date}',

    'compare.yes': 'Yes',
    'compare.no': 'No',

    'detector.drop': 'Drop an image, paste it, or *browse*',
    'detector.tap': 'Tap to *choose a photo or screenshot*',
    'detector.dropHint': 'Screenshots, logos, posters, photos · processed on your device',
    'detector.pasteHint': 'to paste from clipboard',
    'detector.cropHint': '*Drag over the text* you want to identify. One line works best.',
    'detector.useWhole': 'Use whole image',
    'detector.uploadedAlt': 'Your uploaded image',
    'detector.chooseAnother': 'Choose another image',
    'detector.identify': 'Identify font',
    'detector.reading': 'Reading the letters…',
    'detector.thumbAlt': 'Scanned image',
    'detector.matches': 'Matches',
    'detector.copyList': 'Copy list',
    'detector.newScan': 'New scan',
    'detector.filterLabel': 'Filter by style',
    'detector.previewLabel': 'Preview text',
    'detector.previewPlaceholder': 'Type to preview',
    'detector.footnote': 'Matched on your device against the Google Fonts catalog. Your image never leaves your browser.',
    'detector.recent': 'Recent scans',
    'detector.clear': 'Clear',
    'detector.free': 'Free',
    'detector.altTo': 'Free alternative to',
    'detector.similarLabel': 'Similar commercial fonts',
    'detector.getOnGoogle': 'Get on Google Fonts',
    'detector.copyName': 'Copy name'
  },

  /** Strings used by the in-browser detector script. */
  client: {
    notImage: 'That file is not an image. Try a PNG, JPG or WebP.',
    tooLarge: 'That image is over 15 MB. Try a screenshot or a smaller export.',
    unreadable: 'Could not read that image.',
    generic: 'Something went wrong. Please try again.',
    indexError: 'Could not load the font index.',
    tooFewLetters: "We couldn't read enough letters. Try a tighter crop around one line of clear text.",
    loadingReader: 'Loading the text reader…',
    readingLetters: 'Reading the letters…',
    comparing: 'Comparing {letters} letters with {fonts} Google Fonts…',
    resultsOne: '{n} free font match',
    resultsMany: '{n} free font matches',
    lettersCompared: '{n} letters compared',
    readText: 'read “{text}”',
    all: 'All',
    categories: {
      'sans-serif': 'Sans',
      serif: 'Serif',
      display: 'Display',
      handwriting: 'Script',
      monospace: 'Mono'
    },
    regular: 'Regular',
    bold: 'Bold',
    match: {
      best: 'Best match',
      veryClose: 'Very close',
      close: 'Close',
      similar: 'Similar'
    },
    licenses: {
      'OFL-1.1': 'SIL Open Font License · free for personal & commercial use',
      'Apache-2.0': 'Apache 2.0 · free for personal & commercial use',
      'UFL-1.0': 'Ubuntu Font Licence · free for personal & commercial use',
      other: '{name} license · free to use'
    },
    copied: 'Copied',
    copyFailed: 'Copy failed',
    copyAllHeader: 'Font matches from fontfindertool.com',
    scan: 'Scan',
    /** Sample text for previews. Keep it in Latin letters: preview fonts only cover Latin. */
    defaultPreview: 'The quick brown fox jumps'
  },

  home: {
    title: 'Font Finder | Free AI Font Finder by Image | Font Finder Tool',
    description:
      'Free font finder: upload an image to find similar Google Fonts. AI font finder matching 1,900+ free Google Fonts, previewed in your text. No sign up.',
    eyebrow: 'Free AI font finder',
    h1: 'Font Finder: Spotted a font you love? Find it in seconds.',
    intro:
      'Upload a screenshot, logo or photo and our font finder compares the lettering with 1,900+ free Google Fonts, right in your browser, with no sign up and no limits.'
  },

  howItWorks: {
    eyebrow: 'How it works',
    title: 'How to find a font from an image in four steps',
    steps: [
      {
        title: 'Upload or paste',
        body: 'Drop a screenshot, photo, logo or poster, or paste straight from your clipboard with Ctrl+V.'
      },
      {
        title: 'Crop the text',
        body: 'Drag a box around one line of lettering. A tight crop with 10+ characters gives the most accurate match.'
      },
      {
        title: 'Compare matches',
        body: 'We compare every letter against 1,900+ Google Fonts and show the closest matches, rendered in your own text.'
      },
      {
        title: 'Download free',
        body: 'Every match is a free Google Font. Open it on Google Fonts to download it or copy the embed code for your site.'
      }
    ]
  },

  features: {
    eyebrow: 'Why Font Finder Tool',
    title: 'Built for people who need to actually use the font',
    description:
      'Most font identifiers stop at a name. We take you all the way to a font you can legally use, free when possible.',
    /** In order: filter, preview, alts, license, crop, private. */
    items: [
      {
        title: 'Every match is free',
        body: 'Results come from the 1,900+ families on Google Fonts, all open source and licensed for commercial use. Filter them by style in one tap.'
      },
      {
        title: 'Live preview in your text',
        body: 'Candidates render your words in the actual font, so you compare letterforms instead of guessing from a name.'
      },
      {
        title: 'Free alternatives to paid fonts',
        body: 'Matches that resemble famous commercial fonts are flagged, so you know Inter can stand in for Helvetica and Montserrat for Gotham.'
      },
      {
        title: 'License at a glance',
        body: 'See whether a font is OFL, Apache or commercial before you download, with no digging through foundry pages.'
      },
      {
        title: 'Crop before you scan',
        body: 'Select the exact line you care about. Busy photos and posters with many fonts stop confusing the matcher.'
      },
      {
        title: 'Runs in your browser',
        body: 'Matching happens on your device. Your image is never uploaded, there are no daily limits, and recent scans stay in your browser.'
      }
    ],
    demo: {
      all: 'All',
      serif: 'Serif',
      script: 'Script',
      /** Keep in Latin letters; it is shown in a serif display face. */
      preview: 'Hello there',
      license: 'OFL · commercial OK'
    }
  },

  comparison: {
    eyebrow: 'Compare',
    title: 'More than a name guess',
    description: 'How Font Finder Tool stacks up against typical image font detectors.',
    feature: 'Feature',
    us: 'Font Finder Tool',
    them: 'Typical detectors',
    rows: [
      { label: 'Every match free to download', ours: true, theirs: false },
      { label: 'Filter matches by style', ours: true, theirs: false },
      { label: 'Crop to the exact text', ours: true, theirs: false },
      { label: 'Preview matches in your own text', ours: true, theirs: false },
      { label: 'Free alternatives to paid fonts', ours: true, theirs: 'Sometimes' },
      { label: 'License summary on every result', ours: true, theirs: false },
      { label: 'Direct download / buy links', ours: true, theirs: false },
      { label: 'Free scans per day', ours: 'Unlimited', theirs: '~3' },
      { label: 'Image uploaded to a server', ours: 'Never', theirs: 'Yes' }
    ] as ComparisonRow[]
  },

  guide: {
    eyebrow: 'Guide',
    title: 'The free font finder for images, logos and screenshots',
    description:
      'Everything you need to know about finding a font from an image, and getting a version you can actually use.',
    html: `<p>Font Finder Tool is a <strong>free font finder</strong> that identifies the typeface in any picture. Upload a screenshot, a photo of a menu, a poster, a book cover or a brand logo, and within seconds you get a ranked list of matching fonts, each one rendered in your own text, labelled with its license and linked to a free download. There is no account to create, no watermark and no daily cap on scans. If you have ever looked at a design and wondered which font it uses, this <strong>font finder</strong> is built to answer that question and take you straight to a font you can put to work.</p>

<h2>What is a font finder?</h2>
<p>A font finder is a tool that looks at lettering and works out which typeface it was set in. Designers use one to match a client’s existing materials, developers use one to recreate a layout from a screenshot, and marketers use one to keep social graphics on brand. Older tools asked you to answer a long questionnaire about serifs and letter shapes. A modern <strong>image font finder</strong> skips the guesswork: you show it the text, and it compares the shapes for you.</p>
<p>What sets Font Finder Tool apart is where it stops. Many identifiers give you a name and leave you to discover that the font costs hundreds of dollars or comes with a restrictive license. Here, every result is a free, open source font from Google Fonts, so the match you find is a match you can download and use today in personal projects, client work, websites, apps and print.</p>

<h2>How to use the font finder by image</h2>
<p>Using the <strong>font finder by image</strong> takes four quick steps:</p>
<ul>
  <li><strong>Upload an image.</strong> Choose a file, drag one onto the page, or paste straight from your clipboard with Ctrl+V (Cmd+V on a Mac). PNG, JPG, WebP and most other common formats work.</li>
  <li><strong>Crop the text.</strong> Drag a box around one line of lettering. A tight crop with ten or more characters gives the matcher the clearest view of each letter.</li>
  <li><strong>Identify the font.</strong> The tool reads each character, measures its shape and compares it with every family in its font index.</li>
  <li><strong>Compare and download.</strong> Review the ranked matches, type your own words into the preview box and open the winner on Google Fonts to download it or copy the embed code.</li>
</ul>
<p>Because the <strong>font finder upload image</strong> step happens entirely in your browser, the picture never leaves your device. Avoid confidential images, particularly on shared devices.</p>

<h2>An AI font finder that runs on your device</h2>
<p>Behind the scenes, Font Finder Tool works as an <strong>AI font finder</strong> in two stages. First, a neural network text recognition engine reads the characters in your crop, so the tool knows that a particular shape is a “g” rather than a “q”. Second, each recognised letter is measured (stroke weight, x height, width, contrast and the details that make one typeface different from another) and compared against a prebuilt index of glyphs from more than 1,900 Google Fonts families. The closest overall matches rise to the top of the list.</p>
<p>Running this on your own device has practical benefits beyond privacy. There is no queue, no server to go down and no cost to pass on, which is why the tool can stay a <strong>font finder free</strong> of signups, credits and limits. The recognition engine and font data are downloaded on your first scan and cached by your browser, so later scans are faster.</p>

<h2>Font finder from image free, with real licenses</h2>
<p>A <strong>font finder from image free</strong> of charge is only useful if the results are free too. Every match here is released under an open license, usually the SIL Open Font License or Apache 2.0. Both allow commercial use, embedding on websites and use in logos. Each result card shows the license at a glance, so you never have to dig through foundry pages to find out what is allowed.</p>
<p>When the image uses a commercial typeface such as Helvetica, Gotham, Futura or Proxima Nova, you will not find the paid original, but you will get the closest free alternatives, chosen by comparing actual letterforms. Cards flag the well known paid fonts they resemble, so you can see at a glance that Inter or Arimo stands in for Helvetica, Montserrat for Gotham and Jost for Futura.</p>

<h2>Google font finder for websites and apps</h2>
<p>Most websites and apps today are set in Google Fonts such as Inter, Roboto, Open Sans, Poppins and Montserrat. That makes this <strong>Google font finder</strong> especially good at screenshots of web pages, dashboards, slides and mobile apps: if the original is a Google Font, there is a strong chance it appears near the top of your results. Each match links to its Google Fonts page, where you can pick weights and copy the <code>&lt;link&gt;</code> or <code>@import</code> code for your own site. For a deeper walkthrough, see the <a href="/google-font-finder">Google Font finder guide</a>.</p>

<h2>Font finder by text: preview matches in your own words</h2>
<p>Similar fonts can look almost identical in a short sample. That is why this tool also works as a <strong>font finder by text</strong>: type any word or phrase into the preview box and every match updates to show that text. Try words with distinctive letters, like “Rag 1984” or “Quality goods”, to compare the tail of the “g”, the leg of the “R”, the shape of the numerals and the spacing between letters. Seeing your actual headline or brand name in each candidate is the fastest way to choose between close matches.</p>

<h2>Tips for accurate results from any image</h2>
<ul>
  <li>Use the sharpest version of the image you have. Large PNG exports beat small, compressed thumbnails.</li>
  <li>Photograph text straight on, avoid glare and keep the line level rather than tilted or warped.</li>
  <li>Crop to a single line of a single font. Mixed styles in one selection confuse any matcher.</li>
  <li>Dark text on a plain, light background works best, but light text on dark backgrounds are supported too.</li>
  <li>Expect the hardest cases to be flowing scripts, heavily decorated display lettering and custom drawn logos. For those, treat the results as the closest starting points rather than an exact answer.</li>
</ul>

<h2>Who uses this image font finder?</h2>
<p>Graphic designers use it to match fonts in client briefs and legacy files. Web developers use it to rebuild interfaces from screenshots. Small business owners use it to find a free font that fits their brand, and students and hobbyists use it to recreate looks they love for presentations, posters and social posts. Whatever the project, the goal is the same: go from “what font is this?” to a font file on your computer in under a minute. If a logo is what you are trying to match, our <a href="/logo-font-finder">logo font finder</a> page covers custom lettering and trademarks, and the <a href="/free-font-finder">free font finder</a> page explains licensing in more detail.</p>

<h2>Start finding fonts</h2>
<p>Font Finder Tool combines AI text recognition, shape matching across 1,900+ Google Fonts, live previews and clear license information in one free, private tool. Scroll back up, <a href="#detector">upload an image</a> and see which fonts match. No sign up required.</p>`
  },

  homeFaq: [
    {
      q: 'What is a font finder?',
      a: 'A font finder is a tool that identifies the typeface used in an image. Font Finder Tool reads the letters in your screenshot, photo or logo and compares their shapes with 1,900+ free Google Fonts, then shows the closest matches previewed in your own text.'
    },
    {
      q: 'Can Google identify a font?',
      a: 'Not directly. Google has no dedicated font identifier, and Google Lens recognizes the text in an image rather than naming the typeface. To identify a font, upload the image to a font finder like this one, which matches the letter shapes against the Google Fonts library.'
    },
    {
      q: 'How can I identify a type of font?',
      a: 'Look at the defining details: serifs or no serifs, the shape of letters like “a”, “g”, “R” and “Q”, stroke contrast and x height. Or skip the guesswork: upload an image of the text, drag a box around one line and press Identify font to get a ranked list of matching fonts.'
    },
    {
      q: 'How do I see which font is used?',
      a: 'On a website, right click the text, choose Inspect and check the font family value under the Computed tab. In Word or Google Docs, select the text and read the font menu. For images, logos and screenshots, where the font name isn’t stored, upload the image to a font finder.'
    },
    {
      q: 'Can I use AI to identify a font?',
      a: 'Yes. Font Finder Tool is an AI font finder: a neural network text recognition engine reads the letters in your image, then each letter’s shape is measured and compared with a glyph index of 1,900+ Google Fonts. It all runs in your browser, so it stays fast, free and private.'
    },
    {
      q: 'Is there a free font finder?',
      a: 'Yes. Font Finder Tool is completely free, with no account, no watermark and no daily limit. Matching runs in your own browser, so there is no server cost to pass on, and every font it suggests is free to download too.'
    },
    {
      q: 'How do I match a font?',
      a: 'Crop an image to a single line of the text you want to match, upload it and run the finder. Then type your own words into the preview box and compare distinctive letters and numerals side by side until you find the closest match. If the original is a paid font, pick the free lookalike that fits best.'
    },
    {
      q: 'Can I take a picture of a font and find it?',
      a: 'Yes. Take a photo with your phone or grab a screenshot, then upload, drag in or paste it (Ctrl+V). Shoot the text straight on, in good light and in sharp focus, and crop to one line of at least 10 characters for the best results.'
    },
    {
      q: 'Where can I find free fonts?',
      a: 'Google Fonts is the largest library of free, open source fonts, with 1,900+ families you can use for personal and commercial projects. Other trusted sources include Fontshare and The League of Moveable Type. Always check the license, especially on sites that collect fonts from many authors.'
    },
    {
      q: 'How do I find a specific text font?',
      a: 'If you know the name, search for it on Google Fonts or a type foundry’s site. If you only have an example, upload an image of the text to a font finder. Matches are previewed in any text you type, so you can check how the font looks with your own words before downloading it.'
    },
    {
      q: 'How do I use Google Fonts?',
      a: 'Open fonts.google.com, pick a family and click Get font. To use it on a website, copy the embed code into your HTML and set the font family in your CSS. To use it in desktop apps, download the font files and install them. In Google Docs and Slides, open the font menu and choose More fonts.'
    },
    {
      q: 'Can I create a font using AI?',
      a: 'Partly. AI image tools can generate lettering ideas, and some services turn handwriting or a set of drawn letters into an installable font. A complete, professional font still needs work in a font editor, such as the free FontForge, to refine the letter shapes, spacing and kerning.'
    },
    {
      q: 'What kind of image gives the best results?',
      a: 'A sharp, straight on image with dark text on a plain background works best. Crop to a single line with at least 10 characters, and avoid heavy shadows, outlines or warped perspective. Flowing script and heavily decorated lettering are the hardest to match.'
    },
    {
      q: 'Are the results always exact?',
      a: 'Not always. Many typefaces share very similar letterforms, and logos are often custom or modified. Use the live preview to compare details like the “a”, “g”, “R” and numerals before you decide. If your image uses a commercial font, you get the closest free Google Fonts instead, and well known paid lookalikes are noted on each card.'
    },
    {
      q: 'Can I use the fonts commercially?',
      a: 'Yes. Google Fonts are released under open licenses (mostly the SIL Open Font License) that allow personal and commercial use, including logos, websites and print. Each result shows its license.'
    },
    {
      q: 'Do you see my images?',
      a: 'No. Your image is processed entirely on your device and is never uploaded. The first scan downloads the text recognition engine and parts of the font index, which your browser then caches. Recent scans are saved only in your browser and can be cleared at any time.'
    },
    {
      q: 'Can it identify fonts in logos?',
      a: 'Often, yes, as long as the logo uses a real typeface. Custom drawn wordmarks have no exact match, but you will still get the closest free fonts.'
    }
  ] as FaqItem[],

  /** Keyed by URL slug (slugs stay in English in every language). */
  landing: {
    'what-font-is-this': {
      metaTitle: 'What Font Is This? Identify a Font from a Picture | Font Finder Tool',
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
            'Upload or paste your image, drag a box around the words, and press Identify font. We compare the shape and proportions of each letter (stroke weight, x height, width and detail) against every font on Google Fonts.',
            'Every result is rendered in your own text so you can check the details that tell similar fonts apart: the tail of the “g”, the leg of the “R”, the shape of the numerals.'
          ]
        },
        {
          heading: 'Where the font usually comes from',
          body: [
            'Websites and apps often use free Google Fonts like Inter, Roboto and Montserrat, and those you can match exactly. Print, packaging and brand work more often use commercial families like Helvetica Neue, Gotham or Futura; for those you get the closest free alternatives, and cards note which paid fonts they resemble.'
          ]
        }
      ],
      faq: [
        {
          q: 'Why does the top result look slightly different?',
          a: 'Many fonts are nearly identical, and images can blur fine details. Check the second and third matches too, and compare them using the live preview with your own text.'
        },
        {
          q: 'Can I identify a font from a photo taken on my phone?',
          a: 'Yes. Hold the camera straight on to the text, avoid glare, and crop to a single line before scanning for the best accuracy.'
        }
      ]
    } as LandingContent,
    'free-font-finder': {
      metaTitle: 'Free Font Finder: Find Free Fonts from an Image | Font Finder Tool',
      metaDescription:
        'Find free fonts from any image. Every match is a free Google Font licensed for commercial use, with free alternatives to popular paid fonts.',
      breadcrumb: 'Free font finder',
      eyebrow: 'Free font finder',
      h1: 'Find free fonts that match any image',
      intro: 'Every result is a free, open source Google Font you can download and use today, including in commercial work.',
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
            'If the image uses a commercial typeface, you get the closest free fonts instead. Cards flag well known paid fonts they resemble: Inter or Arimo for Helvetica, Montserrat for Gotham, Jost for Futura, and many more.'
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
          a: 'You will see the most similar free Google Fonts. They will not be identical, but they are chosen by comparing the actual letter shapes, so they are the closest free alternatives.'
        }
      ]
    } as LandingContent,
    'logo-font-finder': {
      metaTitle: 'Logo Font Finder: Identify the Font in Any Logo | Font Finder Tool',
      metaDescription:
        'Find the font used in a logo. Upload the logo, crop the wordmark and get the closest free Google Fonts with license details.',
      breadcrumb: 'Logo font finder',
      eyebrow: 'Logo font finder',
      h1: 'Identify the font in any logo',
      intro: 'Upload a logo, crop the wordmark and see which typefaces come closest, with free alternatives for brand style lettering.',
      sections: [
        {
          heading: 'Getting a clean logo scan',
          body: [
            'Crop away icons and taglines and keep just the name. If the logo is light on dark, that works too. Higher resolution files (SVG exports or large PNGs) give more reliable matches than small favicons.'
          ]
        },
        {
          heading: 'Custom lettering and modified fonts',
          body: [
            'Many brands start from a typeface and then adjust spacing, cut letters or draw custom glyphs. In that case there is no exact match, but the closest base fonts are still the best starting point for a similar look.',
            'Remember that a font license does not give you rights to a brand’s trademark. Use matches for inspiration, not imitation.'
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
          a: 'The logo is probably custom drawn or heavily modified. The results show the closest typefaces you can use instead.'
        }
      ]
    } as LandingContent,
    'google-font-finder': {
      metaTitle: 'Google Font Finder: Find a Google Font from an Image | Font Finder Tool',
      metaDescription:
        'Find the Google Font in any image. Upload a screenshot and get matching Google Fonts with live previews and one click download links.',
      breadcrumb: 'Google Font finder',
      eyebrow: 'Google Font finder',
      h1: 'Find the Google Font in any image',
      intro: 'Upload a screenshot of a website, app or slide and get the matching Google Fonts, previewed in your text, one click from download.',
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
            'Families like Inter, Roboto and Arimo look similar at small sizes. Type a word with distinctive letters, “Rag 1984” for example, into the preview box to compare them properly.'
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
          a: 'No. Matches always come from Google Fonts, so they are free to use. For commercial fonts you get the closest free alternatives.'
        }
      ]
    } as LandingContent
  },

  /** Keyed by URL slug. */
  pages: {
    about: {
      title: 'About Us | Font Finder Tool',
      description: 'Font Finder Tool helps designers and developers identify fonts from images and find free alternatives.',
      heading: 'About Us',
      html: `<p>Font Finder Tool started with a simple frustration: font identifiers tell you a name, then leave you to work out whether you can afford it, whether you’re allowed to use it, and what it actually looks like with your words.</p>
<p>So we built a finder that only returns fonts you can actually use. Every result is a free, open source Google Font, previewed in your own text, with its license and a direct download link. When your image uses a commercial font, you get the closest free alternatives, and cards note which paid fonts they resemble.</p>

<h2>How matching works</h2>
<p>Everything runs in your browser. The tool reads the letters in your crop, then each letter’s shape and proportions are compared with a prebuilt index of fonts from <a href="https://fonts.google.com" rel="noopener">Google Fonts</a> (served via <a href="https://fontsource.org" rel="noopener">Fontsource</a>). Your image is never uploaded.</p>

<h2>Get in touch</h2>
<p>Found a wrong match, or want a feature? Email <a href="mailto:hello@fontfindertool.com">hello@fontfindertool.com</a> or visit our <a href="/contact">Contact</a> page.</p>`
    } as ProseContent,
    contact: {
      title: 'Contact Us | Font Finder Tool',
      description: 'Get in touch with Font Finder Tool to report a wrong match, suggest a feature or ask a question.',
      heading: 'Contact Us',
      html: `<p>We read every message. The quickest way to reach us is by email at <a href="mailto:hello@fontfindertool.com"><strong>hello@fontfindertool.com</strong></a>. We usually reply within a few working days.</p>

<h2>Reporting a wrong match</h2>
<p>If the finder suggested the wrong font, tell us what you expected and, if you can, attach the image you scanned. Scans run on your device, so we never see your image unless you send it to us.</p>

<h2>Feature requests and feedback</h2>
<p>Ideas for new tools, fonts you’d like covered, or anything that felt confusing. We’d like to hear it.</p>

<h2>Privacy and legal</h2>
<p>For questions about how we handle data or about our terms, use the same address and mention “Privacy” or “Legal” in the subject line. See our <a href="/privacy">Privacy Policy</a> and <a href="/terms">Terms &amp; Conditions</a>.</p>`
    } as ProseContent,
    privacy: {
      title: 'Privacy Policy | Font Finder Tool',
      description:
        'How Font Finder Tool handles your images and data: matching runs on your device and images are never uploaded.',
      heading: 'Privacy Policy',
      html: `<p>Font Finder Tool (“we”, “us”) runs fontfindertool.com. This page explains what happens to your data when you use the site.</p>

<h2>Your images stay on your device</h2>
<p>Font matching runs entirely in your browser. When you scan an image, it is cropped, read and compared with our font index on your own device. <strong>Your image is never uploaded</strong> to us or anyone else.</p>

<h2>Files your browser downloads</h2>
<p>To do the matching, your browser downloads:</p>
<ul>
  <li>the <a href="https://tesseract.projectnaptha.com" rel="noopener">Tesseract.js</a> text recognition engine and its English language data, from the jsDelivr CDN;</li>
  <li>parts of our font index, from fontfindertool.com;</li>
  <li>font files for the previews, from Fontsource via jsDelivr.</li>
</ul>
<p>Those requests contain standard technical data such as your IP address and browser type, but never your image.</p>

<h2>Data in your browser</h2>
<p>Your recent scans (a small thumbnail and the results) and your theme choice are saved in your browser’s local storage. They never leave your device, and you can clear recent scans with the “Clear” button.</p>

<h2>Hosting</h2>
<p>The site is hosted on Cloudflare, which may process request logs (such as IP addresses) to deliver and secure the site. We don’t use advertising or tracking cookies.</p>

<h2>Children</h2>
<p>The site is a general design tool and is not directed at children under 13. We don’t knowingly collect personal information from anyone.</p>

<h2>Your choices</h2>
<p>Because we don’t hold accounts or store your images, there is no personal profile for us to share, sell or delete. If you email us, we use your message only to reply, and you can ask us to delete our correspondence at any time.</p>
<p>Wherever you are, you can email us to ask what information we hold about you, or to correct or delete it.</p>

<h2>Changes to this policy</h2>
<p>If we change how the site handles data, we’ll update this page and the “Last updated” date above.</p>

<h2>Contact</h2>
<p>Questions about privacy? Email <a href="mailto:hello@fontfindertool.com">hello@fontfindertool.com</a> or visit our <a href="/contact">Contact</a> page.</p>`
    } as ProseContent,
    terms: {
      title: 'Terms & Conditions | Font Finder Tool',
      description: 'The terms that apply when you use Font Finder Tool.',
      heading: 'Terms & Conditions',
      html: `<p>By using fontfindertool.com you agree to these terms.</p>

<h2>The service</h2>
<p>Font Finder Tool suggests Google Fonts that resemble the text in an image you provide. Matching runs in your browser. Results are automated suggestions and may not be exact. The service is provided “as is”, without warranties of any kind.</p>

<h2>Fair use</h2>
<p>Don’t scrape or bulk download the font index or otherwise put unreasonable load on the site.</p>

<h2>Your images</h2>
<p>Images you scan are processed on your own device and are not uploaded to us. You are responsible for having the right to use any image you scan.</p>

<h2>Font licenses</h2>
<p>We don’t sell or license fonts. Suggested fonts come from Google Fonts and are distributed under their own open licenses; license summaries are provided for convenience. Check the font’s page for the full terms. Notes that a font resembles a commercial typeface are for reference only and imply no affiliation with that typeface’s owner. Using a font does not grant rights to any trademark or logo it appears in.</p>

<h2>Our content</h2>
<p>The site’s design, text, code and font index are owned by Font Finder Tool. You may share links to the site, but don’t copy or republish substantial parts of it without permission. Font names and trademarks belong to their respective owners.</p>

<h2>Limitation of liability</h2>
<p>To the fullest extent permitted by law, Font Finder Tool is not liable for any indirect, incidental or consequential loss arising from your use of the site or its results, including any decision to use a suggested font. Always confirm a font’s license before using it in your work.</p>

<h2>Third party links</h2>
<p>Results link to third party sites such as Google Fonts and Fontsource. We are not responsible for their content or terms.</p>

<h2>Changes</h2>
<p>We may update these terms. Continued use after changes means you accept them.</p>

<h2>Contact</h2>
<p>Questions about these terms? See our <a href="/contact">Contact</a> page or email <a href="mailto:hello@fontfindertool.com">hello@fontfindertool.com</a>.</p>`
    } as ProseContent
  },

  errors: {
    notFound: {
      title: 'Page not found | Font Finder Tool',
      description: "This page doesn't exist.",
      heading: 'This page is missing',
      message: 'The page you’re looking for doesn’t exist. Maybe the font you’re after does, though.',
      primary: 'Find a font',
      secondary: 'Report a broken link'
    },
    serverError: {
      title: 'Something went wrong | Font Finder Tool',
      description: 'An unexpected error occurred.',
      heading: 'Something went wrong',
      message: 'An unexpected error stopped this page from loading. Try again in a moment, or head back to the font finder.',
      primary: 'Try again',
      secondary: 'Go home'
    }
  },

  schema: {
    webAppDescription:
      'Free AI font finder: upload an image to identify the font and get matching free Google Fonts, with live text previews and license info.',
    browserRequirements: 'Requires JavaScript and a modern web browser.',
    featureList: [
      'Find fonts by image: upload, drag in or paste a screenshot, photo or logo',
      'AI text recognition and shape matching against 1,900+ Google Fonts',
      'Preview every match in your own text',
      'Free alternatives to popular paid fonts',
      'License summary and download link for every result',
      'Runs in your browser: images are never uploaded'
    ]
  }
};

export type Locale = typeof en;
export default en;
