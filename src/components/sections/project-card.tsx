"use client";

import type { Project } from "@/lib/content";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ExternalLink, Github, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

const VISIBLE_STACK = 6;

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const [stackExpanded, setStackExpanded] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const detailsTitleId = useId();

  const hiddenStackCount = Math.max(0, project.stack.length - VISIBLE_STACK);
  const visibleStack = stackExpanded
    ? project.stack
    : project.stack.slice(0, VISIBLE_STACK);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (detailsOpen) {
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [detailsOpen]);

  return (
    <>
      <article
        className={cn(
          "overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0a0e16] shadow-[0_24px_60px_-32px_rgba(0,0,0,0.65)]",
          className,
        )}
      >
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-1 flex-col gap-5 p-6 sm:p-8 lg:max-w-[58%]">
            <header>
              <div className="flex flex-wrap items-start gap-3">
                <h3 className="text-2xl font-bold tracking-tight text-[var(--accent-primary)] sm:text-[1.65rem]">
                  {project.title}
                </h3>
                {project.featured ? (
                  <span className="rounded-full border border-[var(--accent-primary)]/35 bg-[var(--accent-primary)]/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--accent-primary)]">
                    Featured
                  </span>
                ) : null}
              </div>
              <p className="mt-1.5 text-sm font-medium text-zinc-500">{project.period}</p>
            </header>

            <p className="text-[15px] leading-relaxed text-zinc-300">{project.summary}</p>

            <ul className="space-y-2.5 text-sm leading-relaxed text-zinc-400">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-primary)]"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {visibleStack.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/12 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-zinc-200"
                >
                  {tag}
                </span>
              ))}
              {hiddenStackCount > 0 ? (
                <button
                  type="button"
                  onClick={() => setStackExpanded((v) => !v)}
                  className="inline-flex items-center gap-1 rounded-md border border-white/12 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-zinc-300 transition hover:border-[var(--accent-primary)]/40 hover:text-white"
                  aria-expanded={stackExpanded}
                >
                  {stackExpanded ? "Show less" : `+${hiddenStackCount} more`}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform",
                      stackExpanded && "rotate-180",
                    )}
                    aria-hidden
                  />
                </button>
              ) : null}
            </div>

            <div className="mt-auto flex flex-wrap gap-3 pt-1">
              {project.liveUrl ? (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-amber-400 px-6 text-sm font-semibold text-zinc-900 transition hover:bg-amber-300"
                >
                  View demo
                </Link>
              ) : null}
              <button
                type="button"
                onClick={() => setDetailsOpen(true)}
                className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-[var(--accent-primary)] px-6 text-sm font-semibold text-[var(--accent-primary)] transition hover:bg-[var(--accent-primary)]/10"
              >
                View project details
              </button>
              {project.repoUrl ? (
                <Link
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/15 px-5 text-sm font-medium text-zinc-300 transition hover:border-white/30 hover:text-white"
                >
                  <Github className="h-4 w-4" aria-hidden />
                  Code
                </Link>
              ) : null}
            </div>
          </div>

          <div className="relative min-h-[220px] flex-1 overflow-hidden bg-zinc-900/80 lg:min-h-0 lg:min-w-[38%]">
            <Image
              src={project.image}
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 420px"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0a0e16]/40 lg:bg-gradient-to-r lg:from-[#0a0e16]/50 lg:via-transparent lg:to-transparent" />
          </div>
        </div>
      </article>

      <dialog
        ref={dialogRef}
        aria-labelledby={detailsTitleId}
        className="fixed inset-0 z-[100] m-auto max-h-[min(90vh,720px)] w-[min(92vw,640px)] overflow-hidden rounded-2xl border border-white/10 bg-[#0c1018] p-0 text-white shadow-2xl backdrop:bg-black/70 open:flex open:flex-col"
        onClose={() => setDetailsOpen(false)}
        onClick={(e) => {
          if (e.target === dialogRef.current) setDetailsOpen(false);
        }}
      >
        <AnimatePresence>
          {detailsOpen ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="flex max-h-[min(90vh,720px)] flex-col"
            >
              <div className="flex items-start justify-between gap-4 border-b border-white/10 px-6 py-5 sm:px-8">
                <div>
                  <h4 id={detailsTitleId} className="text-xl font-bold text-white">
                    {project.title}
                  </h4>
                  <p className="mt-1 text-sm text-zinc-500">{project.period}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setDetailsOpen(false)}
                  className="rounded-full border border-white/10 p-2 text-zinc-400 transition hover:text-white"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-5 sm:px-8">
                <p className="text-[15px] leading-relaxed text-zinc-300">{project.details}</p>

                <h5 className="mt-6 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Tech stack
                </h5>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/12 bg-white/[0.04] px-2.5 py-1 text-xs text-zinc-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h5 className="mt-6 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Highlights
                </h5>
                <ul className="mt-3 space-y-2 text-sm text-zinc-400">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-primary)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 border-t border-white/10 px-6 py-4 sm:px-8">
                {project.liveUrl ? (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-amber-300"
                    onClick={() => setDetailsOpen(false)}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live demo
                  </Link>
                ) : null}
                {project.repoUrl ? (
                  <Link
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-zinc-200 hover:text-white"
                    onClick={() => setDetailsOpen(false)}
                  >
                    <Github className="h-4 w-4" />
                    Source code
                  </Link>
                ) : null}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </dialog>
    </>
  );
}
