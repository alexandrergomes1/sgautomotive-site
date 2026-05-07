import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const SITE_URL = "https://sgautomotive.com";

// Single-page site — all content lives on /{locale} (localePrefix:"always")
// Every locale has an explicit prefix: /es, /en, /pt
const routes = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
];

function localeUrl(locale: string, path: string) {
  return `${SITE_URL}/${locale}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const route of routes) {
      entries.push({
        url: localeUrl(locale, route.path),
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((l) => [l, localeUrl(l, route.path)])
          ),
        },
      });
    }
  }

  return entries;
}
