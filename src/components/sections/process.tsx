import { motion } from "motion/react";
import { Eye, ScrollText, Zap, ShieldCheck, Rocket } from "lucide-react";
import { SectionHeader } from "./services";

const steps = [
  { icon: Eye, title: "Discovery", desc: "We learn your goals, systems, and challenges through deep consultation." },
  { icon: ScrollText, title: "Spellcrafting", desc: "Our team architects the perfect solution tailored to your needs." },
  { icon: Zap, title: "Conjuring", desc: "Development or security assessment begins with full transparency." },
  { icon: ShieldCheck, title: "Fortification", desc: "Testing, hardening, and quality assurance at every layer." },
  { icon: Rocket, title: "Unleashing", desc: "Deployment, handoff, documentation, and ongoing support." },
];

export function Process() {
  return (
    <section id="process" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Methodology" title="The Summoning Ritual" subtitle="Five steps from intent to incantation." />

        <div className="relative mt-20">
          {/* Connector line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="absolute left-0 right-0 top-8 hidden h-px origin-left lg:block"
            style={{ background: "linear-gradient(90deg, transparent, var(--electric), var(--thunder), transparent)" }}
          />
          <div className="grid gap-10 lg:grid-cols-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.12 }}
                className="relative flex flex-col items-center text-center"
              >
                <div
                  className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[color:var(--electric)]/40 bg-background"
                  style={{ boxShadow: "var(--shadow-glow-electric)" }}
                >
                  <s.icon className="h-6 w-6 text-[color:var(--electric)]" />
                  <span className="font-display absolute -right-2 -top-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--thunder)] text-xs text-[color:var(--background)]">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display mt-5 text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-foreground/60">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}