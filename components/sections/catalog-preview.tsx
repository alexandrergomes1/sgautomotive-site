import { getTranslations } from "next-intl/server";
import { VehicleCard } from "@/components/vehicle-card";
import { availableCars } from "@/data/cars";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/animate";

export async function CatalogPreview() {
  const t = await getTranslations("catalog");

  const gridClass =
    availableCars.length === 1
      ? "sm:grid-cols-1 max-w-md"
      : availableCars.length === 2
      ? "sm:grid-cols-2 max-w-2xl"
      : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="py-16 md:py-24 bg-surface" id="veiculos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-fg mb-3">
            {t("title")}
          </h2>
          <p className="text-muted">{t("subtitle")}</p>
        </FadeUp>

        {availableCars.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-border rounded-2xl">
            <p className="text-muted text-sm">{t("empty")}</p>
          </div>
        ) : (
          <StaggerGrid className={`grid grid-cols-1 gap-5 ${gridClass}`}>
            {availableCars.map((car, i) => (
              <StaggerItem key={car.id} className="flex flex-col">
                <VehicleCard car={car} index={i} />
              </StaggerItem>
            ))}
          </StaggerGrid>
        )}
      </div>
    </section>
  );
}
