"use client";

import { useEffect, useRef, useState } from "react";
import { birthdayData } from "@/lib/data";

const VOLUME = 0.15; 

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [unavailable, setUnavailable] = useState(false);

useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = VOLUME;
    }
  }, []);

  useEffect(() => {
    const startMusic = async () => {
      const audio = audioRef.current;
      if (!audio) return;
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setUnavailable(true);
      }
    };
    window.addEventListener("start-music", startMusic);
    return () => window.removeEventListener("start-music", startMusic);
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (playing) {
        audio.pause();
        setPlaying(false);
      } else {
        await audio.play();
        setPlaying(true);
      }
    } catch {
      // Most likely the placeholder /music/song.mp3 hasn't been added yet.
      setUnavailable(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={birthdayData.music.src} loop preload="none" />
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        title={
          unavailable
            ? "Add a song at /public/music/song.mp3 to enable this"
            : playing
            ? "Pause music"
            : "Play music"
        }
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-warmwhite/90 px-4 py-2.5 font-body text-sm text-plum shadow-soft backdrop-blur transition-transform duration-300 hover:scale-105 active:scale-95"
      >
        <span className={`text-rose ${playing ? "animate-heartbeat" : ""}`} aria-hidden="true">
          {playing ? "♪" : "♡"}
        </span>
        {birthdayData.music.label}
      </button>
    </>
  );
}
