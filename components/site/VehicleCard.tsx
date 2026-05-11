// Server Component — CSS-only carousel (VehicleImageCarousel), no client JS.
// Receives pre-built waHref so no locale logic lives here.

import { Calendar, Fuel, Gauge, Zap, ChevronRight } from "lucide-react";
import type { Car } from "@/data/cars";
import { formatKm, formatPrice } from "@/lib/utils";
import { VehicleImageCarousel } from "@/components/site/VehicleImageCarousel";

interface VehicleCardProps {
  car: Car;
  waHref: string;
  ctaLabel: string;
  fuelLabel: string;
  transmissionLabel: string;
  highlightsLabel: string;
  tagLabels: Record<string, string>;
  tagColors: Record<string, string>;
  locale: string;
}

export function VehicleCard({
  car,
  waHref,
  ctaLabel,
  fuelLabel,
  transmissionLabel,
  highlightsLabel,
  tagLabels,
  tagColors,
  locale,
}: VehicleCardProps) {
  const alt = `${car.make} ${car.model} ${car.version} ${car.year}`;

  return (
    <article className="group bg-surface border border-border rounded-xl overflow-hidden hover:border-accent/40 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 flex flex-col">
      {/* CSS-only photo carousel */}
      <VehicleImageCarousel
        car={car}
        tagLabels={tagLabels}
        tagColors={tagColors}
        priceFormatted={formatPrice(car.price, locale)}
        alt={alt}
      />

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
            <span>{formatKm(car.km, locale)}</span>
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

        {/* Expandable highlights — native <details>, CSS-only, zero JS */}
        {car.highlights && car.highlights.length > 0 && (
          <details className="vehicle-highlights mb-4">
            <summary>
              <ChevronRight size={13} className="chevron" aria-hidden="true" />
              {highlightsLabel}
            </summary>
            <ul>
              {car.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </details>
        )}

        <div className="mt-auto">
          {/* Primary CTA */}
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full text-center text-sm font-semibold py-2.5 rounded-lg bg-accent text-bg hover:bg-accent-light hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </article>
  );
}
