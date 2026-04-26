import { MotionReveal } from "@/components/motion-reveal";
import { ProjectCard } from "@/components/sections/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/content";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const ordered = [...featured, ...rest];

  return (
    <section id="projects" className="relative z-10 scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <MotionReveal>
          <SectionHeading
            eyebrow="Selected work"
            title="Projects"
            subtitle="End-to-end builds where UX, APIs, and data come together — swap in your real case studies."
          />
        </MotionReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
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
