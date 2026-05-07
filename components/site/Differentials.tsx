// Server Component — no animations, no Framer Motion.
import { BarChart2, Eye, Shield, Globe, Wifi, MapPin } from "lucide-react";
import type { ElementType } from "react";
import type { SiteContent } from "@/data/site-content";

const ICONS: Record<string, ElementType> = {
  "bar-chart-2": BarChart2,
  eye: Eye,
  shield: Shield,
  globe: Globe,
  wifi: Wifi,
  "map-pin": MapPin,
};

interface DifferentialsProps {
  differentials: SiteContent["differentials"];
}

export function Differentials({ differentials }: DifferentialsProps) {
  return (
    <section id="diferenciais" className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-fg mb-4">
            {differentials.title}
          </h2>
          <p className="text-muted text-lg">{differentials.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.items.map((item) => {
            const Icon = ICONS[item.icon] ?? Globe;
            return (
              <div
                key={item.title}
                className="flex gap-4 p-5 rounded-xl bg-bg border border-border hover:border-accent/30 hover:-translate-y-1 hover:shadow-md hover:shadow-accent/5 transition-all duration-300 h-full"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={16} className="text-accent" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-fg text-sm mb-1.5">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
