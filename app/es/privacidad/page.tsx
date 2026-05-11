import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad — SG Automotive",
  description: "Información sobre el tratamiento de datos personales en sgautomotive.com conforme al RGPD.",
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-fg mb-3">Política de Privacidad</h1>
        <p className="text-muted text-sm mb-12">Última actualización: mayo de 2026</p>

        <div className="prose-legal">

          <h2>1. Responsable del tratamiento</h2>
          <p>
            <strong>SG Automotive</strong><br />
            Domicilio: Fuengirola, Málaga, España<br />
            Correo electrónico: <a href="mailto:sgautomotive.es@gmail.com">sgautomotive.es@gmail.com</a>
          </p>

          <h2>2. Datos que tratamos y finalidades</h2>
          <h3>a) Datos de navegación (analítica web)</h3>
          <p>
            Utilizamos <strong>Vercel Analytics</strong>, un servicio de medición de tráfico que no utiliza cookies
            y no rastrea a los usuarios de forma individual. Los datos recopilados incluyen: páginas visitadas,
            duración aproximada de la sesión, tipo de dispositivo y país de origen (sin identificación de IP).
            La base legal es el interés legítimo en la mejora del servicio (art. 6.1.f RGPD).
          </p>
          <h3>b) Datos de contacto</h3>
          <p>
            Cuando nos contacta por WhatsApp o correo electrónico, usted facilita voluntariamente su nombre,
            número de teléfono o dirección de correo y la información que decide compartir en su mensaje.
            Estos datos se utilizan exclusivamente para responder a su consulta y gestionar la relación
            comercial solicitada. Base legal: medidas precontractuales a solicitud del interesado (art. 6.1.b RGPD).
          </p>

          <h2>3. Destinatarios de los datos</h2>
          <p>Sus datos no se ceden a terceros, salvo:</p>
          <ul>
            <li>
              <strong>Vercel Inc.</strong>: proveedor de alojamiento y analítica. Actúa como encargado del
              tratamiento bajo acuerdo conforme al RGPD. Más información en{" "}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                vercel.com/legal/privacy-policy
              </a>.
            </li>
            <li>
              <strong>Meta/WhatsApp</strong>: cuando usted inicia un contacto vía WhatsApp, dicho servicio
              aplica sus propias condiciones y política de privacidad.
            </li>
          </ul>

          <h2>4. Transferencias internacionales</h2>
          <p>
            Vercel puede procesar datos en servidores situados fuera del Espacio Económico Europeo. Dichas
            transferencias se realizan con las garantías adecuadas previstas por el RGPD (cláusulas contractuales
            tipo aprobadas por la Comisión Europea).
          </p>

          <h2>5. Plazo de conservación</h2>
          <p>
            Los datos de contacto se conservan durante el tiempo necesario para gestionar la consulta y,
            en su caso, la relación contractual derivada. En ausencia de relación contractual, se eliminan
            en un plazo máximo de 12 meses desde el último contacto.
          </p>

          <h2>6. Sus derechos</h2>
          <p>
            Tiene derecho a <strong>acceder, rectificar, suprimir, limitar, oponerse al tratamiento y solicitar
            la portabilidad</strong> de sus datos, dirigiendo su solicitud a:{" "}
            <a href="mailto:sgautomotive.es@gmail.com">sgautomotive.es@gmail.com</a>.
          </p>
          <p>
            También puede presentar una reclamación ante la{" "}
            <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">
              Agencia Española de Protección de Datos (AEPD)
            </a>.
          </p>

          <h2>7. Cookies</h2>
          <p>
            Este sitio web no utiliza cookies de seguimiento ni de publicidad. Vercel Analytics es un servicio
            cookieless que no establece ninguna cookie en su dispositivo.
          </p>

        </div>
      </div>
    </section>
  );
}
