import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — SG Automotive",
  description: "Information about the processing of personal data on sgautomotive.es in accordance with the GDPR.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-fg mb-3">Privacy Policy</h1>
        <p className="text-muted text-sm mb-12">Last updated: May 2026</p>

        <div className="prose-legal">

          <h2>1. Data controller</h2>
          <p>
            <strong>SG Automotive</strong><br />
            Address: Fuengirola, Málaga, Spain<br />
            Email: <a href="mailto:sgautomotive.es@gmail.com">sgautomotive.es@gmail.com</a>
          </p>

          <h2>2. Data we process and purposes</h2>
          <h3>a) Browsing data (web analytics)</h3>
          <p>
            We use <strong>Vercel Analytics</strong>, a traffic measurement service that does not use cookies
            and does not track users individually. Data collected includes: pages visited, approximate session
            duration, device type and country of origin (without IP identification). The legal basis is
            legitimate interest in service improvement (Art. 6.1.f GDPR).
          </p>
          <h3>b) Contact data</h3>
          <p>
            When you contact us via WhatsApp or email, you voluntarily provide your name, phone number or
            email address and any information you choose to share in your message. This data is used solely
            to respond to your enquiry and manage the requested commercial relationship. Legal basis:
            pre-contractual measures at the request of the data subject (Art. 6.1.b GDPR).
          </p>

          <h2>3. Recipients of data</h2>
          <p>Your data is not shared with third parties, except:</p>
          <ul>
            <li>
              <strong>Vercel Inc.</strong>: hosting and analytics provider, acting as a data processor under
              a GDPR-compliant data processing agreement. More information at{" "}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                vercel.com/legal/privacy-policy
              </a>.
            </li>
            <li>
              <strong>Meta/WhatsApp</strong>: when you initiate contact via WhatsApp, that service applies
              its own terms and privacy policy.
            </li>
          </ul>

          <h2>4. International transfers</h2>
          <p>
            Vercel may process data on servers located outside the European Economic Area. Such transfers
            are carried out with the appropriate safeguards provided by the GDPR (standard contractual clauses
            approved by the European Commission).
          </p>

          <h2>5. Retention period</h2>
          <p>
            Contact data is retained for as long as necessary to manage the enquiry and any resulting
            contractual relationship. In the absence of a contractual relationship, data is deleted within
            a maximum of 12 months from the last contact.
          </p>

          <h2>6. Your rights</h2>
          <p>
            You have the right to <strong>access, rectify, erase, restrict, object to processing and request
            portability</strong> of your data by contacting us at:{" "}
            <a href="mailto:sgautomotive.es@gmail.com">sgautomotive.es@gmail.com</a>.
          </p>
          <p>
            You also have the right to lodge a complaint with the{" "}
            <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">
              Spanish Data Protection Agency (AEPD)
            </a>.
          </p>

          <h2>7. Cookies</h2>
          <p>
            This website does not use tracking or advertising cookies. Vercel Analytics is a cookieless
            service that does not set any cookies on your device.
          </p>

        </div>
      </div>
    </section>
  );
}
