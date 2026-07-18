import { createFileRoute, Link } from "@tanstack/react-router";
import { LiturgyWidget } from "@/components/layout/LiturgyWidget";
import { site, waLink } from "@/config/site";
import { ArrowRight, Heart, Sparkles, Sun } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(1000px 500px at 50% -10%, color-mix(in oklab, var(--gold) 30%, transparent), transparent 60%), linear-gradient(180deg, var(--ivory), var(--cream))",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--gold), transparent 60%)" }}
        />
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-24 text-center md:pt-24 md:pb-32">
          <img
            src={site.logoUrl}
            alt={`Logotipo ${site.name}`}
            className="logo-hero mx-auto mb-8 h-24 w-24 rounded-full object-cover ring-2 ring-[color:var(--gold)]/40 shadow-[0_10px_40px_-10px_rgba(212,175,80,0.55)] md:h-32 md:w-32"
          />
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/30 bg-white/70 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-[color:var(--sepia)] backdrop-blur">
            <Sparkles size={14} /> Artes Sacras feitas à mão
          </div>
          <h1 className="font-serif text-4xl leading-tight text-[color:var(--ink)] md:text-6xl lg:text-7xl">
            A beleza do Céu que nasce
            <br className="hidden md:block" />
            <span className="italic text-[color:var(--gold)]"> da fé em família</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--muted-ink)] md:text-lg">
            Cada peça do Ateliê Hosana Machado carrega oração, silêncio e devoção — para transformar
            o lar em um pequeno santuário de Salvação, Redenção e Esperança.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/catalogo"
              className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[color:var(--gold)]"
            >
              Ver catálogo
              <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </Link>
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 bg-white/70 px-6 py-3 text-sm font-medium text-[color:var(--ink)] backdrop-blur transition hover:border-[color:var(--gold)]"
            >
              Falar com Hosana
            </a>
          </div>
        </div>
      </section>

      <QuaresmaSaoMiguelBanner />

      <LiturgyWidget />


      {/* Manifesto */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <div className="text-xs uppercase tracking-[0.24em] text-[color:var(--gold)]">Manifesto</div>
        <h2 className="mt-4 font-serif text-3xl leading-tight text-[color:var(--ink)] md:text-4xl">
          Nossa vocação é traduzir o invisível em beleza tangível.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-[color:var(--muted-ink)] md:text-lg">
          Acreditamos que a arte sacra não decora apenas paredes — ela educa o olhar, sustenta a
          oração e recorda, dia após dia, a promessa da Salvação em Cristo. Trabalhamos com
          calma, com as mãos e com o coração, para que cada obra seja fruto de contemplação e não
          apenas de produção.
        </p>
      </section>

      {/* Barra dinâmica adicional (visualmente rica) */}
      <FaithTriad />

      {/* Ateliê */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2 md:items-center">
        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2.5rem] opacity-60 blur-2xl"
            style={{ background: "radial-gradient(circle at 30% 30%, var(--gold), transparent 60%)" }}
          />
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-[color:var(--gold)]/20 bg-gradient-to-br from-[color:var(--cream)] to-white shadow-xl">
            <PlaceholderArt label="Ateliê" />
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.24em] text-[color:var(--gold)]">O Ateliê</div>
          <h3 className="mt-3 font-serif text-3xl text-[color:var(--ink)] md:text-4xl">
            Feito à mão, com oração e tempo.
          </h3>
          <p className="mt-5 leading-relaxed text-[color:var(--muted-ink)]">
            Cada imagem, terço ou peça de decoração devocional é criada com atenção artesanal e
            fidelidade à tradição da Igreja. Preservamos a beleza clássica e conversamos com o gosto
            contemporâneo, para que a fé volte a habitar os detalhes do dia a dia.
          </p>
          <p className="mt-4 leading-relaxed text-[color:var(--muted-ink)]">
            O Ateliê nasceu de uma promessa simples: fazer da casa um sacrário, e da arte um caminho
            de evangelização silenciosa.
          </p>
        </div>
      </section>

      {/* Parallax citação */}
      <section
        className="parallax relative flex min-h-[420px] items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(40,25,10,0.55), rgba(40,25,10,0.55)), radial-gradient(circle at 30% 30%, oklch(0.5 0.1 60), oklch(0.25 0.05 60))",
        }}
      >
        <div className="mx-auto max-w-3xl px-6 py-24 text-center text-white">
          <div className="text-xs uppercase tracking-[0.28em] text-[color:var(--gold)]">Josué 24, 15</div>
          <p className="mt-6 font-serif text-3xl leading-snug md:text-5xl">
            “Eu e minha casa
            <br /> serviremos ao Senhor.”
          </p>
        </div>
      </section>

      {/* Cards de navegação */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-10 text-center">
          <div className="text-xs uppercase tracking-[0.24em] text-[color:var(--gold)]">Explore</div>
          <h3 className="mt-3 font-serif text-3xl text-[color:var(--ink)] md:text-4xl">
            Um santuário digital para sua família
          </h3>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { to: "/catalogo", title: "Catálogo", desc: "Peças únicas para o lar cristão." },
            { to: "/liturgia", title: "Liturgia", desc: "Liturgia diária, das horas e devoções." },
            { to: "/oracoes", title: "Orações", desc: "Acenda uma vela virtual pela sua intenção." },
            { to: "/santos", title: "Santos", desc: "Vidas, imagens e orações dos amigos do Céu." },
            { to: "/novenas", title: "Novenas", desc: "Nove dias para confiar sua intenção." },
            { to: "/catequese", title: "Catequese", desc: "Compreender, experimentar e partilhar a fé." },
            { to: "/noticias", title: "Notícias", desc: "Vaticano, CNBB e evangelização." },
            { to: "/liturgia", title: "Quaresma de São Miguel", desc: "40 dias de preparação (15/8 a 29/9)." },
          ].map((c) => (
            <Link
              key={c.title + c.to}
              to={c.to}
              className="hover-lift group rounded-3xl border border-[color:var(--gold)]/20 bg-white/70 p-8 backdrop-blur"
            >
              <div className="mb-4 h-1 w-10 rounded-full bg-[color:var(--gold)]" />
              <h4 className="font-serif text-2xl text-[color:var(--ink)]">{c.title}</h4>
              <p className="mt-2 text-sm text-[color:var(--muted-ink)]">{c.desc}</p>
              <div className="mt-6 inline-flex items-center gap-1 text-sm text-[color:var(--gold)]">
                Descobrir <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div
          className="relative overflow-hidden rounded-[2.5rem] px-8 py-16 text-center md:px-16"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in oklab, var(--gold) 20%, white), var(--cream))",
          }}
        >
          <h3 className="font-serif text-3xl text-[color:var(--ink)] md:text-4xl">
            Deseja encomendar uma peça?
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-[color:var(--muted-ink)]">
            Conte-nos sobre a devoção que deseja honrar. Cada obra é conversada e feita
            especialmente para você e sua família.
          </p>
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[color:var(--gold)]"
          >
            Falar no WhatsApp
          </a>
          <p className="mt-4 text-xs text-[color:var(--muted-ink)]">
            Ou nos siga em{" "}
            <a
              className="story-link text-[color:var(--gold)]"
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
            >
              {site.instagramHandle}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

