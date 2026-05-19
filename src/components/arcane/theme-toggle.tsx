import { Moon, Sun } from "lucide-react";
import { useTheme } from "../theme-provider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--electric)]/30 bg-background/40 backdrop-blur transition-all hover:border-[color:var(--electric)] hover:shadow-[var(--shadow-glow-electric)]"
    >
      <span className="absolute inset-0 rounded-full opacity-0 transition-opacity hover:opacity-100" style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--electric) 30%, transparent), transparent 70%)" }} />
      {theme === "dark" ? (
        <Sun className="h-4 w-4 text-[color:var(--thunder)]" />
      ) : (
        <Moon className="h-4 w-4 text-[color:var(--electric)]" />
      )}
    </button>
  );
}