import { createFileRoute, Link } from "@tanstack/react-router";
import { PhotoImage } from "@/components/photo-image";
import { Button } from "@/components/ui/button";
import { ABOUT_PHOTO } from "@/lib/photos";
import { JOLIE_BETE, pageHead, SITE, STUDIO_KIT } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      `About - ${SITE.name}`,
      "Jet Black Studio is a photography studio in Riversdale, Saskatoon, with photography by Johnathon. Relaxed sessions, any style, finished properly.",
      "/about",
    ),
  component: About,
});

const prose = "flex max-w-md flex-col gap-4 text-base leading-relaxed text-muted";

function About() {
  return (
    <main className="pt-16">
      <div className="grid md:grid-cols-2">
        <div className="relative md:sticky md:top-16 md:h-[calc(100svh-4rem)]">
          <PhotoImage
            photo={ABOUT_PHOTO}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="aspect-portrait w-full object-cover md:aspect-auto md:h-full"
          />
        </div>

        <div className="px-5 py-12 md:px-12 md:py-16">
          <h1 className="font-display text-6xl md:text-8xl">The studio.</h1>
          <div className={`mt-8 ${prose}`}>
            <p>
              Jet Black Studio makes photographs for people who want something a little
              different. We aren't mainstream, and we're fine with that. The quality is the
              part we won't bend on.
            </p>
            <p>
              What we love most is catching a real moment between people. Not a pose, just
              people actually being together, and us lucky enough to be there with a camera.
            </p>
            <p>
              Photos are strange like that: great the day you take them, but give it a year,
              two years, five, ten. They hit completely different. That's why we always push
              prints. Get it printed, put it somewhere you'll actually see it. Don't let it
              become just another photo lost in the gallery.
            </p>
          </div>

          <h2 className="mt-14 font-display text-4xl md:text-5xl">The room.</h2>
          <div className={`mt-5 ${prose}`}>
            <p>
              Studio B is in Riversdale, at The Two Twenty. It's a small room that can look
              like almost anything: {STUDIO_KIT.slice(0, -1).join(", ")} and{" "}
              {STUDIO_KIT[STUDIO_KIT.length - 1]}. Clean and classic one hour, something
              stranger the next.
            </p>
            <p>
              We shoot on location too, anywhere around Saskatoon. The only limits are the size
              of the room and our imaginations, yours included.
            </p>
          </div>

          <h2 className="mt-14 font-display text-4xl md:text-5xl">On the day.</h2>
          <div className={`mt-5 ${prose}`}>
            <p>
              Relaxed. We'll direct a little here and there, but nothing to get worried about.
              Mostly we want you to feel like yourself so the real moment can happen.
            </p>
            <p>
              Almost everyone tells us they're awkward in front of a camera. That's fine. You
              don't need to know what to do. That part is our job.
            </p>
            <p>
              We're grateful every time someone trusts us with that.
            </p>
          </div>

          <h2 lang="fr" className="mt-14 font-serif text-5xl leading-none text-red italic md:text-6xl">
            {JOLIE_BETE.name}
          </h2>
          <div className={`mt-5 ${prose}`}>
            <p>
              {JOLIE_BETE.meaning} {JOLIE_BETE.body[0]}
            </p>
            <p>{JOLIE_BETE.body[1]}</p>
          </div>

          <p className="mt-12 text-sm text-muted">Photography by {SITE.photographer}.</p>

          <div className="mt-6 flex flex-wrap items-center gap-6">
            <Button asChild>
              <Link to="/contact">Book a shoot</Link>
            </Button>
            <Link to="/work" className="text-sm text-fg underline underline-offset-4">
              See the work
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
