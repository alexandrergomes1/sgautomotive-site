// Server Component — zero JS.
// Mobile nav is handled by the isolated MobileMenu.client.tsx child.
// Only the MobileMenu subtree is a Client Component; this file is Server.
// Desktop locale switcher: CSS-only <details>/<summary> dropdown.

import { ChevronDown } from "lucide-react";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/site/MobileMenu.client";
import type { SiteContent, Locale } from "@/data/site-content";

const LOCALE_LINKS: {
  locale: Locale;
  href: string;
  label: string;
  name: string;
}[] = [
  { locale: "es", href: "/es", label: "ES", name: "Español" },
  { locale: "en", href: "/en", label: "EN", name: "English" },
  { locale: "pt", href: "/pt", label: "PT", name: "Português" },
];

interface HeaderProps {
  locale: Locale;
  navigation: SiteContent["navigation"];
  whatsapp: SiteContent["whatsapp"];
}

export function Header({ locale, navigation, whatsapp }: HeaderProps) {
  const currentLocale = LOCALE_LINKS.find((l) => l.locale === locale);

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

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">

            {/* Desktop locale dropdown — CSS-only <details>, Server Component */}
            <details className="relative hidden md:flex group" aria-label="Language">
              <summary className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest cursor-pointer select-none text-accent hover:text-accent-light transition-colors">
                {currentLocale?.label ?? locale.toUpperCase()}
                <ChevronDown
                  size={12}
                  className="transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>

              {/* Dropdown panel */}
              <div className="absolute right-0 top-full mt-3 w-38 bg-surface border border-border rounded-xl shadow-2xl shadow-black/40 overflow-hidden z-50 py-1.5">
                {LOCALE_LINKS.map(({ locale: l, href, name }) => (
                  <a
                    key={l}
                    href={href}
                    className={`flex items-center justify-between px-4 py-2.5 text-sm transition-colors hover:bg-surface-2 ${
                      locale === l
                        ? "text-accent font-semibold"
                        : "text-muted hover:text-fg"
                    }`}
                  >
                    {name}
                    {locale === l && (
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"
                        aria-hidden="true"
                      />
                    )}
                  </a>
                ))}
              </div>
            </details>

            {/* WhatsApp CTA — desktop only */}
            <a
              href={whatsapp.consult}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex text-sm font-semibold px-4 py-2 rounded-md bg-accent text-bg hover:bg-accent-light hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 whitespace-nowrap"
            >
              {navigation.cta}
            </a>

            {/* Mobile menu — hamburger + panel (Client Component) */}
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
