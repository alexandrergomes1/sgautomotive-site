// Server Component — renders immediately, zero animation.
// h1 is the LCP element: no opacity:0, no transform, no delay.
// Background: CSS radial-gradient — no blur blobs, no filter cost.
// No Framer Motion, no reveal classes, no hero-secondary CSS.

import { ArrowRight, MapPin, Wifi, Languages } from "lucide-react";
import type { SiteContent } from "@/data/site-content";

const TRUST_ICONS = [Wifi, Languages, MapPin] as const;

interface HeroProps {
  hero: SiteContent["hero"];
  whatsappConsult: string;
}

export function Hero({ hero, whatsappConsult }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-svh flex flex-col justify-center overflow-hidden bg-bg"
      style={{
        paddingTop: "calc(var(--header-h, 80px) + 1px)",
        background:
          "radial-gradient(ellipse 90% 55% at 50% -5%, color-mix(in srgb,#c8a96a 7%,transparent), transparent)," +
          "radial-gradient(ellipse 60% 40% at 100% 100%, color-mix(in srgb,#1f7a5a 5%,transparent), transparent)," +
          "#0b0f14",
      }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-medium tracking-widest uppercase mb-8">
            <MapPin size={11} aria-hidden="true" />
            {hero.badge}
          </div>

          {/* h1 — LCP element: visible immediately, no animation */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-fg leading-[1.08] tracking-tight mb-6">
            {hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-2xl mb-10">
            {hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-16">
            <a
              href="#veiculos"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-accent text-bg font-semibold text-sm hover:bg-accent-light transition-colors"
            >
              {hero.ctaVehicles}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href={whatsappConsult}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-border-light text-fg text-sm font-medium hover:border-accent/50 hover:text-accent transition-colors"
            >
              {hero.ctaConsult}
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            {hero.trust.map((label, i) => {
              const Icon = TRUST_ICONS[i];
              return (
                <div key={label} className="flex items-center gap-2 text-xs text-muted">
                  <span className="w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <Icon size={10} className="text-accent" aria-hidden="true" />
                  </span>
                  {label}
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent pointer-events-none"
      />
    </section>
  );
}
