import { motion } from "motion/react";
import { SectionHeader } from "./services";

const techs = [
  "Java", "Python", "Go", "Node", "React", "AWS",
  "Docker", "K8s", "PostgreSQL", "Linux", "Burp", "Metasploit",
];

export function TechStack() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Arsenal" title="Our Arsenal" subtitle="The tools we wield, sharpened by years of practice." />
        <div className="mt-16 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
          {techs.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="hex group flex aspect-[1/1.15] items-center justify-center text-center"
              style={{
                background: "linear-gradient(135deg, color-mix(in oklab, var(--electric) 12%, transparent), color-mix(in oklab, var(--card) 80%, transparent))",
              }}
            >
              <span className="font-sub text-xs uppercase tracking-widest text-foreground/80 transition-all group-hover:text-[color:var(--thunder)]">
                {t}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}