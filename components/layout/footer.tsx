import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { MapPin, Mail, Phone } from "lucide-react";

const WHATSAPP_PLACEHOLDER = "WHATSAPP_PLACEHOLDER";
const EMAIL_PLACEHOLDER = "EMAIL_PLACEHOLDER";

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const year = new Date().getFullYear();

  const navLinks = [
    { href: `/${locale}/veiculos`, label: locale === "es" ? "Vehículos" : "Vehicles" },
    { href: `/${locale}/importacao`, label: locale === "es" ? "Importación" : "Importation" },
    { href: `/${locale}/servicos`, label: locale === "es" ? "Servicios" : "Services" },
    { href: `/${locale}/sobre`, label: locale === "es" ? "Nosotros" : "About" },
    { href: `/${locale}/contato`, label: locale === "es" ? "Contacto" : "Contact" },
  ];

  return (
    <footer className="bg-surface border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href={`/${locale}`} className="inline-block mb-4">
              <span className="text-xl font-bold tracking-tight text-fg">
                SG <span className="text-accent">Automotive</span>
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              {t("tagline")}
            </p>
            <div className="mt-4 flex items-center gap-2 text-muted text-xs">
              <MapPin size={12} className="text-accent shrink-0" />
              <span>{t("location")}</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-2 mb-4">
              {t("links.title")}
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-fg transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-2 mb-4">
              {locale === "es" ? "Contacto" : "Contact"}
            </h3>
            <div className="space-y-3">
              <a
                href={`https://wa.me/${WHATSAPP_PLACEHOLDER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-fg transition-colors"
              >
                <Phone size={13} className="text-accent shrink-0" />
                <span>{WHATSAPP_PLACEHOLDER}</span>
              </a>
              <a
                href={`mailto:${EMAIL_PLACEHOLDER}`}
                className="flex items-center gap-2 text-sm text-muted hover:text-fg transition-colors"
              >
                <Mail size={13} className="text-accent shrink-0" />
                <span>{EMAIL_PLACEHOLDER}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted">
            &copy; {year} {t("copyright")}
          </p>
          <div className="flex items-center gap-4">
            <Link href={`/${locale}`} className="text-xs text-muted hover:text-fg transition-colors">
              {t("legal.privacy")}
            </Link>
            <Link href={`/${locale}`} className="text-xs text-muted hover:text-fg transition-colors">
              {t("legal.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
