import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sgautomotive.com"),
  title: {
    default: "SG Automotive — Importación y compra de vehículos en Europa",
    template: "%s | SG Automotive",
  },
  description:
    "Empresa online especializada en importación de coches a España, asesoría de compra en Europa y gestión documental. Costa del Sol, Fuengirola, Málaga.",
  icons: {
    icon: "/favicon.ico",
  },
};

// Passthrough — html/body/lang live in app/[locale]/layout.tsx (next-intl pattern)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
