import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Profiles } from "@/components/sections/profiles";
import { Projects } from "@/components/sections/projects";
import { Signature } from "@/components/sections/signature";
import { Testimonials } from "@/components/sections/testimonials";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="relative z-10 flex flex-1 flex-col">
        <Hero />
        <About />
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
