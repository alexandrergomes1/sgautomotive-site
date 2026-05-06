import { getTranslations } from "next-intl/server";
import { ArrowRight, MapPin, Wifi, Languages } from "lucide-react";

export async function Hero() {
  const t = await getTranslations("hero");

  const trustItems = [
    { icon: Wifi, label: t("trust_1") },
    { icon: Languages, label: t("trust_2") },
    { icon: MapPin, label: t("trust_3") },
  ];

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-bg pt-[72px] md:pt-[96px]"
      id="inicio"
    >
      {/* Background gradient */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-accent/4 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-trust/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl">

          {/* Badge — lightweight CSS fade, no impact on LCP */}
          <div className="hero-secondary hero-d0 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-medium tracking-widest uppercase mb-8">
            <MapPin size={11} />
            {t("badge")}
          </div>

          {/* h1 — LCP element: renders immediately, zero animation delay, zero opacity trick */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-fg leading-[1.08] tracking-tight mb-6">
            {t("title")}
          </h1>

          {/* Subtitle */}
          <p className="hero-secondary hero-d1 text-lg sm:text-xl text-muted leading-relaxed max-w-2xl mb-10">
            {t("subtitle")}
          </p>

          {/* CTAs */}
          <div className="hero-secondary hero-d2 flex flex-col sm:flex-row gap-3 mb-16">
            <a
              href="#veiculos"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-accent text-bg font-semibold text-sm hover:bg-accent-light transition-colors"
            >
              {t("cta_vehicles")}
              <ArrowRight size={16} />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-border-light text-fg text-sm font-medium hover:border-accent/50 hover:text-accent transition-colors"
            >
              {t("cta_consult")}
            </a>
          </div>

          {/* Trust indicators */}
          <div className="hero-secondary hero-d3 flex flex-col sm:flex-row gap-4 sm:gap-8">
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-xs text-muted">
                <span className="w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <Icon size={10} className="text-accent" />
                </span>
                {label}
              </div>
            ))}
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
