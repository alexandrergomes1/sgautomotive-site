// Server Component — CSS-only <details>/<summary> locale dropdown.
// Globe icon from lucide-react. Always visible (mobile + desktop).
// No router.push. No usePathname. No "use client".
import { Globe, ChevronDown } from "lucide-react";
import type { Locale } from "@/data/site-content";

const LOCALES: { locale: Locale; href: string; label: string; name: string }[] = [
  { locale: "es", href: "/es", label: "ES", name: "Español" },
  { locale: "en", href: "/en", label: "EN", name: "English" },
  { locale: "pt", href: "/pt", label: "PT", name: "Português" },
];

interface LanguageSwitcherProps {
  locale: Locale;
}

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const current = LOCALES.find((l) => l.locale === locale);

  return (
    <details className="relative group" aria-label="Language">
      <summary className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest cursor-pointer select-none text-accent hover:text-accent-light transition-colors list-none [&::-webkit-details-marker]:hidden">
        <Globe size={13} aria-hidden="true" />
        {current?.label ?? locale.toUpperCase()}
        <ChevronDown
          size={11}
          className="transition-transform duration-200 group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>

      {/* Dropdown panel */}
      <div className="absolute right-0 top-full mt-2 w-36 bg-surface border border-border rounded-xl shadow-2xl shadow-black/40 overflow-hidden z-50 py-1.5">
        {LOCALES.map(({ locale: l, href, name }) => (
          <a
            key={l}
            href={href}
            className={`flex items-center justify-between px-4 py-2.5 text-sm transition-colors hover:bg-surface-2 ${
              locale === l
                ? "text-accent font-semibold"
                : "text-muted hover:text-fg"
            }`}
          >
            {name}
            {locale === l && (
              <span
                className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"
                aria-hidden="true"
              />
            )}
          </a>
        ))}
      </div>
    </details>
  );
}
