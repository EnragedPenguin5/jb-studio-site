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
      "Request a portrait, family, or nightlife shoot with JB Studio in Saskatoon.",
    ),
  component: Contact,
});

function Contact() {
  const { type } = Route.useSearch();

  return (
    <main className="pt-16">
      <div className="mx-auto grid max-w-5xl gap-12 px-5 pt-10 pb-16 md:grid-cols-2 md:gap-16 md:px-8 md:pt-14 md:pb-24">
        <header>
          <h1 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
            Book a shoot
          </h1>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Tell me the kind of shoot, a date, and where. I’ll reply by email.
          </p>
          <p className="mt-8 text-sm text-muted">
            Or write directly:{" "}
            <a
              className="text-fg underline-offset-4 hover:underline"
              href={`mailto:${SITE.email}`}
            >
              {SITE.email}
            </a>
          </p>
        </header>
        <ContactForm initialType={type} />
      </div>
    </main>
  );
}
