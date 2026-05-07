// /en — Static locale layout. No next-intl. No client components.
import type { ReactNode } from "react";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { siteContent } from "@/data/site-content";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const c = siteContent.en;

export default function EnLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen bg-bg text-fg antialiased">
        <Header locale="en" navigation={c.navigation} whatsapp={c.whatsapp} />
        <main>{children}</main>
        <Footer footer={c.footer} locale="en" waGeneral={c.whatsapp.general} />
        <WhatsAppButton
          href={c.whatsapp.general}
          ariaLabel="Contact us on WhatsApp"
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
