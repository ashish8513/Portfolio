import { githubUsername } from "@/lib/content";

const CONTRIBUTIONS_API = "https://github-contributions-api.jogruber.de/v4";
const GITHUB_USER_API = "https://api.github.com/users";

export type GitHubActivity = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

export type GitHubContributions = {
  totalLastYear: number;
  contributions: GitHubActivity[];
};

export type GitHubUser = {
  login: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  avatar_url: string;
  bio: string | null;
};

async function fetchJson<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 },
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

type ContributionsApiResponse = {
  total?: { lastYear?: number };
  contributions?: GitHubActivity[];
};

export async function getGitHubContributions(
  username: string = githubUsername,
): Promise<GitHubContributions | null> {
  const data = await fetchJson<ContributionsApiResponse>(
    `${CONTRIBUTIONS_API}/${username}?y=last`,
  );
  if (!data?.contributions?.length) return null;

  return {
    totalLastYear: data.total?.lastYear ?? 0,
    contributions: data.contributions,
  };
}

export async function getGitHubUser(
  username: string = githubUsername,
): Promise<GitHubUser | null> {
  return fetchJson<GitHubUser>(`${GITHUB_USER_API}/${username}`);
}
