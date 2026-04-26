import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/content";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 scroll-mt-24 px-4 py-24 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <MotionReveal>
          <SectionHeading
            eyebrow="Career"
            title="My work experience"
            subtitle="Timeline of roles — replace copy in src/lib/content.ts with your real history."
          />
        </MotionReveal>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div
            className="absolute left-[11px] top-2 bottom-4 w-px bg-gradient-to-b from-white/30 via-white/10 to-transparent md:left-[199px]"
            aria-hidden
          />

          <ol className="space-y-12">
            {experience.map((job) => (
              <MotionReveal key={`${job.period}-${job.title}`}>
                <li className="relative grid gap-4 md:grid-cols-[180px_1fr] md:gap-10">
                  <div className="flex gap-4 md:block md:pt-1">
                    <span
                      className="relative z-10 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-indigo-400/40 bg-[#030712]"
                      aria-hidden
                    >
                      <span className="h-2 w-2 rounded-full bg-indigo-300 shadow-[0_0_12px_rgba(129,140,248,0.8)]" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold tracking-tight text-zinc-300 md:text-right">
                        {job.period}
                      </p>
                      {job.badge ? (
                        <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-indigo-200/80 md:text-right">
                          {job.badge}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <article className="glass-panel rounded-2xl p-5 sm:p-6 md:-mt-1">
                    <h3 className="text-base font-semibold text-white">
                      {job.title}
                      <span className="font-normal text-zinc-500"> — </span>
                      <span className="text-indigo-200/90">{job.company}</span>
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                      {job.description}
                    </p>
                  </article>
                </li>
              </MotionReveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
