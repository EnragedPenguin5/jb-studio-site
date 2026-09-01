import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-5 px-6 text-center">
      <p className="text-xs tracking-label text-muted uppercase">404</p>
      <h1 className="font-display text-4xl font-medium tracking-tight">
        Page not found
      </h1>
      <Link
        to="/"
        className="inline-flex h-11 items-center bg-accent px-5 text-sm font-medium text-accent-fg transition-[background-color,transform] duration-[var(--motion-quick)] ease-[var(--ease-out)] hover:bg-accent-hover active:scale-[0.96]"
      >
        Back home
      </Link>
    </main>
  );
}
