import { createFileRoute, Link } from "@tanstack/react-router";
import { PhotoImage } from "@/components/photo-image";
import { Button } from "@/components/ui/button";
import { ABOUT_PHOTO } from "@/lib/photos";
import { pageHead, SITE } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      `About - ${SITE.name}`,
      "Johnathon is a photographer based in Saskatoon, Saskatchewan. Portraits, family, and nightlife.",
    ),
  component: About,
});

function About() {
  return (
    <main className="pt-16">
      <div className="grid md:grid-cols-2">
        <PhotoImage
          photo={ABOUT_PHOTO}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="aspect-portrait w-full object-cover md:aspect-auto md:h-full md:min-h-svh"
        />
        <div className="flex flex-col justify-end px-5 py-12 md:px-12 md:py-16">
          <p className="text-xs tracking-label text-muted uppercase">About</p>
          <h1 className="font-display mt-3 text-4xl font-medium tracking-tight md:text-5xl">
            {SITE.photographer}
          </h1>
          <div className="mt-8 flex max-w-md flex-col gap-4 text-sm leading-relaxed text-muted">
            <p>
              What I love most is catching a real, happy moment shared
              between people here in Saskatoon. Not a pose, just people
              actually being together, and me lucky enough to be there
              with a camera.
            </p>
            <p>
              Photos are strange like that: great the day you take them,
              but give it a year, two years, five, ten. They hit
              completely different. That's why I always push prints. Get
              it printed, put it somewhere you'll actually see it. Don't
              let it become just another photo lost in the gallery.
            </p>
            <p>
              On the day, I'm pretty relaxed. I'll direct a little here
              and there, but nothing to get worried about. Mostly I just
              want you to feel normal so the real moment can happen. I'm
              genuinely grateful every time someone trusts me to capture
              that for them.
            </p>
          </div>
          <div className="mt-10">
            <Button asChild>
              <Link to="/contact">Book a shoot</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
