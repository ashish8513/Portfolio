"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Braces,
  Database,
  Layers,
  Server,
  Smartphone,
} from "lucide-react";

const stack = [
  { label: "MongoDB", Icon: Database },
  { label: "Express", Icon: Server },
  { label: "React", Icon: Layers },
  { label: "Node", Icon: Braces },
] as const;

type FloatBadge = {
  text: string;
  delay: number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
};

const floatBadges: FloatBadge[] = [
  { text: "REST · GraphQL", top: "8%", right: "-4%", delay: 0.15 },
  { text: "React Native", bottom: "22%", left: "-6%", delay: 0.35 },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[17.5rem] sm:max-w-xs lg:max-w-[440px] lg:translate-x-4 xl:max-w-none">
      <div className="pointer-events-none absolute -right-6 -top-10 h-40 w-40 rounded-full bg-[var(--accent-primary)] opacity-25 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-8 -left-4 h-36 w-36 rounded-full bg-[var(--accent-hover)] opacity-22 blur-[72px]" />

      {floatBadges.map((b) => (
        <motion.div
          key={b.text}
          className="pointer-events-none absolute z-20 hidden rounded-full border border-white/12 bg-[#0a0a0a]/85 px-2.5 py-1 text-[10px] font-medium tracking-wide text-zinc-300 shadow-lg backdrop-blur-md sm:block"
          style={{
            ...(b.top !== undefined ? { top: b.top } : {}),
            ...(b.bottom !== undefined ? { bottom: b.bottom } : {}),
            ...(b.left !== undefined ? { left: b.left } : {}),
            ...(b.right !== undefined ? { right: b.right } : {}),
          }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: b.delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {b.text}
        </motion.div>
      ))}

      <motion.div
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#060606] shadow-[0_32px_80px_-32px_rgba(0,0,238,0.45)] md:rounded-3xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 85, 254, 0.22), transparent),
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "100% 100%, 24px 24px, 24px 24px",
          }}
        />

        <div className="relative aspect-[4/5] w-full sm:aspect-[3/4] lg:aspect-[4/5]">
          <div className="flex h-full flex-col p-3 sm:p-4">
            {/* Browser / IDE chrome */}
            <div className="mb-3 flex shrink-0 items-center gap-2 rounded-xl border border-white/[0.07] bg-black/40 px-2.5 py-2 backdrop-blur-sm sm:gap-3 sm:px-3">
              <div className="flex gap-1 sm:gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#ff5f56]/90 sm:h-2.5 sm:w-2.5" />
                <span className="h-2 w-2 rounded-full bg-[#febc2e]/90 sm:h-2.5 sm:w-2.5" />
                <span className="h-2 w-2 rounded-full bg-[#28c840]/90 sm:h-2.5 sm:w-2.5" />
              </div>
              <div className="min-w-0 flex-1 truncate rounded-md bg-black/55 px-2 py-1 text-center font-mono text-[9px] text-zinc-500 sm:text-[10px]">
                <span className="text-emerald-500/90">●</span> dev · full-stack
              </div>
            </div>

            {/* Code panel */}
            <div className="mb-3 flex min-h-0 flex-1 flex-col rounded-xl border border-white/[0.06] bg-black/55 font-mono shadow-inner backdrop-blur-sm">
              <div className="flex border-b border-white/[0.06] px-2 pt-2">
                <span className="rounded-t-md border border-b-0 border-white/[0.08] bg-black/60 px-2 py-1 text-[9px] text-zinc-400 sm:text-[10px]">
                  api/route.ts
                </span>
                <span className="ml-1 rounded-t-md px-2 py-1 text-[9px] text-zinc-600 sm:text-[10px]">
                  App.tsx
                </span>
              </div>
              <div className="flex-1 overflow-hidden p-2.5 text-[9px] leading-relaxed text-zinc-400 sm:p-3 sm:text-[10px] sm:leading-relaxed">
                <p>
                  <span className="text-purple-400">export async function</span>{" "}
                  <span className="text-sky-300">GET</span>
                  <span className="text-zinc-500">() {"{"}</span>
                </p>
                <p className="pl-3">
                  <span className="text-zinc-500">const</span>{" "}
                  <span className="text-emerald-400">data</span>
                  <span className="text-zinc-500"> = await </span>
                  <span className="text-amber-300">db</span>
                  <span className="text-zinc-500">.</span>
                  <span className="text-sky-300">users</span>
                  <span className="text-zinc-500">.</span>
                  <span className="text-sky-300">find</span>
                  <span className="text-zinc-500">();</span>
                </p>
                <p className="pl-3">
                  <span className="text-purple-400">return</span>{" "}
                  <span className="text-sky-300">Response</span>
                  <span className="text-zinc-500">.</span>
                  <span className="text-sky-300">json</span>
                  <span className="text-zinc-500">(data);</span>
                </p>
                <p>
                  <span className="text-zinc-500">{"}"}</span>
                </p>
                <p className="mt-2 border-l-2 border-[var(--accent-primary)]/40 pl-2 text-[8px] text-zinc-600 sm:text-[9px]">
                  Ship APIs, dashboards, and mobile from one stack.
                </p>
              </div>
            </div>

            {/* MERN pipeline */}
            <div className="shrink-0 space-y-2">
              <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-zinc-600 sm:text-[10px]">
                Stack flow
              </p>
              <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                {stack.map(({ label, Icon }, i) => (
                  <motion.div
                    key={label}
                    className="flex items-center gap-1"
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.2 + i * 0.06,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {i > 0 ? (
                      <ArrowRight className="h-3 w-3 shrink-0 text-zinc-600" aria-hidden />
                    ) : null}
                    <span className="inline-flex items-center gap-1 rounded-lg border border-white/[0.08] bg-white/[0.04] px-1.5 py-1 text-[9px] font-medium text-zinc-200 shadow-sm sm:gap-1.5 sm:px-2 sm:text-[10px]">
                      <Icon className="h-3 w-3 text-[var(--accent-hover)]" aria-hidden />
                      {label}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-gradient-to-r from-[var(--accent-primary)]/12 to-transparent px-2 py-2 sm:px-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.45 }}
              >
                <Smartphone className="h-4 w-4 shrink-0 text-[var(--accent-hover)]" aria-hidden />
                <div className="min-w-0">
                  <p className="truncate text-[10px] font-semibold text-white sm:text-[11px]">
                    Mobile layer
                  </p>
                  <p className="truncate text-[9px] text-zinc-500 sm:text-[10px]">
                    React Native · same patterns, native shells
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--accent-primary)]/14 to-transparent" />
          <div className="pointer-events-none absolute inset-[1px] rounded-[inherit] border border-white/[0.05]" />
        </div>
      </motion.div>
    </div>
  );
}
