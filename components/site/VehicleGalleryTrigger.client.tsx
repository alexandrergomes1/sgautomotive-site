"use client";
// Invisible overlay button — opens the lightbox when user clicks/taps the carousel image.
// Sits at z-[5], below the navigation arrows (z-10) and overlays (z-20).
// On mobile: a tap (delta < 48px in touch handler) lets click through here → lightbox opens.
// On desktop: any click on the image area opens the lightbox.
// VehicleCard remains a 100% Server Component.

import { useState } from "react";
import { VehicleLightbox } from "@/components/site/VehicleLightbox.client";

interface VehicleGalleryTriggerProps {
  images: string[];
  alt: string;
  id: string;
  count: number;
}

export function VehicleGalleryTrigger({ images, alt, id, count }: VehicleGalleryTriggerProps) {
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const handleClick = () => {
    // Detect which photo is currently visible (from radio state)
    let current = 0;
    for (let i = 0; i < count; i++) {
      const el = document.getElementById(`vr-${id}-${i}`) as HTMLInputElement | null;
      if (el?.checked) { current = i; break; }
    }
    setStartIndex(current);
    setOpen(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="absolute inset-0 cursor-zoom-in"
        style={{ zIndex: 5 }}
        aria-label={`Ver fotos de ${alt} em tamanho completo`}
        tabIndex={-1}
        aria-hidden="true"
      />
      {open && (
        <VehicleLightbox
          images={images}
          alt={alt}
          initialIndex={startIndex}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
