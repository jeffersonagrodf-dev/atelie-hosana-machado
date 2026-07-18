// Central config — WhatsApp e Instagram têm UMA única fonte de verdade.
// Alterou aqui, alterou em todo o site.
import logoAsset from "@/assets/logo-atelie.asset.json";

export const site = {
  name: "Ateliê Hosana Machado",
  tagline: "Artes Sacras e Presentes Católicos",
  motto: "A beleza do Céu que nasce através da vivência da fé em família",

  // ---- Instagram (única fonte)
  instagramHandle: "@hosanaamachado",
  instagramUser: "hosanaamachado",
  get instagram() {
    return `https://www.instagram.com/${this.instagramUser}`;
  },

  // ---- WhatsApp (única fonte)
  // Somente dígitos, com DDI (55) + DDD + número.
  whatsapp: "5514997236210",
  whatsappDisplay: "+55 14 99723-6210",
  whatsappDefaultMessage:
    "Olá, Hosana! Vim pelo site e gostaria de fazer uma encomenda no Ateliê. 🕊️",

  logoUrl: logoAsset.url,
};

/** Link padronizado para o WhatsApp do Ateliê. Use SEMPRE esta função. */
export function waLink(message?: string, product?: string) {
  const base = message ?? site.whatsappDefaultMessage;
  const text = product
    ? `Olá, Hosana! Tenho interesse na peça "${product}" do Ateliê. Poderia me ajudar?`
    : base;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

/** Link padronizado para o Instagram do Ateliê. Use SEMPRE esta função. */
export function igLink() {
  return site.instagram;
}
