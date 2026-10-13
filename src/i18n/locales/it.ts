import type { ComparisonRow, FaqItem, LandingContent, Locale, ProseContent } from './en';

const it: Locale = {
  ui: {
    'site.skip': 'Vai al contenuto',
    'site.logoLabel': 'Font Finder Tool, home page',
    'site.tagline': 'Riconosci il font di qualsiasi immagine e trova il Google Font gratuito corrispondente.',
    'site.ogImageAlt': 'Font Finder Tool: strumento gratuito per riconoscere i font da qualsiasi immagine',

    'nav.main': 'Principale',
    'nav.mobile': 'Mobile',
    'nav.openMenu': 'Apri il menu',
    'nav.howItWorks': 'Come funziona',
    'nav.freeFonts': 'Font gratis',
    'nav.logoFonts': 'Font dei loghi',
    'nav.faq': 'FAQ',
    'nav.findFont': 'Trova un font',

    'footer.tools': 'Strumenti',
    'footer.resources': 'Risorse',
    'footer.legal': 'Note legali',
    'footer.fontFinder': 'Riconoscere font',
    'footer.whatFont': 'Che font è questo?',
    'footer.freeFinder': 'Trova font gratis',
    'footer.googleFinder': 'Trova Google Font',
    'footer.logoFinder': 'Font dei loghi',
    'footer.about': 'Chi siamo',
    'footer.contact': 'Contatti',
    'footer.privacy': 'Informativa sulla privacy',
    'footer.terms': 'Termini e condizioni',
    'footer.fontsFrom': 'Font da',
    'footer.via': 'tramite',

    'lang.label': 'Lingua',

    'theme.label': 'Tema colori',
    'theme.system': 'Sistema',
    'theme.light': 'Chiaro',
    'theme.dark': 'Scuro',
    'theme.toDark': 'Passa al tema scuro',
    'theme.toLight': 'Passa al tema chiaro',

    'hero.fonts': '1.900+ Google Fonts',
    'hero.crop': 'Ritaglia solo il testo',
    'hero.browser': 'Funziona nel tuo browser',

    'faq.eyebrow': 'FAQ',
    'faq.title': 'Domande frequenti',
    'faq.landingTitle': '{name}: domande frequenti',

    'prose.updated': 'Ultimo aggiornamento: {date}',

    'compare.yes': 'Sì',
    'compare.no': 'No',

    'detector.drop': 'Trascina un’immagine, incollala o *sfoglia*',
    'detector.tap': 'Tocca per *scegliere una foto o uno screenshot*',
    'detector.dropHint': 'Screenshot, loghi, poster, foto · elaborati sul tuo dispositivo',
    'detector.pasteHint': 'per incollare dagli appunti',
    'detector.cropHint': '*Trascina sopra il testo* che vuoi identificare. Una sola riga funziona meglio.',
    'detector.useWhole': 'Usa l’immagine intera',
    'detector.uploadedAlt': 'La tua immagine caricata',
    'detector.chooseAnother': 'Scegli un’altra immagine',
    'detector.identify': 'Identifica il font',
    'detector.reading': 'Lettura delle lettere…',
    'detector.thumbAlt': 'Immagine analizzata',
    'detector.matches': 'Risultati',
    'detector.copyList': 'Copia elenco',
    'detector.newScan': 'Nuova scansione',
    'detector.filterLabel': 'Filtra per stile',
    'detector.previewLabel': 'Testo di anteprima',
    'detector.previewPlaceholder': 'Scrivi per l’anteprima',
    'detector.footnote': 'Confronto eseguito sul tuo dispositivo con il catalogo Google Fonts. La tua immagine non lascia mai il browser.',
    'detector.recent': 'Scansioni recenti',
    'detector.clear': 'Cancella',
    'detector.free': 'Gratis',
    'detector.altTo': 'Alternativa gratuita a',
    'detector.similarLabel': 'Font commerciali simili',
    'detector.getOnGoogle': 'Scarica da Google Fonts',
    'detector.copyName': 'Copia nome'
  },

  client: {
    notImage: 'Questo file non è un’immagine. Prova con un PNG, JPG o WebP.',
    tooLarge: 'L’immagine supera i 15 MB. Prova con uno screenshot o un’esportazione più leggera.',
    unreadable: 'Impossibile leggere questa immagine.',
    generic: 'Qualcosa è andato storto. Riprova.',
    indexError: 'Impossibile caricare l’indice dei font.',
    tooFewLetters: 'Non siamo riusciti a leggere abbastanza lettere. Prova a ritagliare più stretto attorno a una riga di testo nitido.',
    loadingReader: 'Caricamento del lettore di testo…',
    readingLetters: 'Lettura delle lettere…',
    comparing: 'Confronto di {letters} lettere con {fonts} Google Fonts…',
    resultsOne: '{n} font gratuito corrispondente',
    resultsMany: '{n} font gratuiti corrispondenti',
    lettersCompared: '{n} lettere confrontate',
    readText: 'letto «{text}»',
    all: 'Tutti',
    categories: {
      'sans-serif': 'Sans',
      serif: 'Serif',
      display: 'Display',
      handwriting: 'Script',
      monospace: 'Mono'
    },
    regular: 'Normale',
    bold: 'Grassetto',
    match: {
      best: 'Miglior risultato',
      veryClose: 'Molto simile',
      close: 'Simile',
      similar: 'Affine'
    },
    licenses: {
      'OFL-1.1': 'SIL Open Font License · gratis per uso personale e commerciale',
      'Apache-2.0': 'Apache 2.0 · gratis per uso personale e commerciale',
      'UFL-1.0': 'Ubuntu Font Licence · gratis per uso personale e commerciale',
      other: 'Licenza {name} · uso gratuito'
    },
    copied: 'Copiato',
    copyFailed: 'Copia non riuscita',
    copyAllHeader: 'Font trovati su fontfindertool.com',
    scan: 'Scansione',
    defaultPreview: 'Ecco il font perfetto'
  },

  home: {
    title: 'Font Finder: riconoscere font da immagine | Font Finder Tool',
    description:
      'Riconosci qualsiasi font da un’immagine in pochi secondi. Font finder AI gratis con 1.900+ Google Fonts e anteprima nel tuo testo. Senza registrazione.',
    eyebrow: 'Font finder AI gratuito',
    h1: 'Font Finder: hai visto un font che ti piace? Trovalo in pochi secondi.',
    intro:
      'Carica uno screenshot, un logo o una foto: il nostro font finder confronta le lettere con oltre 1.900 Google Fonts gratuiti, direttamente nel tuo browser, senza registrazione e senza limiti.'
  },

  howItWorks: {
    eyebrow: 'Come funziona',
    title: 'Come trovare un font da un’immagine in quattro passaggi',
    steps: [
      {
        title: 'Carica o incolla',
        body: 'Trascina uno screenshot, una foto, un logo o un poster, oppure incollalo direttamente dagli appunti con Ctrl+V.'
      },
      {
        title: 'Ritaglia il testo',
        body: 'Traccia un riquadro attorno a una riga di testo. Un ritaglio preciso con almeno 10 caratteri dà il risultato più accurato.'
      },
      {
        title: 'Confronta i risultati',
        body: 'Confrontiamo ogni lettera con oltre 1.900 Google Fonts e ti mostriamo i font più simili, visualizzati con il tuo testo.'
      },
      {
        title: 'Scarica gratis',
        body: 'Ogni risultato è un Google Font gratuito. Aprilo su Google Fonts per scaricarlo o copiare il codice da incorporare nel tuo sito.'
      }
    ]
  },

  features: {
    eyebrow: 'Perché Font Finder Tool',
    title: 'Pensato per chi il font deve usarlo davvero',
    description:
      'La maggior parte degli strumenti per riconoscere i font si ferma a un nome. Noi ti portiamo fino a un font che puoi usare legalmente, gratis quando possibile.',
    items: [
      {
        title: 'Ogni risultato è gratis',
        body: 'I risultati provengono dalle oltre 1.900 famiglie di Google Fonts, tutte open source e con licenza per uso commerciale. Filtrale per stile con un tocco.'
      },
      {
        title: 'Anteprima dal vivo con il tuo testo',
        body: 'I candidati mostrano le tue parole nel font reale, così confronti le forme delle lettere invece di tirare a indovinare da un nome.'
      },
      {
        title: 'Alternative gratuite ai font a pagamento',
        body: 'I risultati che somigliano a font commerciali famosi vengono segnalati, così sai che Inter può sostituire Helvetica e Montserrat può sostituire Gotham.'
      },
      {
        title: 'Licenza a colpo d’occhio',
        body: 'Scopri se un font è OFL, Apache o commerciale prima di scaricarlo, senza dover spulciare i siti delle fonderie.'
      },
      {
        title: 'Ritaglia prima di analizzare',
        body: 'Seleziona solo la riga che ti interessa. Foto piene di dettagli e poster con tanti font non confondono più il riconoscimento.'
      },
      {
        title: 'Funziona nel tuo browser',
        body: 'Il confronto avviene sul tuo dispositivo. La tua immagine non viene mai caricata, non ci sono limiti giornalieri e le scansioni recenti restano nel tuo browser.'
      }
    ],
    demo: {
      all: 'Tutti',
      serif: 'Serif',
      script: 'Script',
      preview: 'Ciao a tutti',
      license: 'OFL · uso commerciale OK'
    }
  },

  comparison: {
    eyebrow: 'Confronto',
    title: 'Molto più di un nome a caso',
    description: 'Come si posiziona Font Finder Tool rispetto ai classici strumenti per riconoscere i font da immagine.',
    feature: 'Funzione',
    us: 'Font Finder Tool',
    them: 'Strumenti tipici',
    rows: [
      { label: 'Ogni risultato scaricabile gratis', ours: true, theirs: false },
      { label: 'Filtro dei risultati per stile', ours: true, theirs: false },
      { label: 'Ritaglio preciso del testo', ours: true, theirs: false },
      { label: 'Anteprima dei risultati con il tuo testo', ours: true, theirs: false },
      { label: 'Alternative gratuite ai font a pagamento', ours: true, theirs: 'A volte' },
      { label: 'Riepilogo della licenza per ogni risultato', ours: true, theirs: false },
      { label: 'Link diretti per scaricare o acquistare', ours: true, theirs: false },
      { label: 'Scansioni gratuite al giorno', ours: 'Illimitate', theirs: '~3' },
      { label: 'Immagine caricata su un server', ours: 'Mai', theirs: 'Sì' }
    ] as ComparisonRow[]
  },

  guide: {
    eyebrow: 'Guida',
    title: 'Il font finder gratuito per immagini, loghi e screenshot',
    description:
      'Tutto quello che devi sapere per trovare un font da un’immagine e ottenerne una versione che puoi usare davvero.',
    html: `<p>Font Finder Tool è un <strong>font finder gratuito</strong> che riconosce il carattere tipografico di qualsiasi immagine. Carica uno screenshot, la foto di un menu, un poster, la copertina di un libro o il logo di un marchio e in pochi secondi ottieni un elenco ordinato di font corrispondenti, ognuno visualizzato con il tuo testo, con la sua licenza e un link per scaricarlo gratis. Non devi creare un account, non ci sono filigrane né limiti giornalieri alle scansioni. Se ti è mai capitato di guardare un progetto grafico e chiederti «che font è questo?», questo <strong>font finder</strong> è nato per rispondere a quella domanda e portarti dritto a un font che puoi usare subito.</p>

<h2>Che cos’è un font finder?</h2>
<p>Un font finder è uno strumento che analizza le lettere e capisce con quale carattere sono state scritte. I designer lo usano per abbinare i materiali esistenti di un cliente, gli sviluppatori per ricreare un layout da uno screenshot e chi si occupa di marketing per mantenere coerenti con il brand le grafiche social. Gli strumenti di una volta ti facevano compilare lunghi questionari su grazie e forme delle lettere. Un moderno strumento per <strong>riconoscere font da immagine</strong> elimina le congetture: gli mostri il testo e confronta le forme al posto tuo.</p>
<p>Ciò che distingue Font Finder Tool è dove si ferma. Molti strumenti ti danno un nome e ti lasciano scoprire da solo che il font costa centinaia di euro o ha una licenza restrittiva. Qui ogni risultato è un font gratuito e open source di Google Fonts, quindi il font che trovi è un font che puoi scaricare e usare oggi stesso in progetti personali, lavori per clienti, siti web, app e stampa.</p>

<h2>Come trovare un font da un’immagine</h2>
<p>Per <strong>trovare un font da un’immagine</strong> bastano quattro rapidi passaggi:</p>
<ul>
  <li><strong>Carica un’immagine.</strong> Scegli un file, trascinalo sulla pagina oppure incollalo direttamente dagli appunti con Ctrl+V (Cmd+V su Mac). Funzionano PNG, JPG, WebP e la maggior parte degli altri formati comuni.</li>
  <li><strong>Ritaglia il testo.</strong> Traccia un riquadro attorno a una riga di testo. Un ritaglio preciso con almeno dieci caratteri offre la visione più chiara di ogni lettera.</li>
  <li><strong>Identifica il font.</strong> Lo strumento legge ogni carattere, ne misura la forma e la confronta con ogni famiglia del suo indice di font.</li>
  <li><strong>Confronta e scarica.</strong> Esamina i risultati in ordine di somiglianza, scrivi le tue parole nella casella di anteprima e apri il font migliore su Google Fonts per scaricarlo o copiare il codice da incorporare.</li>
</ul>
<p>Dato che il <strong>caricamento dell’immagine</strong> avviene interamente nel tuo browser, la foto non lascia mai il tuo dispositivo. Puoi quindi controllare in sicurezza i font di progetti non ancora pubblicati, mockup per i clienti e documenti interni.</p>

<h2>Un font finder AI che funziona sul tuo dispositivo</h2>
<p>Dietro le quinte, Font Finder Tool funziona come un <strong>font finder AI</strong> in due fasi. Prima, un motore di riconoscimento del testo basato su rete neurale legge i caratteri del tuo ritaglio, così lo strumento sa che una certa forma è una «g» e non una «q». Poi ogni lettera riconosciuta viene misurata (spessore del tratto, altezza della x, larghezza, contrasto e i dettagli che distinguono un carattere da un altro) e confrontata con un indice di glifi già pronto, ricavato da oltre 1.900 famiglie di Google Fonts. I risultati complessivamente più simili salgono in cima all’elenco.</p>
<p>Elaborare tutto sul tuo dispositivo ha vantaggi pratici che vanno oltre la privacy. Non ci sono code, non c’è un server che può andare giù e non ci sono costi da ribaltare su di te: per questo lo strumento può restare un <strong>font finder gratis</strong>, senza registrazioni, crediti o limiti. Il motore di riconoscimento e i dati dei font vengono scaricati alla prima scansione e salvati nella cache del browser, così le scansioni successive sono più veloci.</p>

<h2>Riconoscere font da immagine gratis, con licenze vere</h2>
<p>Poter <strong>riconoscere un font da un’immagine gratis</strong> serve a poco se poi i risultati non sono gratuiti anche loro. Qui ogni risultato è rilasciato con una licenza aperta, di solito la SIL Open Font License o Apache 2.0. Entrambe consentono l’uso commerciale, l’incorporamento nei siti web e l’uso nei loghi. Ogni scheda mostra la licenza a colpo d’occhio, così non devi mai spulciare i siti delle fonderie per capire cosa è consentito.</p>
<p>Se l’immagine usa un carattere commerciale come Helvetica, Gotham, Futura o Proxima Nova, non troverai l’originale a pagamento, ma otterrai le alternative gratuite più vicine, scelte confrontando le forme reali delle lettere. Le schede segnalano i noti font a pagamento a cui somigliano, così vedi subito che Inter o Arimo possono sostituire Helvetica, Montserrat Gotham e Jost Futura.</p>

<h2>Trovare un Google Font per siti web e app</h2>
<p>La maggior parte dei siti web e delle app oggi usa Google Fonts come Inter, Roboto, Open Sans, Poppins e Montserrat. Per questo il nostro <strong>Google Font finder</strong> è particolarmente efficace con screenshot di pagine web, dashboard, slide e app mobili: se l’originale è un Google Font, è molto probabile che compaia tra i primi risultati. Ogni risultato rimanda alla sua pagina su Google Fonts, dove puoi scegliere i pesi e copiare il codice <code>&lt;link&gt;</code> o <code>@import</code> per il tuo sito. Per approfondire, leggi la <a href="/google-font-finder">guida per trovare un Google Font</a>.</p>

<h2>Anteprima dei risultati con le tue parole</h2>
<p>Font simili possono sembrare quasi identici in un breve campione. Per questo lo strumento ti permette anche di <strong>provare i font con il tuo testo</strong>: scrivi una parola o una frase nella casella di anteprima e ogni risultato si aggiorna per mostrarla. Prova parole con lettere caratteristiche, come «Rag 1984» o «Qualità garantita», per confrontare la coda della «g», la gamba della «R», la forma dei numeri e la spaziatura tra le lettere. Vedere il tuo titolo o il nome del tuo brand in ogni candidato è il modo più rapido per scegliere tra risultati molto simili.</p>

<h2>Consigli per risultati precisi da qualsiasi immagine</h2>
<ul>
  <li>Usa la versione più nitida dell’immagine che hai. Le esportazioni PNG grandi funzionano meglio delle miniature piccole e compresse.</li>
  <li>Fotografa il testo frontalmente, evita i riflessi e tieni la riga dritta, non inclinata né deformata.</li>
  <li>Ritaglia una sola riga con un solo font. Stili diversi nella stessa selezione confondono qualsiasi sistema di riconoscimento.</li>
  <li>Il testo scuro su sfondo chiaro e uniforme funziona meglio, ma è supportato anche il testo chiaro su sfondo scuro.</li>
  <li>I casi più difficili sono i corsivi calligrafici, le scritte display molto decorate e i loghi disegnati su misura. In questi casi considera i risultati come i punti di partenza più vicini, non come una risposta esatta.</li>
</ul>

<h2>Chi usa questo strumento per riconoscere i font?</h2>
<p>I grafici lo usano per individuare i font nei brief dei clienti e nei vecchi file. Gli sviluppatori web lo usano per ricostruire interfacce partendo da screenshot. I titolari di piccole attività lo usano per trovare un font gratis adatto al proprio brand, mentre studenti e appassionati lo usano per ricreare gli stili che amano in presentazioni, poster e post social. Qualunque sia il progetto, l’obiettivo è lo stesso: passare da «che font è questo?» a un file del font sul tuo computer in meno di un minuto. Se vuoi trovare il font di un logo, la pagina dedicata al <a href="/logo-font-finder">font dei loghi</a> tratta scritte personalizzate e marchi, mentre la pagina sui <a href="/free-font-finder">font gratis</a> spiega le licenze più nel dettaglio.</p>

<h2>Inizia a trovare font</h2>
<p>Font Finder Tool unisce riconoscimento del testo con l’AI, confronto delle forme su oltre 1.900 Google Fonts, anteprime dal vivo e informazioni chiare sulle licenze in un unico strumento gratuito e privato. Torna su, <a href="#detector">carica un’immagine</a> e scopri quali font corrispondono. Nessuna registrazione richiesta.</p>`
  },

  homeFaq: [
    {
      q: 'Che cos’è un font finder?',
      a: 'Un font finder è uno strumento che riconosce il carattere tipografico usato in un’immagine. Font Finder Tool legge le lettere del tuo screenshot, della tua foto o del tuo logo, ne confronta le forme con oltre 1.900 Google Fonts gratuiti e ti mostra i risultati più simili in anteprima con il tuo testo.'
    },
    {
      q: 'Google può riconoscere un font?',
      a: 'Non direttamente. Google non ha uno strumento dedicato per riconoscere i font, e Google Lens riconosce il testo di un’immagine ma non il nome del carattere. Per identificare un font, carica l’immagine in un font finder come questo, che confronta le forme delle lettere con la libreria di Google Fonts.'
    },
    {
      q: 'Come posso riconoscere un tipo di carattere?',
      a: 'Osserva i dettagli distintivi: la presenza o meno delle grazie, la forma di lettere come «a», «g», «R» e «Q», il contrasto del tratto e l’altezza della x. Oppure evita le congetture: carica un’immagine del testo, traccia un riquadro attorno a una riga e premi Identifica il font per ottenere un elenco ordinato di font corrispondenti.'
    },
    {
      q: 'Come faccio a vedere quale font è stato usato?',
      a: 'Su un sito web, fai clic destro sul testo, scegli Ispeziona e controlla il valore font-family nella scheda Computed. In Word o Google Docs, seleziona il testo e guarda il menu dei caratteri. Per immagini, loghi e screenshot, dove il nome del font non è salvato, carica l’immagine in un font finder.'
    },
    {
      q: 'Posso usare l’AI per riconoscere un font?',
      a: 'Sì. Font Finder Tool è un font finder AI: un motore di riconoscimento del testo basato su rete neurale legge le lettere della tua immagine, poi la forma di ogni lettera viene misurata e confrontata con un indice di glifi di oltre 1.900 Google Fonts. Tutto avviene nel tuo browser, quindi resta veloce, gratuito e privato.'
    },
    {
      q: 'Esiste un font finder gratis?',
      a: 'Sì. Font Finder Tool è completamente gratuito: niente account, niente filigrane e nessun limite giornaliero. Il confronto avviene nel tuo browser, quindi non ci sono costi di server da ribaltare su di te, e anche ogni font suggerito si scarica gratis.'
    },
    {
      q: 'Come trovo un font simile?',
      a: 'Ritaglia l’immagine su una sola riga del testo che vuoi abbinare, caricala e avvia la ricerca. Poi scrivi le tue parole nella casella di anteprima e confronta fianco a fianco lettere e numeri caratteristici finché non trovi il più simile. Se l’originale è un font a pagamento, scegli l’alternativa gratuita che si avvicina di più.'
    },
    {
      q: 'Posso fotografare un font e scoprire qual è?',
      a: 'Sì. Scatta una foto con il telefono o cattura uno screenshot, poi caricalo, trascinalo o incollalo (Ctrl+V). Inquadra il testo frontalmente, con buona luce e ben a fuoco, e ritaglia una riga di almeno 10 caratteri per ottenere i risultati migliori.'
    },
    {
      q: 'Dove posso trovare font gratis?',
      a: 'Google Fonts è la più grande libreria di font gratuiti e open source, con oltre 1.900 famiglie utilizzabili in progetti personali e commerciali. Altre fonti affidabili sono Fontshare e The League of Moveable Type. Controlla sempre la licenza, soprattutto sui siti che raccolgono font di molti autori diversi.'
    },
    {
      q: 'Come trovo un font specifico per un testo?',
      a: 'Se conosci il nome, cercalo su Google Fonts o sul sito di una fonderia. Se hai solo un esempio, carica un’immagine del testo in un font finder. I risultati vengono mostrati in anteprima con qualsiasi testo tu scriva, così puoi vedere come appare il font con le tue parole prima di scaricarlo.'
    },
    {
      q: 'Come si usano i Google Fonts?',
      a: 'Apri fonts.google.com, scegli una famiglia e fai clic su Get font. Per usarla in un sito web, copia il codice da incorporare nell’HTML e imposta la font-family nel CSS. Per usarla nelle app desktop, scarica i file del font e installali. In Google Docs e Presentazioni Google, apri il menu dei caratteri e scegli Altri caratteri.'
    },
    {
      q: 'Posso creare un font con l’AI?',
      a: 'In parte. Gli strumenti AI per immagini possono generare idee di lettering, e alcuni servizi trasformano la tua calligrafia o una serie di lettere disegnate in un font installabile. Un font completo e professionale richiede però ancora lavoro in un editor di font, come il gratuito FontForge, per rifinire forme delle lettere, spaziatura e crenatura.'
    },
    {
      q: 'Che tipo di immagine dà i risultati migliori?',
      a: 'Funziona meglio un’immagine nitida e frontale, con testo scuro su sfondo uniforme. Ritaglia una sola riga con almeno 10 caratteri ed evita ombre marcate, contorni o prospettive deformate. I corsivi calligrafici e le scritte molto decorate sono i più difficili da riconoscere.'
    },
    {
      q: 'I risultati sono sempre esatti?',
      a: 'Non sempre. Molti caratteri hanno forme delle lettere molto simili, e i loghi sono spesso personalizzati o modificati. Usa l’anteprima dal vivo per confrontare dettagli come la «a», la «g», la «R» e i numeri prima di decidere. Se l’immagine usa un font commerciale, ottieni i Google Fonts gratuiti più simili, e ogni scheda indica i noti font a pagamento a cui somiglia.'
    },
    {
      q: 'Posso usare i font per scopi commerciali?',
      a: 'Sì. I Google Fonts sono rilasciati con licenze aperte (per lo più la SIL Open Font License) che consentono l’uso personale e commerciale, compresi loghi, siti web e stampa. Ogni risultato mostra la sua licenza.'
    },
    {
      q: 'Vedete le mie immagini?',
      a: 'No. La tua immagine viene elaborata interamente sul tuo dispositivo e non viene mai caricata. La prima scansione scarica il motore di riconoscimento del testo e parti dell’indice dei font, che il browser poi salva nella cache. Le scansioni recenti sono salvate solo nel tuo browser e puoi cancellarle in qualsiasi momento.'
    },
    {
      q: 'Può riconoscere i font dei loghi?',
      a: 'Spesso sì, purché il logo usi un carattere tipografico reale. I logotipi disegnati su misura non hanno una corrispondenza esatta, ma otterrai comunque i font gratuiti più simili.'
    }
  ] as FaqItem[],

  landing: {
    'what-font-is-this': {
      metaTitle: 'Che font è questo? Scoprilo da una foto | Font Finder Tool',
      metaDescription:
        'Ti chiedi «che font è questo?» Carica una foto o uno screenshot e trova i Google Fonts gratuiti più simili, in anteprima con il tuo testo.',
      breadcrumb: 'Che font è questo?',
      eyebrow: 'Che font è questo?',
      h1: 'Che font è questo? Scoprilo da una foto',
      intro: 'Hai visto un font su un poster, un sito web o un menu? Fotografalo, caricalo e ottieni in pochi secondi un elenco ordinato di caratteri corrispondenti.',
      sections: [
        {
          heading: 'Rispondi a «che font è questo?» in tre passaggi',
          body: [
            'Carica o incolla l’immagine, traccia un riquadro attorno alle parole e premi Identifica il font. Confrontiamo forma e proporzioni di ogni lettera (spessore del tratto, altezza della x, larghezza e dettagli) con ogni font di Google Fonts.',
            'Ogni risultato è visualizzato con il tuo testo, così puoi controllare i dettagli che distinguono font simili: la coda della «g», la gamba della «R», la forma dei numeri.'
          ]
        },
        {
          heading: 'Da dove arriva di solito il font',
          body: [
            'Siti web e app usano spesso Google Fonts gratuiti come Inter, Roboto e Montserrat, che puoi individuare con precisione. Stampa, packaging e brand usano più spesso famiglie commerciali come Helvetica Neue, Gotham o Futura: in quel caso ottieni le alternative gratuite più vicine, e le schede indicano a quali font a pagamento somigliano.'
          ]
        }
      ],
      faq: [
        {
          q: 'Perché il primo risultato sembra leggermente diverso?',
          a: 'Molti font sono quasi identici e le immagini possono sfocare i dettagli più fini. Controlla anche il secondo e il terzo risultato e confrontali con l’anteprima dal vivo usando il tuo testo.'
        },
        {
          q: 'Posso riconoscere un font da una foto scattata con il telefono?',
          a: 'Sì. Tieni la fotocamera dritta davanti al testo, evita i riflessi e ritaglia una sola riga prima della scansione per la massima precisione.'
        }
      ]
    } as LandingContent,
    'free-font-finder': {
      metaTitle: 'Trova font gratis da un’immagine | Font Finder Tool',
      metaDescription:
        'Trova font gratis da qualsiasi immagine. Ogni risultato è un Google Font gratuito per uso commerciale, con alternative gratis ai font a pagamento più noti.',
      breadcrumb: 'Font gratis',
      eyebrow: 'Trova font gratis',
      h1: 'Trova font gratis simili a quelli di qualsiasi immagine',
      intro: 'Ogni risultato è un Google Font gratuito e open source che puoi scaricare e usare oggi stesso, anche per lavori commerciali.',
      sections: [
        {
          heading: 'Font gratis che puoi usare davvero',
          body: [
            'La maggior parte dei font gratuiti trovati proviene da Google Fonts e Fontsource, rilasciati con SIL Open Font License o Apache 2.0. Entrambe consentono l’uso personale e commerciale, compresi loghi, siti web e stampa.',
            'Ogni scheda mostra la licenza, così sai come stanno le cose prima di scaricare.'
          ]
        },
        {
          heading: 'Quando il font originale è a pagamento',
          body: [
            'Se l’immagine usa un carattere commerciale, ottieni invece i font gratuiti più vicini. Le schede segnalano i noti font a pagamento a cui somigliano: Inter o Arimo per Helvetica, Montserrat per Gotham, Jost per Futura e molti altri.'
          ]
        }
      ],
      faq: [
        {
          q: 'I Google Fonts sono gratis per uso commerciale?',
          a: 'Sì. I Google Fonts sono rilasciati con licenze aperte (per lo più OFL) che consentono uso commerciale, modifica e incorporamento.'
        },
        {
          q: 'E se il font nella mia immagine è a pagamento?',
          a: 'Vedrai i Google Fonts gratuiti più simili. Non saranno identici, ma vengono scelti confrontando le forme reali delle lettere, quindi sono le alternative gratuite più vicine.'
        }
      ]
    } as LandingContent,
    'logo-font-finder': {
      metaTitle: 'Riconoscere il font di un logo | Font Finder Tool',
      metaDescription:
        'Scopri il font usato in un logo. Carica il logo, ritaglia la scritta e ottieni i Google Fonts gratuiti più simili, con i dettagli sulla licenza.',
      breadcrumb: 'Font dei loghi',
      eyebrow: 'Font dei loghi',
      h1: 'Riconosci il font di qualsiasi logo',
      intro: 'Carica un logo, ritaglia la scritta e scopri quali caratteri si avvicinano di più, con alternative gratuite per un lettering in stile brand.',
      sections: [
        {
          heading: 'Come ottenere una scansione pulita del logo',
          body: [
            'Elimina icone e slogan e lascia solo il nome. Va bene anche un logo chiaro su sfondo scuro. I file ad alta risoluzione (esportazioni SVG o PNG grandi) danno risultati più affidabili delle piccole favicon.'
          ]
        },
        {
          heading: 'Lettering personalizzato e font modificati',
          body: [
            'Molti brand partono da un carattere tipografico e poi modificano la spaziatura, tagliano le lettere o disegnano glifi personalizzati. In questo caso non esiste una corrispondenza esatta, ma i font di base più vicini restano il miglior punto di partenza per ottenere un aspetto simile.',
            'Ricorda che la licenza di un font non ti dà alcun diritto sul marchio di un brand. Usa i risultati come ispirazione, non per imitare.'
          ]
        }
      ],
      faq: [
        {
          q: 'Posso usare lo stesso font di un logo famoso?',
          a: 'Puoi usare il font se hai la licenza corretta, ma non puoi copiare un logo o un marchio protetto. Usa il font per creare un design tuo e distinto.'
        },
        {
          q: 'Perché non ci sono corrispondenze esatte per il mio logo?',
          a: 'Probabilmente il logo è disegnato su misura o molto modificato. I risultati mostrano i caratteri più vicini che puoi usare al suo posto.'
        }
      ]
    } as LandingContent,
    'google-font-finder': {
      metaTitle: 'Trova il Google Font da un’immagine | Font Finder Tool',
      metaDescription:
        'Trova il Google Font di qualsiasi immagine. Carica uno screenshot e ottieni i Google Fonts corrispondenti con anteprima dal vivo e download in un clic.',
      breadcrumb: 'Trova Google Font',
      eyebrow: 'Google Font finder',
      h1: 'Trova il Google Font di qualsiasi immagine',
      intro: 'Carica lo screenshot di un sito web, di un’app o di una slide e ottieni i Google Fonts corrispondenti, in anteprima con il tuo testo e a un clic dal download.',
      sections: [
        {
          heading: 'Cerca tra oltre 1.900 Google Fonts partendo da un’immagine',
          body: [
            'I risultati gratuiti rimandano direttamente alla pagina del font su Google Fonts, dove puoi scaricare la famiglia o copiare il codice da incorporare nel tuo sito.',
            'Poiché i Google Fonts sono open source, puoi usarli in progetti personali e commerciali, comprese app e lavori per clienti.'
          ]
        },
        {
          heading: 'Simile non sempre vuol dire identico',
          body: [
            'Famiglie come Inter, Roboto e Arimo si somigliano molto nelle dimensioni ridotte. Scrivi nella casella di anteprima una parola con lettere caratteristiche, ad esempio «Rag 1984», per confrontarle come si deve.'
          ]
        }
      ],
      faq: [
        {
          q: 'Come aggiungo un Google Font al mio sito?',
          a: 'Apri la pagina Google Fonts del risultato, seleziona gli stili che ti servono e copia nel tuo sito il codice <link> o @import fornito.'
        },
        {
          q: 'Trova anche font che non sono su Google Fonts?',
          a: 'No. I risultati provengono sempre da Google Fonts, quindi sono gratuiti. Per i font commerciali ottieni le alternative gratuite più vicine.'
        }
      ]
    } as LandingContent
  },

  pages: {
    about: {
      title: 'Chi siamo | Font Finder Tool',
      description: 'Font Finder Tool aiuta designer e sviluppatori a riconoscere i font dalle immagini e a trovare alternative gratuite.',
      heading: 'Chi siamo',
      html: `<p>Font Finder Tool è nato da una frustrazione semplice: gli strumenti per riconoscere i font ti dicono un nome, poi ti lasciano scoprire da solo se puoi permettertelo, se hai il diritto di usarlo e come appare davvero con le tue parole.</p>
<p>Così abbiamo creato un font finder che restituisce solo font che puoi usare davvero. Ogni risultato è un Google Font gratuito e open source, in anteprima con il tuo testo, con la sua licenza e un link diretto per scaricarlo. Quando la tua immagine usa un font commerciale, ottieni le alternative gratuite più vicine, e le schede indicano a quali font a pagamento somigliano.</p>

<h2>Come funziona il confronto</h2>
<p>Tutto avviene nel tuo browser. Lo strumento legge le lettere del tuo ritaglio, poi forma e proporzioni di ogni lettera vengono confrontate con un indice già pronto di tutti i font di <a href="https://fonts.google.com" rel="noopener">Google Fonts</a> (forniti tramite <a href="https://fontsource.org" rel="noopener">Fontsource</a>). La tua immagine non viene mai caricata.</p>

<h2>Contattaci</h2>
<p>Hai trovato un risultato sbagliato o vorresti una nuova funzione? Scrivi a <a href="mailto:hello@fontfindertool.com">hello@fontfindertool.com</a> o visita la pagina <a href="/contact">Contatti</a>.</p>`
    } as ProseContent,
    contact: {
      title: 'Contatti | Font Finder Tool',
      description: 'Contatta Font Finder Tool per segnalare un risultato sbagliato, suggerire una funzione o fare una domanda.',
      heading: 'Contatti',
      html: `<p>Leggiamo ogni messaggio. Il modo più rapido per contattarci è scrivere a <a href="mailto:hello@fontfindertool.com"><strong>hello@fontfindertool.com</strong></a>. Di solito rispondiamo entro pochi giorni lavorativi.</p>

<h2>Segnalare un risultato sbagliato</h2>
<p>Se lo strumento ha suggerito il font sbagliato, dicci quale ti aspettavi e, se puoi, allega l’immagine che hai analizzato. Le scansioni avvengono sul tuo dispositivo, quindi non vediamo mai la tua immagine a meno che tu non ce la invii.</p>

<h2>Richieste di funzioni e feedback</h2>
<p>Idee per nuovi strumenti, font che vorresti fossero inclusi o qualsiasi cosa ti sia sembrata poco chiara: ci farebbe piacere saperlo.</p>

<h2>Privacy e note legali</h2>
<p>Per domande su come trattiamo i dati o sui nostri termini, usa lo stesso indirizzo e indica «Privacy» o «Note legali» nell’oggetto. Consulta la nostra <a href="/privacy">Informativa sulla privacy</a> e i <a href="/terms">Termini e condizioni</a>.</p>`
    } as ProseContent,
    privacy: {
      title: 'Informativa sulla privacy | Font Finder Tool',
      description:
        'Come Font Finder Tool tratta le tue immagini e i tuoi dati: il confronto avviene sul tuo dispositivo e le immagini non vengono mai caricate.',
      heading: 'Informativa sulla privacy',
      html: `<p>Font Finder Tool («noi») gestisce fontfindertool.com. Questa pagina spiega cosa succede ai tuoi dati quando usi il sito.</p>

<h2>Le tue immagini restano sul tuo dispositivo</h2>
<p>Il confronto dei font avviene interamente nel tuo browser. Quando analizzi un’immagine, questa viene ritagliata, letta e confrontata con il nostro indice dei font sul tuo dispositivo. <strong>La tua immagine non viene mai caricata</strong> né su nostri server né altrove.</p>

<h2>File scaricati dal tuo browser</h2>
<p>Per eseguire il confronto, il tuo browser scarica:</p>
<ul>
  <li>il motore di riconoscimento del testo <a href="https://tesseract.projectnaptha.com" rel="noopener">Tesseract.js</a> e i relativi dati per la lingua inglese, dalla CDN jsDelivr;</li>
  <li>parti del nostro indice dei font, da fontfindertool.com;</li>
  <li>i file dei font per le anteprime, da Fontsource tramite jsDelivr.</li>
</ul>
<p>Queste richieste contengono dati tecnici standard come il tuo indirizzo IP e il tipo di browser, ma mai la tua immagine.</p>

<h2>Dati nel tuo browser</h2>
<p>Le tue scansioni recenti (una piccola miniatura e i risultati) e il tema che hai scelto vengono salvati nella memoria locale del browser. Non lasciano mai il tuo dispositivo e puoi cancellare le scansioni recenti con il pulsante «Cancella».</p>

<h2>Hosting</h2>
<p>Il sito è ospitato su Cloudflare, che può trattare i log delle richieste (come gli indirizzi IP) per erogare e proteggere il sito. Non usiamo cookie pubblicitari o di tracciamento.</p>

<h2>Minori</h2>
<p>Il sito è uno strumento di design generico e non è rivolto a bambini di età inferiore ai 13 anni. Non raccogliamo consapevolmente informazioni personali da nessuno.</p>

<h2>Le tue scelte</h2>
<p>Poiché non gestiamo account né conserviamo le tue immagini, non esiste alcun profilo personale da condividere, vendere o cancellare. Se ci scrivi via email, usiamo il tuo messaggio solo per risponderti e puoi chiederci di cancellare la nostra corrispondenza in qualsiasi momento.</p>
<p>Ovunque tu sia, puoi scriverci via email per chiedere quali informazioni conserviamo su di te, oppure per correggerle o cancellarle.</p>

<h2>Modifiche a questa informativa</h2>
<p>Se cambiamo il modo in cui il sito tratta i dati, aggiorneremo questa pagina e la data di «Ultimo aggiornamento» indicata sopra.</p>

<h2>Contatti</h2>
<p>Domande sulla privacy? Scrivi a <a href="mailto:hello@fontfindertool.com">hello@fontfindertool.com</a> o visita la pagina <a href="/contact">Contatti</a>.</p>`
    } as ProseContent,
    terms: {
      title: 'Termini e condizioni | Font Finder Tool',
      description: 'I termini che si applicano quando usi Font Finder Tool.',
      heading: 'Termini e condizioni',
      html: `<p>Usando fontfindertool.com accetti questi termini.</p>

<h2>Il servizio</h2>
<p>Font Finder Tool suggerisce Google Fonts che somigliano al testo di un’immagine da te fornita. Il confronto avviene nel tuo browser. I risultati sono suggerimenti automatici e potrebbero non essere esatti. Il servizio è fornito «così com’è», senza garanzie di alcun tipo.</p>

<h2>Uso corretto</h2>
<p>Non effettuare scraping né download massivi dell’indice dei font e non sottoporre in altro modo il sito a un carico irragionevole.</p>

<h2>Le tue immagini</h2>
<p>Le immagini che analizzi vengono elaborate sul tuo dispositivo e non ci vengono inviate. Sei responsabile di avere il diritto di usare qualsiasi immagine che analizzi.</p>

<h2>Licenze dei font</h2>
<p>Non vendiamo né concediamo in licenza font. I font suggeriti provengono da Google Fonts e sono distribuiti con le rispettive licenze aperte; i riepiloghi delle licenze sono forniti per comodità. Consulta la pagina del font per i termini completi. Le indicazioni secondo cui un font somiglia a un carattere commerciale hanno solo scopo di riferimento e non implicano alcuna affiliazione con il titolare di quel carattere. L’uso di un font non conferisce diritti su alcun marchio o logo in cui compare.</p>

<h2>I nostri contenuti</h2>
<p>Il design, i testi, il codice e l’indice dei font del sito sono di proprietà di Font Finder Tool. Puoi condividere link al sito, ma non copiarne né ripubblicarne parti sostanziali senza autorizzazione. I nomi dei font e i marchi appartengono ai rispettivi titolari.</p>

<h2>Limitazione di responsabilità</h2>
<p>Nella misura massima consentita dalla legge, Font Finder Tool non è responsabile di alcuna perdita indiretta, incidentale o consequenziale derivante dall’uso del sito o dei suoi risultati, compresa qualsiasi decisione di usare un font suggerito. Verifica sempre la licenza di un font prima di usarlo nel tuo lavoro.</p>

<h2>Link a siti di terze parti</h2>
<p>I risultati rimandano a siti di terze parti come Google Fonts e Fontsource. Non siamo responsabili dei loro contenuti o dei loro termini.</p>

<h2>Modifiche</h2>
<p>Potremmo aggiornare questi termini. Continuare a usare il sito dopo le modifiche significa accettarle.</p>

<h2>Contatti</h2>
<p>Domande su questi termini? Visita la pagina <a href="/contact">Contatti</a> o scrivi a <a href="mailto:hello@fontfindertool.com">hello@fontfindertool.com</a>.</p>`
    } as ProseContent
  },

  errors: {
    notFound: {
      title: 'Pagina non trovata | Font Finder Tool',
      description: 'Questa pagina non esiste.',
      heading: 'Questa pagina non c’è',
      message: 'La pagina che cerchi non esiste. Il font che cerchi, però, forse sì.',
      primary: 'Trova un font',
      secondary: 'Segnala un link non funzionante'
    },
    serverError: {
      title: 'Si è verificato un errore | Font Finder Tool',
      description: 'Si è verificato un errore imprevisto.',
      heading: 'Qualcosa è andato storto',
      message: 'Un errore imprevisto ha impedito il caricamento di questa pagina. Riprova tra un momento o torna al font finder.',
      primary: 'Riprova',
      secondary: 'Torna alla home'
    }
  },

  schema: {
    webAppDescription:
      'Font finder AI gratuito: carica un’immagine per riconoscere il font e trovare Google Fonts gratuiti simili, con anteprima del testo e info sulla licenza.',
    browserRequirements: 'Richiede JavaScript e un browser moderno.',
    featureList: [
      'Trova font da immagine: carica, trascina o incolla uno screenshot, una foto o un logo',
      'Riconoscimento del testo con l’AI e confronto delle forme con oltre 1.900 Google Fonts',
      'Anteprima di ogni risultato con il tuo testo',
      'Alternative gratuite ai font a pagamento più noti',
      'Riepilogo della licenza e link per il download per ogni risultato',
      'Funziona nel tuo browser: le immagini non vengono mai caricate'
    ]
  }
};

export default it;
