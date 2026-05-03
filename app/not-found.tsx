import Link from "next/link";

// Root-level 404 — provides its own html/body since root layout is a passthrough
export default function NotFound() {
  return (
    <html lang="es">
      <body
        style={{
          backgroundColor: "#0b0f14",
          color: "#f8fafc",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 1rem",
          textAlign: "center",
          fontFamily: "system-ui, -apple-system, sans-serif",
          margin: 0,
        }}
      >
        <p
          style={{
            color: "#c8a96a",
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            marginBottom: "1rem",
          }}
        >
          404
        </p>
        <h1
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 700,
            marginBottom: "1rem",
            lineHeight: 1.2,
          }}
        >
          Página no encontrada
        </h1>
        <p
          style={{
            color: "#6b7280",
            maxWidth: "24rem",
            marginBottom: "2rem",
            lineHeight: 1.6,
            fontSize: "1rem",
          }}
        >
          La página que buscas no existe o ha sido movida.
        </p>
        <Link
          href="/es"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.75rem 1.5rem",
            borderRadius: "0.5rem",
            backgroundColor: "#c8a96a",
            color: "#0b0f14",
            fontWeight: 600,
            fontSize: "0.875rem",
            textDecoration: "none",
          }}
        >
          Volver al inicio
        </Link>
      </body>
    </html>
  );
}
