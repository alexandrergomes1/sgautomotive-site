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
  buildVehicleListSchema,
  SITE_URL,
} from "@/lib/schema-org";
import { availableCars } from "@/data/cars";

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
      // With localePrefix:"as-needed", es is served at root /
      canonical: locale === "es" ? SITE_URL : `${SITE_URL}/${locale}`,
      languages: {
        "es": SITE_URL,
        "en": `${SITE_URL}/en`,
        "pt": `${SITE_URL}/pt`,
        "x-default": SITE_URL,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_ES" : locale === "pt" ? "pt_PT" : "en_GB",
      url: locale === "es" ? SITE_URL : `${SITE_URL}/${locale}`,
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
      : locale === "pt"
      ? [
          "importação de carros para Espanha",
          "comprar carro na Europa",
          "assessoria importação veículos Espanha",
          "veículos selecionados Costa del Sol",
          "importação carros Fuengirola",
          "gestão automóvel Espanha",
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
  const vehicleListSchema = buildVehicleListSchema(availableCars, locale);

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleListSchema) }}
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
