"use client";

import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { skills, type SkillCategory } from "@/lib/content";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

const categories: SkillCategory[] = ["Frontend", "Backend", "Tools"];

export function Skills() {
  const reduce = useReducedMotion();

  return (
    <section id="skills" className="relative z-10 scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <MotionReveal>
          <SectionHeading
            eyebrow="Toolkit"
            title="Skills"
            subtitle="Interactive map of what I use most — hover cards for a quick read."
          />
        </MotionReveal>

        <div className="mt-14 space-y-12">
          {categories.map((cat) => (
            <MotionReveal key={cat}>
              <div className="mb-4 flex items-center gap-3">
                <h3 className="text-lg font-semibold text-white">{cat}</h3>
                <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {skills
                  .filter((s) => s.category === cat)
                  .map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={
                        reduce
                          ? undefined
                          : { y: -4, boxShadow: "0 20px 40px -24px rgba(124,58,237,0.45)" }
                      }
                      transition={{ type: "spring", stiffness: 400, damping: 22 }}
                      className={cn(
                        "group rounded-2xl border border-white/10 bg-white/[0.03] p-4",
                        "transition-colors hover:border-violet-500/30 hover:bg-white/[0.05]",
                      )}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-medium text-white">
                          {skill.name}
                        </span>
                        <span className="text-xs tabular-nums text-zinc-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-zinc-800">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-[var(--accent-hover)] to-[var(--accent-primary)]"
                          initial={reduce ? { width: `${skill.level}%` } : { width: 0 }}
                          whileInView={
                            reduce ? undefined : { width: `${skill.level}%` }
                          }
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
