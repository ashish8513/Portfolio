"use client";

import { ProfileCompareSlider } from "@/components/sections/profile-compare-slider";
import { ProfilePlatformPreview } from "@/components/sections/profile-platform-preview";
import type { ProfileLink } from "@/lib/content";
import Link from "next/link";

type CodingProfileCardProps = {
  profile: ProfileLink;
  githubHandle?: string;
  githubContributions?: number | null;
};

export function CodingProfileCard({
  profile,
  githubHandle,
  githubContributions,
}: CodingProfileCardProps) {
  const isGitHub = profile.icon === "github";
  const handle = isGitHub ? githubHandle : undefined;

  let highlight = profile.highlight;
  if (isGitHub && githubContributions != null) {
    highlight = `${githubContributions.toLocaleString()} contributions in the last year on GitHub.`;
  }

  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/[0.09] bg-[#08080c] p-4 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.8)] sm:p-5">
      <ProfileCompareSlider
        image={profile.image}
        platform={profile.image ? profile.icon : undefined}
        before={
          <ProfilePlatformPreview platform={profile.icon} layer="before" handle={handle} />
        }
        after={
          <ProfilePlatformPreview platform={profile.icon} layer="after" handle={handle} />
        }
        beforeImage={profile.beforeImage}
        afterImage={profile.afterImage}
      />

      <p className="mt-4 text-center text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
        {highlight}
      </p>

      <Link
        href={profile.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white transition hover:border-[var(--accent-primary)]/40 hover:bg-[var(--accent-primary)]/10"
      >
        Visit {profile.name}
      </Link>
    </article>
  );
}
