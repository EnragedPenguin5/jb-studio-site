import { Link } from "@tanstack/react-router";
import { PhotoGrid } from "@/components/photo-grid";
import { PhotoImage } from "@/components/photo-image";
import { Button } from "@/components/ui/button";
import { SERVICE_PAGES, type ServicePageContent } from "@/lib/services";
import { PACKAGES } from "@/lib/site";

export function ServicePage({ page }: { page: ServicePageContent }) {
  const pkg = PACKAGES.find((item) => item.id === page.packageId)!;
  const others = SERVICE_PAGES.filter((item) => item.slug !== page.slug);
  const [lead, ...rest] = page.photos;

  return (
    <main className="pt-16">
      {/* The lead photo keeps its 4:5 shape at every size: full width on
          phones, window height on wide screens. */}
      <header className="grid lg:grid-cols-[minmax(0,1fr)_auto]">
        <PhotoImage
          photo={lead}
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="aspect-portrait w-full object-cover object-top outline-0 md:mx-auto md:max-w-2xl lg:order-2 lg:mx-0 lg:h-[calc(100svh-4rem)] lg:w-auto lg:max-w-[60vw]"
        />
        <div className="flex flex-col justify-center px-5 py-12 md:px-8 md:py-16">
          <h1 className="max-w-xl font-display text-5xl md:text-7xl">{page.h1}.</h1>
          <div className="mt-6 flex max-w-md flex-col gap-4 text-base leading-relaxed text-muted">
            {page.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="mt-6 text-lg text-fg">From {pkg.startingPrice}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Button asChild size="lg">
              <Link
                to="/contact"
                search={{ type: page.bookType }}
                hash={page.bookType === "nightlife" ? "request" : undefined}
              >
                Book a session
              </Link>
            </Button>
            <Link to="/work" className="text-sm text-fg underline underline-offset-4">
              See more work
            </Link>
          </div>
        </div>
      </header>

      {rest.length ? (
        <section className="px-1 py-1 md:px-1.5 md:py-1.5" aria-label={`${page.label} photos`}>
          <PhotoGrid photos={rest} />
        </section>
      ) : null}

      <div className="grid gap-14 px-5 py-16 md:grid-cols-12 md:gap-10 md:px-8 md:py-24">
        <div className="flex flex-col gap-14 md:col-span-7">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-4xl md:text-5xl">{section.heading}.</h2>
              <div className="mt-5 flex max-w-xl flex-col gap-4 text-base leading-relaxed text-muted">
                {section.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </section>
          ))}

          <section>
            <h2 className="font-display text-4xl md:text-5xl">Questions.</h2>
            <dl className="mt-6 flex max-w-xl flex-col border-t border-fg/15">
              {page.faqs.map((faq) => (
                <div key={faq.q} className="border-b border-fg/15 py-6">
                  <dt className="text-lg text-fg">{faq.q}</dt>
                  <dd className="mt-2 text-base leading-relaxed text-muted">{faq.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

        <aside className="h-fit border-t border-fg/15 pt-8 md:sticky md:top-28 md:col-span-4 md:col-start-9">
          <h2 className="font-display text-4xl">{page.label} session.</h2>
          <p className="mt-4 text-lg text-fg">From {pkg.startingPrice}</p>
          <p className="mt-1 text-sm text-muted">Final quote confirmed when we book.</p>
          <p className="mt-1 text-base text-muted">Turnaround: {pkg.turnaround}</p>
          <ul className="mt-6 border-t border-fg/15 text-base text-fg/85">
            {pkg.includes.map((line) => (
              <li key={line} className="border-b border-fg/15 py-3">
                {line}
              </li>
            ))}
          </ul>
          <Button asChild size="lg" className="mt-8 w-full">
            <Link
                to="/contact"
                search={{ type: page.bookType }}
                hash={page.bookType === "nightlife" ? "request" : undefined}
              >
              Book a session
            </Link>
          </Button>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            Tight budget or going through something?{" "}
            <a href="/services#by-donation" className="text-fg underline underline-offset-4">
              Ask about by-donation sessions
            </a>
            .
          </p>
        </aside>
      </div>

      <nav
        className="border-t border-fg/8 px-5 py-10 md:px-8"
        aria-label="Other services"
      >
        <p className="text-sm text-muted">Also in Saskatoon</p>
        <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2 font-display text-3xl">
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
