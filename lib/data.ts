// ─────────────────────────────────────────────────────────────
//  EVERYTHING YOU WANT TO CUSTOMIZE LIVES IN THIS FILE.
//  Change names, messages, photos, dates, and cards right here —
//  you don't need to touch any component code.
// ─────────────────────────────────────────────────────────────

export type Photo = {
  src: string;
  caption: string;
  /** slight tilt for the scrapbook look, in degrees. try values between -6 and 6 */
  rotate: number;
};

export type TimelineEvent = {
  title: string;
  date: string;
  description: string;
};

export type ReasonCard = {
  emoji: string;
  title: string;
  message: string;
};

export type SurpriseCard = {
  emoji: string;
  label: string;
  message: string;
};

export const birthdayData = {
  // ── The basics ──────────────────────────────────────────
  girlfriendName: "My Hope",
  boyfriendName: "Baby mo",
  birthdayDateLabel: "September 16", // shown nowhere critical yet, but handy to keep here

  // ── Hero / landing section ──────────────────────────────
  hero: {
    greeting: "Happy 22nd Birthday,\nMy Love",
    subMessage: "Today is all about you.",
    buttonLabel: "Open Your Surprise",
  },

  // ── "A Little Message For You" letter section ───────────
  letter: {
    heading: "A little message for you",
    salutation: "To my favorite person,",
    body: `Happy birthday, love. I hope today reminds you of just how special you are to me,  not just today, but every ordinary Tuesday and every sleepy Sunday in between.

Thank you for being the person who makes ordinary days feel a little more special, just by being in them. You have this way of turning the smallest moments into things I want to remember forever.

I'm so lucky to have you. I hope this little page makes you smile even half as much as you make me smile.

I love you.`,
    signature: "— Always yours",
  },

  // ── Photo gallery / memories ─────────────────────────────
  // Replace `src` with your own images, e.g. "/images/us-01.jpg"
  // Drop your photos into the /public/images folder and match the path here.
  photos: [
    { src: "/images/photo1.jpg", caption: "sa bundok ng silangan ♡", rotate: -4 },
    { src: "/images/photo2.jpg", caption: "may price tag pa", rotate: 3 },
    { src: "/images/photo3.jpg", caption: "one of my favorite days", rotate: -2 },
    { src: "/images/photo4.jpg", caption: "tulog baby", rotate: 5 },
    { src: "/images/photo5.jpg", caption: "you being cute again", rotate: -5 },
    { src: "/images/photo6.jpg", caption: "matching energy", rotate: 2 },
    { src: "/images/photo7.jpg", caption: "roblox gods", rotate: -3 },
    { src: "/images/photo8.jpg", caption: "sa patungan batangas", rotate: 4 },
    { src: "/images/photo9.jpg", caption: "just us", rotate: -2 },
    { src: "/images/photo10.jpg", caption: "my favorite person", rotate: 3 },
  ] as Photo[],

  // ── Reasons why I love you ───────────────────────────────
  reasons: [
    { emoji: "♡", title: "Your smile", message: "It's genuinely my favorite thing in the world. No contest." },
    { emoji: "✧", title: "The way you laugh", message: "It makes my heart skip a beat kahit namamalo ka minsan." },
    { emoji: "☾", title: "How you make me feel", message: "Like I can be exactly myself, and that's already enough." },
    { emoji: "✿", title: "Your kindness", message: "Napakabait mo, sakin lang hindi. jk." },
    { emoji: "☆", title: "Your eyes", message: "Naalala ko pa rin mga mata mo nung sinabi kong liligawan kita." },
    { emoji: "❀", title: "Every moment with you", message: "Even the boring ones. Especially the boring ones, actually." },
    { emoji: "✦", title: "How you love", message: "Fully, loudly, and without holding back. I try to love you back just as much." },
    { emoji: "♡", title: "Simply, you", message: "There's no version of this list that isn't really just about you." },
  ] as ReasonCard[],

  // ── Timeline: our story so far ───────────────────────────
  timeline: [
    { title: "The Beginning", date: "Month, Year", description: "Where our story started ♡" },
    { title: "Our First Date", date: "Month, Year", description: "A day I'll always remember." },
    { title: "Favorite Memory", date: "Month, Year", description: "One of the many moments I wish I could replay." },
    { title: "Today", date: birthdayData_placeholder(), description: "Still choosing you." },
    { title: "The Future", date: "To be written", description: "Hopefully, many more birthdays together." },
  ] as TimelineEvent[],

  // ── "Open When" surprise envelopes ───────────────────────
  surpriseCards: [
    {
      emoji: "💌",
      label: "Open when you miss me",
      message: "Then close your eyes for a second — I'm already thinking about you too. We'll be together again before you know it.",
    },
    {
      emoji: "🌷",
      label: "Open when you need a smile",
      message: "Remember that one time we couldn't stop laughing over absolutely nothing? Yeah. That. Think about that.",
    },
    {
      emoji: "☁️",
      label: "Open when you're having a bad day",
      message: "Bad days don't last. And whatever's wrong, you don't have to carry it alone — I'm right here, always.",
    },
    {
      emoji: "♡",
      label: "Open when you want to know how much I love you",
      message: "More than words fit on a little card like this. But I'll keep trying to show you anyway, every single day.",
    },
  ] as SurpriseCard[],

  // ── Birthday cake finale ─────────────────────────────────
  cake: {
    prompt: "Make a wish, birthday girl ♡",
    instruction: "click mo yung candles love",
    revealMessage:
      "Here's to another year of you being amazing.\nAnd here's to me being lucky enough to be beside you.\n\nHappy Birthday, my love. ♡",
    candleCount: 5,
  },

  // ── Final section ─────────────────────────────────────────
  finalMessage: {
    body: `Thank you for being part of my life.\nI hope I can keep making memories with you for many birthdays to come.\n\nI love you, always.`,
    madeWithLoveBy: "Made with love, by",
  },

  // ── Optional background music ────────────────────────────
  // Drop an mp3 into /public/music and update the path below.
  music: {
    src: "/music/song.mp3",
    label: "Music",
  },
};

// small helper just so the placeholder "Today" date reads naturally —
// feel free to delete this and hardcode a real date above instead.
function birthdayData_placeholder() {
  return "Today";
}
