"use client";

import { useEffect, useRef } from "react";
import {
  useMotionValue,
  useTransform,
  animate,
  useInView,
  useReducedMotion,
  motion,
} from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({
  target,
  duration = 2,
  suffix = "",
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  // Trigger as soon as any part of the counter enters the viewport. This also
  // fires on mount for above-the-fold stats (e.g. the hero on mobile), where a
  // negative margin would otherwise sit in a dead-zone and never animate.
  const isInView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion();

  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, target, {
      duration: shouldReduceMotion ? 0 : duration,
      ease: [0, 0, 0.2, 1] as [number, number, number, number],
    });

    return () => controls.stop();
  }, [isInView, target, duration, motionValue, shouldReduceMotion]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${latest}${suffix}`;
      }
    });

    return () => unsubscribe();
  }, [rounded, suffix]);

  return (
    <motion.span ref={ref} className={className}>
      0{suffix}
    </motion.span>
  );
}
