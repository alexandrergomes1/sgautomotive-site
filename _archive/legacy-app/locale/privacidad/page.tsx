import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de privacidad — SG Automotive",
  robots: { index: false },
};

export default async function PrivacidadPage({
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
          {isEs ? "Política de privacidad" : "Privacy policy"}
        </h1>
        <p className="text-muted text-sm mb-10">
          {isEs ? "Última actualización: enero 2025" : "Last updated: January 2025"}
        </p>

        <div className="prose prose-invert max-w-none space-y-8 text-sm text-muted leading-relaxed">
          <section>
            <h2 className="text-fg font-semibold text-base mb-3">
              {isEs ? "Responsable del tratamiento" : "Data controller"}
            </h2>
            <p>
              {isEs
                ? "SG Automotive, con sede en Fuengirola, Málaga, España. Contacto: sgautomotive.es@gmail.com"
                : "SG Automotive, based in Fuengirola, Málaga, Spain. Contact: sgautomotive.es@gmail.com"}
            </p>
          </section>

          <section>
            <h2 className="text-fg font-semibold text-base mb-3">
              {isEs ? "Datos que recopilamos" : "Data we collect"}
            </h2>
            <p>
              {isEs
                ? "A través del formulario de contacto recogemos nombre, email, teléfono (opcional) y el mensaje. Estos datos se utilizan exclusivamente para responder a tu consulta."
                : "Through the contact form we collect name, email, phone (optional) and message. This data is used solely to respond to your enquiry."}
            </p>
          </section>

          <section>
            <h2 className="text-fg font-semibold text-base mb-3">
              {isEs ? "Base legal" : "Legal basis"}
            </h2>
            <p>
              {isEs
                ? "El tratamiento se basa en el consentimiento del usuario al enviar el formulario (art. 6.1.a RGPD)."
                : "Processing is based on the user's consent when submitting the form (Art. 6(1)(a) GDPR)."}
            </p>
          </section>

          <section>
            <h2 className="text-fg font-semibold text-base mb-3">
              {isEs ? "Conservación" : "Retention"}
            </h2>
            <p>
              {isEs
                ? "Los datos se conservan el tiempo necesario para gestionar tu consulta y, como máximo, 12 meses."
                : "Data is retained for as long as necessary to handle your enquiry, and at most 12 months."}
            </p>
          </section>

          <section>
            <h2 className="text-fg font-semibold text-base mb-3">
              {isEs ? "Tus derechos" : "Your rights"}
            </h2>
            <p>
              {isEs
                ? "Puedes ejercer tus derechos de acceso, rectificación, supresión y portabilidad contactando a sgautomotive.es@gmail.com."
                : "You can exercise your rights of access, rectification, erasure and portability by contacting sgautomotive.es@gmail.com."}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
