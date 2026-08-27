import { About } from "@/components/sections/about";
import { Booking } from "@/components/sections/booking";
import { Hero } from "@/components/sections/hero";
import { Setlist } from "@/components/sections/setlist";
import { Tour } from "@/components/sections/tour";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Tour />
        <Setlist />
        <Booking />
      </main>
      <SiteFooter />
    </>
  );
}
