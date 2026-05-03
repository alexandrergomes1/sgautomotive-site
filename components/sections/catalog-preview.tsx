"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { VehicleCard } from "@/components/vehicle-card";
import { availableCars } from "@/data/cars";

export function CatalogPreview() {
  const t = useTranslations("catalog");

  return (
    <section className="py-16 md:py-24 bg-surface" id="veiculos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-fg mb-3">
            {t("title")}
          </h2>
          <p className="text-muted">{t("subtitle")}</p>
        </motion.div>

        {availableCars.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-20 text-center border border-dashed border-border rounded-2xl"
          >
            <p className="text-muted text-sm">{t("empty")}</p>
          </motion.div>
        ) : (
          <div
            className={`grid grid-cols-1 gap-5 ${
              availableCars.length === 1
                ? "sm:grid-cols-1 max-w-md"
                : availableCars.length === 2
                ? "sm:grid-cols-2 max-w-2xl"
                : "sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {availableCars.map((car, i) => (
              <VehicleCard key={car.id} car={car} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