function FaithTriad() {
  const items = [
    { icon: Sun, title: "Salvação", text: "Cristo é o centro. Toda beleza aponta para Ele." },
    { icon: Heart, title: "Redenção", text: "O silêncio, o gesto e a matéria colaboram na graça." },
    { icon: Sparkles, title: "Esperança", text: "A fé em família é semente de eternidade." },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-6 md:grid-cols-3">
        {items.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="rounded-3xl border border-[color:var(--gold)]/20 bg-white/70 p-8 text-center backdrop-blur"
          >
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[color:var(--cream)] text-[color:var(--gold)]">
              <Icon size={20} />
            </div>
            <h4 className="mt-4 font-serif text-2xl text-[color:var(--ink)]">{title}</h4>
            <p className="mt-2 text-sm text-[color:var(--muted-ink)]">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function QuaresmaSaoMiguelBanner() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-4">
      <div
        className="relative overflow-hidden rounded-[2.5rem] border border-[color:var(--gold)]/40 p-8 shadow-[0_40px_100px_-50px_rgba(120,80,20,0.5)] md:p-14"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in oklab, var(--gold) 22%, white), var(--cream) 55%, white)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full opacity-60 blur-3xl transition-opacity duration-700 hover:opacity-80"
          style={{ background: "radial-gradient(circle, var(--gold), transparent 65%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 bottom-[-6rem] h-96 w-96 rounded-full opacity-40 blur-3xl"
          style={{
            background: "radial-gradient(circle, color-mix(in oklab, var(--sepia) 60%, transparent), transparent 70%)",
          }}
        />
        <div className="relative grid gap-8 md:grid-cols-[1.15fr_1fr] md:items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--ink)] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.24em] text-white">
              <Sparkles size={12} /> Destaque da Temporada
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[color:var(--ink)] md:text-5xl">
              Especial <span className="italic text-[color:var(--gold)]">Quaresma de São Miguel</span>
            </h2>
            <p className="mt-5 max-w-xl text-[color:var(--muted-ink)] md:text-lg">
              Fortaleça sua caminhada de oração com um conjunto artesanal preparado para acompanhar
              este tempo especial de fé, proteção e confiança em Deus.
            </p>
            <div className="mt-6 rounded-2xl border border-[color:var(--gold)]/30 bg-white/70 p-5 backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--gold)]">
                Kit 1 São Miguel
              </div>
              <div className="mt-1 flex items-baseline gap-3">
                <span className="font-serif text-5xl text-[color:var(--sepia)]">R$ 62,90</span>
                <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-ink)]">
                  Edição limitada
                </span>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={waLink(undefined, "Kit 1 São Miguel — Especial Quaresma")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[color:var(--ink)]"
              >
                Quero meu Kit São Miguel
                <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
              </a>
              <Link
                to="/catalogo"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 bg-white/70 px-5 py-2.5 text-sm text-[color:var(--ink)] backdrop-blur transition hover:border-[color:var(--gold)]"
              >
                Ver catálogo completo
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-white to-[color:var(--cream)] blur-lg" />
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-[color:var(--gold)]/30 bg-white/70 backdrop-blur">
              <img
                src="/produtos/kit-sao-miguel.png"
                alt="Kit 1 São Miguel com placa de madeira e terço artesanal"
                className="h-full w-full object-contain p-3"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export function PlaceholderArt({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 400 500" className="h-full w-full" role="img" aria-label={label}>
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f7ecd3" />
          <stop offset="100%" stopColor="#e6c98a" />
        </linearGradient>
        <radialGradient id="halo" cx="50%" cy="30%" r="35%">
          <stop offset="0%" stopColor="#fff5cf" />
          <stop offset="100%" stopColor="#e6c98a00" />
        </radialGradient>
      </defs>
      <rect width="400" height="500" fill="url(#g1)" />
      <circle cx="200" cy="180" r="140" fill="url(#halo)" />
      {/* Cruz sutil */}
      <g stroke="#a8813b" strokeWidth="3" opacity="0.7">
        <line x1="200" y1="120" x2="200" y2="260" />
        <line x1="160" y1="170" x2="240" y2="170" />
      </g>
      <text
        x="50%"
        y="420"
        textAnchor="middle"
        fill="#7a5a2b"
        fontFamily="Cormorant Garamond, serif"
        fontStyle="italic"
        fontSize="20"
      >
        {label}
      </text>
    </svg>
  );
}
