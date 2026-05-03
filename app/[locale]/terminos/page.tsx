import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos de uso — SG Automotive",
  robots: { index: false },
};

export default async function TerminosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === "es";

  return (
    <div className="min-h-screen bg-bg pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={`/${locale}`}
          className="text-xs text-muted hover:text-accent transition-colors mb-8 inline-block"
        >
          ← {isEs ? "Volver al inicio" : "Back to home"}
        </Link>

        <h1 className="text-3xl font-bold text-fg mb-2">
          {isEs ? "Términos de uso" : "Terms of use"}
        </h1>
        <p className="text-muted text-sm mb-10">
          {isEs ? "Última actualización: enero 2025" : "Last updated: January 2025"}
        </p>

        <div className="space-y-8 text-sm text-muted leading-relaxed">
          <section>
            <h2 className="text-fg font-semibold text-base mb-3">
              {isEs ? "Objeto" : "Purpose"}
            </h2>
            <p>
              {isEs
                ? "SG Automotive presta servicios de asesoría, gestión de importación y compraventa de vehículos. El uso de este sitio web implica la aceptación de los presentes términos."
                : "SG Automotive provides advisory, import management and vehicle purchase/sale services. Use of this website implies acceptance of these terms."}
            </p>
          </section>

          <section>
            <h2 className="text-fg font-semibold text-base mb-3">
              {isEs ? "Información y precios" : "Information and prices"}
            </h2>
            <p>
              {isEs
                ? "Los vehículos mostrados están sujetos a disponibilidad. Los precios indicados son orientativos y pueden variar según el proceso de importación, impuestos y gastos de gestión aplicables."
                : "Vehicles shown are subject to availability. Prices indicated are indicative and may vary depending on the import process, taxes and applicable management fees."}
            </p>
          </section>

          <section>
            <h2 className="text-fg font-semibold text-base mb-3">
              {isEs ? "Propiedad intelectual" : "Intellectual property"}
            </h2>
            <p>
              {isEs
                ? "El contenido de este sitio web (textos, imágenes, diseño) es propiedad de SG Automotive o de sus proveedores de contenido."
                : "The content of this website (texts, images, design) is the property of SG Automotive or its content providers."}
            </p>
          </section>

          <section>
            <h2 className="text-fg font-semibold text-base mb-3">
              {isEs ? "Legislación aplicable" : "Applicable law"}
            </h2>
            <p>
              {isEs
                ? "Estos términos se rigen por la legislación española. Para cualquier controversia, las partes se someten a los juzgados de Fuengirola, Málaga."
                : "These terms are governed by Spanish law. For any dispute, the parties submit to the courts of Fuengirola, Málaga."}
            </p>
          </section>

          <section>
            <h2 className="text-fg font-semibold text-base mb-3">
              {isEs ? "Contacto" : "Contact"}
            </h2>
            <p>sgautomotive.es@gmail.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}
