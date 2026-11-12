import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * A red grease-pencil circle, the kind you'd scrawl on a contact sheet around
 * the frame you want printed. Decorative only: hidden from screen readers.
 * Position it with `className` (it is absolutely placed over its parent).
 */
export function GreaseCircle({ className, note }: { className?: string; note?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setDrawn(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      aria-hidden="true"
      data-drawn={drawn}
      className={cn("grease pointer-events-none absolute z-10 block", className)}
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="size-full overflow-visible"
        fill="none"
      >
        <path
          d="M14 58 C7 27 33 5 61 7 C88 9 98 34 93 59 C88 85 57 97 31 91 C9 86 2 63 13 41 C20 27 34 16 51 12"
          stroke="var(--color-red)"
          strokeWidth={3.5}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      {note ? (
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 translate-y-full -rotate-3 font-hand text-xl leading-none font-bold whitespace-nowrap text-red md:text-2xl">
          {note}
        </span>
      ) : null}
    </span>
  );
}
