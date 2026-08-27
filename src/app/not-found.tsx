import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center px-6 py-24 text-center">
      <BrandMark size="footer" />
      <h1 className="mt-8 font-display text-4xl tracking-[0.12em] text-gold uppercase">
        Lost in the lights
      </h1>
      <p className="mt-3 max-w-sm text-muted-foreground">
        That page is not on the setlist.
      </p>
      <Button
        nativeButton={false}
        render={<Link href="/" />}
        className="mt-8 h-12 px-6 font-display tracking-[0.28em] uppercase"
      >
        Back to Yellow
      </Button>
    </main>
  );
}
