import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";
import { SectionHeader } from "./services";

const stats = [
  { value: 3, suffix: "+", label: "Projects Summoned" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 0, suffix: "", label: "Critical Breaches Post-Audit" },
  { value: 1, suffix: "+", label: "Years of Dark Arts" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.8, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [inView, to, mv]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function Stats() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Proof of Power" title="Power by the Numbers" />
        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex flex-col items-center"
            >
              <div
                className="hex flex h-40 w-36 flex-col items-center justify-center p-4 text-center"
                style={{
                  background: "linear-gradient(135deg, color-mix(in oklab, var(--electric) 15%, transparent), color-mix(in oklab, var(--arcane) 10%, transparent))",
                  boxShadow: "var(--shadow-glow-electric)",
                }}
              >
                <span className="font-display text-4xl text-gradient-thunder">
                  <Counter to={s.value} suffix={s.suffix} />
                </span>
              </div>
              <p className="font-sub mt-4 text-center text-xs uppercase tracking-[0.2em] text-foreground/60">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}