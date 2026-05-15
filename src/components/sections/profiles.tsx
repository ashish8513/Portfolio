import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { githubUsername, profiles } from "@/lib/content";
import { getGitHubContributions, getGitHubUser } from "@/lib/github";
import { cn } from "@/lib/utils";
import { Code2, Github, Linkedin } from "lucide-react";
import Link from "next/link";

function ProfileIcon({ type }: { type: (typeof profiles)[number]["icon"] }) {
  const cls = "h-5 w-5 text-white";
  switch (type) {
    case "github":
      return <Github className={cls} aria-hidden />;
    case "leetcode":
      return <Code2 className={cls} aria-hidden />;
    case "linkedin":
      return <Linkedin className={cls} aria-hidden />;
    default:
      return null;
  }
}

export async function Profiles() {
  const [githubUser, githubContributions] = await Promise.all([
    getGitHubUser(),
    getGitHubContributions(),
  ]);

  return (
    <section
      id="profiles"
      className="section-y relative z-10 scroll-mt-24 border-t border-white/[0.06] bg-[var(--bg-deep)] px-4 sm:px-6"
    >
      <div className="mx-auto max-w-7xl">
        <MotionReveal>
          <SectionHeading
            eyebrow="Presence"
            title="Coding profiles"
            subtitle="Where I share code, practice, and connect — GitHub stats update live from your profile."
          />
        </MotionReveal>

        <div className="section-body-gap grid gap-4 md:grid-cols-3">
          {profiles.map((p) => {
            const isGitHub = p.icon === "github";
            const statLabel =
              isGitHub && githubContributions
                ? "Contributions (1y)"
                : isGitHub && githubUser
                  ? "Repositories"
                  : p.statLabel;
            const statValue =
              isGitHub && githubContributions
                ? String(githubContributions.totalLastYear)
                : isGitHub && githubUser
                  ? String(githubUser.public_repos)
                  : p.statValue;

            return (
              <MotionReveal key={p.name}>
                <Link
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-profile-card
                  className={cn(
                    "card-landin flex h-full flex-col rounded-2xl p-6 transition hover:bg-[color-mix(in_oklab,var(--bg-elevated)_95%,transparent)]",
                    isGitHub
                      ? "hover:border-[var(--github-l3)]/35"
                      : "hover:border-[var(--accent-indigo)]/35",
                  )}
                >
                  <div
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-xl shadow-lg",
                      isGitHub
                        ? "bg-gradient-to-br from-[var(--github-accent-bright)] to-[var(--github-accent)] shadow-[var(--github-glow)]"
                        : "bg-gradient-to-br from-[var(--accent-indigo)] to-[var(--accent-purple)] shadow-[var(--accent-indigo)]/25",
                    )}
                  >
                    <ProfileIcon type={p.icon} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                    {isGitHub ? `@${githubUsername} · projects and experiments.` : p.description}
                  </p>
                  <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                      {statLabel}
                    </p>
                    <p className="text-xl font-semibold tabular-nums text-white">{statValue}</p>
                  </div>
                </Link>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
