export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-8 w-8" aria-hidden>
        <defs>
          <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--electric)" />
            <stop offset="100%" stopColor="var(--thunder)" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="18" fill="none" stroke="url(#logo-g)" strokeWidth="1.2" />
        <circle cx="20" cy="20" r="14" fill="none" stroke="url(#logo-g)" strokeWidth="0.6" strokeDasharray="2 3" />
        <path d="M14 14 Q20 10 26 14 Q28 20 22 22 Q14 24 14 26 Q20 30 26 26" fill="none" stroke="url(#logo-g)" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="font-display text-sm tracking-[0.25em]">SHOUKAN LABS</span>
    </span>
  );
}