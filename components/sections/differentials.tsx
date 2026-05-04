import { getTranslations } from "next-intl/server";
import { BarChart2, Eye, Shield, Globe, Wifi, MapPin } from "lucide-react";
import type { ElementType } from "react";
import { FadeUp, AnimateItem } from "@/components/ui/animate";

const ICONS: Record<string, ElementType> = {
  "bar-chart-2": BarChart2,
  eye: Eye,
  shield: Shield,
  globe: Globe,
  wifi: Wifi,
  "map-pin": MapPin,
};

export async function Differentials() {
  const t = await getTranslations("differentials");

  const items = t.raw("items") as Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  return (
    <section className="py-16 md:py-24 bg-surface" id="diferenciais">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-fg mb-4">
            {t("title")}
          </h2>
          <p className="text-muted text-lg">{t("subtitle")}</p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = ICONS[item.icon] ?? Globe;
            return (
              <AnimateItem key={item.title} delay={i * 0.07}>
                <div className="flex gap-4 p-5 rounded-xl bg-bg border border-border hover:border-border-light transition-colors h-full">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={16} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-fg text-sm mb-1.5">{item.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </AnimateItem>
            );
          })}
        </div>
      </div>
    </section>
  );
}
