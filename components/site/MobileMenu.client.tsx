"use client";
// Isolated client component — open/close state only.
//
// ACCESSIBILITY FIX (Lighthouse): Panel is only rendered when open === true.
// This eliminates "aria-hidden contains focusable descendants" entirely —
// when closed the panel does not exist in the DOM, so no link is focusable.
//
// PORTAL: createPortal renders backdrop + panel as direct children of
// document.body, escaping the header's backdrop-filter stacking context
// (Safari bug: backdrop-filter traps fixed children inside ancestor bounds).

import { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import type { SiteContent, Locale } from "@/data/site-content";

// useSyncExternalStore — React team's recommended SSR-safe client detection.
// Returns false on server, true after hydration. No useEffect, no lint error.
const _emptySubscribe = () => () => {};
const _clientSnapshot = () => true as const;
const _serverSnapshot = () => false as const;

function useIsClient() {
  return useSyncExternalStore(_emptySubscribe, _clientSnapshot, _serverSnapshot);
}

const LABELS = {
  es: { open: "Abrir menú", close: "Cerrar menú", nav: "Menú de navegación", mobile: "Menú móvil" },
  en: { open: "Open menu",  close: "Close menu",  nav: "Navigation menu",    mobile: "Mobile menu"  },
  pt: { open: "Abrir menu", close: "Fechar menu", nav: "Menu de navegação",   mobile: "Menu mobile"  },
} as const;

interface MobileMenuProps {
  navigation: SiteContent["navigation"];
  locale: Locale;
}

export function MobileMenu({ navigation, locale }: MobileMenuProps) {
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

  return (
    <>
      {/* Hamburger / close button — stays inside the <header> */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="md:hidden flex items-center justify-center w-9 h-9 rounded-md text-muted hover:text-fg hover:bg-white/5 transition-colors"
        aria-label={open ? LABELS[locale].close : LABELS[locale].open}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
      >
        {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
      </button>

      {/* Portal — only mounted when open. No aria-hidden + focusable descendants. */}
      {isClient &&
        open &&
        createPortal(
          <>
            {/* Backdrop — tap anywhere outside panel to close */}
            <div
              onClick={() => setOpen(false)}
              aria-hidden="true"
              className="fixed inset-0"
              style={{ zIndex: 9998, backgroundColor: "rgba(0,0,0,0.55)" }}
            />

            {/* Panel — rendered only when open, so role/aria-modal are fully valid */}
            <div
              id="mobile-nav-panel"
              role="dialog"
              aria-modal="true"
              aria-label={LABELS[locale].nav}
              className="fixed left-0 right-0"
              style={{
                top: 64,
                zIndex: 9999,
                backgroundColor: "#111827",
                boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
                borderBottom: "1px solid rgba(31,41,55,0.9)",
              }}
            >
              <nav aria-label={LABELS[locale].mobile}>
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
            </div>
          </>,
          document.body
        )}
    </>
  );
}
