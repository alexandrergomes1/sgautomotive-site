// Server Component — zero JS. Uses native <details>/<summary>.
// name="faq-sg" enables exclusive accordion: only one item open at a time.
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
          <h2 className="text-3xl sm:text-4xl font-bold text-fg mb-4">
            {faq.title}
          </h2>
          <p className="text-muted text-lg">{faq.subtitle}</p>
        </div>

        <div className="flex flex-col gap-2">
          {faq.items.map((item, i) => (
            <details
              key={i}
              // name groups items — browser closes others when one opens (exclusive accordion)
              name="faq-sg"
              className="group rounded-lg border border-border bg-bg open:border-accent/30 open:bg-surface-2/60 hover:border-accent/25 transition-colors duration-200"
            >
              <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none select-none leading-snug hover:text-accent transition-colors duration-200">
                <span className="font-medium text-fg text-sm group-open:text-accent transition-colors duration-200">
                  {item.question}
                </span>
                <ChevronDown
                  size={16}
                  className="text-muted shrink-0 transition-transform duration-200 group-open:rotate-180 group-open:text-accent"
                  aria-hidden="true"
                />
              </summary>

              {/* Separator + answer */}
              <div className="border-t border-border/60 mx-5" aria-hidden="true" />
              <div className="px-5 pt-4 pb-5">
                <p className="text-muted text-sm leading-relaxed">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
