import { useState } from "react";
import { Lightbox } from "@/components/lightbox";
import { PhotoImage } from "@/components/photo-image";
import type { Photo } from "@/lib/photos";
import { cn } from "@/lib/utils";

type PhotoGridProps = {
  photos: Photo[];
  className?: string;
  featured?: boolean;
};

export function PhotoGrid({ photos, className, featured = false }: PhotoGridProps) {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      <ul
        className={cn(
          featured
            ? "grid grid-cols-2 gap-1 md:grid-cols-3 md:gap-1.5"
            : "columns-2 gap-1 md:columns-3 md:gap-1.5",
          className,
        )}
      >
        {photos.map((photo, photoIndex) => (
          <li
            key={photo.id}
            className={featured ? undefined : "mb-1 break-inside-avoid md:mb-1.5"}
          >
            <button
              type="button"
              className="group block w-full p-0 text-left"
              onClick={() => setIndex(photoIndex)}
              aria-label={`View ${photo.id}`}
            >
              <PhotoImage
                photo={photo}
                priority={featured && photoIndex < 2}
                sizes={
                  featured
                    ? "(max-width: 768px) 50vw, 33vw"
                    : "(max-width: 768px) 50vw, 33vw"
                }
                className={cn(
                  "w-full object-cover transition-[opacity] duration-[var(--motion-fast)] ease-[var(--ease-out)] group-hover:opacity-90",
                  featured ? "aspect-portrait" : "h-auto",
                )}
              />
            </button>
          </li>
        ))}
      </ul>
      <Lightbox
        photos={photos}
        index={index}
        onClose={() => setIndex(null)}
        onIndexChange={setIndex}
      />
    </>
  );
}
