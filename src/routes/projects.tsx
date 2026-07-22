import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { ArrowLeft, ExternalLink, Filter } from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";
import { ArcaneCursor } from "@/components/arcane/cursor";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { SigilBadge } from "@/components/sections/projects";
import { projects, accentVar, type Project } from "@/data/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Grimoire of Works — Shoukan Labs Projects" },
      {
        name: "description",
        content:
          "Every rite Shoukan Labs has shipped — with real metrics, stacks, and outcomes across software, security, cloud, and integration.",
      },
      { property: "og:title", content: "Grimoire of Works — Shoukan Labs Projects" },
      {
        property: "og:description",
        content: "Explore every completed project — metrics, stacks, and outcomes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Grimoire of Works — Shoukan Labs Projects" },
      {
        name: "twitter:description",
        content: "Explore every completed project — metrics, stacks, and outcomes.",
      },
    ],
  }),
  component: ProjectsPage,
});

const categories = ["All", "Software", "Transportation", "Web Design"] as const;
type Cat = (typeof categories)[number];

function ProjectsPage() {
  const [cat, setCat] = useState<Cat>("All");
  const [active, setActive] = useState<string | null>(projects[0]?.slug ?? null);

  const filtered = useMemo(
    () => (cat === "All" ? projects : projects.filter((p) => p.category === cat)),
    [cat],
  );

  const totals = useMemo(() => {
    return {
      count: projects.length,
      years: new Set(projects.map((p) => p.year)).size,
      live: projects.filter((p) => p.status === "Live").length,
      categories: new Set(projects.map((p) => p.category)).size,
    };
  }, []);

  const activeProject = filtered.find((p) => p.slug === active) ?? filtered[0];

  return (
    <ThemeProvider>
      <ArcaneCursor />
      <Navbar />
      <main className="relative overflow-x-clip pt-32">
        {/* Header */}
        <section className="relative mx-auto max-w-7xl px-6">
          <Link
            to="/"
            className="font-sub inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground/60 transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to summoning circle
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-sub mb-4 text-xs uppercase tracking-[0.4em] text-[color:var(--thunder)]"
              >
                — The Grimoire —
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="font-display text-5xl leading-[1.05] sm:text-7xl"
              >
                Every rite,
                <br />
                <span className="text-gradient-arcane">catalogued.</span>
              </motion.h1>
              <p className="mt-6 max-w-xl text-foreground/70">
                A living index of the systems we've conjured — with the metrics that
                mattered, the stacks we forged them from, and where they now live.
              </p>
            </div>

            {/* Totals cluster */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
              {[
                { l: "Projects", v: totals.count },
                { l: "Years active", v: totals.years },
                { l: "Live now", v: totals.live },
                { l: "Disciplines", v: totals.categories },
              ].map((s) => (
                <div key={s.l} className="arcane-card rounded-2xl p-5">
                  <div className="font-display text-4xl text-gradient-arcane">
                    {s.v}
                  </div>
                  <div className="font-sub mt-1 text-[10px] uppercase tracking-[0.25em] text-foreground/60">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter runes */}
        <section className="mx-auto mt-16 max-w-7xl px-6">
          <div className="flex flex-wrap items-center gap-2">
            <Filter className="h-4 w-4 text-foreground/50" />
            {categories.map((c) => {
              const isActive = c === cat;
              return (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`font-sub rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.25em] transition-all ${
                    isActive
                      ? "border-transparent text-[color:var(--primary-foreground)]"
                      : "border-[color:var(--border)] text-foreground/60 hover:text-foreground"
                  }`}
                  style={
                    isActive
                      ? {
                          background: "var(--gradient-arcane)",
                          boxShadow: "var(--shadow-glow-electric)",
                        }
                      : undefined
                  }
                >
                  {c}
                </button>
              );
            })}
            <span className="ml-auto font-sub text-[10px] uppercase tracking-[0.3em] text-foreground/50">
              {filtered.length} showing
            </span>
          </div>
        </section>

        {/* Split view: index + focused rite */}
        <section className="mx-auto mt-10 grid max-w-7xl gap-6 px-6 pb-24 lg:grid-cols-[1fr_1.2fr]">
          {/* Index list */}
          <ul className="space-y-2">
            {filtered.map((p, i) => {
              const isActive = activeProject?.slug === p.slug;
              return (
                <li key={p.slug}>
                  <button
                    onMouseEnter={() => setActive(p.slug)}
                    onFocus={() => setActive(p.slug)}
                    onClick={() => setActive(p.slug)}
                    className={`group relative flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all ${
                      isActive
                        ? "border-[color:var(--electric)]/60"
                        : "border-[color:var(--border)] hover:border-[color:var(--electric)]/40"
                    }`}
                    style={
                      isActive
                        ? {
                            background:
                              "color-mix(in oklab, var(--card) 80%, transparent)",
                            boxShadow: "var(--shadow-arcane-card)",
                          }
                        : undefined
                    }
                  >
                    <span
                      className="font-sub w-8 text-[10px] uppercase tracking-[0.2em] text-foreground/40"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="h-8 w-8 shrink-0 rounded-full"
                      style={{
                        background: `linear-gradient(135deg, ${accentVar[p.accent]}, transparent)`,
                        boxShadow: `0 0 20px -4px ${accentVar[p.accent]}`,
                      }}
                    />
                    <span className="flex-1">
                      <span className="font-display block text-lg">{p.name}</span>
                      <span className="font-sub block text-[10px] uppercase tracking-[0.2em] text-foreground/50">
                        {p.category} · {p.year} · {p.status}
                      </span>
                    </span>
                    <span
                      className={`h-px flex-1 max-w-[60px] transition-all ${
                        isActive ? "opacity-100" : "opacity-30"
                      }`}
                      style={{ background: accentVar[p.accent] }}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Focused panel */}
          {activeProject && (
            <motion.div
              key={activeProject.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="arcane-card sticky top-28 h-fit overflow-hidden rounded-3xl"
            >
              <div
                className="relative flex items-center justify-between gap-6 p-8"
                style={{
                  background: `linear-gradient(135deg, color-mix(in oklab, ${accentVar[activeProject.accent]} 22%, transparent), transparent)`,
                }}
              >
                <div>
                  <span
                    className="font-sub text-[10px] uppercase tracking-[0.3em]"
                    style={{ color: accentVar[activeProject.accent] }}
                  >
                    {activeProject.category} · {activeProject.year}
                  </span>
                  <h2 className="font-display mt-2 text-4xl">{activeProject.name}</h2>
                  <p className="mt-1 text-sm text-foreground/70">
                    {activeProject.tagline}
                  </p>
                </div>
                <SigilBadge
                  sigil={activeProject.sigil}
                  accent={accentVar[activeProject.accent]}
                  size={100}
                />
              </div>

              <div className="p-8 pt-4">
                <p className="text-sm leading-relaxed text-foreground/80">
                  {activeProject.summary}
                </p>

                <MetricGrid project={activeProject} />

                <div className="mt-6">
                  <div className="font-sub mb-2 text-[10px] uppercase tracking-[0.3em] text-foreground/50">
                    Arsenal
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.stack.map((s) => (
                      <span
                        key={s}
                        className="font-sub rounded-full border border-[color:var(--border)] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-foreground/70"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {activeProject.link && (
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="font-sub mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 text-[11px] uppercase tracking-[0.3em] text-[color:var(--primary-foreground)] transition-transform hover:scale-105"
                    style={{
                      background: "var(--gradient-arcane)",
                      boxShadow: "var(--shadow-glow-electric)",
                    }}
                  >
                    Visit rite <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </section>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

function MetricGrid({ project }: { project: Project }) {
  return (
    <div className="mt-6 grid grid-cols-2 gap-3">
      {project.metrics.map((m, i) => (
        <motion.div
          key={m.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06 }}
          className="relative overflow-hidden rounded-xl border border-[color:var(--border)] p-4"
        >
          <div
            className="font-display text-3xl"
            style={{ color: accentVar[project.accent] }}
          >
            {m.value}
          </div>
          <div className="font-sub mt-1 text-[10px] uppercase tracking-[0.2em] text-foreground/55">
            {m.label}
          </div>
          <span
            aria-hidden
            className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full opacity-20 blur-2xl"
            style={{ background: accentVar[project.accent] }}
          />
        </motion.div>
      ))}
    </div>
  );
}