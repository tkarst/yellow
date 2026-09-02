import type { Metadata } from "next";
import { Cinzel, Oswald, Outfit } from "next/font/google";

import { Atmosphere } from "@/components/atmosphere";
import { site } from "@/content/site";

import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Yellow — a tribute to Coldplay",
    template: "%s · Yellow",
  },
  description: site.description,
  keywords: [
    "Yellow",
    "Coldplay tribute",
    "Coldplay cover band",
    "live music",
    "Oslo",
  ],
  openGraph: {
    title: "Yellow — a tribute to Coldplay",
    description: `${site.pitch} ${site.pitchLine}`,
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yellow — a tribute to Coldplay",
    description: `${site.pitch} ${site.pitchLine}`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: site.name,
  alternateName: "Yellow tribute",
  description: site.description,
  genre: "Tribute",
  foundingLocation: {
    "@type": "Place",
    name: "Oslo, Norway",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${outfit.variable} ${oswald.variable} ${cinzel.variable} h-full antialiased`}
    >
      <body className="relative min-h-full bg-background font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#about"
          className="bg-gold text-primary-foreground sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <Atmosphere />
        {children}
      </body>
    </html>
  );
}
