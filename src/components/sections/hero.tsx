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
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 flex max-w-3xl flex-col items-center gap-6"
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {site.role}
        </span>

        <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
          Hi, I&apos;m{" "}
          <span className="text-gradient drop-shadow-[0_0_28px_rgba(99,102,241,0.35)]">
            {site.name}
          </span>
        </h1>

        <motion.p
          className="max-w-xl text-pretty text-lg text-zinc-400 sm:text-xl"
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          {site.heroSubtitle}
        </motion.p>

        <p className="max-w-lg text-sm text-zinc-500 sm:text-base">{site.tagline}</p>

        <motion.div
          className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          <Link
            href="#projects"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 text-sm font-medium text-white transition hover:border-indigo-300/40 hover:bg-white/[0.07]"
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
      </motion.div>
    </section>
  );
}
