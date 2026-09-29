import { SectionHeading } from "@/components/section-heading";
import { film } from "@/content/site";

export function Film() {
  return (
    <section id="film" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          kicker={film.kicker}
          title={film.title}
        >
          {film.intro}
        </SectionHeading>

        <div className="mt-12 overflow-hidden rounded-sm border border-white/10 bg-black shadow-[0_0_80px_-30px_rgba(212,175,55,0.35)]">
          <div className="relative aspect-video w-full">
            <iframe
              src={film.url}
              title={film.iframeTitle}
              className="absolute inset-0 h-full w-full border-0"
              allow="fullscreen; autoplay; clipboard-write"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
