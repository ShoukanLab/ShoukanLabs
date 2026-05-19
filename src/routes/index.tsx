import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/theme-provider";
import { ArcaneCursor } from "@/components/arcane/cursor";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Services } from "@/components/sections/services";
import { Stats } from "@/components/sections/stats";
import { Process } from "@/components/sections/process";
import { Security } from "@/components/sections/security";
import { Testimonials } from "@/components/sections/testimonials";
import { TechStack } from "@/components/sections/tech-stack";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shoukan Labs — We Summon Digital Power" },
      { name: "description", content: "Premium software, cloud security, and penetration testing. Shoukan Labs forges secure, lightning-fast digital systems for ambitious teams." },
      { property: "og:title", content: "Shoukan Labs — We Summon Digital Power" },
      { property: "og:description", content: "Custom software, cloud hardening, and offensive security — conjured with precision." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <ArcaneCursor />
      <Navbar />
      <main className="relative overflow-x-clip">
        <Hero />
        <Marquee />
        <Services />
        <Stats />
        <Process />
        <Security />
        <Testimonials />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
