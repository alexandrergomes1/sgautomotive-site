"use client";

import { motion, useReducedMotion } from "framer-motion";

// Shared hook — reads prefers-reduced-motion from OS/browser
function useMotion(delay: number, duration: number) {
  const reduce = useReducedMotion();
  return {
    transition: reduce
      ? { duration: 0, delay: 0 }
      : { duration, delay, ease: "easeOut" as const },
    shouldReduce: !!reduce,
  };
}

export function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { transition, shouldReduce } = useMotion(delay, 0.5);
  return (
    <motion.div
      initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
      whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideIn({
  children,
  from = "left",
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  from?: "left" | "right";
  delay?: number;
  className?: string;
}) {
  const { transition, shouldReduce } = useMotion(delay, 0.55);
  return (
    <motion.div
      initial={shouldReduce ? {} : { opacity: 0, x: from === "left" ? -24 : 24 }}
      whileInView={shouldReduce ? {} : { opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Per-item animation — delay passed from RSC parent's map index (i * 0.07)
export function AnimateItem({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { transition, shouldReduce } = useMotion(delay, 0.45);
  return (
    <motion.div
      initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
      whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Scale-in for stat/number cards
export function ScaleIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { transition, shouldReduce } = useMotion(delay, 0.4);
  return (
    <motion.div
      initial={shouldReduce ? {} : { opacity: 0, scale: 0.95 }}
      whileInView={shouldReduce ? {} : { opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
