import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { GreaseCircle } from "@/components/grease-circle";
import { Lightbox } from "@/components/lightbox";
import { PhotoImage } from "@/components/photo-image";
import { Button } from "@/components/ui/button";
import { GALLERIES, type Photo, type PhotoId } from "@/lib/photos";
import { PACKAGES, pageHead, SITE } from "@/lib/site";

export const Route = createFileRoute("/work")({
  head: () =>
    pageHead(
      `Work - ${SITE.name}`,
      "Browse the full Jet Black Studio portfolio: portrait, editorial, maternity, family, and nightlife photography from real sessions.",
      "/work",
    ),
  component: Work,
});

type GalleryId = (typeof GALLERIES)[number]["id"];

/** The words beside each gallery, plus where its pricing and details live. */
const GALLERY_COPY: Record<
  GalleryId,
  { blurb: string; packageId?: (typeof PACKAGES)[number]["id"]; detailsHref?: string; bookType: string }
> = {
  portraits: {
    blurb:
      "Personal portraits, headshots, and creative studio work. Some sessions are clean and simple, others play with gobos, gels and hard light. We'll match the look to what you need the photos for.",
    packageId: "portraits",
    detailsHref: "/portrait-photography",
    bookType: "portraits",
  },
  editorial: {
    blurb:
      "Concept shoots built around an idea, a wardrobe and a location. Bring the vision, or borrow one of ours.",
    packageId: "portraits",
    detailsHref: "/portrait-photography",
    bookType: "portraits",
  },
  elsewhere: {
    blurb: "Paris, on our own time. No client and no brief, just looking.",
    bookType: "other",
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
      "Relaxed family photos that actually look like your family. We keep things loose so kids can be kids, and the real moments happen on their own.",
    packageId: "family",
    detailsHref: "/family-photography",
    bookType: "family",
  },
  nightlife: {
    blurb:
      "Club nights, DJ sets, parties and events. We shoot the energy of the room, with sneak peeks in 24-48 hours so you can post while the night is still fresh.",
    packageId: "nightlife",
    detailsHref: "/nightlife-photography",
    bookType: "nightlife",
  },
};

/**
 * The frames I'd circle in red grease pencil, with the note scrawled under
 * them. Add a photo id here to circle it; remove it to un-circle it.
 */
const PICKS: Partial<Record<PhotoId, string>> = {
  PHOTO_26: "this one",
  PHOTO_39: "yes!!",
  PHOTO_42: "the cover",
  PHOTO_32: "of course",
  PHOTO_21: "that laugh",
  PHOTO_17: "the dog!!",
  PHOTO_08: "loud",
};

/** Frame numbers run on across the galleries, like one long roll. */
const FRAME_START = GALLERIES.reduce<Record<string, number>>((acc, gallery, i) => {
  acc[gallery.id] = i === 0 ? 1 : acc[GALLERIES[i - 1].id] + GALLERIES[i - 1].photos.length;
  return acc;
}, {});

function Work() {
  return (
    <main className="pt-16">
      <header className="px-5 pt-10 pb-8 md:px-8 md:pt-14">
        <h1 className="font-display text-7xl md:text-9xl">Contact sheets.</h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
          Recent sessions, laid out the way we look at them: every frame on the sheet, our
          favourites circled in red. Every photo here was taken and edited by us.
          Tap a frame to see it big.
        </p>
      </header>

      <nav
        className="sticky top-16 z-40 flex gap-6 overflow-x-auto border-y border-fg/8 bg-bg/90 px-5 backdrop-blur-md md:px-8"
        aria-label="Galleries"
      >
        {GALLERIES.map((gallery) => (
          <a
            key={gallery.id}
            href={`#${gallery.id}`}
            className="flex min-h-11 shrink-0 items-center text-sm text-muted transition-[color] duration-[var(--motion-quick)] ease-[var(--ease-out)] hover:text-fg"
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
  const pkg = copy.packageId ? PACKAGES.find((item) => item.id === copy.packageId) : undefined;

  return (
    <section
      id={id}
      className={`scroll-mt-28 px-5 py-14 md:px-8 md:py-20 ${first ? "" : "border-t border-fg/8"}`}
    >
      <div className="grid gap-8 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-36">
            <h2 className="font-display text-5xl md:text-7xl">{name}</h2>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-muted">{copy.blurb}</p>
            {pkg ? (
              <p className="mt-6 text-sm text-fg">
                From {pkg.startingPrice}
                <span className="text-muted">, {photos.length} frames on this sheet</span>
              </p>
            ) : null}
            <div className="mt-6 flex flex-wrap items-center gap-5">
              <Button asChild variant="outline">
                <Link to="/contact" search={{ type: copy.bookType }}>
                  {pkg ? "Book this" : "Book a shoot"}
                </Link>
              </Button>
              {copy.detailsHref ? (
                <a
                  href={copy.detailsHref}
                  className="text-sm text-muted underline underline-offset-4 transition-[color] duration-[var(--motion-quick)] ease-[var(--ease-out)] hover:text-fg"
                >
                  {id === "editorial" ? "Portrait" : name} details
                </a>
              ) : null}
            </div>
          </div>
        </div>

        {/* The sheet: pure black like the film rebate, frames numbered in order. */}
        <ul className="grid grid-flow-dense grid-cols-2 gap-x-2 gap-y-3 bg-black p-2 md:col-span-8 md:grid-cols-3 md:gap-x-3 md:p-3">
          {photos.map((photo, i) => {
            const landscape = photo.width > photo.height;
            const note = PICKS[photo.id];
            return (
              <li key={photo.id} className={landscape ? "col-span-2" : undefined}>
                <Frame
                  photo={photo}
                  number={FRAME_START[id] + i}
                  note={note}
                  landscape={landscape}
                  onOpen={() => setOpen(i)}
                />
              </li>
            );
          })}
        </ul>
      </div>

      <Lightbox photos={photos} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />
    </section>
  );
}

function Frame({
  photo,
  number,
  note,
  landscape,
  onOpen,
}: {
  photo: Photo;
  number: number;
  note?: string;
  landscape: boolean;
  onOpen: () => void;
}) {
  return (
    <div className="relative">
      <button
        type="button"
        className={`flash block w-full overflow-hidden p-0 ${landscape ? "aspect-[3/2]" : "aspect-portrait"}`}
        onClick={onOpen}
        aria-label={`View larger: ${photo.alt}`}
      >
        <PhotoImage
          photo={photo}
          sizes={landscape ? "(max-width: 768px) 100vw, 44vw" : "(max-width: 768px) 50vw, 22vw"}
          className="size-full object-cover outline-0"
        />
      </button>
      {note ? <GreaseCircle className="-inset-x-1.5 -top-1.5 bottom-5" /> : null}
      {/* Rebate edge: frame number, and the grease-pencil note on the picks. */}
      <p aria-hidden="true" className="flex h-7 items-center justify-between gap-2 px-0.5">
        <span className="text-[11px] tracking-wider text-fg/55 tabular-nums">
          {number}
          {note ? null : <span className="ml-1.5 text-fg/30">▸ {number}A</span>}
        </span>
        {note ? (
          <span className="-rotate-2 pr-1.5 font-hand text-xl leading-none font-bold whitespace-nowrap text-red">
            {note}
          </span>
        ) : null}
      </p>
    </div>
  );
}
