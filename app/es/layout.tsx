// /es — Static locale layout. No next-intl. No client components in this file.
import type { ReactNode } from "react";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { BackToTop } from "@/components/site/BackToTop";
import { siteContent } from "@/data/site-content";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const c = siteContent.es;

export default function EsLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={geist.variable}>
      <body className="min-h-screen bg-bg text-fg antialiased">
        <Header locale="es" navigation={c.navigation} />
        <main>{children}</main>
        <Footer footer={c.footer} locale="es" waGeneral={c.whatsapp.general} />
        <WhatsAppButton
          href={c.whatsapp.general}
          ariaLabel="Contactar por WhatsApp"
        />
        <BackToTop />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
