// Server Component — zero JS. No scroll listener, no useState, no useEffect.
// No mobile hamburger in this baseline (spec: simplicity over features).
// Responsive via CSS: nav links hidden on mobile, logo + lang + CTA visible.
// Current locale is highlighted in the locale switcher via static prop.

import { Logo } from "@/components/logo";
import type { SiteContent, Locale } from "@/data/site-content";

const LOCALE_LINKS: { locale: Locale; href: string; label: string }[] = [
  { locale: "es", href: "/es", label: "ES" },
  { locale: "en", href: "/en", label: "EN" },
  { locale: "pt", href: "/pt", label: "PT" },
];

interface HeaderProps {
  locale: Locale;
  navigation: SiteContent["navigation"];
  whatsapp: SiteContent["whatsapp"];
}

export function Header({ locale, navigation, whatsapp }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-bg/92 backdrop-blur-md border-b border-border/60 shadow-sm shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <a href="#inicio" className="flex-shrink-0" aria-label="SG Automotive">
            <Logo size="sm" />
          </a>

          {/* Desktop nav — hidden on mobile */}
          <nav
            className="hidden md:flex items-center gap-7"
            aria-label="Main navigation"
          >
            {navigation.links.map(({ anchor, label }) => (
              <a
                key={anchor}
                href={anchor}
                className="text-sm text-muted hover:text-fg transition-colors leading-none py-1"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Right side: locale switcher + CTA */}
          <div className="flex items-center gap-3 md:gap-5">
            {/* Locale switcher */}
            <div
              className="flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase"
              aria-label="Language"
            >
              {LOCALE_LINKS.map(({ locale: l, href, label }, i) => (
                <span key={l} className="flex items-center gap-1.5">
                  {i > 0 && (
                    <span className="text-border-light select-none" aria-hidden="true">
                      |
                    </span>
                  )}
                  <a
                    href={href}
                    aria-current={locale === l ? "page" : undefined}
                    className={`transition-colors ${
                      locale === l
                        ? "text-accent font-bold"
                        : "text-muted hover:text-fg"
                    }`}
                  >
                    {label}
                  </a>
                </span>
              ))}
            </div>

            {/* WhatsApp CTA — hidden on smallest mobile */}
            <a
              href={whatsapp.consult}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex text-sm font-semibold px-4 py-2 rounded-md bg-accent text-bg hover:bg-accent-light transition-colors whitespace-nowrap"
            >
              {navigation.cta}
            </a>
          </div>

        </div>
      </div>

      {/* Mobile nav row — shows anchor links compactly below the top bar */}
      <nav
        className="md:hidden border-t border-border/40 overflow-x-auto"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center gap-0 px-4 py-0">
          {navigation.links.map(({ anchor, label }) => (
            <a
              key={anchor}
              href={anchor}
              className="text-xs text-muted hover:text-fg transition-colors whitespace-nowrap px-3 py-2.5 shrink-0"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
