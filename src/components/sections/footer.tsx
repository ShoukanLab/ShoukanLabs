import { ArrowUp } from "lucide-react";
import { Logo } from "../arcane/logo";

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 bg-card/30 pt-20 pb-10 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-foreground/60">Summoning Digital Excellence.</p>
          </div>
          <div>
            <h4 className="font-sub mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--thunder)]">Quick Links</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              {["Home", "Services", "Process", "Security", "Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-[color:var(--electric)]">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-sub mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--thunder)]">Services</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              {["Custom Software", "Website Refinement", "Cloud Security", "Pentesting", "Auditing"].map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-sub mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--thunder)]">Connect</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>contact@shoukan-labs.com</li>
              <li>LinkedIn</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 text-xs text-foreground/50 md:flex-row">
          <p>© {new Date().getFullYear()} Shoukan Labs. All sigils reserved.</p>
          <p>Built with <span className="text-[color:var(--thunder)]">⚡</span> by Shoukan Labs</p>
        </div>
      </div>
      <a
        href="#home"
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--electric)]/40 bg-background/60 backdrop-blur transition-all hover:scale-110 hover:shadow-[var(--shadow-glow-electric)]"
      >
        <ArrowUp className="h-4 w-4 text-[color:var(--electric)]" />
      </a>
    </footer>
  );
}