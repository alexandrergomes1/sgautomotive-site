import type { MetadataRoute } from "next";

const SITE_URL = "https://sgautomotive.es";
const LOCALES = ["es", "en", "pt"] as const;
type Locale = (typeof LOCALES)[number];

// Legal pages have locale-specific paths
const LEGAL_PATHS: Record<string, Record<Locale, string>> = {
  privacy: { es: "/privacidad", en: "/privacy",    pt: "/privacidade" },
  terms:   { es: "/terminos",   en: "/terms",       pt: "/termos" },
};

function localeUrl(locale: string, path: string) {
  return `${SITE_URL}/${locale}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Main locale pages
  for (const locale of LOCALES) {
    entries.push({
      url: localeUrl(locale, ""),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          ...Object.fromEntries(LOCALES.map((l) => [l, localeUrl(l, "")])),
          "x-default": localeUrl("es", ""),
        },
      },
    });
  }

  // Legal pages — each locale has a different path
  for (const [, pathsByLocale] of Object.entries(LEGAL_PATHS)) {
    for (const locale of LOCALES) {
      const path = pathsByLocale[locale];
      entries.push({
        url: localeUrl(locale, path),
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.3,
        alternates: {
          languages: {
            ...Object.fromEntries(
              LOCALES.map((l) => [l, localeUrl(l, pathsByLocale[l])])
            ),
            "x-default": localeUrl("es", pathsByLocale["es"]),
          },
        },
      });
    }
  }

  return entries;
}
