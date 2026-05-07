// Server Component — zero client JS. Pure CSS scroll-snap photo gallery.
// Navigation: swipe (mobile) or horizontal trackpad/mouse scroll (desktop).
// NO anchor links. NO href="#slide-id". NO IDs on slides.
// Scrollbar hidden via .vc-track CSS class (globals.css).
import Image from "next/image";
import { Camera } from "lucide-react";
import type { Car } from "@/data/cars";

interface VehicleImageCarouselProps {
  car: Car;
  tagLabels: Record<string, string>;
  tagColors: Record<string, string>;
  priceFormatted: string;
  alt: string;
}

export function VehicleImageCarousel({
  car,
  tagLabels,
  tagColors,
  priceFormatted,
  alt,
}: VehicleImageCarouselProps) {
  const { images } = car;
  const n = images.length;

  if (n === 0) return null;

  return (
    <div className="relative aspect-[16/10] overflow-hidden">
      {/* Scroll track — snap per photo. vc-track class hides scrollbar (globals.css). */}
      <div className="vc-track flex h-full overflow-x-auto snap-x snap-mandatory scroll-smooth">
        {images.map((src, i) => (
          <div
            key={src}
            className="snap-start flex-none w-full h-full relative shrink-0"
          >
            <Image
              src={src}
              alt={`${alt} — ${i + 1}/${n}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Tags overlay */}
      {car.tags.length > 0 && (
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-20 pointer-events-none">
          {car.tags.map((tag) => (
            <span
              key={tag}
              className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border backdrop-blur-sm ${tagColors[tag] ?? ""}`}
            >
              {tagLabels[tag] ?? tag}
            </span>
          ))}
        </div>
      )}

      {/* Photo count badge — top-right, static, non-interactive */}
      {n > 1 && (
        <div className="absolute top-3 right-3 z-20 pointer-events-none">
          <span className="flex items-center gap-1 text-[10px] font-medium text-fg/90 bg-bg/70 backdrop-blur-sm border border-border/40 px-2 py-0.5 rounded-full">
            <Camera size={9} aria-hidden="true" />
            {n}
          </span>
        </div>
      )}

      {/* Price overlay — bottom-right */}
      <div className="absolute bottom-3 right-3 bg-bg/90 backdrop-blur-sm border border-border/60 rounded-lg px-3 py-1.5 z-20 pointer-events-none">
        <span className="text-accent font-bold text-base">{priceFormatted}</span>
      </div>

      {/* Subtle right-edge fade — visual hint that more photos exist */}
      {n > 1 && (
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 bottom-0 w-8 pointer-events-none z-10"
          style={{
            background: "linear-gradient(to left, rgba(11,15,20,0.4), transparent)",
          }}
        />
      )}
    </div>
  );
}
