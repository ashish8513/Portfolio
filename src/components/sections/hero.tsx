"use client";

import { HeroVisual } from "@/components/landin/hero-visual";
import { Spotlight } from "@/components/ui/spotlight";
import { heroStackPills, site } from "@/lib/content";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden pb-0 pt-20 md:pt-24 lg:pt-[6.75rem]">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <Spotlight className="-top-40 -left-10 h-screen md:-left-32 md:-top-20" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="#3b82f6" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="#2563eb" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          className="mt-3 grid gap-8 pb-14 sm:mt-4 sm:gap-10 sm:pb-16 lg:mt-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:grid-rows-[auto_auto_1fr] lg:items-start lg:gap-x-12 lg:gap-y-3 lg:pb-24"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="order-1 mx-auto flex w-full max-w-[22rem] flex-wrap items-center gap-2 text-[0.8125rem] font-medium leading-snug text-zinc-400 sm:max-w-lg sm:text-sm lg:order-none lg:col-start-1 lg:row-start-1 lg:mx-0 lg:max-w-none">
            <span className="rounded-full bg-[var(--accent-primary)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
              Open
            </span>
            <span>
              {site.role} · {site.education}
            </span>
          </p>

          <motion.div
            className="relative order-3 flex w-full max-w-full justify-center sm:mx-auto sm:max-w-sm md:max-w-md lg:order-none lg:col-start-2 lg:row-start-1 lg:row-span-4 lg:mx-0 lg:max-w-none lg:justify-end lg:self-start"
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={reduce ? undefined : { opacity: 1, scale: 1 }}
            transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroVisual />
          </motion.div>

          <div className="order-2 mx-auto w-full max-w-[22rem] text-left sm:max-w-lg lg:order-none lg:col-start-1 lg:row-start-2 lg:mx-0 lg:max-w-none">
            <h1 className="text-balance font-semibold tracking-tight text-white">
              <span className="block text-[2rem] leading-[1.12] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                {site.heroTitleLine1}
              </span>
              <span className="mt-1 block text-[2rem] leading-[1.12] sm:text-5xl lg:mt-2 lg:text-[3.25rem] lg:leading-[1.08]">
                <span className="text-gradient">{site.heroTitleLine2}</span>
              </span>
            </h1>

            <p className="mt-5 max-w-[38ch] text-pretty text-[0.9375rem] leading-relaxed text-zinc-400 sm:text-base lg:max-w-xl lg:text-lg">
              {site.heroSubtitle}{" "}
              <span className="text-zinc-500">{site.tagline}</span>
            </p>

            <motion.div
              className="mt-4 flex max-w-xl flex-wrap gap-2"
              aria-label="Primary technologies"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.06, duration: 0.5 }}
            >
              {heroStackPills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-zinc-400 sm:text-[11px]"
                >
                  {pill}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="mt-8 grid w-full max-w-lg grid-cols-1 gap-3 sm:max-w-xl sm:grid-cols-2 sm:gap-3 lg:max-w-none"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.55 }}
            >
              <a
                href={site.resume.href}
                download={site.resume.downloadFilename}
                className="btn-outline-landin min-h-[44px] w-full justify-center gap-2 px-5 text-[0.8125rem] sm:min-h-0 sm:px-7 sm:text-[0.875rem]"
              >
                <Download className="h-4 w-4 shrink-0" aria-hidden />
                Résumé
              </a>
              <Link
                href="#contact"
                className="btn-primary-landin min-h-[44px] w-full justify-center px-5 text-[0.8125rem] sm:min-h-0 sm:px-7 sm:text-[0.875rem]"
              >
                Get in touch
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
              </Link>
            </motion.div>

            <motion.div
              className="mt-10 grid w-full max-w-md grid-cols-3 gap-1.5 rounded-2xl border border-white/10 bg-[#0a0a0a]/60 p-2 backdrop-blur-md sm:gap-2 lg:max-w-lg"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.55 }}
            >
              {[
                { label: "Experience", value: "1.5+ yrs" },
                { label: "Focus", value: "AI + MERN" },
                { label: "Open for", value: "MNC roles" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2.5 text-left">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500">{item.label}</p>
                  <p className="mt-1 text-lg font-semibold tabular-nums text-white">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
