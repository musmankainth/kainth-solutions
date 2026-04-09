"use client";

import { motion, useReducedMotion } from "framer-motion";

type RevealType = "char" | "word";

interface TextRevealProps {
  text: string;
  delay?: number;
  type?: RevealType;
  className?: string;
}

export default function TextReveal({
  text,
  delay = 0,
  type = "word",
  className,
}: TextRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const segments = type === "char" ? text.split("") : text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion
          ? 0
          : type === "char"
            ? 0.03
            : 0.08,
        delayChildren: delay,
      },
    },
  };

  const segmentVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
      rotateX: shouldReduceMotion ? 0 : 90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.4,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className={className}
      aria-label={text}
      style={{ display: "inline-flex", flexWrap: "wrap", perspective: "600px" }}
    >
      {segments.map((segment, index) => (
        <motion.span
          key={`${segment}-${index}`}
          variants={segmentVariants}
          style={{
            display: "inline-block",
            willChange: "transform, opacity",
            transformOrigin: "bottom",
          }}
          aria-hidden="true"
        >
          {segment}
          {type === "word" && index < segments.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}
