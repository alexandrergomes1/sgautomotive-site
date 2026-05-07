"use client";
// Isolated client component — only open/close state lives here.
// Header.tsx stays a pure Server Component.
// Animation: CSS transform/opacity via Tailwind classes. No Framer. No Radix.
// Locale switcher removed from this panel — it lives in Header via LanguageSwitcher.

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
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Hamburger trigger — mobile only */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="md:hidden flex items-center justify-center w-9 h-9 rounded-md text-muted hover:text-fg hover:bg-surface transition-colors"
        aria-label="Abrir menu"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
      >
        <Menu size={20} aria-hidden="true" />
      </button>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-bg/80 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Slide-in panel */}
      <div
        id="mobile-nav-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        aria-hidden={!open}
        className={`fixed top-0 left-0 bottom-0 z-50 w-72 max-w-[85vw] bg-surface border-r border-border flex flex-col transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-border shrink-0">
          <a href="#inicio" onClick={() => setOpen(false)} aria-label="SG Automotive">
            <Logo size="sm" />
          </a>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center w-8 h-8 rounded-md text-muted hover:text-fg hover:bg-bg transition-colors"
            aria-label="Fechar menu"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        {/* Nav links — from navigation.links, same array as desktop */}
        <nav
          className="flex-1 py-4 px-3"
          aria-label="Menu mobile"
        >
          {navigation.links.map(({ anchor, label }) => (
            <a
              key={anchor}
              href={anchor}
              onClick={() => setOpen(false)}
              className="flex items-center px-4 py-3.5 rounded-lg text-base font-medium text-fg hover:text-accent hover:bg-bg transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Panel footer: WA CTA only — locale switcher is in header */}
        <div className="px-4 pb-6 pt-4 border-t border-border shrink-0">
          <a
            href={whatsapp.consult}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-accent text-bg font-semibold text-sm hover:bg-accent-light transition-colors"
          >
            {navigation.cta}
          </a>
        </div>
      </div>
    </>
  );
}
