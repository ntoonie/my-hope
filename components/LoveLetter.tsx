import { birthdayData } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function LoveLetter() {
  const { heading, salutation, body, signature } = birthdayData.letter;

  return (
    <section id="letter" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl">
        <ScrollReveal>
          <p className="mb-8 text-center font-hand text-3xl text-rose-deep sm:text-4xl">
            {heading}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="relative">
            {/* washi tape */}
            <div className="washi-tape absolute -top-4 left-10 h-8 w-20 -rotate-6 rounded-sm bg-blush-deep/70 shadow-sm sm:left-16" />

            <div className="grain relative rounded-2xl bg-warmwhite px-7 py-10 shadow-soft sm:px-12 sm:py-14">
              <div className="torn-edge-top absolute -top-2 left-0 h-3 w-full bg-warmwhite" />

              <p className="font-hand text-2xl text-plum sm:text-3xl">{salutation}</p>

              <p className="mt-6 whitespace-pre-line font-body text-base leading-8 text-plum-soft sm:text-lg">
                {body}
              </p>

              <p className="mt-8 text-right font-hand text-2xl text-rose-deep sm:text-3xl">
                {signature} <span aria-hidden="true">♡</span>
              </p>

              <div className="torn-edge-top absolute -bottom-2 left-0 h-3 w-full rotate-180 bg-warmwhite" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
