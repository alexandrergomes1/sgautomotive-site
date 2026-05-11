import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Fixed format: 9.980 € — dot as thousand separator, € suffix.
// Uses "de-DE" locale internally so the output is locale-agnostic and consistent
// across ES / EN / PT pages.
export function formatPrice(price: number, _locale?: string): string {
  const formatted = new Intl.NumberFormat("de-DE", {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(price);
  return `${formatted} €`;
}

export function formatKm(km: number, locale: string): string {
  return new Intl.NumberFormat(locale).format(km) + " km";
}
