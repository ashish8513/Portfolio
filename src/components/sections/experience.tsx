"use client";

import { cn } from "@/lib/utils";
import { experience, experienceIntro } from "@/lib/content";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Cpu, Rocket, Zap } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const stageIcons = [Rocket, Zap, Cpu] as const;

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Experience() {
  const reduce = useReducedMotion();
  const [activeStage, setActiveStage] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.75", "end 0.25"],
  });
  const railScale = useTransform(scrollYProgress, [0, 1], [0.08, 1]);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root || reduce) return;

    const cards = root.querySelectorAll<HTMLElement>("[data-stage-card]");
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let bestIdx = 0;
        let bestRatio = 0;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const r = entry.intersectionRatio;
          if (r > bestRatio) {
            bestRatio = r;
            bestIdx = Number((entry.target as HTMLElement).dataset.stageIndex ?? 0);
          }
        }
        if (bestRatio > 0.08) {
          setActiveStage(bestIdx);
        }
      },
      {
        root: null,
        rootMargin: "-28% 0px -34% 0px",
        threshold: [0, 0.08, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85, 1],
      },
    );

    cards.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [reduce, experience.length]);

  useLayoutEffect(() => {
    if (reduce || typeof window === "undefined") return;
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-stage-card]");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            opacity: 0.2,
            y: 72,
            scale: 0.96,
            rotateX: 5,
            transformOrigin: "center top",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              end: "top 40%",
              scrub: 1.1,
              invalidateOnRefresh: true,
            },
          },
        );

        const orb = card.querySelector("[data-parallax-orb]");
        if (orb) {
          gsap.fromTo(
            orb,
            { y: 28, opacity: 0.35 },
            {
              y: -36,
              opacity: 0.75,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                invalidateOnRefresh: true,
              },
            },
          );
        }
      });
    }, sectionRef);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, [reduce, experience.length]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="section-y relative z-10 scroll-mt-24 overflow-x-hidden border-t border-white/[0.06] bg-[var(--bg-deep)] px-4 sm:px-6"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)]/35 to-transparent" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(ellipse 55% 40% at 100% 0%, rgba(59, 130, 246, 0.1), transparent), radial-gradient(ellipse 45% 35% at 0% 80%, rgba(59, 130, 246, 0.07), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-8 max-w-3xl text-center lg:mx-0 lg:mb-10 lg:max-w-2xl lg:text-left">
          <div className="mb-4 flex justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0a0a0a]/85 px-4 py-1.5 shadow-[inset_0_1px_0_0_rgba(var(--accent-primary-rgb),0.28)]">
              <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.55)]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-indigo)]">
                {experienceIntro.eyebrow}
              </span>
            </span>
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.65rem] md:leading-[1.12]">
            <span className="block text-white">{experienceIntro.titleBright}</span>
            <span className="mt-1 block text-zinc-500">{experienceIntro.titleMuted}</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-500 sm:text-base">
            {experienceIntro.subtitle}
          </p>
        </div>

        <div className="relative flex flex-col gap-8">
          <div className="min-w-0 [perspective:1400px]">
            <div className="relative">
              {/* Timeline spine — centered in narrow first column (~2.75rem) */}
              <div
                className="pointer-events-none absolute left-[1.375rem] top-3 bottom-10 z-0 w-px bg-zinc-800"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute left-[1.375rem] top-3 bottom-10 z-0 w-px overflow-hidden"
                aria-hidden
              >
                <motion.div
                  className="h-full w-full origin-top bg-gradient-to-b from-[var(--accent-primary)] via-[var(--accent-hover)] to-[var(--accent-primary)]"
                  style={{ scaleY: railScale, transformOrigin: "top" }}
                />
              </div>

              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                {experience.map((job, index) => {
                  const StageIcon = stageIcons[index % stageIcons.length];
                  const isActive = activeStage === index;

                  return (
                    <div
                      key={`${job.period}-${job.title}`}
                      className="relative z-[1] grid grid-cols-[2.75rem_minmax(0,1fr)] items-start gap-x-3 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-x-4 lg:gap-x-5"
                    >
                      <div className="relative flex justify-center pt-1">
                        <span
                          className={cn(
                            "relative z-[2] mt-0.5 h-3 w-3 shrink-0 rounded-full border-2 border-[var(--bg-deep)] bg-zinc-700 shadow-sm ring-1 ring-zinc-600",
                            isActive &&
                              "scale-110 border-[var(--accent-primary)] bg-[var(--accent-hover)] ring-[var(--accent-primary)] shadow-[0_0_14px_rgba(var(--accent-primary-rgb),0.55)]",
                          )}
                          aria-hidden
                        />
                      </div>

                      <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                        <p className="shrink-0 text-[13px] font-semibold leading-snug tracking-tight text-zinc-400 sm:w-[9.25rem] sm:pt-0.5 md:w-44 md:text-sm">
                          {job.period}
                        </p>

                        <article
                          data-stage-card
                          data-stage-index={index}
                          style={{ willChange: reduce ? undefined : "transform, opacity" }}
                          className={cn(
                            "relative min-w-0 flex-1 overflow-hidden rounded-[1.15rem] border p-4 shadow-[inset_0_1px_0_0_rgba(var(--accent-primary-rgb),0.15)] transition-[border-color,box-shadow] duration-500 sm:rounded-2xl sm:p-5 md:p-6",
                            "transform-gpu backface-hidden",
                            "bg-gradient-to-br from-[#0f1830] via-[#0a0f1c] to-[#050508]",
                            isActive
                              ? "border-[var(--accent-primary)]/50 shadow-[0_0_52px_-22px_rgba(var(--accent-primary-rgb),0.38)]"
                              : "border-white/[0.08]",
                          )}
                        >
                          <div
                            data-parallax-orb
                            className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[var(--accent-primary)]/12 blur-3xl sm:h-44 sm:w-44"
                          />

                          <div className="relative flex items-start justify-start">
                            <motion.span
                              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.1] bg-black/70 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] sm:h-10 sm:w-10 sm:rounded-xl"
                              animate={
                                reduce || !isActive
                                  ? {}
                                  : {
                                      boxShadow: [
                                        "0 0 20px -6px rgba(59, 130, 246, 0.45)",
                                        "0 0 30px -4px rgba(59, 130, 246, 0.55)",
                                        "0 0 20px -6px rgba(59, 130, 246, 0.45)",
                                      ],
                                    }
                              }
                              transition={{
                                duration: 2.4,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                              }}
                            >
                              <StageIcon className="h-[16px] w-[16px] text-white sm:h-[18px] sm:w-[18px]" aria-hidden />
                            </motion.span>
                          </div>

                          <h3 className="mt-4 text-base font-bold tracking-tight text-white sm:text-lg md:text-xl">
                            {job.title}
                          </h3>
                          <p className="mt-1 text-sm font-medium text-[var(--accent-hover)]">
                            {job.company}
                          </p>

                          <p className="mt-3 text-sm leading-relaxed text-zinc-400">{job.description}</p>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {job.badge ? (
                              <span className="rounded-full border border-white/[0.12] bg-black/40 px-2.5 py-1 text-[11px] font-medium text-zinc-300 backdrop-blur-md sm:px-3 sm:py-1.5">
                                {job.badge}
                              </span>
                            ) : null}
                            {job.tags?.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-white/[0.1] bg-white/[0.05] px-2.5 py-1 text-[11px] font-medium text-zinc-400 backdrop-blur-md transition-colors duration-300 hover:border-[var(--accent-primary)]/30 hover:text-zinc-300 sm:px-3 sm:py-1.5"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </article>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
