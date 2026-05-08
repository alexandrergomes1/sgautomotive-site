// Server Component — CSS-only radio input carousel. Zero client JS.
// Navigation: <label htmlFor> arrows trigger :checked state on radio inputs.
// NO "use client". NO href anchors. NO JS. NO scroll-snap scroll side-effects.
// DOM order: [radios][style][track][overlays][nav-sets]
// CSS: #vr-{id}-{i}:checked ~ .vt-{id} { transform: translateX(-N%) }
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
  // Sanitize: strip any character that is not alphanumeric, underscore, or hyphen.
  // Radio input ids, names, and CSS class selectors must be valid identifiers.
  const id = car.id.replace(/[^a-zA-Z0-9_-]/g, "-");
  const n = images.length;

  if (n === 0) return null;

  // Single image — skip radio machinery entirely
  if (n === 1) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={images[0]}
          alt={`${alt} — 1/1`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          loading="lazy"
        />
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
        <div className="absolute bottom-3 right-3 bg-bg/90 backdrop-blur-sm border border-border/60 rounded-lg px-3 py-1.5 z-20 pointer-events-none">
          <span className="text-accent font-bold text-base">{priceFormatted}</span>
        </div>
      </div>
    );
  }

  // Build scoped CSS:
  // 1. Hide all nav sets by default
  // 2. Per-slide: translate track + show nav set when that radio is :checked
  const navIds = images.map((_, i) => `.va-${id}-${i}`).join(",");
  const perSlide = images
    .map((_, i) => {
      const pct = ((i * 100) / n).toFixed(4);
      return (
        `#vr-${id}-${i}:checked~.vt-${id}{transform:translateX(-${pct}%)}` +
        `#vr-${id}-${i}:checked~.va-${id}-${i}{display:flex}`
      );
    })
    .join("");

  const css = `${navIds}{display:none}${perSlide}`;

  return (
    <div className="relative aspect-[16/10] overflow-hidden">

      {/* ① Radio inputs — MUST be first children so ~ sibling combinator works */}
      {images.map((_, i) => (
        <input
          key={i}
          id={`vr-${id}-${i}`}
          type="radio"
          name={`vg-${id}`}
          defaultChecked={i === 0}
          className="sr-only"
          aria-label={`Foto ${i + 1} de ${n}`}
        />
      ))}

      {/* ② Scoped CSS — siblings of radios, before track */}
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* ③ Track — sibling of radios, targeted by :checked ~ .vt-{id} */}
      <div
        className={`vt-${id} absolute top-0 left-0 h-full flex`}
        style={{
          width: `${n * 100}%`,
          transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
          willChange: "transform",
        }}
      >
        {images.map((src, i) => (
          <div
            key={src}
            className="relative h-full flex-none"
            style={{ width: `${100 / n}%` }}
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

      {/* ④ Tags overlay */}
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

      {/* ⑤ Photo count badge */}
      <div className="absolute top-3 right-3 z-20 pointer-events-none">
        <span className="flex items-center gap-1 text-[10px] font-medium text-fg/90 bg-bg/70 backdrop-blur-sm border border-border/40 px-2 py-0.5 rounded-full">
          <Camera size={9} aria-hidden="true" />
          {n}
        </span>
      </div>

      {/* ⑥ Price overlay */}
      <div className="absolute bottom-3 right-3 bg-bg/90 backdrop-blur-sm border border-border/60 rounded-lg px-3 py-1.5 z-20 pointer-events-none">
        <span className="text-accent font-bold text-base">{priceFormatted}</span>
      </div>

      {/* ⑦ Nav sets — one per slide, shown via CSS when that radio is :checked */}
      {images.map((_, i) => {
        const prev = (i - 1 + n) % n;
        const next = (i + 1) % n;
        return (
          <div
            key={i}
            className={`va-${id}-${i} absolute inset-y-0 left-0 right-0 z-10 items-center justify-between pointer-events-none`}
          >
            {/* Prev arrow */}
            <label
              htmlFor={`vr-${id}-${prev}`}
              className="pointer-events-auto flex items-center justify-center w-10 h-10 ml-2 rounded-full bg-bg/70 backdrop-blur-sm border border-border/50 text-fg/80 hover:bg-bg/90 hover:border-accent/40 hover:text-fg cursor-pointer transition-all duration-200"
              aria-label={`Foto anterior`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </label>
            {/* Next arrow */}
            <label
              htmlFor={`vr-${id}-${next}`}
              className="pointer-events-auto flex items-center justify-center w-10 h-10 mr-2 rounded-full bg-bg/70 backdrop-blur-sm border border-border/50 text-fg/80 hover:bg-bg/90 hover:border-accent/40 hover:text-fg cursor-pointer transition-all duration-200"
              aria-label={`Próxima foto`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </label>
          </div>
        );
      })}

    </div>
  );
}
