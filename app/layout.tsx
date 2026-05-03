import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sgautomotive.com"),
  title: {
    default: "SG Automotive — Compra e Importação de Veículos na Europa",
    template: "%s | SG Automotive",
  },
  description:
    "Compra, importação e gestão automotiva na Europa. Veículos selecionados, análise técnica e gestão completa do processo na Costa del Sol, Espanha.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={geist.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-bg text-fg antialiased">{children}</body>
    </html>
  );
}
