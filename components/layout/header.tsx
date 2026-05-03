"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LocaleSwitcher } from "@/components/locale-switcher";

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: `/${locale}/veiculos`, label: t("vehicles") },
    { href: `/${locale}/importacao`, label: t("import") },
    { href: `/${locale}/servicos`, label: t("services") },
    { href: `/${locale}/sobre`, label: t("about") },
    { href: `/${locale}/contato`, label: t("contact") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 group"
            aria-label="SG Automotive — Home"
          >
            <span className="text-lg font-bold tracking-tight text-fg">
              SG{" "}
              <span className="text-accent">Automotive</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-fg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-4">
            <LocaleSwitcher />
            <Link
              href={`/${locale}/contato`}
              className="text-sm font-medium px-4 py-2 rounded-md bg-accent text-bg hover:bg-accent-light transition-colors"
            >
              {t("cta")}
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="flex md:hidden items-center gap-3">
            <LocaleSwitcher />
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="text-muted hover:text-fg p-1"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-surface/95 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <nav className="px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm py-3 text-muted hover:text-fg border-b border-border/50 last:border-0 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={`/${locale}/contato`}
                onClick={() => setMobileOpen(false)}
                className="mt-3 text-sm font-medium px-4 py-2.5 rounded-md bg-accent text-bg text-center hover:bg-accent-light transition-colors"
              >
                {t("cta")}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
