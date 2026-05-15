import { GitHubContributions } from "@/components/sections/github-contributions";
import { GitHubLinkButton } from "@/components/sections/github-link-button";
import { MotionReveal } from "@/components/motion-reveal";

export function Testimonials() {
  return (
    <section
      id="github"
      className="section-y relative z-10 scroll-mt-24 overflow-x-hidden border-t border-white/[0.06] bg-[var(--bg-deep)] px-4 sm:px-6"
    >
      <div className="mx-auto max-w-7xl min-w-0">
        <MotionReveal>
          <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-6">
            <div className="min-w-0 flex-1">
              <span className="inline-flex rounded-full border border-[var(--github-l2)]/30 bg-[var(--github-l1)]/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--github-l3)] sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.18em]">
                Open source
              </span>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:mt-4 sm:text-3xl md:text-4xl md:leading-tight">
                GitHub Contributions
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-500 sm:mt-4 sm:text-base">
                Live activity from @ashish8513 — tap the profile pill to explore repos on GitHub.
              </p>
            </div>
            <GitHubLinkButton className="w-full justify-center sm:mb-1 sm:w-auto sm:shrink-0" />
          </div>
        </MotionReveal>

        <MotionReveal className="section-body-gap min-w-0">
          <GitHubContributions showHeader={false} />
        </MotionReveal>
      </div>
    </section>
  );
}
