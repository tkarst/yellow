import { BookingForm } from "@/components/booking-form";
import { SectionHeading } from "@/components/section-heading";
import { booking, site } from "@/content/site";

export function Booking() {
  return (
    <section id="booking" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <div>
          <SectionHeading
            index="04"
            kicker={booking.kicker}
            title={booking.title}
          >
            {booking.body}
          </SectionHeading>
          <ul className="mt-10 space-y-3">
            {booking.points.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-sm text-foreground/80 sm:text-base"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" />
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm text-muted-foreground">
            Placeholder inbox:{" "}
            <a
              href={`mailto:${site.bookingEmail}`}
              className="text-gold underline-offset-4 hover:underline"
            >
              {site.bookingEmail}
            </a>
          </p>
        </div>
        <BookingForm />
      </div>
    </section>
  );
}
