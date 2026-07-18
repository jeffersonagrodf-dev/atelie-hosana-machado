import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { santos } from "@/data/santos";
import { novenas } from "@/data/novenas";
import { SaintImage } from "@/components/SaintImage";
import { ArrowLeft, Calendar, Heart, Sparkles, BookOpen } from "lucide-react";

export const Route = createFileRoute("/santos/$slug")({
  loader: ({ params }) => {
    const santo = santos.find((s) => s.slug === params.slug);
    if (!santo) throw notFound();
    return { santo };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.santo;
    if (!s) return { meta: [{ title: "Santo — Ateliê Hosana Machado" }] };
    return {
      meta: [
        { title: `${s.name} — Ateliê Hosana Machado` },
        { name: "description", content: s.bio.slice(0, 155) },
        { property: "og:title", content: `${s.name} — ${s.title}` },
        { property: "og:description", content: s.bio.slice(0, 155) },
        { property: "og:image", content: s.imageLarge },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: s.imageLarge },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="font-serif text-4xl text-[color:var(--ink)]">Santo não encontrado</h1>
      <p className="mt-3 text-[color:var(--muted-ink)]">
        A devoção que você procura não está registrada aqui.
      </p>
      <Link
        to="/santos"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-5 py-2.5 text-sm font-medium text-white"
      >
        <ArrowLeft size={14} /> Ver todos os santos
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
  component: SantoDetail,
});

function SantoDetail() {
  const { santo } = Route.useLoaderData();
  const relatedNovena = santo.novenaSlug
    ? novenas.find((n) => n.slug === santo.novenaSlug)
    : undefined;

  const related = santos.filter(
    (s) => s.devotion === santo.devotion && s.slug !== santo.slug,
  ).slice(0, 3);

  return (
    <article className="mx-auto max-w-6xl px-6 py-12">
      <Link
        to="/santos"
        className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[color:var(--gold)] hover:underline"
      >
        <ArrowLeft size={12} /> Santos & devoções
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
        {/* Imagem grande */}
        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2.5rem] opacity-60 blur-2xl"
            style={{
              background:
                "radial-gradient(circle at 40% 30%, var(--gold), transparent 60%)",
            }}
          />
          <div className="overflow-hidden rounded-[2rem] border border-[color:var(--gold)]/20 bg-[color:var(--cream)] shadow-xl">
            <SaintImage
              src={santo.imageLarge}
              alt={santo.name}
              priority
              sizes="(min-width: 1024px) 600px, 100vw"
              widths={[640, 960, 1200, 1600, 1920]}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-[color:var(--muted-ink)]">
            <span className="rounded-full border border-[color:var(--gold)]/30 bg-white/70 px-3 py-1 uppercase tracking-widest">
              {santo.devotion}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={12} /> Festa {santo.feast}
            </span>
          </div>
        </div>

        {/* Texto */}
        <div>
          <div className="text-xs uppercase tracking-[0.24em] text-[color:var(--gold)]">
            {santo.title}
          </div>
          <h1 className="mt-2 font-serif text-4xl leading-tight text-[color:var(--ink)] md:text-5xl">
            {santo.name}
          </h1>

          <p className="mt-6 leading-relaxed text-[color:var(--ink)]">{santo.bio}</p>

          {santo.history ? (
            <>
              <h2 className="mt-8 flex items-center gap-2 font-serif text-xl text-[color:var(--ink)]">
                <BookOpen size={16} className="text-[color:var(--gold)]" /> História
              </h2>
              <p className="mt-3 leading-relaxed text-[color:var(--muted-ink)]">
                {santo.history}
              </p>
            </>
          ) : null}

          {santo.prayer ? (
            <blockquote className="mt-8 rounded-2xl border border-[color:var(--gold)]/20 bg-[color:var(--cream)]/60 p-5 text-sm italic leading-relaxed text-[color:var(--sepia)]">
              <Sparkles className="mb-1 inline" size={14} /> {santo.prayer}
            </blockquote>
          ) : null}

          {santo.patronage ? (
            <div className="mt-6 flex items-start gap-2 text-sm text-[color:var(--ink)]">
              <Heart size={14} className="mt-0.5 text-[color:var(--gold)]" />
              <span>
                <strong>Padroeiro de:</strong> {santo.patronage}
              </span>
            </div>
          ) : null}

          {relatedNovena ? (
            <Link
              to="/novenas/$slug"
              params={{ slug: relatedNovena.slug }}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[color:var(--gold)]"
            >
              Rezar a {relatedNovena.title}
            </Link>
          ) : null}
        </div>
      </div>

      {related.length > 0 ? (
        <div className="mt-16">
          <div className="text-xs uppercase tracking-[0.24em] text-[color:var(--gold)]">
            Mais devoção {santo.devotion}
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/santos/$slug"
                params={{ slug: r.slug }}
                className="hover-lift group overflow-hidden rounded-2xl border border-[color:var(--gold)]/20 bg-white/80"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[color:var(--cream)]">
                  <SaintImage
                    src={r.image}
                    alt={r.name}
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="font-serif text-lg text-[color:var(--ink)]">{r.name}</div>
                  <div className="text-xs text-[color:var(--muted-ink)]">Festa {r.feast}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
}
