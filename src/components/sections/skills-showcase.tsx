"use client";

import { MotionReveal } from "@/components/motion-reveal";
import {
  skillCategoryOrder,
  skillHighlights,
  skills,
  type SkillCategory,
  type SkillItem,
} from "@/lib/content";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Bot,
  Braces,
  ChevronDown,
  Cloud,
  Code2,
  Database,
  LayoutTemplate,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react";
import { SkillBrandIcon, SkillIconTile } from "@/components/sections/skill-brand-icon";
import { useMemo, useRef, useState } from "react";

const GEN_AI: SkillCategory = "Gen AI / AI Engineering";

const catMeta: Record<
  SkillCategory,
  { label: string; hint: string; Icon: typeof LayoutTemplate; featured?: boolean }
> = {
  "Programming Languages": {
    label: "Core languages",
    hint: "Java, JavaScript, and DSA foundations in C++.",
    Icon: Code2,
  },
  Frontend: {
    label: "Interface layer",
    hint: "What users touch — components, state, and responsive UI.",
    Icon: LayoutTemplate,
  },
  Backend: {
    label: "Systems layer",
    hint: "APIs, auth, services, and server-side architecture.",
    Icon: Server,
  },
  Databases: {
    label: "Data layer",
    hint: "Persistence, caching, and query design.",
    Icon: Database,
  },
  "Java Ecosystem": {
    label: "Enterprise Java",
    hint: "Build, test, and ship with the Spring & Maven stack.",
    Icon: Braces,
  },
  "DevOps / Cloud": {
    label: "Ship & scale",
    hint: "Containers, cloud, and automated delivery pipelines.",
    Icon: Cloud,
  },
  [GEN_AI]: {
    label: "Intelligence layer",
    hint: "LLMs, agents, RAG, and production AI workflows.",
    Icon: Bot,
    featured: true,
  },
  "Tools & Productivity": {
    label: "Delivery layer",
    hint: "Version control, IDEs, and day-to-day shipping tools.",
    Icon: Wrench,
  },
};

function tierForLevel(n: number): string {
  if (n >= 90) return "Ship-ready";
  if (n >= 82) return "Daily driver";
  if (n >= 75) return "Strong";
  return "Growing";
}

function SignalDots({
  level,
  variant = "default",
}: {
  level: number;
  variant?: "default" | "ai";
}) {
  const filled = Math.min(5, Math.max(1, Math.round(level / 20)));
  return (
    <div className="flex gap-1" aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={cn(
            "h-1.5 w-1.5 rounded-full transition-colors duration-300",
            i < filled
              ? variant === "ai"
                ? "bg-[var(--ai-accent-bright)] shadow-[0_0_8px_var(--ai-glow)]"
                : "bg-[var(--accent-hover)] shadow-[0_0_8px_rgba(76,129,227,0.55)]"
              : "bg-zinc-800",
          )}
        />
      ))}
    </div>
  );
}

function SkillIconCell({
  name,
  featured,
}: {
  name: string;
  featured?: boolean;
}) {
  return (
    <div className="group flex flex-col items-center gap-2">
      <SkillIconTile name={name} featured={featured}>
        <SkillBrandIcon name={name} featured={featured} className="h-7 w-7 sm:h-8 sm:w-8" />
      </SkillIconTile>
      <span className="max-w-[5.5rem] text-center text-[10px] font-medium leading-tight text-zinc-400 sm:max-w-none sm:text-xs">
        {name}
      </span>
    </div>
  );
}

function SkillRow({
  skill,
  index,
  reduced,
  variant,
}: {
  skill: SkillItem;
  index: number;
  reduced: boolean;
  variant: "default" | "ai";
}) {
  const tier = tierForLevel(skill.level);
  const idx = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={reduced ? undefined : { opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: reduced ? 0.01 : 0.32,
        delay: reduced ? 0 : Math.min(index * 0.03, 0.36),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-wrap items-center gap-3 border-b border-white/[0.05] py-3.5 last:border-b-0 sm:flex-nowrap sm:gap-6 sm:py-4"
    >
      <span className="font-mono text-[11px] tabular-nums text-zinc-600">{idx}</span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium tracking-tight text-white sm:text-[15px]">
          {skill.name}
        </p>
        <p className="mt-0.5 text-[11px] text-zinc-600 sm:hidden">{tier}</p>
      </div>
      <div className="flex items-center gap-4 sm:gap-6">
        <SignalDots level={skill.level} variant={variant} />
        <span className="hidden w-28 text-right text-[11px] font-medium uppercase tracking-wider text-zinc-500 sm:inline">
          {tier}
        </span>
      </div>
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          variant === "ai"
            ? "from-[var(--ai-accent)]/60 via-[var(--accent-primary)]/25"
            : "from-[var(--accent-primary)]/50 via-[var(--accent-hover)]/25",
        )}
        aria-hidden
      />
    </motion.div>
  );
}

