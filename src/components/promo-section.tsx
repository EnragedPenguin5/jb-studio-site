import { trackEvent } from "@/components/analytics";
import { Button } from "@/components/ui/button";
import { PROMOS, SHOW_PROMO_POSTER } from "@/lib/site";

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
            className="flex flex-col gap-8 md:flex-row md:items-center md:gap-16"
          >
            {promo.poster && SHOW_PROMO_POSTER ? (
              <a
                href={promo.bookingUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${promo.cta}: ${promo.title}`}
                className="block w-full max-w-sm shrink-0 self-center md:self-auto"
                onClick={() => trackEvent("book_click", { promo: promo.id, source: "poster" })}
              >
                <img
                  src={promo.poster.src}
                  alt={promo.poster.alt}
                  width={promo.poster.width}
                  height={promo.poster.height}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full bg-white"
                />
              </a>
            ) : null}
            <div className="max-w-xl">
              <p className="text-sm text-muted">{promo.label}</p>
              <h2 className="mt-3 font-display text-5xl md:text-6xl">
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
              <div className="mt-8">
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
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
