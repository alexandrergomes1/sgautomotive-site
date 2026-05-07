// Server Component — zero client JS. CSS scroll-snap carousel with anchor arrows.
// Arrows use <a href="#slide-id"> — browser updates :target, CSS :has() shows/hides per-slide arrow pairs.
// scroll-margin: 0 on slides overrides global [id] { scroll-margin-top: 100px }.
import Image from "next/image";
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
  const { id, images } = car;
  const n = images.length;

  if (n === 0) return null;

  // Per-slide nav CSS: for each slide i that is :target, show [data-nav="i"], hide all others.
  // Default (no :target active): show [data-nav="0"] — first slide arrows visible.
  const navCss = images
    .map((_, i) => [
      `.vc-${id}:has(#sl-${id}-${i}:target) [data-nav] { display: none; }`,
      `.vc-${id}:has(#sl-${id}-${i}:target) [data-nav="${i}"] { display: flex; }`,
    ].join("\n"))
    .join("\n");

  const css = [
    /* hide all, show first by default */
    `.vc-${id} [data-nav] { display: none; }`,
    `.vc-${id} [data-nav="0"] { display: flex; }`,
    /* hide webkit scrollbar on the scroll track */
    `.vc-${id} .vc-track::-webkit-scrollbar { display: none; }`,
    navCss,
  ].join("\n");

  return (
    <div className={`vc-${id} relative aspect-[16/10] overflow-hidden`}>
      {/* Scoped CSS for :has() arrow logic */}
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* Scroll track — snaps slides horizontally */}
      <div
        className="vc-track flex overflow-x-auto snap-x snap-mandatory scroll-smooth w-full h-full"
        style={{ scrollbarWidth: "none" }}
      >
        {images.map((src, i) => (
          <div
            key={src}
            id={`sl-${id}-${i}`}
            className="snap-start flex-none w-full h-full relative shrink-0"
            style={{ scrollMargin: 0 }}
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

      {/* Price overlay */}
      <div className="absolute bottom-3 right-3 bg-bg/90 backdrop-blur-sm border border-border/60 rounded-lg px-3 py-1.5 z-20 pointer-events-none">
        <span className="text-accent font-bold text-base">{priceFormatted}</span>
      </div>

      {/* Per-slide nav arrow pairs — one pair per slide, CSS :has() shows the active one */}
      {images.map((_, i) => {
        const prev = i === 0 ? n - 1 : i - 1;
        const next = i === n - 1 ? 0 : i + 1;
        return (
          <div
            key={i}
            data-nav={i}
            className="absolute inset-y-0 left-0 right-0 z-10 items-center justify-between px-2 pointer-events-none"
            aria-hidden="true"
          >
            <a
              href={`#sl-${id}-${prev}`}
              className="pointer-events-auto flex items-center justify-center w-8 h-8 rounded-full bg-bg/70 backdrop-blur-sm border border-border/60 text-fg hover:bg-bg/90 hover:text-accent transition-colors shrink-0"
              tabIndex={-1}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </a>
            <a
              href={`#sl-${id}-${next}`}
              className="pointer-events-auto flex items-center justify-center w-8 h-8 rounded-full bg-bg/70 backdrop-blur-sm border border-border/60 text-fg hover:bg-bg/90 hover:text-accent transition-colors shrink-0"
              tabIndex={-1}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        );
      })}

      {/* Slide indicator dots */}
      {n > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 z-20">
          {images.map((_, i) => (
            <a
              key={i}
              href={`#sl-${id}-${i}`}
              className="w-1.5 h-1.5 rounded-full bg-fg/40 hover:bg-fg/80 transition-colors"
              tabIndex={-1}
              aria-label={`Foto ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