export function SkillsShowcase() {
  const reduce = useReducedMotion();
  const stackRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<SkillCategory>(GEN_AI);
  const [gridExpanded, setGridExpanded] = useState(false);

  const byCat = useMemo(() => {
    const m = new Map<SkillCategory, SkillItem[]>();
    for (const c of skillCategoryOrder) {
      m.set(
        c,
        skills.filter((s) => s.category === c),
      );
    }
    return m;
  }, []);

  const highlightSet = useMemo(() => new Set<string>(skillHighlights), []);
  const gridSkills = useMemo(
    () => (gridExpanded ? skills : skills.filter((s) => highlightSet.has(s.name))),
    [gridExpanded, highlightSet],
  );
  const hiddenGridCount = skills.length - skillHighlights.length;

  const scrollToStack = () => {
    stackRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

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
            "radial-gradient(ellipse 70% 45% at 50% -10%, rgba(76, 129, 227, 0.14), transparent), radial-gradient(ellipse 45% 40% at 100% 20%, rgba(139, 92, 246, 0.1), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute right-[8%] top-32 h-56 w-56 rounded-full bg-[var(--ai-accent)] opacity-[0.07] blur-[90px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl lg:max-w-5xl">
        <MotionReveal>
          <div className="py-4 sm:py-8">
            <div className="mx-auto max-w-3xl px-1 text-center sm:px-4">
              <div className="mb-4 flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0a0a0a]/90 px-4 py-1.5 shadow-[inset_0_1px_0_0_rgba(76,129,227,0.35)]">
                  <Sparkles className="h-3.5 w-3.5 text-[var(--ai-accent-bright)]" aria-hidden />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-indigo)]">
                    Skills acquired
                  </span>
                </span>
              </div>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-tight">
                Full-stack engineering +{" "}
                <span className="bg-gradient-to-r from-[var(--ai-accent-bright)] via-[var(--accent-primary)] to-[var(--accent-hover)] bg-clip-text text-transparent">
                  AI systems
                </span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-500 sm:text-base">
                From MERN and Spring APIs to LangChain agents and RAG — depth shown as signal,
                not exam scores. Tap a lane or expand the grid below.
              </p>
            </div>
          </div>
        </MotionReveal>

        <MotionReveal>
          <div className="rounded-2xl border border-white/[0.08] bg-[#080808]/90 p-4 sm:rounded-3xl sm:p-6">
            <div className="mb-4 flex items-end justify-between gap-3 border-b border-white/[0.06] pb-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Core stack
              </p>
              <span className="text-[11px] text-zinc-600">{skills.length} tools</span>
            </div>
            <div className="grid grid-cols-3 gap-x-2 gap-y-5 sm:grid-cols-5 sm:gap-x-3 lg:grid-cols-6">
              {gridSkills.map((skill) => (
                <SkillIconCell
                  key={skill.name}
                  name={skill.name}
                  featured={skill.category === GEN_AI}
                />
              ))}
            </div>
            {!gridExpanded && hiddenGridCount > 0 ? (
              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  onClick={() => setGridExpanded(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e85d04] to-[#f48c06] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(232,93,4,0.55)] transition hover:brightness-110 active:scale-[0.98]"
                >
                  + {hiddenGridCount} more skills
                  <ChevronDown className="h-4 w-4" aria-hidden />
                </button>
              </div>
            ) : (
              <div className="mt-5 flex justify-center">
                <button
                  type="button"
                  onClick={scrollToStack}
                  className="text-xs font-medium text-[var(--accent-hover)] underline-offset-4 hover:underline"
                >
                  Jump to stack uplink ↓
                </button>
              </div>
            )}
          </div>
        </MotionReveal>

        <div ref={stackRef} className="section-body-gap relative scroll-mt-28 space-y-3">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-white/[0.06] pb-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                Stack uplink
              </p>
              <p className="mt-1 max-w-md text-sm text-zinc-500">
                Tap a lane — items unfold top to bottom.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-[11px] text-zinc-600">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--accent-hover)] shadow-[0_0_10px_rgba(76,129,227,0.5)]" />
                Depth signal
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--ai-accent-bright)] shadow-[0_0_10px_var(--ai-glow)]" />
                AI lane
              </span>
            </div>
          </div>

          {skillCategoryOrder.map((cat) => {
            const { label, hint, Icon, featured } = catMeta[cat];
            const list = byCat.get(cat) ?? [];
            const isOpen = open === cat;
            const isAi = cat === GEN_AI;

            return (
              <div key={cat} className="relative">
                <button
                  type="button"
                  onClick={() => setOpen(cat)}
                  aria-expanded={isOpen}
                  className={cn(
                    "relative flex w-full items-center gap-3 rounded-2xl border px-3 py-3.5 text-left transition-[border-color,background-color,box-shadow] duration-300 sm:gap-4 sm:px-5 sm:py-5",
                    isAi && isOpen && "skills-ai-lane",
                    isOpen
                      ? isAi
                        ? "border-[var(--ai-border)] shadow-[0_0_52px_-18px_var(--ai-glow)]"
                        : "border-[var(--accent-primary)]/35 bg-[#0c0c0c] shadow-[0_0_48px_-20px_rgba(76,129,227,0.35)]"
                      : isAi
                        ? "border-[var(--ai-border)]/50 bg-[#0a0812]/90 hover:border-[var(--ai-border)] hover:bg-[#0c0a14]"
                        : "border-white/[0.07] bg-[#080808]/80 hover:border-white/[0.12] hover:bg-[#0a0a0a]",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border sm:h-12 sm:w-12",
                      isOpen && isAi
                        ? "border-[var(--ai-border)] bg-[var(--ai-accent)]/15 text-[var(--ai-accent-bright)]"
                        : isOpen
                          ? "border-[var(--accent-primary)]/40 bg-[var(--accent-primary)]/10 text-[var(--accent-hover)]"
                          : isAi
                            ? "border-[var(--ai-border)]/60 bg-[var(--ai-accent)]/10 text-[var(--ai-accent-bright)]"
                            : "border-white/10 bg-black/40 text-[var(--accent-hover)]",
                    )}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={cn(
                          "text-[10px] font-semibold uppercase tracking-[0.16em]",
                          isAi ? "text-[var(--ai-accent-bright)]" : "text-[#6b8cff]",
                        )}
                      >
                        {cat}
                      </span>
                      {featured ? (
                        <span className="rounded-full border border-[var(--ai-border)] bg-[var(--ai-accent)]/15 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[var(--ai-accent-bright)]">
                          Active lane
                        </span>
                      ) : null}
                      <span className="hidden text-zinc-600 sm:inline">·</span>
                      <span className="hidden text-sm font-medium text-white sm:inline">
                        {label}
                      </span>
                      <span className="ml-auto rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] tabular-nums text-zinc-500 sm:ml-0">
                        {list.length}
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-500">{hint}</p>
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-300",
                      isOpen &&
                        (isAi
                          ? "rotate-180 text-[var(--ai-accent-bright)]"
                          : "rotate-180 text-[var(--accent-hover)]"),
                    )}
                    aria-hidden
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key={`panel-${cat}`}
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.36, ease: [0.22, 1, 0.36, 1] },
                        opacity: { duration: 0.24 },
                      }}
                      className="overflow-hidden"
                    >
                      <div
                        className={cn(
                          "border-x border-b px-3 pb-2 pt-0 sm:px-6",
                          isAi
                            ? "border-[var(--ai-border)]/40 bg-[#080612]/95"
                            : "border-white/[0.06] bg-[#060606]/95",
                        )}
                      >
                        <div className="border-t border-dashed border-white/[0.08] pt-2" />
                        {list.map((skill, i) => (
                          <SkillRow
                            key={skill.name}
                            skill={skill}
                            index={i}
                            reduced={reduce ?? false}
                            variant={isAi ? "ai" : "default"}
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
