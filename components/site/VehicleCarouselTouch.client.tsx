"use client";
// Thin client wrapper — adds touch swipe to the CSS-only radio carousel.
// Detects horizontal swipe and programmatically checks the target radio input.
// Threshold: 48px. Below threshold = tap (let click events through normally).
// Zero visual changes to the carousel. ~0.8 KB gzipped.

import { useRef } from "react";

interface CarouselTouchWrapperProps {
  id: string;
  count: number;
  children: React.ReactNode;
}

export function CarouselTouchWrapper({ id, count, children }: CarouselTouchWrapperProps) {
  const startXRef = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    startXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = startXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) < 48) return; // tap — let click events through

    // Find the currently checked radio
    let current = 0;
    for (let i = 0; i < count; i++) {
      const el = document.getElementById(`vr-${id}-${i}`) as HTMLInputElement | null;
      if (el?.checked) { current = i; break; }
    }

    const next = delta > 0
      ? (current + 1) % count
      : (current - 1 + count) % count;

    const radio = document.getElementById(`vr-${id}-${next}`) as HTMLInputElement | null;
    if (radio) {
      radio.checked = true;
      radio.dispatchEvent(new Event("change", { bubbles: true }));
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="touch-pan-y"
    >
      {children}
    </div>
  );
}
