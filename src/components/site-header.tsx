import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-fg/8 bg-bg/85 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between gap-3 px-4 md:px-8">
        <Link
          to="/"
          className="font-display text-2xl leading-none font-medium tracking-mark text-fg"
          onClick={() => setOpen(false)}
        >
          {SITE.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted transition-[color] duration-[var(--motion-quick)] ease-[var(--ease-out)] hover:text-fg"
              activeProps={{ className: "text-fg" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Button asChild size="default">
            <Link to="/contact" onClick={() => setOpen(false)}>
              Book a shoot
            </Link>
          </Button>
          <button
            type="button"
            className="relative flex size-11 items-center justify-center text-fg md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <Menu
              className={cn(
                "size-5 transition-[opacity,transform,filter] duration-[var(--motion-fast)] ease-[var(--ease-out)]",
                open ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100",
              )}
              strokeWidth={1.5}
            />
            <X
              className={cn(
                "absolute size-5 transition-[opacity,transform,filter] duration-[var(--motion-fast)] ease-[var(--ease-out)]",
                open ? "scale-100 opacity-100" : "scale-[0.25] opacity-0 blur-[4px]",
              )}
              strokeWidth={1.5}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className={cn(
          "border-t border-fg/8 bg-bg md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col px-4 py-4" aria-label="Mobile">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex min-h-12 items-center text-base text-fg"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="flex min-h-12 items-center text-base text-fg"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
