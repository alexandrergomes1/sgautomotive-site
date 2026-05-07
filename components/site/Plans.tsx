// Server Component — no animations, no Framer Motion.
import { Check } from "lucide-react";
import type { SiteContent } from "@/data/site-content";

interface PlansProps {
  plans: SiteContent["plans"];
  waConsult: string;
}

export function Plans({ plans, waConsult }: PlansProps) {
  return (
    <section id="planos" className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-fg mb-4">{plans.title}</h2>
          <p className="text-muted text-lg">{plans.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.items.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-xl border p-7 transition-all duration-300 ${
                plan.featured
                  ? "border-accent bg-surface-2 shadow-xl shadow-accent/10"
                  : "border-border bg-surface hover:border-accent/30"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-bg text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {plans.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-fg mb-1">{plan.name}</h3>
                <p className="text-muted text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-2xl font-bold text-accent">{plan.price}</span>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-trust/15 border border-trust/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={9} className="text-trust-light" aria-hidden="true" />
                    </span>
                    <span className="text-sm text-muted-2">{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href={waConsult}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center text-sm font-semibold py-3 rounded-lg transition-all duration-200 ${
                  plan.featured
                    ? "bg-accent text-bg hover:bg-accent-light"
                    : "border border-accent/40 text-accent hover:bg-accent hover:text-bg"
                }`}
              >
                {plans.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
