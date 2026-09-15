"use client";

import { useState } from "react";
import type { SurpriseCard } from "@/lib/data";

export default function SurpriseCardItem({ card }: { card: SurpriseCard }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="relative flex min-h-[132px] w-full flex-col items-center justify-center rounded-xl bg-gradient-to-b from-lavender-light to-blush-light px-5 py-7 text-center shadow-soft transition-transform duration-300 hover:-translate-y-1 active:translate-y-0"
        style={{ perspective: "700px" }}
      >
        {/* envelope flap */}
        <span
          aria-hidden="true"
          className={`absolute left-0 top-0 h-12 w-full origin-top bg-lavender-deep/80 transition-all duration-700 ease-out ${
            open ? "opacity-40" : "opacity-100"
          }`}
          style={{
            clipPath: "polygon(0 0, 100% 0, 50% 78%)",
            transform: open ? "rotateX(170deg)" : "rotateX(0deg)",
          }}
        />
        {/* wax seal */}
        <span
          className={`absolute left-1/2 top-6 z-10 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-rose text-xs text-warmwhite shadow-sm transition-opacity duration-300 ${
            open ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden="true"
        >
          ♡
        </span>

        <span className="mt-6 text-2xl">{card.emoji}</span>
        <span className="mt-2 font-hand text-lg text-plum sm:text-xl">{card.label}</span>
        <span className="mt-2 text-[11px] font-body text-plum-soft/70">
          {open ? "tap to close" : "tap to open"}
        </span>
      </button>

      <div
        className={`grid w-full transition-all duration-500 ease-out ${
          open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="grain relative rounded-xl bg-warmwhite p-5 text-left shadow-soft">
            <p className="font-body text-sm leading-relaxed text-plum-soft sm:text-base">
              {card.message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
