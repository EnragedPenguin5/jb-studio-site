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
              I photograph portraits, families, and nightlife in {SITE.city}.
              Couples, groups, maternity. People who live here, shot without
              the stock-photo polish.
            </p>
            <p>
              I work in the city and around {SITE.region}. Sessions are
              directed but not stiff. The job is simple: show up, get the
              frame, deliver photos you actually want to keep.
            </p>
            <p>
              If you want to book, tell me the date and the kind of shoot.
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
