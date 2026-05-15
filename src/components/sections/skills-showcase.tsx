"use client";

import { MotionReveal } from "@/components/motion-reveal";
import {
  skills,
  type SkillCategory,
  type SkillItem,
} from "@/lib/content";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Cpu, LayoutTemplate, Wrench } from "lucide-react";
import { useMemo, useState } from "react";

const ORDER: SkillCategory[] = ["Frontend", "Backend", "Tools"];

const catMeta: Record<
  SkillCategory,
  { label: string; hint: string; Icon: typeof LayoutTemplate }
> = {
  Frontend: {
    label: "Interface layer",
    hint: "What users touch — motion, types, and pixels.",
    Icon: LayoutTemplate,
  },
  Backend: {
    label: "Systems layer",
    hint: "APIs, data, and the glue between clients.",
    Icon: Cpu,
  },
  Tools: {
    label: "Delivery layer",
    hint: "Shipping, review, and design handoff.",
    Icon: Wrench,
  },
};

function tierForLevel(n: number): string {
  if (n >= 90) return "Ship-ready";
  if (n >= 80) return "Daily driver";
  if (n >= 70) return "Strong";
  return "Growing";
}

function SignalDots({ level }: { level: number }) {
  const filled = Math.min(5, Math.max(1, Math.round(level / 20)));
  return (
    <div className="flex gap-1" aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={cn(
            "h-1.5 w-1.5 rounded-full transition-colors duration-300",
            i < filled
              ? "bg-[var(--accent-hover)] shadow-[0_0_8px_rgba(76,129,227,0.55)]"
              : "bg-zinc-800",
          )}
        />
      ))}
    </div>
  );
}

function SkillRow({
  skill,
  index,
  reduced,
}: {
  skill: SkillItem;
  index: number;
  reduced: boolean;
}) {
  const tier = tierForLevel(skill.level);
  const idx = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={reduced ? undefined : { opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: reduced ? 0.01 : 0.38,
        delay: reduced ? 0 : index * 0.045,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-wrap items-center gap-3 border-b border-white/[0.05] py-4 last:border-b-0 sm:flex-nowrap sm:gap-6"
    >
      <span className="font-mono text-[11px] tabular-nums text-zinc-600">
        {idx}
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-medium tracking-tight text-white">{skill.name}</p>
        <p className="mt-0.5 text-[11px] text-zinc-600 sm:hidden">{tier}</p>
      </div>
      <div className="flex items-center gap-4 sm:gap-6">
        <SignalDots level={skill.level} />
        <span className="hidden w-28 text-right text-[11px] font-medium uppercase tracking-wider text-zinc-500 sm:inline">
          {tier}
        </span>
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-[var(--accent-primary)]/50 via-[var(--accent-hover)]/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />
    </motion.div>
  );
}

export function SkillsShowcase() {
  const reduce = useReducedMotion();
  const byCat = useMemo(() => {
    const m = new Map<SkillCategory, SkillItem[]>();
    for (const c of ORDER) {
      m.set(
        c,
        skills.filter((s) => s.category === c),
      );
    }
    return m;
  }, []);

  const [open, setOpen] = useState<SkillCategory>("Frontend");

  return (
    <section
      id="skills"
      className="section-y relative z-10 scroll-mt-24 overflow-hidden border-t border-white/[0.06] bg-[var(--bg-deep)] px-4 sm:px-6"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 45% at 50% -10%, rgba(76, 129, 227, 0.14), transparent), radial-gradient(ellipse 50% 35% at 100% 40%, rgba(76, 129, 227, 0.08), transparent)",
        }}
      />
      <div className="pointer-events-none absolute left-[12%] top-24 hidden h-[calc(100%-8rem)] w-px bg-gradient-to-b from-[var(--accent-primary)]/35 via-white/[0.06] to-transparent blur-[0.5px] lg:block" aria-hidden />
      <div className="pointer-events-none absolute right-[10%] top-40 hidden h-48 w-48 rounded-full bg-[var(--accent-primary)] opacity-[0.06] blur-[100px] lg:block" aria-hidden />

      <div className="relative mx-auto max-w-3xl lg:max-w-5xl">
        <MotionReveal>
          <div className="py-6 sm:py-10">
            <div className="mx-auto max-w-3xl px-2 text-center sm:px-8">
              <div className="mb-4 flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0a0a0a]/90 px-4 py-1.5 shadow-[inset_0_1px_0_0_rgba(76,129,227,0.35)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.6)]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-indigo)]">
                    Capabilities
                  </span>
                </span>
              </div>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-tight">
                Engineering that covers the full stack
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-500 sm:text-base">
                One uplink, three layers — open a lane to see the tools behind
                it. No generic bars: depth reads as signal, not a quiz score.
              </p>
            </div>
          </div>
        </MotionReveal>

        <div className="section-body-gap relative space-y-3 lg:mt-20">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-white/[0.06] pb-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                Stack uplink
              </p>
              <p className="mt-1 max-w-md text-sm text-zinc-500">
                Tap a layer below — items unfold top to bottom.
              </p>
            </div>
            <div className="hidden items-center gap-2 text-[11px] text-zinc-600 sm:flex">
              <span className="h-2 w-2 rounded-full bg-[var(--accent-hover)] shadow-[0_0_10px_rgba(76,129,227,0.5)]" />
              Signal = depth-of-use, not exam marks.
            </div>
          </div>

          {ORDER.map((cat) => {
            const { label, hint, Icon } = catMeta[cat];
            const list = byCat.get(cat) ?? [];
            const isOpen = open === cat;

            return (
              <div key={cat} className="relative">
                <button
                  type="button"
                  onClick={() => setOpen(cat)}
                  aria-expanded={isOpen}
                  className={cn(
                    "relative flex w-full items-center gap-4 rounded-2xl border px-4 py-4 text-left transition-[border-color,background-color,box-shadow] duration-300 sm:px-5 sm:py-5",
                    isOpen
                      ? "border-[var(--accent-primary)]/35 bg-[#0c0c0c] shadow-[0_0_48px_-20px_rgba(76,129,227,0.35)]"
                      : "border-white/[0.07] bg-[#080808]/80 hover:border-white/[0.12] hover:bg-[#0a0a0a]",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border text-[var(--accent-hover)] transition-colors",
                      isOpen
                        ? "border-[var(--accent-primary)]/40 bg-[var(--accent-primary)]/10"
                        : "border-white/10 bg-black/40",
                    )}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6b8cff]">
                        {cat}
                      </span>
                      <span className="text-zinc-600">·</span>
                      <span className="text-sm font-medium text-white">
                        {label}
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                      {hint}
                    </p>
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-300",
                      isOpen && "rotate-180 text-[var(--accent-hover)]",
                    )}
                    aria-hidden
                  />
                  {isOpen ? (
                    <motion.span
                      layoutId="skills-scan"
                      className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-[var(--accent-primary)]/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key={`panel-${cat}`}
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
                        opacity: { duration: 0.28 },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="border-x border-b border-white/[0.06] bg-[#060606]/95 px-4 pb-2 pt-0 sm:px-6">
                        <div className="border-t border-dashed border-white/[0.08] pt-2" />
                        {list.map((skill, i) => (
                          <SkillRow
                            key={skill.name}
                            skill={skill}
                            index={i}
                            reduced={reduce ?? false}
                          />
                        ))}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
