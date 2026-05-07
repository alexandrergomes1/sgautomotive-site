// Server Component — WhatsApp + email only. No form, no zod, no react-hook-form.
import { Mail, MapPin, Clock } from "lucide-react";
import type { SiteContent } from "@/data/site-content";
import { EMAIL_ADDRESS } from "@/data/site-content";

interface ContactCTAProps {
  contact: SiteContent["contact"];
  waConsult: string;
}

export function ContactCTA({ contact, waConsult }: ContactCTAProps) {
  return (
    <section id="contato" className="py-16 md:py-24 bg-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-fg mb-4">{contact.title}</h2>
        <p className="text-muted text-lg mb-12">{contact.subtitle}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {/* WhatsApp */}
          <a
            href={waConsult}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-7 rounded-xl border border-trust/30 bg-trust/5 hover:bg-trust/10 hover:border-trust/50 transition-all duration-200 group"
          >
            <div className="w-12 h-12 rounded-full bg-trust/15 border border-trust/30 flex items-center justify-center group-hover:bg-trust/25 transition-colors">
              {/* Official WhatsApp logo SVG */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-trust-light"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <span className="font-semibold text-fg text-sm">{contact.whatsappLabel}</span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="flex flex-col items-center gap-3 p-7 rounded-xl border border-border bg-surface hover:border-accent/30 hover:bg-surface-2 transition-all duration-200 group"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <Mail size={22} className="text-accent" aria-hidden="true" />
            </div>
            <span className="font-semibold text-fg text-sm">{contact.emailLabel}</span>
          </a>
        </div>

        {/* Meta info */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-accent shrink-0" aria-hidden="true" />
            {contact.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} className="text-accent shrink-0" aria-hidden="true" />
            {contact.responseTime}
          </span>
        </div>
      </div>
    </section>
  );
}
