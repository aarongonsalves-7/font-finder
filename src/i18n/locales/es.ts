import type { ComparisonRow, FaqItem, LandingContent, Locale, ProseContent } from './en';

const es: Locale = {
  ui: {
    'site.skip': 'Saltar al contenido',
    'site.logoLabel': 'Inicio de Font Finder Tool',
    'site.tagline': 'Identifica la fuente de cualquier imagen y encuentra la Google Font gratis que coincide.',
    'site.ogImageAlt': 'Font Finder Tool: buscador de fuentes gratis que identifica la fuente de cualquier imagen',

    'nav.main': 'Principal',
    'nav.mobile': 'Móvil',
    'nav.openMenu': 'Abrir menú',
    'nav.howItWorks': 'Cómo funciona',
    'nav.freeFonts': 'Fuentes gratis',
    'nav.logoFonts': 'Fuentes de logos',
    'nav.faq': 'Preguntas',
    'nav.findFont': 'Buscar fuente',

    'footer.tools': 'Herramientas',
    'footer.resources': 'Recursos',
    'footer.legal': 'Legal',
    'footer.fontFinder': 'Buscador de fuentes',
    'footer.whatFont': '¿Qué fuente es esta?',
    'footer.freeFinder': 'Buscador de fuentes gratis',
    'footer.googleFinder': 'Buscador de Google Fonts',
    'footer.logoFinder': 'Buscador de fuentes de logos',
    'footer.about': 'Sobre nosotros',
    'footer.contact': 'Contacto',
    'footer.privacy': 'Política de privacidad',
    'footer.terms': 'Términos y condiciones',
    'footer.fontsFrom': 'Fuentes de',
    'footer.via': 'a través de',

    'lang.label': 'Idioma',

    'theme.label': 'Tema de color',
    'theme.system': 'Sistema',
    'theme.light': 'Claro',
    'theme.dark': 'Oscuro',
    'theme.toDark': 'Cambiar al tema oscuro',
    'theme.toLight': 'Cambiar al tema claro',

    'hero.fonts': '1.900+ Google Fonts',
    'hero.crop': 'Recorta el texto exacto',
    'hero.browser': 'Funciona en tu navegador',

    'faq.eyebrow': 'Preguntas',
    'faq.title': 'Preguntas frecuentes',
    'faq.landingTitle': '{name}: preguntas frecuentes',

    'prose.updated': 'Última actualización: {date}',

    'compare.yes': 'Sí',
    'compare.no': 'No',

    'detector.drop': 'Arrastra una imagen, pégala o *búscala en tu equipo*',
    'detector.tap': 'Toca para *elegir una foto o captura de pantalla*',
    'detector.dropHint': 'Capturas, logos, pósteres, fotos · se procesan en tu dispositivo',
    'detector.pasteHint': 'para pegar desde el portapapeles',
    'detector.cropHint': '*Arrastra sobre el texto* que quieres identificar. Funciona mejor con una sola línea.',
    'detector.useWhole': 'Usar la imagen completa',
    'detector.uploadedAlt': 'La imagen que subiste',
    'detector.chooseAnother': 'Elegir otra imagen',
    'detector.identify': 'Identificar fuente',
    'detector.reading': 'Leyendo las letras…',
    'detector.thumbAlt': 'Imagen analizada',
    'detector.matches': 'Coincidencias',
    'detector.copyList': 'Copiar lista',
    'detector.newScan': 'Nuevo análisis',
    'detector.filterLabel': 'Filtrar por estilo',
    'detector.previewLabel': 'Texto de vista previa',
    'detector.previewPlaceholder': 'Escribe para previsualizar',
    'detector.footnote': 'Comparado en tu dispositivo con el catálogo de Google Fonts. Tu imagen nunca sale de tu navegador.',
    'detector.recent': 'Análisis recientes',
    'detector.clear': 'Borrar',
    'detector.free': 'Gratis',
    'detector.altTo': 'Alternativa gratis a',
    'detector.similarLabel': 'Fuentes comerciales similares',
    'detector.getOnGoogle': 'Ver en Google Fonts',
    'detector.copyName': 'Copiar nombre'
  },

  client: {
    notImage: 'Ese archivo no es una imagen. Prueba con PNG, JPG o WebP.',
    tooLarge: 'Esa imagen pesa más de 15 MB. Prueba con una captura de pantalla o una exportación más pequeña.',
    unreadable: 'No se pudo leer esa imagen.',
    generic: 'Algo salió mal. Inténtalo de nuevo.',
    indexError: 'No se pudo cargar el índice de fuentes.',
    tooFewLetters: 'No pudimos leer suficientes letras. Prueba con un recorte más ajustado a una sola línea de texto nítido.',
    loadingReader: 'Cargando el lector de texto…',
    readingLetters: 'Leyendo las letras…',
    comparing: 'Comparando {letters} letras con {fonts} Google Fonts…',
    resultsOne: '{n} fuente gratis coincidente',
    resultsMany: '{n} fuentes gratis coincidentes',
    lettersCompared: '{n} letras comparadas',
    readText: 'texto leído: “{text}”',
    all: 'Todas',
    categories: {
      'sans-serif': 'Sans',
      serif: 'Serif',
      display: 'Display',
      handwriting: 'Manuscrita',
      monospace: 'Mono'
    },
    regular: 'Normal',
    bold: 'Negrita',
    match: {
      best: 'Mejor coincidencia',
      veryClose: 'Muy parecida',
      close: 'Parecida',
      similar: 'Similar'
    },
    licenses: {
      'OFL-1.1': 'SIL Open Font License · gratis para uso personal y comercial',
      'Apache-2.0': 'Apache 2.0 · gratis para uso personal y comercial',
      'UFL-1.0': 'Ubuntu Font Licence · gratis para uso personal y comercial',
      other: 'Licencia {name} · de uso gratuito'
    },
    copied: 'Copiado',
    copyFailed: 'No se pudo copiar',
    copyAllHeader: 'Fuentes coincidentes de fontfindertool.com',
    scan: 'Análisis',
    defaultPreview: 'Buscando la fuente ideal'
  },

  home: {
    title: 'Buscador de fuentes por imagen gratis | Font Finder Tool',
    description:
      'Buscador de fuentes gratis con IA: sube una imagen e identifica la fuente en segundos entre 1.900+ Google Fonts gratis. Sin registro.',
    eyebrow: 'Buscador de fuentes gratis con IA',
    h1: 'Buscador de fuentes: ¿viste una tipografía que te encanta? Encuéntrala en segundos.',
    intro:
      'Sube una captura de pantalla, un logo o una foto y nuestro buscador de fuentes compara las letras con más de 1.900 Google Fonts gratis, directamente en tu navegador, sin registro y sin límites.'
  },

  howItWorks: {
    eyebrow: 'Cómo funciona',
    title: 'Cómo encontrar una fuente por imagen en cuatro pasos',
    steps: [
      {
        title: 'Sube o pega',
        body: 'Arrastra una captura, foto, logo o póster, o pégalo directamente desde el portapapeles con Ctrl+V.'
      },
      {
        title: 'Recorta el texto',
        body: 'Dibuja un recuadro alrededor de una línea de texto. Un recorte ajustado con 10 o más caracteres da la coincidencia más precisa.'
      },
      {
        title: 'Compara resultados',
        body: 'Comparamos cada letra con más de 1.900 Google Fonts y te mostramos las más parecidas, escritas con tu propio texto.'
      },
      {
        title: 'Descarga gratis',
        body: 'Cada resultado es una Google Font gratis. Ábrela en Google Fonts para descargarla o copiar el código para insertarla en tu web.'
      }
    ]
  },

  features: {
    eyebrow: 'Por qué Font Finder Tool',
    title: 'Pensado para quienes necesitan usar la fuente de verdad',
    description:
      'La mayoría de los identificadores de fuentes se quedan en un nombre. Nosotros te llevamos hasta una fuente que puedes usar legalmente, gratis siempre que sea posible.',
    items: [
      {
        title: 'Todos los resultados son gratis',
        body: 'Los resultados salen de las más de 1.900 familias de Google Fonts, todas de código abierto y con licencia para uso comercial. Fíltralas por estilo con un toque.'
      },
      {
        title: 'Vista previa con tu texto',
        body: 'Cada candidata muestra tus palabras con la fuente real, así comparas la forma de las letras en lugar de adivinar por un nombre.'
      },
      {
        title: 'Alternativas gratis a fuentes de pago',
        body: 'Marcamos las coincidencias que se parecen a fuentes comerciales famosas, para que sepas que Inter puede sustituir a Helvetica y Montserrat a Gotham.'
      },
      {
        title: 'Licencia de un vistazo',
        body: 'Comprueba si una fuente es OFL, Apache o comercial antes de descargarla, sin rebuscar en las páginas de las fundidoras.'
      },
      {
        title: 'Recorta antes de analizar',
        body: 'Selecciona justo la línea que te interesa. Las fotos recargadas y los pósteres con muchas fuentes dejan de confundir al buscador.'
      },
      {
        title: 'Funciona en tu navegador',
        body: 'La comparación se hace en tu dispositivo. Tu imagen nunca se sube, no hay límites diarios y los análisis recientes se quedan en tu navegador.'
      }
    ],
    demo: {
      all: 'Todas',
      serif: 'Serif',
      script: 'Manuscrita',
      preview: 'Hola amigo',
      license: 'OFL · uso comercial OK'
    }
  },

  comparison: {
    eyebrow: 'Comparativa',
    title: 'Mucho más que adivinar un nombre',
    description: 'Cómo se compara Font Finder Tool con los detectores de fuentes por imagen habituales.',
    feature: 'Función',
    us: 'Font Finder Tool',
    them: 'Detectores habituales',
    rows: [
      { label: 'Todos los resultados se descargan gratis', ours: true, theirs: false },
      { label: 'Filtrar resultados por estilo', ours: true, theirs: false },
      { label: 'Recortar el texto exacto', ours: true, theirs: false },
      { label: 'Vista previa con tu propio texto', ours: true, theirs: false },
      { label: 'Alternativas gratis a fuentes de pago', ours: true, theirs: 'A veces' },
      { label: 'Resumen de licencia en cada resultado', ours: true, theirs: false },
      { label: 'Enlaces directos de descarga o compra', ours: true, theirs: false },
      { label: 'Análisis gratis al día', ours: 'Ilimitados', theirs: '~3' },
      { label: 'La imagen se sube a un servidor', ours: 'Nunca', theirs: 'Sí' }
    ] as ComparisonRow[]
  },

  guide: {
    eyebrow: 'Guía',
    title: 'El buscador de fuentes gratis para imágenes, logos y capturas',
    description:
      'Todo lo que necesitas saber para identificar una fuente a partir de una imagen y conseguir una versión que de verdad puedas usar.',
    html: `<p>Font Finder Tool es un <strong>buscador de fuentes gratis</strong> que identifica la tipografía de cualquier imagen. Sube una captura de pantalla, la foto de una carta de restaurante, un póster, la portada de un libro o el logo de una marca y, en segundos, obtendrás una lista ordenada de fuentes coincidentes, cada una escrita con tu propio texto, con su licencia indicada y un enlace de descarga gratuita. No tienes que crear una cuenta, no hay marcas de agua ni límite diario de análisis. Si alguna vez miraste un diseño y te preguntaste qué fuente usaba, este <strong>buscador de fuentes</strong> está hecho para responder a esa pregunta y llevarte directo a una fuente que puedas usar.</p>

<h2>¿Qué es un buscador de fuentes?</h2>
<p>Un buscador de fuentes es una herramienta que analiza unas letras y averigua con qué tipografía están escritas. Los diseñadores lo usan para igualar los materiales que ya tiene un cliente, los desarrolladores para recrear una interfaz a partir de una captura y los equipos de marketing para que sus gráficos en redes sociales respeten la marca. Las herramientas antiguas te hacían responder un largo cuestionario sobre serifas y formas de letras. Un <strong>buscador de tipografías por imagen</strong> moderno se salta las conjeturas: le muestras el texto y él compara las formas por ti.</p>
<p>Lo que distingue a Font Finder Tool es dónde termina el proceso. Muchos identificadores te dan un nombre y te dejan descubrir después que la fuente cuesta cientos de dólares o tiene una licencia restrictiva. Aquí, cada resultado es una fuente gratis y de código abierto de Google Fonts, así que la coincidencia que encuentres la puedes descargar y usar hoy mismo en proyectos personales, trabajos para clientes, sitios web, apps e impresos.</p>

<h2>Cómo encontrar una fuente por imagen</h2>
<p>Usar el <strong>buscador de fuentes por imagen</strong> lleva cuatro pasos rápidos:</p>
<ul>
  <li><strong>Sube una imagen.</strong> Elige un archivo, arrástralo a la página o pégalo directamente desde el portapapeles con Ctrl+V (Cmd+V en Mac). Funcionan PNG, JPG, WebP y la mayoría de los formatos habituales.</li>
  <li><strong>Recorta el texto.</strong> Dibuja un recuadro alrededor de una línea de texto. Un recorte ajustado con diez o más caracteres le da al buscador la imagen más clara de cada letra.</li>
  <li><strong>Identifica la fuente.</strong> La herramienta lee cada carácter, mide su forma y la compara con todas las familias de su índice de fuentes.</li>
  <li><strong>Compara y descarga.</strong> Revisa las coincidencias ordenadas, escribe tus propias palabras en el cuadro de vista previa y abre la ganadora en Google Fonts para descargarla o copiar el código de inserción.</li>
</ul>
<p>Como el paso de <strong>subir la imagen</strong> ocurre por completo en tu navegador, la foto nunca sale de tu dispositivo. Por eso puedes identificar fuentes con total tranquilidad en diseños sin publicar, maquetas de clientes y documentos internos.</p>

<h2>Un buscador de fuentes con IA que funciona en tu dispositivo</h2>
<p>Internamente, Font Finder Tool funciona como un <strong>buscador de fuentes con IA</strong> en dos fases. Primero, un motor de reconocimiento de texto basado en redes neuronales lee los caracteres de tu recorte, para que la herramienta sepa que cierta forma es una “g” y no una “q”. Después, cada letra reconocida se mide (grosor del trazo, altura de la x, anchura, contraste y los detalles que diferencian una tipografía de otra) y se compara con un índice de glifos ya preparado de más de 1.900 familias de Google Fonts. Las coincidencias más cercanas en conjunto suben al principio de la lista.</p>
<p>Hacerlo en tu propio dispositivo tiene ventajas prácticas además de la privacidad. No hay colas, ni servidores que se caigan, ni costes que repercutir, y por eso la herramienta puede seguir siendo <strong>gratis</strong>, sin registros, créditos ni límites. El motor de reconocimiento y los datos de las fuentes se descargan en tu primer análisis y tu navegador los guarda en caché, así que los siguientes análisis son más rápidos.</p>

<h2>Identificar fuentes por imagen gratis, con licencias reales</h2>
<p>Poder <strong>identificar una fuente por imagen gratis</strong> solo sirve si los resultados también son gratis. Aquí, cada coincidencia se publica con una licencia abierta, normalmente la SIL Open Font License o Apache 2.0. Ambas permiten el uso comercial, la inserción en sitios web y el uso en logos. Cada tarjeta de resultado muestra la licencia de un vistazo, así que nunca tienes que rebuscar en las páginas de las fundidoras para saber qué está permitido.</p>
<p>Cuando la imagen usa una tipografía comercial como Helvetica, Gotham, Futura o Proxima Nova, no encontrarás el original de pago, pero sí las alternativas gratis más parecidas, elegidas comparando la forma real de las letras. Las tarjetas indican a qué fuentes de pago conocidas se parecen, para que veas al instante que Inter o Arimo sustituyen a Helvetica, Montserrat a Gotham y Jost a Futura.</p>

<h2>Buscador de Google Fonts para sitios web y apps</h2>
<p>Hoy, la mayoría de los sitios web y apps usan Google Fonts como Inter, Roboto, Open Sans, Poppins y Montserrat. Por eso este <strong>buscador de Google Fonts</strong> funciona especialmente bien con capturas de páginas web, paneles, presentaciones y apps móviles: si la fuente original es una Google Font, es muy probable que aparezca entre los primeros resultados. Cada coincidencia enlaza a su página en Google Fonts, donde puedes elegir los pesos y copiar el código <code>&lt;link&gt;</code> o <code>@import</code> para tu propio sitio. Para más detalles, consulta la <a href="/google-font-finder">guía del buscador de Google Fonts</a>.</p>

<h2>Busca fuentes por texto: previsualiza con tus propias palabras</h2>
<p>Fuentes parecidas pueden verse casi idénticas en una muestra corta. Por eso esta herramienta también funciona como <strong>buscador de fuentes por texto</strong>: escribe cualquier palabra o frase en el cuadro de vista previa y todas las coincidencias se actualizan para mostrarla. Prueba palabras con letras características, como “Rag 1984” o “Quality goods”, para comparar la cola de la “g”, la pierna de la “R”, la forma de los números y el espacio entre letras. Ver tu titular o el nombre de tu marca en cada candidata es la forma más rápida de elegir entre coincidencias muy parecidas.</p>

<h2>Consejos para obtener resultados precisos con cualquier imagen</h2>
<ul>
  <li>Usa la versión más nítida de la imagen que tengas. Una exportación PNG grande es mejor que una miniatura pequeña y comprimida.</li>
  <li>Fotografía el texto de frente, evita los reflejos y mantén la línea recta, sin inclinaciones ni deformaciones.</li>
  <li>Recorta una sola línea con una sola fuente. Mezclar estilos en una misma selección confunde a cualquier buscador.</li>
  <li>El texto oscuro sobre un fondo claro y liso funciona mejor, pero también se admite texto claro sobre fondo oscuro.</li>
  <li>Los casos más difíciles son las caligrafías fluidas, las letras decorativas muy recargadas y los logos dibujados a mano. En esos casos, toma los resultados como los puntos de partida más cercanos y no como una respuesta exacta.</li>
</ul>

<h2>¿Quién usa este buscador de fuentes por imagen?</h2>
<p>Los diseñadores gráficos lo usan para identificar fuentes en encargos de clientes y archivos antiguos. Los desarrolladores web lo usan para reconstruir interfaces a partir de capturas. Los dueños de pequeños negocios lo usan para encontrar una fuente gratis que encaje con su marca, y estudiantes y aficionados lo usan para recrear estilos que les encantan en presentaciones, pósteres y publicaciones en redes. Sea cual sea el proyecto, el objetivo es el mismo: pasar de “¿qué fuente es esta?” a tener el archivo de la fuente en tu computadora en menos de un minuto. Si lo que quieres identificar es un logo, nuestra página del <a href="/logo-font-finder">buscador de fuentes de logos</a> trata las letras personalizadas y las marcas registradas, y la página del <a href="/free-font-finder">buscador de fuentes gratis</a> explica las licencias con más detalle.</p>

<h2>Empieza a buscar fuentes</h2>
<p>Font Finder Tool combina reconocimiento de texto con IA, comparación de formas entre más de 1.900 Google Fonts, vistas previas en vivo e información clara sobre licencias en una herramienta gratuita y privada. Vuelve arriba, <a href="#detector">sube una imagen</a> y descubre qué fuentes coinciden. No necesitas registrarte.</p>`
  },

  homeFaq: [
    {
      q: '¿Qué es un buscador de fuentes?',
      a: 'Un buscador de fuentes es una herramienta que identifica la tipografía usada en una imagen. Font Finder Tool lee las letras de tu captura, foto o logo, compara sus formas con más de 1.900 Google Fonts gratis y te muestra las coincidencias más cercanas con tu propio texto.'
    },
    {
      q: '¿Google puede identificar una fuente?',
      a: 'No directamente. Google no tiene un identificador de fuentes propio, y Google Lens reconoce el texto de una imagen, pero no el nombre de la tipografía. Para identificar una fuente, sube la imagen a un buscador de fuentes como este, que compara la forma de las letras con la biblioteca de Google Fonts.'
    },
    {
      q: '¿Cómo puedo identificar un tipo de letra?',
      a: 'Fíjate en los detalles que la definen: si tiene serifas o no, la forma de letras como la “a”, la “g”, la “R” y la “Q”, el contraste del trazo y la altura de la x. O sáltate las conjeturas: sube una imagen del texto, dibuja un recuadro alrededor de una línea y pulsa Identificar fuente para obtener una lista ordenada de fuentes coincidentes.'
    },
    {
      q: '¿Cómo veo qué fuente se está usando?',
      a: 'En un sitio web, haz clic derecho sobre el texto, elige Inspeccionar y revisa el valor de font-family en la pestaña Computed. En Word o Google Docs, selecciona el texto y mira el menú de fuentes. En imágenes, logos y capturas, donde el nombre de la fuente no queda guardado, sube la imagen a un buscador de fuentes.'
    },
    {
      q: '¿Puedo usar la IA para identificar una fuente?',
      a: 'Sí. Font Finder Tool es un buscador de fuentes con IA: un motor de reconocimiento de texto basado en redes neuronales lee las letras de tu imagen y luego se mide la forma de cada letra y se compara con un índice de glifos de más de 1.900 Google Fonts. Todo funciona en tu navegador, así que es rápido, gratis y privado.'
    },
    {
      q: '¿Existe un buscador de fuentes gratis?',
      a: 'Sí. Font Finder Tool es totalmente gratis, sin cuenta, sin marcas de agua y sin límite diario. La comparación se hace en tu propio navegador, así que no hay costes de servidor que repercutir, y todas las fuentes que sugiere también se descargan gratis.'
    },
    {
      q: '¿Cómo encuentro una fuente igual a otra?',
      a: 'Recorta la imagen a una sola línea del texto que quieres igualar, súbela y ejecuta el buscador. Luego escribe tus propias palabras en el cuadro de vista previa y compara lado a lado las letras y números más característicos hasta dar con la más parecida. Si la original es una fuente de pago, elige la alternativa gratis que mejor encaje.'
    },
    {
      q: '¿Puedo tomar una foto de una fuente y encontrarla?',
      a: 'Sí. Toma una foto con tu móvil o haz una captura de pantalla y luego súbela, arrástrala o pégala (Ctrl+V). Fotografía el texto de frente, con buena luz y bien enfocado, y recorta una línea de al menos 10 caracteres para obtener los mejores resultados.'
    },
    {
      q: '¿Dónde puedo encontrar fuentes gratis?',
      a: 'Google Fonts es la mayor biblioteca de fuentes gratis y de código abierto, con más de 1.900 familias que puedes usar en proyectos personales y comerciales. Otras fuentes de confianza son Fontshare y The League of Moveable Type. Revisa siempre la licencia, sobre todo en sitios que recopilan fuentes de muchos autores.'
    },
    {
      q: '¿Cómo encuentro una fuente concreta?',
      a: 'Si conoces el nombre, búscalo en Google Fonts o en el sitio de una fundidora. Si solo tienes un ejemplo, sube una imagen del texto a un buscador de fuentes. Las coincidencias se muestran con el texto que escribas, así puedes ver cómo queda la fuente con tus propias palabras antes de descargarla.'
    },
    {
      q: '¿Cómo uso Google Fonts?',
      a: 'Entra en fonts.google.com, elige una familia y haz clic en Get font (Obtener fuente). Para usarla en un sitio web, copia el código de inserción en tu HTML y define la familia tipográfica en tu CSS. Para usarla en aplicaciones de escritorio, descarga los archivos de la fuente e instálalos. En Google Docs y Presentaciones, abre el menú de fuentes y elige Más fuentes.'
    },
    {
      q: '¿Puedo crear una fuente con IA?',
      a: 'En parte. Las herramientas de imagen con IA pueden generar ideas de letras, y algunos servicios convierten tu letra a mano o un conjunto de letras dibujadas en una fuente instalable. Una fuente completa y profesional sigue necesitando trabajo en un editor de fuentes, como el gratuito FontForge, para pulir la forma de las letras, el espaciado y el kerning.'
    },
    {
      q: '¿Qué tipo de imagen da los mejores resultados?',
      a: 'Lo ideal es una imagen nítida, tomada de frente, con texto oscuro sobre un fondo liso. Recorta una sola línea de al menos 10 caracteres y evita sombras marcadas, contornos o perspectivas deformadas. Las caligrafías fluidas y las letras muy decoradas son las más difíciles de identificar.'
    },
    {
      q: '¿Los resultados son siempre exactos?',
      a: 'No siempre. Muchas tipografías tienen letras muy parecidas, y los logos suelen ser personalizados o modificados. Usa la vista previa en vivo para comparar detalles como la “a”, la “g”, la “R” y los números antes de decidir. Si tu imagen usa una fuente comercial, obtendrás las Google Fonts gratis más parecidas, y cada tarjeta indica las fuentes de pago conocidas a las que se parece.'
    },
    {
      q: '¿Puedo usar las fuentes con fines comerciales?',
      a: 'Sí. Las Google Fonts se publican con licencias abiertas (sobre todo la SIL Open Font License) que permiten el uso personal y comercial, incluidos logos, sitios web e impresos. Cada resultado muestra su licencia.'
    },
    {
      q: '¿Ven ustedes mis imágenes?',
      a: 'No. Tu imagen se procesa por completo en tu dispositivo y nunca se sube. El primer análisis descarga el motor de reconocimiento de texto y partes del índice de fuentes, que luego tu navegador guarda en caché. Los análisis recientes se guardan solo en tu navegador y puedes borrarlos cuando quieras.'
    },
    {
      q: '¿Puede identificar la fuente de un logo?',
      a: 'Muchas veces sí, siempre que el logo use una tipografía real. Los logotipos dibujados a medida no tienen una coincidencia exacta, pero igualmente obtendrás las fuentes gratis más parecidas.'
    }
  ] as FaqItem[],

  landing: {
    'what-font-is-this': {
      metaTitle: '¿Qué fuente es esta? Identifícala por imagen | Font Finder Tool',
      metaDescription:
        '¿Te preguntas “qué fuente es esta”? Sube una foto o captura y obtén las Google Fonts gratis más parecidas, con vista previa en tu propio texto.',
      breadcrumb: '¿Qué fuente es esta?',
      eyebrow: '¿Qué fuente es esta?',
      h1: '¿Qué fuente es esta? Descúbrelo con una foto',
      intro: '¿Viste una fuente en un póster, un sitio web o una carta de restaurante? Hazle una foto, súbela y obtén en segundos una lista ordenada de tipografías coincidentes.',
      sections: [
        {
          heading: 'Responde a “¿qué fuente es esta?” en tres pasos',
          body: [
            'Sube o pega tu imagen, dibuja un recuadro alrededor de las palabras y pulsa Identificar fuente. Comparamos la forma y las proporciones de cada letra (grosor del trazo, altura de la x, anchura y detalles) con todas las fuentes de Google Fonts.',
            'Cada resultado se muestra con tu propio texto para que puedas revisar los detalles que diferencian fuentes parecidas: la cola de la “g”, la pierna de la “R”, la forma de los números.'
          ]
        },
        {
          heading: 'De dónde suele venir la fuente',
          body: [
            'Los sitios web y las apps suelen usar Google Fonts gratis como Inter, Roboto y Montserrat, y esas se pueden identificar con exactitud. En impresos, envases y trabajos de marca es más habitual usar familias comerciales como Helvetica Neue, Gotham o Futura; en esos casos obtienes las alternativas gratis más cercanas, y las tarjetas indican a qué fuentes de pago se parecen.'
          ]
        }
      ],
      faq: [
        {
          q: '¿Por qué el primer resultado se ve un poco diferente?',
          a: 'Muchas fuentes son casi idénticas y las imágenes pueden difuminar los detalles finos. Revisa también la segunda y la tercera coincidencia y compáralas con la vista previa en vivo usando tu propio texto.'
        },
        {
          q: '¿Puedo identificar una fuente a partir de una foto hecha con el móvil?',
          a: 'Sí. Sujeta la cámara de frente al texto, evita los reflejos y recorta una sola línea antes de analizarla para obtener la mayor precisión.'
        }
      ]
    } as LandingContent,
    'free-font-finder': {
      metaTitle: 'Encontrar fuentes gratis por imagen | Font Finder Tool',
      metaDescription:
        'Encuentra fuentes gratis a partir de cualquier imagen. Cada resultado es una Google Font gratis con licencia para uso comercial, con alternativas a fuentes de pago.',
      breadcrumb: 'Buscador de fuentes gratis',
      eyebrow: 'Buscador de fuentes gratis',
      h1: 'Encuentra fuentes gratis parecidas a cualquier imagen',
      intro: 'Cada resultado es una Google Font gratis y de código abierto que puedes descargar y usar hoy mismo, también en trabajos comerciales.',
      sections: [
        {
          heading: 'Fuentes gratis que de verdad puedes usar',
          body: [
            'La mayoría de las coincidencias gratis provienen de Google Fonts y Fontsource, publicadas con la SIL Open Font License o Apache 2.0. Ambas permiten el uso personal y comercial, incluidos logos, sitios web e impresos.',
            'Cada tarjeta muestra la licencia para que sepas a qué atenerte antes de descargar.'
          ]
        },
        {
          heading: 'Cuando la fuente original es de pago',
          body: [
            'Si la imagen usa una tipografía comercial, obtienes en su lugar las fuentes gratis más parecidas. Las tarjetas indican las fuentes de pago conocidas a las que se parecen: Inter o Arimo para Helvetica, Montserrat para Gotham, Jost para Futura y muchas más.'
          ]
        }
      ],
      faq: [
        {
          q: '¿Las Google Fonts son gratis para uso comercial?',
          a: 'Sí. Las Google Fonts se publican con licencias abiertas (sobre todo OFL) que permiten el uso comercial, la modificación y la inserción.'
        },
        {
          q: '¿Y si la fuente de mi imagen es de pago?',
          a: 'Verás las Google Fonts gratis más parecidas. No serán idénticas, pero se eligen comparando la forma real de las letras, así que son las alternativas gratis más cercanas.'
        }
      ]
    } as LandingContent,
    'logo-font-finder': {
      metaTitle: 'Identificar la fuente de un logo | Font Finder Tool',
      metaDescription:
        'Descubre qué fuente usa un logo. Sube el logo, recorta el nombre y obtén las Google Fonts gratis más parecidas, con los datos de su licencia.',
      breadcrumb: 'Buscador de fuentes de logos',
      eyebrow: 'Buscador de fuentes de logos',
      h1: 'Identifica la fuente de cualquier logo',
      intro: 'Sube un logo, recorta el nombre y descubre qué tipografías se le acercan más, con alternativas gratis para letras de estilo corporativo.',
      sections: [
        {
          heading: 'Cómo analizar bien un logo',
          body: [
            'Recorta iconos y eslóganes y quédate solo con el nombre. Si el logo es claro sobre fondo oscuro, también funciona. Los archivos de mayor resolución (exportaciones SVG o PNG grandes) dan coincidencias más fiables que los favicons pequeños.'
          ]
        },
        {
          heading: 'Letras personalizadas y fuentes modificadas',
          body: [
            'Muchas marcas parten de una tipografía y luego ajustan el espaciado, recortan letras o dibujan glifos personalizados. En ese caso no hay una coincidencia exacta, pero las fuentes base más parecidas siguen siendo el mejor punto de partida para lograr un aspecto similar.',
            'Recuerda que la licencia de una fuente no te da derechos sobre la marca registrada de nadie. Usa las coincidencias como inspiración, no para imitar.'
          ]
        }
      ],
      faq: [
        {
          q: '¿Puedo usar la misma fuente que un logo famoso?',
          a: 'Puedes usar la fuente si tienes la licencia adecuada, pero no puedes copiar un logo o una marca registrada protegidos. Usa la fuente para crear tu propio diseño diferenciado.'
        },
        {
          q: '¿Por qué no hay coincidencias exactas para mi logo?',
          a: 'Probablemente el logo esté dibujado a medida o muy modificado. Los resultados muestran las tipografías más parecidas que puedes usar en su lugar.'
        }
      ]
    } as LandingContent,
    'google-font-finder': {
      metaTitle: 'Buscador de Google Fonts por imagen | Font Finder Tool',
      metaDescription:
        'Encuentra la Google Font de cualquier imagen. Sube una captura y obtén las Google Fonts coincidentes con vista previa en vivo y descarga en un clic.',
      breadcrumb: 'Buscador de Google Fonts',
      eyebrow: 'Buscador de Google Fonts',
      h1: 'Encuentra la Google Font de cualquier imagen',
      intro: 'Sube una captura de un sitio web, una app o una presentación y obtén las Google Fonts coincidentes, con tu texto de vista previa y a un clic de la descarga.',
      sections: [
        {
          heading: 'Busca entre 1.900+ Google Fonts por imagen',
          body: [
            'Las coincidencias gratis enlazan directamente a la página de la fuente en Google Fonts, donde puedes descargar la familia o copiar el código de inserción para tu sitio web.',
            'Como las Google Fonts son de código abierto, puedes usarlas en proyectos personales y comerciales, incluidas apps y trabajos para clientes.'
          ]
        },
        {
          heading: 'Parecida no siempre es idéntica',
          body: [
            'Familias como Inter, Roboto y Arimo se ven parecidas en tamaños pequeños. Escribe en el cuadro de vista previa una palabra con letras características, por ejemplo “Rag 1984”, para compararlas bien.'
          ]
        }
      ],
      faq: [
        {
          q: '¿Cómo agrego una Google Font a mi sitio web?',
          a: 'Abre la página del resultado en Google Fonts, selecciona los estilos que necesitas y copia el código <link> o @import que te ofrece en tu sitio.'
        },
        {
          q: '¿Encuentra fuentes que no están en Google Fonts?',
          a: 'No. Las coincidencias siempre provienen de Google Fonts, así que son de uso gratuito. Para fuentes comerciales obtienes las alternativas gratis más cercanas.'
        }
      ]
    } as LandingContent
  },

  pages: {
    about: {
      title: 'Sobre nosotros | Font Finder Tool',
      description: 'Font Finder Tool ayuda a diseñadores y desarrolladores a identificar fuentes a partir de imágenes y a encontrar alternativas gratis.',
      heading: 'Sobre nosotros',
      html: `<p>Font Finder Tool nació de una frustración sencilla: los identificadores de fuentes te dicen un nombre y luego te dejan averiguar si puedes pagarla, si tienes permiso para usarla y cómo se ve realmente con tus palabras.</p>
<p>Así que creamos un buscador que solo devuelve fuentes que de verdad puedes usar. Cada resultado es una Google Font gratis y de código abierto, con vista previa en tu propio texto, su licencia y un enlace de descarga directa. Cuando tu imagen usa una fuente comercial, obtienes las alternativas gratis más parecidas, y las tarjetas indican a qué fuentes de pago se parecen.</p>

<h2>Cómo funciona la comparación</h2>
<p>Todo funciona en tu navegador. La herramienta lee las letras de tu recorte y luego compara la forma y las proporciones de cada letra con un índice ya preparado de todas las fuentes de <a href="https://fonts.google.com" rel="noopener">Google Fonts</a> (servidas a través de <a href="https://fontsource.org" rel="noopener">Fontsource</a>). Tu imagen nunca se sube.</p>

<h2>Ponte en contacto</h2>
<p>¿Encontraste una coincidencia errónea o quieres proponer una función? Escribe a <a href="mailto:hello@fontfindertool.com">hello@fontfindertool.com</a> o visita nuestra página de <a href="/contact">Contacto</a>.</p>`
    } as ProseContent,
    contact: {
      title: 'Contacto | Font Finder Tool',
      description: 'Ponte en contacto con Font Finder Tool para informar de una coincidencia errónea, proponer una función o hacer una pregunta.',
      heading: 'Contacto',
      html: `<p>Leemos todos los mensajes. La forma más rápida de contactarnos es por correo electrónico en <a href="mailto:hello@fontfindertool.com"><strong>hello@fontfindertool.com</strong></a>. Solemos responder en unos pocos días hábiles.</p>

<h2>Informar de una coincidencia errónea</h2>
<p>Si el buscador te sugirió una fuente equivocada, cuéntanos cuál esperabas y, si puedes, adjunta la imagen que analizaste. Los análisis se hacen en tu dispositivo, así que nunca vemos tu imagen a menos que nos la envíes.</p>

<h2>Sugerencias y comentarios</h2>
<p>Ideas para nuevas herramientas, fuentes que te gustaría que incluyéramos o cualquier cosa que te haya resultado confusa. Nos encantará leerlo.</p>

<h2>Privacidad y cuestiones legales</h2>
<p>Si tienes preguntas sobre cómo tratamos los datos o sobre nuestros términos, usa la misma dirección e indica “Privacidad” o “Legal” en el asunto. Consulta nuestra <a href="/privacy">Política de privacidad</a> y nuestros <a href="/terms">Términos y condiciones</a>.</p>`
    } as ProseContent,
    privacy: {
      title: 'Política de privacidad | Font Finder Tool',
      description:
        'Cómo trata Font Finder Tool tus imágenes y datos: la comparación se hace en tu dispositivo y las imágenes nunca se suben.',
      heading: 'Política de privacidad',
      html: `<p>Font Finder Tool (“nosotros”) gestiona fontfindertool.com. Esta página explica qué ocurre con tus datos cuando usas el sitio.</p>

<h2>Tus imágenes se quedan en tu dispositivo</h2>
<p>La comparación de fuentes se realiza por completo en tu navegador. Cuando analizas una imagen, esta se recorta, se lee y se compara con nuestro índice de fuentes en tu propio dispositivo. <strong>Tu imagen nunca se sube</strong> a nuestros servidores ni a los de nadie más.</p>

<h2>Archivos que descarga tu navegador</h2>
<p>Para hacer la comparación, tu navegador descarga:</p>
<ul>
  <li>el motor de reconocimiento de texto <a href="https://tesseract.projectnaptha.com" rel="noopener">Tesseract.js</a> y sus datos del idioma inglés, desde la CDN de jsDelivr;</li>
  <li>partes de nuestro índice de fuentes, desde fontfindertool.com;</li>
  <li>archivos de fuentes para las vistas previas, desde Fontsource a través de jsDelivr.</li>
</ul>
<p>Esas solicitudes contienen datos técnicos estándar, como tu dirección IP y el tipo de navegador, pero nunca tu imagen.</p>

<h2>Datos en tu navegador</h2>
<p>Tus análisis recientes (una pequeña miniatura y los resultados) y el tema que elijas se guardan en el almacenamiento local de tu navegador. Nunca salen de tu dispositivo, y puedes borrar los análisis recientes con el botón “Borrar”.</p>

<h2>Alojamiento</h2>
<p>El sitio está alojado en Cloudflare, que puede procesar registros de solicitudes (como direcciones IP) para servir y proteger el sitio. No usamos cookies de publicidad ni de seguimiento.</p>

<h2>Menores</h2>
<p>El sitio es una herramienta de diseño de uso general y no está dirigido a menores de 13 años. No recopilamos a sabiendas información personal de nadie.</p>

<h2>Tus opciones</h2>
<p>Como no tenemos cuentas de usuario ni guardamos tus imágenes, no existe ningún perfil personal que podamos compartir, vender o eliminar. Si nos escribes por correo electrónico, usamos tu mensaje solo para responderte, y puedes pedirnos que eliminemos nuestra correspondencia en cualquier momento.</p>
<p>Estés donde estés, puedes escribirnos para preguntar qué información tenemos sobre ti, o para corregirla o eliminarla.</p>

<h2>Cambios en esta política</h2>
<p>Si cambiamos la forma en que el sitio trata los datos, actualizaremos esta página y la fecha de “Última actualización” que aparece arriba.</p>

<h2>Contacto</h2>
<p>¿Tienes preguntas sobre privacidad? Escribe a <a href="mailto:hello@fontfindertool.com">hello@fontfindertool.com</a> o visita nuestra página de <a href="/contact">Contacto</a>.</p>`
    } as ProseContent,
    terms: {
      title: 'Términos y condiciones | Font Finder Tool',
      description: 'Los términos que se aplican cuando usas Font Finder Tool.',
      heading: 'Términos y condiciones',
      html: `<p>Al usar fontfindertool.com, aceptas estos términos.</p>

<h2>El servicio</h2>
<p>Font Finder Tool sugiere Google Fonts que se parecen al texto de una imagen que tú proporcionas. La comparación se realiza en tu navegador. Los resultados son sugerencias automáticas y pueden no ser exactos. El servicio se ofrece “tal cual”, sin garantías de ningún tipo.</p>

<h2>Uso razonable</h2>
<p>No extraigas mediante scraping ni descargues de forma masiva el índice de fuentes, ni impongas de otro modo una carga excesiva al sitio.</p>

<h2>Tus imágenes</h2>
<p>Las imágenes que analizas se procesan en tu propio dispositivo y no se nos envían. Eres responsable de tener derecho a usar cualquier imagen que analices.</p>

<h2>Licencias de fuentes</h2>
<p>No vendemos ni licenciamos fuentes. Las fuentes sugeridas provienen de Google Fonts y se distribuyen con sus propias licencias abiertas; los resúmenes de licencia se ofrecen solo por comodidad. Consulta la página de cada fuente para ver los términos completos. Las indicaciones de que una fuente se parece a una tipografía comercial son solo de referencia y no implican ninguna relación con el propietario de esa tipografía. Usar una fuente no otorga derechos sobre ninguna marca registrada o logo en el que aparezca.</p>

<h2>Nuestro contenido</h2>
<p>El diseño, los textos, el código y el índice de fuentes del sitio son propiedad de Font Finder Tool. Puedes compartir enlaces al sitio, pero no copies ni vuelvas a publicar partes sustanciales sin permiso. Los nombres de fuentes y las marcas registradas pertenecen a sus respectivos propietarios.</p>

<h2>Limitación de responsabilidad</h2>
<p>En la máxima medida permitida por la ley, Font Finder Tool no se hace responsable de ninguna pérdida indirecta, incidental o consecuente derivada del uso del sitio o de sus resultados, incluida cualquier decisión de usar una fuente sugerida. Confirma siempre la licencia de una fuente antes de usarla en tu trabajo.</p>

<h2>Enlaces de terceros</h2>
<p>Los resultados enlazan a sitios de terceros como Google Fonts y Fontsource. No somos responsables de su contenido ni de sus términos.</p>

<h2>Cambios</h2>
<p>Podemos actualizar estos términos. Seguir usando el sitio después de los cambios significa que los aceptas.</p>

<h2>Contacto</h2>
<p>¿Tienes preguntas sobre estos términos? Visita nuestra página de <a href="/contact">Contacto</a> o escribe a <a href="mailto:hello@fontfindertool.com">hello@fontfindertool.com</a>.</p>`
    } as ProseContent
  },

  errors: {
    notFound: {
      title: 'Página no encontrada | Font Finder Tool',
      description: 'Esta página no existe.',
      heading: 'No encontramos esta página',
      message: 'La página que buscas no existe. Pero quizá la fuente que buscas sí.',
      primary: 'Buscar fuente',
      secondary: 'Informar de un enlace roto'
    },
    serverError: {
      title: 'Algo salió mal | Font Finder Tool',
      description: 'Se produjo un error inesperado.',
      heading: 'Algo salió mal',
      message: 'Un error inesperado impidió que se cargara esta página. Vuelve a intentarlo en un momento o regresa al buscador de fuentes.',
      primary: 'Reintentar',
      secondary: 'Ir al inicio'
    }
  },

  schema: {
    webAppDescription:
      'Buscador de fuentes gratis con IA: sube una imagen para identificar la fuente y obtén Google Fonts gratis parecidas, con vista previa y datos de licencia.',
    browserRequirements: 'Requiere JavaScript y un navegador web moderno.',
    featureList: [
      'Encuentra fuentes por imagen: sube, arrastra o pega una captura, foto o logo',
      'Reconocimiento de texto con IA y comparación de formas entre 1.900+ Google Fonts',
      'Vista previa de cada coincidencia con tu propio texto',
      'Alternativas gratis a fuentes de pago populares',
      'Resumen de licencia y enlace de descarga en cada resultado',
      'Funciona en tu navegador: las imágenes nunca se suben'
    ]
  }
};

export default es;
