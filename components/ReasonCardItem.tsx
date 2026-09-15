"use client";

import { useState } from "react";
import type { ReasonCard } from "@/lib/data";

const backgrounds = [
  "bg-gradient-to-br from-blush to-blush-light",
  "bg-gradient-to-br from-lavender to-lavender-light",
  "bg-gradient-to-br from-blush-deep/70 to-lavender-light",
  "bg-gradient-to-br from-lavender-deep/70 to-blush-light",
];

export default function ReasonCardItem({
  reason,
  index,
}: {
  reason: ReasonCard;
  index: number;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
      className="group aspect-[4/5] w-full [perspective:1000px]"
    >
      <div
        className="relative h-full w-full transition-transform duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
        style={{
          transform: flipped ? "rotateY(180deg)" : undefined,
        }}
      >
        {/* front */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-2xl p-4 text-center shadow-soft [backface-visibility:hidden] ${backgrounds[index % backgrounds.length]}`}
        >
          <span className="text-3xl text-rose-deep">{reason.emoji}</span>
          <p className="font-hand text-xl text-plum sm:text-2xl">{reason.title}</p>
          <span className="mt-1 text-xs font-body text-plum-soft/70">tap to see more</span>
        </div>

        {/* back */}
        <div
          className="absolute inset-0 flex items-center justify-center rounded-2xl bg-plum p-5 text-center shadow-soft [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          <p className="font-body text-sm leading-relaxed text-warmwhite sm:text-base">
            {reason.message}
          </p>
        </div>
      </div>
    </button>
  );
}
