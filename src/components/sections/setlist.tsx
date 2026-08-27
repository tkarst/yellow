import { SectionHeading } from "@/components/section-heading";
import { setlist } from "@/content/site";

export function Setlist() {
  return (
    <section id="setlist" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          kicker={setlist.kicker}
          title={setlist.title}
        >
          {setlist.intro}
        </SectionHeading>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.8fr)] lg:gap-16">
          {setlist.blocks.map((block, blockIndex) => {
            const offset = setlist.blocks
              .slice(0, blockIndex)
              .reduce((sum, current) => sum + current.songs.length, 0);

            return (
              <div key={block.label}>
                <p className="font-serif text-lg text-ember italic">
                  {block.label}
                </p>
                <ol className="mt-5 divide-y divide-white/10">
                  {block.songs.map((song, songIndex) => (
                    <li
                      key={song}
                      className="flex items-baseline gap-4 py-3.5 sm:gap-6"
                    >
                      <span className="font-display w-8 shrink-0 text-sm tracking-[0.18em] text-gold/70">
                        {String(offset + songIndex + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-lg tracking-[0.04em] text-foreground uppercase sm:text-xl md:text-2xl">
                        {song}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
