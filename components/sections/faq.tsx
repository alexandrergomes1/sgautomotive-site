"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Plus, Minus } from "lucide-react";
import { FadeUp, AnimateItem } from "@/components/ui/animate";

export function FAQ() {
  const t = useTranslations("faq");
  const [open, setOpen] = useState<number | null>(null);

  const items = t.raw("items") as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <section className="py-16 md:py-24 bg-surface" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeUp className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-fg mb-4">
            {t("title")}
          </h2>
          <p className="text-muted">{t("subtitle")}</p>
        </FadeUp>

        {/* Items */}
        <div className="divide-y divide-border">
          {items.map((item, i) => (
            <AnimateItem key={i} delay={i * 0.04}>
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

              {/* CSS grid accordion — same visual as AnimatePresence, zero JS */}
              <div
                className="grid transition-[grid-template-rows] duration-[250ms] ease-in-out"
                style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="pb-5 text-sm text-muted leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </AnimateItem>
          ))}
        </div>
      </div>
    </section>
  );
}
