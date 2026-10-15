import { createFileRoute, Link } from "@tanstack/react-router";
import { PhotoGrid } from "@/components/photo-grid";
import { PhotoImage } from "@/components/photo-image";
import { Button } from "@/components/ui/button";
import { FEATURED, HERO } from "@/lib/photos";
import { pageHead, SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      `${SITE.name} - Portraits, family & nightlife photography in Saskatoon`,
      "JB Photo Studio is Johnathon, a portrait photographer with a studio in Riversdale, Saskatoon. Portraits, headshots, family, maternity and nightlife. Book a shoot.",
      "/",
    ),
  component: Home,
});

const STEPS = [
  {
    title: "Plan it together",
    body: "Tell me what you're after. I'll help with ideas, outfits and timing so you walk in ready.",
  },
  {
    title: "Show up and relax",
    body: "The lights, backdrops and camera are all set before you arrive. I'll guide you through the whole shoot, one easy step at a time.",
  },
  {
    title: "Get your gallery",
    body: "Edited, print-ready photos in a private online gallery you can download and share.",
  },
] as const;

function Home() {
  return (
    <main>
      <section className="relative min-h-svh bg-bg">
        <PhotoImage
          photo={HERO}
          priority
          sizes="100vw"
          className="absolute inset-0 size-full object-cover object-[50%_10%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent" />
        <div className="relative z-10 flex min-h-svh flex-col justify-end px-5 pb-12 pt-24 md:px-8 md:pb-16">
          <h1 className="max-w-xl font-display text-3xl leading-tight font-medium tracking-tight text-fg md:text-5xl">
            {SITE.positioning}
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-fg/80 md:text-base">
            {SITE.promise}
          </p>
          <div className="mt-6">
            <Button asChild size="lg">
              <Link to="/contact">Book a shoot</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-1 py-1 md:px-1.5 md:py-1.5">
        <h2 className="sr-only">Selected work</h2>
        <PhotoGrid photos={FEATURED} featured />
      </section>

      <div className="flex justify-center px-5 pt-12 md:pt-16">
        <Link
          to="/work"
          className="text-sm text-muted underline-offset-4 transition-[color] duration-[var(--motion-quick)] ease-[var(--ease-out)] hover:text-fg hover:underline"
        >
          All work
        </Link>
      </div>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <p className="text-xs tracking-label text-muted uppercase">
          Studio B · Riversdale
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-medium tracking-tight md:text-4xl">
          Your session, start to finish
        </h2>
        <ol className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-3">
              <span className="text-xs tracking-label text-muted tabular-nums">
                0{i + 1}
              </span>
              <h3 className="font-display text-xl font-medium tracking-tight">
                {step.title}
              </h3>
              <p className="max-w-sm text-sm leading-relaxed text-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-12 flex flex-wrap items-center gap-6">
          <Button asChild>
            <Link to="/contact">Book a shoot</Link>
          </Button>
          <Link
            to="/services"
            className="text-sm text-muted underline-offset-4 transition-[color] duration-[var(--motion-quick)] ease-[var(--ease-out)] hover:text-fg hover:underline"
          >
            Services and pricing
          </Link>
        </div>
      </section>
    </main>
  );
}
