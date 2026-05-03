import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { VehicleCard } from "@/components/vehicle-card";
import { cars } from "@/data/cars";
import { buildBreadcrumbSchema, SITE_URL } from "@/lib/schema-org";

interface VeiculosPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: VeiculosPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.vehicles" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `${SITE_URL}/${locale}/veiculos`,
      languages: {
        es: `${SITE_URL}/es/veiculos`,
        en: `${SITE_URL}/en/veiculos`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${SITE_URL}/${locale}/veiculos`,
    },
  };
}

export default async function VeiculosPage({ params }: VeiculosPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "catalog" });

  const breadcrumb = buildBreadcrumbSchema([
    { name: "SG Automotive", url: `${SITE_URL}/${locale}` },
    {
      name: locale === "es" ? "Vehículos" : "Vehicles",
      url: `${SITE_URL}/${locale}/veiculos`,
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <div className="min-h-screen bg-bg pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 pt-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-fg mb-3">
              {t("title")}
            </h1>
            <p className="text-muted max-w-2xl">{t("subtitle")}</p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {cars.map((car, i) => (
              <VehicleCard key={car.id} car={car} index={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
