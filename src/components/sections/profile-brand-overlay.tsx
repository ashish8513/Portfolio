"use client";

import { cn } from "@/lib/utils";
import type { ProfileLink } from "@/lib/content";
import type { IconType } from "react-icons";
import { SiGeeksforgeeks, SiGithub, SiLeetcode } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

type Platform = ProfileLink["icon"];

const brandConfig: Record<
  Platform,
  { Icon: IconType; color: string; bg: string; label?: string }
> = {
  github: {
    Icon: SiGithub,
    color: "#ffffff",
    bg: "linear-gradient(145deg, #0d1117 0%, #161b22 50%, #0d1117 100%)",
  },
  leetcode: {
    Icon: SiLeetcode,
    color: "inherit",
    bg: "linear-gradient(145deg, #1a1a1a 0%, #282828 50%, #1a1a1a 100%)",
  },
  gfg: {
    Icon: SiGeeksforgeeks,
    color: "#2f8d46",
    bg: "linear-gradient(145deg, #1a1a1a 0%, #1f2a1f 50%, #141414 100%)",
  },
  linkedin: {
    Icon: FaLinkedinIn,
    color: "#ffffff",
    bg: "linear-gradient(145deg, #0a66c2 0%, #004182 50%, #0a3d6b 100%)",
  },
};

export function ProfileBrandOverlay({
  platform,
  className,
}: {
  platform: Platform;
  className?: string;
}) {
  const { Icon, color, bg } = brandConfig[platform];

  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center",
        className,
      )}
      style={{ background: bg }}
    >
      <Icon
        className="h-[46%] w-[46%] max-h-32 max-w-32 drop-shadow-[0_8px_32px_rgba(0,0,0,0.45)] sm:max-h-36 sm:max-w-36"
        style={color === "inherit" ? undefined : { color }}
        aria-hidden
      />
    </div>
  );
}
