import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SG Automotive — Importación y compra de vehículos en Europa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0b0f14",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Top: badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(200,169,106,0.08)",
            border: "1px solid rgba(200,169,106,0.25)",
            borderRadius: 99,
            padding: "8px 18px",
            width: "fit-content",
          }}
        >
          <span style={{ color: "#c8a96a", fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600 }}>
            Costa del Sol · Fuengirola · Málaga
          </span>
        </div>

        {/* Middle: brand + headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {/* Logo text */}
          <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
            <span style={{ color: "#f8fafc", fontSize: 64, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1 }}>
              sg
            </span>
            <span
              style={{
                color: "#c8a96a",
                display: "block",
                height: 3,
                width: 52,
                background: "#c8a96a",
                borderRadius: 99,
                marginBottom: 4,
              }}
            />
            <span style={{ color: "rgba(248,250,252,0.85)", fontSize: 24, fontWeight: 300, letterSpacing: "0.18em", textTransform: "lowercase" }}>
              automotive
            </span>
          </div>

          {/* Headline */}
          <div style={{ color: "#f8fafc", fontSize: 44, fontWeight: 700, lineHeight: 1.15, maxWidth: 780 }}>
            Importación y compra de vehículos en Europa
          </div>

          <div style={{ color: "#6b7280", fontSize: 22, lineHeight: 1.5, maxWidth: 680 }}>
            Análisis técnico, gestión completa y entrega con matrícula española.
          </div>
        </div>

        {/* Bottom: trust items */}
        <div style={{ display: "flex", gap: 32 }}>
          {["100% Online", "ES · EN", "Costa del Sol"].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: "#9ca3af",
                fontSize: 16,
              }}
            >
              <div style={{ width: 6, height: 6, borderRadius: 99, background: "#c8a96a" }} />
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
