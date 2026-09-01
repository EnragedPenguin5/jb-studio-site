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
      "JB Studio is Johnathon, a photographer in Saskatoon, Saskatchewan. Portraits, family, and nightlife. Book a shoot.",
    ),
  component: Home,
});

function Home() {
  return (
    <main>
      <section className="relative min-h-svh bg-bg">
        <PhotoImage
          photo={HERO}
          priority
          sizes="100vw"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent" />
        <div className="relative z-10 flex min-h-svh flex-col justify-end px-5 pb-12 pt-24 md:px-8 md:pb-16">
          <p className="max-w-xl font-display text-3xl leading-tight font-medium tracking-tight text-fg md:text-5xl">
            {SITE.positioning}
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

      <div className="flex justify-center px-5 py-12 md:py-16">
        <Link
          to="/work"
          className="text-sm text-muted underline-offset-4 transition-[color] duration-[var(--motion-quick)] ease-[var(--ease-out)] hover:text-fg hover:underline"
        >
          All work
        </Link>
      </div>
    </main>
  );
}
