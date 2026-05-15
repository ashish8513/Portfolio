import { MotionReveal } from "@/components/motion-reveal";
import { ProjectCard } from "@/components/sections/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/content";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const ordered = [...featured, ...rest];

  return (
    <section
      id="projects"
      className="section-y relative z-10 scroll-mt-24 border-t border-white/[0.06] bg-[var(--bg-deep)] px-4 sm:px-6"
    >
      <div className="mx-auto max-w-7xl">
        <MotionReveal>
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected projects that shipped end-to-end"
            subtitle="Dashboards, mobile apps, and APIs — replace placeholders with your real launches."
          />
        </MotionReveal>

        <div className="section-body-gap grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {ordered.map((project) => (
            <MotionReveal key={project.title}>
              <ProjectCard project={project} />
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
