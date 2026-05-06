"use client";

import { useRef, useLayoutEffect } from "react";

// Scroll-reveal without Framer Motion.
//
// Strategy:
//  - SSR renders elements fully visible (opacity:1, no transform).
//  - useLayoutEffect fires synchronously before first browser paint,
//    so below-fold elements are hidden BEFORE the user ever sees them.
//  - IntersectionObserver then fades them in as they scroll into view.
//  - Above-fold elements are never touched → zero animation delay on hero siblings.
//  - prefers-reduced-motion: the observer is never attached → elements stay visible.

interface RevealOpts {
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  duration?: number;
}

function useRevealRef(opts: RevealOpts) {
  const ref = useRef<HTMLDivElement>(null);

  // opts values are animation constants — they don't change after mount.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect OS "prefers-reduced-motion" — keep elements visible, no observer.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Above-fold elements: never animate (avoids LCP/FCP regressions).
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    const { delay = 0, y = 0, x = 0, scale = 1, duration = 0.5 } = opts;

    // Build initial transform string
    const transforms: string[] = [];
    if (y !== 0) transforms.push(`translateY(${y}px)`);
    if (x !== 0) transforms.push(`translateX(${x}px)`);
    if (scale !== 1) transforms.push(`scale(${scale})`);

    el.style.opacity = "0";
    if (transforms.length) el.style.transform = transforms.join(" ");

    const parts = [`opacity ${duration}s ease-out ${delay}s`];
    if (transforms.length) parts.push(`transform ${duration}s ease-out ${delay}s`);
    el.style.transition = parts.join(", ");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "";
          observer.disconnect();
        }
      },
      { rootMargin: "-40px 0px", threshold: 0.01 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []); // intentionally empty — opts are animation constants

  return ref;
}

/* ─── Public components — same API as before ─────────────────────────────── */

export function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRevealRef({ delay, y: 20, duration: 0.5 });
  return <div ref={ref} className={className}>{children}</div>;
}

export function SlideIn({
  children,
  from = "left",
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  from?: "left" | "right";
  delay?: number;
  className?: string;
}) {
  const ref = useRevealRef({ delay, x: from === "left" ? -24 : 24, duration: 0.55 });
  return <div ref={ref} className={className}>{children}</div>;
}

export function AnimateItem({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRevealRef({ delay, y: 24, duration: 0.45 });
  return <div ref={ref} className={className}>{children}</div>;
}

export function ScaleIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRevealRef({ delay, scale: 0.95, duration: 0.4 });
  return <div ref={ref} className={className}>{children}</div>;
}
