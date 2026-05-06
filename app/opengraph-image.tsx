import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SG Automotive — Importación y compra de vehículos en Europa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0b0f14",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 100px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: -200,
            left: "50%",
            width: 900,
            height: 600,
            background: "radial-gradient(ellipse, rgba(200,169,106,0.12) 0%, transparent 70%)",
            borderRadius: "50%",
            transform: "translateX(-50%)",
          }}
        />

        {/* Logo mark */}
        <div style={{ display: "flex", alignItems: "flex-end", marginBottom: 48 }}>
          <span
            style={{
              color: "#ffffff",
              fontSize: 96,
              fontWeight: 900,
              fontFamily: "sans-serif",
              letterSpacing: "-3px",
              lineHeight: 1,
            }}
          >
            sg
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              marginLeft: 4,
              marginBottom: 10,
            }}
          >
            <div style={{ width: 38, height: 5, background: "#c8a96a", borderRadius: 2 }} />
            <div style={{ width: 38, height: 5, background: "#c8a96a", borderRadius: 2 }} />
          </div>
          <span
            style={{
              color: "#ffffff",
              fontSize: 28,
              fontWeight: 300,
              fontFamily: "sans-serif",
              letterSpacing: "8px",
              marginLeft: 20,
              marginBottom: 18,
            }}
          >
            automotive
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            color: "#f8fafc",
            fontSize: 52,
            fontWeight: 700,
            fontFamily: "sans-serif",
            lineHeight: 1.1,
            maxWidth: 800,
            marginBottom: 28,
          }}
        >
          Importación y compra de vehículos en Europa
        </div>

        {/* Subtitle */}
        <div
          style={{
            color: "#6b7280",
            fontSize: 26,
            fontFamily: "sans-serif",
            fontWeight: 400,
          }}
        >
          Fuengirola · Costa del Sol · España
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, #c8a96a 0%, transparent 100%)",
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
