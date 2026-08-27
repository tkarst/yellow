import { SectionHeading } from "@/components/section-heading";
import { formatGigDate, gigs, statusLabel } from "@/content/site";
import { cn } from "@/lib/utils";

export function Tour() {
  return (
    <section id="dates" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          kicker="On the road"
          title="Upcoming nights."
        >
          Example dates in Nordic and northern European rooms. Swap the
          calendar when the real tour lands.
        </SectionHeading>

        {gigs.length === 0 ? (
          <p className="mt-12 border border-dashed border-white/15 px-6 py-16 text-center text-muted-foreground">
            No confirmed dates yet. Check back, or enquire below.
          </p>
        ) : (
          <ol className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {gigs.map((gig) => (
              <li
                key={`${gig.iso}-${gig.city}`}
                className="grid grid-cols-1 items-center gap-3 py-6 sm:grid-cols-[8.5rem_1fr_auto] sm:gap-6 md:grid-cols-[10rem_1fr_auto]"
              >
                <time
                  dateTime={gig.iso}
                  className="font-display text-sm tracking-[0.18em] text-gold uppercase"
                >
                  {formatGigDate(gig.iso)}
                </time>
                <div>
                  <p className="font-display text-2xl tracking-[0.06em] text-foreground uppercase sm:text-3xl">
                    {gig.city}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {gig.venue}
                    <span className="text-foreground/30"> · </span>
                    {gig.country}
                  </p>
                </div>
                <span
                  className={cn(
                    "w-fit font-display text-[0.68rem] tracking-[0.22em] uppercase",
                    gig.status === "sold-out" && "text-ember",
                    gig.status === "few-left" && "text-gold",
                    gig.status === "on-sale" && "text-foreground/55",
                  )}
                >
                  {statusLabel[gig.status]}
                </span>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
