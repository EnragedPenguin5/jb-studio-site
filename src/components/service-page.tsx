import { Link } from "@tanstack/react-router";
import { PhotoGrid } from "@/components/photo-grid";
import { Button } from "@/components/ui/button";
import { SERVICE_PAGES, type ServicePageContent } from "@/lib/services";
import { PACKAGES, SITE } from "@/lib/site";

export function ServicePage({ page }: { page: ServicePageContent }) {
  const pkg = PACKAGES.find((item) => item.id === page.packageId)!;
  const others = SERVICE_PAGES.filter((item) => item.slug !== page.slug);

  return (
    <main className="pt-16">
      <header className="px-5 pt-10 pb-8 md:px-8 md:pt-14">
        <p className="text-xs tracking-label text-muted uppercase">
          {SITE.name} · {SITE.city}
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-medium tracking-tight md:text-5xl">
          {page.h1}
        </h1>
        <div className="mt-5 flex max-w-2xl flex-col gap-4 text-sm leading-relaxed text-muted md:text-base">
          {page.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/contact" search={{ type: page.bookType }}>
              Book a session
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/work">See more work</Link>
          </Button>
        </div>
      </header>

      <section className="px-1 pb-10 md:px-1.5" aria-label={`${page.label} photos`}>
        <PhotoGrid photos={page.photos} />
      </section>

      <div className="mx-auto grid max-w-5xl gap-12 px-5 py-12 md:grid-cols-[1fr_20rem] md:gap-16 md:px-8">
        <div className="flex flex-col gap-10">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
                {section.heading}
              </h2>
              <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed text-muted md:text-base">
                {section.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </section>
          ))}

          <section>
            <h2 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
              Questions
            </h2>
            <dl className="mt-4 flex flex-col divide-y divide-fg/8 border-y border-fg/8">
              {page.faqs.map((faq) => (
                <div key={faq.q} className="py-5">
                  <dt className="text-sm font-medium text-fg md:text-base">{faq.q}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted">{faq.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

        <aside className="h-fit border border-fg/10 bg-surface px-6 py-8 md:sticky md:top-24">
          <h2 className="font-display text-2xl font-medium tracking-tight">
            {page.label} session
          </h2>
          <p className="mt-3 text-sm text-fg">Starting at {pkg.startingPrice}</p>
          <p className="mt-1 text-xs text-muted">Final quote confirmed when we book.</p>
          <p className="mt-1 text-sm text-muted">Turnaround: {pkg.turnaround}</p>
          <ul className="mt-6 flex flex-col gap-2 text-sm leading-relaxed text-muted">
            {pkg.includes.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <Button asChild className="mt-8 w-full">
            <Link to="/contact" search={{ type: page.bookType }}>
              Book a session
            </Link>
          </Button>
        </aside>
      </div>

      <nav
        className="border-t border-fg/8 px-5 py-10 md:px-8"
        aria-label="Other services"
      >
        <p className="text-xs tracking-label text-muted uppercase">Also in Saskatoon</p>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {others.map((item) => (
            <li key={item.slug}>
              <a
                href={item.slug}
                className="text-muted underline-offset-4 transition-[color] duration-[var(--motion-quick)] ease-[var(--ease-out)] hover:text-fg hover:underline"
              >
                {item.label} photography
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
