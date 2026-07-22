import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, MessageCircle, Sparkles, ImageIcon } from "lucide-react";
import { waLink } from "@/config/site";
import produtosData from "@/data/produtos.json";

export const Route = createFileRoute("/catalogo")({
  head: () => ({
    meta: [
      {
        title:
          "Catálogo — Kit São Miguel, Sagrada Família e Nossa Senhora Grávida | Ateliê Hosana Machado",
      },
      {
        name: "description",
        content:
          "Especial Quaresma de São Miguel: Kit São Miguel, Sagrada Família 28 cm, Nossa Senhora Grávida e presentes católicos artesanais. Encomendas pelo WhatsApp.",
      },
      {
        property: "og:title",
        content:
          "Catálogo — Kit São Miguel e Imagens Sacras | Ateliê Hosana Machado",
      },
      {
        property: "og:description",
        content:
          "Kit São Miguel para a Quaresma, Sagrada Família e Nossa Senhora Grávida — arte sacra feita à mão.",
      },
      { property: "og:url", content: "/catalogo" },
    ],
    links: [{ rel: "canonical", href: "/catalogo" }],
  }),
  component: Catalog,
});

type Produto = {
  id: string;
  titulo: string;
  descricao: string;
  preco: string;
  precoAnterior: string;
  categoria: string;
  imagens: string[];
  codigo: string;
  destaque?: boolean;
  selo?: string;
  cta?: string;
  whatsappMessage?: string;
};

const produtos = produtosData as Produto[];
const kitSaoMiguel = produtos.find((p) => p.id === "kit-sao-miguel-quaresma");

const categorias = ["Todos", ...Array.from(new Set(produtos.map((p) => p.categoria)))];

