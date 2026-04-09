"use client";

import React from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

function FloatingCircle({
  size,
  x,
  y,
  delay,
  duration,
}: {
  size: number;
  x: string;
  y: string;
  delay: number;
  duration: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full border border-white/20 bg-white/5"
      style={{ width: size, height: size, left: x, top: y }}
      animate={{
        y: [0, -20, 0],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function FloatingDot({
  x,
  y,
  delay,
}: {
  x: string;
  y: string;
  delay: number;
}) {
  return (
    <motion.div
      className="absolute h-2 w-2 rounded-full bg-white/30"
      style={{ left: x, top: y }}
      animate={{
        y: [0, -12, 0],
        x: [0, 6, 0],
        opacity: [0.2, 0.7, 0.2],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 py-20 lg:py-28">
      {/* Floating decorative elements */}
      <FloatingCircle size={120} x="5%" y="10%" delay={0} duration={5} />
      <FloatingCircle size={80} x="85%" y="15%" delay={1} duration={4} />
      <FloatingCircle size={60} x="75%" y="65%" delay={0.5} duration={6} />
      <FloatingCircle size={100} x="10%" y="70%" delay={1.5} duration={4.5} />

      <FloatingDot x="20%" y="25%" delay={0} />
      <FloatingDot x="60%" y="10%" delay={0.8} />
      <FloatingDot x="40%" y="80%" delay={1.2} />
      <FloatingDot x="90%" y="50%" delay={0.4} />
      <FloatingDot x="15%" y="55%" delay={1.6} />
      <FloatingDot x="70%" y="85%" delay={2} />

      <Container size="narrow" className="relative z-10">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100/80">
              Let&apos;s build something amazing together. From concept to launch,
              we&apos;ll bring your vision to life with cutting-edge technology and
              stunning design.
            </p>
            <div className="mt-10">
              <Button
                href="/contact"
                size="lg"
                className="bg-white text-blue-900 hover:bg-gray-100 dark:bg-white dark:text-blue-900 dark:hover:bg-gray-100 shadow-lg shadow-black/20"
              >
                Start Your Project
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
