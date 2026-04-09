"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { target: 150, suffix: "+", label: "Projects Delivered" },
  { target: 50, suffix: "+", label: "Happy Clients" },
  { target: 8, suffix: "+", label: "Years Experience" },
  { target: 25, suffix: "+", label: "Team Members" },
];

const floatingElements = [
  {
    className:
      "absolute w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500/80 to-blue-700/80",
    style: { top: "8%", left: "12%" },
    animate: { y: [-12, 12, -12], rotate: [0, 5, 0] },
    duration: 6,
  },
  {
    className:
      "absolute w-20 h-20 rounded-full bg-gradient-to-br from-teal-400/70 to-teal-600/70",
    style: { top: "55%", right: "8%" },
    animate: { y: [10, -14, 10], x: [-6, 6, -6] },
    duration: 5,
  },
  {
    className:
      "absolute w-16 h-16 rounded-xl bg-gradient-to-br from-orange-400/75 to-orange-600/75 rotate-12",
    style: { bottom: "15%", left: "20%" },
    animate: { y: [-8, 16, -8], rotate: [12, 20, 12] },
    duration: 7,
  },
  {
    className:
      "absolute w-24 h-24 rounded-3xl border-2 border-blue-400/25 dark:border-blue-500/15",
    style: { top: "30%", right: "20%" },
    animate: { rotate: [0, 360] },
    duration: 25,
  },
  {
    className:
      "absolute w-10 h-10 rounded-full bg-gradient-to-br from-blue-300/60 to-teal-400/60",
    style: { bottom: "35%", right: "30%" },
    animate: { y: [-6, 10, -6], x: [4, -4, 4] },
    duration: 4.5,
  },
  {
    className:
      "absolute w-14 h-14 rounded-lg bg-gradient-to-br from-teal-500/50 to-blue-500/50 rotate-45",
    style: { top: "12%", right: "12%" },
    animate: { y: [8, -10, 8], rotate: [45, 50, 45] },
    duration: 5.5,
  },
];

export default function AboutSection() {
  return (
    <section className="bg-white py-20 dark:bg-gray-950 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Abstract Graphic */}
          <FadeIn direction="left">
            <div className="relative mx-auto aspect-square w-full max-w-lg">
              {/* Background glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100/50 via-teal-50/30 to-orange-50/40 dark:from-blue-900/15 dark:via-teal-900/10 dark:to-orange-900/10" />

              {floatingElements.map((el, index) => (
                <motion.div
                  key={index}
                  className={el.className}
                  style={el.style}
                  animate={el.animate}
                  transition={{
                    duration: el.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}

              {/* Central element */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  className="h-36 w-36 rounded-2xl bg-gradient-to-br from-blue-600 via-teal-500 to-orange-500 shadow-xl sm:h-44 sm:w-44"
                  animate={{ rotate: [0, 3, -3, 0] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="absolute inset-3 rounded-xl bg-white/15 backdrop-blur-sm dark:bg-gray-950/20" />
                </motion.div>
              </div>
            </div>
          </FadeIn>

          {/* Right: Content */}
          <div>
            <FadeIn direction="right" delay={0.1}>
              <Badge variant="primary" size="md" className="mb-4">
                About Us
              </Badge>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
                We&apos;re a Team of Digital Craftsmen
              </h2>
            </FadeIn>

            <FadeIn direction="right" delay={0.3}>
              <div className="mb-8 space-y-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                <p>
                  At Kainth Solutions, we believe that exceptional digital
                  experiences are born at the intersection of creativity and
                  technology. Our team of designers, developers, and strategists
                  work together to bring your boldest ideas to life.
                </p>
                <p>
                  With over eight years of experience serving clients across
                  industries, we&apos;ve honed a process that consistently
                  delivers results. We don&apos;t just build products -- we build
                  partnerships, taking the time to understand your business goals
                  and crafting tailored solutions that drive real, measurable
                  growth.
                </p>
              </div>
            </FadeIn>

            {/* Stats Grid */}
            <FadeIn direction="right" delay={0.4}>
              <div className="mb-8 grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900"
                  >
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">
                      <AnimatedCounter
                        target={stat.target}
                        suffix={stat.suffix}
                        duration={2}
                      />
                    </div>
                    <p className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.5}>
              <Button variant="primary" size="lg" href="/about">
                Learn More About Us
                <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
