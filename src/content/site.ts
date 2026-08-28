/**
 * All public copy for the Yellow site lives here so real bios, dates,
 * and booking details can be swapped without hunting through components.
 *
 * Everything below is EXAMPLE / PLACEHOLDER content.
 */
export const site = {
  name: "Yellow",
  tagline: "A tribute to Coldplay",
  pitch:
    "Live Coldplay. Stadium atmosphere. The songs you already sing.",
  description:
    "Yellow is a Coldplay tribute from Oslo, playing the catalogue live across the Nordics and northern Europe.",
  formed: "Oslo, 2022",
  runtime: "About 90 minutes, no backing tracks",
  legal:
    "Yellow is a tribute band and is not affiliated with Coldplay.",
  /**
   * Reserved example inbox — replace with the band’s real address.
   * Do not use a domain that looks like an official band or venue.
   */
  bookingEmail: "booking@example.com",
  bookingNote:
    "Example enquiry form. It does not send mail yet — connect it to your inbox when you are ready.",
  placeholderBanner:
    "Example lineup and dates for layout. Replace everything in src/content/site.ts.",
} as const;

export const nav = [
  { href: "#about", label: "About" },
  { href: "#dates", label: "Dates" },
  { href: "#setlist", label: "Setlist" },
  { href: "#booking", label: "Booking" },
] as const;

export const about = {
  kicker: "The band",
  title: "Six people. One catalogue. A dark room that suddenly feels huge.",
  body: [
    "Yellow started in a rehearsal room in Grünerløkka with a battered upright piano and a shared rule: Coldplay has to feel live. Not a laptop and a singer. Real dynamics. The hush before Fix You. The lift when the lights go gold.",
    "We play clubs, theatres, and the odd festival field. The brief is always the same — play the songs the way people remember them from the night, not from the playlist.",
  ],
  stats: [
    { label: "Formed", value: "Oslo, 2022" },
    { label: "Set", value: "90 minutes" },
    { label: "Tracks", value: "No backing tracks" },
  ],
};

export const members = [
  {
    name: "Thormod Bjørnland",
    role: "Vocals",
    bio: "",
  },
  {
    name: "Janne Stene",
    role: "Vocals",
    bio: "",
  },
  {
    name: "Hans Sander",
    role: "Guitars",
    bio: "",
  },
  {
    name: "Jon Erik Jensen",
    role: "Keys",
    bio: "",
  },
  {
    name: "Trond Karstensen",
    role: "Bass",
    bio: "",
  },
  {
    name: "Odd Skancke",
    role: "Drums",
    bio: "",
  },
] as const;

export type GigStatus = "on-sale" | "sold-out" | "few-left";

export const gigs: {
  iso: string;
  city: string;
  country: string;
  venue: string;
  status: GigStatus;
}[] = [
  {
    iso: "2026-09-12",
    city: "Oslo",
    country: "Norway",
    venue: "Rockefeller Music Hall",
    status: "on-sale",
  },
  {
    iso: "2026-09-26",
    city: "Gothenburg",
    country: "Sweden",
    venue: "Pustervik",
    status: "on-sale",
  },
  {
    iso: "2026-10-10",
    city: "Stockholm",
    country: "Sweden",
    venue: "Debaser Strand",
    status: "few-left",
  },
  {
    iso: "2026-10-24",
    city: "Copenhagen",
    country: "Denmark",
    venue: "VEGA",
    status: "on-sale",
  },
  {
    iso: "2026-11-07",
    city: "Helsinki",
    country: "Finland",
    venue: "Tavastia",
    status: "on-sale",
  },
  {
    iso: "2026-11-21",
    city: "Amsterdam",
    country: "Netherlands",
    venue: "Melkweg",
    status: "on-sale",
  },
  {
    iso: "2026-12-05",
    city: "Berlin",
    country: "Germany",
    venue: "Lido",
    status: "on-sale",
  },
  {
    iso: "2026-12-19",
    city: "Bergen",
    country: "Norway",
    venue: "USF Verftet",
    status: "sold-out",
  },
];

export const setlist = {
  kicker: "A typical night",
  title: "The songs you already know the words to.",
  intro:
    "Order moves. Encores depend on the room. This is the spine of the set — the Coldplay catalogue people actually come to hear live.",
  blocks: [
    {
      label: "Main set",
      songs: [
        "Politik",
        "Yellow",
        "In My Place",
        "The Scientist",
        "Clocks",
        "Viva La Vida",
        "Paradise",
        "Adventure of a Lifetime",
        "Hymn for the Weekend",
        "A Sky Full of Stars",
        "Something Just Like This",
        "Fix You",
      ],
    },
    {
      label: "Encore",
      songs: [
        "The Hardest Part",
        "Every Teardrop Is a Waterfall",
        "A Head Full of Dreams",
      ],
    },
  ],
};

export const booking = {
  kicker: "Book the band",
  title: "Festivals, clubs, private nights.",
  body: "Tell us the city, the date, and the room. We travel with our own backline notes and a simple production rider — piano, lights, and space to get loud.",
  points: [
    "Clubs and theatres, 200–1,200 capacity",
    "Festival slots and indoor winter dates",
    "Private and corporate nights on request",
  ],
};

export const statusLabel: Record<GigStatus, string> = {
  "on-sale": "On sale",
  "sold-out": "Sold out",
  "few-left": "Few left",
};

export function formatGigDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Europe/Oslo",
  }).format(new Date(`${iso}T20:00:00+02:00`));
}
