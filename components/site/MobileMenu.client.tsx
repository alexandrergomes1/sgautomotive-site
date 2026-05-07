"use client";
// Isolated client component — open/close state only.
//
// ROOT CAUSE FIX: The <header> has backdrop-blur-md (backdrop-filter: blur),
// which in Safari creates a stacking context that traps fixed-position children
// inside the header's bounding box instead of the viewport.
//
// SOLUTION: createPortal renders backdrop + panel as direct children of
// document.body — completely outside any stacking context. Fixed positioning
// then works correctly relative to the viewport on all browsers.
//
// The hamburger <button> stays inside the header (correct position).
// Only the overlay elements are portaled to body.

import { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import type { SiteContent } from "@/data/site-content";

// useSyncExternalStore — React team's recommended SSR-safe client detection.
// Returns false on server (getServerSnapshot) and true after hydration (getSnapshot).
// No useEffect, no setState-in-effect lint error.
const _emptySubscribe = () => () => {};
const _clientSnapshot = () => true as const;
const _serverSnapshot = () => false as const;

function useIsClient() {
  return useSyncExternalStore(_emptySubscribe, _clientSnapshot, _serverSnapshot);
}

interface MobileMenuProps {
  navigation: SiteContent["navigation"];
  whatsapp: SiteContent["whatsapp"];
}

export function MobileMenu({ navigation, whatsapp }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const isClient = useIsClient();

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

  const overlay = (
    <>
      {/* Backdrop — full screen dark overlay */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 9998, backgroundColor: "rgba(0,0,0,0.82)" }}
      />

      {/* Slide-in panel
          - Full screen on mobile (right-0): eliminates any page-content bleed
          - sm:w-80 sm:right-auto: partial width on tablet+
          - z-[9999] > z-[9998] backdrop > everything else (header z-40)
          - backgroundColor inline: immune to Tailwind CSS var resolution
      */}
      <div
        id="mobile-nav-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        aria-hidden={!open}
        className={`fixed top-0 left-0 bottom-0 right-0 sm:right-auto sm:w-80 flex flex-col transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          zIndex: 9999,
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

        {/* Nav links */}
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
            className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
            style={{ backgroundColor: "#c8a96a", color: "#0b0f14" }}
          >
            {navigation.cta}
          </a>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Hamburger button — stays inside the <header>, correct position */}
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

      {/* Portal to document.body — escapes header stacking context entirely */}
      {isClient && createPortal(overlay, document.body)}
    </>
  );
}
