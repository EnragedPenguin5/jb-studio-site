import { createFileRoute, Link } from "@tanstack/react-router";
import { PhotoImage } from "@/components/photo-image";
import { Button } from "@/components/ui/button";
import { PHOTOS, type Photo } from "@/lib/photos";
import { SERVICE_PAGES } from "@/lib/services";
import { PACKAGES, pageHead, SITE } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () =>
    pageHead(
      `Services - ${SITE.name}`,
      "Jet Black Studio pricing: portraits from $200, family sessions from $250, nightlife coverage from $275, plus by-donation sessions and hosted studio time in Riversdale, Saskatoon.",
      "/services",
    ),
  component: Services,
});

/** The photo shown beside each package. */
const PACKAGE_PHOTO: Record<(typeof PACKAGES)[number]["id"], Photo> = {
  portraits: PHOTOS.PHOTO_38,
  family: PHOTOS.PHOTO_05,
  nightlife: PHOTOS.PHOTO_08,
};

const quietLink =
  "text-sm text-muted underline underline-offset-4 transition-[color] duration-[var(--motion-quick)] ease-[var(--ease-out)] hover:text-fg";

function Services() {
  return (
    <main className="pt-16">
      <header className="px-5 pt-10 pb-12 md:px-8 md:pt-16 md:pb-20">
        <h1 className="font-display text-6xl md:text-8xl">Services.</h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
          Every session is photographed by us, in our studio in Riversdale or on location
          around Saskatoon. Starting prices are below, and we’ll confirm your exact quote once
          we know the shoot.
        </p>
      </header>

      {PACKAGES.map((item, i) => (
        <article
          key={item.id}
          className="grid border-t border-fg/8 md:grid-cols-12 md:items-center"
        >
          <PhotoImage
            photo={PACKAGE_PHOTO[item.id]}
            priority={i === 0}
            sizes="(max-width: 768px) 100vw, 42vw"
            className={`aspect-portrait w-full object-cover outline-0 md:col-span-5 ${i % 2 === 1 ? "md:order-2 md:col-start-8" : ""}`}
          />
          <div className={`px-5 py-12 md:col-span-7 md:px-12 md:py-16 lg:px-20 ${i % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
            <h2 className="font-display text-5xl md:text-7xl">{item.name}</h2>
            <p className="mt-5 text-lg text-fg">From {item.startingPrice}</p>
            <p className="mt-1 text-base text-muted">Typical turnaround {item.turnaround}</p>
            <ul className="mt-8 max-w-md border-t border-fg/15 text-base text-fg/85">
              {item.includes.map((line) => (
                <li key={line} className="border-b border-fg/15 py-3">
                  {line}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Button asChild>
                <Link to="/contact" search={{ type: item.id }}>
                  Book this
                </Link>
              </Button>
              {SERVICE_PAGES.filter((page) => page.packageId === item.id).map((page) => (
                <a key={page.slug} href={page.slug} className={quietLink}>
                  {page.label} details
                </a>
              ))}
            </div>
          </div>
        </article>
      ))}

      <section className="grid border-t border-fg/8 md:grid-cols-2">
        <article
          id="by-donation"
          className="scroll-mt-24 border-b border-fg/8 bg-surface px-5 py-14 md:border-r md:border-b-0 md:px-16 md:py-20"
        >
          <h2 className="font-display text-4xl md:text-5xl">By donation.</h2>
          <p className="mt-4 text-lg text-fg">Pay what you can</p>
          <p className="mt-1 text-base text-muted">Limited spots each month</p>
          <div className="mt-8 flex max-w-md flex-col gap-4 text-base leading-relaxed text-muted">
            <p>
              Every month we set aside a few studio hours for people in special circumstances,
              so photos aren’t out of reach for anyone in our community. You pay by donation:
              whatever you’re able to, even if that’s very little.
            </p>
            <p>
              Send a request and tell us a bit about your situation and what you’d like
              photographed. We can only take on a limited number each month, so we can’t
              promise every request, but we’ll reply to everyone.
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

        <article id="studio-time" className="scroll-mt-24 px-5 py-14 md:px-16 md:py-20">
          <h2 className="font-display text-4xl md:text-5xl">Hosted studio time.</h2>
          <p className="mt-4 text-lg text-fg">Hourly, rates on request</p>
          <p className="mt-1 text-base text-muted">We’re on site for every booking</p>
          <div className="mt-8 flex max-w-md flex-col gap-4 text-base leading-relaxed text-muted">
            <p>
              Photographers, videographers and creators can book Studio B by the hour. We’ll
              be there to open up, help get the lights and backdrops where you want them, and
              keep the day running smoothly so you can focus on your shoot.
            </p>
            <p>
              The studio has seamless paper, a black velvet backdrop, softboxes, a snoot with
              gobos and gels, and RGB tube lighting. If you’d rather have us behind the
              camera, any of the sessions above can happen in the studio too.
            </p>
          </div>
          <div className="mt-10">
            <Button asChild variant="outline">
              <Link to="/contact" search={{ type: "studio" }}>
                Ask about studio time
              </Link>
            </Button>
          </div>
        </article>
      </section>
    </main>
  );
}
