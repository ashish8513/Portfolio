"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const defaultVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/** Fade + slight rise on scroll; respects prefers-reduced-motion. */
export function MotionReveal({
  children,
  className,
  delay = 0,
}: MotionRevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay }}
      variants={defaultVariants}
    >
      {children}
    </motion.div>
  );
}
