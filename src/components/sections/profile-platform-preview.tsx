"use client";

import { cn } from "@/lib/utils";
import type { ProfileLink } from "@/lib/content";

type Platform = ProfileLink["icon"];
type Layer = "before" | "after";

function Heatmap({ bright }: { bright?: boolean }) {
  const cells = Array.from({ length: 56 }, (_, i) => {
    const level = (i * 7 + 13) % 5;
    return level;
  });
  return (
    <div className="grid grid-cols-14 gap-0.5">
      {cells.map((level, i) => (
        <span
          key={i}
          className={cn(
            "aspect-square rounded-[2px]",
            level === 0 && "bg-[#161b22]",
            level === 1 && (bright ? "bg-[#0e4429]" : "bg-[#1a2332]"),
            level === 2 && (bright ? "bg-[#006d32]" : "bg-[#243044]"),
            level === 3 && (bright ? "bg-[#26a641]" : "bg-[#2d4a3e]"),
            level >= 4 && (bright ? "bg-[#39d353]" : "bg-[#3d5c45]"),
          )}
        />
      ))}
    </div>
  );
}

function BarRow({ w, bright }: { w: string; bright?: boolean }) {
  return (
    <div
      className={cn("h-2 rounded-full", bright ? "bg-[var(--accent-primary)]/70" : "bg-white/10")}
      style={{ width: w }}
    />
  );
}

