import { SectionHeading } from "@/components/section-heading";
import { about, members } from "@/content/site";

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-20">
        <div>
          <SectionHeading
            index="01"
            kicker={about.kicker}
            title={about.title}
          >
            {about.body.map((paragraph) => (
              <p key={paragraph} className="mt-4 first:mt-0">
                {paragraph}
              </p>
            ))}
          </SectionHeading>

          <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {about.stats.map((stat) => (
              <div
                key={stat.label}
                className="border-t border-gold/25 pt-4"
              >
                <dt className="font-display text-[0.65rem] tracking-[0.28em] text-gold uppercase">
                  {stat.label}
                </dt>
                <dd className="mt-2 text-sm text-foreground/90 sm:text-base">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <ul className="grid gap-px bg-white/10 sm:grid-cols-2">
          {members.map((member) => (
            <li
              key={member.name}
              className="bg-[#0b0a09]/90 p-6 sm:p-7"
            >
              <p className="font-display text-3xl tracking-[0.12em] text-gold uppercase">
                {member.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </p>
              <h3 className="mt-5 font-display text-xl tracking-[0.08em] text-foreground uppercase">
                {member.name}
              </h3>
              <p className="mt-1 font-serif text-sm text-ember">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {member.bio}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
