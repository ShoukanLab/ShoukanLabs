import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/theme-provider";
import { ArcaneCursor } from "@/components/arcane/cursor";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Services } from "@/components/sections/services";
import { Projects } from "@/components/sections/projects";
import { Stats } from "@/components/sections/stats";
import { Process } from "@/components/sections/process";
import { Security } from "@/components/sections/security";
import { Testimonials } from "@/components/sections/testimonials";
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
      { property: "og:url", content: "https://shoukan-labs.com/" },
      { property: "og:site_name", content: "Shoukan Labs" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Shoukan Labs — We Summon Digital Power" },
      { name: "twitter:description", content: "Custom software, cloud hardening, and offensive security — conjured with precision." },
    ],
    links: [
      { rel: "canonical", href: "https://shoukan-labs.com/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Shoukan Labs",
          url: "https://shoukan-labs.com/",
          description: "Custom software, cloud hardening, and offensive security — conjured with precision.",
          email: "hello@shoukanlabs.com",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Shoukan Labs",
          url: "https://shoukan-labs.com/",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Custom Software Development",
          provider: { "@type": "Organization", name: "Shoukan Labs" },
          areaServed: "Worldwide",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Penetration Testing",
          provider: { "@type": "Organization", name: "Shoukan Labs" },
          areaServed: "Worldwide",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Cloud Security",
          provider: { "@type": "Organization", name: "Shoukan Labs" },
          areaServed: "Worldwide",
        }),
      },
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
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
