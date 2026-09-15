"use client";

import { useCallback, useEffect } from "react";
import type { Photo } from "@/lib/data";
import PolaroidImage from "./PolaroidImage";

export default function PhotoLightbox({
  photos,
  index,
  onClose,
  onNavigate,
}: {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}) {
  const photo = photos[index];

  const goNext = useCallback(() => {
    onNavigate((index + 1) % photos.length);
  }, [index, photos.length, onNavigate]);

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + photos.length) % photos.length);
  }, [index, photos.length, onNavigate]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, goNext, goPrev]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-plum/70 px-4 backdrop-blur-sm sm:px-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={photo.caption}
    >
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Close photo"
        className="fixed right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-warmwhite text-lg text-plum shadow-soft transition-transform duration-200 hover:scale-110 sm:right-6 sm:top-6"
      >
        ✕
      </button>

      {photos.length > 1 && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          aria-label="Previous photo"
          className="fixed left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-warmwhite/90 text-plum shadow-soft transition-transform duration-200 hover:scale-110 sm:left-6"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      {photos.length > 1 && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          aria-label="Next photo"
          className="fixed right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-warmwhite/90 text-plum shadow-soft transition-transform duration-200 hover:scale-110 sm:right-6"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      {/* re-keyed so animate-pop-in replays each time the photo changes */}
      <div key={index} onClick={(e) => e.stopPropagation()} className="relative w-full max-w-sm animate-pop-in sm:max-w-md">
        <span aria-hidden="true" className="washi-tape absolute -top-4 left-1/2 z-10 h-7 w-16 -translate-x-1/2 -rotate-2 rounded-sm bg-blush-deep/80 shadow-sm" />
        <div className="rounded-sm bg-warmwhite p-3 pb-9 shadow-2xl sm:p-4 sm:pb-12">
          <div className="aspect-square w-full overflow-hidden rounded-[2px] bg-blush-light">
            <PolaroidImage src={photo.src} alt={photo.caption} index={index} />
          </div>
          <p className="mt-4 text-center font-hand text-xl text-plum-soft sm:text-2xl">{photo.caption}</p>
        </div>
        {photos.length > 1 && (
          <p className="mt-4 text-center font-body text-xs text-warmwhite/80">{index + 1} / {photos.length}</p>
        )}
      </div>
    </div>
  );
}