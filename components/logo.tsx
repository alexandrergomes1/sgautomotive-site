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
  // logo-dark.png  = white logo  → dark backgrounds (header, footer)
  // logo-light.png = black logo  → light backgrounds
  const src = variant === "light" ? "/logo-dark.png" : "/logo-light.png";
  const h = heights[size];

  return (
    <Image
      src={src}
      alt="SG Automotive"
      height={h}
      width={h * 6}
      unoptimized
      style={{ height: h, width: "auto" }}
      className={cn("select-none", className)}
      priority
    />
  );
}
