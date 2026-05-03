"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Fuel, Gauge, Calendar, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { type Car } from "@/data/cars";
import { formatPrice, formatKm } from "@/lib/utils";

interface VehicleCardProps {
  car: Car;
  index?: number;
}

const tagColors: Record<string, string> = {
  "iva-recuperable": "bg-trust/15 text-trust-light border-trust/30",
  garantia: "bg-accent/15 text-accent border-accent/30",
  "pronto-entrega": "bg-blue-500/15 text-blue-400 border-blue-500/30",
};

export function VehicleCard({ car, index = 0 }: VehicleCardProps) {
  const t = useTranslations("catalog");
  const locale = useLocale();

  const fuelLabel = t(`fuel.${car.fuel}`);
  const transmissionLabel = t(`transmission.${car.transmission}`);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      className="group bg-surface border border-border rounded-xl overflow-hidden hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-surface-2">
        <Image
          src={car.image}
          alt={`${car.make} ${car.model} ${car.version} ${car.year}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Tags overlay */}
        {car.tags.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {car.tags.map((tag) => (
              <span
                key={tag}
                className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border backdrop-blur-sm ${tagColors[tag]}`}
              >
                {t(`tags.${tag}`)}
              </span>
            ))}
          </div>
        )}
        {/* Price overlay */}
        <div className="absolute bottom-3 right-3 bg-bg/90 backdrop-blur-sm border border-border/60 rounded-lg px-3 py-1.5">
          <span className="text-accent font-bold text-base">
            {formatPrice(car.price)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <div className="mb-3">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-semibold text-fg text-base leading-tight">
                {car.make} {car.model}
              </h3>
              <p className="text-muted text-sm mt-0.5">{car.version}</p>
            </div>
            <span className="text-xs text-muted bg-surface-2 border border-border px-2 py-1 rounded-md shrink-0">
              {car.origin}
            </span>
          </div>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center gap-1.5 text-xs text-muted">
            <Calendar size={12} className="text-accent/70 shrink-0" />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted">
            <Gauge size={12} className="text-accent/70 shrink-0" />
            <span>{formatKm(car.km)}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted">
            <Fuel size={12} className="text-accent/70 shrink-0" />
            <span>{fuelLabel}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted">
            <Zap size={12} className="text-accent/70 shrink-0" />
            <span>{car.power} cv · {transmissionLabel}</span>
          </div>
        </div>

        {/* CTA */}
        <Link
          href={`/${locale}/contato?veiculo=${car.id}`}
          className="block w-full text-center text-sm font-medium py-2.5 rounded-lg border border-accent/40 text-accent hover:bg-accent hover:text-bg transition-all duration-200"
        >
          {t("contact_vehicle")}
        </Link>
      </div>
    </motion.article>
  );
}
