import { createFileRoute } from "@tanstack/react-router";
import { PhotoGrid } from "@/components/photo-grid";
import { GALLERIES } from "@/lib/photos";
import { pageHead, SITE } from "@/lib/site";

export const Route = createFileRoute("/work")({
  head: () =>
    pageHead(
      `Work - ${SITE.name}`,
      "Portraits, family, and nightlife photography by JB Studio in Saskatoon.",
    ),
  component: Work,
});

function Work() {
  return (
    <main className="pt-16">
      <header className="px-5 pt-10 pb-6 md:px-8 md:pt-14 md:pb-8">
        <h1 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
          Work
        </h1>
        <p className="mt-3 max-w-md text-sm text-muted">
          Portraits, family, nightlife. Few words. Look at the frames.
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

      {GALLERIES.map((gallery) => (
        <section
          key={gallery.id}
          id={gallery.id}
          className="scroll-mt-32 px-1 py-8 md:px-1.5 md:py-10"
        >
          <h2 className="px-4 pb-4 font-display text-2xl font-medium tracking-tight md:px-6">
            {gallery.name}
          </h2>
          <PhotoGrid photos={[...gallery.photos]} />
        </section>
      ))}
    </main>
  );
}
