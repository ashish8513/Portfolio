"use client";

import { site } from "@/lib/content";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center px-4 pb-24 pt-28 text-center sm:px-6"
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        <motion.div
          className="absolute left-[12%] top-[30%] h-36 w-36 rounded-full border border-cyan-300/30"
          animate={reduce ? undefined : { y: [0, -14, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 7.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[14%] top-[62%] h-24 w-24 rounded-2xl border border-indigo-300/30"
          animate={reduce ? undefined : { y: [0, 18, 0], rotate: [0, -12, 0] }}
          transition={{ duration: 8.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="relative z-10 flex max-w-3xl flex-col items-center gap-6"
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-glass)] bg-[color-mix(in_oklab,var(--bg-elevated)_66%,transparent)] px-3 py-1 text-xs font-medium text-[var(--text-muted)] backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {site.role}
        </span>

        <h1 className="text-balance text-4xl font-semibold tracking-tight text-[var(--text-main)] sm:text-5xl md:text-6xl">
          Hi, I&apos;m{" "}
          <span className="text-gradient drop-shadow-[0_0_28px_rgba(99,102,241,0.35)]">
            {site.name}
          </span>
        </h1>

        <motion.p
          className="max-w-xl text-pretty text-lg text-[var(--text-muted)] sm:text-xl"
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          {site.heroSubtitle}
        </motion.p>

        <p className="max-w-lg text-sm text-[var(--text-muted)]/90 sm:text-base">{site.tagline}</p>

        <motion.div
          className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          <Link
            href="#projects"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[var(--border-glass)] bg-[color-mix(in_oklab,var(--bg-elevated)_66%,transparent)] px-6 text-sm font-medium text-[var(--text-main)] transition hover:border-indigo-300/40 hover:bg-white/[0.07]"
          >
            View Projects
            <ArrowDownRight className="h-4 w-4 opacity-80" aria-hidden />
          </Link>
          <Link
            href="#contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 px-6 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:brightness-110"
          >
            <Sparkles className="h-4 w-4" aria-hidden />
            Hire Me
          </Link>
        </motion.div>
        <motion.div
          className="glass-panel mt-3 grid w-full max-w-2xl grid-cols-3 gap-2 rounded-2xl p-2 text-left sm:gap-3 sm:p-3"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.34, duration: 0.55 }}
        >
          {[
            { label: "Build Velocity", value: "2x" },
            { label: "Perf Score", value: "95+" },
            { label: "Deploy Cadence", value: "Weekly" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-[var(--border-glass)] bg-[color-mix(in_oklab,var(--bg-elevated)_72%,transparent)] px-3 py-2"
            >
              <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                {item.label}
              </p>
              <p className="mt-1 text-lg font-semibold text-[var(--text-main)] sm:text-xl">
                {item.value}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
