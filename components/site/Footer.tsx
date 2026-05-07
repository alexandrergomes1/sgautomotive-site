// Server Component — no animations, no Framer Motion.
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Logo } from "@/components/logo";
import type { SiteContent } from "@/data/site-content";
import { EMAIL_ADDRESS, WHATSAPP_DISPLAY } from "@/data/site-content";
import type { Locale } from "@/data/site-content";

interface FooterProps {
  footer: SiteContent["footer"];
  locale: Locale;
  waGeneral: string;
}

export function Footer({ footer, locale, waGeneral }: FooterProps) {
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
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href={waGeneral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-accent transition-colors duration-200"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="text-sm text-muted hover:text-accent transition-colors duration-200"
                >
                  {EMAIL_ADDRESS}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-2">
            © {year} {footer.copyright}
          </p>
          <div className="flex gap-5">
            <Link
              href={`/${locale}/privacidad`}
              className="text-xs text-muted-2 hover:text-muted transition-colors"
            >
              {footer.privacy}
            </Link>
            <Link
              href={`/${locale}/terminos`}
              className="text-xs text-muted-2 hover:text-muted transition-colors"
            >
              {footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
