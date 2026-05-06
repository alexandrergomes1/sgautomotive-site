"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { Logo } from "@/components/logo";

const NAV_LINKS = [
  { anchor: "#veiculos", keyEs: "vehicles" },
  { anchor: "#importacao", keyEs: "import" },
  { anchor: "#servicos", keyEs: "services" },
  { anchor: "#sobre", keyEs: "about" },
  { anchor: "#contato", keyEs: "contact" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const rafRef = useRef<number | null>(null);

  // RAF-throttled scroll listener — avoids setState on every pixel
  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        rafRef.current = null;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-bg/92 backdrop-blur-lg border-b border-border/60 shadow-sm shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px] md:h-[96px]">

          {/* Logo */}
          <Link
            href={`/${locale}#inicio`}
            className="flex-shrink-0"
            aria-label="SG Automotive — Inicio"
          >
            <Logo size="sm" />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-7"
            aria-label="Navegación principal"
          >
            {NAV_LINKS.map(({ anchor, keyEs }) => (
              <a
                key={anchor}
                href={anchor}
                className="text-sm text-muted hover:text-fg transition-colors leading-none py-1"
              >
                {t(keyEs)}
              </a>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-5">
            <LocaleSwitcher />
            <a
              href="#contato"
              className="text-sm font-semibold px-4 py-2 rounded-md bg-accent text-bg hover:bg-accent-light transition-colors"
            >
              {t("cta")}
            </a>
          </div>

          {/* Mobile: locale + burger */}
          <div className="flex md:hidden items-center gap-3">
            <LocaleSwitcher />
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="p-1.5 text-muted hover:text-fg transition-colors"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu — CSS grid trick for height: 0 → auto, zero JS animation */}
      <div
        className="md:hidden bg-bg/96 backdrop-blur-lg border-b border-border grid transition-[grid-template-rows] duration-[220ms] ease-in-out"
        style={{ gridTemplateRows: mobileOpen ? "1fr" : "0fr" }}
        aria-hidden={!mobileOpen}
      >
        <div className="overflow-hidden">
          <nav
            className="px-4 py-3 flex flex-col"
            aria-label="Menú móvil"
          >
            {NAV_LINKS.map(({ anchor, keyEs }) => (
              <a
                key={anchor}
                href={anchor}
                onClick={() => setMobileOpen(false)}
                className="text-sm py-3.5 text-muted hover:text-fg border-b border-border/40 last:border-0 transition-colors"
              >
                {t(keyEs)}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setMobileOpen(false)}
              className="mt-4 mb-1 text-sm font-semibold px-4 py-3 rounded-lg bg-accent text-bg text-center hover:bg-accent-light transition-colors"
            >
              {t("cta")}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
