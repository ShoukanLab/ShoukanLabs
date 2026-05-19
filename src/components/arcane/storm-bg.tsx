export function StormBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Storm gradient */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-storm)" }}
      />
      {/* Hex grid */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.08]" aria-hidden>
        <defs>
          <pattern id="hex-grid" width="40" height="46" patternUnits="userSpaceOnUse">
            <path
              d="M20 0 L40 11.5 L40 34.5 L20 46 L0 34.5 L0 11.5 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-grid)" />
      </svg>
      {/* Floating orbs */}
      <div
        className="absolute left-[10%] top-[20%] h-64 w-64 rounded-full opacity-30 animate-float-orb"
        style={{
          background: "radial-gradient(circle, var(--electric), transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute right-[15%] top-[40%] h-72 w-72 rounded-full opacity-25 animate-float-orb"
        style={{
          background: "radial-gradient(circle, var(--thunder), transparent 70%)",
          filter: "blur(50px)",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute bottom-[10%] left-[40%] h-80 w-80 rounded-full opacity-20 animate-float-orb"
        style={{
          background: "radial-gradient(circle, var(--arcane), transparent 70%)",
          filter: "blur(60px)",
          animationDelay: "4s",
        }}
      />
      {/* Lightning flash overlay */}
      <div
        className="absolute inset-0 animate-lightning"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--electric) 40%, transparent), transparent 50%)",
        }}
      />
    </div>
  );
}