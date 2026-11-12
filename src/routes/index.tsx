import { createFileRoute, Link } from "@tanstack/react-router";
import { FindUs } from "@/components/find-us";
import { PhotoCarousel } from "@/components/photo-carousel";
import { PhotoImage } from "@/components/photo-image";
import { PromoSection } from "@/components/promo-section";
import { Button } from "@/components/ui/button";
import { FEATURED, HERO, RANGE } from "@/lib/photos";
import { HERO_COPY, JOLIE_BETE, pageHead, RANGE_COPY, SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      `${SITE.name} - Portraits, family & nightlife photography in Saskatoon`,
      "Jet Black Studio is a photography studio in Riversdale, Saskatoon. Portraits, headshots, family, maternity and nightlife, for people who want something a little different. Book a shoot.",
      "/",
    ),
  component: Home,
});

const STEPS = [
  {
    title: "Plan it together",
    body: "Tell us what you're after. We'll help with ideas, outfits and timing so you walk in ready.",
  },
  {
    title: "Show up and relax",
    body: "The lights, backdrops and camera are all set before you arrive. We'll guide you through the whole shoot, one easy step at a time.",
  },
  {
    title: "Get your gallery",
    body: "Edited, print-ready photos in a private online gallery you can download and share.",
  },
] as const;

const quietLink =
  "text-sm text-muted underline underline-offset-4 transition-[color] duration-[var(--motion-quick)] ease-[var(--ease-out)] hover:text-fg";

function Home() {
  return (
    <main>
      {/* Hero: on phones the portrait fills the screen; on wide screens it
          takes the right half so it is never cropped to a letterbox. */}
      <section className="relative min-h-svh bg-bg md:grid md:grid-cols-2">
        <div className="absolute inset-x-0 top-16 bottom-0 md:relative md:top-0 md:order-2">
          <PhotoImage
            photo={HERO}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="iris absolute inset-0 size-full object-cover object-[30%_0%] outline-0 md:object-[50%_20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-transparent md:hidden" />
        </div>
        <div className="relative z-10 flex min-h-svh flex-col justify-end px-5 pt-24 pb-10 md:order-1 md:justify-center md:px-8 md:pb-16">
          <h1 className="font-display text-[17vw] md:text-[7.5vw]">
            {HERO_COPY.headline}
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-fg/85">{HERO_COPY.sub}</p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Button asChild size="lg">
              <Link to="/contact">Book a shoot</Link>
            </Button>
            <Link to="/work" className={quietLink.replace("text-muted", "text-fg")}>
              See the work
            </Link>
          </div>
        </div>
      </section>

      <PromoSection />

      <section className="pt-14 md:pt-20">
        <h2 className="px-5 font-display text-5xl md:px-8 md:text-7xl">Recent work.</h2>
        <p className="mt-4 max-w-md px-5 text-base leading-relaxed text-muted md:px-8">
          Some from the studio, some from out around Saskatoon. Swipe through, and tap one to see it big.
        </p>
        <div className="mt-10">
          <PhotoCarousel photos={FEATURED} />
        </div>
        <div className="flex justify-center px-5 pt-8">
          <Link to="/work" className={quietLink}>
            See the contact sheets
          </Link>
        </div>
      </section>

      <section className="moonlit px-5 py-16 md:px-8 md:py-24">
        <h2 className="font-display text-5xl md:text-7xl">{RANGE_COPY.heading}</h2>
        <div className="mt-6 flex max-w-xl flex-col gap-4 text-base leading-relaxed text-muted md:text-lg">
          {RANGE_COPY.body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        {/* Three very different looks, side by side, to show the range. */}
        <ul className="mt-10 grid grid-cols-3 gap-1.5 md:gap-3">
          {RANGE.map((photo) => (
            <li key={photo.id}>
              <PhotoImage
                photo={photo}
                sizes="33vw"
                className="aspect-portrait w-full object-cover"
              />
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-fg/8 px-5 py-16 md:px-8 md:py-24">
        <h2 className="max-w-xl font-display text-5xl md:text-7xl">How a session goes.</h2>
        <ol className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-3">
              <h3 className="font-display text-4xl">
                <span className="mr-2 tabular-nums text-muted">{i + 1}</span>
                {step.title}
              </h3>
              <p className="max-w-sm text-base leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 flex flex-wrap items-center gap-6">
          <Button asChild>
            <Link to="/contact">Book a shoot</Link>
          </Button>
          <Link to="/services" className={quietLink}>
            Services and pricing
          </Link>
        </div>
      </section>

      <section
        aria-labelledby="jolie-bete-heading"
        className="border-t border-fg/8 bg-surface px-5 py-16 md:px-8 md:py-24"
      >
        <h2
          id="jolie-bete-heading"
          lang="fr"
          className="font-serif text-7xl leading-[0.9] text-red italic md:text-9xl"
        >
          {JOLIE_BETE.name}
        </h2>
        <p className="mt-3 text-base text-muted">{JOLIE_BETE.meaning}</p>
        <div className="mt-8 flex max-w-md flex-col gap-4 text-base leading-relaxed text-fg/85">
          {JOLIE_BETE.body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link to="/contact" search={{ type: "other" }}>
              {JOLIE_BETE.cta}
            </Link>
          </Button>
        </div>
      </section>

      <FindUs />
    </main>
  );
}
