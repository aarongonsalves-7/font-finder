export interface FaqItem {
  q: string;
  a: string;
}

export const homeFaq: FaqItem[] = [
  {
    q: 'How do I identify a font from an image?',
    a: 'Upload, drag in or paste (Ctrl+V) an image, drag a box around one line of text, then press Identify font. You get a ranked list of matching fonts, each previewed in your own text and labelled Free or Paid.'
  },
  {
    q: 'Can I see only free fonts?',
    a: 'Yes. Use the Free filter above the results to hide commercial fonts. Paid matches also list close free lookalikes, so you always have a free option.'
  },
  {
    q: 'Is Font Finder Tool free?',
    a: 'Yes. You get 10 free scans per day with no account. The counter resets at midnight UTC.'
  },
  {
    q: 'What kind of image gives the best results?',
    a: 'A sharp, straight-on image with dark text on a plain background works best. Crop to a single line with at least 10 characters, and avoid heavy shadows, outlines or warped perspective.'
  },
  {
    q: 'Are the results always exact?',
    a: 'Not always. Many typefaces share very similar letterforms, and logos are often custom or modified. Use the live preview to compare details like the “a”, “g”, “R” and numerals before you decide.'
  },
  {
    q: 'Can I use the fonts commercially?',
    a: 'Fonts under the SIL Open Font License or Apache license (most Google Fonts) are free for commercial use. Paid fonts need a license from the foundry or store. Each result shows a license summary, but always confirm on the font’s own page.'
  },
  {
    q: 'Do you store my images?',
    a: 'No. Images are processed in memory to identify the font and then discarded. Your recent scans are saved only in your own browser and can be cleared at any time.'
  },
  {
    q: 'Can it identify fonts in logos?',
    a: 'Often, yes, as long as the logo uses a real typeface. Custom-drawn wordmarks have no exact match, but you will still get the closest fonts and free alternatives.'
  }
];
