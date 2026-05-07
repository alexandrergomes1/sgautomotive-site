// /es — Static route (○) — pre-rendered at build time.
// No next-intl, no getTranslations, no dynamic params.
// All JSON-LD schemas inline. All sections are pure Server Components.

import type { Metadata } from "next";
import {
  buildLocalBusinessSchema,
  buildFAQSchema,
  buildWebsiteSchema,
  buildVehicleListSchema,
} from "@/lib/schema-org";
import { availableCars } from "@/data/cars";
import { faq, meta, SITE_URL } from "@/data/site-content";

import { Hero } from "@/components/new/Hero";
import { Vehicles } from "@/components/new/Vehicles";
import { Services } from "@/components/new/Services";
import { ImportSection } from "@/components/new/ImportSection";
import { Plans } from "@/components/new/Plans";
import { HowItWorks } from "@/components/new/HowItWorks";
import { Differentials } from "@/components/new/Differentials";
import { About } from "@/components/new/About";
import { FAQ } from "@/components/new/FAQ";
import { ContactCTA } from "@/components/new/ContactCTA";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  alternates: {
    canonical: `${SITE_URL}/es`,
    languages: {
      es: `${SITE_URL}/es`,
      en: `${SITE_URL}/en`,
      pt: `${SITE_URL}/pt`,
      "x-default": `${SITE_URL}/es`,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: `${SITE_URL}/es`,
    siteName: "SG Automotive",
    title: meta.title,
    description: meta.description,
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
  },
};

export default function EsPage() {
  // JSON-LD — built at render time (static, no I/O)
  const lbSchema = buildLocalBusinessSchema("es");
  const faqSchema = buildFAQSchema(faq.items);
  const websiteSchema = buildWebsiteSchema("es");
  const vehicleListSchema = buildVehicleListSchema(availableCars, "es");

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleListSchema) }}
      />

      <Hero />
      <Vehicles />
      <Services />
      <ImportSection />
      <Plans />
      <HowItWorks />
      <Differentials />
      <About />
      <FAQ />
      <ContactCTA />
    </>
  );
}
