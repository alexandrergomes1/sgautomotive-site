"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavItem {
  anchor: string;
  label: string;
}

interface MobileMenuProps {
  navItems: NavItem[];
  ctaLabel: string;
}

export function MobileMenu({ navItems, ctaLabel }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  // Close on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="p-1.5 text-muted hover:text-fg transition-colors"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Panel — CSS grid trick for height: 0 → auto, no JS animation */}
      <div
        className="absolute top-full left-0 right-0 bg-bg/96 backdrop-blur-lg border-b border-border grid transition-[grid-template-rows] duration-[220ms] ease-in-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        aria-hidden={!open}
      >
        <div className="overflow-hidden">
          <nav className="px-4 py-3 flex flex-col" aria-label="Menú móvil">
            {navItems.map(({ anchor, label }) => (
              <a
                key={anchor}
                href={anchor}
                onClick={() => setOpen(false)}
                className="text-sm py-3.5 text-muted hover:text-fg border-b border-border/40 last:border-0 transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-4 mb-1 text-sm font-semibold px-4 py-3 rounded-lg bg-accent text-bg text-center hover:bg-accent-light transition-colors"
            >
              {ctaLabel}
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
