// Server Component — pure <a href="#inicio">. Zero JS.
// Positioned above the floating WhatsApp button.
import { ArrowUp } from "lucide-react";
import type { Locale } from "@/data/site-content";

const BACK_TO_TOP_LABEL: Record<Locale, string> = {
  es: "Volver arriba",
  en: "Back to top",
  pt: "Voltar ao topo",
};

export function BackToTop({ locale }: { locale: Locale }) {
  return (
    <a
      href="#inicio"
      aria-label={BACK_TO_TOP_LABEL[locale]}
      className="fixed bottom-24 right-6 z-40 flex items-center justify-center w-9 h-9 rounded-full bg-surface border border-border text-muted hover:text-fg hover:border-accent/40 hover:bg-surface-2 hover:scale-110 active:scale-95 transition-all duration-200 shadow-sm shadow-black/30"
    >
      <ArrowUp size={16} aria-hidden="true" />
    </a>
  );
}
