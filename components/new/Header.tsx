// Server Component — zero JS cost. No scroll listener, no state, no provider.
// Background is always visible (no transparent → opaque transition).
// Only the mobile hamburger panel is a client island (MobileMenu.client.tsx).

import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/new/MobileMenu.client";
import { nav } from "@/data/site-content";

const LOCALE_LINKS = [
  { href: "/es", label: "ES" },
  { href: "/en", label: "EN" },
  { href: "/pt", label: "PT" },
] as const;

export function Header() {
  const navItems = nav.links.map((l) => ({ anchor: l.anchor, label: l.label }));

  return (
    // position:fixed is also the containing block for the absolute MobileMenu panel
    <header className="fixed top-0 left-0 right-0 z-40 bg-bg/92 backdrop-blur-lg border-b border-border/60 shadow-sm shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px] md:h-[96px]">

          {/* Logo */}
          <a href="#inicio" className="flex-shrink-0" aria-label="SG Automotive — Inicio">
            <Logo size="sm" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Navegación principal">
            {nav.links.map(({ anchor, label }) => (
              <a
                key={anchor}
                href={anchor}
                className="text-sm text-muted hover:text-fg transition-colors leading-none py-1"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop right: locale switcher + CTA */}
          <div className="hidden md:flex items-center gap-5">
            <div className="flex items-center gap-2 text-sm font-semibold tracking-widest uppercase">
              {LOCALE_LINKS.map(({ href, label }, i) => (
                <span key={label} className="flex items-center gap-2">
                  {i > 0 && <span className="text-border-light select-none">|</span>}
                  <a href={href} className="text-muted hover:text-fg transition-colors">
                    {label}
                  </a>
                </span>
              ))}
            </div>
            <a
              href="#contato"
              className="text-sm font-semibold px-4 py-2 rounded-md bg-accent text-bg hover:bg-accent-light transition-colors"
            >
              {nav.cta}
            </a>
          </div>

          {/* Mobile: locale links + burger */}
          <div className="flex md:hidden items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase">
              {LOCALE_LINKS.map(({ href, label }, i) => (
                <span key={label} className="flex items-center gap-1.5">
                  {i > 0 && <span className="text-border-light select-none">|</span>}
                  <a href={href} className="text-muted hover:text-fg transition-colors">
                    {label}
                  </a>
                </span>
              ))}
            </div>
            <MobileMenu navItems={navItems} ctaLabel={nav.cta} />
          </div>

        </div>
      </div>
    </header>
  );
}
