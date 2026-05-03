"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  const t = useTranslations("about");
  const locale = useLocale();

  const stats = t.raw("stats") as Array<{ value: string; label: string }>;

  return (
    <section className="py-24 md:py-32 bg-bg" id="sobre">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-fg mb-4">
              {t("title")}
            </h2>
            <p className="text-lg text-muted-2 font-medium mb-6">
              {t("subtitle")}
            </p>
            <p className="text-muted leading-relaxed mb-4">{t("body")}</p>
            <p className="text-muted leading-relaxed mb-8">{t("body_2")}</p>
            <Link
              href={`/${locale}/sobre`}
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors"
            >
              {locale === "es" ? "Conoce más sobre nosotros" : "Learn more about us"}
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="p-6 bg-surface border border-border rounded-xl"
              >
                <div className="text-2xl font-bold text-accent mb-1.5">
                  {stat.value}
                </div>
                <div className="text-sm text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
