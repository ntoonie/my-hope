"use client";

import { useState } from "react";
import { birthdayData } from "@/lib/data";
import FloatingBackground from "./FloatingBackground";

export default function Hero() {
  const [opening, setOpening] = useState(false);
  const { greeting, subMessage, buttonLabel } = birthdayData.hero;

  const handleOpen = () => {
    setOpening(true);
     window.dispatchEvent(new Event("start-music"));
    const target = document.getElementById("letter");
    window.setTimeout(() => {
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 350);
  };

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* dreamy background blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-16 h-72 w-72 animate-float rounded-full bg-blush/60 blur-3xl"
        style={{ animationDuration: "9s" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-1/3 h-80 w-80 animate-float rounded-full bg-lavender/60 blur-3xl"
        style={{ animationDuration: "11s", animationDelay: "1.2s" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/4 h-64 w-64 animate-float rounded-full bg-blush-deep/40 blur-3xl"
        style={{ animationDuration: "8s", animationDelay: "2.4s" }}
      />

      <FloatingBackground count={16} />

      <div
        className={`relative z-10 flex flex-col items-center transition-all duration-700 ${
          opening ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <p className="mb-3 font-hand text-2xl text-rose-deep sm:text-3xl">
          a little something for you
        </p>

        <h1 className="text-shadow-soft whitespace-pre-line font-hand text-6xl leading-[1.05] text-plum sm:text-7xl md:text-8xl">
          {greeting} <span className="text-rose">♡</span>
        </h1>

        <p className="mt-6 max-w-sm font-body text-lg text-plum-soft sm:text-xl">
          {subMessage}
        </p>

        <button
          onClick={handleOpen}
          className="group relative mt-10 overflow-hidden rounded-full bg-rose px-8 py-4 font-body text-base font-semibold text-warmwhite shadow-soft transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          <span className="relative z-10">{buttonLabel} ♡</span>
          <span className="absolute inset-0 -z-0 bg-rose-deep opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </button>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-plum-soft/60"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 4v16m0 0-6-6m6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
