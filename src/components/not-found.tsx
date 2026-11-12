import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-start justify-center gap-5 px-5 md:px-8">
      <h1 className="font-display text-7xl md:text-9xl">Nothing here.</h1>
      <p className="max-w-sm text-base leading-relaxed text-muted">
        That page doesn't exist (error 404). The good stuff is this way.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button asChild>
          <Link to="/">Back home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/work">See the work</Link>
        </Button>
      </div>
    </main>
  );
}
