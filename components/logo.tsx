import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg";
}

// rendered height in px — width is auto (respects PNG aspect ratio)
const heights = { sm: 40, md: 52, lg: 72 };

export function Logo({ variant = "light", size = "md", className }: LogoProps) {
  // logo-transp.png = dark logo on transparent background
  // variant="light" → dark background (header/footer) → invert to white
  // variant="dark"  → light background → show dark logo as-is
  const h = heights[size];

  return (
    <Image
      src="/logo-transp.png"
      alt="SG Automotive"
      height={h}
      width={h * 6}
      unoptimized
      style={{ height: h, width: "auto" }}
      className={cn(
        "select-none",
        variant === "light" && "brightness-0 invert",
        className
      )}
      priority
    />
  );
}
