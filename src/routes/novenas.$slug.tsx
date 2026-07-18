import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { novenas } from "@/data/novenas";
import { santos } from "@/data/santos";
import { ArrowLeft, Calendar, Heart, BookOpen, Sparkles } from "lucide-react";
import { waLink } from "@/config/site";

export const Route = createFileRoute("/novenas/$slug")({
  loader: ({ params }) => {
    const novena = novenas.find((n) => n.slug === params.slug);
    if (!novena) throw notFound();
    return { novena };
  },
  head: ({ loaderData }) => {
    const n = loaderData?.novena;
    if (!n) return { meta: [{ title: "Novena — Ateliê Hosana Machado" }] };
    return {
      meta: [
        { title: `${n.title} — Ateliê Hosana Machado` },
        { name: "description", content: n.summary },
        { property: "og:title", content: n.title },
        { property: "og:description", content: n.summary },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="font-serif text-4xl text-[color:var(--ink)]">Novena não encontrada</h1>
      <Link
        to="/novenas"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-5 py-2.5 text-sm font-medium text-white"
      >
        <ArrowLeft size={14} /> Ver todas as novenas
      </Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="font-serif text-3xl text-[color:var(--ink)]">Algo deu errado</h1>
      <p className="mt-2 text-sm text-[color:var(--muted-ink)]">{error.message}</p>
      <button
        onClick={reset}
        className="mt-6 rounded-full bg-[color:var(--ink)] px-5 py-2.5 text-sm font-medium text-white"
      >
        Tentar novamente
      </button>
    </div>
  ),
  component: NovenaDetail,
});

function NovenaDetail() {
  const { novena } = Route.useLoaderData();
  const relatedSanto = santos.find((s) => s.novenaSlug === novena.slug);

  return (
    <article className="mx-auto max-w-4xl px-6 py-12">
      <Link
        to="/novenas"
        className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[color:var(--gold)] hover:underline"
      >
        <ArrowLeft size={12} /> Todas as novenas
      </Link>

      <header
        className="mt-6 overflow-hidden rounded-[2rem] border border-[color:var(--gold)]/25 p-8 md:p-12"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in oklab, var(--gold) 12%, white), var(--ivory))",
        }}
      >
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full border border-[color:var(--gold)]/40 bg-white/70 px-3 py-1 uppercase tracking-widest text-[color:var(--ink)]">
            {novena.devotion}
          </span>
          <span className="rounded-full bg-[color:var(--cream)] px-3 py-1 uppercase tracking-widest text-[color:var(--sepia)]">
            Cor {novena.color}
          </span>
        </div>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-[color:var(--ink)] md:text-5xl">
          {novena.title}
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-[color:var(--muted-ink)]">
          {novena.summary}
        </p>
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[color:var(--ink)]">
          <span className="flex items-center gap-2">
            <Calendar size={14} className="text-[color:var(--gold)]" /> {novena.when}
          </span>
          <span className="flex items-center gap-2">
            <Heart size={14} className="text-[color:var(--gold)]" /> {novena.intention}
          </span>
        </div>
      </header>

      {/* História */}
      <section className="mt-10">
        <h2 className="flex items-center gap-2 font-serif text-xl text-[color:var(--ink)]">
          <BookOpen size={16} className="text-[color:var(--gold)]" /> Origem e tradição
        </h2>
        <p className="mt-3 leading-relaxed text-[color:var(--muted-ink)]">{novena.history}</p>
      </section>

      {/* Como rezar */}
      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-[color:var(--gold)]/20 bg-white/70 p-5">
          <div className="text-xs uppercase tracking-widest text-[color:var(--gold)]">Oração inicial</div>
          <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink)]">{novena.opening}</p>
        </div>
        <div className="rounded-2xl border border-[color:var(--gold)]/20 bg-white/70 p-5">
          <div className="text-xs uppercase tracking-widest text-[color:var(--gold)]">Prática diária</div>
          <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink)]">{novena.daily}</p>
        </div>
      </section>

      {/* 9 dias */}
      <section className="mt-10">
        <h2 className="font-serif text-2xl text-[color:var(--ink)]">Os nove dias</h2>
        <ol className="mt-4 space-y-3">
          {novena.days.map((d: string, i: number) => (
            <li
              key={i}
              className="flex items-start gap-4 rounded-2xl border border-[color:var(--gold)]/20 bg-white/80 p-4"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[color:var(--cream)] font-serif text-lg text-[color:var(--gold)]">
                {i + 1}
              </span>
              <p className="text-sm leading-relaxed text-[color:var(--ink)]">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Encerramento */}
      <section className="mt-10 rounded-2xl border border-[color:var(--gold)]/20 bg-[color:var(--cream)]/60 p-5">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[color:var(--gold)]">
          <Sparkles size={12} /> Oração final
        </div>
        <p className="mt-2 text-sm italic leading-relaxed text-[color:var(--sepia)]">
          {novena.closing}
        </p>
      </section>

      {/* CTAs */}
      <section className="mt-10 flex flex-wrap gap-3">
        <Link
          to="/oracoes"
          className="rounded-full bg-[color:var(--ink)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[color:var(--gold)]"
        >
          Acender vela por esta intenção
        </Link>
        <a
          href={waLink(`Olá, Hosana! Estou rezando a ${novena.title}. Poderia incluir minha intenção?`)}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[color:var(--gold)]/40 bg-white px-5 py-2.5 text-sm font-medium text-[color:var(--ink)] hover:border-[color:var(--gold)]"
        >
          Enviar intenção no WhatsApp
        </a>
        {relatedSanto ? (
          <Link
            to="/santos/$slug"
            params={{ slug: relatedSanto.slug }}
            className="rounded-full border border-[color:var(--gold)]/40 bg-white px-5 py-2.5 text-sm font-medium text-[color:var(--ink)] hover:border-[color:var(--gold)]"
          >
            Conhecer {relatedSanto.name}
          </Link>
        ) : null}
      </section>
    </article>
  );
}
