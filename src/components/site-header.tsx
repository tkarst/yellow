"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav, site } from "@/content/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,border,backdrop-filter] duration-300",
        scrolled
          ? "border-b border-white/10 bg-[#070605]/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.75rem] sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-3 rounded-sm focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:outline-none"
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
            render={
              <a href="#booking" className="hidden sm:inline-flex" />
            }
            className="hidden h-10 px-4 font-display text-[0.72rem] tracking-[0.22em] uppercase sm:inline-flex"
          >
            Book the band
          </Button>

          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  aria-label="Open menu"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="overflow-y-auto border-white/10 bg-[#0c0a09] pt-14"
            >
              <SheetHeader>
                <SheetTitle className="font-display tracking-[0.28em] text-gold uppercase">
                  {site.name}
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4" aria-label="Mobile">
                {nav.map((item) => (
                  <SheetClose
                    key={item.href}
                    render={
                      <a
                        href={item.href}
                        className="font-display py-3 text-lg tracking-[0.22em] text-foreground/90 uppercase"
                      />
                    }
                  >
                    {item.label}
                  </SheetClose>
                ))}
              </nav>
              <div className="p-4">
                <SheetClose
                  render={
                    <a
                      href="#booking"
                      className="bg-primary text-primary-foreground inline-flex h-11 w-full items-center justify-center font-display text-sm tracking-[0.22em] uppercase"
                    />
                  }
                >
                  Book the band
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
