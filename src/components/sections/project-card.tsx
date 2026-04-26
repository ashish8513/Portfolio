"use client";

import type { Project } from "@/lib/content";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
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
        "group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f1a]/90",
        "shadow-[0_20px_50px_-28px_rgba(99,102,241,0.28)] transition-[border-color,box-shadow] hover:border-indigo-400/25 hover:shadow-[0_28px_60px_-24px_rgba(56,189,248,0.28)]",
        className,
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
        <Image
          src={project.image}
          alt={`Preview for ${project.title}`}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 33vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/90 via-transparent to-transparent" />
        {project.featured ? (
          <span className="absolute left-3 top-3 rounded-full bg-indigo-500/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur">
            Featured
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] font-medium text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          {project.repoUrl ? (
            <Link
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 text-xs font-medium text-white hover:bg-white/[0.08]"
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
              className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-sky-500 px-3 text-xs font-semibold text-white hover:brightness-110"
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
