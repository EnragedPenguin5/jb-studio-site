import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Lightbox } from "@/components/lightbox";
import { PhotoImage } from "@/components/photo-image";
import { Button } from "@/components/ui/button";
import { GALLERIES, type Photo } from "@/lib/photos";
import { PACKAGES, pageHead, SITE } from "@/lib/site";

export const Route = createFileRoute("/work")({
  head: () =>
    pageHead(
      `Work - ${SITE.name}`,
      "Browse the full Jet Black Studio portfolio: portrait, maternity, family, and nightlife photography from real sessions in Saskatoon.",
      "/work",
    ),
  component: Work,
});

type GalleryId = (typeof GALLERIES)[number]["id"];

/** The words beside each gallery, plus where its pricing and details live. */
const GALLERY_COPY: Record<
  GalleryId,
  { blurb: string; packageId: (typeof PACKAGES)[number]["id"]; detailsHref: string; bookType: string }
> = {
  portraits: {
    blurb:
      "Personal portraits, headshots, and creative studio work. Some sessions are clean and simple, others play with gobos, gels and hard light. I'll match the look to what you need the photos for.",
    packageId: "portraits",
    detailsHref: "/portrait-photography",
    bookType: "portraits",
  },
  maternity: {
    blurb:
      "Calm, unhurried sessions in the studio or out around Saskatoon. Partners, kids and pets are always welcome in the frame.",
    packageId: "family",
    detailsHref: "/maternity-photography",
    bookType: "family",
  },
  family: {
    blurb:
      "Relaxed family photos that actually look like your family. I keep things loose so kids can be kids, and the real moments happen on their own.",
    packageId: "family",
    detailsHref: "/family-photography",
    bookType: "family",
  },
  nightlife: {
    blurb:
      "Club nights, DJ sets, parties and events. I shoot the energy of the room, with sneak peeks in 24-48 hours so you can post while the night is still fresh.",
    packageId: "nightlife",
    detailsHref: "/nightlife-photography",
    bookType: "nightlife",
  },
};

function Work() {
  return (
    <main className="pt-16">
      <header className="px-5 pt-10 pb-6 md:px-8 md:pt-14 md:pb-8">
        <h1 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
          Work
        </h1>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
          Recent sessions, grouped by the kind of shoot. Every photo here was
          taken and edited by me in Saskatoon.
        </p>
      </header>

      <nav
        className="sticky top-16 z-40 flex gap-6 overflow-x-auto border-y border-fg/8 bg-bg/90 px-5 py-3 backdrop-blur-md md:px-8"
        aria-label="Galleries"
      >
        {GALLERIES.map((gallery) => (
          <a
            key={gallery.id}
            href={`#${gallery.id}`}
            className="shrink-0 text-sm text-muted transition-[color] duration-[var(--motion-quick)] ease-[var(--ease-out)] hover:text-fg"
          >
            {gallery.name}
          </a>
        ))}
      </nav>

      {GALLERIES.map((gallery, i) => (
        <GallerySection
          key={gallery.id}
          id={gallery.id}
          name={gallery.name}
          photos={[...gallery.photos]}
          first={i === 0}
        />
      ))}
    </main>
  );
}

function GallerySection({
  id,
  name,
  photos,
  first,
}: {
  id: GalleryId;
  name: string;
  photos: Photo[];
  first: boolean;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const copy = GALLERY_COPY[id];
  const pkg = PACKAGES.find((item) => item.id === copy.packageId);
  const [lead, ...rest] = photos;

  return (
    <section
      id={id}
      className={`scroll-mt-32 px-5 py-14 md:px-8 md:py-20 ${first ? "" : "border-t border-fg/8"}`}
    >
      <div className="grid gap-8 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-36">
            <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
              {name}
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {copy.blurb}
            </p>
            {pkg ? (
              <p className="mt-6 text-sm text-fg">
                Starting at {pkg.startingPrice}
                <span className="text-muted"> · {photos.length} photos</span>
              </p>
            ) : null}
            <div className="mt-6 flex flex-wrap items-center gap-5">
              <Button asChild variant="outline">
                <Link to="/contact" search={{ type: copy.bookType }}>
                  Book this
                </Link>
              </Button>
              <a
                href={copy.detailsHref}
                className="text-sm text-muted underline-offset-4 transition-[color] duration-[var(--motion-quick)] ease-[var(--ease-out)] hover:text-fg hover:underline"
              >
                {name} details
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 md:col-span-8">
          {lead ? (
            <PhotoButton photo={lead} onOpen={() => setOpen(0)} sizes="(max-width: 768px) 100vw, 66vw" />
          ) : null}
          {rest.length ? (
            <ul className="grid grid-cols-2 gap-1.5">
              {rest.map((photo, i) => {
                // An odd photo out closes the section as one wide frame.
                const wide = rest.length % 2 === 1 && i === rest.length - 1;
                return (
                  <li key={photo.id} className={wide ? "col-span-2" : undefined}>
                    <PhotoButton
                      photo={photo}
                      onOpen={() => setOpen(i + 1)}
                      sizes={wide ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                      frame={wide ? "aspect-[3/2]" : "aspect-portrait"}
                    />
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      </div>

      <Lightbox photos={photos} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />
    </section>
  );
}

function PhotoButton({
  photo,
  onOpen,
  sizes,
  frame,
}: {
  photo: Photo;
  onOpen: () => void;
  sizes: string;
  /** Fixed crop for grid tiles; the lead photo keeps its own shape. */
  frame?: string;
}) {
  return (
    <button
      type="button"
      className={`group block w-full overflow-hidden p-0 text-left ${frame ?? ""}`}
      onClick={onOpen}
      aria-label={`View larger: ${photo.alt}`}
    >
      <PhotoImage
        photo={photo}
        sizes={sizes}
        className={`${frame ? "size-full object-cover" : "h-auto w-full"} transition-[transform,opacity] duration-[var(--motion-slow)] ease-[var(--ease-out)] group-hover:scale-[1.02] group-hover:opacity-90`}
      />
    </button>
  );
}
