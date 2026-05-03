"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Globe } from "lucide-react";

const locales = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
];

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function handleChange(newLocale: string) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/") || `/${newLocale}`);
  }

  return (
    <div className="flex items-center gap-1">
      <Globe
        size={14}
        className="text-muted"
        aria-hidden="true"
      />
      {locales.map((l, i) => (
        <span key={l.code} className="flex items-center gap-1">
          <button
            onClick={() => handleChange(l.code)}
            className={`text-xs font-medium tracking-widest uppercase transition-colors ${
              locale === l.code
                ? "text-accent"
                : "text-muted hover:text-fg"
            }`}
            aria-label={`Switch to ${l.label}`}
          >
            {l.label}
          </button>
          {i < locales.length - 1 && (
            <span className="text-border-light text-xs">·</span>
          )}
        </span>
      ))}
    </div>
  );
}
