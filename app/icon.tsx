import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#0b0f14",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 36,
          border: "2px solid #c8a96a33",
        }}
      >
        <span
          style={{
            color: "#c8a96a",
            fontSize: 76,
            fontWeight: 700,
            fontFamily: "Georgia, serif",
            letterSpacing: "-3px",
            lineHeight: 1,
          }}
        >
          SG
        </span>
      </div>
    ),
    { width: 180, height: 180 }
  );
}
