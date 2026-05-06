"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Globe, Check, ChevronDown } from "lucide-react";

const locales = [
  { code: "es", label: "ES", name: "Español" },
  { code: "en", label: "EN", name: "English" },
  { code: "pt", label: "PT", name: "Português" },
];

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  function handleChange(newLocale: string) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/") || `/${newLocale}`);
    setOpen(false);
  }

  // Close on outside click
  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open]);

  const current = locales.find((l) => l.code === locale) ?? locales[0];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase text-muted hover:text-fg transition-colors"
        aria-label="Cambiar idioma"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <Globe size={13} aria-hidden="true" />
        <span>{current.label}</span>
        <ChevronDown
          size={11}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Seleccionar idioma"
          className="absolute right-0 top-full mt-2 w-36 bg-surface border border-border rounded-lg shadow-xl shadow-black/30 overflow-hidden z-50"
        >
          {locales.map((l) => (
            <button
              key={l.code}
              role="option"
              aria-selected={locale === l.code}
              onClick={() => handleChange(l.code)}
              className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 text-sm transition-colors ${
                locale === l.code
                  ? "text-accent bg-accent/8"
                  : "text-muted hover:text-fg hover:bg-white/5"
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-wider uppercase opacity-60">
                  {l.label}
                </span>
                <span>{l.name}</span>
              </span>
              {locale === l.code && (
                <Check size={12} className="text-accent shrink-0" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