export function ProfilePlatformPreview({
  platform,
  layer,
  handle,
}: {
  platform: Platform;
  layer: Layer;
  handle?: string;
}) {
  const bright = layer === "after";

  if (platform === "github") {
    return (
      <div
        className={cn(
          "flex h-full w-full flex-col p-3 sm:p-4",
          bright ? "bg-[#0d1117]" : "bg-[#010409]",
        )}
      >
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "h-8 w-8 rounded-full",
              bright ? "bg-[var(--github-l3)]" : "bg-zinc-700",
            )}
          />
          <div className="min-w-0 flex-1 space-y-1.5">
            <div className={cn("h-2 w-24 rounded", bright ? "bg-white/80" : "bg-white/25")} />
            <div className={cn("h-1.5 w-16 rounded", bright ? "bg-zinc-500" : "bg-white/15")} />
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {["Repos", "Contrib", "Stars"].map((label, i) => (
            <div
              key={label}
              className={cn(
                "rounded-lg border px-2 py-1.5",
                bright ? "border-[var(--github-l2)]/40 bg-[var(--github-l1)]/30" : "border-white/5 bg-white/[0.03]",
              )}
            >
              <p className="text-[8px] uppercase tracking-wider text-zinc-500">{label}</p>
              <p className={cn("text-sm font-semibold tabular-nums", bright ? "text-[var(--github-l4)]" : "text-zinc-500")}>
                {i === 1 && bright ? "387" : i === 0 ? "12+" : "—"}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-auto pt-3">
          <p className="mb-1.5 text-[9px] text-zinc-500">Contribution graph</p>
          <Heatmap bright={bright} />
        </div>
        {handle ? (
          <p className="mt-2 truncate text-[10px] text-zinc-500">@{handle}</p>
        ) : null}
      </div>
    );
  }

  if (platform === "gfg") {
    return (
      <div
        className={cn(
          "flex h-full w-full flex-col p-3 sm:p-4",
          bright ? "bg-[#1e1e1e]" : "bg-[#141414]",
        )}
      >
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-lg text-[10px] font-bold",
              bright ? "bg-[#2f8d46] text-white" : "bg-zinc-700 text-zinc-500",
            )}
          >
            GFG
          </span>
          <div className="min-w-0 flex-1 space-y-1.5">
            <div className={cn("h-2 w-28 rounded", bright ? "bg-white/85" : "bg-white/20")} />
            <div className={cn("h-1.5 w-20 rounded", bright ? "bg-[#2f8d46]/80" : "bg-white/12")} />
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className={cn("rounded-lg p-2", bright ? "bg-[#2a2a2a]" : "bg-white/[0.04]")}>
            <p className="text-[8px] text-zinc-500">Coding Score</p>
            <p className={cn("text-lg font-bold", bright ? "text-[#2f8d46]" : "text-zinc-600")}>
              {bright ? "2" : "—"}
            </p>
          </div>
          <div className={cn("rounded-lg p-2", bright ? "bg-[#2a2a2a]" : "bg-white/[0.04]")}>
            <p className="text-[8px] text-zinc-500">Solved</p>
            <p className={cn("text-lg font-bold", bright ? "text-white" : "text-zinc-600")}>
              {bright ? "1" : "—"}
            </p>
          </div>
        </div>
        <div className="mt-auto pt-2">
          <Heatmap bright={bright} />
        </div>
      </div>
    );
  }

  if (platform === "leetcode") {
    return (
      <div
        className={cn(
          "flex h-full w-full flex-col p-3 sm:p-4",
          bright ? "bg-[#1a1a1a]" : "bg-[#111111]",
        )}
      >
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-1.5">
            <div className={cn("h-2.5 w-28 rounded", bright ? "bg-[#ffa116]" : "bg-white/20")} />
            <div className={cn("h-1.5 w-20 rounded", bright ? "bg-white/50" : "bg-white/12")} />
          </div>
          <span
            className={cn(
              "rounded-md px-2 py-0.5 text-[10px] font-bold",
              bright ? "bg-[#ffa116]/20 text-[#ffa116]" : "bg-white/5 text-zinc-600",
            )}
          >
            {bright ? "Knight" : "—"}
          </span>
        </div>
        <div className="mt-3 space-y-2">
          <BarRow w={bright ? "88%" : "45%"} bright={bright} />
          <BarRow w={bright ? "72%" : "38%"} bright={bright} />
          <BarRow w={bright ? "60%" : "30%"} bright={bright} />
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className={cn("rounded-lg p-2", bright ? "bg-[#2a2a2a]" : "bg-white/[0.04]")}>
            <p className="text-[8px] text-zinc-500">Solved</p>
            <p className={cn("text-lg font-bold", bright ? "text-[#ffa116]" : "text-zinc-600")}>
              {bright ? "200+" : "—"}
            </p>
          </div>
          <div className={cn("rounded-lg p-2", bright ? "bg-[#2a2a2a]" : "bg-white/[0.04]")}>
            <p className="text-[8px] text-zinc-500">Streak</p>
            <p className={cn("text-lg font-bold", bright ? "text-white" : "text-zinc-600")}>
              {bright ? "30d" : "—"}
            </p>
          </div>
        </div>
        <div className="mt-auto pt-2">
          <Heatmap bright={bright} />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col p-3 sm:p-4",
        bright ? "bg-[#1b1f23]" : "bg-[#0f1114]",
      )}
    >
      <div className="flex gap-2">
        <span className={cn("h-10 w-10 rounded-lg", bright ? "bg-[#0a66c2]" : "bg-zinc-700")} />
        <div className="flex-1 space-y-1.5 pt-1">
          <div className={cn("h-2.5 w-32 rounded", bright ? "bg-white/90" : "bg-white/20")} />
          <div className={cn("h-1.5 w-24 rounded", bright ? "bg-zinc-400" : "bg-white/12")} />
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className={cn(
              "rounded-lg border p-2",
              bright ? "border-[#0a66c2]/30 bg-white/[0.04]" : "border-white/5 bg-white/[0.02]",
            )}
          >
            <div className={cn("h-1.5 w-3/4 rounded", bright ? "bg-white/70" : "bg-white/15")} />
            <div className={cn("mt-1.5 h-1 w-1/2 rounded", bright ? "bg-zinc-500" : "bg-white/10")} />
          </div>
        ))}
      </div>
      {handle ? (
        <p className="mt-auto pt-2 text-[10px] text-zinc-500">{handle}</p>
      ) : null}
    </div>
  );
}
