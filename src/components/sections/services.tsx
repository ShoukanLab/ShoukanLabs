import { motion } from "motion/react";

// Each service hangs from a branch tip. Coordinates are in a 1000x900 SVG viewBox.
// anchor = branch tip where the rope attaches; rope drops down to the label.
const services: { title: string; anchor: [number, number]; ropeLen: number }[] = [
  { title: "Custom Software Development", anchor: [175, 300], ropeLen: 90 },
  { title: "Website Refinement", anchor: [330, 205], ropeLen: 70 },
  { title: "Cloud Infrastructure & Security", anchor: [500, 155], ropeLen: 60 },
  { title: "Penetration Testing", anchor: [670, 210], ropeLen: 75 },
  { title: "Security Auditing", anchor: [825, 300], ropeLen: 95 },
  { title: "API & Systems Integration", anchor: [500, 360], ropeLen: 130 },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-32">
      {/* Ambient fog + moon */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, color-mix(in oklab, var(--electric) 18%, transparent), transparent 60%), radial-gradient(ellipse at 50% 100%, color-mix(in oklab, var(--thunder) 10%, transparent), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Our Crafts"
          title="The Wither Tree"
          subtitle="Six offerings hang from the ancient boughs. Reach out and take one."
        />

        <div className="relative mx-auto mt-16 w-full max-w-6xl">
          {/* Moon glow behind canopy */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-8 -z-10 h-64 w-64 -translate-x-1/2 rounded-full opacity-60 blur-3xl animate-pulse-glow"
            style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--thunder) 60%, transparent), transparent 70%)" }}
          />
          <TreeSVG />
        </div>
      </div>
    </section>
  );
}

function TreeSVG() {
  return (
    <svg
      viewBox="0 0 1000 900"
      className="mx-auto block h-auto w-full max-w-5xl"
      aria-label="Wither tree of services"
    >
      <defs>
        <linearGradient id="barkGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.18 0.03 280)" />
          <stop offset="100%" stopColor="oklch(0.05 0.02 270)" />
        </linearGradient>
        <radialGradient id="fruitGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="var(--electric)" stopOpacity="0.9" />
          <stop offset="60%" stopColor="var(--electric)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="var(--electric)" stopOpacity="0" />
        </radialGradient>
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ground mist */}
      <ellipse cx="500" cy="820" rx="420" ry="26" fill="url(#fruitGlow)" opacity="0.35" />

      {/* Roots */}
      <g stroke="url(#barkGrad)" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.9">
        <path d="M500 800 C 420 820, 340 810, 240 830" />
        <path d="M500 800 C 580 820, 660 810, 760 830" />
        <path d="M500 800 C 470 830, 430 850, 380 870" />
        <path d="M500 800 C 530 830, 570 850, 620 870" />
      </g>

      {/* Trunk — gnarled */}
      <path
        d="M470 800 C 460 700, 490 640, 475 560 C 462 490, 510 430, 495 360 C 485 310, 520 260, 510 210"
        stroke="url(#barkGrad)"
        strokeWidth="46"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M470 800 C 460 700, 490 640, 475 560 C 462 490, 510 430, 495 360 C 485 310, 520 260, 510 210"
        stroke="oklch(0.32 0.04 285)"
        strokeWidth="2"
        fill="none"
        opacity="0.7"
      />

      {/* Branches — twisted, reaching outward */}
      <g stroke="url(#barkGrad)" fill="none" strokeLinecap="round">
        {/* left low */}
        <path d="M485 560 C 380 540, 280 480, 175 300" strokeWidth="14" />
        <path d="M300 470 C 250 450, 210 400, 180 340" strokeWidth="6" opacity="0.7" />
        {/* left mid-high */}
        <path d="M498 430 C 420 380, 360 300, 330 205" strokeWidth="12" />
        {/* top center */}
        <path d="M510 300 C 505 250, 500 200, 500 155" strokeWidth="12" />
        <path d="M510 300 C 540 260, 560 220, 560 180" strokeWidth="5" opacity="0.6" />
        {/* right mid-high */}
        <path d="M512 380 C 580 330, 640 280, 670 210" strokeWidth="12" />
        {/* right low */}
        <path d="M500 560 C 620 540, 720 480, 825 300" strokeWidth="14" />
        <path d="M700 470 C 750 450, 790 400, 820 340" strokeWidth="6" opacity="0.7" />
        {/* center droop */}
        <path d="M485 500 C 490 450, 495 420, 500 360" strokeWidth="10" opacity="0.85" />

        {/* creepy twigs */}
        <path d="M175 300 L 130 240" strokeWidth="3" opacity="0.7" />
        <path d="M175 300 L 145 350" strokeWidth="3" opacity="0.7" />
        <path d="M330 205 L 300 150" strokeWidth="3" opacity="0.7" />
        <path d="M500 155 L 460 105" strokeWidth="3" opacity="0.7" />
        <path d="M500 155 L 545 105" strokeWidth="3" opacity="0.7" />
        <path d="M670 210 L 705 150" strokeWidth="3" opacity="0.7" />
        <path d="M825 300 L 870 240" strokeWidth="3" opacity="0.7" />
        <path d="M825 300 L 855 355" strokeWidth="3" opacity="0.7" />
      </g>

      {/* Crows */}
      <g fill="oklch(0.08 0.02 270)" opacity="0.85">
        <path d="M140 245 q 6 -6 12 0 q 6 -6 12 0 q -6 4 -12 4 q -6 0 -12 -4z" />
        <path d="M545 100 q 6 -6 12 0 q 6 -6 12 0 q -6 4 -12 4 q -6 0 -12 -4z" />
        <path d="M865 240 q 6 -6 12 0 q 6 -6 12 0 q -6 4 -12 4 q -6 0 -12 -4z" />
      </g>

      {/* Hanging services */}
      {services.map((s, i) => (
        <HangingService key={s.title} {...s} index={i} />
      ))}
    </svg>
  );
}

