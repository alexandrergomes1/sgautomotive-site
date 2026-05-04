import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import { Fuel, Gauge, Calendar, Zap } from "lucide-react";
import { type Car } from "@/data/cars";
import { formatPrice, formatKm } from "@/lib/utils";

const WHATSAPP_NUMBER = "34662625953";

interface VehicleCardProps {
  car: Car;
  index?: number;
}

const tagColors: Record<string, string> = {
  "iva-recuperable": "bg-trust/15 text-trust-light border-trust/30",
  garantia: "bg-accent/15 text-accent border-accent/30",
  "pronto-entrega": "bg-blue-500/15 text-blue-400 border-blue-500/30",
};

export async function VehicleCard({ car, index = 0 }: VehicleCardProps) {
  const [t, locale] = await Promise.all([
    getTranslations("catalog"),
    getLocale(),
  ]);

  const fuelLabel = t(`fuel.${car.fuel}`);
  const transmissionLabel = t(`transmission.${car.transmission}`);

  const waMessage =
    locale === "es"
      ? `Hola, me interesa el ${car.make} ${car.model} ${car.version} (${car.year}, ${formatKm(car.km)}) — ref: ${car.id}. ¿Podéis darme más información?`
      : `Hello, I'm interested in the ${car.make} ${car.model} ${car.version} (${car.year}, ${formatKm(car.km)}) — ref: ${car.id}. Could you give me more information?`;

  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;

  return (
    <article className="group bg-surface border border-border rounded-xl overflow-hidden hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 flex flex-col flex-1">
      <div className="relative aspect-[16/9] overflow-hidden bg-surface-2 shrink-0">
        <Image
          src={car.image}
          alt={`${car.make} ${car.model} ${car.version} ${car.year}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={index === 0}
        />
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
        <div className="absolute bottom-3 right-3 bg-bg/90 backdrop-blur-sm border border-border/60 rounded-lg px-3 py-1.5">
          <span className="text-accent font-bold text-base">{formatPrice(car.price)}</span>
        </div>
      </div>

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

        <div className="mt-auto">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full text-center text-sm font-medium py-2.5 rounded-lg border border-accent/40 text-accent hover:bg-accent hover:text-bg hover:border-accent transition-all duration-200"
          >
            {t("contact_vehicle")}
          </a>
        </div>
      </div>
    </article>
  );
}
