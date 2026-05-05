"use client";

import { site, nav } from "@/lib/content";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <header
        data-site-nav
        className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5 md:pt-6"
      >
        <div
          className={cn(
            "pointer-events-auto flex w-full max-w-5xl items-center gap-2 rounded-full border px-2 py-1.5 pl-3 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.65)] backdrop-blur-xl transition-colors sm:px-3 sm:py-2 sm:pl-4",
            scrolled
              ? "border-[var(--border-glass)] bg-[color-mix(in_oklab,var(--bg-elevated)_78%,transparent)]"
              : "border-[var(--border-glass)] bg-[color-mix(in_oklab,var(--bg-elevated)_58%,transparent)]",
          )}
        >
          <Link
            href="#top"
            className="flex shrink-0 items-center gap-2 rounded-full py-1 pr-2 font-semibold tracking-tight text-[var(--text-main)]"
            onClick={() => setOpen(false)}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border-glass)] bg-[color-mix(in_oklab,var(--bg-elevated)_72%,transparent)] text-xs font-bold text-[var(--text-main)] shadow-inner shadow-white/10">
              AP
            </span>
            <span className="hidden text-sm sm:inline">
              {site.name.split(" ")[0]}
            </span>
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 md:flex lg:gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-2 py-2 text-[11px] font-medium text-[var(--text-muted)] transition-colors hover:bg-white/[0.06] hover:text-[var(--text-main)] lg:px-3 lg:text-[13px]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2">
            <ThemeToggle className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-glass)] bg-[color-mix(in_oklab,var(--bg-elevated)_72%,transparent)] text-[var(--text-main)] transition hover:bg-white/[0.1]" />
            <Link
              href="#contact"
              className="hidden rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-3 py-2 text-xs font-semibold text-white shadow-[0_0_24px_-4px_rgba(99,102,241,0.55)] transition hover:brightness-110 md:inline-flex lg:px-4 lg:text-sm"
            >
              Book a Call
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-glass)] bg-[color-mix(in_oklab,var(--bg-elevated)_72%,transparent)] text-[var(--text-main)] transition hover:bg-white/[0.1] md:hidden"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            data-site-nav
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/55 backdrop-blur-sm"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="relative mx-4 mt-20 overflow-hidden rounded-2xl border border-[var(--border-glass)] bg-[color-mix(in_oklab,var(--bg-elevated)_84%,transparent)] p-1 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.75)] backdrop-blur-xl"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
            >
              <div className="flex items-center justify-between border-b border-[var(--border-glass)] px-4 py-3">
                <Link
                  href="#top"
                  className="flex items-center gap-2 font-semibold text-[var(--text-main)]"
                  onClick={() => setOpen(false)}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-glass)] bg-[color-mix(in_oklab,var(--bg-elevated)_72%,transparent)] text-xs font-bold">
                    AP
                  </span>
                  <span>{site.name.split(" ")[0]}</span>
                </Link>
                <button
                  type="button"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-glass)] text-[var(--text-muted)] hover:bg-white/[0.06]"
                  aria-label="Close"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col px-2 py-2">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-3 py-3.5 text-[15px] font-medium text-[var(--text-main)] hover:bg-white/[0.05]"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="border-t border-[var(--border-glass)] p-3">
                <Link
                  href="#contact"
                  className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 py-3.5 text-sm font-semibold text-white shadow-[0_0_28px_-6px_rgba(99,102,241,0.5)]"
                  onClick={() => setOpen(false)}
                >
                  Book a Call
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
