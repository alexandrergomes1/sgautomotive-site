// Server Component — zero JS.
// Mobile nav is handled by the isolated MobileMenu.client.tsx child.
// Only the MobileMenu subtree is a Client Component; this file is Server.

import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/site/MobileMenu.client";
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

          {/* Right side: locale switcher + CTA (desktop) + hamburger (mobile) */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-5">

            {/* Locale switcher */}
            <div
              className="flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase"
              aria-label="Language"
            >
              {LOCALE_LINKS.map(({ locale: l, href, label }, i) => (
                <span key={l} className="flex items-center gap-1.5">
                  {i > 0 && (
                    <span
                      className="text-border-light select-none"
                      aria-hidden="true"
                    >
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

            {/* WhatsApp CTA — desktop only */}
            <a
              href={whatsapp.consult}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex text-sm font-semibold px-4 py-2 rounded-md bg-accent text-bg hover:bg-accent-light transition-colors whitespace-nowrap"
            >
              {navigation.cta}
            </a>

            {/* Mobile menu — renders hamburger button + panel (md:hidden internally) */}
            <MobileMenu
              locale={locale}
              navigation={navigation}
              whatsapp={whatsapp}
            />
          </div>

        </div>
      </div>
    </header>
  );
}
