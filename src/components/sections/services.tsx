import { motion } from "motion/react";
import { Code2, Wand2, Cloud, Swords, Search, Network } from "lucide-react";

const services = [
  { icon: Code2, title: "Custom Software Development", desc: "Tailored web and software applications summoned from scratch — scalable, fast, and built to last." },
  { icon: Wand2, title: "Website Refinement & Optimization", desc: "Transform your existing site into a high-performance, visually striking experience." },
  { icon: Cloud, title: "Cloud Infrastructure & Security", desc: "Architect and harden your cloud systems on AWS, GCP, or Azure against all threats." },
  { icon: Swords, title: "Penetration Testing", desc: "We attack your systems before attackers do. Full-scope ethical hacking and detailed reporting." },
  { icon: Search, title: "Security Auditing", desc: "Deep vulnerability assessments, code reviews, and compliance checks for peace of mind." },
  { icon: Network, title: "API & Systems Integration", desc: "Connect your digital ecosystem with robust, secure API architecture and third-party integrations." },
];

export function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Our Crafts" title="What We Conjure" subtitle="Six disciplines, one summoning circle. Each engagement is forged to your purpose." />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="arcane-card group relative overflow-hidden rounded-2xl p-7"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full" style={{ background: "var(--gradient-arcane)", boxShadow: "var(--shadow-glow-electric)" }}>
                <s.icon className="h-6 w-6 text-[color:var(--primary-foreground)]" />
              </div>
              <h3 className="font-display text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">{s.desc}</p>
              <span
                className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle at 30% 0%, color-mix(in oklab, var(--electric) 20%, transparent), transparent 60%)" }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-sub mb-4 text-xs uppercase tracking-[0.4em] text-[color:var(--thunder)]"
      >
        — {eyebrow} —
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="font-display text-4xl sm:text-6xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-foreground/60">{subtitle}</p>
      )}
    </div>
  );
}