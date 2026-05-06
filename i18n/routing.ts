import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en", "pt"],
  defaultLocale: "es",
  // "as-needed": default locale (es) has no prefix → served at /
  // Other locales get explicit prefix → /en, /pt
  localePrefix: "as-needed",
  // Disable automatic Accept-Language / cookie detection.
  // Locale is determined ONLY by the URL prefix (or its absence).
  // Without this, navigating to "/" (ES) would be redirected to /en
  // based on the browser's Accept-Language header, making ES unselectable.
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
