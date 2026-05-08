import type { MetadataRoute } from "next";

const SITE_URL = "https://sgautomotive.com";
const LOCALES = ["es", "en", "pt"] as const;

// Single-page site — all content on /{locale}
// Every locale has an explicit prefix: /es, /en, /pt
const routes = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
];

function localeUrl(locale: string, path: string) {
  return `${SITE_URL}/${locale}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const route of routes) {
      entries.push({
        url: localeUrl(locale, route.path),
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: {
            ...Object.fromEntries(
              LOCALES.map((l) => [l, localeUrl(l, route.path)])
            ),
            "x-default": localeUrl("es", route.path),
          },
        },
      });
    }
  }

  return entries;
}
