"use client";

import { CodingProfileCard } from "@/components/sections/coding-profile-card";
import type { ProfileLink } from "@/lib/content";

type ProfilesGridProps = {
  profiles: ProfileLink[];
  githubHandle: string;
  githubContributions: number | null;
};

export function ProfilesGrid({
  profiles,
  githubHandle,
  githubContributions,
}: ProfilesGridProps) {
  return (
    <div className="section-body-gap grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {profiles.map((profile) => (
        <CodingProfileCard
          key={profile.name}
          profile={profile}
          githubHandle={githubHandle}
          githubContributions={profile.icon === "github" ? githubContributions : null}
        />
      ))}
    </div>
  );
}
