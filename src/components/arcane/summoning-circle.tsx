export function SummoningCircle({ className = "", size = 600 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 600 600"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
      aria-hidden
    >
      <g className="animate-spin-slow" style={{ transformOrigin: "300px 300px" }}>
        <circle cx="300" cy="300" r="280" opacity="0.4" />
        <circle cx="300" cy="300" r="280" strokeDasharray="4 12" opacity="0.6" />
        {/* Outer runes */}
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2;
          const x = 300 + Math.cos(a) * 280;
          const y = 300 + Math.sin(a) * 280;
          return <circle key={i} cx={x} cy={y} r="6" fill="currentColor" opacity="0.6" />;
        })}
      </g>
      <g className="animate-spin-reverse" style={{ transformOrigin: "300px 300px" }}>
        <circle cx="300" cy="300" r="220" opacity="0.5" />
        <circle cx="300" cy="300" r="200" strokeDasharray="2 10" />
        <polygon points="300,120 459,390 141,390" opacity="0.5" />
        <polygon points="300,480 141,210 459,210" opacity="0.5" />
      </g>
      <g className="animate-spin-slow" style={{ transformOrigin: "300px 300px", animationDuration: "20s" }}>
        <circle cx="300" cy="300" r="140" opacity="0.7" />
        <circle cx="300" cy="300" r="110" strokeDasharray="6 4" />
        {Array.from({ length: 6 }).map((_, i) => {
          const a = (i / 6) * Math.PI * 2;
          const x = 300 + Math.cos(a) * 140;
          const y = 300 + Math.sin(a) * 140;
          return <circle key={i} cx={x} cy={y} r="10" fill="none" />;
        })}
      </g>
      <circle cx="300" cy="300" r="60" opacity="0.8" />
      <circle cx="300" cy="300" r="30" fill="currentColor" opacity="0.15" />
    </svg>
  );
}