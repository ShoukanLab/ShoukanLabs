import { useState } from "react";
import { motion } from "motion/react";
import { Zap, Mail, Linkedin, Github, Check } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SectionHeader } from "./services";
import { SummoningCircle } from "../arcane/summoning-circle";

const services = [
  "Custom Software Development",
  "Website Refinement",
  "Cloud Infrastructure & Security",
  "Penetration Testing",
  "Security Auditing",
  "API & Systems Integration",
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [form, setForm] = useState({ name: "", email: "", service: services[0], message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("done"), 1400);
  };

  const fieldCls =
    "w-full rounded-lg border border-border bg-background/40 px-4 py-3 text-sm backdrop-blur transition-all focus:border-[color:var(--electric)] focus:outline-none focus:ring-2 focus:ring-[color:var(--electric)]/30";
  const selectTriggerCls = `${fieldCls} h-auto`;
  const selectContentCls = "rounded-xl border border-border bg-background/95 text-foreground shadow-[var(--shadow-arcane-card)] backdrop-blur";

  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30 text-[color:var(--electric)]">
        <SummoningCircle className="h-[800px] w-[800px]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="relative mx-auto max-w-3xl px-6">
        <SectionHeader eyebrow="Begin the Ritual" title="Summon the Team" subtitle="Ready to conjure something extraordinary? Let's talk." />

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="arcane-card mt-12 space-y-5 rounded-2xl p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="font-sub mb-2 block text-xs uppercase tracking-widest text-foreground/60">Name</label>
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={fieldCls} placeholder="Your true name" />
            </div>
            <div>
              <label className="font-sub mb-2 block text-xs uppercase tracking-widest text-foreground/60">Email</label>
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={fieldCls} placeholder="you@realm.com" />
            </div>
          </div>
          <div>
            <label className="font-sub mb-2 block text-xs uppercase tracking-widest text-foreground/60">Service</label>
            <Select value={form.service} onValueChange={(value) => setForm({ ...form, service: value })}>
              <SelectTrigger className={selectTriggerCls}>
                <SelectValue placeholder="Choose a service" />
              </SelectTrigger>
              <SelectContent className={selectContentCls}>
                {services.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="font-sub mb-2 block text-xs uppercase tracking-widest text-foreground/60">Message</label>
            <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={fieldCls} placeholder="Speak your intent..." />
          </div>
          <button
            type="submit"
            disabled={status !== "idle"}
            className="font-sub group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full px-8 py-4 text-xs uppercase tracking-[0.3em] text-[color:var(--primary-foreground)] transition-all hover:scale-[1.02] disabled:cursor-not-allowed"
            style={{ background: "var(--gradient-arcane)", boxShadow: "var(--shadow-glow-electric)" }}
          >
            {status === "idle" && (<><Zap className="h-4 w-4" /> Cast the Signal</>)}
            {status === "sending" && (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-[color:var(--primary-foreground)] border-t-transparent" />
                Casting...
              </>
            )}
            {status === "done" && (<><Check className="h-4 w-4" /> Signal Received</>)}
          </button>
        </motion.form>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-foreground/60">
          <a href="mailto:yarkhan025@gmail.com" className="inline-flex items-center gap-2 hover:text-[color:var(--electric)]"><Mail className="h-4 w-4" /> yarkhan025@gmail.com</a>
          <a href="#" className="inline-flex items-center gap-2 hover:text-[color:var(--electric)]"><Linkedin className="h-4 w-4" /> LinkedIn</a>
          <a href="#" className="inline-flex items-center gap-2 hover:text-[color:var(--electric)]"><Github className="h-4 w-4" /> GitHub</a>
        </div>
      </div>
    </section>
  );
}