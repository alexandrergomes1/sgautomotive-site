import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en", "pt"],
  defaultLocale: "es",
  // "always": every locale has explicit prefix → /es, /en, /pt
  // Eliminates middleware double-redirect when switching from /en → /es.
  // The static app/es/ route takes precedence over [locale] for /es.
  localePrefix: "always",
  // Disable automatic Accept-Language / cookie detection.
  // Locale is determined ONLY by the URL prefix (or its absence).
  // Without this, navigating to "/" (ES) would be redirected to /en
  // based on the browser's Accept-Language header, making ES unselectable.
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
