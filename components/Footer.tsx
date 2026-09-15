import { birthdayData } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";
import FloatingBackground from "./FloatingBackground";

export default function Footer() {
  const { girlfriendName, boyfriendName, finalMessage } = birthdayData;

  return (
    <footer className="relative flex min-h-[70svh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      <FloatingBackground count={10} />

      <ScrollReveal className="relative z-10 flex flex-col items-center">
        <h2 className="text-shadow-soft font-hand text-5xl text-plum sm:text-6xl">
          Enjoy your Day, {girlfriendName} <span className="text-rose">♡</span>
        </h2>

        <p className="mt-6 max-w-md whitespace-pre-line font-body text-lg leading-relaxed text-plum-soft">
          {finalMessage.body}
        </p>

        <div className="mt-10 flex items-center gap-2 font-hand text-xl text-rose-deep">
          <span>
            {finalMessage.madeWithLoveBy} {boyfriendName}
          </span>
          <span className="inline-block animate-heartbeat">♡</span>
        </div>
      </ScrollReveal>
    </footer>
  );
}
