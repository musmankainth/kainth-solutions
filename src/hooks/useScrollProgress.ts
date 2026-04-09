"use client";

import { useScroll, type MotionValue } from "framer-motion";
import { type RefObject } from "react";

interface UseScrollProgressOptions {
  /** Target element ref. If omitted, tracks the full page scroll. */
  target?: RefObject<HTMLElement | null>;
  /** Scroll offset range. Defaults to page-level ["start start", "end end"]. */
  offset?: ["start start" | "start end" | "end start" | "end end", "start start" | "start end" | "end start" | "end end"];
}

interface UseScrollProgressReturn {
  /** Scroll progress from 0 to 1. */
  progress: MotionValue<number>;
  /** Raw scrollY motion value (page-level only). */
  scrollY: MotionValue<number>;
}

export default function useScrollProgress(
  options?: UseScrollProgressOptions
): UseScrollProgressReturn {
  const { scrollYProgress, scrollY } = useScroll({
    target: options?.target,
    offset: options?.offset ?? (["start start", "end end"] as const),
  });

  return {
    progress: scrollYProgress,
    scrollY,
  };
}
