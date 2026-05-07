// /es route layout — independent of next-intl.
// No NextIntlClientProvider, no getMessages(), no i18n overhead.
// Only client component: MobileMenu.client.tsx (hamburger panel).

import type { ReactNode } from "react";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/new/Header";
import { Footer } from "@/components/new/Footer";
import { WhatsAppButton } from "@/components/new/WhatsAppButton";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export default function EsLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={geist.variable}>
      <body className="min-h-screen bg-bg text-fg antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
