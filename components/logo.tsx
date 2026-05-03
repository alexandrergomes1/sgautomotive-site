import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg";
}

// height in px; width is auto (actual ratio depends on the PNG)
const heights = { sm: 28, md: 36, lg: 48 };

export function Logo({ variant = "light", size = "md", className }: LogoProps) {
  // logo-dark.png = white version (for dark backgrounds)
  // logo-light.png = black version (for light backgrounds)
  const src = variant === "light" ? "/logo-dark.png" : "/logo-light.png";
  const h = heights[size];

  return (
    <Image
      src={src}
      alt="SG Automotive"
      height={h}
      width={h * 5}
      style={{ height: h, width: "auto" }}
      className={cn("select-none", className)}
      priority
    />
  );
}
