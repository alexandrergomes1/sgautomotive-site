"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function HowItWorks() {
  const t = useTranslations("how_it_works");

  const steps = t.raw("steps") as Array<{
    number: string;
    title: string;
    description: string;
  }>;

  return (
    <section className="py-24 md:py-32 bg-bg" id="como-funciona">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-fg mb-4">
            {t("title")}
          </h2>
          <p className="text-muted text-lg">{t("subtitle")}</p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-8 left-[calc(10%+2rem)] right-[calc(10%+2rem)] h-px bg-gradient-to-r from-transparent via-border to-transparent"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" }}
                className="flex flex-col items-center text-center"
              >
                {/* Step number */}
                <div className="relative mb-5">
                  <div className="w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center text-accent font-bold text-xl relative z-10">
                    {step.number}
                  </div>
                </div>
                {/* Content */}
                <h3 className="font-semibold text-fg mb-2">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
