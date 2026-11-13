import { createFileRoute, Link } from "@tanstack/react-router";
import { trackEvent } from "@/components/analytics";
import { ContactForm } from "@/components/contact-form";
import { PhotoImage } from "@/components/photo-image";
import { Button } from "@/components/ui/button";
import { PHOTOS } from "@/lib/photos";
import { BOOKING_OPTIONS, BOOKING_URL, pageHead, SITE } from "@/lib/site";

type ContactSearch = {
  type?: string;
};

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): ContactSearch => ({
    type: typeof search.type === "string" ? search.type : undefined,
  }),
  head: () =>
    pageHead(
      `Book a shoot - ${SITE.name}`,
      "Book a headshot, portrait, family, maternity, editorial or nightlife shoot with Jet Black Studio in Saskatoon. Pick a session and book online, or send a request.",
      "/contact",
    ),
  component: Contact,
});

function Contact() {
  const { type } = Route.useSearch();

  return (
    <main className="pt-16">
      <header className="moonlit px-5 pt-10 pb-12 md:px-8 md:pt-16 md:pb-16">
        <h1 className="font-display text-6xl md:text-8xl">Book a shoot.</h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
          Pick the session that fits. Some book straight into our calendar. For the rest, send
          a request and we’ll reply by email with ideas and a quote.
        </p>
      </header>

      <ul className="grid border-t border-fg/8 md:grid-cols-2">
        {BOOKING_OPTIONS.map((option) => (
          <li
            key={option.id}
            className="flex flex-col border-b border-fg/8 md:odd:border-r"
          >
            {/* Three examples of this kind of shoot. */}
            <div className="grid grid-cols-3 gap-1">
              {option.examples.map((id) => (
                <PhotoImage
                  key={id}
                  photo={PHOTOS[id]}
                  sizes="(max-width: 768px) 33vw, 17vw"
                  className="aspect-portrait w-full object-cover outline-0"
                />
              ))}
            </div>
            <div className="flex flex-1 flex-col px-5 py-8 md:px-8 md:py-10">
              <h2 className="font-display text-4xl md:text-5xl">{option.name}</h2>
              <p className="mt-3 text-lg text-fg">{option.price}</p>
              <p className="mt-3 max-w-md text-base leading-relaxed text-muted">{option.blurb}</p>
              <div className="mt-auto pt-8">
                {option.square ? (
                  <Button asChild>
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() =>
                        trackEvent("book_click", { option: option.id, source: "book_page" })
                      }
                    >
                      Pick a time
                      <span className="sr-only"> for {option.name} (opens Square in a new tab)</span>
                    </a>
                  </Button>
                ) : (
                  <Button asChild variant="outline">
                    <Link
                      to="/contact"
                      search={{ type: option.formType }}
                      hash="request"
                      onClick={() =>
                        trackEvent("request_click", { option: option.id, source: "book_page" })
                      }
                    >
                      Request this
                      <span className="sr-only">: {option.name}</span>
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <section
        id="request"
        aria-labelledby="request-heading"
        className="grid scroll-mt-16 gap-12 px-5 py-16 md:grid-cols-12 md:gap-10 md:px-8 md:py-24"
      >
        <header className="md:col-span-5">
          <h2 id="request-heading" className="font-display text-5xl md:text-7xl">
            Send a request.
          </h2>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
            For anything quoted, on location, by donation, or studio time. Tell us the kind of
            shoot, a date, and where.
          </p>
          <p className="mt-6 text-base text-muted">
            Or write directly:{" "}
            <a className="text-fg underline underline-offset-4" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </p>
        </header>
        <div className="md:col-span-6 md:col-start-7">
          {/* Re-mount when the type changes so "Request this" pre-fills it. */}
          <ContactForm key={type ?? "none"} initialType={type} />
        </div>
      </section>
    </main>
  );
}
