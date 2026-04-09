"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import TextReveal from "@/components/animations/TextReveal";
import FadeIn from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const floatingShapes = [
  {
    className:
      "w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 opacity-80",
    animate: { y: [-20, 20, -20], rotate: [0, 10, 0] },
    duration: 6,
    style: { top: "10%", left: "10%" },
  },
  {
    className:
      "w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 opacity-70",
    animate: { y: [15, -15, 15], x: [-10, 10, -10] },
    duration: 5,
    style: { top: "60%", left: "60%" },
  },
  {
    className:
      "w-20 h-20 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 opacity-75 rotate-45",
    animate: { y: [-15, 25, -15], rotate: [45, 55, 45] },
    duration: 7,
    style: { top: "25%", right: "10%" },
  },
  {
    className:
      "w-12 h-12 rounded-lg bg-gradient-to-br from-blue-300 to-teal-400 opacity-60",
    animate: { y: [10, -20, 10], x: [5, -5, 5] },
    duration: 4,
    style: { bottom: "20%", left: "25%" },
  },
  {
    className:
      "w-32 h-32 rounded-3xl border-2 border-blue-400/30 dark:border-blue-500/20",
    animate: { rotate: [0, 360] },
    duration: 20,
    style: { top: "15%", right: "30%" },
  },
  {
    className:
      "w-10 h-10 rounded-full bg-gradient-to-br from-teal-300 to-blue-500 opacity-50",
    animate: { y: [-10, 15, -10], x: [-8, 8, -8] },
    duration: 5.5,
    style: { bottom: "35%", right: "20%" },
  },
];

const stats = [
  { target: 150, suffix: "+", label: "Projects" },
  { target: 50, suffix: "+", label: "Clients" },
  { target: 98, suffix: "%", label: "Satisfaction" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white dark:bg-gray-950">
      {/* Animated gradient mesh background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-blue-100/60 blur-3xl dark:bg-blue-900/20" />
        <div className="absolute -right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-teal-100/50 blur-3xl dark:bg-teal-900/15" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-orange-100/40 blur-3xl dark:bg-orange-900/10" />
        <motion.div
          className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-200/30 via-teal-200/20 to-orange-200/30 blur-3xl dark:from-blue-800/10 dark:via-teal-800/10 dark:to-orange-800/10"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <Container className="relative z-10 flex min-h-screen items-center pt-20 pb-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            <FadeIn direction="up" delay={0.1}>
              <span className="mb-6 inline-block rounded-full bg-blue-900/10 px-4 py-1.5 text-sm font-semibold text-blue-900 dark:bg-blue-400/15 dark:text-blue-400">
                Digital Agency
              </span>
            </FadeIn>

            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
              <TextReveal
                text="We Build Digital Experiences That Drive Growth"
                delay={0.3}
              />
            </h1>

            <FadeIn direction="up" delay={0.8}>
              <p className="mb-4 max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                From stunning websites to powerful mobile apps and data-driven
                marketing strategies, we craft digital solutions that elevate
                your brand.
              </p>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                Partner with us to transform your vision into measurable
                business results.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={1}>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="lg" href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-1 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" href="/portfolio">
                  View Our Work
                </Button>
              </div>
            </FadeIn>

            {/* Stats Bar */}
            <FadeIn direction="up" delay={1.2}>
              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-gray-200 pt-8 dark:border-gray-800">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
                      <AnimatedCounter
                        target={stat.target}
                        suffix={stat.suffix}
                        duration={2.5}
                      />
                    </div>
                    <p className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right: Abstract Animated Illustration */}
          <div className="relative order-1 flex min-h-[400px] items-center justify-center lg:order-2 lg:min-h-[500px]">
            {floatingShapes.map((shape, index) => (
              <motion.div
                key={index}
                className={`absolute ${shape.className}`}
                style={shape.style}
                animate={shape.animate}
                transition={{
                  duration: shape.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Central glowing orb */}
            <motion.div
              className="relative h-48 w-48 rounded-full bg-gradient-to-br from-blue-500 via-teal-500 to-orange-500 shadow-2xl sm:h-56 sm:w-56"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-2 rounded-full bg-white/20 backdrop-blur-sm dark:bg-gray-950/30" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/50 via-transparent to-orange-500/50 blur-xl" />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
