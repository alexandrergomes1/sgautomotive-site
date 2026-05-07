// Server Component — no next-intl, no getLocale(), no hooks.
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { footer, EMAIL_ADDRESS, WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from "@/data/site-content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <a href="#inicio" className="inline-block mb-5" aria-label="SG Automotive">
              <Logo size="md" />
            </a>
            <p className="text-muted text-sm leading-relaxed max-w-xs">{footer.tagline}</p>
            <div className="mt-4 flex items-center gap-2 text-muted text-xs">
              <MapPin size={12} className="text-accent shrink-0" />
              <span>{footer.location}</span>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-2 mb-4">
              {footer.navTitle}
            </h3>
            <ul className="space-y-3">
              {footer.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-fg transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-2 mb-4">
              Contacto
            </h3>
            <div className="space-y-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-fg transition-colors"
              >
                <Phone size={13} className="text-accent shrink-0" />
                <span>{WHATSAPP_DISPLAY}</span>
              </a>
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="flex items-center gap-2 text-sm text-muted hover:text-fg transition-colors"
              >
                <Mail size={13} className="text-accent shrink-0" />
                <span>{EMAIL_ADDRESS}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted">
            &copy; {year} {footer.copyright}
          </p>
          <div className="flex items-center gap-4">
            <Link href="/es/privacidad" className="text-xs text-muted hover:text-fg transition-colors">
              {footer.privacy}
            </Link>
            <Link href="/es/terminos" className="text-xs text-muted hover:text-fg transition-colors">
              {footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
