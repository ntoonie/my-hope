"use client";

import { useMemo } from "react";

const SYMBOLS = ["♡", "✦", "✧", "❀", "☆"];

type Piece = {
  id: number;
  symbol: string;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
};

export default function FloatingBackground({
  count = 14,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  const pieces = useMemo<Piece[]>(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      symbol: SYMBOLS[i % SYMBOLS.length],
      left: Math.round((i / count) * 92 + Math.random() * 6),
      size: 12 + Math.random() * 18,
      duration: 14 + Math.random() * 12,
      delay: Math.random() * 14,
      opacity: 0.35 + Math.random() * 0.4,
    }));
  }, [count]);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {pieces.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0 animate-drift text-rose"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  );
}
