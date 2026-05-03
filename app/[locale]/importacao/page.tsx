import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { buildBreadcrumbSchema, buildServiceSchema, SITE_URL } from "@/lib/schema-org";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ImportacaoPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ImportacaoPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.import" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `${SITE_URL}/${locale}/importacao`,
      languages: {
        es: `${SITE_URL}/es/importacao`,
        en: `${SITE_URL}/en/importacao`,
      },
    },
    keywords: locale === "es"
      ? [
          "importación coches Alemania España",
          "importar coche Europa España",
          "gestión importación vehículo Costa del Sol",
          "trámites importación coche",
          "ITV homologación importación",
        ]
      : [
          "import car from Germany to Spain",
          "import vehicle Europe Spain",
          "car import Costa del Sol",
        ],
  };
}

export default async function ImportacaoPage({ params }: ImportacaoPageProps) {
  const { locale } = await params;

  const isEs = locale === "es";

  const breadcrumb = buildBreadcrumbSchema([
    { name: "SG Automotive", url: `${SITE_URL}/${locale}` },
    {
      name: isEs ? "Importación" : "Importation",
      url: `${SITE_URL}/${locale}/importacao`,
    },
  ]);

  const serviceSchema = buildServiceSchema(
    isEs ? "Importación de vehículos a España" : "Vehicle importation to Spain",
    isEs
      ? "Gestión completa de importación de vehículos desde Europa a España, incluyendo transporte, homologación, ITV y matrícula."
      : "Complete management of vehicle importation from Europe to Spain, including transport, homologation, ITV and registration.",
    locale
  );

  const steps = isEs
    ? [
        {
          title: "Selección del vehículo",
          desc: "Identificamos el vehículo en el país de origen y verificamos su historial, estado técnico y documentación.",
        },
        {
          title: "Compra y pago",
          desc: "Gestionamos la compra en nombre del cliente, con total transparencia en costes y documentación.",
        },
        {
          title: "Transporte",
          desc: "Coordinamos el transporte del vehículo desde el país de origen hasta España con seguro de transporte incluido.",
        },
        {
          title: "Despacho aduanero",
          desc: "Gestionamos los trámites aduaneros necesarios según el tipo de importación (intracomunitaria o terceros países).",
        },
        {
          title: "Homologación e ITV",
          desc: "Realizamos los trámites de homologación y pasamos la ITV para que el vehículo sea legal en España.",
        },
        {
          title: "Matrícula y entrega",
          desc: "Gestionamos la matrícula en España y entregamos el vehículo completamente documentado y listo para circular.",
        },
      ]
    : [
        {
          title: "Vehicle selection",
          desc: "We identify the vehicle in the country of origin and verify its history, technical condition and documentation.",
        },
        {
          title: "Purchase & payment",
          desc: "We manage the purchase on behalf of the client, with full transparency in costs and documentation.",
        },
        {
          title: "Transport",
          desc: "We coordinate transport of the vehicle from the country of origin to Spain with transport insurance included.",
        },
        {
          title: "Customs clearance",
          desc: "We handle the necessary customs procedures depending on the type of importation (intra-EU or third countries).",
        },
        {
          title: "Homologation & ITV",
          desc: "We carry out homologation procedures and pass the ITV so the vehicle is legal in Spain.",
        },
        {
          title: "Registration & delivery",
          desc: "We manage Spanish registration and deliver the vehicle fully documented and ready to drive.",
        },
      ];

  const included = isEs
    ? [
        "Búsqueda y análisis del vehículo",
        "Verificación de historial (Carfax/AutoCheck)",
        "Negociación y compra",
        "Transporte puerta a puerta con seguro",
        "Despacho aduanero",
        "Homologación y certificado de conformidad",
        "ITV primera vez",
        "Matrícula española",
        "Cambio de titularidad",
        "Soporte postventa",
      ]
    : [
        "Vehicle search and analysis",
        "History verification (Carfax/AutoCheck)",
        "Negotiation and purchase",
        "Door-to-door transport with insurance",
        "Customs clearance",
        "Homologation and certificate of conformity",
        "First ITV inspection",
        "Spanish registration",
        "Ownership transfer",
        "After-sales support",
      ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="min-h-screen bg-bg">
        {/* Hero */}
        <div className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/4 to-transparent pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center relative">
            <span className="inline-flex items-center px-3 py-1 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-medium tracking-widest uppercase mb-6">
              {isEs ? "Servicio completo" : "Full service"}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-fg mb-6">
              {isEs
                ? "Importación de vehículos a España"
                : "Vehicle importation to Spain"}
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto mb-10">
              {isEs
                ? "Gestionamos todo el proceso de importación, desde la compra en Europa hasta la entrega con matrícula española."
                : "We manage the entire import process, from purchase in Europe to delivery with Spanish registration."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={`/${locale}/contato?servico=importacion`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-accent text-bg font-semibold text-sm hover:bg-accent-light transition-colors"
              >
                {isEs ? "Solicitar gestión completa" : "Request full management"}
                <ArrowRight size={16} />
              </Link>
              <Link
                href={`/${locale}/servicos`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-border-light text-fg text-sm hover:border-accent/50 hover:text-accent transition-colors"
              >
                {isEs ? "Ver todos los servicios" : "View all services"}
              </Link>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="bg-surface py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-fg text-center mb-12">
              {isEs ? "El proceso paso a paso" : "The step-by-step process"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="p-6 bg-bg border border-border rounded-xl"
                >
                  <div className="w-8 h-8 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-accent text-sm font-bold mb-4">
                    {i + 1}
                  </div>
                  <h3 className="font-semibold text-fg mb-2">{step.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Included */}
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-fg text-center mb-10">
              {isEs ? "¿Qué incluye el servicio?" : "What does the service include?"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {included.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-trust-light shrink-0" />
                  <span className="text-sm text-muted-2">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
