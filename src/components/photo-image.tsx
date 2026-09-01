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
      className={cn(
        "outline outline-1 -outline-offset-1 outline-fg/10",
        className,
      )}
    />
  );
}
