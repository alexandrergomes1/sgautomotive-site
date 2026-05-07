"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  alt: string;
  /** Never set to true — catalog is well below the hero LCP element */
  priority?: boolean;
}

export function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Start collapsed: only the first image is in the DOM.
  // All others mount on first interaction to reduce initial DOM size.
  const [expanded, setExpanded] = useState(false);

  const expand = useCallback(() => {
    if (!expanded) setExpanded(true);
  }, [expanded]);

  const scrollTo = useCallback((index: number) => {
    expand();
    const track = trackRef.current;
    if (!track) return;
    // Give the newly-mounted images one tick to be in the DOM before scrolling
    requestAnimationFrame(() => {
      const slide = track.children[index] as HTMLElement;
      if (slide) track.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
      setActive(index);
    });
  }, [expand]);

  const prev = useCallback(() => scrollTo((active - 1 + images.length) % images.length), [active, images.length, scrollTo]);
  const next = useCallback(() => scrollTo((active + 1) % images.length), [active, images.length, scrollTo]);

  // Sync active dot on native scroll / swipe
  const handleScroll = useCallback(() => {
    expand();
    const track = trackRef.current;
    if (!track) return;
    const index = Math.round(track.scrollLeft / track.offsetWidth);
    setActive(index);
  }, [expand]);

  if (images.length === 0) return null;

  // Which images to render: only [0] until the user interacts
  const rendered = expanded ? images : images.slice(0, 1);

  return (
    <div className="relative aspect-[16/9] overflow-hidden bg-surface-2 select-none">
      {/* Scrollable track */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        onPointerDown={expand}
        className="flex h-full overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {rendered.map((src, i) => (
          <div key={src} className="relative w-full flex-none snap-start h-full">
            <Image
              src={src}
              alt={`${alt} — foto ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
            />
          </div>
        ))}
        {/* Ghost slides for collapsed state — keep scroll snap geometry stable */}
        {!expanded && images.length > 1 && images.slice(1).map((src) => (
          <div key={`ghost-${src}`} className="relative w-full flex-none snap-start h-full bg-surface-2" />
        ))}
      </div>

      {/* Prev / Next */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Imagen anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-7 h-7 rounded-full bg-bg/70 backdrop-blur-sm border border-border/50 text-fg/80 hover:bg-bg/90 hover:text-fg transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            onClick={next}
            aria-label="Imagen siguiente"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-7 h-7 rounded-full bg-bg/70 backdrop-blur-sm border border-border/50 text-fg/80 hover:bg-bg/90 hover:text-fg transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
          >
            <ChevronRight size={14} />
          </button>

          {/* Dots — always reflect total count even before expand */}
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Ir a imagen ${i + 1}`}
                className={`rounded-full transition-all duration-200 ${
                  i === active
                    ? "w-4 h-1.5 bg-accent"
                    : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
