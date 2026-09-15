"use client";

import { useState } from "react";
import { birthdayData } from "@/lib/data";
import PolaroidImage from "./PolaroidImage";
import PhotoLightbox from "./PhotoLightbox";
import ScrollReveal from "./ScrollReveal";

const doodles = ["✦", "♡", "✧", "☆", "❀"];

export default function PhotoGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="memories" className="relative overflow-hidden px-6 py-24 sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute right-6 top-10 h-40 w-40 rounded-full bg-lavender/50 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-10 left-6 h-40 w-40 rounded-full bg-blush/50 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <ScrollReveal className="text-center">
          <p className="font-hand text-3xl text-rose-deep sm:text-4xl">our little scrapbook</p>
          <p className="mx-auto mt-2 max-w-md font-body text-plum-soft">
            a few of my favorite moments with you (click mo love isa isa)
          </p>
        </ScrollReveal>

        <div className="mt-16 flex flex-wrap items-start justify-center gap-x-4 gap-y-14 sm:gap-x-8">
          {birthdayData.photos.map((photo, i) => (
            <ScrollReveal key={photo.src + i} delay={(i % 4) * 100} className="relative">
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`Open photo: ${photo.caption}`}
                className="group relative w-40 shrink-0 cursor-pointer transition-transform duration-500 ease-out hover:z-20 hover:scale-110 hover:rotate-0 sm:w-48"
                style={{ transform: `rotate(${photo.rotate}deg)` }}
              >
                <div
                  aria-hidden="true"
                  className="washi-tape absolute -top-3 left-1/2 z-10 h-6 w-14 -translate-x-1/2 rounded-sm bg-lavender-deep/70 shadow-sm"
                  style={{ transform: `translateX(-50%) rotate(${-photo.rotate * 0.6}deg)` }}
                />
                <span aria-hidden="true" className="absolute -right-3 -top-3 z-10 text-lg text-rose opacity-80 transition-transform duration-500 group-hover:scale-125">
                  {doodles[i % doodles.length]}
                </span>
                <div className="rounded-sm bg-warmwhite p-2.5 pb-8 shadow-polaroid transition-shadow duration-500 group-hover:shadow-soft sm:pb-10">
                  <div className="aspect-square w-full overflow-hidden rounded-[2px] bg-blush-light">
                    <PolaroidImage src={photo.src} alt={photo.caption} index={i} />
                  </div>
                  <p className="mt-3 text-center font-hand text-base text-plum-soft sm:text-lg">{photo.caption}</p>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <PhotoLightbox
          photos={birthdayData.photos}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={(next) => setOpenIndex(next)}
        />
      )}
    </section>
  );
}