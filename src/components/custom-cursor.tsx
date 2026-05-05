"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(pointer: fine)").matches
      : false,
  );
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 500, damping: 35, mass: 0.2 });
  const smoothY = useSpring(y, { stiffness: 500, damping: 35, mass: 0.2 });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const sync = () => setEnabled(mq.matches);
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      const el = event.target instanceof Element ? event.target : null;
      // Never show "View" over site navigation (desktop pill + mobile drawer).
      if (el?.closest("[data-site-nav]")) {
        setHovering(false);
        return;
      }
      // Only Coding Profiles cards (see profiles section).
      setHovering(!!el?.closest("[data-profile-card]"));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden lg:flex"
      style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
      animate={{
        width: hovering ? 132 : 22,
        height: hovering ? 42 : 22,
        borderRadius: hovering ? 999 : 999,
        backgroundColor: hovering ? "rgba(15,23,42,0.92)" : "rgba(0,0,0,0)",
        borderColor: hovering ? "rgba(99,102,241,0.55)" : "rgba(255,255,255,0.65)",
      }}
      transition={{ type: "spring", stiffness: 250, damping: 24 }}
    >
      <motion.div
        className="flex w-full items-center justify-center gap-2 overflow-hidden text-xs font-medium tracking-wide text-slate-100"
        animate={{ opacity: hovering ? 1 : 0 }}
      >
        View
        <ArrowUpRight className="h-3.5 w-3.5" />
      </motion.div>
    </motion.div>
  );
}
