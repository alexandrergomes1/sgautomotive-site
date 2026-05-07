// Server Component — no animations, no Framer Motion.
import { CheckCircle, ArrowRight } from "lucide-react";
import type { SiteContent } from "@/data/site-content";

interface ImportSectionProps {
  importSection: SiteContent["importSection"];
  waImport: string;
}

export function ImportSection({ importSection, waImport }: ImportSectionProps) {
  return (
    <section id="importacao" className="py-16 md:py-24 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-medium tracking-widest uppercase mb-6">
          {importSection.badge}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-fg mb-4 leading-tight">
              {importSection.title}
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              {importSection.subtitle}
            </p>

            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-2 mb-5">
              {importSection.includedTitle}
            </h3>
            <ul className="space-y-3 mb-8">
              {importSection.included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted">
                  <CheckCircle
                    size={16}
                    className="text-accent mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={waImport}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-accent text-bg font-semibold text-sm hover:bg-accent-light transition-colors"
            >
              {importSection.cta}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>

          {/* Right — steps */}
          <div className="flex flex-col gap-5">
            {importSection.steps.map((step) => (
              <div
                key={step.number}
                className="flex gap-5 p-5 bg-bg border border-border rounded-xl hover:border-accent/30 hover:-translate-y-0.5 hover:shadow-md hover:shadow-accent/5 transition-all duration-300"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold text-xs">{step.number}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-fg mb-1">{step.title}</h4>
                  <p className="text-muted text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
