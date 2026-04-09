"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Dumbbell,
  Leaf,
  Cloud,
  Plane,
  Sparkles,
  HeartPulse,
  GraduationCap,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";

type Category = "All" | "Web" | "Mobile" | "Marketing";

interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: Category;
  description: string;
  tech: string[];
  gradient: string;
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    slug: "luxe-living",
    title: "Luxe Living",
    subtitle: "Real Estate Platform",
    category: "Web",
    description:
      "A premium real estate platform with virtual tours, advanced search filters, and seamless agent-client communication.",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    gradient: "from-blue-600 to-indigo-700",
    icon: <Home className="h-8 w-8" />,
  },
  {
    slug: "fittrack-pro",
    title: "FitTrack Pro",
    subtitle: "Fitness App",
    category: "Mobile",
    description:
      "A comprehensive fitness tracking app with personalized workout plans, nutrition logging, and progress analytics.",
    tech: ["React Native", "Firebase"],
    gradient: "from-emerald-500 to-teal-600",
    icon: <Dumbbell className="h-8 w-8" />,
  },
  {
    slug: "greengrow",
    title: "GreenGrow",
    subtitle: "Organic eCommerce",
    category: "Web",
    description:
      "An eco-friendly eCommerce store for organic products with subscription boxes and farm-to-table tracking.",
    tech: ["Shopify", "Custom Theme"],
    gradient: "from-green-500 to-emerald-600",
    icon: <Leaf className="h-8 w-8" />,
  },
  {
    slug: "cloudsync",
    title: "CloudSync",
    subtitle: "SaaS Dashboard",
    category: "Web",
    description:
      "A powerful SaaS dashboard for real-time data synchronization, team collaboration, and workflow automation.",
    tech: ["React", "AWS", "GraphQL"],
    gradient: "from-sky-500 to-blue-600",
    icon: <Cloud className="h-8 w-8" />,
  },
  {
    slug: "travelbuddy",
    title: "TravelBuddy",
    subtitle: "Travel App",
    category: "Mobile",
    description:
      "An intelligent travel companion app with itinerary planning, local recommendations, and offline map support.",
    tech: ["Flutter", "Google Maps API"],
    gradient: "from-orange-500 to-rose-500",
    icon: <Plane className="h-8 w-8" />,
  },
  {
    slug: "sparkbrand",
    title: "SparkBrand",
    subtitle: "Brand Growth Campaign",
    category: "Marketing",
    description:
      "A full-funnel digital marketing campaign that boosted brand visibility by 300% through SEO and paid advertising.",
    tech: ["SEO", "Google Ads", "Social"],
    gradient: "from-purple-500 to-pink-500",
    icon: <Sparkles className="h-8 w-8" />,
  },
  {
    slug: "healthhub",
    title: "HealthHub",
    subtitle: "Telemedicine Platform",
    category: "Web",
    description:
      "A HIPAA-compliant telemedicine platform with video consultations, e-prescriptions, and patient records management.",
    tech: ["Next.js", "React Native"],
    gradient: "from-rose-500 to-red-600",
    icon: <HeartPulse className="h-8 w-8" />,
  },
  {
    slug: "edulearn",
    title: "EduLearn",
    subtitle: "EdTech Platform",
    category: "Web",
    description:
      "An interactive learning platform with live classes, progress tracking, certifications, and payment integration.",
    tech: ["Vue.js", "Django", "Stripe"],
    gradient: "from-amber-500 to-orange-600",
    icon: <GraduationCap className="h-8 w-8" />,
  },
];

const categories: Category[] = ["All", "Web", "Mobile", "Marketing"];

const categoryColors: Record<Category, "primary" | "secondary" | "accent" | "outline"> = {
  All: "primary",
  Web: "primary",
  Mobile: "secondary",
  Marketing: "accent",
};

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-gray-50 py-20 sm:py-28 dark:bg-gray-950"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            badge="Our Work"
            title="Featured Projects"
            description="Explore a selection of projects where we turned ambitious ideas into high-performing digital products."
          />
        </FadeIn>

        {/* Filter Tabs */}
        <FadeIn delay={0.1}>
          <div className="mb-12 flex justify-center">
            <div className="inline-flex gap-1 rounded-xl bg-white p-1.5 shadow-sm dark:bg-gray-800">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "relative cursor-pointer rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors duration-200",
                    activeCategory === cat
                      ? "text-white"
                      : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                  )}
                >
                  {activeCategory === cat && (
                    <motion.span
                      layoutId="portfolio-tab"
                      className="absolute inset-0 rounded-lg bg-blue-900 dark:bg-blue-700"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  opacity: { duration: 0.3 },
                  layout: { type: "spring", stiffness: 300, damping: 30 },
                }}
              >
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group block h-full"
                >
                  <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900">
                    {/* Gradient Header with Icon */}
                    <div
                      className={cn(
                        "relative flex h-48 items-center justify-center bg-gradient-to-br",
                        project.gradient
                      )}
                    >
                      <div className="text-white/80 transition-transform duration-300 group-hover:scale-110">
                        {project.icon}
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/40">
                        <span className="translate-y-4 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 dark:bg-gray-800 dark:text-white">
                          <span className="inline-flex items-center gap-1.5">
                            View Case Study
                            <ExternalLink className="h-3.5 w-3.5" />
                          </span>
                        </span>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-3 right-3">
                        <Badge
                          variant={categoryColors[project.category]}
                          size="sm"
                          className="bg-white/20 text-white backdrop-blur-sm"
                        >
                          {project.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-primary-600 dark:text-blue-400">
                        {project.subtitle}
                      </p>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                        {project.description}
                      </p>

                      {/* Tech Tags */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <FadeIn delay={0.2}>
          <div className="mt-14 text-center">
            <Button href="/portfolio" variant="outline" size="lg">
              View All Projects
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
