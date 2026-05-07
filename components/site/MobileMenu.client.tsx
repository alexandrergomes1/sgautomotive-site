"use client";
// Isolated client component — open/close state only.
// Panel: full-screen on mobile (inset-0), partial width on sm+ (w-80).
// This eliminates any page-content "bleed" through the backdrop on narrow phones.
// Backdrop: handles sm+ overlay; on mobile, panel covers full screen already.

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import type { SiteContent } from "@/data/site-content";

interface MobileMenuProps {
  navigation: SiteContent["navigation"];
  whatsapp: SiteContent["whatsapp"];
}

export function MobileMenu({ navigation, whatsapp }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Hamburger trigger — mobile only */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="md:hidden flex items-center justify-center w-9 h-9 rounded-md text-muted hover:text-fg hover:bg-white/5 transition-colors"
        aria-label="Abrir menu"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
      >
        <Menu size={20} aria-hidden="true" />
      </button>

      {/* Backdrop — visible on sm+ where panel doesn't cover full width */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "rgba(0,0,0,0.85)", backdropFilter: "blur(4px)" }}
      />

      {/* Slide-in panel
          Mobile: inset-0 = full screen (no page bleed whatsoever)
          sm+: w-80, right-auto (partial width, backdrop shows on the right)
          backgroundColor via inline style — immune to CSS variable resolution issues
      */}
      <div
        id="mobile-nav-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        aria-hidden={!open}
        className={`fixed top-0 left-0 bottom-0 right-0 sm:right-auto sm:w-80 z-50 flex flex-col transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          backgroundColor: "#111827",
          boxShadow: "6px 0 48px rgba(0,0,0,0.8)",
        }}
      >
        {/* Panel header */}
        <div
          className="flex items-center justify-between px-5 h-16 shrink-0"
          style={{ borderBottom: "1px solid rgba(31,41,55,0.9)" }}
        >
          <a href="#inicio" onClick={() => setOpen(false)} aria-label="SG Automotive">
            <Logo size="sm" />
          </a>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center w-9 h-9 rounded-lg text-muted hover:text-fg hover:bg-white/5 transition-colors"
            aria-label="Fechar menu"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Nav links — full-width with border-bottom separators */}
        <nav className="flex-1" aria-label="Menu mobile">
          {navigation.links.map(({ anchor, label }) => (
            <a
              key={anchor}
              href={anchor}
              onClick={() => setOpen(false)}
              className="flex items-center w-full px-6 py-4 text-base font-medium text-fg/90 hover:text-accent hover:bg-white/5 transition-colors"
              style={{ borderBottom: "1px solid rgba(31,41,55,0.6)" }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Footer — WhatsApp CTA only */}
        <div
          className="px-5 pb-8 pt-5 shrink-0"
          style={{ borderTop: "1px solid rgba(31,41,55,0.9)" }}
        >
          <a
            href={whatsapp.consult}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.01] active:scale-[0.99]"
            style={{ backgroundColor: "#c8a96a", color: "#0b0f14" }}
          >
            {navigation.cta}
          </a>
        </div>
      </div>
    </>
  );
}
