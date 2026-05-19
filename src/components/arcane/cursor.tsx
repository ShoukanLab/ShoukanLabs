import { useEffect, useState } from "react";

export function ArcaneCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = matchMedia("(pointer: coarse)").matches;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduced) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a,button,[role=button],input,textarea,select"));
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full mix-blend-screen transition-[width,height,opacity] duration-200"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
          width: hover ? 48 : 14,
          height: hover ? 48 : 14,
          background: hover
            ? "radial-gradient(circle, color-mix(in oklab, var(--electric) 40%, transparent), transparent 70%)"
            : "var(--electric)",
          border: hover ? "1px solid var(--electric)" : "none",
          boxShadow: "0 0 24px var(--electric)",
        }}
      />
    </>
  );
}