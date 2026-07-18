import { Instagram, MessageCircle } from "lucide-react";
import { site, waLink } from "@/config/site";

export function FloatingButtons() {
  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={site.instagram}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram do Ateliê"
        className="pointer-events-auto grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-lg transition hover:scale-105"
      >
        <Instagram size={20} />
      </a>
      <a
        href={waLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp para encomendas"
        className="pointer-events-auto grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
      >
        <MessageCircle size={20} />
      </a>
    </div>
  );
}
