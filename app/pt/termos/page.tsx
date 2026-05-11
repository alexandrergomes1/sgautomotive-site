import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Utilização — SG Automotive",
  description: "Condições de utilização do site sgautomotive.es.",
  robots: { index: true, follow: true },
};

export default function TermosPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-fg mb-3">Termos de Utilização</h1>
        <p className="text-muted text-sm mb-12">Última atualização: maio de 2026</p>

        <div className="prose-legal">

          <h2>1. Objeto</h2>
          <p>
            Os presentes termos regulam o acesso e utilização do site <strong>sgautomotive.es</strong>,
            operado pela SG Automotive (Fuengirola, Málaga, Espanha). O acesso ao site implica a aceitação
            integral destes termos.
          </p>

          <h2>2. Serviços oferecidos</h2>
          <p>
            A SG Automotive oferece serviços de compra, venda, importação e consultoria de veículos.
            A informação publicada neste site tem caráter informativo e não
            constitui uma oferta vinculativa. Os preços dos veículos são indicativos e podem estar sujeitos
            a alterações.
          </p>

          <h2>3. Propriedade intelectual</h2>
          <p>
            Todos os conteúdos do site (textos, imagens, logótipos e design) são propriedade da SG Automotive
            ou dos seus fornecedores de conteúdo, e estão protegidos pela legislação de propriedade intelectual.
            É proibida a sua reprodução total ou parcial sem autorização expressa.
          </p>

          <h2>4. Limitação de responsabilidade</h2>
          <p>
            A SG Automotive não garante a exatidão ou atualização permanente da informação publicada.
            O utilizador assume a responsabilidade de verificar qualquer dado relevante antes de tomar
            decisões de compra. A SG Automotive não será responsável pelos danos decorrentes da utilização
            da informação contida no site sem consulta prévia à nossa equipa.
          </p>

          <h2>5. Disponibilidade do serviço</h2>
          <p>
            A SG Automotive reserva-se o direito de interromper, modificar ou suspender o acesso ao site
            de forma temporária ou permanente, sem aviso prévio e sem que tal gere qualquer responsabilidade.
          </p>

          <h2>6. Lei aplicável e jurisdição</h2>
          <p>
            Os presentes termos são regidos pela legislação espanhola. Para qualquer litígio decorrente da
            utilização deste site, as partes submetem-se aos tribunais de Fuengirola (Málaga), com renúncia
            expressa a qualquer outro foro que lhes pudesse corresponder.
          </p>

          <h2>7. Contacto</h2>
          <p>
            Para qualquer dúvida relacionada com estes termos, pode contactar-nos em:{" "}
            <a href="mailto:sgautomotive.es@gmail.com">sgautomotive.es@gmail.com</a>
          </p>

        </div>
      </div>
    </section>
  );
}
