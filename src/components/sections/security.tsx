import { motion } from "motion/react";
import { Target, Layers, FileCheck } from "lucide-react";

const pillars = [
  { color: "var(--crimson)", icon: Target, title: "Offensive Testing", desc: "We think like attackers. Pentest, red teaming, OSINT." },
  { color: "var(--electric)", icon: Layers, title: "Defensive Architecture", desc: "Secure-by-design infrastructure and hardened configs." },
  { color: "var(--thunder)", icon: FileCheck, title: "Compliance & Reporting", desc: "OWASP, CVSS scoring, actionable remediation plans." },
];

export function Security() {
  return (
    <section id="security" className="relative py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sub mb-4 text-xs uppercase tracking-[0.4em] text-[color:var(--thunder)]">— The Fortress —</p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            Your Digital Fortress, <span className="text-gradient-arcane">Forged by Shoukan</span>
          </h2>
          <p className="mt-6 text-foreground/70">
            Security is not a feature bolted on at the end — it's a posture, an instinct, a craft.
            We approach defense with an attacker's mind, and architecture with a guardian's discipline.
          </p>
          <div className="mt-10 space-y-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-4 rounded-xl border border-border/50 bg-card/40 p-5 backdrop-blur"
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: `color-mix(in oklab, ${p.color} 20%, transparent)`, color: p.color, boxShadow: `0 0 20px ${p.color}` }}
                >
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-lg">{p.title}</h4>
                  <p className="text-sm text-foreground/60">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Shield graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute h-80 w-80 animate-pulse-glow rounded-full" style={{ background: "radial-gradient(circle, var(--electric), transparent 70%)" }} />
          <svg viewBox="0 0 300 360" className="relative h-[460px] w-auto text-[color:var(--electric)]" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <defs>
              <linearGradient id="shield-g" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--electric)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="var(--arcane)" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {[1, 0.85, 0.7, 0.55].map((s, i) => (
              <motion.path
                key={i}
                d={`M150 ${20 + (1 - s) * 50} L${150 + 130 * s} ${80 + (1 - s) * 40} L${150 + 130 * s} ${200 + (1 - s) * 40} Q${150 + 130 * s} ${280 + (1 - s) * 30} 150 ${340 - (1 - s) * 30} Q${150 - 130 * s} ${280 + (1 - s) * 30} ${150 - 130 * s} ${200 + (1 - s) * 40} L${150 - 130 * s} ${80 + (1 - s) * 40} Z`}
                fill={i === 0 ? "url(#shield-g)" : "none"}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.2, duration: 1.2 }}
                opacity={1 - i * 0.15}
              />
            ))}
            <motion.path
              d="M150 130 L150 230 M120 165 L180 165 M125 200 L175 200"
              stroke="var(--thunder)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}