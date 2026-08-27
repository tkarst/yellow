"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/content/site";

type FormState = {
  name: string;
  email: string;
  city: string;
  date: string;
  message: string;
};

const empty: FormState = {
  name: "",
  email: "",
  city: "",
  date: "",
  message: "",
};

export function BookingForm() {
  const [values, setValues] = useState<FormState>(empty);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!values.name.trim()) {
      setError("Add a name so we know who to write back to.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      setError("That email does not look right.");
      return;
    }
    if (values.message.trim().length < 12) {
      setError("Tell us a little about the night — a sentence is enough.");
      return;
    }

    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-gold/30 bg-gold/5 px-6 py-10 text-center sm:px-10">
        <p className="font-display text-2xl tracking-[0.12em] text-gold uppercase">
          Enquiry noted
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {site.bookingNote} When the real inbox is connected, this is where
          the thank-you will live.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-8 h-11 border-gold/35 px-5 font-display tracking-[0.22em] text-gold uppercase hover:bg-gold/10 hover:text-gold"
          onClick={() => {
            setSent(false);
            setValues(empty);
          }}
        >
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <p className="text-sm text-muted-foreground">{site.bookingNote}</p>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="booking-name">
          <Input
            id="booking-name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            className="h-11 rounded-none border-white/15 bg-black/30 px-3"
            placeholder="Your name"
          />
        </Field>
        <Field label="Email" htmlFor="booking-email">
          <Input
            id="booking-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            className="h-11 rounded-none border-white/15 bg-black/30 px-3"
            placeholder="you@example.com"
          />
        </Field>
        <Field label="City" htmlFor="booking-city">
          <Input
            id="booking-city"
            name="city"
            value={values.city}
            onChange={(event) => update("city", event.target.value)}
            className="h-11 rounded-none border-white/15 bg-black/30 px-3"
            placeholder="Oslo"
          />
        </Field>
        <Field label="Preferred date" htmlFor="booking-date">
          <Input
            id="booking-date"
            name="date"
            type="date"
            value={values.date}
            onChange={(event) => update("date", event.target.value)}
            className="h-11 rounded-none border-white/15 bg-black/30 px-3"
          />
        </Field>
      </div>

      <Field label="Message" htmlFor="booking-message">
        <Textarea
          id="booking-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          className="min-h-32 rounded-none border-white/15 bg-black/30 px-3 py-3"
          placeholder="Room, capacity, date, and anything we should know."
        />
      </Field>

      {error ? (
        <p role="alert" className="text-sm text-ember">
          {error}
        </p>
      ) : null}

      <Button
        type="submit"
        className="h-12 w-full px-6 font-display text-[0.8rem] tracking-[0.28em] uppercase sm:w-auto"
      >
        Send enquiry
      </Button>
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
