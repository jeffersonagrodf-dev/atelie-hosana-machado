import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { novenas, novenaDevotions, type NovenaDevotion } from "@/data/novenas";
import { ArrowRight, Calendar, Filter, Heart } from "lucide-react";
import { waLink } from "@/config/site";

export const Route = createFileRoute("/novenas")({
  head: () => ({
    meta: [
      { title: "Novenas — Ateliê Hosana Machado" },
      {
        name: "description",
        content:
          "Nove dias de oração pelas causas mais amadas do povo católico: Aparecida, Sagrado Coração, Santa Rita, São Judas, São José, Menino Jesus de Praga e mais. Filtre por devoção.",
      },
      { property: "og:title", content: "Novenas — Ateliê Hosana Machado" },
      {
        property: "og:description",
        content: "Novenas tradicionais, quando rezar e como confiar a intenção.",
      },
    ],
  }),
  component: NovenasPage,
});

function NovenasPage() {
  const [filter, setFilter] = useState<NovenaDevotion | "Todas">("Todas");

  const filtered = useMemo(
    () => (filter === "Todas" ? novenas : novenas.filter((n) => n.devotion === filter)),
    [filter],
  );

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <header className="mx-auto max-w-2xl text-center">
        <div className="text-xs uppercase tracking-[0.24em] text-[color:var(--gold)]">Novenas</div>
        <h1 className="mt-3 font-serif text-4xl text-[color:var(--ink)] md:text-5xl">
          Nove dias para confiar
        </h1>
        <p className="mt-4 text-[color:var(--muted-ink)]">
          A novena é uma escola de perseverança. Rezada com fé em família, alcança graças
          e educa o coração à confiança.
        </p>
      </header>

      {/* Filtro por devoção */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
        <span className="mr-1 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-[color:var(--muted-ink)]">
          <Filter size={12} /> Devoção
        </span>
        {(["Todas", ...novenaDevotions] as const).map((d) => {
          const active = filter === d;
          return (
            <button
              key={d}
              type="button"
              onClick={() => setFilter(d)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                active
                  ? "border-[color:var(--gold)] bg-[color:var(--ink)] text-white"
                  : "border-[color:var(--gold)]/30 bg-white/70 text-[color:var(--ink)] hover:border-[color:var(--gold)]"
              }`}
            >
              {d}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((n) => (
          <Link
            to="/novenas/$slug"
            params={{ slug: n.slug }}
            key={n.slug}
            className="hover-lift group flex h-full flex-col rounded-3xl border border-[color:var(--gold)]/20 bg-white/80 p-6 backdrop-blur"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-[color:var(--gold)]">
                {n.color}
              </span>
              <span className="rounded-full border border-[color:var(--gold)]/25 px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-[color:var(--ink)]">
                {n.devotion}
              </span>
            </div>
            <h3 className="mt-2 font-serif text-2xl text-[color:var(--ink)]">{n.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[color:var(--muted-ink)]">
              {n.summary}
            </p>
            <div className="mt-4 flex flex-col gap-1 text-xs text-[color:var(--sepia)]">
              <span className="flex items-center gap-1">
                <Calendar size={12} /> {n.when}
              </span>
              <span className="flex items-center gap-1">
                <Heart size={12} /> {n.intention}
              </span>
            </div>
            <div className="mt-4 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-[color:var(--gold)]">
              Ver detalhes <ArrowRight size={12} className="transition group-hover:translate-x-0.5" />
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-14 rounded-[2rem] border border-[color:var(--gold)]/20 bg-white/70 p-8 text-center backdrop-blur">
        <h3 className="font-serif text-2xl text-[color:var(--ink)]">
          Quer que rezemos por você?
        </h3>
        <p className="mt-2 text-sm text-[color:var(--muted-ink)]">
          Envie sua intenção e ela entrará nas orações do Ateliê. Também pode acender uma vela
          virtual pela sua causa.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link
            to="/oracoes"
            className="rounded-full bg-[color:var(--ink)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[color:var(--gold)]"
          >
            Acender vela virtual
          </Link>
          <a
            href={waLink("Olá, Hosana! Gostaria de pedir oração por uma intenção.")}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[color:var(--gold)]/40 bg-white px-5 py-2.5 text-sm font-medium text-[color:var(--ink)] hover:border-[color:var(--gold)]"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
