import type { Metadata } from "next";
import "./globals.css";
import { buildOrganizationSchema } from "@/lib/schema-org";

export const metadata: Metadata = {
  metadataBase: new URL("https://sgautomotive.es"),
  title: {
    default: "SG Automotive — Compra, venta e importación de vehículos",
    template: "%s | SG Automotive",
  },
  description:
    "Empresa online especializada en compra, venta e importación de vehículos. Stock propio, búsqueda en Europa y gestión documental. Costa del Sol, Fuengirola, Málaga.",
  icons: {
    icon: [{ url: "/icon", type: "image/png", sizes: "64x64" }],
    apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }],
  },
};

// Root layout — passthrough shell.
// html/body/lang are set in locale layouts: app/es/layout.tsx, app/en/layout.tsx, app/pt/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = buildOrganizationSchema();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      {children}
    </>
  );
}
