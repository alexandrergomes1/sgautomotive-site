// Server Component — zero client JS.
// Single next/image per car (no carousel), loading="lazy" for all.
// Vehicle card is inlined here so there is no "use client" dependency.

import Image from "next/image";
import { Calendar, Fuel, Gauge, Zap } from "lucide-react";
import { availableCars } from "@/data/cars";
import { vehiclesContent, WHATSAPP_NUMBER } from "@/data/site-content";
import { formatKm, formatPrice } from "@/lib/utils";

const WA_BASE = `https://wa.me/${WHATSAPP_NUMBER}?text=`;

function buildWaMessage(car: (typeof availableCars)[number]): string {
  return encodeURIComponent(
    `Hola, me interesa el ${car.make} ${car.model} ${car.version} (${car.year}, ${formatKm(car.km)}) — ref: ${car.id}. ¿Podéis darme más información?`
  );
}

const gridClass = (n: number) =>
  n === 1
    ? "sm:grid-cols-1 max-w-md"
    : n === 2
    ? "sm:grid-cols-2 max-w-2xl"
    : "sm:grid-cols-2 lg:grid-cols-3";

export function Vehicles() {
  const cars = availableCars;

  return (
    <section className="py-16 md:py-24 bg-surface" id="veiculos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-fg mb-3">
            {vehiclesContent.title}
          </h2>
          <p className="text-muted">{vehiclesContent.subtitle}</p>
        </div>

        {cars.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-border rounded-2xl">
            <p className="text-muted text-sm">{vehiclesContent.empty}</p>
          </div>
        ) : (
          <div className={`grid grid-cols-1 gap-5 ${gridClass(cars.length)}`}>
            {cars.map((car) => {
              const waHref = `${WA_BASE}${buildWaMessage(car)}`;
              const alt = `${car.make} ${car.model} ${car.version} ${car.year}`;
              const fuelLabel = vehiclesContent.fuel[car.fuel] ?? car.fuel;
              const transmissionLabel =
                vehiclesContent.transmission[car.transmission] ?? car.transmission;

              return (
                <article
                  key={car.id}
                  className="group bg-surface border border-border rounded-xl overflow-hidden hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 flex flex-col flex-1"
                >
                  {/* Image — single next/image, no carousel */}
                  <div className="relative aspect-[16/10] shrink-0">
                    {car.tags.length > 0 && (
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                        {car.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border backdrop-blur-sm ${
                              vehiclesContent.tagColors[tag] ?? ""
                            }`}
                          >
                            {vehiclesContent.tagLabels[tag] ?? tag}
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
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Card body */}
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
                        <span>
                          {car.power} cv · {transmissionLabel}
                        </span>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <a
                        href={waHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full text-center text-sm font-medium py-2.5 rounded-lg border border-accent/40 text-accent hover:bg-accent hover:text-bg hover:border-accent transition-all duration-200"
                      >
                        {vehiclesContent.contactVehicle}
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
