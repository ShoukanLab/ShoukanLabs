const items = [
  "React", "Next.js", "Node.js", "TypeScript", "Python", "AWS", "Docker", "Kubernetes",
  "Linux", "PostgreSQL", "Burp Suite", "OWASP", "Metasploit", "Terraform",
];

function Divider() {
  return (
    <div className="flex items-center gap-3 text-[color:var(--electric)]/40">
      <span className="h-px w-12 bg-current" />
      <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden>
        <polygon points="7,0 14,7 7,14 0,7" />
      </svg>
      <span className="h-px w-12 bg-current" />
    </div>
  );
}

export function Marquee() {
  const row = [...items, ...items];
  return (
    <section className="relative border-y border-border/40 bg-card/30 py-10 backdrop-blur">
      <div className="mb-6 flex justify-center"><Divider /></div>
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee gap-16 px-8">
          {row.map((t, i) => (
            <span
              key={i}
              className="font-sub whitespace-nowrap text-2xl uppercase tracking-[0.2em] text-foreground/40 transition-colors hover:text-[color:var(--electric)]"
              style={{ textShadow: "0 0 24px color-mix(in oklab, var(--electric) 30%, transparent)" }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-center"><Divider /></div>
    </section>
  );
}