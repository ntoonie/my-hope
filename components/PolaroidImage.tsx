"use client";

import { useState } from "react";

export default function PolaroidImage({
  src,
  alt,
  index,
}: {
  src: string;
  alt: string;
  index: number;
}) {
  const [errored, setErrored] = useState(false);

  // A handful of soft gradient combinations so placeholders don't feel repetitive.
  const gradients = [
    "from-blush to-lavender",
    "from-lavender to-blush-light",
    "from-blush-deep to-lavender-light",
    "from-lavender-deep to-blush",
  ];
  const gradient = gradients[index % gradients.length];

  if (errored || !src) {
    return (
      <div
        className={`flex h-full w-full flex-col items-center justify-center gap-1 bg-gradient-to-br ${gradient} text-plum/50`}
      >
        <span className="text-2xl">♡</span>
        <span className="font-hand text-sm">add a photo</span>
      </div>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt={alt}
      onError={() => setErrored(true)}
      className="h-full w-full object-cover"
      loading="lazy"
    />
  );
}
