import { createFileRoute } from "@tanstack/react-router";
import { pageHead, SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead(
      `Privacy policy - ${SITE.name}`,
      `How ${SITE.name} handles the information you share through this website.`,
      "/privacy",
    ),
  component: Privacy,
});

const UPDATED = "October 3, 2026";

function Privacy() {
  return (
    <main className="pt-16">
      <div className="mx-auto max-w-2xl px-5 pt-10 pb-24 md:px-8 md:pt-14">
        <p className="text-xs tracking-label text-muted uppercase">Legal</p>
        <h1 className="font-display mt-3 text-4xl font-medium tracking-tight md:text-5xl">
          Privacy policy
        </h1>
        <p className="mt-3 text-sm text-muted">Last updated {UPDATED}</p>

        <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-muted [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-medium [&_h2]:text-fg">
          <section className="flex flex-col gap-3">
            <h2>Who we are</h2>
            <p>
              {SITE.name} is a photography business run by {SITE.photographer} in{" "}
              {SITE.city}, {SITE.region}. Questions about your information can go to{" "}
              <a className="text-fg underline-offset-4 hover:underline" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
              .
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2>What we collect</h2>
            <p>
              When you send a booking request, we collect what you type into the form: your
              name, email, phone number (optional), shoot type, date, location, how you heard
              about us, and your message. We use it only to reply to you and plan your session.
            </p>
            <p>
              The form is delivered to our inbox by FormSubmit (formsubmit.co), an email
              forwarding service. We don't sell or share your details with anyone else.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2>Analytics</h2>
            <p>
              We use Google Analytics and Microsoft Clarity to understand how people use this
              site, such as which pages are viewed, how far people scroll and roughly where
              visitors are from. These tools use cookies and similar technology and collect
              information like your device, browser and an approximate location. They don't
              tell us who you are. Clarity masks text you type into forms.
            </p>
            <p>
              You can block these with your browser's privacy settings or an ad blocker, or
              opt out of Google Analytics with Google's{" "}
              <a
                className="text-fg underline-offset-4 hover:underline"
                href="https://tools.google.com/dlpage/gaoptout"
                rel="noreferrer"
                target="_blank"
              >
                opt-out add-on
              </a>
              .
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2>Your photos</h2>
            <p>
              Galleries from your session are delivered through a private client gallery. We may
              share a few favourite images in our portfolio or on Instagram. If you'd rather we
              didn't, just tell us and we won't.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2>How long we keep it and your rights</h2>
            <p>
              We keep inquiry emails as long as needed to run the business and keep basic
              records. You can ask to see, correct, or delete the information we hold about you
              at any time by emailing us.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
