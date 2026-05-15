import { GitHubContributions } from "./github-contributions";
import { GitHubSectionHeader } from "./github-section-header";

export async function Testimonials() {
  return (
    <section
      id="github"
      className="section-y relative z-10 scroll-mt-24 overflow-x-hidden border-t border-white/[0.06] bg-[var(--bg-deep)] px-4 sm:px-6"
    >
      <div className="mx-auto max-w-7xl min-w-0">
        <GitHubSectionHeader />

        <div className="section-body-gap min-w-0">
          <GitHubContributions showHeader={false} />
        </div>
      </div>
    </section>
  );
}
