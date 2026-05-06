// Passthrough layout wrappers — zero JS, zero hydration.
// Content is fully visible in SSR/HTML and stays visible on scroll.
// CSS hover/transition effects are handled directly in each component
// via Tailwind classes; no opacity:0, no IntersectionObserver per element.

import { type ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
  delay?: number;   // accepted but unused — keeps call sites intact
  from?: "left" | "right"; // accepted but unused
  className?: string;
}

export function FadeUp({ children, className }: WrapperProps) {
  return <div className={className}>{children}</div>;
}

export function SlideIn({ children, className }: WrapperProps) {
  return <div className={className}>{children}</div>;
}

export function AnimateItem({ children, className }: WrapperProps) {
  return <div className={className}>{children}</div>;
}

export function ScaleIn({ children, className }: WrapperProps) {
  return <div className={className}>{children}</div>;
}
