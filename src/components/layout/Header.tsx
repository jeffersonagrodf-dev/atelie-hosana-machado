import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/config/site";

const nav = [
  { to: "/", label: "Início" },
  { to: "/catalogo", label: "Catálogo" },
  { to: "/liturgia", label: "Liturgia" },
  { to: "/santos", label: "Santos" },
  { to: "/novenas", label: "Novenas" },
  { to: "/noticias", label: "Notícias" },
  { to: "/catequese", label: "Catequese" },
  { to: "/oracoes", label: "Orações" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between rounded-full border border-[color:var(--gold)]/20 bg-white/60 px-5 py-3 shadow-[0_10px_40px_-20px_rgba(120,90,40,0.35)] backdrop-blur-xl">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <img
              src={site.logoUrl}
              alt={`Logotipo ${site.name}`}
              className="logo-float h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-[color:var(--gold)]/40 shadow-sm"
            />
            <div className="min-w-0">
              <div className="truncate font-serif text-lg leading-none text-[color:var(--ink)]">
                {site.name}
              </div>
              <div className="truncate text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-ink)]">
                {site.tagline}
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="story-link rounded-full px-3 py-2 text-sm text-[color:var(--ink)] transition hover:text-[color:var(--gold)]"
                activeProps={{ className: "text-[color:var(--gold)] font-medium" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[color:var(--gold)]/30 bg-white/70 text-[color:var(--ink)] lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open ? (
          <div className="mt-2 rounded-3xl border border-[color:var(--gold)]/20 bg-white/85 p-3 shadow-xl backdrop-blur-xl lg:hidden animate-fade-in">
            <ul className="flex flex-col">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-[color:var(--ink)] hover:bg-[color:var(--cream)]"
                    activeProps={{
                      className:
                        "block rounded-2xl px-4 py-3 bg-[color:var(--cream)] text-[color:var(--gold)] font-medium",
                    }}
                    activeOptions={{ exact: n.to === "/" }}
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </header>
  );
}
