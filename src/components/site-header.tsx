"use client";

import { site, nav } from "@/lib/content";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
          scrolled
            ? "border-white/[0.08] bg-[color-mix(in_oklab,var(--bg-deep)_92%,transparent)] backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-5 py-4 sm:gap-4 sm:px-8 lg:px-10">
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
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-[13px] font-medium text-zinc-400 transition-colors hover:bg-white/[0.05] hover:text-white xl:px-3.5"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2">
            <Link
              href="#contact"
              className="btn-blue-glow inline-flex shrink-0 px-3 py-2 text-[11px] font-semibold sm:px-4 sm:text-sm"
            >
              Get in touch
            </Link>
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
              className="fixed inset-0 z-[59] cursor-default bg-black/65 backdrop-blur-[10px] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              key="mobile-nav-sheet"
              data-site-nav
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              className="fixed inset-x-0 top-0 z-[60] flex max-h-[min(88vh,720px)] flex-col overflow-hidden rounded-b-[1.75rem] border-b border-white/[0.1] bg-[#0a0a0a]/[0.98] shadow-[0_28px_70px_-28px_rgba(0,0,238,0.45)] backdrop-blur-xl lg:hidden"
              initial={{ y: "-105%" }}
              animate={{ y: 0 }}
              exit={{ y: "-105%" }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              style={{ paddingTop: "env(safe-area-inset-top)" }}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,85,254,0.14),transparent_65%)]" />

              <div className="relative flex shrink-0 items-center justify-between gap-3 border-b border-white/[0.08] px-5 pb-4 pt-4">
                <Link
                  href="#top"
                  className="flex min-w-0 items-center gap-3 font-semibold tracking-tight text-white"
                  onClick={() => setOpen(false)}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/12 bg-black/40 text-sm font-bold shadow-inner backdrop-blur-sm">
                    AP
                  </span>
                  <span className="truncate text-base">{site.name.split(" ")[0]}</span>
                </Link>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/12 bg-white/[0.06] text-white backdrop-blur-sm transition hover:bg-white/[0.1]"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="relative flex min-h-0 flex-1 flex-col gap-0.5 overflow-y-auto overscroll-contain px-5 py-4">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + i * 0.035, duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={item.href}
                      className="block rounded-xl px-1 py-3 text-[1.05rem] font-medium tracking-tight text-white transition hover:bg-white/[0.06] active:bg-white/[0.09]"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="relative shrink-0 border-t border-white/[0.08] px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4">
                <Link
                  href="#contact"
                  className="btn-blue-glow flex w-full justify-center rounded-xl py-3.5 text-[0.9375rem] font-semibold shadow-[0_0_36px_-8px_rgba(0,0,238,0.65)]"
                  onClick={() => setOpen(false)}
                >
                  Get in touch
                </Link>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
