// Server Component — no animations, no Framer Motion.
// Lucide icons (Phone, Mail, MapPin) are SVG-only — zero extra bundle weight.
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "@/components/logo";
import type { SiteContent, Locale } from "@/data/site-content";
import { EMAIL_ADDRESS, WHATSAPP_DISPLAY } from "@/data/site-content";

const LEGAL_ROUTES: Record<Locale, { privacy: string; terms: string }> = {
  es: { privacy: "/es/privacidad", terms: "/es/terminos" },
  en: { privacy: "/en/privacy",    terms: "/en/terms" },
  pt: { privacy: "/pt/privacidade", terms: "/pt/termos" },
};

interface FooterProps {
  footer: SiteContent["footer"];
  locale: Locale;
  waGeneral: string;
  emailLabel: string;
}

export function Footer({ footer, locale, waGeneral, emailLabel }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href={`/${locale}`} aria-label="SG Automotive — início" className="inline-block mb-4">
              <Logo size="sm" />
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs mb-4">{footer.tagline}</p>
            <p className="text-muted-2 text-xs flex items-center gap-1.5">
              <MapPin size={12} className="text-accent/60 shrink-0" aria-hidden="true" />
              {footer.location}
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-2 mb-4">
              {footer.navTitle}
            </p>
            <ul className="flex flex-col gap-2.5">
              {footer.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-2 mb-4">
              Contacto
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={waGeneral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors duration-200 group"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-md bg-accent/8 border border-accent/15 group-hover:bg-accent/15 group-hover:border-accent/30 transition-colors shrink-0">
                    <Phone size={11} className="text-accent/70 group-hover:text-accent transition-colors" aria-hidden="true" />
                  </span>
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors duration-200 group"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-md bg-accent/8 border border-accent/15 group-hover:bg-accent/15 group-hover:border-accent/30 transition-colors shrink-0">
                    <Mail size={11} className="text-accent/70 group-hover:text-accent transition-colors" aria-hidden="true" />
                  </span>
                  {emailLabel}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-2">
            © {year} {footer.copyright}
          </p>
          <nav className="flex items-center gap-4" aria-label="Legal">
            <Link
              href={LEGAL_ROUTES[locale].privacy}
              className="text-xs text-muted-2 hover:text-accent transition-colors duration-200"
            >
              {footer.privacy}
            </Link>
            <span className="text-muted-2/40 text-xs" aria-hidden="true">·</span>
            <Link
              href={LEGAL_ROUTES[locale].terms}
              className="text-xs text-muted-2 hover:text-accent transition-colors duration-200"
            >
              {footer.terms}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
