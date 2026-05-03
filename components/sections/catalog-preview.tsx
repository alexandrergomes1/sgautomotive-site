"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { VehicleCard } from "@/components/vehicle-card";
import { featuredCars } from "@/data/cars";

export function CatalogPreview() {
  const t = useTranslations("catalog");

  return (
    <section className="py-16 md:py-24 bg-surface" id="veiculos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-fg mb-3">
              {t("title")}
            </h2>
            <p className="text-muted max-w-xl">{t("subtitle")}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="#contato"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-light font-medium transition-colors whitespace-nowrap"
            >
              {t("view_all")}
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5">
          {featuredCars.map((car, i) => (
            <VehicleCard key={car.id} car={car} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
