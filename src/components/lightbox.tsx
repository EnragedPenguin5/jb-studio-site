import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { PhotoImage } from "@/components/photo-image";
import type { Photo } from "@/lib/photos";
import { cn } from "@/lib/utils";

type LightboxProps = {
  photos: Photo[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export function Lightbox({
  photos,
  index,
  onClose,
  onIndexChange,
}: LightboxProps) {
  const photo = index === null ? null : photos[index];
  const open = photo != null;

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") {
        onIndexChange(((index ?? 0) + 1) % photos.length);
      }
      if (event.key === "ArrowLeft") {
        onIndexChange(((index ?? 0) - 1 + photos.length) % photos.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, index, photos.length, onClose, onIndexChange]);

  if (!open || !photo) return null;

  const go = (delta: number) => {
    onIndexChange((index! + delta + photos.length) % photos.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt}
      className="fixed inset-0 z-overlay flex flex-col bg-bg"
      onClick={onClose}
    >
      <div className="flex h-14 shrink-0 items-center justify-between px-3 md:px-5">
        <p className="text-xs tracking-label text-muted">{photo.id}</p>
        <button
          type="button"
          className="flex size-11 items-center justify-center text-fg"
          aria-label="Close"
          onClick={onClose}
        >
          <X className="size-5" strokeWidth={1.5} />
        </button>
      </div>

      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6 md:px-16"
        onClick={(event) => event.stopPropagation()}
      >
        <PhotoImage
          photo={photo}
          priority
          className="max-h-full max-w-full object-contain"
        />

        {photos.length > 1 ? (
          <>
            <button
              type="button"
              className={cn(
                "absolute top-1/2 left-1 flex size-11 -translate-y-1/2 items-center justify-center text-fg md:left-4",
              )}
              aria-label="Previous photo"
              onClick={() => go(-1)}
            >
              <ChevronLeft className="size-7" strokeWidth={1.25} />
            </button>
            <button
              type="button"
              className="absolute top-1/2 right-1 flex size-11 -translate-y-1/2 items-center justify-center text-fg md:right-4"
              aria-label="Next photo"
              onClick={() => go(1)}
            >
              <ChevronRight className="size-7" strokeWidth={1.25} />
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}
