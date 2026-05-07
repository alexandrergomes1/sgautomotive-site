// Server Component — no animations, no Framer Motion.
import { MessageCircle, Mail } from "lucide-react";
import type { SiteContent } from "@/data/site-content";
import { EMAIL_ADDRESS, WHATSAPP_DISPLAY } from "@/data/site-content";

interface AboutProps {
  about: SiteContent["about"];
  waGeneral: string;
}

export function About({ about, waGeneral }: AboutProps) {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-fg mb-4 leading-tight">
              {about.title}
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-4">{about.subtitle}</p>
            <p className="text-muted text-base leading-relaxed mb-4">{about.body}</p>
            <p className="text-muted text-base leading-relaxed mb-8">{about.body2}</p>

            <div className="flex flex-wrap gap-3">
              {/* Primary CTA — WhatsApp with icon, scale hover, shadow */}
              <a
                href={waGeneral}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent text-bg font-bold text-sm hover:bg-accent-light hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 shadow-lg shadow-accent/20"
              >
                <MessageCircle size={16} aria-hidden="true" />
                {about.cta}
              </a>

              {/* Secondary — email */}
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-border text-muted font-medium text-sm hover:border-accent/40 hover:text-fg transition-all duration-200"
              >
                <Mail size={14} aria-hidden="true" />
                {EMAIL_ADDRESS}
              </a>
            </div>
          </div>

          {/* Right — stats */}
          <div className="grid grid-cols-2 gap-4">
            {about.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl bg-surface border border-border hover:border-accent/20 transition-colors flex flex-col gap-1"
              >
                <span className="text-2xl font-bold text-accent">{stat.value}</span>
                <span className="text-xs text-muted-2 uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}

            {/* Contact card spanning full width */}
            <div className="col-span-2 p-5 rounded-xl bg-surface border border-border flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-2 mb-1">
                Contacto directo
              </p>
              <p className="text-sm text-muted">
                <span className="font-medium text-fg">WhatsApp:</span>{" "}
                <a
                  href={waGeneral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </p>
              <p className="text-sm text-muted">
                <span className="font-medium text-fg">Email:</span>{" "}
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="hover:text-accent transition-colors"
                >
                  {EMAIL_ADDRESS}
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
