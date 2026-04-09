"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";

interface TechItem {
  name: string;
  color: string;
}

interface TechCategory {
  label: string;
  items: TechItem[];
}

const techStack: TechCategory[] = [
  {
    label: "Frontend",
    items: [
      { name: "React", color: "from-cyan-400 to-blue-500" },
      { name: "Next.js", color: "from-gray-700 to-gray-900 dark:from-gray-200 dark:to-white" },
      { name: "Vue.js", color: "from-green-400 to-emerald-500" },
      { name: "TypeScript", color: "from-blue-500 to-blue-700" },
      { name: "Tailwind CSS", color: "from-sky-400 to-cyan-500" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", color: "from-green-500 to-green-700" },
      { name: "Python", color: "from-yellow-400 to-blue-500" },
      { name: "Django", color: "from-green-700 to-green-900" },
      { name: "Express", color: "from-gray-500 to-gray-700" },
      { name: "GraphQL", color: "from-pink-500 to-purple-600" },
    ],
  },
  {
    label: "Mobile",
    items: [
      { name: "React Native", color: "from-cyan-400 to-blue-600" },
      { name: "Flutter", color: "from-sky-400 to-blue-600" },
      { name: "Swift", color: "from-orange-500 to-red-500" },
      { name: "Kotlin", color: "from-purple-500 to-indigo-600" },
    ],
  },
  {
    label: "CMS",
    items: [
      { name: "WordPress", color: "from-blue-500 to-indigo-600" },
      { name: "Shopify", color: "from-green-500 to-lime-500" },
      { name: "Sanity", color: "from-red-500 to-orange-500" },
      { name: "Strapi", color: "from-indigo-500 to-purple-600" },
    ],
  },
  {
    label: "Cloud",
    items: [
      { name: "AWS", color: "from-orange-400 to-yellow-500" },
      { name: "Google Cloud", color: "from-blue-400 to-red-400" },
      { name: "Firebase", color: "from-amber-400 to-orange-500" },
      { name: "Vercel", color: "from-gray-700 to-gray-900 dark:from-gray-200 dark:to-white" },
      { name: "Docker", color: "from-blue-400 to-cyan-500" },
    ],
  },
  {
    label: "Marketing",
    items: [
      { name: "Google Analytics", color: "from-orange-400 to-yellow-500" },
      { name: "Google Ads", color: "from-blue-500 to-green-500" },
      { name: "Meta Ads", color: "from-blue-600 to-indigo-600" },
      { name: "Mailchimp", color: "from-yellow-400 to-amber-500" },
      { name: "HubSpot", color: "from-orange-500 to-red-500" },
    ],
  },
];

// Duplicate items for seamless infinite scroll
function MarqueeRow({
  items,
  direction = "left",
  speed = 30,
}: {
  items: TechItem[];
  direction?: "left" | "right";
  speed?: number;
}) {
  const doubled = [...items, ...items];
  const totalWidth = items.length * 180; // approximate item width + gap

  return (
    <div className="relative overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-16 bg-gradient-to-r from-white dark:from-gray-950" />
      <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-16 bg-gradient-to-l from-white dark:from-gray-950" />

      <motion.div
        className="flex gap-4"
        animate={{
          x: direction === "left" ? [0, -totalWidth] : [-totalWidth, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {doubled.map((item, i) => (
          <TechCard key={`${item.name}-${i}`} item={item} />
        ))}
      </motion.div>
    </div>
  );
}

function TechCard({ item }: { item: TechItem }) {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="group relative flex-shrink-0 cursor-default"
    >
      <div
        className={cn(
          "flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3.5 shadow-sm transition-all duration-300",
          "hover:border-transparent hover:shadow-lg",
          "dark:border-gray-700 dark:bg-gray-900 dark:hover:border-transparent dark:hover:shadow-blue-500/10"
        )}
      >
        {/* Gradient dot */}
        <span
          className={cn(
            "h-3 w-3 flex-shrink-0 rounded-full bg-gradient-to-br",
            item.color
          )}
        />
        <span className="whitespace-nowrap text-sm font-semibold text-gray-800 dark:text-gray-200">
          {item.name}
        </span>
      </div>

      {/* Glow on hover */}
      <div
        className={cn(
          "pointer-events-none absolute -inset-0.5 rounded-xl bg-gradient-to-br opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-20",
          item.color
        )}
      />
    </motion.div>
  );
}

export default function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="relative overflow-hidden bg-white py-20 sm:py-28 dark:bg-gray-950"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            badge="Technologies"
            title="Our Tech Arsenal"
            description="We leverage the latest technologies and frameworks to build fast, scalable, and future-proof digital products."
          />
        </FadeIn>

        <div className="space-y-10">
          {techStack.map((category, catIndex) => (
            <FadeIn key={category.label} delay={catIndex * 0.08}>
              <div>
                {/* Category Label */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-sm font-bold tracking-wide text-gray-900 uppercase dark:text-white">
                    {category.label}
                  </span>
                  <span className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
                </div>

                {/* Marquee for wider viewports, grid for mobile */}
                <div className="hidden md:block">
                  <MarqueeRow
                    items={category.items}
                    direction={catIndex % 2 === 0 ? "left" : "right"}
                    speed={25 + catIndex * 3}
                  />
                </div>

                {/* Static grid on mobile */}
                <div className="flex flex-wrap gap-3 md:hidden">
                  {category.items.map((item) => (
                    <TechCard key={item.name} item={item} />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
