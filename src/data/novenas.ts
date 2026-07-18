export type NovenaDevotion =
  | "Mariana"
  | "Cristológica"
  | "Anjos"
  | "Família"
  | "Causas Impossíveis"
  | "Espírito Santo"
  | "Infância";

export interface Novena {
  slug: string;
  title: string;
  when: string;
  intention: string;
  color: string;
  summary: string;
  devotion: NovenaDevotion;
  history: string;
  opening: string;
  daily: string;
  days: string[]; // 9 pequenas meditações
  closing: string;
}

export const novenas: Novena[] = [
  {
    slug: "aparecida",
    title: "Novena de Nossa Senhora Aparecida",
    when: "03/10 a 11/10 (festa em 12/10)",
    intention: "Pelas famílias brasileiras",
    color: "Branca",
    summary:
      "Nove dias para confiar à Padroeira do Brasil as intenções da casa, do trabalho e da nação.",
    devotion: "Mariana",
    history:
      "Rezada oficialmente no Santuário Nacional desde a proclamação de Aparecida como Padroeira do Brasil (1930). Recolhe o povo em torno da Mãe encontrada nas águas.",
    opening: "Em nome do Pai e do Filho e do Espírito Santo. Amém. Nossa Senhora Aparecida, rogai por nós.",
    daily: "1 Pai-Nosso, 3 Ave-Marias e 1 Glória, oferecidos pela intenção do dia.",
    days: [
      "Dia 1 — Maria, encontrada nas redes: aprendemos que Deus visita a vida simples.",
      "Dia 2 — Maria, corpo pequeno e coração de Rainha: acolhemos a graça que renova o Brasil.",
      "Dia 3 — Maria, Mãe das famílias: consagramos hoje o nosso lar.",
      "Dia 4 — Maria, esperança dos pescadores: entregamos o trabalho de cada mão.",
      "Dia 5 — Maria, silêncio orante: pedimos a graça da fé humilde.",
      "Dia 6 — Maria, Rainha e Padroeira: apresentamos a nossa Nação.",
      "Dia 7 — Maria, refúgio dos aflitos: confiamos os doentes e cansados.",
      "Dia 8 — Maria, aurora do Salvador: intercedei pela conversão dos afastados.",
      "Dia 9 — Maria Aparecida: aceitai a nossa gratidão e conduzi-nos a Jesus.",
    ],
    closing:
      "Ó Senhora Aparecida, com a alma cheia de alegria, entregamos-vos as intenções desta novena. Rogai por nós. Amém.",
  },
  {
    slug: "sao-jose",
    title: "Novena de São José",
    when: "10/03 a 18/03 (festa em 19/03)",
    intention: "Pelo pai, pelo trabalho e pelo lar",
    color: "Roxa/Branca",
    summary:
      "Modelo silencioso do trabalhador justo — reze pelas causas urgentes da família.",
    devotion: "Família",
    history:
      "Difundida a partir do séc. XIX, foi recomendada por São Francisco de Sales e por Santa Teresa de Ávila. Pio IX proclamou José Padroeiro da Igreja Universal em 1870.",
    opening: "Glorioso São José, esposo virginal de Maria e pai adotivo de Jesus, escutai a nossa oração.",
    daily: "1 Pai-Nosso, 1 Ave-Maria e 1 Glória, pedindo a graça desejada.",
    days: [
      "Dia 1 — São José, homem justo: ensinai-nos a viver na presença de Deus.",
      "Dia 2 — São José, esposo fidelíssimo: proteger o amor conjugal.",
      "Dia 3 — São José, guardião do Menino: velar sobre as nossas crianças.",
      "Dia 4 — São José, trabalhador de Nazaré: santificar o nosso ofício.",
      "Dia 5 — São José, homem do silêncio: escutar a voz do Espírito.",
      "Dia 6 — São José, exilado no Egito: consolar quem sofre longe de casa.",
      "Dia 7 — São José, mestre de oração: introduzir-nos na intimidade com Cristo.",
      "Dia 8 — São José, padroeiro da boa morte: preparar-nos para o encontro com o Senhor.",
      "Dia 9 — São José, protetor da Igreja: interceder pelas causas urgentes.",
    ],
    closing:
      "Ide a José e confiai n'Ele. Amém.",
  },
  {
    slug: "menino-jesus-de-praga",
    title: "Novena do Menino Jesus de Praga",
    when: "17/12 a 25/12 (Natal)",
    intention: "Graças urgentes e proteção da infância",
    color: "Branca",
    summary:
      "Devoção tcheca amada no mundo inteiro. 'Quanto mais Me honrardes, mais vos favorecerei.'",
    devotion: "Infância",
    history:
      "A imagem do Menino Rei chegou a Praga no séc. XVII pelas mãos dos Carmelitas Descalços. As promessas ao venerável Padre Cirilo tornaram-se mundialmente conhecidas.",
    opening: "Divino Menino Jesus, eu vos adoro e vos confio a minha necessidade.",
    daily: "Uma vez cada dia, durante 9 horas seguidas ou 9 dias: 'Ó Jesus, que dissestes: pedi e recebereis...'",
    days: [
      "Hora/Dia 1 — Menino Jesus, ternura de Deus: acolhei-nos como filhos.",
      "Hora/Dia 2 — Rei da glória: reinai em nossa casa.",
      "Hora/Dia 3 — Menino pobre de Belém: ensinai-nos a simplicidade.",
      "Hora/Dia 4 — Refúgio das crianças: protegei toda infância.",
      "Hora/Dia 5 — Fonte de graças: concedei o que humildemente pedimos.",
      "Hora/Dia 6 — Amigo dos aflitos: consolai o coração cansado.",
      "Hora/Dia 7 — Menino que crescestes em sabedoria: iluminai as decisões.",
      "Hora/Dia 8 — Salvador que nascestes por nós: preparai o nosso Natal.",
      "Hora/Dia 9 — Menino Jesus de Praga: quanto mais vos honramos, mais nos favoreceis.",
    ],
    closing:
      "Divino Menino Jesus, em vós confio. Amém.",
  },
  {
    slug: "sagrado-coracao",
    title: "Novena ao Sagrado Coração de Jesus",
    when: "Nas nove sextas-feiras consecutivas",
    intention: "Reparação e consagração da família",
    color: "Vermelha",
    summary:
      "As promessas feitas a Santa Margarida Maria: paz, refúgio e perseverança até o fim.",
    devotion: "Cristológica",
    history:
      "Nasceu das revelações de Nosso Senhor a Santa Margarida Maria Alacoque em Paray-le-Monial (1673–1675). A prática das nove primeiras sextas-feiras carrega a promessa da perseverança final.",
    opening: "Coração Sagrado de Jesus, eu confio em Vós.",
    daily: "Confissão e Comunhão nas nove primeiras sextas-feiras, com meditação sobre o Coração de Jesus.",
    days: [
      "1ª sexta — Coração ferido pelo amor: repararei a indiferença.",
      "2ª sexta — Coração paciente: aprenderei a mansidão.",
      "3ª sexta — Coração misericordioso: acolherei o irmão que ofende.",
      "4ª sexta — Coração eucarístico: adorarei o Santíssimo Sacramento.",
      "5ª sexta — Coração obediente: farei a vontade do Pai.",
      "6ª sexta — Coração pobre: viverei o desapego.",
      "7ª sexta — Coração casto: guardarei o coração para Cristo.",
      "8ª sexta — Coração missionário: falarei de Jesus a alguém.",
      "9ª sexta — Coração glorioso: consagrarei a família ao Sagrado Coração.",
    ],
    closing:
      "Sagrado Coração de Jesus, salvai-nos, curai-nos, consagrai-nos a Vós. Amém.",
  },
  {
    slug: "santa-rita",
    title: "Novena de Santa Rita de Cássia",
    when: "13/05 a 21/05 (festa em 22/05)",
    intention: "Casos impossíveis",
    color: "Rosa",
    summary:
      "Advogada das causas desesperadas — leve a Ela o que parece humanamente perdido.",
    devotion: "Causas Impossíveis",
    history:
      "Popularizada pelas monjas agostinianas de Cássia (Itália), a novena é acompanhada da tradicional bênção das rosas.",
    opening: "Ó Santa Rita, advogada dos impossíveis, escutai o meu pedido.",
    daily: "1 Pai-Nosso, 1 Ave-Maria e 1 Glória, meditando uma virtude de Santa Rita.",
    days: [
      "Dia 1 — A obediência que aceitou o casamento.",
      "Dia 2 — A paciência no lar difícil.",
      "Dia 3 — O perdão oferecido diante do sangue.",
      "Dia 4 — A entrega dos filhos a Deus.",
      "Dia 5 — A viuvez consagrada.",
      "Dia 6 — A perseverança na porta do mosteiro.",
      "Dia 7 — O espinho da coroa recebido no rosto.",
      "Dia 8 — A caridade com as irmãs e os aflitos.",
      "Dia 9 — A confiança que floresce em rosas.",
    ],
    closing:
      "Santa Rita, obtende-me a graça de aceitar a cruz e de esperar contra toda esperança. Amém.",
  },
  {
    slug: "sao-judas",
    title: "Novena de São Judas Tadeu",
    when: "20/10 a 28/10",
    intention: "Causas urgentes",
    color: "Verde",
    summary:
      "Apóstolo fiel — reze com paciência os nove dias e agradeça publicamente a graça alcançada.",
    devotion: "Causas Impossíveis",
    history:
      "Muito difundida no Brasil pelos padres do Sagrado Coração, especialmente na Paróquia de São Judas em São Paulo, onde a fila de fiéis se renova todo dia 28.",
    opening: "Ó glorioso Apóstolo São Judas Tadeu, socorrei-me nesta hora de aflição.",
    daily: "1 Pai-Nosso, 1 Ave-Maria e 1 Glória por três vezes em honra à Santíssima Trindade.",
    days: [
      "Dia 1 — Apóstolo escolhido: fortaleça a nossa fé.",
      "Dia 2 — Parente do Senhor: torna-nos íntimos de Jesus.",
      "Dia 3 — Autor da Epístola: ensina-nos a guardar o depósito da fé.",
      "Dia 4 — Missionário incansável: dá coragem ao anúncio.",
      "Dia 5 — Amigo de Simão: consolida amizades cristãs.",
      "Dia 6 — Mártir fiel: sustenta perseguidos por causa da fé.",
      "Dia 7 — Advogado das causas urgentes: apressa o socorro.",
      "Dia 8 — Intercessor no Céu: coloca o meu pedido diante do Senhor.",
      "Dia 9 — São Judas Tadeu: alcança-me a graça pedida com confiança.",
    ],
    closing:
      "São Judas Tadeu, rogai por nós e por todos os que vos invocam. Amém.",
  },
  {
    slug: "imaculada",
    title: "Novena da Imaculada Conceição",
    when: "29/11 a 07/12 (festa em 08/12)",
    intention: "Pela pureza e proteção do lar",
    color: "Branca/Azul",
    summary:
      "Prepare com Maria o Advento — Ela nos ensina a esperar o Salvador com o coração limpo.",
    devotion: "Mariana",
    history:
      "Dogma proclamado por Pio IX em 1854; a novena antecede a Solenidade e se conecta às aparições de Lourdes ('Eu sou a Imaculada Conceição').",
    opening: "Ó Maria concebida sem pecado, rogai por nós que recorremos a Vós.",
    daily: "3 Ave-Marias em honra à pureza da Virgem e uma jaculatória.",
    days: [
      "Dia 1 — A eleição eterna de Maria.",
      "Dia 2 — A predestinação sem mancha.",
      "Dia 3 — A humildade que atrai o Altíssimo.",
      "Dia 4 — A Virgem cheia de graça.",
      "Dia 5 — A esposa do Espírito Santo.",
      "Dia 6 — A nova Eva.",
      "Dia 7 — A aurora do Salvador.",
      "Dia 8 — A Mãe do Redentor.",
      "Dia 9 — A Imaculada Conceição, esperança da Igreja.",
    ],
    closing:
      "Vinde, Senhor Jesus, pelas mãos puríssimas de Maria. Amém.",
  },
  {
    slug: "espirito-santo",
    title: "Novena ao Espírito Santo",
    when: "Da Ascensão até Pentecostes",
    intention: "Dons e frutos do Espírito",
    color: "Vermelha",
    summary:
      "A primeira novena da Igreja: Maria com os apóstolos no cenáculo, esperando o Consolador.",
    devotion: "Espírito Santo",
    history:
      "É considerada a 'mãe' de todas as novenas — os discípulos permaneceram nove dias em oração aguardando a promessa do Pai (Atos 1,14).",
    opening: "Vinde, Espírito Santo, enchei os corações dos vossos fiéis.",
    daily: "Sequência de Pentecostes ou meditação sobre um dom.",
    days: [
      "Dia 1 — Dom da Sabedoria: saborear as coisas de Deus.",
      "Dia 2 — Dom do Entendimento: penetrar os mistérios da fé.",
      "Dia 3 — Dom do Conselho: escolher segundo o Espírito.",
      "Dia 4 — Dom da Fortaleza: perseverar no bem.",
      "Dia 5 — Dom da Ciência: ver o mundo à luz de Deus.",
      "Dia 6 — Dom da Piedade: rezar como filhos.",
      "Dia 7 — Dom do Temor de Deus: amar sem ofender.",
      "Dia 8 — Frutos do Espírito: colher o que a graça fez crescer.",
      "Dia 9 — Vinde, Espírito Santo, renovai a face da terra.",
    ],
    closing:
      "Enviai o vosso Espírito e tudo será criado, e renovareis a face da terra. Amém.",
  },
  {
    slug: "sao-miguel",
    title: "Quaresma de São Miguel Arcanjo",
    when: "15/08 a 29/09 (40 dias)",
    intention: "Defesa espiritual e combate ao mal",
    color: "Branca",
    summary:
      "Revelada a Santo Antônio e difundida por São Francisco — jejum, oração e sacramentos.",
    devotion: "Anjos",
    history:
      "Segundo a tradição franciscana, São Francisco iniciou a Quaresma de São Miguel após uma revelação a Santo Antônio. Culmina no dia dos Arcanjos, 29 de setembro.",
    opening: "São Miguel Arcanjo, defendei-nos no combate.",
    daily: "Coroa Angélica (9 saudações aos coros angélicos) + jejum semanal + Confissão.",
    days: [
      "Semana 1 — Serafins: acender em nós o fogo do amor.",
      "Semana 2 — Querubins: iluminar a inteligência.",
      "Semana 3 — Tronos: firmar o coração em Deus.",
      "Semana 4 — Dominações: dominar as paixões.",
      "Semana 5 — Virtudes: sustentar-nos na provação.",
      "Semana 6 — Potestades: proteger contra o inimigo.",
      "Dias finais (Principados) — Guardar a Igreja e as nações.",
      "Véspera (Arcanjos) — Anunciar a Palavra com coragem.",
      "29/09 (Anjos) — Custodiar cada passo até o Céu.",
    ],
    closing:
      "São Miguel, São Gabriel, São Rafael e Santos Anjos, rogai por nós. Amém.",
  },
];

export const novenaDevotions: NovenaDevotion[] = [
  "Mariana",
  "Cristológica",
  "Anjos",
  "Família",
  "Causas Impossíveis",
  "Espírito Santo",
  "Infância",
];
