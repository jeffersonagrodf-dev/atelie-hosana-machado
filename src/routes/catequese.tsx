import { createFileRoute } from "@tanstack/react-router";
import { waLink } from "@/config/site";
import { BookHeart, HeartHandshake, Sparkles } from "lucide-react";

export const Route = createFileRoute("/catequese")({
  head: () => ({
    meta: [
      { title: "Catequese — Ateliê Hosana Machado" },
      {
        name: "description",
        content:
          "Compreender, experimentar e partilhar a fé: Igreja doméstica, oração, sacramentos, arte e santidade cotidiana.",
      },
      { property: "og:title", content: "Catequese — Ateliê Hosana Machado" },
      { property: "og:description", content: "Formação cristã para toda a família." },
    ],
  }),
  component: Catequese,
});

const pillars = [
  {
    icon: BookHeart,
    title: "Compreender",
    text: "A fé pensada: doutrina, Escritura, história e cultura católica ao alcance da família.",
  },
  {
    icon: Sparkles,
    title: "Experimentar",
    text: "A fé rezada: sacramentos, liturgia doméstica e devoções que educam o coração.",
  },
  {
    icon: HeartHandshake,
    title: "Partilhar",
    text: "A fé vivida: testemunho, caridade concreta e beleza que evangeliza o próximo.",
  },
];

const articles = [
  {
    tag: "Igreja doméstica",
    title: "O lar como primeiro sacrário",
    excerpt:
      "Redescobrir a família como escola de santidade e altar do amor cotidiano.",
  },
  {
    tag: "Oração",
    title: "Como começar (de novo) a rezar em casa",
    excerpt:
      "Pequenos ritos, hora certa e um cantinho de oração transformam a rotina.",
  },
  {
    tag: "Testemunho",
    title: "Evangelizar pela beleza da vida simples",
    excerpt:
      "Antes das palavras, o modo de viver anuncia Cristo aos que estão ao redor.",
  },
  {
    tag: "Sacramentos",
    title: "Voltar à Confissão sem medo",
    excerpt:
      "A misericórdia de Deus é maior que qualquer pecado — e nos aguarda com festa.",
  },
  {
    tag: "Arte e fé",
    title: "Por que a arte sacra ainda importa",
    excerpt:
      "Imagens não são luxo: são catequese silenciosa que atravessa gerações.",
  },
  {
    tag: "Santidade cotidiana",
    title: "Pequenas coisas com grande amor",
    excerpt:
      "A santidade é o dia comum feito com Deus — em casa, no trabalho, nas relações.",
  },
];

function Catequese() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <header className="mx-auto max-w-2xl text-center">
        <div className="text-xs uppercase tracking-[0.24em] text-[color:var(--gold)]">Catequese</div>
        <h1 className="mt-3 font-serif text-4xl text-[color:var(--ink)] md:text-5xl">
          Formar o coração cristão
        </h1>
        <p className="mt-4 text-[color:var(--muted-ink)]">
          Três pilares, um só caminho: compreender, experimentar e partilhar a fé.
        </p>
      </header>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {pillars.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="rounded-3xl border border-[color:var(--gold)]/20 bg-white/80 p-8 text-center"
          >
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[color:var(--cream)] text-[color:var(--gold)]">
              <Icon size={20} />
            </div>
            <h3 className="mt-4 font-serif text-2xl text-[color:var(--ink)]">{title}</h3>
            <p className="mt-2 text-sm text-[color:var(--muted-ink)]">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <article
            key={a.title}
            className="hover-lift flex h-full flex-col rounded-3xl border border-[color:var(--gold)]/20 bg-white/80 p-6"
          >
            <span className="w-fit rounded-full bg-[color:var(--cream)] px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-[color:var(--sepia)]">
              {a.tag}
            </span>
            <h3 className="mt-4 font-serif text-xl leading-snug text-[color:var(--ink)]">
              {a.title}
            </h3>
            <p className="mt-2 flex-1 text-sm text-[color:var(--muted-ink)]">{a.excerpt}</p>
            <div className="mt-4 text-xs italic text-[color:var(--muted-ink)]">Leitura em breve</div>
          </article>
        ))}
      </div>

      <div
        className="mt-16 overflow-hidden rounded-[2rem] p-10 text-center md:p-14"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in oklab, var(--gold) 18%, white), var(--cream))",
        }}
      >
        <h3 className="font-serif text-3xl text-[color:var(--ink)] md:text-4xl">
          Compartilhe o seu testemunho
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-[color:var(--muted-ink)]">
          A sua história de fé em família pode iluminar outros lares. Escreva-nos.
        </p>
        <a
          href={waLink(
            "Olá, Hosana! Gostaria de compartilhar meu testemunho de fé em família. 🕊️",
          )}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[color:var(--gold)]"
        >
          Enviar meu testemunho
        </a>
      </div>
    </section>
  );
}
