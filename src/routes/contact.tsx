import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/contact-form";
import { pageHead, SITE } from "@/lib/site";

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
      "Request a portrait, family, or nightlife shoot with Jet Black Studio in Saskatoon. Tell us the date and location and we'll reply by email.",
      "/contact",
    ),
  component: Contact,
});

function Contact() {
  const { type } = Route.useSearch();

  return (
    <main className="moonlit pt-16">
      <div className="grid gap-12 px-5 pt-10 pb-20 md:grid-cols-12 md:gap-10 md:px-8 md:pt-16 md:pb-28">
        <header className="md:col-span-5">
          <h1 className="font-display text-6xl md:text-8xl">Book a shoot.</h1>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
            Tell us the kind of shoot, a date, and where. We’ll reply by email with ideas and
            a quote.
          </p>
          <p className="mt-6 text-base text-muted">
            Or write directly:{" "}
            <a className="text-fg underline underline-offset-4" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </p>
        </header>
        <div className="md:col-span-6 md:col-start-7">
          <ContactForm initialType={type} />
        </div>
      </div>
    </main>
  );
}
