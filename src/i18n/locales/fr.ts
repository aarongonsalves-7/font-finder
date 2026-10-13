import type { ComparisonRow, FaqItem, LandingContent, Locale, ProseContent } from './en';

const fr: Locale = {
  ui: {
    'site.skip': 'Aller au contenu',
    'site.logoLabel': 'Accueil de Font Finder Tool',
    'site.tagline': 'Identifiez la police d’une image et trouvez la Google Font gratuite qui lui correspond.',
    'site.ogImageAlt': 'Font Finder Tool : outil gratuit pour identifier une police à partir d’une image',

    'nav.main': 'Principale',
    'nav.mobile': 'Mobile',
    'nav.openMenu': 'Ouvrir le menu',
    'nav.howItWorks': 'Comment ça marche',
    'nav.freeFonts': 'Polices gratuites',
    'nav.logoFonts': 'Polices de logo',
    'nav.faq': 'FAQ',
    'nav.findFont': 'Trouver une police',

    'footer.tools': 'Outils',
    'footer.resources': 'Ressources',
    'footer.legal': 'Mentions légales',
    'footer.fontFinder': 'Trouver une police',
    'footer.whatFont': 'Quelle est cette police ?',
    'footer.freeFinder': 'Trouver des polices gratuites',
    'footer.googleFinder': 'Trouver une police Google Fonts',
    'footer.logoFinder': 'Trouver la police d’un logo',
    'footer.about': 'À propos',
    'footer.contact': 'Nous contacter',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': 'Conditions générales d’utilisation',
    'footer.fontsFrom': 'Polices de',
    'footer.via': 'via',

    'lang.label': 'Langue',

    'theme.label': 'Thème de couleur',
    'theme.system': 'Système',
    'theme.light': 'Clair',
    'theme.dark': 'Sombre',
    'theme.toDark': 'Passer au thème sombre',
    'theme.toLight': 'Passer au thème clair',

    'hero.fonts': '1 900+ Google Fonts',
    'hero.crop': 'Recadrez le texte exact',
    'hero.browser': 'Fonctionne dans votre navigateur',

    'faq.eyebrow': 'FAQ',
    'faq.title': 'Questions fréquentes',
    'faq.landingTitle': '{name} : questions fréquentes',

    'prose.updated': 'Dernière mise à jour : {date}',

    'compare.yes': 'Oui',
    'compare.no': 'Non',

    'detector.drop': 'Déposez une image, collez-la ou *parcourez vos fichiers*',
    'detector.tap': 'Touchez pour *choisir une photo ou une capture d’écran*',
    'detector.dropHint': 'Captures d’écran, logos, affiches, photos · traitement sur votre appareil',
    'detector.pasteHint': 'pour coller depuis le presse-papiers',
    'detector.cropHint': '*Sélectionnez le texte* à identifier. Une seule ligne donne les meilleurs résultats.',
    'detector.useWhole': 'Utiliser l’image entière',
    'detector.uploadedAlt': 'Votre image importée',
    'detector.chooseAnother': 'Choisir une autre image',
    'detector.identify': 'Identifier la police',
    'detector.reading': 'Lecture des lettres…',
    'detector.thumbAlt': 'Image analysée',
    'detector.matches': 'Correspondances',
    'detector.copyList': 'Copier la liste',
    'detector.newScan': 'Nouvelle analyse',
    'detector.filterLabel': 'Filtrer par style',
    'detector.previewLabel': 'Texte d’aperçu',
    'detector.previewPlaceholder': 'Tapez pour prévisualiser',
    'detector.footnote': 'Comparaison effectuée sur votre appareil avec le catalogue Google Fonts. Votre image ne quitte jamais votre navigateur.',
    'detector.recent': 'Analyses récentes',
    'detector.clear': 'Effacer',
    'detector.free': 'Gratuite',
    'detector.altTo': 'Alternative gratuite à',
    'detector.similarLabel': 'Polices commerciales similaires',
    'detector.getOnGoogle': 'Voir sur Google Fonts',
    'detector.copyName': 'Copier le nom'
  },

  client: {
    notImage: 'Ce fichier n’est pas une image. Essayez un PNG, un JPG ou un WebP.',
    tooLarge: 'Cette image dépasse 15 Mo. Essayez une capture d’écran ou un export plus léger.',
    unreadable: 'Impossible de lire cette image.',
    generic: 'Une erreur est survenue. Veuillez réessayer.',
    indexError: 'Impossible de charger l’index des polices.',
    tooFewLetters: 'Nous n’avons pas pu lire assez de lettres. Recadrez plus serré autour d’une seule ligne de texte net.',
    loadingReader: 'Chargement du lecteur de texte…',
    readingLetters: 'Lecture des lettres…',
    comparing: 'Comparaison de {letters} lettres avec {fonts} Google Fonts…',
    resultsOne: '{n} police gratuite correspondante',
    resultsMany: '{n} polices gratuites correspondantes',
    lettersCompared: '{n} lettres comparées',
    readText: 'texte lu : « {text} »',
    all: 'Toutes',
    categories: {
      'sans-serif': 'Sans serif',
      serif: 'Serif',
      display: 'Fantaisie',
      handwriting: 'Manuscrite',
      monospace: 'Mono'
    },
    regular: 'Normal',
    bold: 'Gras',
    match: {
      best: 'Meilleure correspondance',
      veryClose: 'Très proche',
      close: 'Proche',
      similar: 'Similaire'
    },
    licenses: {
      'OFL-1.1': 'SIL Open Font License · gratuite pour un usage personnel et commercial',
      'Apache-2.0': 'Apache 2.0 · gratuite pour un usage personnel et commercial',
      'UFL-1.0': 'Ubuntu Font Licence · gratuite pour un usage personnel et commercial',
      other: 'Licence {name} · utilisation gratuite'
    },
    copied: 'Copié',
    copyFailed: 'Échec de la copie',
    copyAllHeader: 'Polices correspondantes trouvées sur fontfindertool.com',
    scan: 'Analyse',
    defaultPreview: 'Portez ce vieux whisky au juge blond'
  },

  home: {
    title: 'Trouver une police à partir d’une image | Font Finder Tool',
    description:
      'Identifiez une police d’écriture sur une image en quelques secondes. Plus de 1 900 Google Fonts gratuites, aperçu avec votre texte, sans inscription.',
    eyebrow: 'Identification de police gratuite par IA',
    h1: 'Trouver une police : vous avez repéré une police qui vous plaît ? Identifiez-la en quelques secondes.',
    intro:
      'Importez une capture d’écran, un logo ou une photo : notre outil compare les lettres avec plus de 1 900 Google Fonts gratuites, directement dans votre navigateur, sans inscription et sans limite.'
  },

  howItWorks: {
    eyebrow: 'Comment ça marche',
    title: 'Comment identifier une police à partir d’une image en quatre étapes',
    steps: [
      {
        title: 'Importez ou collez',
        body: 'Déposez une capture d’écran, une photo, un logo ou une affiche, ou collez-la directement depuis le presse-papiers avec Ctrl+V.'
      },
      {
        title: 'Recadrez le texte',
        body: 'Tracez un cadre autour d’une ligne de texte. Un recadrage serré d’au moins 10 caractères donne la correspondance la plus précise.'
      },
      {
        title: 'Comparez les résultats',
        body: 'Nous comparons chaque lettre avec plus de 1 900 Google Fonts et affichons les polices les plus proches, avec votre propre texte.'
      },
      {
        title: 'Téléchargez gratuitement',
        body: 'Chaque résultat est une Google Font gratuite. Ouvrez-la sur Google Fonts pour la télécharger ou copier le code d’intégration pour votre site.'
      }
    ]
  },

  features: {
    eyebrow: 'Pourquoi Font Finder Tool',
    title: 'Conçu pour celles et ceux qui veulent vraiment utiliser la police',
    description:
      'La plupart des outils d’identification de police s’arrêtent à un nom. Nous vous menons jusqu’à une police que vous avez le droit d’utiliser, gratuite dès que possible.',
    items: [
      {
        title: 'Tous les résultats sont gratuits',
        body: 'Les résultats proviennent des plus de 1 900 familles de Google Fonts, toutes open source et utilisables commercialement. Filtrez-les par style d’un seul geste.'
      },
      {
        title: 'Aperçu en direct avec votre texte',
        body: 'Chaque candidate affiche vos propres mots dans la vraie police : vous comparez la forme des lettres au lieu de deviner à partir d’un nom.'
      },
      {
        title: 'Alternatives gratuites aux polices payantes',
        body: 'Les résultats qui ressemblent à des polices commerciales célèbres sont signalés : vous savez ainsi qu’Inter peut remplacer Helvetica, et Montserrat remplacer Gotham.'
      },
      {
        title: 'La licence en un coup d’œil',
        body: 'Voyez si une police est sous licence OFL, Apache ou commerciale avant de la télécharger, sans fouiller les sites des fonderies.'
      },
      {
        title: 'Recadrez avant d’analyser',
        body: 'Sélectionnez précisément la ligne qui vous intéresse. Les photos chargées et les affiches aux multiples polices ne perturbent plus la comparaison.'
      },
      {
        title: 'Fonctionne dans votre navigateur',
        body: 'La comparaison se fait sur votre appareil. Votre image n’est jamais envoyée, il n’y a aucune limite quotidienne et vos analyses récentes restent dans votre navigateur.'
      }
    ],
    demo: {
      all: 'Toutes',
      serif: 'Serif',
      script: 'Manuscrite',
      preview: 'Bonjour le monde',
      license: 'OFL · usage commercial OK'
    }
  },

  comparison: {
    eyebrow: 'Comparatif',
    title: 'Bien plus qu’un nom deviné',
    description: 'Font Finder Tool face aux outils classiques de détection de police par image.',
    feature: 'Fonctionnalité',
    us: 'Font Finder Tool',
    them: 'Outils classiques',
    rows: [
      { label: 'Chaque résultat téléchargeable gratuitement', ours: true, theirs: false },
      { label: 'Filtrer les résultats par style', ours: true, theirs: false },
      { label: 'Recadrer le texte exact', ours: true, theirs: false },
      { label: 'Aperçu des résultats avec votre propre texte', ours: true, theirs: false },
      { label: 'Alternatives gratuites aux polices payantes', ours: true, theirs: 'Parfois' },
      { label: 'Résumé de la licence pour chaque résultat', ours: true, theirs: false },
      { label: 'Liens directs de téléchargement / d’achat', ours: true, theirs: false },
      { label: 'Analyses gratuites par jour', ours: 'Illimitées', theirs: '~3' },
      { label: 'Image envoyée sur un serveur', ours: 'Jamais', theirs: 'Oui' }
    ] as ComparisonRow[]
  },

  guide: {
    eyebrow: 'Guide',
    title: 'L’outil gratuit pour trouver une police dans une image, un logo ou une capture d’écran',
    description:
      'Tout ce qu’il faut savoir pour identifier une police à partir d’une image, et obtenir une version que vous pouvez réellement utiliser.',
    html: `<p>Font Finder Tool est un <strong>outil gratuit pour trouver une police</strong> d’écriture dans n’importe quelle image. Importez une capture d’écran, la photo d’un menu, une affiche, une couverture de livre ou un logo de marque : en quelques secondes, vous obtenez une liste classée de polices correspondantes, chacune affichée avec votre propre texte, accompagnée de sa licence et d’un lien de téléchargement gratuit. Pas de compte à créer, pas de filigrane, pas de limite quotidienne d’analyses. Si vous vous êtes déjà demandé quelle police utilise un visuel, cet outil est fait pour répondre à la question et vous mener directement à une police prête à l’emploi.</p>

<h2>Qu’est-ce qu’un outil d’identification de police ?</h2>
<p>Un outil d’identification de police analyse des lettres et détermine dans quelle police elles ont été composées. Les graphistes s’en servent pour s’accorder aux supports existants d’un client, les développeurs pour recréer une mise en page à partir d’une capture d’écran, et les équipes marketing pour garder des visuels cohérents avec leur charte. Les anciens outils vous faisaient remplir un long questionnaire sur les empattements et la forme des lettres. Un outil moderne pour <strong>reconnaître une police à partir d’une image</strong> vous épargne ces suppositions : vous lui montrez le texte, et il compare les formes à votre place.</p>
<p>Ce qui distingue Font Finder Tool, c’est la suite. Beaucoup d’outils vous donnent un nom et vous laissent découvrir que la police coûte des centaines d’euros ou qu’elle est soumise à une licence restrictive. Ici, chaque résultat est une police gratuite et open source issue de Google Fonts : la correspondance que vous trouvez, vous pouvez la télécharger et l’utiliser dès aujourd’hui dans vos projets personnels, vos travaux pour des clients, vos sites web, vos applications et vos impressions.</p>

<h2>Comment trouver une police à partir d’une image</h2>
<p>Pour <strong>trouver une police à partir d’une image</strong>, il suffit de quatre étapes rapides :</p>
<ul>
  <li><strong>Importez une image.</strong> Choisissez un fichier, faites-le glisser sur la page ou collez-le directement depuis le presse-papiers avec Ctrl+V (Cmd+V sur Mac). Les formats PNG, JPG, WebP et la plupart des autres formats courants sont acceptés.</li>
  <li><strong>Recadrez le texte.</strong> Tracez un cadre autour d’une ligne de texte. Un recadrage serré d’au moins dix caractères offre à l’outil la vue la plus nette de chaque lettre.</li>
  <li><strong>Identifiez la police.</strong> L’outil lit chaque caractère, mesure sa forme et la compare à chaque famille de son index de polices.</li>
  <li><strong>Comparez et téléchargez.</strong> Parcourez les résultats classés, tapez vos propres mots dans la zone d’aperçu et ouvrez la police retenue sur Google Fonts pour la télécharger ou copier le code d’intégration.</li>
</ul>
<p>Comme l’<strong>import de l’image</strong> et toute l’analyse se déroulent dans votre navigateur, la photo ne quitte jamais votre appareil. Vous pouvez donc vérifier sans risque les polices de maquettes non publiées, de projets clients et de documents internes.</p>

<h2>Une identification de police par IA qui fonctionne sur votre appareil</h2>
<p>En coulisses, Font Finder Tool fonctionne comme un <strong>outil d’identification de police par IA</strong>, en deux étapes. D’abord, un moteur de reconnaissance de texte à réseau neuronal lit les caractères de votre sélection : l’outil sait ainsi qu’une forme donnée est un « g » et non un « q ». Ensuite, chaque lettre reconnue est mesurée (graisse du trait, hauteur d’x, largeur, contraste et tous les détails qui distinguent une police d’une autre) puis comparée à un index de glyphes préconstruit couvrant plus de 1 900 familles Google Fonts. Les correspondances les plus proches remontent en tête de liste.</p>
<p>Tout faire tourner sur votre appareil présente des avantages concrets au-delà de la confidentialité : pas de file d’attente, pas de serveur susceptible de tomber et aucun coût à répercuter. C’est pourquoi l’outil peut rester <strong>gratuit</strong>, sans inscription, sans crédits et sans limites. Le moteur de reconnaissance et les données des polices sont téléchargés lors de votre première analyse puis mis en cache par votre navigateur : les analyses suivantes sont donc plus rapides.</p>

<h2>Identifier une police gratuitement, avec de vraies licences</h2>
<p>Pouvoir <strong>identifier une police gratuitement</strong> n’a d’intérêt que si les résultats sont gratuits eux aussi. Chaque correspondance proposée ici est publiée sous licence libre, généralement la SIL Open Font License ou Apache 2.0. Toutes deux autorisent l’usage commercial, l’intégration sur des sites web et l’utilisation dans des logos. Chaque fiche de résultat affiche la licence en un coup d’œil : plus besoin de fouiller les sites des fonderies pour savoir ce qui est permis.</p>
<p>Si l’image utilise une police commerciale comme Helvetica, Gotham, Futura ou Proxima Nova, vous ne trouverez pas l’original payant, mais vous obtiendrez les <strong>polices gratuites</strong> les plus proches, choisies en comparant la forme réelle des lettres. Les fiches signalent les polices payantes connues auxquelles elles ressemblent : vous voyez immédiatement qu’Inter ou Arimo peut remplacer Helvetica, Montserrat remplacer Gotham et Jost remplacer Futura.</p>

<h2>Trouver une police Google Fonts pour vos sites et applications</h2>
<p>La plupart des sites web et des applications utilisent aujourd’hui des Google Fonts comme Inter, Roboto, Open Sans, Poppins ou Montserrat. Cet outil pour <strong>trouver une police Google Fonts</strong> est donc particulièrement efficace sur les captures d’écran de pages web, de tableaux de bord, de présentations et d’applications mobiles : si l’original est une Google Font, il a de fortes chances d’apparaître en tête de vos résultats. Chaque correspondance renvoie vers sa page Google Fonts, où vous pouvez choisir les graisses et copier le code <code>&lt;link&gt;</code> ou <code>@import</code> pour votre propre site. Pour aller plus loin, consultez notre <a href="/google-font-finder">guide pour trouver une police Google Fonts</a>.</p>

<h2>Prévisualisez les résultats avec vos propres mots</h2>
<p>Des polices proches peuvent sembler presque identiques sur un court extrait. C’est pourquoi cet outil vous permet aussi de <strong>comparer les polices avec votre texte</strong> : tapez un mot ou une phrase dans la zone d’aperçu, et chaque résultat s’actualise pour l’afficher. Essayez des mots aux lettres caractéristiques, comme « Rag 1984 » ou « Quelle police ? », pour comparer la queue du « g », la jambe du « R », la forme des chiffres et l’espacement entre les lettres. Voir votre vrai titre ou le nom de votre marque dans chaque candidate est le moyen le plus rapide de départager des polices proches.</p>

<h2>Conseils pour des résultats précis avec n’importe quelle image</h2>
<ul>
  <li>Utilisez la version la plus nette de l’image dont vous disposez. Un grand export PNG vaut mieux qu’une petite miniature compressée.</li>
  <li>Photographiez le texte bien de face, évitez les reflets et gardez la ligne droite plutôt qu’inclinée ou déformée.</li>
  <li>Recadrez sur une seule ligne et une seule police. Des styles mélangés dans une même sélection perturbent n’importe quel outil de comparaison.</li>
  <li>Un texte foncé sur un fond clair et uni donne les meilleurs résultats, mais le texte clair sur fond sombre est aussi pris en charge.</li>
  <li>Les cas les plus difficiles sont les écritures cursives, les lettrages décoratifs très chargés et les logos dessinés sur mesure. Considérez alors les résultats comme les points de départ les plus proches plutôt que comme une réponse exacte.</li>
</ul>

<h2>Qui utilise cet outil pour identifier une police ?</h2>
<p>Les graphistes l’utilisent pour retrouver les polices des briefs clients et des anciens fichiers. Les développeurs web s’en servent pour reconstruire des interfaces à partir de captures d’écran. Les gérants de petites entreprises y trouvent une police gratuite adaptée à leur marque, et les étudiants comme les passionnés recréent les styles qu’ils aiment pour leurs présentations, affiches et publications sur les réseaux sociaux. Quel que soit le projet, l’objectif est le même : passer de « <strong>quelle est cette police ?</strong> » à un fichier de police sur votre ordinateur en moins d’une minute. Si c’est un logo que vous cherchez à reproduire, notre page pour <a href="/logo-font-finder">trouver la police d’un logo</a> aborde les lettrages personnalisés et les marques déposées, et la page consacrée aux <a href="/free-font-finder">polices gratuites</a> explique les licences plus en détail.</p>

<h2>Commencez à identifier vos polices</h2>
<p>Font Finder Tool réunit reconnaissance de texte par IA, comparaison des formes avec plus de 1 900 Google Fonts, aperçus en direct et informations de licence claires dans un seul outil gratuit et respectueux de votre vie privée. Remontez en haut de la page, <a href="#detector">importez une image</a> et découvrez les polices correspondantes. Aucune inscription requise.</p>`
  },

  homeFaq: [
    {
      q: 'Qu’est-ce qu’un outil pour trouver une police ?',
      a: 'C’est un outil qui identifie la police d’écriture utilisée dans une image. Font Finder Tool lit les lettres de votre capture d’écran, photo ou logo et compare leurs formes avec plus de 1 900 Google Fonts gratuites, puis affiche les polices les plus proches avec votre propre texte.'
    },
    {
      q: 'Google peut-il identifier une police ?',
      a: 'Pas directement. Google ne propose pas d’outil dédié à l’identification des polices, et Google Lens reconnaît le texte d’une image sans nommer la police. Pour identifier une police, importez l’image dans un outil comme celui-ci, qui compare la forme des lettres avec la bibliothèque Google Fonts.'
    },
    {
      q: 'Comment reconnaître un type de police ?',
      a: 'Observez les détails déterminants : présence ou non d’empattements, forme des lettres comme « a », « g », « R » et « Q », contraste du trait et hauteur d’x. Ou évitez les suppositions : importez une image du texte, tracez un cadre autour d’une ligne et cliquez sur Identifier la police pour obtenir une liste classée de polices correspondantes.'
    },
    {
      q: 'Comment savoir quelle police est utilisée ?',
      a: 'Sur un site web, faites un clic droit sur le texte, choisissez Inspecter et regardez la valeur font-family dans l’onglet Calculé. Dans Word ou Google Docs, sélectionnez le texte et lisez le menu des polices. Pour les images, logos et captures d’écran, où le nom de la police n’est pas enregistré, importez l’image dans un outil d’identification de police.'
    },
    {
      q: 'Peut-on utiliser l’IA pour identifier une police ?',
      a: 'Oui. Font Finder Tool identifie les polices grâce à l’IA : un moteur de reconnaissance de texte à réseau neuronal lit les lettres de votre image, puis la forme de chaque lettre est mesurée et comparée à un index de glyphes de plus de 1 900 Google Fonts. Tout fonctionne dans votre navigateur : c’est rapide, gratuit et confidentiel.'
    },
    {
      q: 'Existe-t-il un outil gratuit pour trouver une police ?',
      a: 'Oui. Font Finder Tool est entièrement gratuit, sans compte, sans filigrane et sans limite quotidienne. La comparaison s’effectue dans votre propre navigateur : il n’y a donc aucun coût de serveur à répercuter, et chaque police suggérée est elle aussi téléchargeable gratuitement.'
    },
    {
      q: 'Comment trouver une police similaire ?',
      a: 'Recadrez une image sur une seule ligne du texte à reproduire, importez-la et lancez l’analyse. Tapez ensuite vos propres mots dans la zone d’aperçu et comparez côte à côte les lettres et les chiffres caractéristiques jusqu’à trouver la plus proche. Si l’original est une police payante, choisissez l’équivalent gratuit qui convient le mieux.'
    },
    {
      q: 'Puis-je prendre une police en photo pour la retrouver ?',
      a: 'Oui. Prenez une photo avec votre téléphone ou faites une capture d’écran, puis importez-la, faites-la glisser ou collez-la (Ctrl+V). Photographiez le texte bien de face, avec un bon éclairage et une mise au point nette, et recadrez sur une ligne d’au moins 10 caractères pour de meilleurs résultats.'
    },
    {
      q: 'Où trouver des polices gratuites ?',
      a: 'Google Fonts est la plus grande bibliothèque de polices gratuites et open source, avec plus de 1 900 familles utilisables pour des projets personnels et commerciaux. Parmi les autres sources fiables, citons Fontshare et The League of Moveable Type. Vérifiez toujours la licence, surtout sur les sites qui rassemblent des polices de nombreux auteurs.'
    },
    {
      q: 'Comment trouver une police d’écriture précise ?',
      a: 'Si vous connaissez son nom, recherchez-la sur Google Fonts ou sur le site d’une fonderie. Si vous n’avez qu’un exemple, importez une image du texte dans un outil d’identification de police. Les résultats s’affichent avec le texte de votre choix : vous voyez le rendu de la police avec vos propres mots avant de la télécharger.'
    },
    {
      q: 'Comment utiliser Google Fonts ?',
      a: 'Ouvrez fonts.google.com, choisissez une famille et cliquez sur Get font. Pour l’utiliser sur un site web, copiez le code d’intégration dans votre HTML et définissez la famille de police dans votre CSS. Pour l’utiliser dans des logiciels de bureau, téléchargez les fichiers de police et installez-les. Dans Google Docs et Slides, ouvrez le menu des polices et choisissez Autres polices.'
    },
    {
      q: 'Peut-on créer une police avec l’IA ?',
      a: 'En partie. Les outils d’image par IA peuvent générer des idées de lettrage, et certains services transforment votre écriture manuscrite ou un jeu de lettres dessinées en police installable. Une police complète et professionnelle demande toutefois un travail dans un éditeur de polices, comme FontForge (gratuit), pour affiner la forme des lettres, l’espacement et le crénage.'
    },
    {
      q: 'Quel type d’image donne les meilleurs résultats ?',
      a: 'Une image nette, prise bien de face, avec un texte foncé sur un fond uni. Recadrez sur une seule ligne d’au moins 10 caractères et évitez les ombres marquées, les contours et les perspectives déformées. Les écritures cursives et les lettrages très décorés sont les plus difficiles à identifier.'
    },
    {
      q: 'Les résultats sont-ils toujours exacts ?',
      a: 'Pas toujours. Beaucoup de polices ont des formes de lettres très proches, et les logos sont souvent personnalisés ou modifiés. Utilisez l’aperçu en direct pour comparer des détails comme le « a », le « g », le « R » et les chiffres avant de choisir. Si votre image utilise une police commerciale, vous obtenez les Google Fonts gratuites les plus proches, et les polices payantes connues auxquelles elles ressemblent sont indiquées sur chaque fiche.'
    },
    {
      q: 'Puis-je utiliser ces polices à des fins commerciales ?',
      a: 'Oui. Les Google Fonts sont publiées sous licences libres (principalement la SIL Open Font License) qui autorisent l’usage personnel et commercial, y compris pour des logos, des sites web et des impressions. Chaque résultat indique sa licence.'
    },
    {
      q: 'Voyez-vous mes images ?',
      a: 'Non. Votre image est traitée entièrement sur votre appareil et n’est jamais envoyée. La première analyse télécharge le moteur de reconnaissance de texte et une partie de l’index des polices, que votre navigateur met ensuite en cache. Les analyses récentes sont enregistrées uniquement dans votre navigateur et peuvent être effacées à tout moment.'
    },
    {
      q: 'L’outil peut-il identifier la police d’un logo ?',
      a: 'Souvent, oui, tant que le logo utilise une vraie police. Les logotypes dessinés sur mesure n’ont pas d’équivalent exact, mais vous obtiendrez tout de même les polices gratuites les plus proches.'
    }
  ] as FaqItem[],

  landing: {
    'what-font-is-this': {
      metaTitle: 'Quelle est cette police ? Identifiez-la | Font Finder Tool',
      metaDescription:
        'Vous vous demandez « quelle est cette police ? » Importez une photo ou une capture d’écran et obtenez les Google Fonts gratuites les plus proches.',
      breadcrumb: 'Quelle est cette police ?',
      eyebrow: 'Quelle est cette police ?',
      h1: 'Quelle est cette police ? Identifiez-la à partir d’une photo',
      intro: 'Vous avez repéré une police sur une affiche, un site web ou un menu ? Prenez-la en photo, importez-la et obtenez en quelques secondes une liste classée de polices correspondantes.',
      sections: [
        {
          heading: 'Répondez à « quelle est cette police ? » en trois étapes',
          body: [
            'Importez ou collez votre image, tracez un cadre autour des mots et cliquez sur Identifier la police. Nous comparons la forme et les proportions de chaque lettre (graisse du trait, hauteur d’x, largeur et détails) avec chaque police de Google Fonts.',
            'Chaque résultat s’affiche avec votre propre texte pour vérifier les détails qui distinguent des polices proches : la queue du « g », la jambe du « R », la forme des chiffres.'
          ]
        },
        {
          heading: 'D’où vient généralement la police',
          body: [
            'Les sites web et les applications utilisent souvent des Google Fonts gratuites comme Inter, Roboto ou Montserrat, que l’outil peut retrouver exactement. L’impression, l’emballage et l’identité de marque font plus souvent appel à des familles commerciales comme Helvetica Neue, Gotham ou Futura ; dans ce cas, vous obtenez les alternatives gratuites les plus proches, et les fiches indiquent à quelles polices payantes elles ressemblent.'
          ]
        }
      ],
      faq: [
        {
          q: 'Pourquoi le premier résultat est-il légèrement différent ?',
          a: 'Beaucoup de polices sont presque identiques, et les images peuvent brouiller les détails fins. Regardez aussi les deuxième et troisième résultats, et comparez-les grâce à l’aperçu en direct avec votre propre texte.'
        },
        {
          q: 'Puis-je identifier une police à partir d’une photo prise avec mon téléphone ?',
          a: 'Oui. Tenez l’appareil bien face au texte, évitez les reflets et recadrez sur une seule ligne avant l’analyse pour une précision optimale.'
        }
      ]
    } as LandingContent,
    'free-font-finder': {
      metaTitle: 'Polices gratuites : trouvez-les par image | Font Finder Tool',
      metaDescription:
        'Trouvez des polices gratuites à partir d’une image : des Google Fonts libres d’usage commercial et des alternatives aux polices payantes.',
      breadcrumb: 'Polices gratuites',
      eyebrow: 'Trouver des polices gratuites',
      h1: 'Trouvez des polices gratuites qui correspondent à n’importe quelle image',
      intro: 'Chaque résultat est une Google Font gratuite et open source, que vous pouvez télécharger et utiliser dès aujourd’hui, y compris pour des projets commerciaux.',
      sections: [
        {
          heading: 'Des polices gratuites que vous pouvez vraiment utiliser',
          body: [
            'La plupart des correspondances gratuites proviennent de Google Fonts et de Fontsource, publiées sous SIL Open Font License ou Apache 2.0. Ces deux licences autorisent l’usage personnel et commercial, y compris pour des logos, des sites web et des impressions.',
            'Chaque fiche indique la licence : vous savez à quoi vous en tenir avant de télécharger.'
          ]
        },
        {
          heading: 'Quand la police d’origine est payante',
          body: [
            'Si l’image utilise une police commerciale, vous obtenez à la place les polices gratuites les plus proches. Les fiches signalent les polices payantes connues auxquelles elles ressemblent : Inter ou Arimo pour Helvetica, Montserrat pour Gotham, Jost pour Futura, et bien d’autres.'
          ]
        }
      ],
      faq: [
        {
          q: 'Les Google Fonts sont-elles gratuites pour un usage commercial ?',
          a: 'Oui. Les Google Fonts sont publiées sous licences libres (principalement OFL) qui autorisent l’usage commercial, la modification et l’intégration.'
        },
        {
          q: 'Et si la police de mon image est payante ?',
          a: 'Vous verrez les Google Fonts gratuites les plus similaires. Elles ne seront pas identiques, mais elles sont choisies en comparant la forme réelle des lettres : ce sont donc les alternatives gratuites les plus proches.'
        }
      ]
    } as LandingContent,
    'logo-font-finder': {
      metaTitle: 'Trouver la police d’un logo en ligne | Font Finder Tool',
      metaDescription:
        'Identifiez la police utilisée dans un logo. Importez le logo, recadrez le nom et obtenez les Google Fonts gratuites les plus proches, avec leur licence.',
      breadcrumb: 'Police d’un logo',
      eyebrow: 'Trouver la police d’un logo',
      h1: 'Identifiez la police de n’importe quel logo',
      intro: 'Importez un logo, recadrez le nom de la marque et découvrez les polices les plus proches, avec des alternatives gratuites pour les lettrages de marque.',
      sections: [
        {
          heading: 'Obtenir une image de logo exploitable',
          body: [
            'Supprimez les icônes et les slogans pour ne garder que le nom. Un logo clair sur fond sombre fonctionne aussi. Les fichiers en haute résolution (exports SVG ou grands PNG) donnent des résultats plus fiables que les petits favicons.'
          ]
        },
        {
          heading: 'Lettrages personnalisés et polices modifiées',
          body: [
            'Beaucoup de marques partent d’une police puis ajustent l’espacement, retaillent des lettres ou dessinent des glyphes sur mesure. Il n’existe alors pas de correspondance exacte, mais les polices de base les plus proches restent le meilleur point de départ pour un rendu similaire.',
            'N’oubliez pas qu’une licence de police ne vous donne aucun droit sur la marque d’autrui. Utilisez les résultats comme source d’inspiration, pas pour imiter.'
          ]
        }
      ],
      faq: [
        {
          q: 'Puis-je utiliser la même police qu’un logo célèbre ?',
          a: 'Vous pouvez utiliser la police si vous disposez de la licence appropriée, mais vous ne pouvez pas copier un logo ou une marque protégés. Servez-vous de la police pour créer votre propre design, bien distinct.'
        },
        {
          q: 'Pourquoi n’y a-t-il aucune correspondance exacte pour mon logo ?',
          a: 'Le logo est probablement dessiné sur mesure ou fortement modifié. Les résultats indiquent les polices les plus proches que vous pouvez utiliser à la place.'
        }
      ]
    } as LandingContent,
    'google-font-finder': {
      metaTitle: 'Trouver une Google Font par image | Font Finder Tool',
      metaDescription:
        'Trouvez la Google Font de n’importe quelle image. Importez une capture d’écran : résultats, aperçu en direct et téléchargement en un clic.',
      breadcrumb: 'Trouver une police Google Fonts',
      eyebrow: 'Trouver une police Google Fonts',
      h1: 'Trouvez la Google Font de n’importe quelle image',
      intro: 'Importez une capture d’écran d’un site web, d’une application ou d’une présentation et obtenez les Google Fonts correspondantes, affichées avec votre texte, à un clic du téléchargement.',
      sections: [
        {
          heading: 'Recherchez parmi plus de 1 900 Google Fonts par image',
          body: [
            'Les résultats gratuits renvoient directement vers la page de la police sur Google Fonts, où vous pouvez télécharger la famille ou copier le code d’intégration pour votre site web.',
            'Les Google Fonts étant open source, vous pouvez les utiliser pour des projets personnels et commerciaux, y compris des applications et des travaux pour des clients.'
          ]
        },
        {
          heading: 'Proche ne veut pas toujours dire identique',
          body: [
            'Des familles comme Inter, Roboto et Arimo se ressemblent beaucoup en petite taille. Tapez un mot aux lettres caractéristiques, « Rag 1984 » par exemple, dans la zone d’aperçu pour bien les comparer.'
          ]
        }
      ],
      faq: [
        {
          q: 'Comment ajouter une Google Font à mon site web ?',
          a: 'Ouvrez la page Google Fonts du résultat, sélectionnez les styles dont vous avez besoin et copiez le code <link> ou @import fourni dans votre site.'
        },
        {
          q: 'L’outil trouve-t-il des polices absentes de Google Fonts ?',
          a: 'Non. Les résultats proviennent toujours de Google Fonts : ils sont donc libres d’utilisation. Pour les polices commerciales, vous obtenez les alternatives gratuites les plus proches.'
        }
      ]
    } as LandingContent
  },

  pages: {
    about: {
      title: 'À propos | Font Finder Tool',
      description: 'Font Finder Tool aide graphistes et développeurs à identifier une police à partir d’une image et à trouver des alternatives gratuites.',
      heading: 'À propos',
      html: `<p>Font Finder Tool est né d’une frustration toute simple : les outils d’identification de police vous donnent un nom, puis vous laissent découvrir seul si vous pouvez vous l’offrir, si vous avez le droit de l’utiliser et à quoi elle ressemble vraiment avec vos propres mots.</p>
<p>Nous avons donc créé un outil qui ne propose que des polices que vous pouvez réellement utiliser. Chaque résultat est une Google Font gratuite et open source, affichée avec votre propre texte, accompagnée de sa licence et d’un lien de téléchargement direct. Lorsque votre image utilise une police commerciale, vous obtenez les alternatives gratuites les plus proches, et les fiches indiquent à quelles polices payantes elles ressemblent.</p>

<h2>Comment fonctionne la comparaison</h2>
<p>Tout se passe dans votre navigateur. L’outil lit les lettres de votre sélection, puis la forme et les proportions de chaque lettre sont comparées à un index préconstruit de toutes les polices de <a href="https://fonts.google.com" rel="noopener">Google Fonts</a> (fournies via <a href="https://fontsource.org" rel="noopener">Fontsource</a>). Votre image n’est jamais envoyée.</p>

<h2>Nous contacter</h2>
<p>Vous avez trouvé une correspondance erronée ou souhaitez une nouvelle fonctionnalité ? Écrivez-nous à <a href="mailto:hello@fontfindertool.com">hello@fontfindertool.com</a> ou rendez-vous sur notre page <a href="/contact">Contact</a>.</p>`
    } as ProseContent,
    contact: {
      title: 'Nous contacter | Font Finder Tool',
      description: 'Contactez Font Finder Tool pour signaler une correspondance erronée, suggérer une fonctionnalité ou poser une question.',
      heading: 'Nous contacter',
      html: `<p>Nous lisons tous les messages. Le moyen le plus rapide de nous joindre est de nous écrire à <a href="mailto:hello@fontfindertool.com"><strong>hello@fontfindertool.com</strong></a>. Nous répondons généralement sous quelques jours ouvrés.</p>

<h2>Signaler une correspondance erronée</h2>
<p>Si l’outil a suggéré la mauvaise police, indiquez-nous celle que vous attendiez et, si possible, joignez l’image analysée. Les analyses ont lieu sur votre appareil : nous ne voyons donc jamais votre image, sauf si vous nous l’envoyez.</p>

<h2>Suggestions et commentaires</h2>
<p>Des idées de nouveaux outils, des polices que vous aimeriez voir prises en charge, ou quelque chose qui vous a semblé confus : nous aimerions le savoir.</p>

<h2>Confidentialité et questions juridiques</h2>
<p>Pour toute question sur la façon dont nous traitons les données ou sur nos conditions, utilisez la même adresse en indiquant « Confidentialité » ou « Juridique » dans l’objet. Consultez notre <a href="/privacy">Politique de confidentialité</a> et nos <a href="/terms">Conditions générales d’utilisation</a>.</p>`
    } as ProseContent,
    privacy: {
      title: 'Politique de confidentialité | Font Finder Tool',
      description:
        'Comment Font Finder Tool traite vos images et vos données : la comparaison a lieu sur votre appareil et vos images ne sont jamais envoyées.',
      heading: 'Politique de confidentialité',
      html: `<p>Font Finder Tool (« nous ») exploite fontfindertool.com. Cette page explique ce qu’il advient de vos données lorsque vous utilisez le site.</p>

<h2>Vos images restent sur votre appareil</h2>
<p>La comparaison des polices s’effectue entièrement dans votre navigateur. Lorsque vous analysez une image, elle est recadrée, lue et comparée à notre index de polices sur votre propre appareil. <strong>Votre image n’est jamais envoyée</strong>, ni à nous ni à qui que ce soit.</p>

<h2>Fichiers téléchargés par votre navigateur</h2>
<p>Pour effectuer la comparaison, votre navigateur télécharge :</p>
<ul>
  <li>le moteur de reconnaissance de texte <a href="https://tesseract.projectnaptha.com" rel="noopener">Tesseract.js</a> et ses données de langue anglaise, depuis le CDN jsDelivr ;</li>
  <li>des parties de notre index de polices, depuis fontfindertool.com ;</li>
  <li>les fichiers de police servant aux aperçus, depuis Fontsource via jsDelivr.</li>
</ul>
<p>Ces requêtes contiennent des données techniques standard, comme votre adresse IP et le type de votre navigateur, mais jamais votre image.</p>

<h2>Données stockées dans votre navigateur</h2>
<p>Vos analyses récentes (une petite miniature et les résultats) et votre choix de thème sont enregistrés dans le stockage local de votre navigateur. Ils ne quittent jamais votre appareil, et vous pouvez effacer les analyses récentes avec le bouton « Effacer ».</p>

<h2>Hébergement</h2>
<p>Le site est hébergé par Cloudflare, qui peut traiter des journaux de requêtes (comme les adresses IP) pour diffuser et sécuriser le site. Nous n’utilisons pas de cookies publicitaires ni de cookies de suivi.</p>

<h2>Enfants</h2>
<p>Le site est un outil de design généraliste et ne s’adresse pas aux enfants de moins de 13 ans. Nous ne collectons sciemment aucune information personnelle, de qui que ce soit.</p>

<h2>Vos choix</h2>
<p>Comme nous ne gérons pas de comptes et ne stockons pas vos images, il n’existe aucun profil personnel que nous pourrions partager, vendre ou supprimer. Si vous nous écrivez, nous utilisons votre message uniquement pour vous répondre, et vous pouvez nous demander à tout moment de supprimer notre correspondance.</p>
<p>Où que vous soyez, vous pouvez nous écrire pour savoir quelles informations nous détenons à votre sujet, ou pour les faire corriger ou supprimer.</p>

<h2>Modifications de cette politique</h2>
<p>Si nous modifions la façon dont le site traite les données, nous mettrons à jour cette page ainsi que la date de « Dernière mise à jour » indiquée ci-dessus.</p>

<h2>Contact</h2>
<p>Des questions sur la confidentialité ? Écrivez-nous à <a href="mailto:hello@fontfindertool.com">hello@fontfindertool.com</a> ou rendez-vous sur notre page <a href="/contact">Contact</a>.</p>`
    } as ProseContent,
    terms: {
      title: 'Conditions générales d’utilisation | Font Finder Tool',
      description: 'Les conditions qui s’appliquent lorsque vous utilisez Font Finder Tool.',
      heading: 'Conditions générales d’utilisation',
      html: `<p>En utilisant fontfindertool.com, vous acceptez les présentes conditions.</p>

<h2>Le service</h2>
<p>Font Finder Tool suggère des Google Fonts qui ressemblent au texte d’une image que vous fournissez. La comparaison s’effectue dans votre navigateur. Les résultats sont des suggestions automatisées et peuvent ne pas être exacts. Le service est fourni « en l’état », sans garantie d’aucune sorte.</p>

<h2>Utilisation raisonnable</h2>
<p>N’aspirez pas et ne téléchargez pas en masse l’index des polices, et n’imposez pas au site une charge déraisonnable de toute autre manière.</p>

<h2>Vos images</h2>
<p>Les images que vous analysez sont traitées sur votre propre appareil et ne nous sont pas envoyées. Il vous appartient de vous assurer que vous avez le droit d’utiliser toute image que vous analysez.</p>

<h2>Licences des polices</h2>
<p>Nous ne vendons pas de polices et n’en concédons pas de licence. Les polices suggérées proviennent de Google Fonts et sont distribuées sous leurs propres licences libres ; les résumés de licence sont fournis à titre indicatif. Consultez la page de la police pour connaître les conditions complètes. Les mentions indiquant qu’une police ressemble à une police commerciale sont données à titre de référence uniquement et n’impliquent aucune affiliation avec le propriétaire de cette police. L’utilisation d’une police ne confère aucun droit sur une marque ou un logo dans lequel elle apparaît.</p>

<h2>Notre contenu</h2>
<p>Le design, les textes, le code et l’index des polices du site appartiennent à Font Finder Tool. Vous pouvez partager des liens vers le site, mais ne copiez pas et ne republiez pas des parties substantielles de celui-ci sans autorisation. Les noms de polices et les marques appartiennent à leurs propriétaires respectifs.</p>

<h2>Limitation de responsabilité</h2>
<p>Dans toute la mesure permise par la loi, Font Finder Tool ne saurait être tenu responsable de toute perte indirecte, accessoire ou consécutive découlant de votre utilisation du site ou de ses résultats, y compris de toute décision d’utiliser une police suggérée. Vérifiez toujours la licence d’une police avant de l’utiliser dans votre travail.</p>

<h2>Liens vers des sites tiers</h2>
<p>Les résultats renvoient vers des sites tiers tels que Google Fonts et Fontsource. Nous ne sommes pas responsables de leur contenu ni de leurs conditions.</p>

<h2>Modifications</h2>
<p>Nous pouvons mettre à jour ces conditions. La poursuite de l’utilisation du site après une modification vaut acceptation de celle-ci.</p>

<h2>Contact</h2>
<p>Des questions sur ces conditions ? Consultez notre page <a href="/contact">Contact</a> ou écrivez-nous à <a href="mailto:hello@fontfindertool.com">hello@fontfindertool.com</a>.</p>`
    } as ProseContent
  },

  errors: {
    notFound: {
      title: 'Page introuvable | Font Finder Tool',
      description: 'Cette page n’existe pas.',
      heading: 'Cette page est introuvable',
      message: 'La page que vous cherchez n’existe pas. Mais la police que vous cherchez, elle, existe peut-être.',
      primary: 'Trouver une police',
      secondary: 'Signaler un lien cassé'
    },
    serverError: {
      title: 'Une erreur est survenue | Font Finder Tool',
      description: 'Une erreur inattendue s’est produite.',
      heading: 'Une erreur est survenue',
      message: 'Une erreur inattendue a empêché le chargement de cette page. Réessayez dans un instant ou revenez à l’outil d’identification de police.',
      primary: 'Réessayer',
      secondary: 'Retour à l’accueil'
    }
  },

  schema: {
    webAppDescription:
      'Outil gratuit d’identification de police par IA : importez une image pour trouver la police et des Google Fonts gratuites, avec aperçu et licence.',
    browserRequirements: 'Nécessite JavaScript et un navigateur web récent.',
    featureList: [
      'Trouver une police à partir d’une image : importez, faites glisser ou collez une capture d’écran, une photo ou un logo',
      'Reconnaissance de texte par IA et comparaison des formes avec plus de 1 900 Google Fonts',
      'Aperçu de chaque résultat avec votre propre texte',
      'Alternatives gratuites aux polices payantes populaires',
      'Résumé de la licence et lien de téléchargement pour chaque résultat',
      'Fonctionne dans votre navigateur : les images ne sont jamais envoyées'
    ]
  }
};

export default fr;
