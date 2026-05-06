import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en", "pt"],
  defaultLocale: "es",
  // "as-needed": default locale (es) has no prefix → served at /
  // Other locales get explicit prefix → /en, /pt
  // This eliminates cookie/Accept-Language ambiguity for the primary market
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
