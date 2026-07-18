import { createFileRoute } from "@tanstack/react-router";
import "@tanstack/react-start/server";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  // @ts-expect-error server route handlers augmentation isn't picked up by TS here
  server: {

    handlers: {
      GET: async () => {
        const paths = ["/", "/catalogo", "/liturgia", "/noticias", "/catequese", "/oracoes"];
        const urls = paths
          .map(
            (p) =>
              `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
