import { about, site } from "@/lib/content";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { AboutAccordion } from "@/components/sections/about-accordion";
import * as Separator from "@radix-ui/react-separator";

export function About() {
  return (
    <section id="about" className="relative z-10 scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <MotionReveal>
          <SectionHeading
            eyebrow="Story"
            title="About me"
            subtitle="A short journey through building products, leveling up, and staying curious."
          />
        </MotionReveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <MotionReveal className="space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8">
              <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                {about.intro}
              </p>
              <Separator.Root className="my-6 h-px w-full bg-white/10" />
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-indigo-200/90">
                Core stack
              </p>
              <ul className="space-y-2 text-sm text-zinc-400">
                {about.highlights.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-indigo-400 to-sky-400" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-zinc-500">{site.location}</p>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.08} className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Learn from my experience
            </h3>
            <p className="text-sm text-zinc-500">
              Lessons and mistakes that shaped how I build today.
            </p>
            <AboutAccordion />
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