function HangingService({
  title,
  anchor,
  ropeLen,
  index,
}: {
  title: string;
  anchor: [number, number];
  ropeLen: number;
  index: number;
}) {
  const [ax, ay] = anchor;
  const cy = ay + ropeLen;
  const textW = Math.min(240, Math.max(140, title.length * 10));
  const textH = 40;

  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 + index * 0.12, duration: 0.6 }}
      style={{ transformOrigin: `${ax}px ${ay}px` }}
    >
      <motion.g
        animate={{ rotate: [-2.2, 2.2, -2.2] }}
        transition={{ duration: 5 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: `${ax}px ${ay}px` }}
      >
        {/* Rope */}
        <line
          x1={ax}
          y1={ay}
          x2={ax}
          y2={cy - 4}
          stroke="oklch(0.35 0.02 60)"
          strokeWidth="1.5"
          strokeDasharray="3 2"
          opacity="0.75"
        />
        {/* Glow orb behind label */}
        <circle cx={ax} cy={cy + textH / 2} r={textW * 0.5} fill="url(#fruitGlow)" opacity="0.12" />
        {/* Label plaque */}
        <g filter="url(#softGlow)">
          <rect
            x={ax - textW / 2}
            y={cy}
            width={textW}
            height={textH}
            rx="20"
            fill="color-mix(in oklab, var(--foreground) 20%, var(--background) 80%)"
            stroke="color-mix(in oklab, var(--electric) 70%, transparent)"
            strokeWidth="1.2"
          />
          <text
            x={ax}
            y={cy + textH / 2 + 4}
            textAnchor="middle"
            fill="var(--foreground)"
            fontFamily="var(--font-sub)"
            fontSize="13"
            letterSpacing="1.5"
            style={{ textTransform: "uppercase" }}
          >
            {title}
          </text>
        </g>
        {/* Anchor knot */}
        <circle cx={ax} cy={ay} r="3" fill="oklch(0.2 0.03 280)" />
      </motion.g>
    </motion.g>
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