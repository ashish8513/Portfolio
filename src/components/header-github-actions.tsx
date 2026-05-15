"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";
import Link from "next/link";

type Props = {
  className?: string;
  onNavigate?: () => void;
};

/** GitHub text | icon + theme toggle — header background unchanged. */
export function HeaderGitHubActions({ className, onNavigate }: Props) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Link
        href="#github"
        onClick={onNavigate}
        className="btn-blue-glow inline-flex shrink-0 items-center gap-2 px-3 py-2 text-[11px] font-semibold sm:px-3.5 sm:text-sm"
      >
        <span>GitHub</span>
        <span className="h-3.5 w-px bg-white/40" aria-hidden />
        <Github className="h-4 w-4 shrink-0" aria-hidden />
      </Link>
      <ThemeToggle />
    </div>
  );
}
