import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Profiles } from "@/components/sections/profiles";
import { Projects } from "@/components/sections/projects";
import { SkillsShowcase } from "@/components/sections/skills-showcase";
import { Signature } from "@/components/sections/signature";
import { Testimonials } from "@/components/sections/testimonials";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        tabIndex={-1}
        className="relative z-10 flex flex-1 flex-col outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-deep)]"
      >
        <Hero />
        <About />
        <SkillsShowcase />
        <Experience />
        <Signature />
        <Projects />
        <Profiles />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
