import { birthdayData } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";
import ReasonCardItem from "./ReasonCardItem";

export default function Reasons() {
  return (
    <section id="reasons" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal className="text-center">
          <p className="font-hand text-3xl text-rose-deep sm:text-4xl">
            reasons why I love you
          </p>
          <p className="mx-auto mt-2 max-w-md font-body text-plum-soft">
            hehehe
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4">
          {birthdayData.reasons.map((reason, i) => (
            <ScrollReveal key={reason.title} delay={(i % 4) * 90}>
              <ReasonCardItem reason={reason} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
