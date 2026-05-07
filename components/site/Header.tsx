// Server Component — zero JS.
// Mobile nav is handled by the isolated MobileMenu.client.tsx child.
// Only the MobileMenu subtree is a Client Component; this file is Server.
// Locale switcher: LanguageSwitcher Server Component (Globe icon, always visible).

import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/site/MobileMenu.client";
import { LanguageSwitcher } from "@/components/site/LanguageSwitcher";
import type { SiteContent, Locale } from "@/data/site-content";

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

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">

            {/* Language switcher — Globe icon, always visible (mobile + desktop) */}
            <LanguageSwitcher locale={locale} />

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
              navigation={navigation}
              whatsapp={whatsapp}
            />
          </div>

        </div>
      </div>
    </header>
  );
}
