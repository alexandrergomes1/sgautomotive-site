// Server Component — no animations, no Framer Motion.
import type { SiteContent } from "@/data/site-content";

interface HowItWorksProps {
  howItWorks: SiteContent["howItWorks"];
}

export function HowItWorks({ howItWorks }: HowItWorksProps) {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-fg mb-4">
            {howItWorks.title}
          </h2>
          <p className="text-muted text-lg">{howItWorks.subtitle}</p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {howItWorks.steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center text-accent font-bold text-xl mb-5 group-hover:border-accent/40 group-hover:bg-surface-2 transition-colors duration-200">
                  {step.number}
                </div>
                <h3 className="font-semibold text-fg mb-2">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
