# Yellow

Official site for **Yellow**, a Coldplay tribute from Oslo. Dark concert-poster atmosphere, gold and ember, the band mark as the identity.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:43147](http://localhost:43147).

```bash
npm run build
npm start
```

## Swap in real copy

All placeholder names, dates, setlist notes, and the example booking inbox live in one file:

- [`src/content/site.ts`](src/content/site.ts)

The booking form currently validates and shows a success state. It does not send mail. The example address is `booking@example.com` (reserved example domain) — replace it when you have a real inbox.

## Brand mark

The logo file is:

- [`public/brand/yellow-logo.jpg`](public/brand/yellow-logo.jpg)

Drop a replacement JPEG on that path to update the header, hero, footer, and share image. Favicon and Apple icon are generated from the same artwork in `src/app/icon.png` and `src/app/apple-icon.png`.
