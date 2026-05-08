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
// PANEL DESIGN: Anchored to the top of the viewport (top: 64px = header height),
// content-height only — grows with its content, does NOT fill the full screen.
// Page content is visible below. Animation: slide down from above (translate-y).

import { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
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
}

export function MobileMenu({ navigation }: MobileMenuProps) {
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

  const overlay = (
    <>
      {/* Backdrop — covers page below panel, tap to close */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 9998, backgroundColor: "rgba(0,0,0,0.55)" }}
      />

      {/* Clip wrapper — overflow:hidden ensures panel never bleeds into the
          header zone (y=0→64) when translateY(-100%) leaves the bottom edge
          at exactly y=64 (z-9999 > header z-40 would otherwise show it).
          pointer-events:none → backdrop can still receive clicks through. */}
      <div
        className="fixed left-0 right-0 bottom-0 overflow-hidden pointer-events-none"
        style={{ top: 64, zIndex: 9999 }}
      >
        {/* Panel — translates within the clip wrapper; never visible above wrapper's top */}
        <div
          id="mobile-nav-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          aria-hidden={!open}
          className={`transition-transform duration-300 ease-out ${
            open ? "translate-y-0 pointer-events-auto" : "-translate-y-full pointer-events-none"
          }`}
          style={{
            backgroundColor: "#111827",
            boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
            borderBottom: "1px solid rgba(31,41,55,0.9)",
          }}
        >
          {/* Nav links */}
          <nav aria-label="Menu mobile">
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
      </div>
    </>
  );

  return (
    <>
      {/* Hamburger / close button — stays inside the <header>, correct position */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="md:hidden flex items-center justify-center w-9 h-9 rounded-md text-muted hover:text-fg hover:bg-white/5 transition-colors"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
      >
        {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
      </button>

      {/* Portal to document.body — escapes header stacking context entirely */}
      {isClient && createPortal(overlay, document.body)}
    </>
  );
}
