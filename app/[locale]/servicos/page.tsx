import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Services } from "@/components/sections/services";
import { Plans } from "@/components/sections/plans";
import { buildBreadcrumbSchema, SITE_URL } from "@/lib/schema-org";

interface ServicosPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ServicosPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.services" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `${SITE_URL}/${locale}/servicos`,
    },
  };
}

export default async function ServicosPage({ params }: ServicosPageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const breadcrumb = buildBreadcrumbSchema([
    { name: "SG Automotive", url: `${SITE_URL}/${locale}` },
    {
      name: isEs ? "Servicios" : "Services",
      url: `${SITE_URL}/${locale}/servicos`,
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
            {isEs ? "Servicios" : "Services"}
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            {isEs
              ? "Operación especializada en compra, importación y gestión automotiva en Europa."
              : "Specialised operation in purchase, importation and automotive management in Europe."}
          </p>
        </div>
        <Services />
        <Plans />
      </div>
    </>
  );
}
