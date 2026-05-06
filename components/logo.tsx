import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const heights = { sm: 36, md: 44, lg: 60 };

// SVG logo — vector, scalable, no extra network request
export function Logo({ size = "md", className }: LogoProps) {
  const h = heights[size];
  const w = Math.round(h * 4.0); // viewBox 360×90 ≈ 4:1

  return (
    <Image
      src="/logo.svg"
      alt="SG Automotive"
      height={h}
      width={w}
      style={{ height: h, width: "auto" }}
      className={cn("select-none", className)}
      priority
    />
  );
}
