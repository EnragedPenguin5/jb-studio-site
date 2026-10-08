import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SERVICE_PAGES } from "@/lib/services";
import { PACKAGES, pageHead, SITE } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () =>
    pageHead(
      `Services - ${SITE.name}`,
      "JB Photo Studio pricing: portraits from $200.00, family sessions from $250.00, nightlife coverage from $275.00, plus a few by-donation sessions each month. Turnaround times and what's included.",
      "/services",
    ),
  component: Services,
});

function Services() {
  return (
    <main className="pt-16">
      <header className="px-5 pt-10 pb-10 md:px-8 md:pt-14">
        <h1 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
          Services
        </h1>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
          Three ways to book, plus a few by-donation spots each month. I’ll
          quote the rest once I know the shoot.
        </p>
      </header>

      <div className="grid gap-px bg-fg/8 md:grid-cols-2 xl:grid-cols-4">
        {PACKAGES.map((item) => (
          <article key={item.id} className="flex flex-col bg-bg px-5 py-10 md:px-8">
            <h2 className="font-display text-3xl font-medium tracking-tight">
              {item.name}
            </h2>
            <p className="mt-4 text-sm text-fg">Starting at {item.startingPrice}</p>
            <p className="mt-1 text-sm text-muted">
              Typical turnaround {item.turnaround}
            </p>
            <ul className="mt-8 flex flex-col gap-3 text-sm leading-relaxed text-muted">
              {item.includes.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild variant="outline">
                <Link to="/contact" search={{ type: item.id }}>
                  Book this
                </Link>
              </Button>
              {SERVICE_PAGES.filter((page) => page.packageId === item.id).map((page) => (
                <a
                  key={page.slug}
                  href={page.slug}
                  className="text-sm text-muted underline-offset-4 hover:text-fg hover:underline"
                >
                  {page.label} details
                </a>
              ))}
            </div>
          </article>
        ))}

        <article
          id="by-donation"
          className="flex scroll-mt-24 flex-col bg-surface px-5 py-10 md:px-8"
        >
          <p className="text-xs tracking-label text-muted uppercase">Community</p>
          <h2 className="mt-2 font-display text-3xl font-medium tracking-tight">
            By donation
          </h2>
          <p className="mt-4 text-sm text-fg">Pay what you can</p>
          <p className="mt-1 text-sm text-muted">Limited spots each month</p>
          <div className="mt-8 flex flex-col gap-3 text-sm leading-relaxed text-muted">
            <p>
              Every month I set aside a few studio hours for people in special
              circumstances, so photos aren’t out of reach for anyone in our
              community. You pay by donation: whatever you’re able to, even if
              that’s very little.
            </p>
            <p>
              Send a request and tell me a bit about your situation and what
              you’d like photographed. I can only take on a limited number each
              month, so I can’t promise every request, but I’ll reply to everyone.
            </p>
          </div>
          <div className="mt-10">
            <Button asChild variant="outline">
              <Link to="/contact" search={{ type: "donation" }}>
                Request a spot
              </Link>
            </Button>
          </div>
        </article>
      </div>
    </main>
  );
}
