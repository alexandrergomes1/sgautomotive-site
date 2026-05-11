import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Uso — SG Automotive",
  description: "Condiciones de uso del sitio web sgautomotive.es.",
  robots: { index: true, follow: true },
};

export default function TerminosPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-fg mb-3">Términos de Uso</h1>
        <p className="text-muted text-sm mb-12">Última actualización: mayo de 2026</p>

        <div className="prose-legal">

          <h2>1. Objeto</h2>
          <p>
            Los presentes términos regulan el acceso y uso del sitio web <strong>sgautomotive.es</strong>,
            operado por SG Automotive (Fuengirola, Málaga, España). El acceso al sitio implica la aceptación
            íntegra de estos términos.
          </p>

          <h2>2. Servicios ofrecidos</h2>
          <p>
            SG Automotive ofrece servicios de compra, venta, importación y asesoría de vehículos. La información publicada en este sitio tiene carácter
            informativo y no constituye una oferta vinculante. Los precios de los vehículos son orientativos
            y pueden estar sujetos a variaciones.
          </p>

          <h2>3. Propiedad intelectual</h2>
          <p>
            Todos los contenidos del sitio web (textos, imágenes, logotipos y diseño) son propiedad de
            SG Automotive o de sus proveedores de contenido, y están protegidos por la legislación de
            propiedad intelectual. Queda prohibida su reproducción total o parcial sin autorización expresa.
          </p>

          <h2>4. Limitación de responsabilidad</h2>
          <p>
            SG Automotive no garantiza la exactitud o actualización permanente de la información publicada.
            El usuario asume la responsabilidad de verificar cualquier dato relevante antes de tomar
            decisiones de compra. SG Automotive no será responsable de los daños derivados del uso de
            la información contenida en el sitio sin previa consulta con nuestro equipo.
          </p>

          <h2>5. Disponibilidad del servicio</h2>
          <p>
            SG Automotive se reserva el derecho de interrumpir, modificar o suspender el acceso al sitio
            web de forma temporal o permanente, sin previo aviso y sin que ello genere responsabilidad alguna.
          </p>

          <h2>6. Ley aplicable y jurisdicción</h2>
          <p>
            Los presentes términos se rigen por la legislación española. Para cualquier controversia derivada
            del uso de este sitio, las partes se someten a los juzgados y tribunales de Fuengirola (Málaga),
            con renuncia expresa a cualquier otro fuero que pudiera corresponderles.
          </p>

          <h2>7. Contacto</h2>
          <p>
            Para cualquier consulta relacionada con estos términos, puede contactarnos en:{" "}
            <a href="mailto:sgautomotive.es@gmail.com">sgautomotive.es@gmail.com</a>
          </p>

        </div>
      </div>
    </section>
  );
}
