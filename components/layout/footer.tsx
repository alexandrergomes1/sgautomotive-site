import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";
import { MapPin, Mail, Phone } from "lucide-react";
import { Logo } from "@/components/logo";

const WHATSAPP_NUMBER = "34662625953";
const WHATSAPP_DISPLAY = "+34 662 62 59 53";
const EMAIL_ADDRESS = "sgautomotive.es@gmail.com";

export async function Footer() {
  const [t, locale] = await Promise.all([
    getTranslations("footer"),
    getLocale(),
  ]);
  const year = new Date().getFullYear();

  const navLinks = [
    { href: "#veiculos", label: locale === "es" ? "Vehículos" : "Vehicles" },
    { href: "#importacao", label: locale === "es" ? "Importación" : "Importation" },
    { href: "#servicos", label: locale === "es" ? "Servicios" : "Services" },
    { href: "#sobre", label: locale === "es" ? "Nosotros" : "About" },
    { href: "#contato", label: locale === "es" ? "Contacto" : "Contact" },
  ];

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <Link href={`/${locale}#inicio`} className="inline-block mb-5" aria-label="SG Automotive">
              <Logo variant="light" size="md" />
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              {t("tagline")}
            </p>
            <div className="mt-4 flex items-center gap-2 text-muted text-xs">
              <MapPin size={12} className="text-accent shrink-0" />
              <span>{t("location")}</span>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-2 mb-4">
              {t("links.title")}
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
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

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-2 mb-4">
              {locale === "es" ? "Contacto" : "Contact"}
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

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted">
            &copy; {year} {t("copyright")}
          </p>
          <div className="flex items-center gap-4">
            <a href={`/${locale}/privacidad`} className="text-xs text-muted hover:text-fg transition-colors">
              {t("legal.privacy")}
            </a>
            <a href={`/${locale}/terminos`} className="text-xs text-muted hover:text-fg transition-colors">
              {t("legal.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
