import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const SITE_URL = "https://sgautomotive.com";

const routes = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/veiculos", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/importacao", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/servicos", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/sobre", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contato", priority: 0.75, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const route of routes) {
      entries.push({
        url: `${SITE_URL}/${locale}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((l) => [
              l,
              `${SITE_URL}/${l}${route.path}`,
            ])
          ),
        },
      });
    }
  }

  return entries;
}
