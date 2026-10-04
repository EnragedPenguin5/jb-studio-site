import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SERVICE_PAGES } from "@/lib/services";
import { PACKAGES, pageHead, SITE } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () =>
    pageHead(
      `Services - ${SITE.name}`,
      "JB Photo Studio pricing: portraits from $200 CAD, family sessions from $250 CAD, nightlife coverage from $275 CAD. Turnaround times and what's included.",
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
          Three ways to book. I’ll quote the rest once I know the shoot.
        </p>
      </header>

      <div className="grid gap-px bg-fg/8 md:grid-cols-3">
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
      </div>
    </main>
  );
}
