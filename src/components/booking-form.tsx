"use client";

import { useState } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

const fieldClass =
  "h-11 w-full rounded-none border border-white/15 bg-black/30 px-3 text-base text-foreground outline-none placeholder:text-muted-foreground focus-visible:border-gold/70 focus-visible:ring-3 focus-visible:ring-gold/30";

function readForm(form: HTMLFormElement) {
  const data = new FormData(form);
  return {
    name: String(data.get("name") ?? ""),
    email: String(data.get("email") ?? ""),
    city: String(data.get("city") ?? ""),
    date: String(data.get("date") ?? ""),
    message: String(data.get("message") ?? ""),
  };
}

function validate(form: HTMLFormElement) {
  const values = readForm(form);
  if (!values.name.trim()) {
    return "Add a name so we know who to write back to.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    return "That email does not look right.";
  }
  if (values.message.trim().length < 12) {
    return "Tell us a little about the night — a sentence is enough.";
  }
  return null;
}

export function BookingForm() {
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  function handleSend(form: HTMLFormElement) {
    const nextError = validate(form);
    if (nextError) {
      setError(nextError);
      return;
    }
    const values = readForm(form);
    const subject = encodeURIComponent(`Yellow booking: ${values.name.trim()}`);
    const body = encodeURIComponent(
      [
        `Name: ${values.name.trim()}`,
        `Email: ${values.email.trim()}`,
        values.city.trim() ? `City: ${values.city.trim()}` : null,
        values.date.trim() ? `Date: ${values.date.trim()}` : null,
        "",
        values.message.trim(),
      ]
        .filter((line) => line !== null)
        .join("\n"),
    );
    window.location.href = `mailto:${site.bookingEmail}?subject=${subject}&body=${body}`;
    setError(null);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-gold/30 bg-gold/5 px-6 py-10 text-center sm:px-10">
        <p className="font-display text-2xl tracking-[0.12em] text-gold uppercase">
          Open your mail
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Your mail app should open to {site.bookingEmail}. If it does not, write
          us there directly.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-8 h-11 border-gold/35 px-5 font-display tracking-[0.22em] text-gold uppercase hover:bg-gold/10 hover:text-gold"
          onClick={() => {
            setSent(false);
            setError(null);
          }}
        >
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form
      className="space-y-5"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        handleSend(event.currentTarget);
      }}
    >
      <p className="text-sm text-muted-foreground">{site.bookingNote}</p>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="booking-name">
          <input
            id="booking-name"
            name="name"
            autoComplete="name"
            className={fieldClass}
            placeholder="Your name"
          />
        </Field>
        <Field label="Email" htmlFor="booking-email">
          <input
            id="booking-email"
            name="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
            placeholder="you@example.com"
          />
        </Field>
        <Field label="City" htmlFor="booking-city">
          <input
            id="booking-city"
            name="city"
            className={fieldClass}
            placeholder="Sarpsborg"
          />
        </Field>
        <Field label="Preferred date" htmlFor="booking-date">
          <input
            id="booking-date"
            name="date"
            type="date"
            className={fieldClass}
          />
        </Field>
      </div>

      <Field label="Message" htmlFor="booking-message">
        <textarea
          id="booking-message"
          name="message"
          rows={5}
          className={cn(fieldClass, "h-auto min-h-32 py-3")}
          placeholder="Room, capacity, date, and anything we should know."
        />
      </Field>

      {error ? (
        <p
          role="alert"
          className="border border-ember/40 bg-ember/10 px-3 py-2 text-sm text-ember"
        >
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        className={cn(
          buttonVariants(),
          "h-12 w-full rounded-none px-6 font-display text-[0.8rem] tracking-[0.28em] uppercase sm:w-auto",
        )}
      >
        Send enquiry
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label
        htmlFor={htmlFor}
        className="font-display text-[0.68rem] tracking-[0.22em] text-gold uppercase"
      >
        {label}
      </Label>
      {children}
    </div>
  );
}
