import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/hero";
import { CatalogPreview } from "@/components/sections/catalog-preview";
import { Services } from "@/components/sections/services";
import { ImportacaoSection } from "@/components/sections/importacao-section";
import { Plans } from "@/components/sections/plans";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Differentials } from "@/components/sections/differentials";
import { AboutSection } from "@/components/sections/about-section";
import { FAQLazy as FAQ } from "@/components/sections/faq-lazy";
import { ContactSectionLazy as ContactSection } from "@/components/sections/contact-section-lazy";
import {
  buildLocalBusinessSchema,
  buildFAQSchema,
  buildWebsiteSchema,
  SITE_URL,
} from "@/lib/schema-org";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata.home" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        "es": `${SITE_URL}/es`,
        "en": `${SITE_URL}/en`,
        "x-default": `${SITE_URL}/es`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_GB",
      url: `${SITE_URL}/${locale}`,
      siteName: "SG Automotive",
      title: t("title"),
      description: t("description"),
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    keywords: locale === "es"
      ? [
          "importación de coches a España",
          "comprar coche en Europa",
          "asesoría importación vehículos España",
          "vehículos seleccionados Costa del Sol",
          "compra de coches en Alemania para España",
          "importación coches Fuengirola",
          "gestión automotiva España",
        ]
      : [
          "import car to Spain",
          "buy car in Europe",
          "vehicle import Spain",
          "car advisory Costa del Sol",
          "import car from Germany to Spain",
        ],
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tFaq = await getTranslations({ locale, namespace: "faq" });
  const faqItems = tFaq.raw("items") as Array<{
    question: string;
    answer: string;
  }>;

  const lbSchema = buildLocalBusinessSchema(locale);
  const faqSchema = buildFAQSchema(faqItems);
  const websiteSchema = buildWebsiteSchema(locale);

  return (
    <>
      {/* JSON-LD */}
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

      <Hero />
      <CatalogPreview />
      <Services />
      <ImportacaoSection />
      <Plans />
      <HowItWorks />
      <Differentials />
      <AboutSection />
      <FAQ />
      <ContactSection />
    </>
  );
}
