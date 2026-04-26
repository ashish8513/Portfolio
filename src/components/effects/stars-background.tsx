"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring } from "framer-motion";
import * as React from "react";

function generateStars(count: number, starColor: string) {
  const shadows: string[] = [];
  for (let i = 0; i < count; i += 1) {
    const x = Math.floor(Math.random() * 3000) - 1500;
    const y = Math.floor(Math.random() * 3000) - 1500;
    shadows.push(`${x}px ${y}px ${starColor}`);
  }
  return shadows.join(", ");
}

function StarLayer({
  count,
  size,
  duration,
  color,
}: {
  count: number;
  size: number;
  duration: number;
  color: string;
}) {
  const boxShadow = React.useMemo(() => generateStars(count, color), [count, color]);

  return (
    <motion.div
      aria-hidden
      animate={{ y: [0, -1500] }}
      transition={{ repeat: Number.POSITIVE_INFINITY, duration, ease: "linear" }}
      className="absolute left-0 top-0 h-[1500px] w-full"
    >
      <div
        className="absolute rounded-full bg-transparent"
        style={{ width: `${size}px`, height: `${size}px`, boxShadow }}
      />
      <div
        className="absolute top-[1500px] rounded-full bg-transparent"
        style={{ width: `${size}px`, height: `${size}px`, boxShadow }}
      />
    </motion.div>
  );
}

type StarsBackgroundProps = {
  children: React.ReactNode;
  className?: string;
};

export function StarsBackground({ children, className }: StarsBackgroundProps) {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const springX = useSpring(offsetX, { stiffness: 55, damping: 18 });
  const springY = useSpring(offsetY, { stiffness: 55, damping: 18 });

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      offsetX.set(-(e.clientX - centerX) * 0.02);
      offsetY.set(-(e.clientY - centerY) * 0.02);
    },
    [offsetX, offsetY],
  );

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(ellipse_at_bottom,_#111827_0%,_#030712_65%)]",
        className,
      )}
      onMouseMove={handleMouseMove}
    >
      <motion.div style={{ x: springX, y: springY }} className="absolute inset-0">
        <StarLayer count={700} size={1} duration={80} color="#cbd5e1" />
        <StarLayer count={250} size={1.5} duration={120} color="#a5b4fc" />
        <StarLayer count={120} size={2.2} duration={170} color="#67e8f9" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
