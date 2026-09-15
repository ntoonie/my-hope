"use client";

import { useMemo, useState } from "react";
import { birthdayData } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

const CANDLE_COLORS = ["bg-rose", "bg-lavender-deep", "bg-gold", "bg-rose-deep", "bg-lavender-deep"];
const CONFETTI_COLORS = ["#E8879A", "#D9A867", "#CCB6E8", "#F0AFC8", "#7A5C74"];

export default function BirthdayCake() {
  const { candleCount, prompt, instruction, revealMessage } = birthdayData.cake;
  const [lit, setLit] = useState<boolean[]>(() => Array(candleCount).fill(true));

  const revealed = lit.every((l) => !l);

  const blowOne = (index: number) => {
    setLit((prev) => prev.map((v, i) => (i === index ? false : v)));
  };

  const blowAll = () => {
    setLit((prev) => prev.map(() => false));
  };

  const confetti = useMemo(() => {
    if (!revealed) return [];
    return Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      duration: 2.6 + Math.random() * 2.2,
      delay: Math.random() * 0.6,
      size: 6 + Math.random() * 6,
      isCircle: i % 2 === 0,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [revealed]);

  return (
    <section id="cake" className="relative overflow-hidden px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-lg text-center">
        <ScrollReveal>
          <p className="font-hand text-3xl text-rose-deep sm:text-4xl">one more thing...</p>
          <p className="mt-3 font-body text-lg text-plum-soft">
            {revealed ? "You made a wish. I hope it comes true." : prompt}
          </p>
          {!revealed && (
            <p className="mt-1 font-body text-sm text-plum-soft/70">{instruction}</p>
          )}
        </ScrollReveal>

        {/* confetti layer */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[420px] overflow-hidden">
          {confetti.map((c) => (
            <span
              key={c.id}
              className="absolute top-0 animate-confetti-fall"
              style={{
                left: `${c.left}%`,
                width: c.size,
                height: c.size,
                backgroundColor: c.color,
                borderRadius: c.isCircle ? "9999px" : "2px",
                animationDuration: `${c.duration}s`,
                animationDelay: `${c.delay}s`,
              }}
            />
          ))}
        </div>

        <ScrollReveal delay={150}>
          <div className="relative mx-auto mt-14 flex w-64 flex-col items-center">
            {/* candles */}
            <div className="relative z-10 mb-[-6px] flex items-end justify-center gap-4">
              {lit.map((isLit, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={isLit ? "Blow out this candle" : "Candle blown out"}
                  onClick={() => blowOne(i)}
                  className="flex flex-col items-center"
                  disabled={!isLit}
                >
                  <span
                    className={`mb-0.5 h-3 w-2.5 rounded-full bg-gradient-to-t from-rose to-gold transition-all duration-500 ${
                      isLit ? "animate-flicker opacity-100" : "scale-0 opacity-0"
                    }`}
                  />
                  <span className={`h-8 w-[5px] rounded-sm ${CANDLE_COLORS[i % CANDLE_COLORS.length]}`} />
                </button>
              ))}
            </div>

            {/* top tier */}
            <div className="relative z-[5] flex h-16 w-40 items-start justify-center rounded-t-lg bg-gradient-to-b from-lavender-light to-lavender-deep/80 shadow-inner">
              <div className="flex -translate-y-2 gap-0.5">
                {Array.from({ length: 7 }).map((_, i) => (
                  <span key={i} className="h-3 w-3 rounded-full bg-warmwhite" />
                ))}
              </div>
            </div>

            {/* base tier */}
            <div className="relative flex h-24 w-56 items-start justify-center rounded-b-2xl bg-gradient-to-b from-blush to-blush-deep/90 shadow-soft">
              <div className="flex -translate-y-2 gap-0.5">
                {Array.from({ length: 11 }).map((_, i) => (
                  <span key={i} className="h-3.5 w-3.5 rounded-full bg-warmwhite" />
                ))}
              </div>
            </div>

            {/* plate */}
            <div className="mt-1 h-3 w-64 rounded-full bg-plum/10" />
          </div>
        </ScrollReveal>

        {!revealed && (
          <button
            type="button"
            onClick={blowAll}
            className="mt-10 rounded-full bg-rose px-6 py-3 font-body text-sm font-semibold text-warmwhite shadow-soft transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            Blow out the candles ♡
          </button>
        )}

        <div
          className={`grid transition-all duration-700 ease-out ${
            revealed ? "mt-10 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="grain relative rounded-2xl bg-warmwhite px-7 py-9 shadow-soft">
              <p className="whitespace-pre-line font-hand text-2xl leading-relaxed text-plum sm:text-3xl">
                {revealMessage}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
