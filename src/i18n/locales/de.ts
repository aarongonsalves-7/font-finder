import type { ComparisonRow, FaqItem, LandingContent, Locale, ProseContent } from './en';

const de: Locale = {
  ui: {
    'site.skip': 'Zum Inhalt springen',
    'site.logoLabel': 'Font Finder Tool Startseite',
    'site.tagline': 'Erkenne Schriftarten aus jedem Bild und finde die passende kostenlose Google Font.',
    'site.ogImageAlt': 'Font Finder Tool: Schriftart aus jedem Bild kostenlos erkennen',

    'nav.main': 'Hauptmenü',
    'nav.mobile': 'Mobil',
    'nav.openMenu': 'Menü öffnen',
    'nav.howItWorks': 'So funktioniert’s',
    'nav.freeFonts': 'Gratis-Schriften',
    'nav.logoFonts': 'Logo-Schriften',
    'nav.faq': 'FAQ',
    'nav.findFont': 'Schrift finden',

    'footer.tools': 'Tools',
    'footer.resources': 'Ressourcen',
    'footer.legal': 'Rechtliches',
    'footer.fontFinder': 'Schriftart erkennen',
    'footer.whatFont': 'Welche Schriftart ist das?',
    'footer.freeFinder': 'Kostenlose Schriftarten finden',
    'footer.googleFinder': 'Google Font finden',
    'footer.logoFinder': 'Logo-Schriftart erkennen',
    'footer.about': 'Über uns',
    'footer.contact': 'Kontakt',
    'footer.privacy': 'Datenschutzerklärung',
    'footer.terms': 'Nutzungsbedingungen',
    'footer.fontsFrom': 'Schriften von',
    'footer.via': 'über',

    'lang.label': 'Sprache',

    'theme.label': 'Farbschema',
    'theme.system': 'System',
    'theme.light': 'Hell',
    'theme.dark': 'Dunkel',
    'theme.toDark': 'Zum dunklen Design wechseln',
    'theme.toLight': 'Zum hellen Design wechseln',

    'hero.fonts': '1.900+ Google Fonts',
    'hero.crop': 'Exakt auf den Text zuschneiden',
    'hero.browser': 'Läuft in deinem Browser',

    'faq.eyebrow': 'FAQ',
    'faq.title': 'Häufig gestellte Fragen',
    'faq.landingTitle': '{name}: häufige Fragen',

    'prose.updated': 'Zuletzt aktualisiert am {date}',

    'compare.yes': 'Ja',
    'compare.no': 'Nein',

    'detector.drop': 'Bild hierher ziehen, einfügen oder *durchsuchen*',
    'detector.tap': 'Tippen, um *ein Foto oder einen Screenshot zu wählen*',
    'detector.dropHint': 'Screenshots, Logos, Poster, Fotos · Verarbeitung auf deinem Gerät',
    'detector.pasteHint': 'zum Einfügen aus der Zwischenablage',
    'detector.cropHint': '*Ziehe einen Rahmen über den Text*, den du erkennen willst. Eine Zeile funktioniert am besten.',
    'detector.useWhole': 'Ganzes Bild nutzen',
    'detector.uploadedAlt': 'Dein hochgeladenes Bild',
    'detector.chooseAnother': 'Anderes Bild wählen',
    'detector.identify': 'Schrift erkennen',
    'detector.reading': 'Buchstaben werden gelesen…',
    'detector.thumbAlt': 'Gescanntes Bild',
    'detector.matches': 'Treffer',
    'detector.copyList': 'Liste kopieren',
    'detector.newScan': 'Neuer Scan',
    'detector.filterLabel': 'Nach Stil filtern',
    'detector.previewLabel': 'Vorschautext',
    'detector.previewPlaceholder': 'Text für Vorschau eingeben',
    'detector.footnote': 'Abgleich mit dem Google-Fonts-Katalog direkt auf deinem Gerät. Dein Bild verlässt nie deinen Browser.',
    'detector.recent': 'Letzte Scans',
    'detector.clear': 'Löschen',
    'detector.free': 'Gratis',
    'detector.altTo': 'Kostenlose Alternative zu',
    'detector.similarLabel': 'Ähnliche kommerzielle Schriften',
    'detector.getOnGoogle': 'Bei Google Fonts holen',
    'detector.copyName': 'Name kopieren'
  },

  client: {
    notImage: 'Diese Datei ist kein Bild. Versuche es mit PNG, JPG oder WebP.',
    tooLarge: 'Das Bild ist größer als 15 MB. Versuche einen Screenshot oder einen kleineren Export.',
    unreadable: 'Das Bild konnte nicht gelesen werden.',
    generic: 'Etwas ist schiefgelaufen. Bitte versuche es erneut.',
    indexError: 'Der Schriftenindex konnte nicht geladen werden.',
    tooFewLetters:
      'Wir konnten nicht genug Buchstaben lesen. Schneide das Bild enger auf eine Zeile mit gut lesbarem Text zu.',
    loadingReader: 'Texterkennung wird geladen…',
    readingLetters: 'Buchstaben werden gelesen…',
    comparing: 'Vergleiche {letters} Buchstaben mit {fonts} Google Fonts…',
    resultsOne: '{n} kostenloser Schrift-Treffer',
    resultsMany: '{n} kostenlose Schrift-Treffer',
    lettersCompared: '{n} Buchstaben verglichen',
    readText: 'gelesen: „{text}“',
    all: 'Alle',
    categories: {
      'sans-serif': 'Sans',
      serif: 'Serif',
      display: 'Display',
      handwriting: 'Handschrift',
      monospace: 'Mono'
    },
    regular: 'Normal',
    bold: 'Fett',
    match: {
      best: 'Bester Treffer',
      veryClose: 'Sehr ähnlich',
      close: 'Ähnlich',
      similar: 'Verwandt'
    },
    licenses: {
      'OFL-1.1': 'SIL Open Font License · gratis für private & kommerzielle Nutzung',
      'Apache-2.0': 'Apache 2.0 · gratis für private & kommerzielle Nutzung',
      'UFL-1.0': 'Ubuntu Font Licence · gratis für private & kommerzielle Nutzung',
      other: '{name}-Lizenz · kostenlos nutzbar'
    },
    copied: 'Kopiert',
    copyFailed: 'Kopieren fehlgeschlagen',
    copyAllHeader: 'Schrift-Treffer von fontfindertool.com',
    scan: 'Scan',
    defaultPreview: 'Franz jagt im Taxi durch Berlin'
  },

  home: {
    title: 'Schriftart erkennen aus Bild – kostenlos | Font Finder Tool',
    description:
      'Schriftart erkennen per Bild: Lade ein Foto hoch und finde die Schrift in Sekunden. KI-Abgleich mit 1.900+ kostenlosen Google Fonts. Ohne Anmeldung.',
    eyebrow: 'Kostenloser KI-Font-Finder',
    h1: 'Schriftart erkennen: Schöne Schrift entdeckt? Finde sie in Sekunden.',
    intro:
      'Lade einen Screenshot, ein Logo oder ein Foto hoch und unser Font Finder vergleicht die Buchstaben mit 1.900+ kostenlosen Google Fonts – direkt in deinem Browser, ohne Anmeldung und ohne Limits.'
  },

  howItWorks: {
    eyebrow: 'So funktioniert’s',
    title: 'Schrift aus Bild erkennen in vier Schritten',
    steps: [
      {
        title: 'Hochladen oder einfügen',
        body: 'Zieh einen Screenshot, ein Foto, Logo oder Poster hinein oder füge es mit Strg+V direkt aus der Zwischenablage ein.'
      },
      {
        title: 'Text zuschneiden',
        body: 'Ziehe einen Rahmen um eine Textzeile. Ein enger Zuschnitt mit 10+ Zeichen liefert den genauesten Treffer.'
      },
      {
        title: 'Treffer vergleichen',
        body: 'Wir vergleichen jeden Buchstaben mit 1.900+ Google Fonts und zeigen dir die ähnlichsten Schriften – in deinem eigenen Text.'
      },
      {
        title: 'Gratis herunterladen',
        body: 'Jeder Treffer ist eine kostenlose Google Font. Öffne sie bei Google Fonts, um sie herunterzuladen oder den Einbettungscode für deine Website zu kopieren.'
      }
    ]
  },

  features: {
    eyebrow: 'Warum Font Finder Tool',
    title: 'Gemacht für alle, die die Schrift wirklich nutzen wollen',
    description:
      'Die meisten Schrifterkennungs-Tools liefern nur einen Namen. Wir bringen dich bis zu einer Schrift, die du legal nutzen kannst – wenn möglich kostenlos.',
    items: [
      {
        title: 'Jeder Treffer ist kostenlos',
        body: 'Die Ergebnisse stammen aus den 1.900+ Schriftfamilien von Google Fonts – alle Open Source und für die kommerzielle Nutzung lizenziert. Filtere sie mit einem Tipp nach Stil.'
      },
      {
        title: 'Live-Vorschau mit deinem Text',
        body: 'Jeder Kandidat zeigt deine Wörter in der echten Schrift. So vergleichst du Buchstabenformen, statt anhand eines Namens zu raten.'
      },
      {
        title: 'Kostenlose Alternativen zu Kaufschriften',
        body: 'Treffer, die bekannten kommerziellen Schriften ähneln, werden markiert. So weißt du, dass Inter für Helvetica einspringen kann und Montserrat für Gotham.'
      },
      {
        title: 'Lizenz auf einen Blick',
        body: 'Sieh vor dem Download, ob eine Schrift unter OFL, Apache oder einer kommerziellen Lizenz steht – ohne dich durch die Seiten von Schriftherstellern zu wühlen.'
      },
      {
        title: 'Vor dem Scan zuschneiden',
        body: 'Wähle genau die Zeile aus, die dich interessiert. So bringen unruhige Fotos und Poster mit vielen Schriften den Abgleich nicht mehr durcheinander.'
      },
      {
        title: 'Läuft in deinem Browser',
        body: 'Der Abgleich passiert auf deinem Gerät. Dein Bild wird nie hochgeladen, es gibt keine Tageslimits und deine letzten Scans bleiben in deinem Browser.'
      }
    ],
    demo: {
      all: 'Alle',
      serif: 'Serif',
      script: 'Handschrift',
      preview: 'Hallo zusammen',
      license: 'OFL · kommerziell OK'
    }
  },

  comparison: {
    eyebrow: 'Vergleich',
    title: 'Mehr als nur ein geratener Name',
    description: 'So schneidet Font Finder Tool im Vergleich zu typischen Tools zur Schrifterkennung ab.',
    feature: 'Funktion',
    us: 'Font Finder Tool',
    them: 'Typische Tools',
    rows: [
      { label: 'Jeder Treffer kostenlos herunterladbar', ours: true, theirs: false },
      { label: 'Treffer nach Stil filtern', ours: true, theirs: false },
      { label: 'Exakt auf den Text zuschneiden', ours: true, theirs: false },
      { label: 'Vorschau der Treffer mit deinem Text', ours: true, theirs: false },
      { label: 'Kostenlose Alternativen zu Kaufschriften', ours: true, theirs: 'Manchmal' },
      { label: 'Lizenzübersicht bei jedem Ergebnis', ours: true, theirs: false },
      { label: 'Direkte Download- und Kauflinks', ours: true, theirs: false },
      { label: 'Kostenlose Scans pro Tag', ours: 'Unbegrenzt', theirs: '~3' },
      { label: 'Bild wird auf einen Server hochgeladen', ours: 'Nie', theirs: 'Ja' }
    ] as ComparisonRow[]
  },

  guide: {
    eyebrow: 'Ratgeber',
    title: 'Schriftart erkennen aus Bildern, Logos und Screenshots – kostenlos',
    description:
      'Alles, was du wissen musst, um eine Schriftart aus einem Bild zu finden – und eine Version zu bekommen, die du wirklich nutzen kannst.',
    html: `<p>Font Finder Tool ist ein <strong>kostenloser Font Finder</strong>, der die Schriftart in jedem Bild erkennt. Lade einen Screenshot, das Foto einer Speisekarte, ein Poster, ein Buchcover oder ein Markenlogo hoch und du bekommst in Sekunden eine sortierte Liste passender Schriften – jede in deinem eigenen Text dargestellt, mit Lizenzangabe und Link zum kostenlosen Download. Du brauchst kein Konto, es gibt kein Wasserzeichen und kein Tageslimit für Scans. Wenn du dich beim Anblick eines Designs schon mal gefragt hast, welche Schrift das ist: Mit diesem Tool kannst du die <strong>Schriftart erkennen</strong> und landest direkt bei einer Schrift, mit der du arbeiten kannst.</p>

<h2>Was ist ein Font Finder?</h2>
<p>Ein Font Finder ist ein Tool, das Buchstaben analysiert und herausfindet, in welcher Schriftart sie gesetzt sind. Designer nutzen ihn, um bestehende Materialien eines Kunden nachzubauen, Entwickler, um ein Layout aus einem Screenshot zu rekonstruieren, und Marketer, um Social-Media-Grafiken markenkonform zu halten. Ältere Tools haben dich durch lange Fragebögen zu Serifen und Buchstabenformen geschickt. Wer heute eine <strong>Schrift aus einem Bild erkennen</strong> will, spart sich das Rätselraten: Du zeigst dem Tool den Text und es vergleicht die Formen für dich.</p>
<p>Was Font Finder Tool besonders macht, ist, wo es aufhört. Viele Tools nennen dir einen Namen und überlassen es dir herauszufinden, dass die Schrift Hunderte Dollar kostet oder eine einschränkende Lizenz hat. Hier ist jedes Ergebnis eine kostenlose Open-Source-Schrift von Google Fonts. Der Treffer, den du findest, ist also eine Schrift, die du noch heute herunterladen und nutzen kannst – in privaten Projekten, Kundenaufträgen, Websites, Apps und Druckprodukten.</p>

<h2>So findest du eine Schriftart per Bild</h2>
<p>Um eine <strong>Schriftart per Bild zu finden</strong>, brauchst du nur vier schnelle Schritte:</p>
<ul>
  <li><strong>Bild hochladen.</strong> Wähle eine Datei, zieh sie auf die Seite oder füge sie mit Strg+V (Cmd+V auf dem Mac) direkt aus der Zwischenablage ein. PNG, JPG, WebP und die meisten anderen gängigen Formate funktionieren.</li>
  <li><strong>Text zuschneiden.</strong> Ziehe einen Rahmen um eine Textzeile. Ein enger Zuschnitt mit zehn oder mehr Zeichen gibt dem Abgleich den klarsten Blick auf jeden Buchstaben.</li>
  <li><strong>Schrift erkennen.</strong> Das Tool liest jedes Zeichen, misst seine Form und vergleicht sie mit jeder Schriftfamilie im Schriftenindex.</li>
  <li><strong>Vergleichen und herunterladen.</strong> Sieh dir die sortierten Treffer an, tippe eigene Wörter ins Vorschaufeld und öffne deinen Favoriten bei Google Fonts, um ihn herunterzuladen oder den Einbettungscode zu kopieren.</li>
</ul>
<p>Weil das <strong>Hochladen des Bildes</strong> komplett in deinem Browser stattfindet, verlässt das Bild nie dein Gerät. So kannst du Schriften auch in unveröffentlichten Designs, Kundenentwürfen und internen Dokumenten bedenkenlos prüfen.</p>

<h2>Schriftart erkennen mit KI – direkt auf deinem Gerät</h2>
<p>Im Hintergrund arbeitet Font Finder Tool als <strong>KI-Schrifterkennung</strong> in zwei Stufen. Zuerst liest eine Texterkennung auf Basis eines neuronalen Netzes die Zeichen in deinem Ausschnitt, sodass das Tool weiß, dass eine bestimmte Form ein „g“ ist und kein „q“. Danach wird jeder erkannte Buchstabe vermessen (Strichstärke, x-Höhe, Breite, Kontrast und die Details, die eine Schrift von einer anderen unterscheiden) und mit einem vorab erstellten Index von Glyphen aus mehr als 1.900 Google-Fonts-Familien verglichen. Die insgesamt ähnlichsten Treffer landen ganz oben in der Liste.</p>
<p>Dass das alles auf deinem eigenen Gerät läuft, hat neben dem Datenschutz auch praktische Vorteile: Es gibt keine Warteschlange, keinen Server, der ausfallen kann, und keine Kosten, die weitergegeben werden müssten. Deshalb bleibt das Tool <strong>kostenlos</strong> – ohne Anmeldung, Credits oder Limits. Die Texterkennung und die Schriftdaten werden beim ersten Scan heruntergeladen und von deinem Browser zwischengespeichert, sodass spätere Scans schneller gehen.</p>

<h2>Schrift aus Bild erkennen – kostenlos und mit echten Lizenzen</h2>
<p>Eine <strong>kostenlose Schrifterkennung</strong> bringt nur etwas, wenn auch die Ergebnisse kostenlos sind. Jeder Treffer hier steht unter einer offenen Lizenz, meist der SIL Open Font License oder Apache 2.0. Beide erlauben die kommerzielle Nutzung, die Einbettung auf Websites und die Verwendung in Logos. Jede Ergebniskarte zeigt die Lizenz auf einen Blick, damit du dich nie durch die Seiten von Schriftherstellern wühlen musst, um herauszufinden, was erlaubt ist.</p>
<p>Wenn das Bild eine kommerzielle Schrift wie Helvetica, Gotham, Futura oder Proxima Nova verwendet, findest du zwar nicht das kostenpflichtige Original, aber die ähnlichsten <strong>kostenlosen Schriftarten</strong> – ausgewählt durch den Vergleich der echten Buchstabenformen. Die Karten zeigen an, welchen bekannten Kaufschriften sie ähneln. So siehst du sofort, dass Inter oder Arimo für Helvetica einspringen, Montserrat für Gotham und Jost für Futura.</p>

<h2>Google Font finden für Websites und Apps</h2>
<p>Die meisten Websites und Apps nutzen heute Google Fonts wie Inter, Roboto, Open Sans, Poppins und Montserrat. Deshalb ist dieser <strong>Google Font Finder</strong> besonders stark bei Screenshots von Webseiten, Dashboards, Präsentationen und mobilen Apps: Ist das Original eine Google Font, stehen die Chancen gut, dass sie weit oben in deinen Ergebnissen auftaucht. Jeder Treffer verlinkt auf seine Google-Fonts-Seite, wo du Schriftschnitte auswählen und den <code>&lt;link&gt;</code>- oder <code>@import</code>-Code für deine eigene Website kopieren kannst. Eine ausführlichere Anleitung findest du im <a href="/google-font-finder">Ratgeber zum Google Font Finder</a>.</p>

<h2>Schriftart finden per Text: Treffer mit deinen eigenen Wörtern vergleichen</h2>
<p>Ähnliche Schriften sehen in einem kurzen Beispiel oft fast gleich aus. Deshalb kannst du mit diesem Tool eine <strong>Schriftart auch per Text finden</strong>: Tippe ein beliebiges Wort oder einen Satz ins Vorschaufeld und jeder Treffer zeigt sofort diesen Text. Probiere Wörter mit markanten Buchstaben wie „Rag 1984“ oder „Quality goods“, um den Bogen des „g“, das Bein des „R“, die Form der Ziffern und die Abstände zwischen den Buchstaben zu vergleichen. Deine echte Überschrift oder deinen Markennamen in jedem Kandidaten zu sehen, ist der schnellste Weg, dich zwischen ähnlichen Treffern zu entscheiden.</p>

<h2>Tipps für genaue Ergebnisse aus jedem Bild</h2>
<ul>
  <li>Nutze die schärfste Version des Bildes, die du hast. Große PNG-Exporte schlagen kleine, stark komprimierte Vorschaubilder.</li>
  <li>Fotografiere Text frontal, vermeide Spiegelungen und halte die Zeile gerade statt schräg oder verzerrt.</li>
  <li>Schneide auf eine einzelne Zeile in einer einzigen Schrift zu. Gemischte Stile in einer Auswahl bringen jeden Abgleich durcheinander.</li>
  <li>Dunkler Text auf schlichtem, hellem Hintergrund funktioniert am besten, aber heller Text auf dunklem Hintergrund wird ebenfalls unterstützt.</li>
  <li>Am schwierigsten sind fließende Schreibschriften, stark verzierte Display-Schriften und individuell gezeichnete Logos. Betrachte die Ergebnisse dort als nächstliegende Ausgangspunkte statt als exakte Antwort.</li>
</ul>

<h2>Wer nutzt diese Schrifterkennung?</h2>
<p>Grafikdesigner nutzen sie, um Schriften in Kunden-Briefings und alten Dateien zuzuordnen. Webentwickler bauen damit Oberflächen aus Screenshots nach. Kleine Unternehmen finden eine kostenlose Schrift, die zu ihrer Marke passt, und Studierende und Hobby-Kreative bauen Looks nach, die ihnen gefallen – für Präsentationen, Poster und Social-Media-Posts. Egal welches Projekt, das Ziel ist dasselbe: in weniger als einer Minute von „Welche Schriftart ist das?“ zur Schriftdatei auf deinem Computer. Wenn du ein Logo nachbauen willst, findest du auf unserer Seite <a href="/logo-font-finder">Logo-Schriftart erkennen</a> alles zu individuellen Schriftzügen und Marken, und die Seite <a href="/free-font-finder">Kostenlose Schriftarten finden</a> erklärt die Lizenzen genauer.</p>

<h2>Jetzt Schriftart finden</h2>
<p>Font Finder Tool vereint KI-Texterkennung, Formabgleich mit 1.900+ Google Fonts, Live-Vorschau und klare Lizenzinfos in einem kostenlosen, privaten Tool. Scroll nach oben, <a href="#detector">lade ein Bild hoch</a> und sieh nach, welche Schriften passen. Keine Anmeldung nötig.</p>`
  },

  homeFaq: [
    {
      q: 'Was ist ein Font Finder?',
      a: 'Ein Font Finder ist ein Tool, das die Schriftart in einem Bild erkennt. Font Finder Tool liest die Buchstaben in deinem Screenshot, Foto oder Logo, vergleicht ihre Formen mit 1.900+ kostenlosen Google Fonts und zeigt dir die ähnlichsten Treffer als Vorschau mit deinem eigenen Text.'
    },
    {
      q: 'Kann Google eine Schriftart erkennen?',
      a: 'Nicht direkt. Google hat kein eigenes Tool zur Schrifterkennung, und Google Lens erkennt den Text in einem Bild, nennt aber nicht die Schriftart. Um eine Schriftart zu erkennen, lade das Bild in einen Font Finder wie diesen hoch, der die Buchstabenformen mit der Google-Fonts-Bibliothek abgleicht.'
    },
    {
      q: 'Wie kann ich eine Schriftart bestimmen?',
      a: 'Achte auf die typischen Merkmale: mit oder ohne Serifen, die Form von Buchstaben wie „a“, „g“, „R“ und „Q“, den Strichkontrast und die x-Höhe. Oder spar dir das Rätselraten: Lade ein Bild des Textes hoch, ziehe einen Rahmen um eine Zeile und klicke auf „Schrift erkennen“, um eine sortierte Liste passender Schriften zu bekommen.'
    },
    {
      q: 'Wie sehe ich, welche Schriftart verwendet wird?',
      a: 'Auf einer Website klickst du mit der rechten Maustaste auf den Text, wählst „Untersuchen“ und prüfst den Wert font-family im Tab „Berechnet“. In Word oder Google Docs markierst du den Text und liest das Schriftartmenü ab. Bei Bildern, Logos und Screenshots, in denen der Schriftname nicht gespeichert ist, lädst du das Bild in einen Font Finder hoch.'
    },
    {
      q: 'Kann ich eine Schriftart mit KI erkennen?',
      a: 'Ja. Font Finder Tool ist ein KI-Font-Finder: Eine Texterkennung auf Basis eines neuronalen Netzes liest die Buchstaben in deinem Bild, dann wird die Form jedes Buchstabens vermessen und mit einem Glyphenindex aus 1.900+ Google Fonts verglichen. Alles läuft in deinem Browser – schnell, kostenlos und privat.'
    },
    {
      q: 'Gibt es einen kostenlosen Font Finder?',
      a: 'Ja. Font Finder Tool ist komplett kostenlos – ohne Konto, ohne Wasserzeichen und ohne Tageslimit. Der Abgleich läuft in deinem eigenen Browser, es fallen also keine Serverkosten an, die weitergegeben werden müssten. Und jede vorgeschlagene Schrift kannst du ebenfalls kostenlos herunterladen.'
    },
    {
      q: 'Wie finde ich eine passende Schriftart?',
      a: 'Schneide ein Bild auf eine einzelne Zeile des Textes zu, den du zuordnen willst, lade es hoch und starte die Erkennung. Tippe dann eigene Wörter ins Vorschaufeld und vergleiche markante Buchstaben und Ziffern nebeneinander, bis du den besten Treffer gefunden hast. Ist das Original eine Kaufschrift, wähle die kostenlose Alternative, die am besten passt.'
    },
    {
      q: 'Kann ich eine Schrift fotografieren und sie finden?',
      a: 'Ja. Mach ein Foto mit deinem Handy oder einen Screenshot und lade es hoch, zieh es hinein oder füge es ein (Strg+V). Fotografiere den Text frontal, bei gutem Licht und scharf, und schneide ihn für die besten Ergebnisse auf eine Zeile mit mindestens 10 Zeichen zu.'
    },
    {
      q: 'Wo finde ich kostenlose Schriftarten?',
      a: 'Google Fonts ist die größte Bibliothek kostenloser Open-Source-Schriften mit 1.900+ Familien, die du für private und kommerzielle Projekte nutzen kannst. Weitere vertrauenswürdige Quellen sind Fontshare und The League of Moveable Type. Prüfe immer die Lizenz, besonders auf Seiten, die Schriften vieler verschiedener Urheber sammeln.'
    },
    {
      q: 'Wie finde ich eine bestimmte Schriftart?',
      a: 'Wenn du den Namen kennst, suche bei Google Fonts oder auf der Website eines Schriftherstellers danach. Hast du nur ein Beispiel, lade ein Bild des Textes in einen Font Finder hoch. Die Treffer werden mit jedem Text angezeigt, den du eintippst, sodass du vor dem Download prüfen kannst, wie die Schrift mit deinen eigenen Wörtern aussieht.'
    },
    {
      q: 'Wie nutze ich Google Fonts?',
      a: 'Öffne fonts.google.com, wähle eine Schriftfamilie und klicke auf „Get font“. Für eine Website kopierst du den Einbettungscode in dein HTML und legst die Schriftfamilie in deinem CSS fest. Für Desktop-Programme lädst du die Schriftdateien herunter und installierst sie. In Google Docs und Google Präsentationen öffnest du das Schriftartmenü und wählst „Weitere Schriftarten“.'
    },
    {
      q: 'Kann ich mit KI eine Schriftart erstellen?',
      a: 'Teilweise. KI-Bildtools können Ideen für Schriftzüge generieren, und manche Dienste machen aus deiner Handschrift oder einem Satz gezeichneter Buchstaben eine installierbare Schrift. Eine vollständige, professionelle Schrift braucht aber weiterhin Arbeit in einem Schrifteditor wie dem kostenlosen FontForge, um Buchstabenformen, Abstände und Kerning zu verfeinern.'
    },
    {
      q: 'Welche Bilder liefern die besten Ergebnisse?',
      a: 'Am besten funktioniert ein scharfes, frontal aufgenommenes Bild mit dunklem Text auf schlichtem Hintergrund. Schneide auf eine einzelne Zeile mit mindestens 10 Zeichen zu und vermeide starke Schatten, Konturen oder verzerrte Perspektiven. Fließende Schreibschriften und stark verzierte Schriftzüge sind am schwierigsten zuzuordnen.'
    },
    {
      q: 'Sind die Ergebnisse immer exakt?',
      a: 'Nicht immer. Viele Schriften haben sehr ähnliche Buchstabenformen, und Logos sind oft individuell gestaltet oder abgewandelt. Vergleiche mit der Live-Vorschau Details wie „a“, „g“, „R“ und die Ziffern, bevor du dich entscheidest. Nutzt dein Bild eine kommerzielle Schrift, bekommst du stattdessen die ähnlichsten kostenlosen Google Fonts, und auf jeder Karte stehen bekannte kostenpflichtige Schriften, denen sie ähneln.'
    },
    {
      q: 'Darf ich die Schriften kommerziell nutzen?',
      a: 'Ja. Google Fonts stehen unter offenen Lizenzen (meist der SIL Open Font License), die private und kommerzielle Nutzung erlauben, auch für Logos, Websites und Druckprodukte. Jedes Ergebnis zeigt seine Lizenz an.'
    },
    {
      q: 'Seht ihr meine Bilder?',
      a: 'Nein. Dein Bild wird komplett auf deinem Gerät verarbeitet und nie hochgeladen. Beim ersten Scan werden die Texterkennung und Teile des Schriftenindex heruntergeladen, die dein Browser dann zwischenspeichert. Deine letzten Scans werden nur in deinem Browser gespeichert und lassen sich jederzeit löschen.'
    },
    {
      q: 'Kann das Tool Schriften in Logos erkennen?',
      a: 'Oft ja, solange das Logo eine echte Schriftart verwendet. Für individuell gezeichnete Schriftzüge gibt es keinen exakten Treffer, aber du bekommst trotzdem die ähnlichsten kostenlosen Schriften.'
    }
  ] as FaqItem[],

  landing: {
    'what-font-is-this': {
      metaTitle: 'Welche Schriftart ist das? Jetzt erkennen | Font Finder Tool',
      metaDescription:
        'Du fragst dich: „Welche Schriftart ist das?“ Lade ein Bild oder einen Screenshot hoch und finde die ähnlichsten kostenlosen Google Fonts in deinem Text.',
      breadcrumb: 'Welche Schriftart ist das?',
      eyebrow: 'Welche Schriftart ist das?',
      h1: 'Welche Schriftart ist das? Finde es per Bild heraus',
      intro:
        'Eine Schrift auf einem Poster, einer Website oder einer Speisekarte gesehen? Fotografiere sie, lade sie hoch und erhalte in Sekunden eine sortierte Liste passender Schriftarten.',
      sections: [
        {
          heading: '„Welche Schriftart ist das?“ in drei Schritten beantworten',
          body: [
            'Lade dein Bild hoch oder füge es ein, ziehe einen Rahmen um die Wörter und klicke auf „Schrift erkennen“. Wir vergleichen Form und Proportionen jedes Buchstabens (Strichstärke, x-Höhe, Breite und Details) mit jeder Schrift auf Google Fonts.',
            'Jedes Ergebnis wird in deinem eigenen Text angezeigt, damit du die Details prüfen kannst, an denen man ähnliche Schriften unterscheidet: den Bogen des „g“, das Bein des „R“, die Form der Ziffern.'
          ]
        },
        {
          heading: 'Woher die Schrift meistens stammt',
          body: [
            'Websites und Apps nutzen oft kostenlose Google Fonts wie Inter, Roboto und Montserrat – die kannst du exakt zuordnen. Print, Verpackungen und Markenauftritte setzen häufiger auf kommerzielle Familien wie Helvetica Neue, Gotham oder Futura. Dafür bekommst du die ähnlichsten kostenlosen Alternativen, und die Karten zeigen, welchen Kaufschriften sie ähneln.'
          ]
        }
      ],
      faq: [
        {
          q: 'Warum sieht das beste Ergebnis etwas anders aus?',
          a: 'Viele Schriften sind fast identisch, und Bilder können feine Details verwischen. Sieh dir auch den zweiten und dritten Treffer an und vergleiche sie in der Live-Vorschau mit deinem eigenen Text.'
        },
        {
          q: 'Kann ich eine Schriftart von einem Handyfoto erkennen?',
          a: 'Ja. Halte die Kamera frontal auf den Text, vermeide Spiegelungen und schneide vor dem Scan auf eine einzelne Zeile zu, um die beste Genauigkeit zu erreichen.'
        }
      ]
    } as LandingContent,
    'free-font-finder': {
      metaTitle: 'Kostenlose Schriftarten finden per Bild | Font Finder Tool',
      metaDescription:
        'Finde kostenlose Schriftarten aus jedem Bild. Jeder Treffer ist eine gratis Google Font für die kommerzielle Nutzung – inkl. Alternativen zu Kaufschriften.',
      breadcrumb: 'Kostenlose Schriftarten finden',
      eyebrow: 'Kostenloser Font Finder',
      h1: 'Kostenlose Schriftarten finden, die zu jedem Bild passen',
      intro:
        'Jedes Ergebnis ist eine kostenlose Open-Source-Schrift von Google Fonts, die du noch heute herunterladen und nutzen kannst – auch für kommerzielle Projekte.',
      sections: [
        {
          heading: 'Kostenlose Schriften, die du wirklich nutzen darfst',
          body: [
            'Die meisten kostenlosen Treffer stammen von Google Fonts und Fontsource und stehen unter der SIL Open Font License oder Apache 2.0. Beide erlauben private und kommerzielle Nutzung, auch für Logos, Websites und Druckprodukte.',
            'Jede Karte zeigt die Lizenz, damit du vor dem Download weißt, woran du bist.'
          ]
        },
        {
          heading: 'Wenn die Originalschrift kostenpflichtig ist',
          body: [
            'Verwendet das Bild eine kommerzielle Schrift, bekommst du stattdessen die ähnlichsten kostenlosen Schriften. Die Karten markieren bekannte Kaufschriften, denen sie ähneln: Inter oder Arimo für Helvetica, Montserrat für Gotham, Jost für Futura und viele mehr.'
          ]
        }
      ],
      faq: [
        {
          q: 'Sind Google Fonts für die kommerzielle Nutzung kostenlos?',
          a: 'Ja. Google Fonts stehen unter offenen Lizenzen (meist OFL), die kommerzielle Nutzung, Bearbeitung und Einbettung erlauben.'
        },
        {
          q: 'Was, wenn die Schrift in meinem Bild kostenpflichtig ist?',
          a: 'Dann siehst du die ähnlichsten kostenlosen Google Fonts. Sie sind nicht identisch, werden aber durch den Vergleich der echten Buchstabenformen ausgewählt und sind damit die nächstliegenden kostenlosen Alternativen.'
        }
      ]
    } as LandingContent,
    'logo-font-finder': {
      metaTitle: 'Logo-Schriftart erkennen und finden | Font Finder Tool',
      metaDescription:
        'Finde die Schriftart in einem Logo. Lade das Logo hoch, schneide den Schriftzug zu und erhalte die ähnlichsten kostenlosen Google Fonts mit Lizenzinfos.',
      breadcrumb: 'Logo-Schriftart erkennen',
      eyebrow: 'Logo-Schriftart erkennen',
      h1: 'Die Schriftart in jedem Logo erkennen',
      intro:
        'Lade ein Logo hoch, schneide den Schriftzug zu und sieh, welche Schriften am nächsten kommen – mit kostenlosen Alternativen für markentypische Schriftzüge.',
      sections: [
        {
          heading: 'So bekommst du einen sauberen Logo-Scan',
          body: [
            'Schneide Symbole und Slogans weg und behalte nur den Namen. Auch ein helles Logo auf dunklem Grund funktioniert. Dateien mit höherer Auflösung (SVG-Exporte oder große PNGs) liefern zuverlässigere Treffer als kleine Favicons.'
          ]
        },
        {
          heading: 'Individuelle Schriftzüge und abgewandelte Schriften',
          body: [
            'Viele Marken starten mit einer Schriftart und passen dann Abstände an, schneiden Buchstaben zu oder zeichnen eigene Glyphen. Dann gibt es keinen exakten Treffer, aber die ähnlichsten Grundschriften sind trotzdem der beste Ausgangspunkt für einen ähnlichen Look.',
            'Denk daran: Eine Schriftlizenz gibt dir keine Rechte an der Marke eines Unternehmens. Nutze die Treffer als Inspiration, nicht zum Nachahmen.'
          ]
        }
      ],
      faq: [
        {
          q: 'Darf ich dieselbe Schrift wie ein bekanntes Logo verwenden?',
          a: 'Du darfst die Schrift nutzen, wenn du sie korrekt lizenzierst, aber du darfst kein geschütztes Logo und keine Marke kopieren. Nutze die Schrift, um dein eigenes, unverwechselbares Design zu gestalten.'
        },
        {
          q: 'Warum gibt es für mein Logo keine exakten Treffer?',
          a: 'Das Logo ist wahrscheinlich individuell gezeichnet oder stark abgewandelt. Die Ergebnisse zeigen dir die ähnlichsten Schriften, die du stattdessen nutzen kannst.'
        }
      ]
    } as LandingContent,
    'google-font-finder': {
      metaTitle: 'Google Font aus Bild finden und erkennen | Font Finder Tool',
      metaDescription:
        'Finde die Google Font in jedem Bild. Lade einen Screenshot hoch und erhalte passende Google Fonts mit Live-Vorschau und Download-Link per Klick.',
      breadcrumb: 'Google Font finden',
      eyebrow: 'Google Font Finder',
      h1: 'Die Google Font in jedem Bild finden',
      intro:
        'Lade einen Screenshot einer Website, App oder Präsentation hoch und erhalte die passenden Google Fonts – als Vorschau in deinem Text, nur einen Klick vom Download entfernt.',
      sections: [
        {
          heading: '1.900+ Google Fonts per Bild durchsuchen',
          body: [
            'Kostenlose Treffer verlinken direkt auf die Schriftseite bei Google Fonts, wo du die Familie herunterladen oder den Einbettungscode für deine Website kopieren kannst.',
            'Da Google Fonts Open Source sind, kannst du sie für private und kommerzielle Projekte nutzen, auch für Apps und Kundenaufträge.'
          ]
        },
        {
          heading: 'Ähnlich heißt nicht immer identisch',
          body: [
            'Familien wie Inter, Roboto und Arimo sehen in kleinen Größen ähnlich aus. Tippe ein Wort mit markanten Buchstaben, zum Beispiel „Rag 1984“, ins Vorschaufeld, um sie richtig zu vergleichen.'
          ]
        }
      ],
      faq: [
        {
          q: 'Wie füge ich eine Google Font zu meiner Website hinzu?',
          a: 'Öffne die Google-Fonts-Seite des Ergebnisses, wähle die benötigten Schnitte und kopiere den angezeigten <link>- oder @import-Code in deine Website.'
        },
        {
          q: 'Findet das Tool auch Schriften, die nicht bei Google Fonts sind?',
          a: 'Nein. Die Treffer stammen immer von Google Fonts und sind daher kostenlos nutzbar. Für kommerzielle Schriften bekommst du die ähnlichsten kostenlosen Alternativen.'
        }
      ]
    } as LandingContent
  },

  pages: {
    about: {
      title: 'Über uns | Font Finder Tool',
      description:
        'Font Finder Tool hilft Designern und Entwicklern, Schriftarten aus Bildern zu erkennen und kostenlose Alternativen zu finden.',
      heading: 'Über uns',
      html: `<p>Font Finder Tool entstand aus einem einfachen Frust: Tools zur Schrifterkennung nennen dir einen Namen und überlassen es dann dir herauszufinden, ob du dir die Schrift leisten kannst, ob du sie nutzen darfst und wie sie mit deinen Wörtern tatsächlich aussieht.</p>
<p>Also haben wir einen Finder gebaut, der nur Schriften liefert, die du wirklich nutzen kannst. Jedes Ergebnis ist eine kostenlose Open-Source-Schrift von Google Fonts, als Vorschau in deinem eigenen Text, mit Lizenz und direktem Download-Link. Verwendet dein Bild eine kommerzielle Schrift, bekommst du die ähnlichsten kostenlosen Alternativen, und die Karten zeigen, welchen Kaufschriften sie ähneln.</p>

<h2>So funktioniert der Abgleich</h2>
<p>Alles läuft in deinem Browser. Das Tool liest die Buchstaben in deinem Ausschnitt, dann werden Form und Proportionen jedes Buchstabens mit einem vorab erstellten Index aller Schriften auf <a href="https://fonts.google.com" rel="noopener">Google Fonts</a> verglichen (bereitgestellt über <a href="https://fontsource.org" rel="noopener">Fontsource</a>). Dein Bild wird nie hochgeladen.</p>

<h2>Kontakt aufnehmen</h2>
<p>Einen falschen Treffer gefunden oder einen Funktionswunsch? Schreib an <a href="mailto:hello@fontfindertool.com">hello@fontfindertool.com</a> oder besuche unsere <a href="/contact">Kontaktseite</a>.</p>`
    } as ProseContent,
    contact: {
      title: 'Kontakt | Font Finder Tool',
      description:
        'Kontaktiere Font Finder Tool, um einen falschen Treffer zu melden, eine Funktion vorzuschlagen oder eine Frage zu stellen.',
      heading: 'Kontakt',
      html: `<p>Wir lesen jede Nachricht. Am schnellsten erreichst du uns per E-Mail an <a href="mailto:hello@fontfindertool.com"><strong>hello@fontfindertool.com</strong></a>. Wir antworten normalerweise innerhalb weniger Werktage.</p>

<h2>Falschen Treffer melden</h2>
<p>Wenn der Finder die falsche Schrift vorgeschlagen hat, sag uns, was du erwartet hast, und hänge wenn möglich das gescannte Bild an. Scans laufen auf deinem Gerät, wir sehen dein Bild also nur, wenn du es uns schickst.</p>

<h2>Funktionswünsche und Feedback</h2>
<p>Ideen für neue Tools, Schriften, die wir abdecken sollen, oder alles, was dir unklar vorkam – wir freuen uns darüber.</p>

<h2>Datenschutz und Rechtliches</h2>
<p>Bei Fragen zum Umgang mit Daten oder zu unseren Bedingungen nutze dieselbe Adresse und schreib „Datenschutz“ oder „Rechtliches“ in den Betreff. Siehe auch unsere <a href="/privacy">Datenschutzerklärung</a> und <a href="/terms">Nutzungsbedingungen</a>.</p>`
    } as ProseContent,
    privacy: {
      title: 'Datenschutzerklärung | Font Finder Tool',
      description:
        'Wie Font Finder Tool mit deinen Bildern und Daten umgeht: Der Abgleich läuft auf deinem Gerät, Bilder werden nie hochgeladen.',
      heading: 'Datenschutzerklärung',
      html: `<p>Font Finder Tool („wir“, „uns“) betreibt fontfindertool.com. Diese Seite erklärt, was mit deinen Daten passiert, wenn du die Website nutzt.</p>

<h2>Deine Bilder bleiben auf deinem Gerät</h2>
<p>Der Schriftabgleich läuft vollständig in deinem Browser. Wenn du ein Bild scannst, wird es auf deinem eigenen Gerät zugeschnitten, gelesen und mit unserem Schriftenindex verglichen. <strong>Dein Bild wird nie hochgeladen</strong> – weder zu uns noch zu sonst jemandem.</p>

<h2>Dateien, die dein Browser herunterlädt</h2>
<p>Für den Abgleich lädt dein Browser Folgendes herunter:</p>
<ul>
  <li>die Texterkennung <a href="https://tesseract.projectnaptha.com" rel="noopener">Tesseract.js</a> und ihre englischen Sprachdaten vom jsDelivr-CDN;</li>
  <li>Teile unseres Schriftenindex von fontfindertool.com;</li>
  <li>Schriftdateien für die Vorschauen von Fontsource über jsDelivr.</li>
</ul>
<p>Diese Anfragen enthalten übliche technische Daten wie deine IP-Adresse und deinen Browsertyp, aber niemals dein Bild.</p>

<h2>Daten in deinem Browser</h2>
<p>Deine letzten Scans (ein kleines Vorschaubild und die Ergebnisse) und deine Wahl des Farbschemas werden im lokalen Speicher deines Browsers abgelegt. Sie verlassen nie dein Gerät, und du kannst die letzten Scans mit der Schaltfläche „Löschen“ entfernen.</p>

<h2>Hosting</h2>
<p>Die Website wird bei Cloudflare gehostet, das Anfrageprotokolle (etwa IP-Adressen) verarbeiten kann, um die Website auszuliefern und abzusichern. Wir verwenden keine Werbe- oder Tracking-Cookies.</p>

<h2>Kinder</h2>
<p>Die Website ist ein allgemeines Design-Tool und richtet sich nicht an Kinder unter 13 Jahren. Wir erheben wissentlich keine personenbezogenen Daten von irgendjemandem.</p>

<h2>Deine Wahlmöglichkeiten</h2>
<p>Da wir keine Konten führen und deine Bilder nicht speichern, gibt es kein persönliches Profil, das wir weitergeben, verkaufen oder löschen könnten. Wenn du uns eine E-Mail schreibst, nutzen wir deine Nachricht nur, um dir zu antworten, und du kannst uns jederzeit bitten, unsere Korrespondenz zu löschen.</p>
<p>Egal wo du dich befindest, du kannst uns per E-Mail fragen, welche Informationen wir über dich haben, oder sie berichtigen oder löschen lassen.</p>

<h2>Änderungen dieser Erklärung</h2>
<p>Wenn wir ändern, wie die Website mit Daten umgeht, aktualisieren wir diese Seite und das Datum „Zuletzt aktualisiert“ oben.</p>

<h2>Kontakt</h2>
<p>Fragen zum Datenschutz? Schreib an <a href="mailto:hello@fontfindertool.com">hello@fontfindertool.com</a> oder besuche unsere <a href="/contact">Kontaktseite</a>.</p>`
    } as ProseContent,
    terms: {
      title: 'Nutzungsbedingungen | Font Finder Tool',
      description: 'Die Bedingungen, die gelten, wenn du Font Finder Tool nutzt.',
      heading: 'Nutzungsbedingungen',
      html: `<p>Mit der Nutzung von fontfindertool.com stimmst du diesen Bedingungen zu.</p>

<h2>Der Dienst</h2>
<p>Font Finder Tool schlägt Google Fonts vor, die dem Text in einem von dir bereitgestellten Bild ähneln. Der Abgleich läuft in deinem Browser. Die Ergebnisse sind automatisierte Vorschläge und möglicherweise nicht exakt. Der Dienst wird „wie besehen“ bereitgestellt, ohne jegliche Gewährleistung.</p>

<h2>Faire Nutzung</h2>
<p>Lies den Schriftenindex nicht automatisiert aus, lade ihn nicht massenhaft herunter und belaste die Website auch nicht auf andere Weise unangemessen.</p>

<h2>Deine Bilder</h2>
<p>Bilder, die du scannst, werden auf deinem eigenen Gerät verarbeitet und nicht zu uns hochgeladen. Du bist dafür verantwortlich, die Rechte zur Nutzung jedes Bildes zu haben, das du scannst.</p>

<h2>Schriftlizenzen</h2>
<p>Wir verkaufen und lizenzieren keine Schriften. Vorgeschlagene Schriften stammen von Google Fonts und werden unter ihren eigenen offenen Lizenzen verbreitet; Lizenzzusammenfassungen dienen nur der Orientierung. Die vollständigen Bedingungen findest du auf der Seite der jeweiligen Schrift. Hinweise, dass eine Schrift einer kommerziellen Schrift ähnelt, dienen nur als Referenz und implizieren keine Verbindung zum Inhaber dieser Schrift. Die Nutzung einer Schrift gewährt keine Rechte an Marken oder Logos, in denen sie vorkommt.</p>

<h2>Unsere Inhalte</h2>
<p>Design, Texte, Code und Schriftenindex der Website gehören Font Finder Tool. Du darfst Links zur Website teilen, aber kopiere oder veröffentliche wesentliche Teile davon nicht ohne Erlaubnis. Schriftnamen und Marken gehören ihren jeweiligen Inhabern.</p>

<h2>Haftungsbeschränkung</h2>
<p>Soweit gesetzlich zulässig, haftet Font Finder Tool nicht für indirekte, zufällige oder Folgeschäden, die aus deiner Nutzung der Website oder ihrer Ergebnisse entstehen, einschließlich jeder Entscheidung, eine vorgeschlagene Schrift zu verwenden. Prüfe immer die Lizenz einer Schrift, bevor du sie in deiner Arbeit verwendest.</p>

<h2>Links zu Dritten</h2>
<p>Ergebnisse verlinken auf Websites Dritter wie Google Fonts und Fontsource. Wir sind nicht für deren Inhalte oder Bedingungen verantwortlich.</p>

<h2>Änderungen</h2>
<p>Wir können diese Bedingungen aktualisieren. Wenn du die Website nach Änderungen weiter nutzt, akzeptierst du sie.</p>

<h2>Kontakt</h2>
<p>Fragen zu diesen Bedingungen? Besuche unsere <a href="/contact">Kontaktseite</a> oder schreib an <a href="mailto:hello@fontfindertool.com">hello@fontfindertool.com</a>.</p>`
    } as ProseContent
  },

  errors: {
    notFound: {
      title: 'Seite nicht gefunden | Font Finder Tool',
      description: 'Diese Seite existiert nicht.',
      heading: 'Diese Seite fehlt',
      message: 'Die gesuchte Seite gibt es nicht. Die Schrift, nach der du suchst, aber vielleicht schon.',
      primary: 'Schrift finden',
      secondary: 'Defekten Link melden'
    },
    serverError: {
      title: 'Etwas ist schiefgelaufen | Font Finder Tool',
      description: 'Ein unerwarteter Fehler ist aufgetreten.',
      heading: 'Etwas ist schiefgelaufen',
      message:
        'Ein unerwarteter Fehler hat das Laden dieser Seite verhindert. Versuche es gleich noch einmal oder geh zurück zum Font Finder.',
      primary: 'Erneut versuchen',
      secondary: 'Zur Startseite'
    }
  },

  schema: {
    webAppDescription:
      'Kostenloser KI-Font-Finder: Lade ein Bild hoch, um die Schriftart zu erkennen, und finde passende kostenlose Google Fonts mit Live-Vorschau und Lizenzinfos.',
    browserRequirements: 'Erfordert JavaScript und einen modernen Webbrowser.',
    featureList: [
      'Schriftart per Bild finden: Screenshot, Foto oder Logo hochladen, hineinziehen oder einfügen',
      'KI-Texterkennung und Formabgleich mit 1.900+ Google Fonts',
      'Vorschau jedes Treffers mit deinem eigenen Text',
      'Kostenlose Alternativen zu beliebten Kaufschriften',
      'Lizenzübersicht und Download-Link bei jedem Ergebnis',
      'Läuft in deinem Browser: Bilder werden nie hochgeladen'
    ]
  }
};

export default de;
