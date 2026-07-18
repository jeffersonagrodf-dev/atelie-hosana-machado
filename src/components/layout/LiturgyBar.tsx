import { liturgicalInfo, mysteryOfTheDay } from "@/lib/liturgy";
import { saintOfDay } from "@/lib/saints";
import { formatDatePt } from "@/lib/format";

export function LiturgyBar() {
  const today = new Date();
  const info = liturgicalInfo(today);
  const mystery = mysteryOfTheDay(today);
  const saint = saintOfDay(today);

  const colorDot: Record<string, string> = {
    verde: "bg-emerald-600",
    roxo: "bg-purple-700",
    "branco-dourado": "bg-gradient-to-br from-white to-[color:var(--gold)] border border-[color:var(--gold)]",
    vermelho: "bg-red-700",
    rosa: "bg-pink-400",
  };

  return (
    <div className="w-full border-y border-[color:var(--gold)]/20 bg-[color:var(--cream)]/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-2 px-6 py-3 text-sm text-[color:var(--ink)]">
        <span className="capitalize">{formatDatePt(today)}</span>
        <span className="flex items-center gap-2">
          <span aria-hidden className={`inline-block h-3 w-3 rounded-full ${colorDot[info.color]}`} />
          <span>{info.label}</span>
        </span>
        <span className="hidden sm:inline text-[color:var(--muted-ink)]">•</span>
        <span><strong className="font-medium">Santo do dia:</strong> {saint}</span>
        <span className="hidden sm:inline text-[color:var(--muted-ink)]">•</span>
        <span><strong className="font-medium">Terço de hoje:</strong> {mystery.name}</span>
      </div>
    </div>
  );
}
