// Server Component — single next/image, no carousel, no client JS.
// Receives pre-built waHref/waPhotosHref so no locale logic lives here.

import Image from "next/image";
import { Calendar, Fuel, Gauge, Zap, Camera } from "lucide-react";
import type { Car } from "@/data/cars";
import { formatKm, formatPrice } from "@/lib/utils";

interface VehicleCardProps {
  car: Car;
  waHref: string;
  waPhotosHref: string;
  ctaLabel: string;
  photosLabel: string;
  fuelLabel: string;
  transmissionLabel: string;
  tagLabels: Record<string, string>;
  tagColors: Record<string, string>;
}

export function VehicleCard({
  car,
  waHref,
  waPhotosHref,
  ctaLabel,
  photosLabel,
  fuelLabel,
  transmissionLabel,
  tagLabels,
  tagColors,
}: VehicleCardProps) {
  const alt = `${car.make} ${car.model} ${car.version} ${car.year}`;

  return (
    <article className="group bg-surface border border-border rounded-xl overflow-hidden hover:border-accent/40 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 flex flex-col">
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
          <span className="text-accent font-bold text-base">
            {formatPrice(car.price)}
          </span>
        </div>
        <Image
          src={car.images[0]}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
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
          <p className="text-muted text-xs leading-relaxed mb-3">
            {car.description}
          </p>
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
            <span>
              {car.power} cv · {transmissionLabel}
            </span>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-2">
          {/* Primary CTA */}
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full text-center text-sm font-semibold py-2.5 rounded-lg bg-accent text-bg hover:bg-accent-light transition-colors duration-200"
          >
            {ctaLabel}
          </a>

          {/* Secondary — photos request */}
          <a
            href={waPhotosHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 w-full text-center text-xs font-medium py-2 rounded-lg border border-border text-muted hover:border-accent/30 hover:text-fg transition-colors duration-200"
          >
            <Camera size={12} aria-hidden="true" />
            {photosLabel}
          </a>
        </div>
      </div>
    </article>
  );
}
