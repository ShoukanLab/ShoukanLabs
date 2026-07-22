import { useEffect, useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Logo } from "../arcane/logo";
import { ThemeToggle } from "../arcane/theme-toggle";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "/projects", label: "Works" },
  { href: "#process", label: "Process" },
  { href: "#security", label: "Security" },
  { href: "#testimonials", label: "Voices" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-6 ${scrolled ? "" : ""}`}>
        <nav
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all ${
            scrolled ? "glass" : ""
          }`}
        >
          <a href="#home"><Logo /></a>
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-sub relative text-xs uppercase text-foreground/70 transition-colors hover:text-foreground"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-[color:var(--electric)] transition-all duration-300 group-hover:w-full hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <a
              href="#contact"
              className="font-sub inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs uppercase tracking-widest text-[color:var(--primary-foreground)] transition-all hover:scale-105"
              style={{
                background: "var(--gradient-arcane)",
                boxShadow: "var(--shadow-glow-electric)",
              }}
            >
              <Zap className="h-3.5 w-3.5" /> Summon Us
            </a>
          </div>
          <button
            className="md:hidden"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </nav>
      </div>
      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 top-0 z-40 flex flex-col items-center justify-center gap-8 bg-background/95 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-2xl tracking-widest"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="font-sub rounded-full px-6 py-3 text-xs uppercase tracking-widest text-[color:var(--primary-foreground)]"
              style={{ background: "var(--gradient-arcane)" }}
            >
              Summon Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}