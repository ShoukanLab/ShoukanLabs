export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: "Software" | "Security" | "Cloud" | "Integration" | "Transportation" | "Web Design";
  year: number;
  status: "Live" | "Ongoing" | "Archived";
  summary: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  link?: string;
  repo?: string;
  accent: "electric" | "thunder" | "arcane" | "crimson" | "lime" | "chrome" | "gold";
  sigil: string; // short glyph/word
};

export const projects: Project[] = [
  {
    slug: "mahir-learning",
    name: "Mahir Learning",
    tagline: "Learning management platform for schools and academies.",
    category: "Software",
    year: 2026,
    status: "Live",
    summary:
      "Full-stack LMS with separate admin and student portals — course and lesson authoring, drag-and-drop topic ordering, auto-graded MCQ and manually graded written quizzes, assignments, attendance, and secure course-material delivery.",
    metrics: [
      { label: "Students", value: "100+" },
      { label: "Batches", value: "3" },
      { label: "P99 latency", value: "38ms" },
      { label: "Uptime", value: "99.99%" },
    ],
    stack: ["Go", "Redis", "Postgres", "React"],
    link: "https://www.mahircodelab.com",
    accent: "electric",
    sigil: "ML",
  },
  {
    slug: "zentra-rides",
    name: "ZentraRides",
    tagline: "On-demand luxury chauffeur and rental service for the Greater Toronto Area.",
    category: "Transportation",
    year: 2026,
    status: "Live",
    summary:
      "Booking platform for a premium chauffeur fleet — hourly, airport, half/full-day, wedding, and corporate hire, with live location picking, transparent tiered pricing, and a booking form flow with QR confirmation.",
    metrics: [
      { label: "Service lines", value: "7" },
      { label: "Starting rate", value: "$60/hr" },
      { label: "Corporate onboarding", value: "48 hrs" },
      { label: "Coverage", value: "Greater Toronto Area" },
    ],
    stack: ["React", "Booking Form"],
    link: "https://www.zentrarides.ca",
    accent: "lime",
    sigil: "ZR",
  },
  {
    slug: "raah-production",
    name: "Raah Production",
    tagline: "Live music and concert production with direct on-site show discovery.",
    category: "Web Design",
    year: 2026,
    status: "Live",
    summary:
      "Full-stack Next.js 14 site for a live music and concert production company — Sanity-powered show listings, lineup and poster pages, a staff dashboard with route-protected auth, and external ticket-platform linking, built on a dark-luxury design system with a bespoke gold/champagne visual identity.",
    metrics: [
      { label: "Shows Listed", value: "12+" },
      { label: "Lighthouse Score", value: "97/100" },
      { label: "Avg. Load Time", value: "0.9s" },
      { label: "Uptime", value: "99.95%" },
    ],
    stack: ["Next.js", "Sanity", "Supabase", "Vercel"],
    link: "https://raahproduction.ca",
    accent: "gold",
    sigil: "RP",
  },
  {
    slug: "detailing-hub",
    name: "Detailing Hub",
    tagline: "Booking-to-billing platform for a car detailing business in Pakistan.",
    category: "Software",
    year: 2025,
    status: "Live",
    summary:
      "Full-stack workshop management system with two decoupled REST APIs — customer-facing booking/status tracking and an admin service for inventory, staff, and payroll — behind role-scoped JWT auth with HTTPOnly cookies. Deployed on AWS EC2 with automated GitHub Actions CI/CD and CloudFront-backed static delivery.",
    metrics: [
      { label: "Downtime reduction", value: "~70%" },
      { label: "Asset load (global)", value: "<200ms" },
      { label: "Users", value: "500+" },
      { label: "Data models", value: "19" },
    ],
    stack: ["Django", "React", "PostgreSQL", "AWS EC2"],
    link: "https://detailinghubpk.com",
    accent: "chrome",
    sigil: "DH",
  },
];

export const accentVar: Record<Project["accent"], string> = {
  electric: "var(--electric)",
  thunder: "var(--thunder)",
  arcane: "var(--arcane)",
  crimson: "var(--crimson)",
  lime: "var(--lime)",
  chrome: "var(--chrome)",
  gold: "var(--gold)",
};