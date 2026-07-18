// Cálculo do calendário litúrgico (Ano A/B/C simplificado — foco em tempo/cor).

export type LiturgicalSeason =
  | "Advento"
  | "Natal"
  | "Tempo Comum"
  | "Quaresma"
  | "Tríduo Pascal"
  | "Páscoa";

export type LiturgicalColor = "verde" | "roxo" | "branco-dourado" | "vermelho" | "rosa";

// Algoritmo de Meeus/Jones/Butcher para a Páscoa (Ocidental).
export function easterSunday(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

const day = 24 * 60 * 60 * 1000;

export function addDays(d: Date, n: number): Date {
  const r = new Date(d);
  r.setDate(r.getDate() + n);
  return r;
}

export function startOfDay(d: Date): Date {
  const r = new Date(d);
  r.setHours(0, 0, 0, 0);
  return r;
}

// Primeiro domingo do Advento: domingo mais próximo de 30/nov (4 domingos antes do Natal).
export function firstSundayOfAdvent(year: number): Date {
  const christmas = new Date(year, 11, 25);
  const dow = christmas.getDay(); // 0 = domingo
  const fourthSundayBefore = addDays(christmas, -(dow === 0 ? 7 : dow) - 21);
  return startOfDay(fourthSundayBefore);
}

export interface LiturgicalInfo {
  season: LiturgicalSeason;
  color: LiturgicalColor;
  label: string;
  easter: Date;
  ashWednesday: Date;
  pentecost: Date;
  adventStart: Date;
}

export function liturgicalInfo(today: Date = new Date()): LiturgicalInfo {
  const t = startOfDay(today);
  const year = t.getFullYear();
  const easter = startOfDay(easterSunday(year));
  const ashWednesday = addDays(easter, -46);
  const holyThursday = addDays(easter, -3);
  const pentecost = addDays(easter, 49);
  const adventStart = firstSundayOfAdvent(year);
  const christmas = startOfDay(new Date(year, 11, 25));
  const baptismOfLord = (() => {
    // Domingo após 6/jan
    const epiphany = new Date(year, 0, 6);
    const dow = epiphany.getDay();
    return addDays(epiphany, dow === 0 ? 7 : 7 - dow);
  })();
  const prevYearAdvent = firstSundayOfAdvent(year - 1);
  const prevYearChristmas = startOfDay(new Date(year - 1, 11, 25));

  // Natal (do dia 25 até Batismo do Senhor)
  if (
    (t >= christmas && t <= new Date(year, 11, 31)) ||
    (t >= new Date(year, 0, 1) && t <= baptismOfLord)
  ) {
    return info("Natal", "branco-dourado", "Tempo do Natal", easter, ashWednesday, pentecost, adventStart);
  }
  // Advento (deste ano — no fim do ano)
  if (t >= adventStart && t < christmas) {
    return info("Advento", "roxo", "Tempo do Advento", easter, ashWednesday, pentecost, adventStart);
  }
  // Advento do ano anterior (janeiro nunca cai, mas segurança)
  if (t >= prevYearAdvent && t < prevYearChristmas) {
    return info("Advento", "roxo", "Tempo do Advento", easter, ashWednesday, pentecost, adventStart);
  }
  // Quaresma
  if (t >= ashWednesday && t < holyThursday) {
    return info("Quaresma", "roxo", "Tempo da Quaresma", easter, ashWednesday, pentecost, adventStart);
  }
  // Tríduo
  if (t >= holyThursday && t < easter) {
    return info("Tríduo Pascal", "vermelho", "Tríduo Pascal", easter, ashWednesday, pentecost, adventStart);
  }
  // Páscoa (até Pentecostes inclusive)
  if (t >= easter && t <= pentecost) {
    return info("Páscoa", "branco-dourado", "Tempo Pascal", easter, ashWednesday, pentecost, adventStart);
  }
  return info("Tempo Comum", "verde", "Tempo Comum", easter, ashWednesday, pentecost, adventStart);
}

function info(
  season: LiturgicalSeason,
  color: LiturgicalColor,
  label: string,
  easter: Date,
  ashWednesday: Date,
  pentecost: Date,
  adventStart: Date,
): LiturgicalInfo {
  return { season, color, label, easter, ashWednesday, pentecost, adventStart };
}

export function mysteryOfTheDay(today: Date = new Date()): {
  name: string;
  points: string[];
} {
  const dow = today.getDay(); // 0 dom .. 6 sáb
  // Domingo/Quarta → Gloriosos; Segunda/Sábado → Gozosos;
  // Terça/Sexta → Dolorosos; Quinta → Luminosos.
  if (dow === 0 || dow === 3)
    return {
      name: "Mistérios Gloriosos",
      points: [
        "Ressurreição de Jesus",
        "Ascensão do Senhor",
        "Vinda do Espírito Santo",
        "Assunção de Nossa Senhora",
        "Coroação de Maria",
      ],
    };
  if (dow === 1 || dow === 6)
    return {
      name: "Mistérios Gozosos",
      points: [
        "Anunciação do Anjo a Maria",
        "Visitação a Isabel",
        "Nascimento de Jesus",
        "Apresentação no Templo",
        "Reencontro do Menino Jesus",
      ],
    };
  if (dow === 4)
    return {
      name: "Mistérios Luminosos",
      points: [
        "Batismo no Jordão",
        "Bodas de Caná",
        "Anúncio do Reino",
        "Transfiguração",
        "Instituição da Eucaristia",
      ],
    };
  return {
    name: "Mistérios Dolorosos",
    points: [
      "Agonia no Horto",
      "Flagelação",
      "Coroação de Espinhos",
      "Caminho do Calvário",
      "Crucifixão e Morte",
    ],
  };
}

// Datas da Quaresma de São Miguel: 15 de agosto a 29 de setembro.
export function saoMiguelDates(year: number) {
  return {
    start: new Date(year, 7, 15),
    end: new Date(year, 8, 29),
  };
}
