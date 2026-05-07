// Server Component — WhatsApp + email only. No form, no zod, no react-hook-form.
import { MessageCircle, Mail, MapPin, Clock } from "lucide-react";
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
              <MessageCircle size={22} className="text-trust-light" aria-hidden="true" />
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
