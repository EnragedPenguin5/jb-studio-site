import { useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Lightbox } from "@/components/lightbox";
import { PhotoImage } from "@/components/photo-image";
import type { Photo } from "@/lib/photos";
import { cn } from "@/lib/utils";

type PhotoCarouselProps = {
  photos: Photo[];
  className?: string;
};

/** How each slot looks, by distance from the photo in front (0). */
function slotStyle(offset: number): CSSProperties {
  const abs = Math.abs(offset);
  const dir = Math.sign(offset);
  if (abs === 0) {
    return { transform: "translateX(-50%) translateZ(0) rotateY(0deg) scale(1)", opacity: 1, zIndex: 30, filter: "brightness(1)" };
  }
  if (abs === 1) {
    return {
      transform: `translateX(calc(-50% + ${dir * 66}%)) translateZ(-160px) rotateY(${-dir * 38}deg) scale(0.78)`,
      opacity: 1,
      zIndex: 20,
      filter: "brightness(0.5)",
    };
  }
  if (abs === 2) {
    return {
      transform: `translateX(calc(-50% + ${dir * 112}%)) translateZ(-320px) rotateY(${-dir * 48}deg) scale(0.6)`,
      opacity: 0.7,
      zIndex: 10,
      filter: "brightness(0.3)",
    };
  }
  return {
    transform: `translateX(calc(-50% + ${dir * 140}%)) translateZ(-420px) rotateY(${-dir * 55}deg) scale(0.45)`,
    opacity: 0,
    zIndex: 0,
    filter: "brightness(0.2)",
    pointerEvents: "none",
  };
}

export function PhotoCarousel({ photos, className }: PhotoCarouselProps) {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const drag = useRef<{ x: number; moved: boolean } | null>(null);
  const n = photos.length;

  const go = (delta: number) => setIndex((current) => (current + delta + n) % n);

  // Shortest signed distance around the loop, so the carousel wraps both ways.
  const offsetOf = (i: number) => {
    let d = (i - index + n) % n;
    if (d > n / 2) d -= n;
    return d;
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(-1);
    }
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    drag.current = { x: event.clientX, moved: false };
  };
  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    const start = drag.current;
    if (!start) return;
    const dx = event.clientX - start.x;
    if (Math.abs(dx) > 40) {
      start.moved = true;
      go(dx < 0 ? 1 : -1);
    }
  };

  const onCardClick = (i: number) => {
    if (drag.current?.moved) {
      drag.current = null;
      return;
    }
    drag.current = null;
    if (i === index) setLightbox(i);
    else setIndex(i);
  };

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Selected work"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        className="relative w-full touch-pan-y overflow-hidden outline-none select-none focus-visible:ring-1 focus-visible:ring-ring"
        style={{ perspective: "1400px" }}
      >
        {/* Height comes from an invisible spacer sized like the front photo. */}
        <div
          aria-hidden="true"
          className="invisible mx-auto aspect-portrait w-[62vw] max-w-[440px] md:w-[34vw]"
        />
        <ul className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
          {photos.map((photo, i) => {
            const offset = offsetOf(i);
            const isFront = offset === 0;
            return (
              <li
                key={photo.id}
                className="absolute top-0 left-1/2 aspect-portrait w-[62vw] max-w-[440px] transition-[transform,opacity,filter] duration-[700ms] ease-[var(--ease-out)] will-change-transform md:w-[34vw]"
                style={slotStyle(offset)}
                aria-hidden={Math.abs(offset) > 2}
              >
                <button
                  type="button"
                  tabIndex={Math.abs(offset) <= 1 ? 0 : -1}
                  className="block size-full p-0"
                  onClick={() => onCardClick(i)}
                  aria-label={isFront ? `View larger: ${photo.alt}` : `Show photo ${i + 1}: ${photo.alt}`}
                >
                  <PhotoImage
                    photo={photo}
                    priority={Math.abs(offset) <= 1}
                    sizes="(max-width: 768px) 62vw, 34vw"
                    className={cn(
                      "size-full object-cover shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)]",
                      isFront && "cursor-zoom-in",
                    )}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-6 flex items-center gap-6">
        <button
          type="button"
          className="flex size-11 items-center justify-center text-muted transition-[color] duration-[var(--motion-quick)] ease-[var(--ease-out)] hover:text-fg"
          aria-label="Previous photo"
          onClick={() => go(-1)}
        >
          <ChevronLeft className="size-6" strokeWidth={1.25} />
        </button>
        <p className="text-xs tracking-label text-muted tabular-nums" aria-live="polite">
          {String(index + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
        </p>
        <button
          type="button"
          className="flex size-11 items-center justify-center text-muted transition-[color] duration-[var(--motion-quick)] ease-[var(--ease-out)] hover:text-fg"
          aria-label="Next photo"
          onClick={() => go(1)}
        >
          <ChevronRight className="size-6" strokeWidth={1.25} />
        </button>
      </div>

      <Lightbox
        photos={photos}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onIndexChange={(i) => {
          setLightbox(i);
          setIndex(i);
        }}
      />
    </div>
  );
}
