import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/layout/FloatingButtons";
import { liturgicalInfo } from "@/lib/liturgy";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl text-foreground">404</h1>
        <h2 className="mt-4 font-serif text-2xl text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--gold)] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-2xl text-foreground">Esta página não carregou</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo saiu errado. Tente novamente ou volte ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-[color:var(--gold)] px-5 py-2.5 text-sm font-medium text-white"
          >
            Tentar novamente
          </button>
          <a href="/" className="rounded-full border px-5 py-2.5 text-sm font-medium">
            Ir para o início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ateliê Hosana Machado — Artes Sacras e Decoração Cristã" },
      {
        name: "description",
        content:
          "A beleza do Céu que nasce através da vivência da fé em família. Artes sacras, terços e decoração devocional feitos à mão.",
      },
      { name: "author", content: "Ateliê Hosana Machado" },
      { property: "og:title", content: "Ateliê Hosana Machado — Artes Sacras e Decoração Cristã" },
      {
        property: "og:description",
        content:
          "A beleza do Céu que nasce através da vivência da fé em família. Artes sacras, terços e decoração devocional feitos à mão.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ateliê Hosana Machado — Artes Sacras e Decoração Cristã" },
      { name: "twitter:description", content: "A beleza do Céu que nasce através da vivência da fé em família. Artes sacras, terços e decoração devocional feitos à mão." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/X3mXgpHurXUIwHTm38AfOBz6x362/social-images/social-1783982950759-WhatsApp_Image_2026-07-10_at_12.35.22.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/X3mXgpHurXUIwHTm38AfOBz6x362/social-images/social-1783982950759-WhatsApp_Image_2026-07-10_at_12.35.22.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Jost:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    const info = liturgicalInfo(new Date());
    document.documentElement.setAttribute("data-liturgical-color", info.color);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </QueryClientProvider>
  );
}
