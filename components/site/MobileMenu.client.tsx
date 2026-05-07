"use client";
// Isolated client component — only open/close state lives here.
// Header.tsx stays a pure Server Component.
// Animation: CSS transform/opacity only. No Framer. No Radix.

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import type { SiteContent, Locale } from "@/data/site-content";

const LOCALE_LINKS: { locale: Locale; href: string; label: string }[] = [
  { locale: "es", href: "/es", label: "ES" },
  { locale: "en", href: "/en", label: "EN" },
  { locale: "pt", href: "/pt", label: "PT" },
];

interface MobileMenuProps {
  locale: Locale;
  navigation: SiteContent["navigation"];
  whatsapp: SiteContent["whatsapp"];
}

export function MobileMenu({ locale, navigation, whatsapp }: MobileMenuProps) {
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

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden flex items-center">
      {/* Hamburger button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex items-center justify-center w-9 h-9 rounded-md text-muted hover:text-fg hover:bg-surface transition-colors"
        aria-label="Abrir menu"
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
      >
        <Menu size={20} aria-hidden="true" />
      </button>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className="fixed inset-0 z-40 bg-bg/70 backdrop-blur-sm transition-opacity duration-300"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
      />

      {/* Slide-in panel */}
      <div
        id="mobile-menu-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        aria-hidden={!open}
        className="fixed top-0 left-0 bottom-0 z-50 w-72 max-w-[85vw] bg-surface border-r border-border flex flex-col transition-transform duration-300 ease-out"
        style={{ transform: open ? "translateX(0)" : "translateX(-100%)" }}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-border shrink-0">
          <span className="text-sm font-semibold text-fg tracking-wide">
            SG Automotive
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center w-8 h-8 rounded-md text-muted hover:text-fg hover:bg-bg transition-colors"
            aria-label="Fechar menu"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        {/* Nav links */}
        <nav
          className="flex-1 overflow-y-auto py-3 px-3"
          aria-label="Menu mobile"
        >
          {navigation.links.map(({ anchor, label }) => (
            <a
              key={anchor}
              href={anchor}
              onClick={() => setOpen(false)}
              className="flex items-center px-4 py-3.5 rounded-lg text-sm font-medium text-muted hover:text-fg hover:bg-bg transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Panel footer: WA CTA + locale switcher */}
        <div className="p-4 border-t border-border flex flex-col gap-3 shrink-0">
          <a
            href={whatsapp.consult}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-accent text-bg font-semibold text-sm hover:bg-accent-light transition-colors"
          >
            {navigation.cta}
          </a>

          <div className="flex justify-center gap-5">
            {LOCALE_LINKS.map(({ locale: l, href, label }) => (
              <a
                key={l}
                href={href}
                aria-current={locale === l ? "page" : undefined}
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                  locale === l
                    ? "text-accent"
                    : "text-muted hover:text-fg"
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
