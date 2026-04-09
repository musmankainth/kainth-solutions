import React from "react";
import { cn } from "@/lib/utils";

const sizeStyles = {
  narrow: "max-w-4xl",
  default: "max-w-7xl",
  wide: "max-w-screen-2xl",
} as const;

type ContainerSize = keyof typeof sizeStyles;

export interface ContainerProps {
  size?: ContainerSize;
  className?: string;
  children: React.ReactNode;
}

export function Container({
  size = "default",
  className,
  children,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeStyles[size],
        className
      )}
    >
      {children}
    </div>
  );
}
