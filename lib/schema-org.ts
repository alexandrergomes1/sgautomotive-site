export const SITE_URL = "https://sgautomotive.com";
export const SITE_NAME = "SG Automotive";
export const SITE_PHONE = "+34 662 62 59 53";
export const SITE_EMAIL = "sgautomotive.es@gmail.com";
export const WHATSAPP_NUMBER = "34662625953";

export function buildLocalBusinessSchema(locale: string) {
  const isEs = locale === "es";
  return {
    "@context": "https://schema.org",
    "@type": ["AutoDealer", "ProfessionalService", "LocalBusiness"],
    name: "SG Automotive",
    alternateName: "SG Automotive Costa del Sol",
    description: isEs
      ? "Empresa online especializada en compra, venta, importación y asesoría de vehículos en Europa. Basada en Fuengirola, Costa del Sol, Málaga, España."
      : "Online company specialised in buying, selling, importing and advising on vehicles in Europe. Based in Fuengirola, Costa del Sol, Málaga, Spain.",
    url: `${SITE_URL}/${locale}`,
    logo: `${SITE_URL}/logo-dark.png`,
    image: `${SITE_URL}/${locale}/opengraph-image`,
    telephone: SITE_PHONE,
    email: SITE_EMAIL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fuengirola",
      addressRegion: "Málaga",
      addressCountry: "ES",
      postalCode: "29640",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.5385,
      longitude: -4.6253,
    },
    areaServed: [
      { "@type": "Country", name: "España" },
      { "@type": "AdministrativeArea", name: "Costa del Sol" },
      { "@type": "AdministrativeArea", name: "Andalucía" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    availableLanguage: ["Spanish", "English"],
    priceRange: "€€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    knowsAbout: [
      "Importación de vehículos",
      "Compra de coches en Europa",
      "Asesoría automotiva",
      "Trámites ITV",
      "Matrícula de vehículos en España",
      "Transporte de vehículos",
    ],
  };
}

export function buildFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildWebsiteSchema(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SG Automotive",
    url: `${SITE_URL}/${locale}`,
    inLanguage: locale === "es" ? "es-ES" : "en-GB",
  };
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildServiceSchema(
  name: string,
  description: string,
  locale: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: "SG Automotive",
      url: `${SITE_URL}/${locale}`,
    },
    areaServed: {
      "@type": "Country",
      name: "España",
    },
    serviceType: "Automotive",
  };
}
