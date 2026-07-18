import { Link } from "@tanstack/react-router";
import { site, waLink, igLink } from "@/config/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[color:var(--gold)]/20 bg-[color:var(--ivory)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="font-serif text-2xl text-[color:var(--ink)]">{site.name}</div>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted-ink)]">
            {site.motto}
          </p>
          <p className="mt-4 text-xs italic text-[color:var(--muted-ink)]">
            “Eu e minha casa serviremos ao Senhor.” — Js 24,15
          </p>
        </div>
        <div>
          <div className="mb-3 text-xs uppercase tracking-[0.2em] text-[color:var(--gold)]">
            Navegação
          </div>
          <ul className="space-y-2 text-sm text-[color:var(--ink)]">
            <li><Link to="/catalogo" className="story-link">Catálogo</Link></li>
            <li><Link to="/liturgia" className="story-link">Liturgia</Link></li>
            <li><Link to="/noticias" className="story-link">Notícias</Link></li>
            <li><Link to="/catequese" className="story-link">Catequese</Link></li>
            <li><Link to="/oracoes" className="story-link">Orações</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-xs uppercase tracking-[0.2em] text-[color:var(--gold)]">
            Contato
          </div>
          <ul className="space-y-2 text-sm text-[color:var(--ink)]">
            <li>
              <a
                href={igLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${site.instagramHandle}`}
                className="story-link"
              >
                Instagram {site.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp ${site.whatsappDisplay}`}
                className="story-link"
              >
                WhatsApp {site.whatsappDisplay}
              </a>
            </li>
          </ul>
          <p className="mt-6 text-xs text-[color:var(--muted-ink)]">
            © {new Date().getFullYear()} {site.name}. Feito com fé.
          </p>
        </div>
      </div>
    </footer>
  );
}
