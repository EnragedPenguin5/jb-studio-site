import { trackEvent } from "@/components/analytics";
import { Button } from "@/components/ui/button";
import { PROMOS } from "@/lib/site";

export function PromoSection() {
  if (PROMOS.length === 0) return null;

  return (
    <section
      id="promos"
      aria-label="Current promos"
      className="border-y border-fg/8 bg-surface px-5 py-12 md:px-8 md:py-16"
    >
      <div className="flex flex-col gap-12">
        {PROMOS.map((promo) => (
          <article
            key={promo.id}
            className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-16"
          >
            <div className="max-w-xl">
              <p className="text-xs tracking-label text-muted uppercase">
                {promo.label} · Studio B
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">
                {promo.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                {promo.blurb}
              </p>
              <p className="mt-6 font-display text-3xl font-medium tracking-tight">
                {promo.price}
              </p>
              <ul className="mt-3 flex flex-col gap-1 text-sm text-muted">
                {promo.details.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            <div className="shrink-0">
              <Button asChild size="lg">
                <a
                  href={promo.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackEvent("book_click", { promo: promo.id })}
                >
                  {promo.cta}
                </a>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
