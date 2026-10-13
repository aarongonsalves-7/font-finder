export interface FaqItem {
  q: string;
  a: string;
}

export const homeFaq: FaqItem[] = [
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
];
