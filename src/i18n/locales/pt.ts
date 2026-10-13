import type { ComparisonRow, FaqItem, LandingContent, Locale, ProseContent } from './en';

const pt: Locale = {
  ui: {
    'site.skip': 'Pular para o conteúdo',
    'site.logoLabel': 'Página inicial do Font Finder Tool',
    'site.tagline': 'Identifique a fonte de qualquer imagem e encontre a Google Font gratuita correspondente.',
    'site.ogImageAlt': 'Font Finder Tool: identificador de fontes grátis que descobre a fonte de qualquer imagem',

    'nav.main': 'Principal',
    'nav.mobile': 'Celular',
    'nav.openMenu': 'Abrir menu',
    'nav.howItWorks': 'Como funciona',
    'nav.freeFonts': 'Fontes grátis',
    'nav.logoFonts': 'Fontes de logos',
    'nav.faq': 'Perguntas frequentes',
    'nav.findFont': 'Encontrar fonte',

    'footer.tools': 'Ferramentas',
    'footer.resources': 'Recursos',
    'footer.legal': 'Jurídico',
    'footer.fontFinder': 'Identificador de fontes',
    'footer.whatFont': 'Qual é essa fonte?',
    'footer.freeFinder': 'Fontes grátis por imagem',
    'footer.googleFinder': 'Encontrar Google Fonts',
    'footer.logoFinder': 'Fonte de logotipo',
    'footer.about': 'Sobre nós',
    'footer.contact': 'Fale conosco',
    'footer.privacy': 'Política de privacidade',
    'footer.terms': 'Termos e condições',
    'footer.fontsFrom': 'Fontes do',
    'footer.via': 'via',

    'lang.label': 'Idioma',

    'theme.label': 'Tema de cores',
    'theme.system': 'Sistema',
    'theme.light': 'Claro',
    'theme.dark': 'Escuro',
    'theme.toDark': 'Mudar para o tema escuro',
    'theme.toLight': 'Mudar para o tema claro',

    'hero.fonts': '1.900+ Google Fonts',
    'hero.crop': 'Recorte só o texto',
    'hero.browser': 'Funciona no seu navegador',

    'faq.eyebrow': 'Dúvidas',
    'faq.title': 'Perguntas frequentes',
    'faq.landingTitle': '{name}: dúvidas comuns',

    'prose.updated': 'Última atualização: {date}',

    'compare.yes': 'Sim',
    'compare.no': 'Não',

    'detector.drop': 'Solte uma imagem, cole ou *procure no computador*',
    'detector.tap': 'Toque para *escolher uma foto ou captura de tela*',
    'detector.dropHint': 'Capturas de tela, logos, cartazes, fotos · processados no seu dispositivo',
    'detector.pasteHint': 'para colar da área de transferência',
    'detector.cropHint': '*Arraste sobre o texto* que você quer identificar. Uma única linha funciona melhor.',
    'detector.useWhole': 'Usar a imagem inteira',
    'detector.uploadedAlt': 'Sua imagem enviada',
    'detector.chooseAnother': 'Escolher outra imagem',
    'detector.identify': 'Identificar fonte',
    'detector.reading': 'Lendo as letras…',
    'detector.thumbAlt': 'Imagem analisada',
    'detector.matches': 'Resultados',
    'detector.copyList': 'Copiar lista',
    'detector.newScan': 'Nova análise',
    'detector.filterLabel': 'Filtrar por estilo',
    'detector.previewLabel': 'Texto de prévia',
    'detector.previewPlaceholder': 'Digite para ver a prévia',
    'detector.footnote': 'Comparação feita no seu dispositivo com o catálogo do Google Fonts. Sua imagem nunca sai do navegador.',
    'detector.recent': 'Análises recentes',
    'detector.clear': 'Limpar',
    'detector.free': 'Grátis',
    'detector.altTo': 'Alternativa gratuita a',
    'detector.similarLabel': 'Fontes comerciais parecidas',
    'detector.getOnGoogle': 'Baixar no Google Fonts',
    'detector.copyName': 'Copiar nome'
  },

  client: {
    notImage: 'Esse arquivo não é uma imagem. Tente PNG, JPG ou WebP.',
    tooLarge: 'Essa imagem tem mais de 15 MB. Tente uma captura de tela ou um arquivo menor.',
    unreadable: 'Não foi possível ler essa imagem.',
    generic: 'Algo deu errado. Tente novamente.',
    indexError: 'Não foi possível carregar o índice de fontes.',
    tooFewLetters: 'Não conseguimos ler letras suficientes. Tente um recorte mais justo em volta de uma linha de texto nítido.',
    loadingReader: 'Carregando o leitor de texto…',
    readingLetters: 'Lendo as letras…',
    comparing: 'Comparando {letters} letras com {fonts} Google Fonts…',
    resultsOne: '{n} fonte grátis encontrada',
    resultsMany: '{n} fontes grátis encontradas',
    lettersCompared: '{n} letras comparadas',
    readText: 'lido: “{text}”',
    all: 'Todas',
    categories: {
      'sans-serif': 'Sem serifa',
      serif: 'Serifada',
      display: 'Display',
      handwriting: 'Manuscrita',
      monospace: 'Mono'
    },
    regular: 'Normal',
    bold: 'Negrito',
    match: {
      best: 'Melhor resultado',
      veryClose: 'Muito parecida',
      close: 'Parecida',
      similar: 'Semelhante'
    },
    licenses: {
      'OFL-1.1': 'SIL Open Font License · grátis para uso pessoal e comercial',
      'Apache-2.0': 'Apache 2.0 · grátis para uso pessoal e comercial',
      'UFL-1.0': 'Ubuntu Font Licence · grátis para uso pessoal e comercial',
      other: 'Licença {name} · uso gratuito'
    },
    copied: 'Copiado',
    copyFailed: 'Falha ao copiar',
    copyAllHeader: 'Fontes encontradas no fontfindertool.com',
    scan: 'Análise',
    defaultPreview: 'Encontre a fonte ideal'
  },

  home: {
    title: 'Identificar Fonte por Imagem Grátis | Font Finder Tool',
    description:
      'Identificador de fontes grátis: envie uma imagem e descubra a fonte em segundos. Comparamos com 1.900+ Google Fonts gratuitas. Sem cadastro.',
    eyebrow: 'Identificador de fontes grátis com IA',
    h1: 'Identificar fonte por imagem: descubra qualquer fonte em segundos',
    intro:
      'Envie uma captura de tela, um logo ou uma foto e nosso identificador de fontes compara as letras com mais de 1.900 Google Fonts gratuitas, direto no seu navegador, sem cadastro e sem limites.'
  },

  howItWorks: {
    eyebrow: 'Como funciona',
    title: 'Como descobrir a fonte de uma imagem em quatro passos',
    steps: [
      {
        title: 'Envie ou cole',
        body: 'Solte uma captura de tela, foto, logo ou cartaz, ou cole direto da área de transferência com Ctrl+V.'
      },
      {
        title: 'Recorte o texto',
        body: 'Desenhe uma caixa em volta de uma linha de texto. Um recorte justo com 10 ou mais caracteres dá o resultado mais preciso.'
      },
      {
        title: 'Compare os resultados',
        body: 'Comparamos cada letra com mais de 1.900 Google Fonts e mostramos as fontes mais parecidas, exibidas com o seu próprio texto.'
      },
      {
        title: 'Baixe grátis',
        body: 'Todo resultado é uma Google Font gratuita. Abra no Google Fonts para baixar ou copiar o código de incorporação para o seu site.'
      }
    ]
  },

  features: {
    eyebrow: 'Por que o Font Finder Tool',
    title: 'Feito para quem precisa usar a fonte de verdade',
    description:
      'A maioria dos identificadores de fontes para no nome. Nós levamos você até uma fonte que pode usar legalmente, grátis sempre que possível.',
    items: [
      {
        title: 'Todo resultado é grátis',
        body: 'Os resultados vêm das mais de 1.900 famílias do Google Fonts, todas de código aberto e liberadas para uso comercial. Filtre por estilo com um toque.'
      },
      {
        title: 'Prévia ao vivo com o seu texto',
        body: 'As opções exibem as suas palavras na própria fonte, para você comparar o desenho das letras em vez de adivinhar pelo nome.'
      },
      {
        title: 'Alternativas grátis a fontes pagas',
        body: 'Resultados parecidos com fontes comerciais famosas são sinalizados, para você saber que a Inter pode substituir a Helvetica e a Montserrat, a Gotham.'
      },
      {
        title: 'Licença à vista',
        body: 'Veja se uma fonte é OFL, Apache ou comercial antes de baixar, sem precisar vasculhar o site da fundição.'
      },
      {
        title: 'Recorte antes de analisar',
        body: 'Selecione exatamente a linha que interessa. Fotos carregadas e cartazes com várias fontes deixam de confundir a comparação.'
      },
      {
        title: 'Funciona no seu navegador',
        body: 'A comparação acontece no seu dispositivo. Sua imagem nunca é enviada, não há limite diário e as análises recentes ficam no seu navegador.'
      }
    ],
    demo: {
      all: 'Todas',
      serif: 'Serifada',
      script: 'Manuscrita',
      preview: 'Olá, tudo bem',
      license: 'OFL · uso comercial OK'
    }
  },

  comparison: {
    eyebrow: 'Compare',
    title: 'Mais do que um palpite de nome',
    description: 'Como o Font Finder Tool se compara aos identificadores de fontes por imagem mais comuns.',
    feature: 'Recurso',
    us: 'Font Finder Tool',
    them: 'Identificadores comuns',
    rows: [
      { label: 'Todo resultado pode ser baixado grátis', ours: true, theirs: false },
      { label: 'Filtrar resultados por estilo', ours: true, theirs: false },
      { label: 'Recortar só o texto', ours: true, theirs: false },
      { label: 'Prévia dos resultados com o seu texto', ours: true, theirs: false },
      { label: 'Alternativas grátis a fontes pagas', ours: true, theirs: 'Às vezes' },
      { label: 'Resumo da licença em cada resultado', ours: true, theirs: false },
      { label: 'Links diretos para baixar ou comprar', ours: true, theirs: false },
      { label: 'Análises grátis por dia', ours: 'Ilimitadas', theirs: '~3' },
      { label: 'Imagem enviada para um servidor', ours: 'Nunca', theirs: 'Sim' }
    ] as ComparisonRow[]
  },

  guide: {
    eyebrow: 'Guia',
    title: 'O identificador de fontes grátis para imagens, logos e capturas de tela',
    description:
      'Tudo o que você precisa saber para descobrir a fonte de uma imagem e conseguir uma versão que possa usar de verdade.',
    html: `<p>O Font Finder Tool é um <strong>identificador de fontes grátis</strong> que descobre a tipografia de qualquer imagem. Envie uma captura de tela, a foto de um cardápio, um cartaz, uma capa de livro ou o logo de uma marca e, em segundos, você recebe uma lista ordenada de fontes parecidas, cada uma exibida com o seu próprio texto, com a licença indicada e um link para download gratuito. Não é preciso criar conta, não há marca d’água nem limite diário de análises. Se você já olhou para um design e se perguntou “qual é essa fonte?”, esta ferramenta foi feita para responder e levar você direto a uma fonte que pode colocar para trabalhar.</p>

<h2>O que é um identificador de fontes?</h2>
<p>Um identificador de fontes é uma ferramenta que analisa letras e descobre em qual tipografia elas foram compostas. Designers usam para combinar com materiais que o cliente já tem, desenvolvedores usam para recriar um layout a partir de uma captura de tela, e profissionais de marketing usam para manter as artes das redes sociais alinhadas à marca. As ferramentas antigas pediam que você respondesse a um longo questionário sobre serifas e formatos de letras. Para <strong>encontrar fonte por imagem</strong> hoje, não é preciso adivinhar: você mostra o texto e a ferramenta compara as formas por você.</p>
<p>O diferencial do Font Finder Tool está no ponto em que ele termina. Muitos identificadores entregam um nome e deixam você descobrir sozinho que a fonte custa centenas de dólares ou tem uma licença restritiva. Aqui, todo resultado é uma fonte gratuita e de código aberto do Google Fonts, então a fonte que você encontra é uma fonte que pode baixar e usar hoje em projetos pessoais, trabalhos para clientes, sites, aplicativos e materiais impressos.</p>

<h2>Como identificar uma fonte por imagem</h2>
<p>Para <strong>identificar a fonte de uma imagem</strong> são só quatro passos rápidos:</p>
<ul>
  <li><strong>Envie uma imagem.</strong> Escolha um arquivo, arraste para a página ou cole direto da área de transferência com Ctrl+V (Cmd+V no Mac). PNG, JPG, WebP e a maioria dos outros formatos comuns funcionam.</li>
  <li><strong>Recorte o texto.</strong> Desenhe uma caixa em volta de uma linha de texto. Um recorte justo com dez ou mais caracteres dá à comparação a visão mais clara de cada letra.</li>
  <li><strong>Identifique a fonte.</strong> A ferramenta lê cada caractere, mede o seu formato e compara com todas as famílias do índice de fontes.</li>
  <li><strong>Compare e baixe.</strong> Confira os resultados em ordem, digite as suas próprias palavras na caixa de prévia e abra a escolhida no Google Fonts para baixar ou copiar o código de incorporação.</li>
</ul>
<p>Como o envio da imagem acontece inteiramente no seu navegador, a foto nunca sai do seu dispositivo. Por isso é seguro verificar fontes em designs não lançados, protótipos de clientes e documentos internos.</p>

<h2>Um identificador de fontes com IA que roda no seu dispositivo</h2>
<p>Nos bastidores, o Font Finder Tool funciona como um <strong>identificador de fontes com IA</strong> em duas etapas. Primeiro, um mecanismo de reconhecimento de texto baseado em rede neural lê os caracteres do seu recorte, para que a ferramenta saiba que determinada forma é um “g” e não um “q”. Depois, cada letra reconhecida é medida (espessura do traço, altura-x, largura, contraste e os detalhes que diferenciam uma tipografia de outra) e comparada com um índice pronto de glifos de mais de 1.900 famílias do Google Fonts. As fontes mais parecidas no geral sobem para o topo da lista.</p>
<p>Rodar tudo no seu próprio dispositivo traz vantagens práticas além da privacidade. Não há fila, nem servidor que possa cair, nem custo a repassar, e é por isso que a ferramenta pode continuar <strong>grátis</strong>, sem cadastro, créditos ou limites. O mecanismo de reconhecimento e os dados das fontes são baixados na primeira análise e guardados em cache pelo navegador, então as análises seguintes são mais rápidas.</p>

<h2>Descobrir fonte por imagem grátis, com licenças de verdade</h2>
<p>Um jeito de <strong>descobrir fonte por imagem grátis</strong> só é útil se os resultados também forem gratuitos. Todo resultado aqui é distribuído sob uma licença aberta, geralmente a SIL Open Font License ou a Apache 2.0. Ambas permitem uso comercial, incorporação em sites e uso em logotipos. Cada cartão de resultado mostra a licença à vista, para você nunca precisar vasculhar o site da fundição para saber o que é permitido.</p>
<p>Quando a imagem usa uma tipografia comercial como Helvetica, Gotham, Futura ou Proxima Nova, você não vai encontrar a original paga, mas vai receber as alternativas gratuitas mais próximas, escolhidas pela comparação do desenho real das letras. Os cartões indicam as fontes pagas conhecidas com as quais se parecem, para você ver na hora que Inter ou Arimo substituem a Helvetica, Montserrat substitui a Gotham e Jost substitui a Futura.</p>

<h2>Encontrar Google Fonts para sites e aplicativos</h2>
<p>A maioria dos sites e aplicativos hoje usa Google Fonts como Inter, Roboto, Open Sans, Poppins e Montserrat. Isso torna esta ferramenta especialmente boa para <strong>encontrar Google Fonts</strong> em capturas de tela de páginas, painéis, slides e aplicativos: se a original for uma Google Font, há boas chances de ela aparecer no topo dos resultados. Cada resultado leva à página do Google Fonts, onde você escolhe os pesos e copia o código <code>&lt;link&gt;</code> ou <code>@import</code> para o seu site. Para um passo a passo mais completo, veja o <a href="/google-font-finder">guia para encontrar Google Fonts</a>.</p>

<h2>Prévia com o seu texto: compare os resultados com as suas palavras</h2>
<p>Fontes parecidas podem ficar quase idênticas em uma amostra curta. Por isso, a ferramenta também mostra os resultados <strong>com o seu próprio texto</strong>: digite qualquer palavra ou frase na caixa de prévia e todos os resultados são atualizados para exibi-la. Teste palavras com letras marcantes, como “Rag 1984” ou “Quality goods”, para comparar a cauda do “g”, a perna do “R”, o formato dos números e o espaçamento entre as letras. Ver o seu título ou o nome da sua marca em cada opção é o jeito mais rápido de escolher entre fontes muito parecidas.</p>

<h2>Dicas para resultados precisos com qualquer imagem</h2>
<ul>
  <li>Use a versão mais nítida da imagem que você tiver. Arquivos PNG grandes funcionam melhor do que miniaturas pequenas e comprimidas.</li>
  <li>Fotografe o texto de frente, evite reflexos e mantenha a linha reta, sem inclinação ou distorção.</li>
  <li>Recorte uma única linha com uma única fonte. Estilos misturados na mesma seleção confundem qualquer comparação.</li>
  <li>Texto escuro sobre fundo claro e liso funciona melhor, mas texto claro sobre fundo escuro também é aceito.</li>
  <li>Os casos mais difíceis costumam ser letras cursivas fluidas, letras decorativas muito elaboradas e logos desenhados à mão. Nesses casos, trate os resultados como os pontos de partida mais próximos, e não como uma resposta exata.</li>
</ul>

<h2>Quem usa este identificador de fontes por imagem?</h2>
<p>Designers gráficos usam para combinar fontes em briefings de clientes e arquivos antigos. Desenvolvedores web usam para reconstruir interfaces a partir de capturas de tela. Donos de pequenos negócios usam para encontrar uma fonte gratuita que combine com a marca, e estudantes e entusiastas usam para recriar visuais de que gostam em apresentações, cartazes e posts. Seja qual for o projeto, o objetivo é o mesmo: sair do “qual é essa fonte?” para um arquivo de fonte no seu computador em menos de um minuto. Se você quer descobrir a fonte de um logotipo, a nossa página <a href="/logo-font-finder">fonte de logotipo</a> trata de letras personalizadas e marcas registradas, e a página de <a href="/free-font-finder">fontes grátis</a> explica as licenças em mais detalhes.</p>

<h2>Comece a descobrir fontes</h2>
<p>O Font Finder Tool combina reconhecimento de texto com IA, comparação de formas com mais de 1.900 Google Fonts, prévias ao vivo e informações claras de licença em uma única ferramenta gratuita e privada. Volte ao topo, <a href="#detector">envie uma imagem</a> e veja quais fontes combinam. Sem cadastro.</p>`
  },

  homeFaq: [
    {
      q: 'O que é um identificador de fontes?',
      a: 'Um identificador de fontes é uma ferramenta que descobre a tipografia usada em uma imagem. O Font Finder Tool lê as letras da sua captura de tela, foto ou logo, compara os formatos com mais de 1.900 Google Fonts gratuitas e mostra as fontes mais parecidas com prévia no seu próprio texto.'
    },
    {
      q: 'O Google consegue identificar uma fonte?',
      a: 'Não diretamente. O Google não tem um identificador de fontes próprio, e o Google Lens reconhece o texto de uma imagem, mas não informa o nome da tipografia. Para identificar uma fonte, envie a imagem para um identificador como este, que compara o formato das letras com a biblioteca do Google Fonts.'
    },
    {
      q: 'Como identificar o tipo de uma fonte?',
      a: 'Observe os detalhes marcantes: se tem serifa ou não, o formato de letras como “a”, “g”, “R” e “Q”, o contraste do traço e a altura-x. Ou pule a adivinhação: envie uma imagem do texto, desenhe uma caixa em volta de uma linha e clique em Identificar fonte para receber uma lista ordenada de fontes parecidas.'
    },
    {
      q: 'Como saber qual fonte foi usada?',
      a: 'Em um site, clique com o botão direito no texto, escolha Inspecionar e confira o valor de font-family na aba Computado. No Word ou no Google Docs, selecione o texto e veja o menu de fontes. Em imagens, logos e capturas de tela, onde o nome da fonte não fica salvo, envie a imagem para um identificador de fontes.'
    },
    {
      q: 'Posso usar IA para identificar uma fonte?',
      a: 'Sim. O Font Finder Tool é um identificador de fontes com IA: um mecanismo de reconhecimento de texto baseado em rede neural lê as letras da imagem, e depois o formato de cada letra é medido e comparado com um índice de glifos de mais de 1.900 Google Fonts. Tudo roda no seu navegador, então é rápido, grátis e privado.'
    },
    {
      q: 'Existe um identificador de fontes grátis?',
      a: 'Sim. O Font Finder Tool é totalmente gratuito, sem conta, sem marca d’água e sem limite diário. A comparação roda no seu próprio navegador, então não há custo de servidor a repassar, e todas as fontes sugeridas também podem ser baixadas grátis.'
    },
    {
      q: 'Como encontrar uma fonte parecida?',
      a: 'Recorte a imagem em uma única linha do texto que você quer reproduzir, envie e rode a análise. Depois, digite as suas próprias palavras na caixa de prévia e compare lado a lado letras e números marcantes até achar a mais parecida. Se a original for paga, escolha a alternativa gratuita que combinar melhor.'
    },
    {
      q: 'Posso tirar uma foto de uma fonte e descobrir qual é?',
      a: 'Sim. Tire uma foto com o celular ou faça uma captura de tela e depois envie, arraste ou cole a imagem (Ctrl+V). Fotografe o texto de frente, com boa luz e bem focado, e recorte uma linha com pelo menos 10 caracteres para ter os melhores resultados.'
    },
    {
      q: 'Onde encontrar fontes grátis?',
      a: 'O Google Fonts é a maior biblioteca de fontes gratuitas e de código aberto, com mais de 1.900 famílias que você pode usar em projetos pessoais e comerciais. Outras fontes confiáveis são o Fontshare e o The League of Moveable Type. Sempre confira a licença, principalmente em sites que reúnem fontes de muitos autores.'
    },
    {
      q: 'Como encontrar uma fonte específica?',
      a: 'Se você sabe o nome, pesquise no Google Fonts ou no site de uma fundição tipográfica. Se você só tem um exemplo, envie uma imagem do texto para um identificador de fontes. Os resultados aparecem com qualquer texto que você digitar, para você ver como a fonte fica com as suas palavras antes de baixar.'
    },
    {
      q: 'Como usar o Google Fonts?',
      a: 'Acesse fonts.google.com, escolha uma família e clique em Get font. Para usar em um site, copie o código de incorporação para o seu HTML e defina a font-family no CSS. Para usar em programas no computador, baixe os arquivos da fonte e instale. No Google Docs e no Google Slides, abra o menu de fontes e escolha Mais fontes.'
    },
    {
      q: 'Posso criar uma fonte usando IA?',
      a: 'Em parte. Ferramentas de imagem com IA podem gerar ideias de letras, e alguns serviços transformam a sua caligrafia ou um conjunto de letras desenhadas em uma fonte instalável. Uma fonte completa e profissional ainda exige trabalho em um editor de fontes, como o FontForge, que é gratuito, para refinar o formato das letras, o espaçamento e o kerning.'
    },
    {
      q: 'Que tipo de imagem dá os melhores resultados?',
      a: 'Uma imagem nítida, de frente, com texto escuro sobre fundo liso funciona melhor. Recorte uma única linha com pelo menos 10 caracteres e evite sombras fortes, contornos ou perspectiva distorcida. Letras cursivas fluidas e letras muito decoradas são as mais difíceis de identificar.'
    },
    {
      q: 'Os resultados são sempre exatos?',
      a: 'Nem sempre. Muitas tipografias têm letras muito parecidas, e logos costumam ser personalizados ou modificados. Use a prévia ao vivo para comparar detalhes como o “a”, o “g”, o “R” e os números antes de decidir. Se a sua imagem usa uma fonte comercial, você recebe as Google Fonts gratuitas mais próximas, e as fontes pagas conhecidas que elas lembram aparecem indicadas em cada cartão.'
    },
    {
      q: 'Posso usar as fontes comercialmente?',
      a: 'Sim. As Google Fonts são distribuídas sob licenças abertas (principalmente a SIL Open Font License) que permitem uso pessoal e comercial, inclusive em logos, sites e materiais impressos. Cada resultado mostra a sua licença.'
    },
    {
      q: 'Vocês veem as minhas imagens?',
      a: 'Não. Sua imagem é processada inteiramente no seu dispositivo e nunca é enviada. A primeira análise baixa o mecanismo de reconhecimento de texto e partes do índice de fontes, que o navegador guarda em cache. As análises recentes ficam salvas só no seu navegador e podem ser apagadas a qualquer momento.'
    },
    {
      q: 'Dá para identificar fontes em logos?',
      a: 'Muitas vezes, sim, desde que o logo use uma tipografia de verdade. Logotipos desenhados sob medida não têm correspondência exata, mas você ainda recebe as fontes gratuitas mais próximas.'
    }
  ] as FaqItem[],

  landing: {
    'what-font-is-this': {
      metaTitle: 'Qual é essa fonte? Descubra pela imagem | Font Finder Tool',
      metaDescription:
        'Quer saber “qual é essa fonte?” Envie uma foto ou captura de tela e veja as Google Fonts gratuitas mais parecidas, com prévia no seu texto.',
      breadcrumb: 'Qual é essa fonte?',
      eyebrow: 'Qual é essa fonte?',
      h1: 'Qual é essa fonte? Descubra a partir de uma imagem',
      intro: 'Viu uma fonte em um cartaz, um site ou um cardápio? Tire uma foto, envie e receba em segundos uma lista ordenada de fontes parecidas.',
      sections: [
        {
          heading: 'Descubra “qual é essa fonte?” em três passos',
          body: [
            'Envie ou cole a sua imagem, desenhe uma caixa em volta das palavras e clique em Identificar fonte. Comparamos o formato e as proporções de cada letra (espessura do traço, altura-x, largura e detalhes) com todas as fontes do Google Fonts.',
            'Cada resultado é exibido com o seu próprio texto, para você conferir os detalhes que diferenciam fontes parecidas: a cauda do “g”, a perna do “R”, o formato dos números.'
          ]
        },
        {
          heading: 'De onde a fonte costuma vir',
          body: [
            'Sites e aplicativos costumam usar Google Fonts gratuitas como Inter, Roboto e Montserrat, e essas dá para identificar com exatidão. Impressos, embalagens e identidades visuais usam com mais frequência famílias comerciais como Helvetica Neue, Gotham ou Futura; nesses casos você recebe as alternativas gratuitas mais próximas, e os cartões indicam com quais fontes pagas elas se parecem.'
          ]
        }
      ],
      faq: [
        {
          q: 'Por que o primeiro resultado parece um pouco diferente?',
          a: 'Muitas fontes são quase idênticas, e as imagens podem borrar detalhes finos. Confira também o segundo e o terceiro resultados e compare usando a prévia ao vivo com o seu próprio texto.'
        },
        {
          q: 'Consigo identificar uma fonte em uma foto tirada no celular?',
          a: 'Sim. Segure a câmera de frente para o texto, evite reflexos e recorte uma única linha antes de analisar para ter mais precisão.'
        }
      ]
    } as LandingContent,
    'free-font-finder': {
      metaTitle: 'Encontrar fontes grátis por imagem | Font Finder Tool',
      metaDescription:
        'Encontre fontes grátis a partir de qualquer imagem. Todo resultado é uma Google Font gratuita liberada para uso comercial, com alternativas a fontes pagas.',
      breadcrumb: 'Fontes grátis por imagem',
      eyebrow: 'Fontes grátis por imagem',
      h1: 'Encontre fontes grátis parecidas com qualquer imagem',
      intro: 'Todo resultado é uma Google Font gratuita e de código aberto que você pode baixar e usar hoje, inclusive em trabalhos comerciais.',
      sections: [
        {
          heading: 'Fontes grátis que você pode usar de verdade',
          body: [
            'A maioria dos resultados gratuitos vem do Google Fonts e do Fontsource, distribuídos sob a SIL Open Font License ou a Apache 2.0. Ambas permitem uso pessoal e comercial, inclusive em logos, sites e materiais impressos.',
            'Cada cartão mostra a licença, para você saber exatamente o que pode fazer antes de baixar.'
          ]
        },
        {
          heading: 'Quando a fonte original é paga',
          body: [
            'Se a imagem usa uma tipografia comercial, você recebe as fontes gratuitas mais próximas. Os cartões indicam as fontes pagas conhecidas com as quais elas se parecem: Inter ou Arimo para Helvetica, Montserrat para Gotham, Jost para Futura e muitas outras.'
          ]
        }
      ],
      faq: [
        {
          q: 'As Google Fonts são grátis para uso comercial?',
          a: 'Sim. As Google Fonts são distribuídas sob licenças abertas (principalmente a OFL) que permitem uso comercial, modificação e incorporação.'
        },
        {
          q: 'E se a fonte da minha imagem for paga?',
          a: 'Você verá as Google Fonts gratuitas mais parecidas. Elas não serão idênticas, mas são escolhidas comparando o formato real das letras, então são as alternativas gratuitas mais próximas.'
        }
      ]
    } as LandingContent,
    'logo-font-finder': {
      metaTitle: 'Descobrir a fonte de um logotipo | Font Finder Tool',
      metaDescription:
        'Descubra a fonte usada em um logo. Envie o logotipo, recorte o nome e veja as Google Fonts gratuitas mais parecidas, com detalhes da licença.',
      breadcrumb: 'Fonte de logotipo',
      eyebrow: 'Fonte de logotipo',
      h1: 'Descubra a fonte de qualquer logotipo',
      intro: 'Envie um logo, recorte o nome da marca e veja quais tipografias chegam mais perto, com alternativas gratuitas para letras no estilo da marca.',
      sections: [
        {
          heading: 'Como obter uma boa leitura do logo',
          body: [
            'Recorte ícones e slogans e deixe só o nome. Logos claros sobre fundo escuro também funcionam. Arquivos em alta resolução (exportações em SVG ou PNG grandes) dão resultados mais confiáveis do que favicons pequenos.'
          ]
        },
        {
          heading: 'Letras personalizadas e fontes modificadas',
          body: [
            'Muitas marcas partem de uma tipografia e depois ajustam o espaçamento, cortam letras ou desenham glifos sob medida. Nesse caso não existe correspondência exata, mas as fontes-base mais próximas continuam sendo o melhor ponto de partida para um visual parecido.',
            'Lembre-se de que a licença de uma fonte não dá direitos sobre a marca registrada de ninguém. Use os resultados como inspiração, não como imitação.'
          ]
        }
      ],
      faq: [
        {
          q: 'Posso usar a mesma fonte de um logo famoso?',
          a: 'Você pode usar a fonte se tiver a licença adequada, mas não pode copiar um logo ou uma marca registrada protegidos. Use a fonte para criar um design próprio e diferente.'
        },
        {
          q: 'Por que não há resultados exatos para o meu logo?',
          a: 'O logo provavelmente foi desenhado sob medida ou bastante modificado. Os resultados mostram as tipografias mais próximas que você pode usar no lugar.'
        }
      ]
    } as LandingContent,
    'google-font-finder': {
      metaTitle: 'Encontrar Google Fonts por imagem | Font Finder Tool',
      metaDescription:
        'Descubra a Google Font de qualquer imagem. Envie uma captura de tela e veja as Google Fonts parecidas, com prévia ao vivo e download em um clique.',
      breadcrumb: 'Encontrar Google Fonts',
      eyebrow: 'Encontrar Google Fonts',
      h1: 'Descubra a Google Font de qualquer imagem',
      intro: 'Envie uma captura de tela de um site, aplicativo ou slide e veja as Google Fonts correspondentes, com prévia no seu texto, a um clique do download.',
      sections: [
        {
          heading: 'Pesquise 1.900+ Google Fonts por imagem',
          body: [
            'Os resultados gratuitos levam direto à página da fonte no Google Fonts, onde você pode baixar a família ou copiar o código de incorporação para o seu site.',
            'Como as Google Fonts são de código aberto, você pode usá-las em projetos pessoais e comerciais, inclusive aplicativos e trabalhos para clientes.'
          ]
        },
        {
          heading: 'Parecida nem sempre é idêntica',
          body: [
            'Famílias como Inter, Roboto e Arimo ficam parecidas em tamanhos pequenos. Digite na caixa de prévia uma palavra com letras marcantes, como “Rag 1984”, para compará-las direito.'
          ]
        }
      ],
      faq: [
        {
          q: 'Como adicionar uma Google Font ao meu site?',
          a: 'Abra a página do resultado no Google Fonts, selecione os estilos de que precisa e copie o código <link> ou @import fornecido para o seu site.'
        },
        {
          q: 'A ferramenta encontra fontes que não estão no Google Fonts?',
          a: 'Não. Os resultados sempre vêm do Google Fonts, então são de uso gratuito. Para fontes comerciais, você recebe as alternativas gratuitas mais próximas.'
        }
      ]
    } as LandingContent
  },

  pages: {
    about: {
      title: 'Sobre nós | Font Finder Tool',
      description: 'O Font Finder Tool ajuda designers e desenvolvedores a identificar fontes em imagens e encontrar alternativas gratuitas.',
      heading: 'Sobre nós',
      html: `<p>O Font Finder Tool nasceu de uma frustração simples: os identificadores de fontes dizem um nome e depois deixam você descobrir sozinho se pode pagar por ela, se tem permissão para usá-la e como ela fica de verdade com as suas palavras.</p>
<p>Então criamos um identificador que só mostra fontes que você pode usar de verdade. Todo resultado é uma Google Font gratuita e de código aberto, com prévia no seu próprio texto, a licença indicada e um link direto para download. Quando a sua imagem usa uma fonte comercial, você recebe as alternativas gratuitas mais próximas, e os cartões indicam com quais fontes pagas elas se parecem.</p>

<h2>Como a comparação funciona</h2>
<p>Tudo roda no seu navegador. A ferramenta lê as letras do seu recorte e, em seguida, o formato e as proporções de cada letra são comparados com um índice pronto de todas as fontes do <a href="https://fonts.google.com" rel="noopener">Google Fonts</a> (fornecidas via <a href="https://fontsource.org" rel="noopener">Fontsource</a>). Sua imagem nunca é enviada.</p>

<h2>Fale com a gente</h2>
<p>Encontrou um resultado errado ou quer sugerir um recurso? Envie um e-mail para <a href="mailto:hello@fontfindertool.com">hello@fontfindertool.com</a> ou visite a nossa página de <a href="/contact">Contato</a>.</p>`
    } as ProseContent,
    contact: {
      title: 'Fale conosco | Font Finder Tool',
      description: 'Entre em contato com o Font Finder Tool para relatar um resultado errado, sugerir um recurso ou tirar uma dúvida.',
      heading: 'Fale conosco',
      html: `<p>Lemos todas as mensagens. O jeito mais rápido de falar com a gente é pelo e-mail <a href="mailto:hello@fontfindertool.com"><strong>hello@fontfindertool.com</strong></a>. Costumamos responder em alguns dias úteis.</p>

<h2>Relatar um resultado errado</h2>
<p>Se a ferramenta sugeriu a fonte errada, conte qual você esperava e, se puder, anexe a imagem que analisou. As análises rodam no seu dispositivo, então nunca vemos a sua imagem, a menos que você a envie para nós.</p>

<h2>Sugestões e feedback</h2>
<p>Ideias de novas ferramentas, fontes que você gostaria de ver incluídas ou qualquer coisa que tenha parecido confusa. Queremos saber.</p>

<h2>Privacidade e questões jurídicas</h2>
<p>Para dúvidas sobre como tratamos os dados ou sobre os nossos termos, use o mesmo endereço e escreva “Privacidade” ou “Jurídico” no assunto. Veja a nossa <a href="/privacy">Política de privacidade</a> e os <a href="/terms">Termos e condições</a>.</p>`
    } as ProseContent,
    privacy: {
      title: 'Política de privacidade | Font Finder Tool',
      description:
        'Como o Font Finder Tool trata as suas imagens e dados: a comparação roda no seu dispositivo e as imagens nunca são enviadas.',
      heading: 'Política de privacidade',
      html: `<p>O Font Finder Tool (“nós”) mantém o site fontfindertool.com. Esta página explica o que acontece com os seus dados quando você usa o site.</p>

<h2>Suas imagens ficam no seu dispositivo</h2>
<p>A comparação de fontes roda inteiramente no seu navegador. Quando você analisa uma imagem, ela é recortada, lida e comparada com o nosso índice de fontes no seu próprio dispositivo. <strong>Sua imagem nunca é enviada</strong> para nós nem para ninguém.</p>

<h2>Arquivos que o seu navegador baixa</h2>
<p>Para fazer a comparação, o seu navegador baixa:</p>
<ul>
  <li>o mecanismo de reconhecimento de texto <a href="https://tesseract.projectnaptha.com" rel="noopener">Tesseract.js</a> e os seus dados do idioma inglês, a partir da CDN jsDelivr;</li>
  <li>partes do nosso índice de fontes, a partir de fontfindertool.com;</li>
  <li>arquivos de fonte para as prévias, a partir do Fontsource via jsDelivr.</li>
</ul>
<p>Essas solicitações contêm dados técnicos comuns, como o seu endereço IP e o tipo de navegador, mas nunca a sua imagem.</p>

<h2>Dados no seu navegador</h2>
<p>Suas análises recentes (uma pequena miniatura e os resultados) e a sua escolha de tema são salvas no armazenamento local do seu navegador. Elas nunca saem do seu dispositivo, e você pode apagar as análises recentes com o botão “Limpar”.</p>

<h2>Hospedagem</h2>
<p>O site é hospedado na Cloudflare, que pode processar registros de solicitações (como endereços IP) para entregar e proteger o site. Não usamos cookies de publicidade nem de rastreamento.</p>

<h2>Crianças</h2>
<p>O site é uma ferramenta de design de uso geral e não é direcionado a crianças menores de 13 anos. Não coletamos intencionalmente informações pessoais de ninguém.</p>

<h2>Suas escolhas</h2>
<p>Como não mantemos contas nem armazenamos as suas imagens, não existe perfil pessoal para compartilharmos, vendermos ou excluirmos. Se você nos enviar um e-mail, usamos a sua mensagem apenas para responder, e você pode pedir a exclusão da nossa correspondência a qualquer momento.</p>
<p>Onde quer que você esteja, pode nos enviar um e-mail para perguntar quais informações temos sobre você, ou para corrigi-las ou excluí-las.</p>

<h2>Alterações nesta política</h2>
<p>Se mudarmos a forma como o site trata os dados, atualizaremos esta página e a data de “Última atualização” acima.</p>

<h2>Contato</h2>
<p>Dúvidas sobre privacidade? Envie um e-mail para <a href="mailto:hello@fontfindertool.com">hello@fontfindertool.com</a> ou visite a nossa página de <a href="/contact">Contato</a>.</p>`
    } as ProseContent,
    terms: {
      title: 'Termos e condições | Font Finder Tool',
      description: 'Os termos que se aplicam quando você usa o Font Finder Tool.',
      heading: 'Termos e condições',
      html: `<p>Ao usar o fontfindertool.com, você concorda com estes termos.</p>

<h2>O serviço</h2>
<p>O Font Finder Tool sugere Google Fonts parecidas com o texto de uma imagem fornecida por você. A comparação roda no seu navegador. Os resultados são sugestões automáticas e podem não ser exatos. O serviço é fornecido “no estado em que se encontra”, sem garantias de qualquer tipo.</p>

<h2>Uso razoável</h2>
<p>Não faça raspagem (scraping) nem download em massa do índice de fontes, nem sobrecarregue o site de forma não razoável.</p>

<h2>Suas imagens</h2>
<p>As imagens que você analisa são processadas no seu próprio dispositivo e não são enviadas para nós. Você é responsável por ter o direito de usar qualquer imagem que analisar.</p>

<h2>Licenças de fontes</h2>
<p>Não vendemos nem licenciamos fontes. As fontes sugeridas vêm do Google Fonts e são distribuídas sob as suas próprias licenças abertas; os resumos de licença são fornecidos por conveniência. Consulte a página da fonte para ver os termos completos. As indicações de que uma fonte se parece com uma tipografia comercial servem apenas como referência e não implicam nenhuma afiliação com o proprietário dessa tipografia. Usar uma fonte não concede direitos sobre nenhuma marca registrada ou logotipo em que ela apareça.</p>

<h2>Nosso conteúdo</h2>
<p>O design, os textos, o código e o índice de fontes do site pertencem ao Font Finder Tool. Você pode compartilhar links para o site, mas não copie nem republique partes substanciais dele sem permissão. Os nomes de fontes e as marcas registradas pertencem aos seus respectivos proprietários.</p>

<h2>Limitação de responsabilidade</h2>
<p>Na máxima extensão permitida por lei, o Font Finder Tool não se responsabiliza por nenhuma perda indireta, incidental ou consequente decorrente do seu uso do site ou dos seus resultados, incluindo qualquer decisão de usar uma fonte sugerida. Sempre confirme a licença de uma fonte antes de usá-la no seu trabalho.</p>

<h2>Links de terceiros</h2>
<p>Os resultados levam a sites de terceiros, como o Google Fonts e o Fontsource. Não somos responsáveis pelo conteúdo nem pelos termos desses sites.</p>

<h2>Alterações</h2>
<p>Podemos atualizar estes termos. Continuar usando o site após as alterações significa que você as aceita.</p>

<h2>Contato</h2>
<p>Dúvidas sobre estes termos? Veja a nossa página de <a href="/contact">Contato</a> ou envie um e-mail para <a href="mailto:hello@fontfindertool.com">hello@fontfindertool.com</a>.</p>`
    } as ProseContent
  },

  errors: {
    notFound: {
      title: 'Página não encontrada | Font Finder Tool',
      description: 'Esta página não existe.',
      heading: 'Esta página não existe',
      message: 'A página que você procura não existe. Mas talvez a fonte que você procura exista.',
      primary: 'Encontrar fonte',
      secondary: 'Relatar um link quebrado'
    },
    serverError: {
      title: 'Algo deu errado | Font Finder Tool',
      description: 'Ocorreu um erro inesperado.',
      heading: 'Algo deu errado',
      message: 'Um erro inesperado impediu o carregamento desta página. Tente novamente em instantes ou volte ao identificador de fontes.',
      primary: 'Tentar novamente',
      secondary: 'Ir para o início'
    }
  },

  schema: {
    webAppDescription:
      'Identificador de fontes grátis com IA: envie uma imagem, descubra a fonte e veja Google Fonts gratuitas parecidas, com prévia do texto e licença.',
    browserRequirements: 'Requer JavaScript e um navegador moderno.',
    featureList: [
      'Encontrar fonte por imagem: envie, arraste ou cole uma captura de tela, foto ou logo',
      'Reconhecimento de texto com IA e comparação de formas com 1.900+ Google Fonts',
      'Prévia de cada resultado com o seu próprio texto',
      'Alternativas grátis a fontes pagas populares',
      'Resumo da licença e link para download em cada resultado',
      'Funciona no seu navegador: as imagens nunca são enviadas'
    ]
  }
};

export default pt;
