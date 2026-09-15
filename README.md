# For My Love — a birthday website

A little interactive birthday gift: a scrolling scrapbook with a love letter,
a photo gallery, reasons-I-love-you cards, a relationship timeline, "open
when" envelopes, and a cake you get to blow out.

Built with **Next.js 14, React, TypeScript, and Tailwind CSS**.

---

## 1. How to run it

You'll need [Node.js](https://nodejs.org) 18 or newer installed.

```bash
# install dependencies
npm install

# run the local dev server
npm run dev
```

Then open **http://localhost:3000** in your browser. The page live-reloads
as you edit files.

To build a production version:

```bash
npm run build
npm run start
```

---

## 2. Where to put the photos

Drop your images into **`public/images/`**, then list them in
**`lib/data.ts`** under the `photos` array:

```ts
photos: [
  { src: "/images/photo1.jpg", caption: "our first date ♡", rotate: -4 },
  { src: "/images/photo2.jpg", caption: "you, mid-laugh", rotate: 3 },
  // add, remove, or reorder as many as you like
],
```

- `src` — the path to the image inside `public/`
- `caption` — the little handwritten note under the photo
- `rotate` — the tilt angle in degrees (try anything between -6 and 6)

If a photo is missing or fails to load, it shows a cute placeholder instead
of a broken image icon — so the site never looks unfinished, even before
you've added real photos.

---

## 3. Where to change her name (and yours)

Open **`lib/data.ts`** and edit the top of the file:

```ts
girlfriendName: "Mahal",
boyfriendName: "Your Boyfriend",
```

These automatically update the hero heading, the page title, the final
message, and the footer signature.

---

## 4. Where to change the messages

Everything text-based lives in **`lib/data.ts`** — nothing is hardcoded in
the components. The sections you can edit:

| Section | Field in `lib/data.ts` |
|---|---|
| Landing greeting & button | `hero` |
| The love letter | `letter` |
| Reasons I love you cards | `reasons` (add/remove entries freely) |
| Our story timeline | `timeline` (add/remove entries freely) |
| "Open when..." envelopes | `surpriseCards` (add/remove entries freely) |
| Cake prompt & final reveal | `cake` |
| Closing message | `finalMessage` |

Arrays like `reasons`, `timeline`, `surpriseCards`, and `photos` aren't
locked to a fixed count — add or delete entries and the layout adjusts
automatically.

---

## 5. Where to add or change the music

1. Add an MP3 file to **`public/music/`**.
2. Name it `song.mp3` — or name it whatever you like and update the path in
   `lib/data.ts`:

```ts
music: {
  src: "/music/song.mp3",
  label: "Music",
},
```

The music **never autoplays**. A small "♡ Music" button sits in the bottom
right corner of the site the whole time — she taps it to play, taps again to
pause.

---

## 6. How to deploy it to Vercel

The easiest way, using the Vercel CLI:

```bash
npm install -g vercel
vercel
```

Follow the prompts (log in, confirm the project settings — defaults are
fine), and Vercel will give you a live link.

Or, without the CLI:

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import that repository.
3. Leave the default settings (Vercel auto-detects Next.js) and click **Deploy**.
4. In a minute or two you'll have a live `https://your-project.vercel.app` link
   you can send her directly.

---

## Project structure

```
app/
  layout.tsx        → fonts, page metadata
  page.tsx           → assembles all sections in order
  globals.css         → base styles, paper textures, reduced-motion handling
components/
  Hero.tsx             → landing section
  LoveLetter.tsx       → the letter section
  PhotoGallery.tsx     → scrapbook photo grid
  Reasons.tsx           → flip-card grid
  Timeline.tsx           → our story timeline
  SurpriseCards.tsx       → "open when" envelopes
  BirthdayCake.tsx         → candles + confetti finale
  Footer.tsx                 → closing message
  MusicPlayer.tsx             → floating music toggle
  (+ a few small shared helpers: ScrollReveal, FloatingBackground, PolaroidImage)
lib/
  data.ts    → ALL editable content lives here
```

A note on accessibility & performance: animations respect
`prefers-reduced-motion`, all interactive elements are real `<button>`s, and
there are no heavy dependencies — just Next.js, React, and Tailwind.

Happy birthday to her. ♡
