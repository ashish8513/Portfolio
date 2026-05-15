import { GitHubContributionsCalendar } from "@/components/sections/github-contributions-calendar";
import { getGitHubContributions } from "@/lib/github";

type Props = {
  showHeader?: boolean;
};

export async function GitHubContributions({ showHeader = true }: Props) {
  const contributions = await getGitHubContributions();

  if (!contributions) {
    return (
      <div className="w-full">
        {showHeader ? (
          <h3 className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
            GitHub Contributions
          </h3>
        ) : null}
        <p className={`text-base text-zinc-500 sm:text-lg ${showHeader ? "mt-4" : ""}`}>
          Activity could not be loaded.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {showHeader ? (
        <h3 className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
          GitHub Contributions
        </h3>
      ) : null}

      <div className={showHeader ? "mt-8 sm:mt-10" : ""}>
        <GitHubContributionsCalendar contributions={contributions.contributions} />
      </div>
    </div>
  );
}
