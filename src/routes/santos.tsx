import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { santos, devotions, type Devotion } from "@/data/santos";
import { SaintImage } from "@/components/SaintImage";
import { ArrowRight, Filter } from "lucide-react";

export const Route = createFileRoute("/santos")({
  head: () => ({
    meta: [
      { title: "Santos e Devoções — Ateliê Hosana Machado" },
      {
        name: "description",
        content:
          "Vidas de santos populares, imagens sacras reais, orações e patronatos para a devoção em família. Filtre por devoção.",
      },
      { property: "og:title", content: "Santos e Devoções — Ateliê Hosana Machado" },
      {
        property: "og:description",
        content: "Histórias dos santos mais amados, com imagens reais e orações.",
      },
    ],
  }),
  component: SantosPage,
});

function SantosPage() {
  const [filter, setFilter] = useState<Devotion | "Todas">("Todas");

  const filtered = useMemo(
    () => (filter === "Todas" ? santos : santos.filter((s) => s.devotion === filter)),
    [filter],
  );

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <header className="mx-auto max-w-2xl text-center">
        <div className="text-xs uppercase tracking-[0.24em] text-[color:var(--gold)]">
          Santos & devoções
        </div>
        <h1 className="mt-3 font-serif text-4xl text-[color:var(--ink)] md:text-5xl">
          Amigos do Céu, companheiros do caminho
        </h1>
        <p className="mt-4 text-[color:var(--muted-ink)]">
          Conheça a vida, a graça e a intercessão dos santos mais amados pelo povo católico.
        </p>
      </header>

      {/* Filtro por devoção */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
        <span className="mr-1 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-[color:var(--muted-ink)]">
          <Filter size={12} /> Devoção
        </span>
        {(["Todas", ...devotions] as const).map((d) => {
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

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-sm text-[color:var(--muted-ink)]">
          Nenhum santo encontrado nesta devoção.
        </p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => (
            <Link
              key={s.slug}
              to="/santos/$slug"
              params={{ slug: s.slug }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-[color:var(--gold)]/20 bg-white/80 shadow-sm backdrop-blur transition hover:shadow-lg"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[color:var(--cream)]">
                <SaintImage
                  src={s.image}
                  alt={s.name}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 55%, rgba(30,20,10,0.55))",
                  }}
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/85 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-[color:var(--ink)]">
                  {s.devotion}
                </span>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-[11px] uppercase tracking-widest opacity-90">
                    Festa {s.feast}
                  </div>
                  <div className="font-serif text-2xl leading-tight">{s.name}</div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="text-xs uppercase tracking-widest text-[color:var(--gold)]">
                  {s.title}
                </div>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[color:var(--ink)]">
                  {s.bio}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-[color:var(--gold)]">
                  Ver detalhes <ArrowRight size={12} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
