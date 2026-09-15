import { birthdayData } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function Timeline() {
  return (
    <section id="timeline" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl">
        <ScrollReveal className="text-center">
          <p className="font-hand text-3xl text-rose-deep sm:text-4xl">our story so far</p>
          <p className="mx-auto mt-2 max-w-md font-body text-plum-soft">
            a few chapters, with many more still to write
          </p>
        </ScrollReveal>

        <ol className="relative mt-16 space-y-14 border-l-2 border-dotted border-rose/50 pl-9 sm:pl-12">
          {birthdayData.timeline.map((event, i) => (
            <ScrollReveal key={event.title} delay={i * 120}>
              <li className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[3.05rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-warmwhite text-rose-deep shadow-soft sm:-left-[3.55rem]"
                >
                  ♡
                </span>
                <p className="font-body text-xs uppercase tracking-wide text-plum-soft/70">
                  {event.date}
                </p>
                <p className="mt-1 font-hand text-2xl text-plum sm:text-3xl">{event.title}</p>
                <p className="mt-1 font-body text-plum-soft">{event.description}</p>
              </li>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
