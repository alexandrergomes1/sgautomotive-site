"use client";
// Native <dialog> lightbox — zero external libs. ~2 KB gzipped.
// showModal() puts the dialog in the top-layer (above everything, no z-index fights).
// ESC closes natively. Click backdrop closes. ← → keyboard navigates.
// Body scroll locked while open (restored on close).

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
  const n = images.length;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const prev = () => setIndex((i) => (i - 1 + n) % n);
  const next = () => setIndex((i) => (i + 1) % n);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft")  { e.preventDefault(); prev(); }
    if (e.key === "ArrowRight") { e.preventDefault(); next(); }
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onKeyDown={handleKeyDown}
      style={{
        position: "fixed", inset: 0, margin: 0, padding: 0,
        width: "100svw", height: "100svh",
        maxWidth: "none", maxHeight: "none",
        border: "none", background: "transparent", outline: "none",
      }}
      aria-modal="true"
      aria-label={`${alt} — galeria de fotos`}
    >
      {/* Backdrop click area — clicking here closes the dialog */}
      <div
        onClick={onClose}
        className="w-full h-full flex items-center justify-center"
        style={{ background: "rgba(0,0,0,0.92)" }}
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
          style={{ maxHeight: "85svh", aspectRatio: "16 / 10" }}
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
