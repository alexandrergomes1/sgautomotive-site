import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade — SG Automotive",
  description: "Informação sobre o tratamento de dados pessoais em sgautomotive.com em conformidade com o RGPD.",
  robots: { index: true, follow: true },
};

export default function PrivacidadePage() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-fg mb-3">Política de Privacidade</h1>
        <p className="text-muted text-sm mb-12">Última atualização: maio de 2026</p>

        <div className="prose-legal">

          <h2>1. Responsável pelo tratamento</h2>
          <p>
            <strong>SG Automotive</strong><br />
            Morada: Fuengirola, Málaga, Espanha<br />
            Email: <a href="mailto:sgautomotive.es@gmail.com">sgautomotive.es@gmail.com</a>
          </p>

          <h2>2. Dados que tratamos e finalidades</h2>
          <h3>a) Dados de navegação (análise web)</h3>
          <p>
            Utilizamos o <strong>Vercel Analytics</strong>, um serviço de medição de tráfego que não utiliza
            cookies e não rastreia utilizadores individualmente. Os dados recolhidos incluem: páginas visitadas,
            duração aproximada da sessão, tipo de dispositivo e país de origem (sem identificação de IP).
            A base legal é o interesse legítimo na melhoria do serviço (art. 6.º, n.º 1, al. f) RGPD).
          </p>
          <h3>b) Dados de contacto</h3>
          <p>
            Quando nos contacta por WhatsApp ou email, fornece voluntariamente o seu nome, número de telefone
            ou endereço de email e qualquer informação que decida partilhar na sua mensagem. Estes dados são
            utilizados exclusivamente para responder à sua consulta e gerir a relação comercial solicitada.
            Base legal: medidas pré-contratuais a pedido do titular (art. 6.º, n.º 1, al. b) RGPD).
          </p>

          <h2>3. Destinatários dos dados</h2>
          <p>Os seus dados não são cedidos a terceiros, exceto:</p>
          <ul>
            <li>
              <strong>Vercel Inc.</strong>: fornecedor de alojamento e análise, que atua como subcontratante
              ao abrigo de um acordo de tratamento de dados em conformidade com o RGPD. Mais informações em{" "}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                vercel.com/legal/privacy-policy
              </a>.
            </li>
            <li>
              <strong>Meta/WhatsApp</strong>: quando inicia um contacto via WhatsApp, esse serviço aplica
              os seus próprios termos e política de privacidade.
            </li>
          </ul>

          <h2>4. Transferências internacionais</h2>
          <p>
            A Vercel pode processar dados em servidores situados fora do Espaço Económico Europeu. Essas
            transferências são efetuadas com as garantias adequadas previstas no RGPD (cláusulas contratuais
            tipo aprovadas pela Comissão Europeia).
          </p>

          <h2>5. Prazo de conservação</h2>
          <p>
            Os dados de contacto são conservados durante o tempo necessário para gerir a consulta e, se
            aplicável, a relação contratual resultante. Na ausência de relação contratual, são eliminados
            num prazo máximo de 12 meses após o último contacto.
          </p>

          <h2>6. Os seus direitos</h2>
          <p>
            Tem direito a <strong>aceder, retificar, apagar, limitar, opor-se ao tratamento e solicitar a
            portabilidade</strong> dos seus dados, dirigindo o seu pedido para:{" "}
            <a href="mailto:sgautomotive.es@gmail.com">sgautomotive.es@gmail.com</a>.
          </p>
          <p>
            Tem também o direito de apresentar uma reclamação junto da{" "}
            <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">
              Agência Espanhola de Proteção de Dados (AEPD)
            </a>.
          </p>

          <h2>7. Cookies</h2>
          <p>
            Este site não utiliza cookies de rastreamento nem de publicidade. O Vercel Analytics é um
            serviço sem cookies que não instala qualquer cookie no seu dispositivo.
          </p>

        </div>
      </div>
    </section>
  );
}
