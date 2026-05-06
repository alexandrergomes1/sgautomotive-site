import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

// logo1.png: 1186×377 px → aspect ratio ≈ 3.145
const heights = { sm: 44, md: 54, lg: 70 };
const ASPECT = 1186 / 377; // 3.145

export function Logo({ size = "md", className }: LogoProps) {
  const h = heights[size];
  const w = Math.round(h * ASPECT);

  return (
    <Image
      src="/logo1.png"
      alt="SG Automotive"
      height={h}
      width={w}
      style={{ height: h, width: "auto" }}
      className={cn("select-none", className)}
      priority
    />
  );
}
