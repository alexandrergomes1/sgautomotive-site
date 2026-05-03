"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
  const t = useTranslations("faq");
  const [open, setOpen] = useState<number | null>(null);

  const items = t.raw("items") as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <section className="py-24 md:py-32 bg-surface" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-fg mb-4">
            {t("title")}
          </h2>
          <p className="text-muted">{t("subtitle")}</p>
        </motion.div>

        {/* Items */}
        <div className="divide-y divide-border">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
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

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-sm text-muted leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
