import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg";
}

// logo1.png: white logo, transparent background — works on any dark surface
// logo-light.png: dark logo — for light backgrounds (variant="dark")
const heights = { sm: 56, md: 76, lg: 104 };

export function Logo({ variant = "light", size = "md", className }: LogoProps) {
  const src = variant === "light" ? "/logo1.png" : "/logo-light.png";
  const h = heights[size];

  return (
    <Image
      src={src}
      alt="SG Automotive"
      height={h}
      width={Math.round(h * 3.15)}
      unoptimized
      style={{ height: h, width: "auto" }}
      className={cn("select-none", className)}
      priority
    />
  );
}
