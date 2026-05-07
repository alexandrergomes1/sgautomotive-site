// Server Component — pure <a href="#inicio">. Zero JS.
// Positioned above the floating WhatsApp button.
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  return (
    <a
      href="#inicio"
      aria-label="Voltar ao topo"
      className="fixed bottom-24 right-6 z-40 flex items-center justify-center w-9 h-9 rounded-full bg-surface border border-border text-muted hover:text-fg hover:border-accent/40 hover:bg-surface-2 hover:scale-110 active:scale-95 transition-all duration-200 shadow-sm shadow-black/30"
    >
      <ArrowUp size={16} aria-hidden="true" />
    </a>
  );
}
