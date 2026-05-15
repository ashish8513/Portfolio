"use client";

import { HeaderGitHubActions } from "@/components/header-github-actions";
import { site, nav } from "@/lib/content";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const sheetEase = [0.22, 1, 0.36, 1] as const;
const sheetTransition = { duration: 0.32, ease: sheetEase };

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    window.dispatchEvent(new Event("portfolio:lenis-stop"));
    return () => {
      window.dispatchEvent(new Event("portfolio:lenis-start"));
    };
  }, [open]);

  const navLinks = nav.filter((item) => item.label !== "GitHub");

  return (
    <>
      <header
        data-site-nav
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
          scrolled
            ? "border-white/[0.08] bg-[color-mix(in_oklab,var(--bg-deep)_92%,transparent)] backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3.5 sm:gap-4 sm:px-8 sm:py-4 lg:px-10">
          <Link
            href="#top"
            className="flex shrink-0 items-center gap-2.5 font-semibold tracking-tight text-white"
            onClick={() => setOpen(false)}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-[#0a0a0a] text-xs font-bold text-white shadow-inner">
              AP
            </span>
            <span className="hidden text-sm sm:inline">{site.name.split(" ")[0]}</span>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex xl:gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-[13px] font-medium text-zinc-400 transition-colors hover:bg-white/[0.05] hover:text-white xl:px-3.5"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-2 lg:gap-2">
            <HeaderGitHubActions className="hidden lg:flex" />
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#0a0a0a]/90 text-white transition hover:bg-white/[0.06] lg:hidden"
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
          <>
            <motion.button
              key="mobile-nav-backdrop"
              type="button"
              data-site-nav
              aria-label="Close menu"
              className="fixed inset-0 z-[59] cursor-default bg-black/75 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              key="mobile-nav-sheet"
              data-site-nav
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              className="fixed inset-x-0 top-0 z-[60] flex max-h-[min(88vh,720px)] flex-col overflow-hidden rounded-b-[1.75rem] border-b border-white/[0.1] bg-[#0a0a0a] shadow-[0_24px_48px_-16px_rgba(0,0,0,0.65)] will-change-transform transform-gpu lg:hidden"
              initial={reduceMotion ? { opacity: 0 } : { y: "-100%" }}
              animate={reduceMotion ? { opacity: 1 } : { y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { y: "-100%" }}
              transition={reduceMotion ? { duration: 0.15 } : sheetTransition}
              style={{ paddingTop: "env(safe-area-inset-top)" }}
            >
              <div className="relative flex shrink-0 items-center justify-between gap-3 border-b border-white/[0.08] px-5 pb-4 pt-4">
                <Link
                  href="#top"
                  className="flex min-w-0 items-center gap-3 font-semibold tracking-tight text-white"
                  onClick={() => setOpen(false)}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/12 bg-[#131313] text-sm font-bold shadow-inner">
                    AP
                  </span>
                  <span className="truncate text-base">{site.name.split(" ")[0]}</span>
                </Link>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/12 bg-white/[0.06] text-white transition hover:bg-white/[0.1]"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="relative flex min-h-0 flex-1 flex-col gap-0.5 overflow-y-auto overscroll-contain px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] [-webkit-overflow-scrolling:touch]">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-1 py-3 text-[1.05rem] font-medium tracking-tight text-white transition-colors hover:bg-white/[0.06] active:bg-white/[0.09]"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-3 border-t border-white/[0.08] pt-4">
                  <HeaderGitHubActions onNavigate={() => setOpen(false)} />
                </div>
              </nav>

            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
