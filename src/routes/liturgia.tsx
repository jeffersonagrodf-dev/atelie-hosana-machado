import { createFileRoute } from "@tanstack/react-router";
import { LiturgyBar } from "@/components/layout/LiturgyBar";
import { liturgicalInfo, saoMiguelDates, mysteryOfTheDay } from "@/lib/liturgy";
import { formatDatePt } from "@/lib/format";
import { ExternalLink, BookOpen, Bell, Church, Sparkles } from "lucide-react";

export const Route = createFileRoute("/liturgia")({
  head: () => ({
    meta: [
      { title: "Liturgia — Ateliê Hosana Machado" },
      {
        name: "description",
        content:
          "Liturgia diária CNBB, Liturgia das Horas, Santo Terço, Quaresma de São Miguel e devoções em família.",
      },
      { property: "og:title", content: "Liturgia — Ateliê Hosana Machado" },
      { property: "og:description", content: "Reze com a Igreja todos os dias." },
    ],
  }),
  component: Liturgia,
});

function Liturgia() {
  const today = new Date();
  const info = liturgicalInfo(today);
  const mystery = mysteryOfTheDay(today);
  const saoMiguel = saoMiguelDates(today.getFullYear());
  const inSaoMiguel = today >= saoMiguel.start && today <= saoMiguel.end;

  return (
    <>
      <LiturgyBar />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <header className="mx-auto max-w-3xl text-center">
          <div className="text-xs uppercase tracking-[0.24em] text-[color:var(--gold)]">Liturgia</div>
          <h1 className="mt-3 font-serif text-4xl text-[color:var(--ink)] md:text-5xl">
            Rezar com a Igreja, todos os dias
          </h1>
          <p className="mt-4 text-[color:var(--muted-ink)]">
            Hoje é <span className="capitalize">{formatDatePt(today)}</span> — celebramos o{" "}
            <strong className="text-[color:var(--ink)]">{info.label}</strong>. Terço do dia:{" "}
            <strong className="text-[color:var(--ink)]">{mystery.name}</strong>.
          </p>
        </header>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <ResourceCard
            icon={BookOpen}
            title="Liturgia Diária — CNBB"
            desc="Leituras da Missa do dia, salmo e Evangelho comentado pela Conferência Nacional dos Bispos do Brasil."
            href="https://www.cnbb.org.br/liturgia-diaria/"
          />
          <ResourceCard
            icon={Bell}
            title="Liturgia das Horas — iBreviary"
            desc="Ofício divino completo: Laudes, Vésperas, Completas e demais horas em português."
            href="https://www.ibreviary.com/m2/breviario.php?lang=pt"
          />
          <ResourceCard
            icon={Sparkles}
            title="Santo Terço"
            desc={`Hoje rezamos os ${mystery.name}: ${mystery.points.join(" • ")}.`}
          />
          <ResourceCard
            icon={Church}
            title="Tempos Litúrgicos"
            desc="Advento, Natal, Quaresma, Tríduo, Páscoa e Tempo Comum — cada estação do ano com sua cor e sua graça."
          />
        </div>

        {/* Quaresma de São Miguel */}
        <div
          className="mt-12 overflow-hidden rounded-[2rem] border border-[color:var(--gold)]/20 p-8 md:p-12"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in oklab, var(--gold) 15%, white), var(--ivory))",
          }}
        >
          <div className="text-xs uppercase tracking-[0.24em] text-[color:var(--gold)]">
            Módulo especial
          </div>
          <h2 className="mt-3 font-serif text-3xl text-[color:var(--ink)] md:text-4xl">
            Quaresma de São Miguel Arcanjo
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-[color:var(--muted-ink)]">
            Devoção de 40 dias, de <strong>15 de agosto</strong> (Assunção) a <strong>29 de setembro</strong> (Festa
            dos Arcanjos), com jejum, oração e defesa espiritual. Peça revelada a Santo Antônio e
            difundida por São Francisco de Assis. Um tempo forte de combate espiritual em família.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <MiniCard title="Oração diária" text="Coroa Angélica, invocações aos coros angélicos e Salmo 90." />
            <MiniCard title="Jejum semanal" text="Sextas-feiras em pão e água, ou conforme sua saúde permitir." />
            <MiniCard title="Sacramentos" text="Confissão frequente e participação atenta na Santa Missa." />
          </div>
          <p className="mt-6 text-sm italic text-[color:var(--sepia)]">
            {inSaoMiguel
              ? "Estamos vivendo este tempo santo agora — que São Miguel nos defenda."
              : `Próxima Quaresma de São Miguel: ${saoMiguel.start.toLocaleDateString("pt-BR")} a ${saoMiguel.end.toLocaleDateString("pt-BR")}.`}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <ResourceCard
            icon={BookOpen}
            title="Novenas"
            desc="Nove dias de oração para preparar solenidades, pedir graças e crescer em confiança."
          />
          <ResourceCard
            icon={Church}
            title="Terço no Lar"
            desc="A família reunida, o terço nas mãos: escola de fé, escudo de paz e memorial de amor."
          />
          <ResourceCard
            icon={Sparkles}
            title="Lectio Divina"
            desc="Ler, meditar, orar e contemplar a Palavra — método antigo, sempre novo, para conhecer Cristo."
          />
        </div>
      </section>
    </>
  );
}

function ResourceCard({
  icon: Icon,
  title,
  desc,
  href,
}: {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  desc: string;
  href?: string;
}) {
  const body = (
    <div className="hover-lift flex h-full flex-col rounded-3xl border border-[color:var(--gold)]/20 bg-white/80 p-6 backdrop-blur">
      <div className="mb-4 grid h-10 w-10 place-items-center rounded-full bg-[color:var(--cream)] text-[color:var(--gold)]">
        <Icon size={18} />
      </div>
      <h3 className="font-serif text-xl text-[color:var(--ink)]">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-[color:var(--muted-ink)]">{desc}</p>
      {href ? (
        <div className="mt-4 inline-flex items-center gap-1 text-sm text-[color:var(--gold)]">
          Acessar <ExternalLink size={14} />
        </div>
      ) : null}
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer">
      {body}
    </a>
  ) : (
    body
  );
}

function MiniCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-[color:var(--gold)]/20 bg-white/80 p-5">
      <div className="font-serif text-lg text-[color:var(--ink)]">{title}</div>
      <p className="mt-1 text-sm text-[color:var(--muted-ink)]">{text}</p>
    </div>
  );
}
