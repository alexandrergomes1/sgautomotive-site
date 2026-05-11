// /pt — Static route ○. Pre-rendered at build time.
// No next-intl, no getTranslations, no dynamic params.
import type { Metadata } from "next";
import {
  buildLocalBusinessSchema,
  buildFAQSchema,
  buildWebsiteSchema,
  buildVehicleListSchema,
  buildOrganizationSchema,
} from "@/lib/schema-org";
import { availableCars } from "@/data/cars";
import { siteContent, SITE_URL } from "@/data/site-content";

import { JsonLd } from "@/components/site/JsonLd";
import { Hero } from "@/components/site/Hero";
import { Vehicles } from "@/components/site/Vehicles";
import { Services } from "@/components/site/Services";
import { ImportSection } from "@/components/site/ImportSection";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Differentials } from "@/components/site/Differentials";
import { About } from "@/components/site/About";
import { FAQ } from "@/components/site/FAQ";
import { ContactCTA } from "@/components/site/ContactCTA";

const c = siteContent.pt;

export const metadata: Metadata = {
  title: c.seo.title,
  description: c.seo.description,
  keywords: c.seo.keywords,
  alternates: {
    canonical: `${SITE_URL}/pt`,
    languages: {
      es: `${SITE_URL}/es`,
      en: `${SITE_URL}/en`,
      pt: `${SITE_URL}/pt`,
      "x-default": `${SITE_URL}/es`,
    },
  },
  openGraph: {
    type: "website",
    locale: c.seo.ogLocale,
    url: `${SITE_URL}/pt`,
    siteName: c.brand.name,
    title: c.seo.title,
    description: c.seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: c.seo.title,
    description: c.seo.description,
  },
};

export default function PtPage() {
  const schemas = [
    buildLocalBusinessSchema("pt"),
    buildOrganizationSchema(),
    buildFAQSchema(c.faq.items),
    buildWebsiteSchema("pt"),
    buildVehicleListSchema(availableCars, "pt"),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Hero hero={c.hero} whatsappConsult={c.whatsapp.consult} />
      <Vehicles locale="pt" vehicles={c.vehicles} />
      <Services services={c.services} />
      <ImportSection importSection={c.importSection} waImport={c.whatsapp.import} />
      <HowItWorks howItWorks={c.howItWorks} />
      <Differentials differentials={c.differentials} />
      <About about={c.about} />
      <FAQ faq={c.faq} />
      <ContactCTA contact={c.contact} waConsult={c.whatsapp.consult} />
    </>
  );
}
