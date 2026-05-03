import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ContactSection } from "@/components/sections/contact-section";
import { FAQ } from "@/components/sections/faq";
import { buildBreadcrumbSchema, SITE_URL } from "@/lib/schema-org";

interface ContatoPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ContatoPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.contact" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `${SITE_URL}/${locale}/contato`,
    },
  };
}

export default async function ContatoPage({ params }: ContatoPageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const breadcrumb = buildBreadcrumbSchema([
    { name: "SG Automotive", url: `${SITE_URL}/${locale}` },
    {
      name: isEs ? "Contacto" : "Contact",
      url: `${SITE_URL}/${locale}/contato`,
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
            {isEs ? "Contacto" : "Contact"}
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            {isEs
              ? "Cuéntanos lo que necesitas. La primera consulta es gratuita."
              : "Tell us what you need. The first consultation is free."}
          </p>
        </div>
        <ContactSection />
        <FAQ />
      </div>
    </>
  );
}
