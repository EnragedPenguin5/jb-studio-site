import { trackEvent } from "@/components/analytics";
import { Button } from "@/components/ui/button";
import { FIND_US, SITE } from "@/lib/site";

/** Where the studio is and how to get in. Kept short on purpose. */
export function FindUs() {
  return (
    <section
      id="find-us"
      aria-labelledby="find-us-heading"
      className="scroll-mt-16 border-t border-fg/8 px-5 py-14 md:px-8 md:py-20"
    >
      <div className="grid gap-8 md:grid-cols-12 md:gap-10">
        <h2 id="find-us-heading" className="font-display text-4xl md:col-span-5 md:text-5xl">
          {FIND_US.heading}.
        </h2>
        <div className="md:col-span-7">
          <address className="text-base leading-relaxed text-fg not-italic">
            {SITE.address.street}
            <br />
            {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}
          </address>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted">{FIND_US.body}</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            {FIND_US.lost}{" "}
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="text-fg underline underline-offset-4"
            >
              {SITE.instagramHandle}
            </a>{" "}
            or{" "}
            <a href={`mailto:${SITE.email}`} className="text-fg underline underline-offset-4">
              {SITE.email}
            </a>
            .
          </p>
          <div className="mt-6">
            <Button asChild variant="outline">
              <a
                href={FIND_US.mapsUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("directions_click")}
              >
                Open in Google Maps
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
