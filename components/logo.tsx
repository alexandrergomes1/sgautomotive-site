import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { sg: "text-xl", word: "text-xs", bar: "h-[1.5px] w-[52%]", gap: "bottom-[-5px]" },
  md: { sg: "text-2xl", word: "text-sm", bar: "h-[2px] w-[54%]", gap: "bottom-[-6px]" },
  lg: { sg: "text-3xl", word: "text-base", bar: "h-[2px] w-[56%]", gap: "bottom-[-7px]" },
};

export function Logo({ variant = "light", className, size = "md" }: LogoProps) {
  const isLight = variant === "light";
  const color = isLight ? "text-fg" : "text-[#0b0f14]";
  const barColor = isLight ? "bg-accent" : "bg-[#c8a96a]";
  const s = sizes[size];

  return (
    <span className={cn("inline-flex items-baseline gap-3 select-none", className)}>
      {/* sg with single accent underline */}
      <span className="relative inline-block leading-none">
        <span
          className={cn(
            "font-extrabold tracking-tight leading-none",
            s.sg,
            color
          )}
          style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
        >
          sg
        </span>
        <span
          className={cn(
            "absolute left-0 rounded-full",
            s.bar,
            s.gap,
            barColor
          )}
          aria-hidden="true"
        />
      </span>
      {/* automotive */}
      <span
        className={cn(
          "font-light tracking-[0.18em] leading-none lowercase",
          s.word,
          isLight ? "text-fg/90" : "text-[#0b0f14]/90"
        )}
      >
        automotive
      </span>
    </span>
  );
}
