import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { projects, accentVar } from "@/data/projects";
import { SectionHeader } from "./services";

const featured = projects.slice(0, 3);

export function Projects() {
  const [active, setActive] = useState(0);
  const p = featured[active];

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, color-mix(in oklab, var(--electric) 14%, transparent), transparent 55%), radial-gradient(ellipse at 80% 70%, color-mix(in oklab, var(--thunder) 12%, transparent), transparent 55%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="The Grimoire"
          title="Works We've Summoned"
          subtitle="Hover a rite to divine its sigil. Every entry — shipped, scaled, battle-tested."
        />

        <div className="mt-20 grid gap-16 lg:grid-cols-[1fr_420px] lg:gap-20">
          {/* Index list — no cards, pure typography */}
          <ol
            className="relative divide-y"
            style={{ borderColor: "color-mix(in oklab, var(--foreground) 10%, transparent)" }}
            onMouseLeave={() => setActive(0)}
          >
            {featured.map((proj, i) => {
              const isActive = i === active;
              return (
                <li
                  key={proj.slug}
                  onMouseEnter={() => setActive(i)}
                  className="group relative border-t-0"
                  style={{ borderColor: "color-mix(in oklab, var(--foreground) 10%, transparent)" }}
                >
                  <div className="flex items-center gap-6 py-6 md:py-7">
                    <span
                      className="font-sub w-12 shrink-0 text-xs uppercase tracking-[0.3em] transition-colors"
                      style={{
                        color: isActive ? accentVar[proj.accent] : "color-mix(in oklab, var(--foreground) 40%, transparent)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0 flex-1">
                      <motion.h3
                        animate={{
                          x: isActive ? 12 : 0,
                          color: isActive ? accentVar[proj.accent] : "var(--foreground)",
                        }}
                        transition={{ type: "spring", stiffness: 260, damping: 26 }}
                        className="font-display text-3xl leading-tight sm:text-4xl md:text-5xl"
                        style={{
                          textShadow: isActive ? `0 0 30px ${accentVar[proj.accent]}66` : "none",
                        }}
                      >
                        {proj.name}
                      </motion.h3>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-2 max-w-xl text-sm text-foreground/65"
                          >
                            {proj.tagline}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <span
                      className="font-sub hidden shrink-0 text-[10px] uppercase tracking-[0.3em] md:block"
                      style={{
                        color: isActive
                          ? accentVar[proj.accent]
                          : "color-mix(in oklab, var(--foreground) 40%, transparent)",
                      }}
                    >
                      {proj.category} · {proj.year}
                    </span>

                    <motion.span
                      animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -8 }}
                      className="shrink-0"
                      style={{ color: accentVar[proj.accent] }}
                    >
                      <ArrowUpRight className="h-6 w-6" />
                    </motion.span>
                  </div>

                  {/* Active underline sweep */}
                  <motion.span
                    aria-hidden
                    initial={false}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute bottom-0 left-0 h-px w-full origin-left"
                    style={{
                      background: `linear-gradient(to right, ${accentVar[proj.accent]}, transparent)`,
                    }}
                  />
                </li>
              );
            })}
          </ol>

          {/* Divination panel — sigil + live metrics */}
          <aside className="relative hidden lg:block">
            <div className="sticky top-32">
              <div className="relative flex flex-col items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={p.slug}
                    initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.85, rotate: 8 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative"
                  >
                    <div
                      aria-hidden
                      className="absolute inset-0 -z-10 rounded-full blur-3xl opacity-60"
                      style={{
                        background: `radial-gradient(circle, ${accentVar[p.accent]}, transparent 70%)`,
                      }}
                    />
                    <SigilBadge sigil={p.sigil} accent={accentVar[p.accent]} size={220} />
                  </motion.div>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={p.slug + "-meta"}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                    className="mt-10 w-full"
                  >
                    <div className="grid grid-cols-2 gap-3">
                      {p.metrics.slice(0, 4).map((m) => (
                        <div
                          key={m.label}
                          className="rounded-xl border px-3 py-2"
                          style={{
                            borderColor: `color-mix(in oklab, ${accentVar[p.accent]} 30%, transparent)`,
                            background: `color-mix(in oklab, ${accentVar[p.accent]} 5%, transparent)`,
                          }}
                        >
                          <div
                            className="font-display text-lg"
                            style={{ color: accentVar[p.accent] }}
                          >
                            {m.value}
                          </div>
                          <div className="font-sub text-[10px] uppercase tracking-[0.15em] text-foreground/55">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="font-sub rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-foreground/70"
                          style={{ borderColor: "color-mix(in oklab, var(--foreground) 15%, transparent)" }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </aside>
        </div>

        {/* Explore all — portal button */}
        <div className="mt-20 flex flex-col items-center gap-4">
          <p className="font-sub text-xs uppercase tracking-[0.4em] text-foreground/50">
            — {projects.length - featured.length}+ more rites in the archive —
          </p>
          <Link
            to="/projects"
            className="group relative inline-flex items-center gap-3 rounded-full px-8 py-4 font-sub text-sm uppercase tracking-[0.3em] text-[color:var(--primary-foreground)] transition-transform hover:scale-[1.03]"
            style={{
              background: "var(--gradient-arcane)",
              boxShadow: "var(--shadow-glow-electric)",
            }}
          >
            <Sparkles className="h-4 w-4" />
            Explore All Works
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-80"
              style={{ background: "var(--gradient-arcane)" }}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SigilBadge({ sigil, accent, size = 120 }: { sigil: string; accent: string; size?: number }) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 120 120"
        width={size}
        height={size}
        className="animate-spin-slow"
        style={{ transformOrigin: "60px 60px", color: accent }}
        aria-hidden
      >
        <circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
        <circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 6" opacity="0.5" />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i / 8) * Math.PI * 2;
          const x = 60 + Math.cos(a) * 56;
          const y = 60 + Math.sin(a) * 56;
          return <circle key={i} cx={x} cy={y} r="1.6" fill="currentColor" opacity="0.8" />;
        })}
      </svg>
      <svg
        viewBox="0 0 120 120"
        width={size}
        height={size}
        className="animate-spin-reverse absolute inset-0"
        style={{ transformOrigin: "60px 60px", color: accent }}
        aria-hidden
      >
        <polygon points="60,20 96,80 24,80" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      </svg>
      <div
        className="absolute inset-0 flex items-center justify-center font-display"
        style={{ color: accent, textShadow: `0 0 20px ${accent}`, fontSize: size * 0.24 }}
      >
        {sigil}
      </div>
    </div>
  );
}
