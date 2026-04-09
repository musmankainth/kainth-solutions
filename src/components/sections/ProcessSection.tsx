"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  Target,
  Palette,
  Code,
  CheckCircle,
  Rocket,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ProcessStep {
  number: number;
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  iconBg: string;
}

const steps: ProcessStep[] = [
  {
    number: 1,
    icon: Search,
    title: "Discovery",
    description:
      "We dive deep into your business, audience, and goals to uncover opportunities and define the project scope.",
    color: "text-blue-600 dark:text-blue-400",
    iconBg:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400",
  },
  {
    number: 2,
    icon: Target,
    title: "Strategy",
    description:
      "We craft a tailored roadmap with clear milestones, KPIs, and a technical plan aligned with your vision.",
    color: "text-teal-600 dark:text-teal-400",
    iconBg:
      "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-400",
  },
  {
    number: 3,
    icon: Palette,
    title: "Design",
    description:
      "Our designers create intuitive interfaces and stunning visuals that resonate with your target audience.",
    color: "text-orange-600 dark:text-orange-400",
    iconBg:
      "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400",
  },
  {
    number: 4,
    icon: Code,
    title: "Development",
    description:
      "Our engineers build your solution with clean, scalable code using modern technologies and best practices.",
    color: "text-blue-600 dark:text-blue-400",
    iconBg:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400",
  },
  {
    number: 5,
    icon: CheckCircle,
    title: "Testing",
    description:
      "Rigorous QA across devices and scenarios ensures a flawless, performant experience before going live.",
    color: "text-teal-600 dark:text-teal-400",
    iconBg:
      "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-400",
  },
  {
    number: 6,
    icon: Rocket,
    title: "Launch",
    description:
      "We deploy with precision, handling everything from infrastructure setup to monitoring for a smooth launch.",
    color: "text-orange-600 dark:text-orange-400",
    iconBg:
      "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400",
  },
  {
    number: 7,
    icon: TrendingUp,
    title: "Growth",
    description:
      "Post-launch, we optimize performance, track analytics, and iterate to drive continuous growth and improvement.",
    color: "text-blue-600 dark:text-blue-400",
    iconBg:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

function StepCard({ step, isLast }: { step: ProcessStep; isLast: boolean }) {
  const Icon = step.icon;

  return (
    <motion.div variants={stepVariants} className="relative flex flex-col items-center">
      {/* Desktop connecting line */}
      {!isLast && (
        <div className="absolute left-[calc(50%+28px)] top-7 hidden h-0.5 w-[calc(100%-56px)] bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-800 lg:block" />
      )}

      {/* Mobile connecting line */}
      {!isLast && (
        <div className="absolute left-7 top-[56px] h-[calc(100%-28px)] w-0.5 bg-gradient-to-b from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-800 lg:hidden" />
      )}

      {/* Step content - horizontal on mobile, vertical on desktop */}
      <div className="flex w-full items-start gap-5 lg:flex-col lg:items-center lg:text-center">
        {/* Icon circle */}
        <div className="relative z-10 shrink-0">
          <div
            className={cn(
              "flex h-14 w-14 items-center justify-center rounded-full shadow-md",
              step.iconBg
            )}
          >
            <Icon className="h-6 w-6" />
          </div>
          {/* Step number badge */}
          <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-900 text-xs font-bold text-white dark:bg-blue-600">
            {step.number}
          </span>
        </div>

        {/* Text */}
        <div className="min-w-0 pb-10 lg:pb-0">
          <h3
            className={cn(
              "mb-1 text-lg font-bold",
              step.color
            )}
          >
            {step.title}
          </h3>
          <p className="max-w-xs text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProcessSection() {
  return (
    <section className="bg-white py-20 dark:bg-gray-950 lg:py-28">
      <Container>
        <SectionHeading
          badge="Our Process"
          title="How We Work"
          description="A proven, transparent process that takes your project from initial concept to successful delivery and beyond."
          align="center"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="grid gap-0 lg:grid-cols-7 lg:gap-4"
        >
          {steps.map((step, index) => (
            <StepCard
              key={step.title}
              step={step}
              isLast={index === steps.length - 1}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