function ProductImage({ produto }: { produto: Produto }) {
  const primary = produto.imagens[0];
  const alternate = produto.imagens[1];
  const preserveFullProduct = [
    "kit-sao-miguel-quaresma",
    "sagrada-familia-28cm",
    "nossa-senhora-gravida-branco-azul",
    "nossa-senhora-gravida-azul-rosa",
    "terco-pulseira-cristal-varias-cores",
    "terco-noiva-personalizado-perolas-zirconias",
  ].includes(produto.id);

  if (!primary) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[color:var(--cream)] to-white text-[color:var(--muted-ink)]">
        <div className="grid h-14 w-14 place-items-center rounded-full border border-[color:var(--gold)]/40 bg-white/60 text-[color:var(--gold)]">
          <ImageIcon size={22} />
        </div>
        <div className="px-4 text-center text-xs uppercase tracking-[0.2em] text-[color:var(--sepia)]">
          Foto do produto em preparação
        </div>
      </div>
    );
  }

  const imageClass = preserveFullProduct ? "object-contain p-3" : "object-cover";

  return (
    <div className="relative h-full w-full">
      <img
        src={primary}
        alt={produto.titulo}
        loading="lazy"
        decoding="async"
        className={`h-full w-full ${imageClass} transition duration-500 group-hover:scale-[1.02] ${
          alternate ? "group-hover:opacity-0 group-focus-within:opacity-0" : ""
        }`}
      />
      {alternate ? (
        <img
          src={alternate}
          alt={`${produto.titulo} — vista lateral`}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 h-full w-full ${imageClass} opacity-0 transition duration-500 group-hover:opacity-100 group-focus-within:opacity-100`}
        />
      ) : null}
    </div>
  );
}

function Catalog() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("Todos");

  const filtered = useMemo(() => {
    return produtos.filter((p) => {
      const matchCat = cat === "Todos" || p.categoria === cat;
      const matchQ =
        q.trim().length === 0 ||
        p.titulo.toLowerCase().includes(q.toLowerCase()) ||
        p.descricao.toLowerCase().includes(q.toLowerCase());
      return matchCat && matchQ;
    });
  }, [q, cat]);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <header className="mx-auto max-w-2xl text-center">
        <div className="text-xs uppercase tracking-[0.24em] text-[color:var(--gold)]">
          Catálogo
        </div>
        <h1 className="mt-3 font-serif text-4xl text-[color:var(--ink)] md:text-5xl">
          Obras que rezam com você
        </h1>
        <p className="mt-4 text-[color:var(--muted-ink)]">
          Terços, dezenas e presentes católicos feitos à mão. As encomendas são combinadas
          diretamente pelo WhatsApp — com carinho, um a um.
        </p>
      </header>

      {kitSaoMiguel ? <KitSaoMiguelHighlight kit={kitSaoMiguel} /> : null}

      <div className="mx-auto mt-10 flex max-w-xl items-center gap-2 rounded-full border border-[color:var(--gold)]/30 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
        <Search size={16} className="text-[color:var(--muted-ink)]" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar por peça ou devoção…"
          className="w-full bg-transparent py-1 text-sm text-[color:var(--ink)] outline-none placeholder:text-[color:var(--muted-ink)]"
        />
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {categorias.map((c) => {
          const active = c === cat;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={`rounded-full border px-4 py-1.5 text-sm transition ${
                active
                  ? "border-[color:var(--gold)] bg-[color:var(--gold)] text-white"
                  : "border-[color:var(--gold)]/30 bg-white/70 text-[color:var(--ink)] hover:border-[color:var(--gold)]"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((p) => {
          const highlight = p.destaque === true;
          const ctaLabel = p.cta ?? "Encomendar";
          return (
            <article
              key={p.id}
              className={`hover-lift group flex flex-col overflow-hidden rounded-3xl bg-white ${
                highlight
                  ? "border-2 border-[color:var(--gold)] shadow-[0_20px_50px_-25px_rgba(212,175,80,0.6)]"
                  : "border border-[color:var(--gold)]/20"
              }`}
            >
              <a
                href={p.whatsappMessage ? waLink(p.whatsappMessage) : waLink(undefined, p.titulo)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Encomendar ${p.titulo} pelo WhatsApp`}
                className="relative block aspect-square overflow-hidden bg-[color:var(--cream)]"
              >
                {p.selo ? (
                  <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-[color:var(--ink)] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white">
                    <Sparkles size={10} /> {p.selo}
                  </span>
                ) : null}
                <ProductImage produto={p} />
              </a>
              <div className="flex flex-1 flex-col p-5">
                <div className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--gold)]">
                  {p.categoria}
                </div>
                <h3 className="mt-1 font-serif text-xl text-[color:var(--ink)]">{p.titulo}</h3>
                {p.descricao ? (
                  <p className="mt-2 flex-1 whitespace-pre-line text-sm text-[color:var(--muted-ink)]">
                    {p.descricao}
                  </p>
                ) : (
                  <div className="flex-1" />
                )}
                <div className="mt-4 flex items-end justify-between gap-3">
                  <div>
                    {p.precoAnterior ? (
                      <div className="text-xs text-[color:var(--muted-ink)] line-through">
                        {p.precoAnterior}
                      </div>
                    ) : null}
                    <div
                      className={`font-serif ${
                        highlight ? "text-3xl" : "text-2xl"
                      } text-[color:var(--sepia)]`}
                    >
                      {p.preco}
                    </div>
                  </div>
                  <a
                    href={p.whatsappMessage ? waLink(p.whatsappMessage) : waLink(undefined, p.titulo)}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium text-white transition ${
                      highlight
                        ? "bg-[color:var(--gold)] hover:bg-[color:var(--ink)]"
                        : "bg-[color:var(--ink)] hover:bg-[color:var(--gold)]"
                    }`}
                  >
                    <MessageCircle size={14} />
                    {ctaLabel}
                  </a>
                </div>
              </div>
            </article>
          );
        })}
        {filtered.length === 0 ? (
          <div className="col-span-full rounded-3xl border border-dashed border-[color:var(--gold)]/40 p-10 text-center text-[color:var(--muted-ink)]">
            Nenhuma peça encontrada. Fale conosco — muitas obras são feitas sob medida.
          </div>
        ) : null}
      </div>
    </section>
  );
}

function KitSaoMiguelHighlight({ kit }: { kit: Produto }) {
  return (
    <div
      className="relative mt-10 overflow-hidden rounded-[2rem] border border-[color:var(--gold)]/40 p-6 shadow-[0_30px_80px_-40px_rgba(120,80,20,0.45)] md:p-10"
      style={{
        background:
          "linear-gradient(135deg, color-mix(in oklab, var(--gold) 18%, white), var(--cream) 60%, white)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--gold), transparent 65%)" }}
      />
      <div className="relative grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-center">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--ink)] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-white">
            <Sparkles size={12} /> Especial Quaresma
          </span>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-[color:var(--ink)] md:text-4xl">
            {kit.titulo}
          </h2>
          <p className="mt-4 text-[color:var(--muted-ink)] md:text-lg">
            Fortaleça sua caminhada de oração com um conjunto artesanal preparado para
            acompanhar este tempo especial de fé, proteção e confiança em Deus.
          </p>
          <ul className="mt-5 grid gap-2 text-sm text-[color:var(--ink)]">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
              Placa de madeira 10 cm com detalhe em metal
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
              Terço artesanal em linha resistente tingida com café
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
              Contas de resina 8 mm; passante em cruz, crucifixo e entremeio com banho dourado e verniz
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--muted-ink)]">
                Investimento
              </div>
              <div className="font-serif text-4xl text-[color:var(--sepia)]">{kit.preco}</div>
            </div>
            <a
              href={waLink(undefined, "Kit 1 São Miguel — Especial Quaresma")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[color:var(--ink)]"
            >
              <MessageCircle size={16} />
              Quero meu Kit São Miguel
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square overflow-hidden rounded-[1.75rem] border border-[color:var(--gold)]/30 bg-white/60 backdrop-blur">
            <ProductImage produto={kit} />
          </div>
        </div>
      </div>
    </div>
  );
}
