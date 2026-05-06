import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const SITE_URL = "https://sgautomotive.com";
const DEFAULT_LOCALE = routing.defaultLocale; // "es"

// Single-page site — all content lives on the root or /{locale}
// With localePrefix:"as-needed", the default locale (es) is served at /
const routes = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
];

function localeUrl(locale: string, path: string) {
  if (locale === DEFAULT_LOCALE) {
    // Default locale has no prefix — canonical is the root URL
    return `${SITE_URL}${path || "/"}`;
  }
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
