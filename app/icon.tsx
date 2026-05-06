import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 64,
          height: 64,
          background: "#0b0f14",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 12,
        }}
      >
        {/* "SG" uppercase bold — brand favicon */}
        <div
          style={{
            color: "#ffffff",
            fontSize: 30,
            fontWeight: 900,
            fontFamily: "sans-serif",
            letterSpacing: "-1px",
            lineHeight: 1,
            marginBottom: 5,
          }}
        >
          SG
        </div>
        {/* Double gold underline — logo signature */}
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <div style={{ width: 22, height: 2, background: "#c8a96a", borderRadius: 1 }} />
          <div style={{ width: 22, height: 2, background: "#c8a96a", borderRadius: 1 }} />
        </div>
      </div>
    ),
    { width: 64, height: 64 }
  );
}
