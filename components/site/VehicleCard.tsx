// Server Component — single next/image, no carousel, no client JS.
// Receives pre-built waHref so no locale logic lives here.

import Image from "next/image";
import { Calendar, Fuel, Gauge, Zap } from "lucide-react";
import type { Car } from "@/data/cars";
import { formatKm, formatPrice } from "@/lib/utils";

interface VehicleCardProps {
  car: Car;
  waHref: string;
  ctaLabel: string;
  fuelLabel: string;
  transmissionLabel: string;
  tagLabels: Record<string, string>;
  tagColors: Record<string, string>;
}

export function VehicleCard({
  car,
  waHref,
  ctaLabel,
  fuelLabel,
  transmissionLabel,
  tagLabels,
  tagColors,
}: VehicleCardProps) {
  const alt = `${car.make} ${car.model} ${car.version} ${car.year}`;

  return (
    <article className="group bg-surface border border-border rounded-xl overflow-hidden hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 flex flex-col">
      {/* Image */}
      <div className="relative aspect-[16/10] shrink-0">
        {car.tags.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
            {car.tags.map((tag) => (
              <span
                key={tag}
                className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border backdrop-blur-sm ${tagColors[tag] ?? ""}`}
              >
                {tagLabels[tag] ?? tag}
              </span>
            ))}
          </div>
        )}
        <div className="absolute bottom-3 right-3 bg-bg/90 backdrop-blur-sm border border-border/60 rounded-lg px-3 py-1.5 z-10">
          <span className="text-accent font-bold text-base">{formatPrice(car.price)}</span>
        </div>
        <Image
          src={car.images[0]}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          loading="lazy"
        />
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
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

        {car.description && (
          <p className="text-muted text-xs leading-relaxed mb-3">{car.description}</p>
        )}

        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center gap-1.5 text-xs text-muted">
            <Calendar size={12} className="text-accent/70 shrink-0" aria-hidden="true" />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted">
            <Gauge size={12} className="text-accent/70 shrink-0" aria-hidden="true" />
            <span>{formatKm(car.km)}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted">
            <Fuel size={12} className="text-accent/70 shrink-0" aria-hidden="true" />
            <span>{fuelLabel}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted">
            <Zap size={12} className="text-accent/70 shrink-0" aria-hidden="true" />
            <span>{car.power} cv · {transmissionLabel}</span>
          </div>
        </div>

        <div className="mt-auto">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full text-center text-sm font-medium py-2.5 rounded-lg border border-accent/40 text-accent hover:bg-accent hover:text-bg hover:border-accent transition-all duration-200"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </article>
  );
}
