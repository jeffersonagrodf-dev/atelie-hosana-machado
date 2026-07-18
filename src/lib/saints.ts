// Mapa simplificado de santos por dia (MM-DD). Fallback: memória litúrgica do dia.
const map: Record<string, string> = {
  "01-01": "Solenidade de Santa Maria, Mãe de Deus",
  "01-06": "Epifania do Senhor",
  "01-31": "São João Bosco",
  "02-02": "Apresentação do Senhor",
  "02-11": "Nossa Senhora de Lourdes",
  "03-19": "São José",
  "03-25": "Anunciação do Senhor",
  "04-25": "São Marcos, Evangelista",
  "05-13": "Nossa Senhora de Fátima",
  "05-31": "Visitação de Nossa Senhora",
  "06-13": "Santo Antônio de Pádua",
  "06-24": "Natividade de São João Batista",
  "06-29": "São Pedro e São Paulo",
  "07-16": "Nossa Senhora do Carmo",
  "07-22": "Santa Maria Madalena",
  "07-26": "São Joaquim e Santa Ana",
  "08-15": "Assunção de Nossa Senhora",
  "08-28": "Santo Agostinho",
  "09-08": "Natividade de Nossa Senhora",
  "09-29": "Santos Arcanjos Miguel, Gabriel e Rafael",
  "09-30": "São Jerônimo",
  "10-01": "Santa Teresinha do Menino Jesus",
  "10-02": "Santos Anjos da Guarda",
  "10-04": "São Francisco de Assis",
  "10-07": "Nossa Senhora do Rosário",
  "10-12": "Nossa Senhora Aparecida",
  "10-15": "Santa Teresa d’Ávila",
  "11-01": "Todos os Santos",
  "11-02": "Finados",
  "11-21": "Apresentação de Nossa Senhora",
  "11-30": "Santo André",
  "12-08": "Imaculada Conceição",
  "12-12": "Nossa Senhora de Guadalupe",
  "12-25": "Natal do Senhor",
};

export function saintOfDay(d: Date = new Date()): string {
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return map[`${mm}-${dd}`] ?? "Memória litúrgica do dia";
}
