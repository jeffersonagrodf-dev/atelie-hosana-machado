import { createFileRoute } from "@tanstack/react-router";
import { Info } from "lucide-react";

export const Route = createFileRoute("/noticias")({
  head: () => ({
    meta: [
      { title: "Notícias — Ateliê Hosana Machado" },
      {
        name: "description",
        content: "Panorama demonstrativo com Vaticano, CNBB, formação e evangelização.",
      },
      { property: "og:title", content: "Notícias — Ateliê Hosana Machado" },
      { property: "og:description", content: "Fé, Igreja e cultura cristã no dia a dia." },
    ],
  }),
  component: Noticias,
});

const featured = {
  category: "Vaticano",
  title: "O Papa convida os fiéis a redescobrir a beleza da oração em família",
  excerpt:
    "Em audiência recente, o Santo Padre lembrou que a Igreja doméstica é o primeiro seminário de santidade — onde a fé se aprende com gestos, silêncio e amor concreto.",
  date: "Hoje",
};

const feed = [
  {
    category: "CNBB",
    title: "Bispos do Brasil publicam nova mensagem sobre a família e a educação da fé",
    excerpt:
      "Documento reforça o papel dos pais como primeiros catequistas e propõe caminhos para reavivar o oratório doméstico.",
  },
  {
    category: "Formação",
    title: "Lectio Divina em cinco passos: como começar em casa",
    excerpt:
      "Um método antigo, acessível e transformador para colocar a Palavra no centro do lar cristão.",
  },
  {
    category: "Evangelização",
    title: "Comunidades relatam frutos da consagração das famílias ao Sagrado Coração",
    excerpt:
      "Cresce o número de lares que renovam a consagração e experimentam paz, reconciliação e vocações.",
  },
  {
    category: "Vaticano",
    title: "Jubileu da Esperança inspira novas iniciativas de peregrinação",
    excerpt:
      "Paróquias organizam romarias familiares como forma de vivenciar concretamente a virtude teologal da esperança.",
  },
  {
    category: "Formação",
    title: "Arte sacra contemporânea: continuidade e não ruptura",
    excerpt:
      "Um olhar sobre como a produção artística católica hoje pode dialogar com a tradição sem perder identidade.",
  },
  {
    category: "CNBB",
    title: "Setembro, Mês da Bíblia: sugestões para viver em família",
    excerpt:
      "Roteiro simples de leitura orante e partilha semanal, adaptado a famílias com crianças e adolescentes.",
  },
];

function Noticias() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <header className="mx-auto max-w-2xl text-center">
        <div className="text-xs uppercase tracking-[0.24em] text-[color:var(--gold)]">Notícias</div>
        <h1 className="mt-3 font-serif text-4xl text-[color:var(--ink)] md:text-5xl">
          Fé, Igreja e cultura cristã
        </h1>
        <p className="mt-4 text-[color:var(--muted-ink)]">
          Um panorama editorial em breve alimentado por fontes oficiais.
        </p>
      </header>

      <div className="mt-6 flex items-center justify-center gap-2 rounded-full border border-[color:var(--gold)]/30 bg-[color:var(--cream)]/80 px-4 py-2 text-xs text-[color:var(--muted-ink)]">
        <Info size={14} />
        Conteúdos abaixo são <strong className="mx-1 text-[color:var(--sepia)]">demonstrativos</strong>{" "}
        (simulados) — em breve serão substituídos por notícias reais.
      </div>

      <article
        className="mt-12 grid gap-8 overflow-hidden rounded-[2rem] border border-[color:var(--gold)]/20 md:grid-cols-2"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in oklab, var(--gold) 15%, white), var(--ivory))",
        }}
      >
        <div className="min-h-[280px] bg-gradient-to-br from-[color:var(--cream)] to-white p-8">
          <div className="flex h-full items-center justify-center font-serif text-3xl italic text-[color:var(--sepia)]">
            “Rezar em família é começar a construir o Céu na terra.”
          </div>
        </div>
        <div className="p-8 md:p-10">
          <span className="rounded-full bg-[color:var(--gold)] px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-white">
            {featured.category}
          </span>
          <h2 className="mt-4 font-serif text-2xl text-[color:var(--ink)] md:text-3xl">
            {featured.title}
          </h2>
          <p className="mt-3 text-[color:var(--muted-ink)]">{featured.excerpt}</p>
          <p className="mt-6 text-xs uppercase tracking-widest text-[color:var(--muted-ink)]">
            {featured.date}
          </p>
        </div>
      </article>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {feed.map((n) => (
          <article
            key={n.title}
            className="hover-lift flex h-full flex-col rounded-3xl border border-[color:var(--gold)]/20 bg-white/80 p-6"
          >
            <span className="w-fit rounded-full bg-[color:var(--cream)] px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-[color:var(--sepia)]">
              {n.category}
            </span>
            <h3 className="mt-4 font-serif text-xl leading-snug text-[color:var(--ink)]">
              {n.title}
            </h3>
            <p className="mt-2 flex-1 text-sm text-[color:var(--muted-ink)]">{n.excerpt}</p>
            <div className="mt-4 text-xs italic text-[color:var(--muted-ink)]">
              conteúdo demonstrativo
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
