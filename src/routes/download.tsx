import { createFileRoute } from "@tanstack/react-router";
import { pageHead, SITE } from "@/lib/site";

export const Route = createFileRoute("/download")({
  head: () =>
    pageHead(
      `Download site files - ${SITE.name}`,
      "Download a zip of the JB Studio site files.",
    ),
  component: Download,
});

function Download() {
  return (
    <main className="pt-16">
      <div className="mx-auto max-w-lg px-5 pt-16 pb-24 md:px-8">
        <p className="text-xs tracking-label text-muted uppercase">Export</p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-tight">
          Site files
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Zip of the pages, photos, and copy. About 3 MB. Unzip it on your
          computer, then read README.txt inside.
        </p>
        <a
          href="/JB-Studio.zip"
          download="JB-Studio.zip"
          className="mt-8 inline-flex h-12 items-center justify-center bg-accent px-6 text-sm font-medium text-accent-fg"
        >
          Download JB-Studio.zip
        </a>
      </div>
    </main>
  );
}
