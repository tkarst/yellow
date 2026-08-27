import { BrandMark } from "@/components/brand-mark";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 px-4 py-16 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">
        <a href="#top" className="rounded-sm focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:outline-none">
          <BrandMark size="footer" />
        </a>
        <p className="font-serif text-lg text-ember sm:text-xl">
          {site.tagline}
        </p>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          {site.legal}
        </p>
        <p className="text-[0.7rem] tracking-[0.18em] text-muted-foreground/70 uppercase">
          {site.placeholderBanner}
        </p>
      </div>
    </footer>
  );
}
