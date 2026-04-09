"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

interface SlideInProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

const getDirectionOffset = (
  direction: Direction,
  distance: number
): { x: number; y: number } => {
  switch (direction) {
    case "up":
      return { x: 0, y: distance };
    case "down":
      return { x: 0, y: -distance };
    case "left":
      return { x: distance, y: 0 };
    case "right":
      return { x: -distance, y: 0 };
  }
};

export default function SlideIn({
  children,
  direction = "left",
  delay = 0,
  duration = 0.8,
  distance = 100,
  className,
}: SlideInProps) {
  const shouldReduceMotion = useReducedMotion();

  const offset = getDirectionOffset(direction, distance);

  const variants = {
    hidden: {
      opacity: 0,
      ...(shouldReduceMotion
        ? {}
        : {
            x: offset.x,
            y: offset.y,
          }),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            type: "spring" as const,
            stiffness: 100,
            damping: 30,
            delay,
            duration,
          },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}
