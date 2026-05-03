import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { AboutSection } from "@/components/sections/about-section";
import { Differentials } from "@/components/sections/differentials";
import { buildBreadcrumbSchema, SITE_URL } from "@/lib/schema-org";

interface SobrePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: SobrePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.about" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `${SITE_URL}/${locale}/sobre`,
    },
  };
}

export default async function SobrePage({ params }: SobrePageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const breadcrumb = buildBreadcrumbSchema([
    { name: "SG Automotive", url: `${SITE_URL}/${locale}` },
    {
      name: isEs ? "Nosotros" : "About",
      url: `${SITE_URL}/${locale}/sobre`,
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <div className="min-h-screen bg-bg pt-24">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 py-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-fg mb-4">
            {isEs ? "Sobre nosotros" : "About us"}
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            {isEs
              ? "SG Automotive — operación automotiva online, basada en Costa del Sol, España."
              : "SG Automotive — online automotive operation, based on the Costa del Sol, Spain."}
          </p>
        </div>
        <AboutSection />
        <Differentials />
      </div>
    </>
  );
}
