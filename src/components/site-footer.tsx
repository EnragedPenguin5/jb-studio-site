import { Link } from "@tanstack/react-router";
import { NAV, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-fg/8">
      <div className="flex flex-col gap-8 px-5 py-10 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-display text-xl font-medium tracking-mark">
            {SITE.name}
          </p>
          <p className="mt-2 text-sm text-muted">
            {SITE.city}, {SITE.region}
          </p>
          <nav
            className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm"
            aria-label="Footer"
          >
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-muted transition-[color] duration-[var(--motion-quick)] ease-[var(--ease-out)] hover:text-fg"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-muted transition-[color] duration-[var(--motion-quick)] ease-[var(--ease-out)] hover:text-fg"
            >
              Book a shoot
            </Link>
          </nav>
        </div>
        <div className="flex flex-col gap-2 text-sm md:items-end">
          <a
            href={SITE.instagramUrl}
            className="text-muted transition-[color] duration-[var(--motion-quick)] ease-[var(--ease-out)] hover:text-fg"
            rel="noreferrer"
            target="_blank"
          >
            {SITE.instagramHandle}
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="text-muted transition-[color] duration-[var(--motion-quick)] ease-[var(--ease-out)] hover:text-fg"
          >
            {SITE.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
