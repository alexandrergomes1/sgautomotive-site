import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#0b0f14",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* "sg" lowercase bold — matching logo style */}
        <div
          style={{
            color: "#ffffff",
            fontSize: 90,
            fontWeight: 800,
            fontFamily: "sans-serif",
            letterSpacing: "-3px",
            lineHeight: 1,
            marginBottom: 14,
          }}
        >
          sg
        </div>
        {/* Double gold underline — logo signature detail */}
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <div style={{ width: 56, height: 5, background: "#c8a96a", borderRadius: 2 }} />
          <div style={{ width: 56, height: 5, background: "#c8a96a", borderRadius: 2 }} />
        </div>
      </div>
    ),
    { width: 180, height: 180 }
  );
}
