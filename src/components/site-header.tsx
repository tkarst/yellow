"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import { Button } from "@/components/ui/button";
import { nav, site } from "@/content/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,border] duration-300",
        scrolled || menuOpen
          ? "border-b border-white/10 bg-[#070605]/90"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.75rem] sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-3 rounded-sm focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:outline-none"
          onClick={() => setMenuOpen(false)}
        >
          <BrandMark size="nav" priority />
          <span className="sr-only">{site.name}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display text-[0.78rem] tracking-[0.28em] text-foreground/75 uppercase transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            nativeButton={false}
            render={<a href="#booking" />}
            className="hidden h-10 px-4 font-display text-[0.72rem] tracking-[0.22em] uppercase md:inline-flex"
          >
            Book the band
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>
    </header>

      {menuOpen ? (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-[4.25rem] bottom-0 z-[60] sm:top-[4.75rem] md:hidden"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/75"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <nav
            aria-label="Mobile"
            className="relative ml-auto flex h-full w-[min(100%,20rem)] flex-col border-l border-white/10 bg-[#0c0a09] px-6 py-8"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-display border-b border-white/10 py-4 text-xl tracking-[0.22em] text-foreground uppercase"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#booking"
              className="bg-primary text-primary-foreground mt-8 inline-flex h-12 items-center justify-center font-display text-sm tracking-[0.22em] uppercase"
              onClick={() => setMenuOpen(false)}
            >
              Book the band
            </a>
          </nav>
        </div>
      ) : null}
    </>
  );
}
