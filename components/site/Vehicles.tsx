// Server Component — renders all available vehicles server-side.
// CSS-only photo carousel via VehicleImageCarousel. No client JS.
import { availableCars } from "@/data/cars";
import {
  buildVehicleWaHref,
  type SiteContent,
  type Locale,
} from "@/data/site-content";
import { formatKm } from "@/lib/utils";
import { VehicleCard } from "@/components/site/VehicleCard";

interface VehiclesProps {
  locale: Locale;
  vehicles: SiteContent["vehicles"];
}

function gridClass(n: number): string {
  if (n === 1) return "max-w-md";
  if (n === 2) return "sm:grid-cols-2 max-w-2xl";
  return "sm:grid-cols-2 lg:grid-cols-3";
}

export function Vehicles({ locale, vehicles }: VehiclesProps) {
  const cars = availableCars;

  return (
    <section id="veiculos" className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-fg mb-3">
            {vehicles.title}
          </h2>
          <p className="text-muted">{vehicles.subtitle}</p>
        </div>

        {cars.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-border rounded-2xl">
            <p className="text-muted text-sm">{vehicles.empty}</p>
          </div>
        ) : (
          <div className={`grid grid-cols-1 gap-5 ${gridClass(cars.length)}`}>
            {cars.map((car) => (
              <VehicleCard
                key={car.id}
                car={car}
                locale={locale}
                waHref={buildVehicleWaHref(car, formatKm(car.km, locale), locale)}
                ctaLabel={vehicles.contactVehicle}
                fuelLabel={vehicles.fuel[car.fuel] ?? car.fuel}
                transmissionLabel={
                  vehicles.transmission[car.transmission] ?? car.transmission
                }
                tagLabels={vehicles.tagLabels}
                tagColors={vehicles.tagColors}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
