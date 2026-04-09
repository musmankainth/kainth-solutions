import React from "react";
import { cn } from "@/lib/utils";

const variantStyles = {
  primary:
    "bg-blue-900/10 text-blue-900 dark:bg-blue-400/15 dark:text-blue-400",
  secondary:
    "bg-teal-600/10 text-teal-700 dark:bg-teal-400/15 dark:text-teal-400",
  accent:
    "bg-orange-500/10 text-orange-600 dark:bg-orange-400/15 dark:text-orange-400",
  outline:
    "bg-transparent border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300",
} as const;

const sizeStyles = {
  sm: "px-2.5 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
} as const;

type BadgeVariant = keyof typeof variantStyles;
type BadgeSize = keyof typeof sizeStyles;

export interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  children: React.ReactNode;
}

export function Badge({
  variant = "primary",
  size = "md",
  className,
  children,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
