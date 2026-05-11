import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — SG Automotive",
  description: "Terms and conditions for the use of sgautomotive.es.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-fg mb-3">Terms of Use</h1>
        <p className="text-muted text-sm mb-12">Last updated: May 2026</p>

        <div className="prose-legal">

          <h2>1. Purpose</h2>
          <p>
            These terms govern access to and use of the website <strong>sgautomotive.es</strong>, operated
            by SG Automotive (Fuengirola, Málaga, Spain). Accessing the site implies full acceptance of
            these terms.
          </p>

          <h2>2. Services offered</h2>
          <p>
            SG Automotive provides vehicle purchase, sale, importation and advisory services.
            The information published on this site is for informational purposes only and
            does not constitute a binding offer. Vehicle prices are indicative and may be subject to change.
          </p>

          <h2>3. Intellectual property</h2>
          <p>
            All website content (texts, images, logos and design) is owned by SG Automotive or its content
            providers and is protected by intellectual property law. Reproduction in whole or in part is
            prohibited without express authorisation.
          </p>

          <h2>4. Limitation of liability</h2>
          <p>
            SG Automotive does not guarantee the accuracy or permanent currency of the information published.
            Users assume responsibility for verifying any relevant data before making purchasing decisions.
            SG Automotive shall not be liable for any damages arising from the use of information on this
            site without prior consultation with our team.
          </p>

          <h2>5. Service availability</h2>
          <p>
            SG Automotive reserves the right to interrupt, modify or suspend access to the website temporarily
            or permanently, without prior notice and without incurring any liability.
          </p>

          <h2>6. Applicable law and jurisdiction</h2>
          <p>
            These terms are governed by Spanish law. For any dispute arising from the use of this site,
            the parties submit to the courts of Fuengirola (Málaga), expressly waiving any other jurisdiction
            that may apply.
          </p>

          <h2>7. Contact</h2>
          <p>
            For any queries regarding these terms, please contact us at:{" "}
            <a href="mailto:sgautomotive.es@gmail.com">sgautomotive.es@gmail.com</a>
          </p>

        </div>
      </div>
    </section>
  );
}
