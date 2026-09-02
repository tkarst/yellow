import { BrandMark } from "@/components/brand-mark";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-dvh flex-col items-center justify-center px-4 pb-24 pt-24 sm:px-6 sm:pt-28"
    >
      <div className="hero-orb pointer-events-none absolute top-1/2 left-1/2 h-[min(80vw,36rem)] w-[min(80vw,36rem)] -translate-x-1/2 -translate-y-[46%]" />

      <BrandMark size="hero" priority />

      <p className="mt-2 max-w-md text-center text-sm leading-relaxed text-foreground/75 sm:mt-3 sm:text-base">
        {site.pitch}
      </p>
      <p className="mt-2 font-serif text-sm tracking-wide text-ember sm:text-base">
        {site.formed}
      </p>

      <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:flex-row sm:justify-center">
        <Button
          nativeButton={false}
          render={<a href="#dates" />}
          className="h-12 flex-1 px-6 font-display text-[0.8rem] tracking-[0.28em] uppercase"
        >
          See dates
        </Button>
        <Button
          nativeButton={false}
          variant="outline"
          render={<a href="#booking" />}
          className="h-12 flex-1 border-gold/35 bg-transparent px-6 font-display text-[0.8rem] tracking-[0.28em] text-gold uppercase hover:bg-gold/10 hover:text-gold"
        >
          Book a night
        </Button>
      </div>

      <a
        href="#about"
        className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] tracking-[0.32em] text-foreground/55 uppercase transition-colors hover:text-gold"
      >
        Scroll
        <span className="scroll-cue block h-8 w-px bg-linear-to-b from-gold to-transparent" />
      </a>
    </section>
  );
}
