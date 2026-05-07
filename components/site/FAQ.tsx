// Server Component — zero JS. Uses native <details>/<summary>.
import { ChevronDown } from "lucide-react";
import type { SiteContent } from "@/data/site-content";

interface FAQProps {
  faq: SiteContent["faq"];
}

export function FAQ({ faq }: FAQProps) {
  return (
    <section id="faq" className="py-16 md:py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-fg mb-4">{faq.title}</h2>
          <p className="text-muted text-lg">{faq.subtitle}</p>
        </div>

        <div className="flex flex-col gap-3">
          {faq.items.map((item, i) => (
            <details
              key={i}
              className="group rounded-xl border border-border bg-bg open:border-accent/30 transition-colors duration-200"
            >
              <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none select-none text-fg font-medium text-sm leading-snug hover:text-accent transition-colors duration-200">
                <span>{item.question}</span>
                <ChevronDown
                  size={16}
                  className="text-muted shrink-0 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <div className="px-5 pb-5 pt-1">
                <p className="text-muted text-sm leading-relaxed">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
