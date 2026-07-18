import { useEffect, useState, type ImgHTMLAttributes } from "react";

/**
 * Imagem otimizada e resiliente para santos.
 * - Tenta a URL original (Wikimedia Commons com srcset).
 * - Em caso de falha, busca automaticamente uma imagem no Wikipedia
 *   (pt → en) usando a REST API e o nome/alt do santo.
 * - Se tudo falhar, mostra um SVG devocional como fallback.
 */
type Props = {
  src: string;
  alt: string;
  sizes?: string;
  widths?: number[];
  priority?: boolean;
  className?: string;
  /** Termo de busca (nome do santo). Default: alt. */
  query?: string;
} & Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt" | "srcSet" | "sizes" | "loading">;

const COMMONS = "commons.wikimedia.org/wiki/Special:FilePath/";

function parseCommons(src: string): { base: string; file: string } | null {
  const idx = src.indexOf(COMMONS);
  if (idx === -1) return null;
  const after = src.slice(idx + COMMONS.length);
  const qIdx = after.indexOf("?");
  const file = qIdx === -1 ? after : after.slice(0, qIdx);
  return { base: src.slice(0, idx) + COMMONS, file };
}

function buildSrcSet(src: string, widths: number[]) {
  const parsed = parseCommons(src);
  if (!parsed) return null;
  return widths
    .map((w) => `https://${parsed.base}${parsed.file}?width=${w} ${w}w`)
    .join(", ");
}

async function fetchWikiImage(query: string): Promise<string | null> {
  const langs = ["pt", "en"];
  for (const lang of langs) {
    try {
      // 1) Busca a página mais relevante
      const sUrl = `https://${lang}.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(
        query,
      )}&format=json&origin=*&srlimit=1`;
      const sRes = await fetch(sUrl);
      const sJson = await sRes.json();
      const title: string | undefined = sJson?.query?.search?.[0]?.title;
      if (!title) continue;

      // 2) Pega a imagem principal da página
      const pUrl = `https://${lang}.wikipedia.org/w/api.php?action=query&prop=pageimages&piprop=original|thumbnail&pithumbsize=1200&titles=${encodeURIComponent(
        title,
      )}&format=json&origin=*`;
      const pRes = await fetch(pUrl);
      const pJson = await pRes.json();
      const pages = pJson?.query?.pages ?? {};
      const first = Object.values(pages)[0] as
        | { original?: { source?: string }; thumbnail?: { source?: string } }
        | undefined;
      const url = first?.original?.source || first?.thumbnail?.source;
      if (url) return url;
    } catch {
      // tenta próximo idioma
    }
  }
  return null;
}

export function SaintImage({
  src,
  alt,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  widths = [400, 640, 800, 1200, 1600],
  priority = false,
  className,
  query,
  ...rest
}: Props) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [attempt, setAttempt] = useState<"primary" | "wiki" | "failed">("primary");

  useEffect(() => {
    setCurrentSrc(src);
    setAttempt("primary");
  }, [src]);

  const srcSet = attempt === "primary" ? buildSrcSet(currentSrc, widths) ?? undefined : undefined;

  async function handleError() {
    if (attempt === "primary") {
      const wiki = await fetchWikiImage(query || alt);
      if (wiki) {
        setCurrentSrc(wiki);
        setAttempt("wiki");
        return;
      }
      setAttempt("failed");
    } else if (attempt === "wiki") {
      setAttempt("failed");
    }
  }

  if (attempt === "failed") {
    return <SaintPlaceholder alt={alt} className={className} />;
  }

  return (
    <img
      src={currentSrc}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      // @ts-expect-error fetchpriority é atributo válido, tipagem ainda parcial
      fetchpriority={priority ? "high" : "auto"}
      onError={handleError}
      className={className}
      {...rest}
    />
  );
}

function SaintPlaceholder({ alt, className }: { alt: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      role="img"
      aria-label={alt}
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="sph-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f7ecd3" />
          <stop offset="100%" stopColor="#e6c98a" />
        </linearGradient>
        <radialGradient id="sph-halo" cx="50%" cy="35%" r="35%">
          <stop offset="0%" stopColor="#fff5cf" />
          <stop offset="100%" stopColor="#e6c98a00" />
        </radialGradient>
      </defs>
      <rect width="400" height="500" fill="url(#sph-bg)" />
      <circle cx="200" cy="200" r="150" fill="url(#sph-halo)" />
      <g stroke="#a8813b" strokeWidth="4" opacity="0.75" strokeLinecap="round">
        <line x1="200" y1="130" x2="200" y2="290" />
        <line x1="150" y1="185" x2="250" y2="185" />
      </g>
      <text
        x="50%"
        y="430"
        textAnchor="middle"
        fill="#7a5a2b"
        fontFamily="Cormorant Garamond, serif"
        fontStyle="italic"
        fontSize="18"
      >
        Imagem indisponível
      </text>
    </svg>
  );
}
