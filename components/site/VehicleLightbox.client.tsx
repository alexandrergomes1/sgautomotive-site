"use client";
// Native <dialog> lightbox — zero external libs. ~2 KB gzipped.
// showModal() puts the dialog in the top-layer (above everything, no z-index fights).
// ESC closes natively. Click backdrop closes. ← → keyboard navigates.
// Body scroll locked while open (restored on close).
// Touch swipe: horizontal swipe ≥48px navigates prev/next (same threshold as carousel).

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface VehicleLightboxProps {
  images: string[];
  alt: string;
  initialIndex: number;
  onClose: () => void;
}

export function VehicleLightbox({ images, alt, initialIndex, onClose }: VehicleLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(initialIndex);
  const touchStartXRef = useRef<number>(0);
  const touchStartYRef = useRef<number>(0);
  const n = images.length;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();

    // Lock body scroll — also prevent iOS rubber-band scroll behind the lightbox
    const prev = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      width: document.body.style.width,
      top: document.body.style.top,
    };
    const scrollY = window.scrollY;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.top = `-${scrollY}px`;

    return () => {
      document.body.style.overflow = prev.overflow;
      document.body.style.position = prev.position;
      document.body.style.width = prev.width;
      document.body.style.top = prev.top;
      // Restore scroll position after body unfixes
      window.scrollTo(0, scrollY);
    };
  }, []);

  const prev = () => setIndex((i) => (i - 1 + n) % n);
  const next = () => setIndex((i) => (i + 1) % n);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft")  { e.preventDefault(); prev(); }
    if (e.key === "ArrowRight") { e.preventDefault(); next(); }
  };

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = touchStartXRef.current - e.changedTouches[0].clientX;
    const deltaY = Math.abs(touchStartYRef.current - e.changedTouches[0].clientY);
    // Only trigger if horizontal swipe dominates (avoids conflict with vertical scroll intent)
    if (Math.abs(deltaX) < 48 || deltaY > Math.abs(deltaX)) return;
    if (deltaX > 0) next(); else prev();
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onKeyDown={handleKeyDown}
      style={{
        position: "fixed", inset: 0, margin: 0, padding: 0,
        width: "100dvw", height: "100dvh",
        maxWidth: "none", maxHeight: "none",
        border: "none", background: "transparent", outline: "none",
      }}
      aria-modal="true"
      aria-label={`${alt} — galeria de fotos`}
    >
      {/* Backdrop — position:fixed so it always covers the full visual viewport on mobile */}
      <div
        onClick={onClose}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.95)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          touchAction: "none",          // prevents site scroll behind lightbox on mobile
          overscrollBehavior: "contain",
        }}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all"
          aria-label="Fechar galeria"
        >
          <X size={18} aria-hidden="true" />
        </button>

        {/* Slide counter */}
        {n > 1 && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 text-xs text-white/60 bg-black/40 px-3 py-1 rounded-full pointer-events-none select-none">
            {index + 1} / {n}
          </div>
        )}

        {/* Image container — click here does NOT close */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl"
          style={{ maxHeight: "85dvh", aspectRatio: "16 / 10" }}
        >
          <Image
            src={images[index]}
            alt={`${alt} — ${index + 1}/${n}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1024px"
            className="object-contain"
            priority
          />
        </div>

        {/* Prev arrow */}
        {n > 1 && (
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 sm:left-6 flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all"
            aria-label="Foto anterior"
          >
            <ChevronLeft size={22} aria-hidden="true" />
          </button>
        )}

        {/* Next arrow */}
        {n > 1 && (
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 sm:right-6 flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all"
            aria-label="Próxima foto"
          >
            <ChevronRight size={22} aria-hidden="true" />
          </button>
        )}
      </div>
    </dialog>
  );
}
