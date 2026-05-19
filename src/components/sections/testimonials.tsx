import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star } from "lucide-react";
import { SectionHeader } from "./services";

const items = [
  { name: "Aria Voss", company: "Nyx Labs", initials: "AV", text: "They didn't just build our platform — they fortified it. The pentest report alone was worth twice what we paid.", stars: 5 },
  { name: "Marcus Chen", company: "Helios Cloud", initials: "MC", text: "Shoukan refactored our app and our security posture in a single engagement. The work feels conjured, not coded.", stars: 5 },
  { name: "Sana Rahimi", company: "Obsidian Health", initials: "SR", text: "Elite craftsmanship. They speak the language of attackers and architects with equal fluency.", stars: 5 },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader eyebrow="Testimonials" title="Voices from the Realm" />
        <div className="relative mt-16 min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="arcane-card mx-auto max-w-3xl rounded-2xl p-10 text-center"
            >
              <div className="mb-6 flex justify-center gap-1">
                {Array.from({ length: items[i].stars }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-[color:var(--thunder)] text-[color:var(--thunder)]" />
                ))}
              </div>
              <p className="font-display text-xl leading-relaxed sm:text-2xl">
                "{items[i].text}"
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <span
                  className="font-display flex h-12 w-12 items-center justify-center rounded-full text-sm"
                  style={{ background: "var(--gradient-arcane)", color: "var(--primary-foreground)", boxShadow: "var(--shadow-glow-electric)" }}
                >
                  {items[i].initials}
                </span>
                <div className="text-left">
                  <div className="font-display text-sm">{items[i].name}</div>
                  <div className="text-xs text-foreground/60">{items[i].company}</div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
        <div className="mt-8 flex justify-center gap-3">
          {items.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Show testimonial ${k + 1}`}
              className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-[color:var(--electric)]" : "w-3 bg-foreground/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}