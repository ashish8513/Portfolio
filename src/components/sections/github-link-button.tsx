"use client";

import { githubUsername } from "@/lib/content";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

const githubProfileUrl = `https://github.com/${githubUsername}`;

type Props = {
  className?: string;
};

export function GitHubLinkButton({ className }: Props) {
  return (
    <Link
      href={githubProfileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex w-full max-w-full shrink-0 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-medium text-zinc-200 transition-all duration-300 hover:border-[var(--github-l3)]/45 hover:bg-[var(--github-l1)]/40 hover:text-white sm:w-auto sm:justify-start sm:gap-2.5 sm:px-4 sm:py-2.5 sm:hover:scale-[1.05] sm:hover:shadow-[0_0_28px_-6px_var(--github-glow)] sm:active:scale-[0.98] md:text-base",
        className,
      )}
      aria-label={`Open @${githubUsername} on GitHub`}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-b from-[var(--github-accent-bright)] to-[var(--github-accent)] text-white shadow-[0_0_18px_-4px_var(--github-glow)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 sm:h-9 sm:w-9">
        <Github className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
      </span>
      <span>@{githubUsername}</span>
      <ArrowUpRight className="h-4 w-4 text-[var(--github-l3)] opacity-60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 sm:h-[18px] sm:w-[18px]" />
    </Link>
  );
}
