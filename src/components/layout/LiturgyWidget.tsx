import { Link } from "@tanstack/react-router";
import { BookOpen, Bell, Sparkles, Church } from "lucide-react";
import { liturgicalInfo, mysteryOfTheDay } from "@/lib/liturgy";
import { saintOfDay } from "@/lib/saints";
import { formatDatePt } from "@/lib/format";

const colorDot: Record<string, string> = {
  verde: "bg-emerald-600",
  roxo: "bg-purple-700",
  "branco-dourado": "bg-gradient-to-br from-white to-[color:var(--gold)] border border-[color:var(--gold)]",
  vermelho: "bg-red-700",
  rosa: "bg-pink-400",
};

const colorLabel: Record<string, string> = {
  verde: "Verde — Tempo Comum",
  roxo: "Roxo — Advento / Quaresma",
  "branco-dourado": "Branco e ouro — Solenidade",
  vermelho: "Vermelho — Paixão / Espírito",
  rosa: "Rosa — Alegria (Gaudete / Laetare)",
};

export function LiturgyWidget() {
  const today = new Date();
  const info = liturgicalInfo(today);
  const mystery = mysteryOfTheDay(today);
  const saint = saintOfDay(today);

  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <div
        className="overflow-hidden rounded-[2rem] border border-[color:var(--gold)]/25 shadow-xl backdrop-blur"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in oklab, var(--gold) 10%, white), var(--ivory) 60%, var(--cream))",
        }}
      >
        <div className="grid gap-0 md:grid-cols-[1.15fr_1fr]">
          {/* Cabeçalho litúrgico */}
          <div className="border-b border-[color:var(--gold)]/20 p-8 md:border-b-0 md:border-r md:p-10">
            <div className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--gold)]">
              Widget litúrgico do dia
            </div>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-[color:var(--ink)] md:text-4xl">
              Hoje a Igreja celebra
            </h2>
            <p className="mt-2 capitalize text-sm text-[color:var(--muted-ink)]">
              {formatDatePt(today)}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl border border-[color:var(--gold)]/20 bg-white/70 p-4">
              <span
                aria-hidden
                className={`inline-block h-4 w-4 rounded-full ${colorDot[info.color]}`}
              />
              <div>
                <div className="font-serif text-lg text-[color:var(--ink)]">{info.label}</div>
                <div className="text-xs text-[color:var(--muted-ink)]">
                  {colorLabel[info.color]}
                </div>
              </div>
            </div>

            <ul className="mt-5 space-y-3 text-sm text-[color:var(--ink)]">
              <li className="flex items-start gap-3">
                <Church size={16} className="mt-0.5 text-[color:var(--gold)]" />
                <span>
                  <strong>Santo do dia:</strong> {saint}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles size={16} className="mt-0.5 text-[color:var(--gold)]" />
                <span>
                  <strong>Terço de hoje:</strong> {mystery.name}
                </span>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              <Link
                to="/liturgia"
                className="rounded-full bg-[color:var(--ink)] px-4 py-2 text-xs font-medium uppercase tracking-widest text-white transition hover:bg-[color:var(--gold)]"
              >
                Página da liturgia
              </Link>
              <a
                href="https://www.cnbb.org.br/liturgia-diaria/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-[color:var(--gold)]/40 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-widest text-[color:var(--ink)] hover:border-[color:var(--gold)]"
              >
                <BookOpen size={12} /> Leituras CNBB
              </a>
              <a
                href="https://www.ibreviary.com/m2/breviario.php?lang=pt"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-[color:var(--gold)]/40 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-widest text-[color:var(--ink)] hover:border-[color:var(--gold)]"
              >
                <Bell size={12} /> Liturgia das Horas
              </a>
            </div>
          </div>

          {/* Mistérios do dia */}
          <div className="p-8 md:p-10">
            <div className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--gold)]">
              Santo Terço — {mystery.name}
            </div>
            <ol className="mt-4 space-y-3">
              {mystery.points.map((p, i) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-xl border border-[color:var(--gold)]/15 bg-white/60 px-4 py-3"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[color:var(--gold)]/15 text-xs font-medium text-[color:var(--gold)]">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-[color:var(--ink)]">{p}</span>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-xs italic text-[color:var(--sepia)]">
              "Com o Rosário nas mãos, a paz entra em casa." — S. João Paulo II
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
