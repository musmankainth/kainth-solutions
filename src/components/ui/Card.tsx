"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const variantStyles = {
  default:
    "bg-white dark:bg-gray-900 rounded-2xl",
  elevated:
    "bg-white dark:bg-gray-900 rounded-2xl shadow-lg dark:shadow-gray-950/50",
  bordered:
    "bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700",
} as const;

type CardVariant = keyof typeof variantStyles;

export interface CardProps {
  variant?: CardVariant;
  hover?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Card({
  variant = "default",
  hover = false,
  className,
  children,
}: CardProps) {
  return (
    <motion.div
      className={cn(
        "p-6 transition-colors duration-200",
        variantStyles[variant],
        hover && "cursor-pointer",
        className
      )}
      whileHover={
        hover
          ? { y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }
          : undefined
      }
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
