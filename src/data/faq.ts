export interface FaqItem {
  q: string;
  a: string;
}

export const homeFaq: FaqItem[] = [
  {
    q: 'How do I identify a font from an image?',
    a: 'Upload, drag in or paste (Ctrl+V) an image, drag a box around one line of text, then press Identify font. You get a ranked list of matching Google Fonts, each previewed in your own text.'
  },
  {
    q: 'Which fonts can it find?',
    a: 'The 1,900+ font families on Google Fonts. They are all free and open source, so every match can be downloaded and used right away. If your image uses a commercial font, you get the closest free Google Fonts instead, and well-known paid lookalikes are noted on each card.'
  },
  {
    q: 'Is Font Finder Tool free?',
    a: 'Yes, with no account and no daily limit. Matching runs in your own browser, so there is no server cost to pass on.'
  },
  {
    q: 'What kind of image gives the best results?',
    a: 'A sharp, straight-on image with dark text on a plain background works best. Crop to a single line with at least 10 characters, and avoid heavy shadows, outlines or warped perspective. Flowing script and heavily decorated lettering are the hardest to match.'
  },
  {
    q: 'Are the results always exact?',
    a: 'Not always. Many typefaces share very similar letterforms, and logos are often custom or modified. Use the live preview to compare details like the “a”, “g”, “R” and numerals before you decide.'
  },
  {
    q: 'Can I use the fonts commercially?',
    a: 'Yes. Google Fonts are released under open licenses (mostly the SIL Open Font License) that allow personal and commercial use, including logos, websites and print. Each result shows its license.'
  },
  {
    q: 'Do you see my images?',
    a: 'No. Your image is processed entirely on your device and is never uploaded. The first scan downloads the text-recognition engine and parts of the font index, which your browser then caches. Recent scans are saved only in your browser and can be cleared at any time.'
  },
  {
    q: 'Can it identify fonts in logos?',
    a: 'Often, yes, as long as the logo uses a real typeface. Custom-drawn wordmarks have no exact match, but you will still get the closest free fonts.'
  }
];
