// Santos populares — imagens reais servidas pelo Wikimedia Commons
// (Special:FilePath entrega o arquivo com redimensionamento estável).
export type Devotion =
  | "Mariana"
  | "Anjos"
  | "Apóstolos"
  | "Doutores da Igreja"
  | "Místicos"
  | "Franciscanos"
  | "Família"
  | "Causas Impossíveis"
  | "Modernos";

export interface Santo {
  slug: string;
  name: string;
  feast: string; // dd/mm
  title: string;
  image: string;
  imageLarge: string;
  bio: string;
  history?: string;
  prayer?: string;
  patronage?: string;
  devotion: Devotion;
  novenaSlug?: string;
}

const commons = (file: string, w = 800) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${w}`;

export const santos: Santo[] = [
  {
    slug: "nossa-senhora-aparecida",
    name: "Nossa Senhora Aparecida",
    feast: "12/10",
    title: "Padroeira do Brasil",
    image: commons("Nossa Senhora Aparecida.jpg", 800),
    imageLarge: commons("Nossa Senhora Aparecida.jpg", 1600),
    bio: "Em 1717, três pescadores encontraram no Rio Paraíba a pequena imagem de terracota da Imaculada. Desde então, milhões de brasileiros peregrinam a Aparecida para confiar à Mãe suas famílias, seu trabalho e sua fé.",
    history:
      "A imagem tem cerca de 40 cm, é feita em terracota e representa Nossa Senhora da Conceição. Após ser recolhida da rede dos pescadores Domingos, Filipe e João, foi guardada por 15 anos na casa de Filipe Pedroso, onde começaram os primeiros milagres. Coroada Rainha e Padroeira do Brasil por Pio XI em 1930, hoje é venerada na maior basílica mariana do mundo.",
    prayer:
      "Ó Virgem Aparecida, Senhora da minha vida, Mãe do meu Senhor Jesus Cristo, aqui estou aos vossos pés, confiante e cheio de amor.",
    patronage: "Brasil, famílias, pescadores",
    devotion: "Mariana",
    novenaSlug: "aparecida",
  },
  {
    slug: "sao-jose",
    name: "São José",
    feast: "19/03",
    title: "Esposo de Maria, Padroeiro da Igreja",
    image: commons("Guido Reni - Saint Joseph with the Infant Jesus - WGA19304.jpg", 800),
    imageLarge: commons("Guido Reni - Saint Joseph with the Infant Jesus - WGA19304.jpg", 1600),
    bio: "Homem justo e silencioso, escolhido por Deus para guardar Maria e Jesus. Modelo de trabalho, obediência e pai adotivo de Cristo. Padroeiro da Igreja universal e dos pais de família.",
    history:
      "Descendente do rei Davi, exerceu o ofício de carpinteiro em Nazaré. Recebeu do anjo a missão de acolher Maria e o Menino, fugiu com eles para o Egito e os conduziu de volta em silenciosa fidelidade. Pio IX o declarou Padroeiro da Igreja Universal em 1870. É invocado como patrono da boa morte por ter falecido nos braços de Jesus e Maria.",
    prayer:
      "São José, guardião da Sagrada Família, protegei nosso lar, nosso trabalho e nossa fé.",
    patronage: "Pais, trabalhadores, boa morte",
    devotion: "Família",
    novenaSlug: "sao-jose",
  },
  {
    slug: "sao-francisco-de-assis",
    name: "São Francisco de Assis",
    feast: "04/10",
    title: "Poverello, apóstolo da paz e da criação",
    image: commons("Cimabue 025.jpg", 800),
    imageLarge: commons("Cimabue 025.jpg", 1600),
    bio: "Filho de um rico comerciante, abandonou tudo por Cristo pobre. Fundou os Franciscanos, recebeu os estigmas no monte Alverne e cantou o Cântico das Criaturas. Sua alegria continua sendo escola de santidade.",
    history:
      "Nascido em Assis por volta de 1181, converteu-se após ouvir Cristo dizer-lhe do crucifixo de São Damião: 'Vai, Francisco, e repara a minha casa'. Despiu-se dos bens diante do bispo, montou a primeira ordem mendicante, criou o primeiro presépio vivo em Greccio e recebeu os estigmas em 1224. Morreu em 3 de outubro de 1226, cantando o Cântico do Sol.",
    prayer:
      "Senhor, fazei de mim um instrumento de vossa paz. Onde houver ódio, que eu leve o amor.",
    patronage: "Ecologia, animais, Itália",
    devotion: "Franciscanos",
  },
  {
    slug: "santa-teresinha",
    name: "Santa Teresinha do Menino Jesus",
    feast: "01/10",
    title: "Doutora da Igreja, patrona das missões",
    image: commons("Santa Teresa de Lisieux.jpg", 800),
    imageLarge: commons("Santa Teresa de Lisieux.jpg", 1600),
    bio: "Carmelita de Lisieux, morreu aos 24 anos ensinando o 'pequeno caminho' da infância espiritual: fazer as coisas pequenas com muito amor. Prometeu passar o Céu fazendo o bem na terra — e continua a cumprir.",
    history:
      "Thérèse Martin entrou no Carmelo aos 15 anos. Escreveu 'História de uma Alma' por obediência à priora, revelando uma espiritualidade luminosa de confiança e abandono. Padroeira das missões sem nunca ter deixado o claustro, foi proclamada Doutora da Igreja por João Paulo II em 1997.",
    prayer: "Santa Teresinha, ensinai-me a confiar como uma criança nos braços de Deus.",
    patronage: "Missões, floristas, doentes",
    devotion: "Místicos",
  },
  {
    slug: "sao-judas-tadeu",
    name: "São Judas Tadeu",
    feast: "28/10",
    title: "Apóstolo das causas impossíveis",
    image: commons("Anthonis van Dyck 087.jpg", 800),
    imageLarge: commons("Anthonis van Dyck 087.jpg", 1600),
    bio: "Apóstolo de Jesus, parente próximo do Senhor. Pregou o Evangelho na Mesopotâmia e Pérsia, onde recebeu a coroa do martírio. É invocado em causas urgentes e desesperadas.",
    history:
      "Um dos Doze, também chamado Tadeu para distingui-lo de Judas Iscariotes. Autor de uma carta canônica do Novo Testamento, evangelizou junto a Simão Cananeu. A devoção como 'padroeiro das causas impossíveis' cresceu no Brasil no séc. XX, particularmente em São Paulo, onde milhares o buscam a cada dia 28.",
    prayer:
      "São Judas Tadeu, fiel amigo de Jesus, socorrei-me nesta necessidade que confio à vossa intercessão.",
    patronage: "Causas impossíveis, desesperados",
    devotion: "Causas Impossíveis",
    novenaSlug: "sao-judas",
  },
  {
    slug: "santa-rita",
    name: "Santa Rita de Cássia",
    feast: "22/05",
    title: "Advogada dos casos impossíveis",
    image: commons("Santa Rita da Cassia.jpg", 800),
    imageLarge: commons("Santa Rita da Cassia.jpg", 1600),
    bio: "Esposa, mãe, viúva e monja agostiniana. Suportou anos difíceis com paciência heroica e recebeu no rosto o estigma do espinho da coroa de Cristo. Rosas florescem sobre sua história.",
    history:
      "Nasceu em Roccaporena (Itália, 1381). Casada por obediência aos pais, viveu um matrimônio difícil com um marido violento, que se converteu antes de ser assassinado. Perdoou publicamente os assassinos e, após a morte dos filhos, entrou no mosteiro agostiniano de Cássia. Um espinho do Crucificado ferra-lhe a testa em 1443 — chaga que carregou até a morte, em 1457.",
    prayer:
      "Santa Rita, rosa perfumada de virtudes, alcançai-me a graça que humildemente vos peço.",
    patronage: "Casos impossíveis, esposas, mães",
    devotion: "Causas Impossíveis",
    novenaSlug: "santa-rita",
  },
  {
    slug: "santo-antonio",
    name: "Santo Antônio de Pádua",
    feast: "13/06",
    title: "Doutor evangélico, arca do Testamento",
    image: commons("El Greco 034.jpg", 800),
    imageLarge: commons("El Greco 034.jpg", 1600),
    bio: "Português, franciscano, pregador incansável. Sua palavra convertia multidões e seus milagres continuam vivos. Invocado para encontrar o que se perdeu — inclusive a paz e o amor.",
    history:
      "Fernando de Bulhões nasceu em Lisboa em 1195. Cônego agostiniano, tornou-se franciscano após conhecer os primeiros mártires do Marrocos. Pregou em Itália e França, combateu heresias e teve a graça de acolher o Menino Jesus em seus braços. Morreu em Pádua em 1231; foi canonizado apenas 11 meses depois — um dos processos mais rápidos da história.",
    prayer: "Se milagres desejais, recorrei a Santo Antônio; vereis logo atendidos vossos rogos.",
    patronage: "Objetos perdidos, noivados, pobres",
    devotion: "Franciscanos",
  },
  {
    slug: "sao-miguel-arcanjo",
    name: "São Miguel Arcanjo",
    feast: "29/09",
    title: "Príncipe das milícias celestes",
    image: commons("Guido Reni 031.jpg", 800),
    imageLarge: commons("Guido Reni 031.jpg", 1600),
    bio: "Chefe do exército de Deus, o 'Quem como Deus?' venceu Lúcifer e defende a Igreja peregrina. Sua Quaresma (15/8 a 29/9) prepara os fiéis para o combate espiritual.",
    history:
      "Aparece no livro de Daniel, no Apocalipse e na tradição como o defensor do povo de Deus. Suas aparições no Monte Gargano (Itália) e no Monte Saint-Michel (França) marcam a devoção medieval. A oração composta por Leão XIII em 1886 é rezada até hoje ao fim das Missas em muitos lugares.",
    prayer:
      "São Miguel Arcanjo, defendei-nos no combate, sede o nosso refúgio contra a maldade e as ciladas do demônio.",
    patronage: "Igreja militante, policiais, soldados",
    devotion: "Anjos",
    novenaSlug: "sao-miguel",
  },
  {
    slug: "padre-pio",
    name: "São Pio de Pietrelcina",
    feast: "23/09",
    title: "Estigmatizado, confessor incansável",
    image: commons("Padre pio.jpg", 800),
    imageLarge: commons("Padre pio.jpg", 1600),
    bio: "Capuchinho italiano que carregou por 50 anos os estigmas de Cristo. Passava horas confessando e conduzindo almas a Deus. Fundou os Grupos de Oração e a Casa Alívio do Sofrimento.",
    history:
      "Francesco Forgione (1887–1968) recebeu os estigmas visíveis em 20 de setembro de 1918. Sofreu incompreensões dentro da própria Igreja, mas obedeceu em silêncio. Fundou em San Giovanni Rotondo o hospital 'Casa Sollievo della Sofferenza'. Foi canonizado por João Paulo II em 2002.",
    prayer: "Reze, espere e não se preocupe — São Padre Pio.",
    patronage: "Doentes, confessores",
    devotion: "Místicos",
  },
  {
    slug: "sao-joao-paulo-ii",
    name: "São João Paulo II",
    feast: "22/10",
    title: "O Papa peregrino, apóstolo da família",
    image: commons("Papa Juan Pablo II.jpg", 800),
    imageLarge: commons("Papa Juan Pablo II.jpg", 1600),
    bio: "Karol Wojtyła, polonês, poeta, ator, sacerdote e Papa por 26 anos. Reconciliou continentes, defendeu a vida e a família, ensinou a Teologia do Corpo. 'Não tenhais medo!'",
    history:
      "Nascido em Wadowice (1920), viveu a ocupação nazista e o comunismo. Eleito Papa em 1978, realizou 104 viagens apostólicas, instituiu a JMJ, publicou 14 encíclicas e canonizou 482 santos. Sobreviveu ao atentado de 13/5/1981 atribuindo a vida a Nossa Senhora de Fátima. Faleceu em 2005 e foi canonizado em 2014.",
    prayer: "São João Paulo II, ensinai as famílias a serem cânticos vivos de Cristo Ressuscitado.",
    patronage: "Famílias, jovens, dignidade humana",
    devotion: "Modernos",
  },
  {
    slug: "santa-teresa-avila",
    name: "Santa Teresa de Ávila",
    feast: "15/10",
    title: "Doutora da Igreja, mestra de oração",
    image: commons("Teresa of Avila dsc01644.jpg", 800),
    imageLarge: commons("Teresa of Avila dsc01644.jpg", 1600),
    bio: "Reformadora do Carmelo, escreveu 'Castelo Interior' e 'Caminho de Perfeição'. Ensina que a oração é 'tratar de amizade com aquele que sabemos nos ama'.",
    history:
      "Teresa de Cepeda y Ahumada (1515–1582) empreendeu a reforma do Carmelo Descalço com São João da Cruz, fundando 17 mosteiros. Sua experiência mística e o rigor pedagógico levaram Paulo VI a proclamá-la, em 1970, a primeira mulher Doutora da Igreja.",
    prayer:
      "Nada te turbe, nada te espante; tudo passa; Deus não muda. A paciência tudo alcança. Só Deus basta.",
    patronage: "Contemplativos, escritores",
    devotion: "Doutores da Igreja",
  },
  {
    slug: "perpetuo-socorro",
    name: "Nossa Senhora do Perpétuo Socorro",
    feast: "27/06",
    title: "Mãe do Socorro contínuo",
    image: commons("VirMaria.JPG", 800),
    imageLarge: commons("VirMaria.JPG", 1600),
    bio: "Ícone bizantino do séc. XIV, hoje custodiado pelos Redentoristas em Roma. Na imagem, o Menino Jesus contempla os instrumentos da Paixão; Maria olha para nós, oferecendo o seu Filho e o seu socorro.",
    history:
      "O ícone chegou a Roma no final do séc. XV e foi confiado por Pio IX aos Redentoristas em 1866, com a missão: 'fazei-a conhecida em todo o mundo'. A devoção espalhou-se pelo Brasil pelas novenas semanais, sobretudo às quartas-feiras.",
    prayer:
      "Ó Mãe do Perpétuo Socorro, concedei-me sempre invocar vosso nome poderoso, protetor dos vivos e salvação dos moribundos.",
    patronage: "Enfermos, aflitos, mães",
    devotion: "Mariana",
  },
];

export const devotions: Devotion[] = [
  "Mariana",
  "Anjos",
  "Apóstolos",
  "Doutores da Igreja",
  "Místicos",
  "Franciscanos",
  "Família",
  "Causas Impossíveis",
  "Modernos",
];
