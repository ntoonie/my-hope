import { birthdayData } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";
import SurpriseCardItem from "./SurpriseCard";

export default function SurpriseCards() {
  return (
    <section id="open-when" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal className="text-center">
          <p className="font-hand text-3xl text-rose-deep sm:text-4xl">open when...</p>
          <p className="mx-auto mt-2 max-w-md font-body text-plum-soft">
            a few little letters, for whenever you need them
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {birthdayData.surpriseCards.map((card, i) => (
            <ScrollReveal key={card.label} delay={i * 100}>
              <SurpriseCardItem card={card} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
