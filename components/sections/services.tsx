import { getTranslations } from "next-intl/server";
import { Car, Search, Ship, FileText, Truck, ShieldCheck } from "lucide-react";
import type { ElementType } from "react";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/animate";

const ICONS: Record<string, ElementType> = {
  car: Car,
  search: Search,
  ship: Ship,
  "file-text": FileText,
  truck: Truck,
  "shield-check": ShieldCheck,
};

export async function Services() {
  const t = await getTranslations("services");

  const items = t.raw("items") as Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  return (
    <section className="py-16 md:py-24 bg-bg" id="servicos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-fg mb-4">
            {t("title")}
          </h2>
          <p className="text-muted text-lg">{t("subtitle")}</p>
        </FadeUp>

        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => {
            const Icon = ICONS[item.icon] ?? Car;
            return (
              <StaggerItem key={item.title}>
                <div className="group p-6 bg-surface border border-border rounded-xl hover:border-accent/30 transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <h3 className="font-semibold text-fg mb-2">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </div>
    </section>
  );
}
