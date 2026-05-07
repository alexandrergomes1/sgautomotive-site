"use client";

// Client-only accordion logic — receives translated strings as props.
// No useTranslations, no NextIntlClientProvider needed.
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-start justify-between gap-4 py-5 text-left group"
            aria-expanded={open === i}
          >
            <span
              className={`font-medium text-sm leading-relaxed transition-colors ${
                open === i ? "text-fg" : "text-muted-2 group-hover:text-fg"
              }`}
            >
              {item.question}
            </span>
            <span className="shrink-0 mt-0.5">
              {open === i ? (
                <Minus size={16} className="text-accent" />
              ) : (
                <Plus size={16} className="text-muted group-hover:text-accent transition-colors" />
              )}
            </span>
          </button>

          {/* CSS grid accordion — 0fr ↔ 1fr, zero JS animation */}
          <div
            className="grid transition-[grid-template-rows] duration-[250ms] ease-in-out"
            style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
          >
            <div className="overflow-hidden">
              <p className="pb-5 text-sm text-muted leading-relaxed">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
