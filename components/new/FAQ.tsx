// Server Component — native <details>/<summary> accordion. Zero JS.
// CSS handles open/close via the `open` attribute + group-open variant.
// No React state, no Framer Motion, no hydration cost.
import { faq } from "@/data/site-content";

export function FAQ() {
  return (
    <section className="py-16 md:py-24 bg-surface" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-fg mb-4">{faq.title}</h2>
          <p className="text-muted">{faq.subtitle}</p>
        </div>

        <div className="flex flex-col gap-3">
          {faq.items.map(({ question, answer }) => (
            <details
              key={question}
              className="group bg-bg border border-border rounded-xl open:border-accent/30 transition-colors"
            >
              <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer select-none text-sm font-medium text-fg">
                {question}
                {/* Chevron — CSS rotate on open */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-accent/60 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <p className="px-5 pb-5 pt-1 text-sm text-muted leading-relaxed">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
