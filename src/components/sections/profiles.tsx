import { MotionReveal } from "@/components/motion-reveal";
import { ProfilesGrid } from "@/components/sections/profiles-grid";
import { SectionHeading } from "@/components/section-heading";
import { githubUsername, profiles } from "@/lib/content";
import { getGitHubContributions } from "@/lib/github";

export async function Profiles() {
  const githubContributions = await getGitHubContributions();

  return (
    <section
      id="profiles"
      className="section-y relative z-10 scroll-mt-24 border-t border-white/[0.06] bg-[var(--bg-deep)] px-4 sm:px-6"
    >
      <div className="mx-auto max-w-7xl">
        <MotionReveal>
          <SectionHeading
            eyebrow="Presence"
            title="My coding profiles"
            className="[&_h2]:text-balance"
          />
        </MotionReveal>

        <ProfilesGrid
          profiles={profiles}
          githubHandle={githubUsername}
          githubContributions={githubContributions?.totalLastYear ?? null}
        />
      </div>
    </section>
  );
}
