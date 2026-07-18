import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Flame, Info } from "lucide-react";
import { waLink } from "@/config/site";

export const Route = createFileRoute("/oracoes")({
  head: () => ({
    meta: [
      { title: "Orações — Ateliê Hosana Machado" },
      {
        name: "description",
        content:
          "Acenda uma vela virtual pela sua intenção. Suas orações são guardadas apenas no seu dispositivo.",
      },
      { property: "og:title", content: "Orações — Ateliê Hosana Machado" },
      { property: "og:description", content: "Uma vela acesa por cada intenção." },
    ],
  }),
  component: Oracoes,
});

interface Prayer {
  id: string;
  name: string;
  intention: string;
  at: number;
}

const STORAGE_KEY = "hosana:prayers:v1";
const MAX_LEN = 380;

function Oracoes() {
  const [lit, setLit] = useState(false);
  const [name, setName] = useState("");
  const [intention, setIntention] = useState("");
  const [prayers, setPrayers] = useState<Prayer[]>([]);
  const [error, setError] = useState<string | null>(null);
  const flameTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setPrayers(JSON.parse(raw) as Prayer[]);
    } catch {
      // ignore
    }
    return () => {
      if (flameTimer.current) clearTimeout(flameTimer.current);
    };
  }, []);

  function lightCandle(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = intention.trim();
    if (trimmed.length === 0) {
      setError("Por favor, escreva sua intenção antes de acender a vela.");
      return;
    }
    if (trimmed.length > MAX_LEN) {
      setError(`A intenção deve ter até ${MAX_LEN} caracteres.`);
      return;
    }
    const p: Prayer = {
      id: crypto.randomUUID(),
      name: name.trim() || "Anônimo",
      intention: trimmed,
      at: Date.now(),
    };
    const next = [p, ...prayers].slice(0, 200);
    setPrayers(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
    setLit(true);
    const msg = `🕯️ Pedido de oração pelo site do Ateliê\n\nNome: ${p.name}\nIntenção: ${p.intention}\n\nPor favor, Hosana, inclua nas orações. 🙏`;
    window.open(waLink(msg), "_blank", "noopener");
    setIntention("");
    setName("");
    setError(null);
    if (flameTimer.current) clearTimeout(flameTimer.current);
    flameTimer.current = setTimeout(() => {
      setLit(false);
      flameTimer.current = null;
    }, 6000);
  }

  const visible = prayers.slice(0, 6);

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <header className="mx-auto max-w-2xl text-center">
        <div className="text-xs uppercase tracking-[0.24em] text-[color:var(--gold)]">Orações</div>
        <h1 className="mt-3 font-serif text-4xl text-[color:var(--ink)] md:text-5xl">
          Acenda uma vela pela sua intenção
        </h1>
        <p className="mt-4 text-[color:var(--muted-ink)]">
          Um gesto simples de fé. Ao acender sua vela, sua intenção é enviada à Hosana pelo WhatsApp
          para que entre nas orações do Ateliê — e também fica guardada aqui, no seu dispositivo.
        </p>
      </header>

      {/* Vela */}
      <div className="relative mx-auto mt-12 flex h-72 w-full max-w-sm items-end justify-center">
        {/* Halo */}
        {lit ? (
          <div
            aria-hidden
            className="halo-lit absolute left-1/2 top-14 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,220,120,0.85), rgba(255,220,120,0) 65%)",
              filter: "blur(6px)",
            }}
          />
        ) : null}

        {/* Chama */}
        {lit ? (
          <div
            aria-hidden
            className="flame-lit absolute left-1/2 top-16"
            style={{
              width: "26px",
              height: "42px",
              background: "radial-gradient(circle at 50% 70%, #fff2a8 0%, #ffbf3f 55%, #ff7a00 100%)",
              borderRadius: "50% 50% 45% 45% / 60% 60% 40% 40%",
              boxShadow: "0 0 24px 6px rgba(255,180,60,0.55)",
            }}
          />
        ) : (
          <div
            aria-hidden
            className="absolute left-1/2 top-24 h-6 w-[2px] -translate-x-1/2"
            style={{ background: "#5a4020" }}
          />
        )}

        {/* Corpo da vela */}
        <div
          className="relative h-44 w-16 rounded-t-full rounded-b-md"
          style={{
            background:
              "linear-gradient(180deg, #fbf3dc 0%, #efd9a5 40%, #d9b878 100%)",
            boxShadow:
              "inset -6px 0 12px rgba(120,80,20,0.15), inset 6px 0 12px rgba(255,255,255,0.35), 0 20px 40px -20px rgba(120,90,40,0.4)",
          }}
        />
        {/* Base */}
        <div
          className="absolute bottom-0 h-6 w-40 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, #a8813b 0%, #6b4f1e 80%)",
          }}
        />
      </div>

      {/* Form */}
      <form
        onSubmit={lightCandle}
        className="mx-auto mt-8 max-w-xl rounded-3xl border border-[color:var(--gold)]/20 bg-white/80 p-6 shadow-sm backdrop-blur"
      >
        <label className="block text-xs uppercase tracking-widest text-[color:var(--gold)]">
          Seu nome (opcional)
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={60}
          placeholder="Anônimo"
          className="mt-1 w-full rounded-xl border border-[color:var(--gold)]/30 bg-white px-3 py-2 text-sm text-[color:var(--ink)] outline-none focus:border-[color:var(--gold)]"
        />

        <label className="mt-4 block text-xs uppercase tracking-widest text-[color:var(--gold)]">
          Sua intenção
        </label>
        <textarea
          value={intention}
          onChange={(e) => setIntention(e.target.value)}
          maxLength={MAX_LEN}
          rows={4}
          required
          placeholder="Escreva aqui sua intenção de oração…"
          className="mt-1 w-full resize-none rounded-xl border border-[color:var(--gold)]/30 bg-white px-3 py-2 text-sm text-[color:var(--ink)] outline-none focus:border-[color:var(--gold)]"
        />
        <div className="mt-1 flex items-center justify-between text-xs text-[color:var(--muted-ink)]">
          <span className="flex items-center gap-1">
            <Info size={12} /> Enviada à Hosana pelo WhatsApp e guardada neste dispositivo.
          </span>
          <span>{intention.length}/{MAX_LEN}</span>
        </div>

        {error ? (
          <div className="mt-3 rounded-xl bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </div>
        ) : null}

        <button
          type="submit"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--ink)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[color:var(--gold)]"
        >
          <Flame size={16} /> Acender minha vela
        </button>
      </form>

      {/* Contador e cards */}
      <div className="mt-12 text-center">
        <div className="text-xs uppercase tracking-widest text-[color:var(--gold)]">Velas acesas</div>
        <div className="mt-1 font-serif text-4xl text-[color:var(--ink)]">
          {prayers.length}
        </div>
      </div>

      {visible.length > 0 ? (
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl border border-[color:var(--gold)]/20 bg-white/80 p-5"
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[color:var(--gold)]">
                <Flame size={12} /> {p.name}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink)]">
                {p.intention}
              </p>
              <div className="mt-3 text-[11px] text-[color:var(--muted-ink)]">
                {new Date(p.at).toLocaleString("pt-BR")}
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}
