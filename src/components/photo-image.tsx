import { useState } from "react";
import type { Photo } from "@/lib/photos";
import { cn } from "@/lib/utils";

type PhotoImageProps = {
  photo: Photo;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function PhotoImage({
  photo,
  className,
  priority = false,
  sizes,
}: PhotoImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={photo.src}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "low"}
      decoding="async"
      sizes={sizes}
      onLoad={() => setLoaded(true)}
      className={cn(
        // bg-surface (not bg-bg) so a still-loading tile reads as "loading",
        // not as a blank/broken square against the near-black page background.
        "bg-surface outline outline-1 -outline-offset-1 outline-fg/10 transition-opacity duration-[var(--motion-slow)] ease-[var(--ease-out)]",
        priority || loaded ? "opacity-100" : "opacity-0",
        className,
      )}
    />
  );
}
