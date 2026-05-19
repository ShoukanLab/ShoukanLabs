import { motion } from "motion/react";
import { ArrowDown, Sparkles, ShieldCheck } from "lucide-react";
import { SummoningCircle } from "../arcane/summoning-circle";
import { StormBg } from "../arcane/storm-bg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24"
    >
      <StormBg />
      {/* Summoning circle */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-[color:var(--electric)] opacity-60">
        <SummoningCircle className="h-[min(90vw,720px)] w-[min(90vw,720px)]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-sub mb-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--electric)]/30 bg-background/40 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70 backdrop-blur"
        >
          <Sparkles className="h-3 w-3 text-[color:var(--thunder)]" /> Software Sorcery, Forged in Code
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-display text-5xl leading-[1.05] sm:text-7xl md:text-8xl"
        >
          We Summon <br />
          <span className="text-gradient-arcane">Digital Power</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mx-auto mt-8 max-w-2xl text-base text-foreground/70 sm:text-lg"
        >
          Shoukan Labs brings your software vision to life — built with precision,
          armored with security, charged with performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#services"
            className="font-sub group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-[color:var(--primary-foreground)] transition-all hover:scale-105"
            style={{
              background: "var(--gradient-arcane)",
              boxShadow: "var(--shadow-glow-electric)",
            }}
          >
            <Sparkles className="h-4 w-4" /> Explore Services
          </a>
          <a
            href="#contact"
            className="font-sub inline-flex items-center gap-2 rounded-full border border-[color:var(--thunder)]/50 bg-background/30 px-7 py-3.5 text-xs uppercase tracking-[0.2em] backdrop-blur transition-all hover:border-[color:var(--thunder)] hover:shadow-[var(--shadow-glow-thunder)]"
          >
            <ShieldCheck className="h-4 w-4 text-[color:var(--thunder)]" /> Get a Free Audit
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.4, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-foreground/50"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.a>
    </section>
  );
}