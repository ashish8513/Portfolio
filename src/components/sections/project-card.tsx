"use client";

import type { Project } from "@/lib/content";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

const spring = { stiffness: 280, damping: 28 };

export function ProjectCard({ project, className }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const rotateX = useSpring(useMotionValue(0), spring);
  const rotateY = useSpring(useMotionValue(0), spring);

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientY - r.top) / r.height - 0.5;
    const py = (e.clientX - r.left) / r.width - 0.5;
    rotateX.set(-px * 8);
    rotateY.set(py * 10);
  }

  function onLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.article
      ref={ref}
      style={
        reduce
          ? undefined
          : {
              rotateX,
              rotateY,
              transformPerspective: 900,
            }
      }
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#1a2644] bg-[#070b16]",
        "shadow-[0_24px_60px_-30px_rgba(76,129,227,0.25)] transition-[border-color,box-shadow,transform] hover:border-[var(--accent-hover)]/45 hover:shadow-[0_34px_75px_-28px_rgba(76,129,227,0.35)]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(76,129,227,0.08),transparent_38%,rgba(0,0,0,0.3)_100%)]" />
      <ArrowUpRight className="pointer-events-none absolute right-3 top-3 z-10 h-3.5 w-3.5 text-zinc-500 transition-colors group-hover:text-zinc-300" />
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
        <Image
          src={project.image}
          alt={`Preview for ${project.title}`}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 33vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04060c] via-transparent to-transparent" />
        {project.featured ? (
          <span className="absolute left-3 top-3 rounded-full bg-[var(--accent-indigo)] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white">
            Featured
          </span>
        ) : null}
      </div>
      <div className="relative flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-white">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400/95">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>
        {(project.liveUrl ?? project.repoUrl) ? (
          <Link
            href={(project.liveUrl ?? project.repoUrl)!}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[var(--accent-hover)] transition group-hover:gap-1.5"
          >
            Learn more
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        ) : null}

        <div className="mt-1 h-px w-full bg-white/[0.08]" />

        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          {project.repoUrl ? (
            <Link
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 text-xs font-medium text-white hover:bg-white/[0.08]"
            >
              <Github className="h-3.5 w-3.5" />
              Code
            </Link>
          ) : null}
          {project.liveUrl ? (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-gradient-to-r from-[var(--accent-indigo)] to-[var(--accent-purple)] px-3 text-xs font-semibold text-white hover:brightness-110"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live
            </Link>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
