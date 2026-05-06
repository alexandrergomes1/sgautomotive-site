import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import type { AbstractIntlMessages } from "next-intl";
import { Geist } from "next/font/google";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";
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
  // Only send the 3 namespaces actually used by client components:
  // Header → "nav" | FAQ → "faq" | ContactSection → "contact"
  // Saves ~20KB from initial HTML payload vs sending all 34KB of translations.
  const m = allMessages as Record<string, AbstractIntlMessages>;
  const clientMessages: AbstractIntlMessages = {
    nav: m.nav,
    faq: m.faq,
    contact: m.contact,
  };

  return (
    <html lang={locale} className={geist.variable} suppressHydrationWarning>
      <head>
        </head>
      <body className="min-h-screen bg-bg text-fg antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <NextIntlClientProvider messages={clientMessages}>
            <Header />
            <main>{children}</main>
            <Footer />
            <WhatsAppButton />
            <Toaster
              theme="dark"
              toastOptions={{
                style: {
                  background: "#111827",
                  border: "1px solid #1f2937",
                  color: "#f8fafc",
                },
              }}
            />
          </NextIntlClientProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
