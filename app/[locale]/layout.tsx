import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import type { AbstractIntlMessages } from "next-intl";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { routing } from "@/i18n/routing";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  if (!routing.locales.includes(locale as "es" | "en" | "pt")) {
    notFound();
  }

  const allMessages = await getMessages();
  const m = allMessages as Record<string, AbstractIntlMessages>;

  // Provider scoped to Header only — nav messages exclusively.
  // FAQ, ContactSection, WhatsAppButton are now server components (no provider needed).
  // Footer uses getTranslations server-side (no provider needed).
  const navMessages: AbstractIntlMessages = { nav: m.nav };

  return (
    // Dark mode is fixed via globals.css (color-scheme: dark) — no ThemeProvider needed.
    <html lang={locale} className={geist.variable}>
      <body className="min-h-screen bg-bg text-fg antialiased">
        <NextIntlClientProvider messages={navMessages}>
          <Header />
        </NextIntlClientProvider>
        <main>{children}</main>
        <Footer />
        {/* Server component — locale passed as prop, no provider needed */}
        <WhatsAppButton locale={locale} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
