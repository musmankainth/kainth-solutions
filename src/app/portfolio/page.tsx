"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren from "@/components/animations/StaggerChildren";
import CTASection from "@/components/sections/CTASection";

const categories = [
  "All",
  "Web Development",
  "Mobile Apps",
  "Digital Marketing",
  "E-Commerce",
];

const projects = [
  {
    slug: "ecommerce-platform-redesign",
    title: "E-Commerce Platform Redesign",
    client: "Urban Threads",
    category: "E-Commerce",
    description:
      "Complete redesign and rebuild of a fashion e-commerce platform, resulting in a 156% increase in conversion rate and 40% faster page loads.",
    tags: ["Next.js", "Shopify", "Tailwind CSS"],
    gradient: "from-blue-500 to-indigo-600",
    featured: true,
  },
  {
    slug: "fintech-mobile-app",
    title: "FinTech Mobile App",
    client: "PayFlow",
    category: "Mobile Apps",
    description:
      "Cross-platform mobile banking app with biometric auth, real-time transactions, and investment tracking for over 200K active users.",
    tags: ["React Native", "Node.js", "PostgreSQL"],
    gradient: "from-teal-400 to-cyan-600",
    featured: true,
  },
  {
    slug: "healthcare-portal",
    title: "Healthcare Patient Portal",
    client: "MedConnect",
    category: "Web Development",
    description:
      "HIPAA-compliant patient portal with appointment scheduling, telemedicine integration, and secure medical records access.",
    tags: ["React", "Express", "MongoDB"],
    gradient: "from-emerald-400 to-green-600",
    featured: true,
  },
  {
    slug: "restaurant-chain-website",
    title: "Restaurant Chain Website",
    client: "Savory Kitchen",
    category: "Web Development",
    description:
      "Multi-location restaurant website with online ordering, dynamic menu management, and a 90+ Lighthouse performance score.",
    tags: ["Next.js", "Sanity CMS", "Stripe"],
    gradient: "from-orange-400 to-red-500",
    featured: false,
  },
  {
    slug: "fitness-tracking-app",
    title: "Fitness Tracking App",
    client: "FitPulse",
    category: "Mobile Apps",
    description:
      "Feature-rich fitness app with AI-powered workout plans, progress tracking, social challenges, and wearable device integration.",
    tags: ["Flutter", "Firebase", "TensorFlow Lite"],
    gradient: "from-purple-400 to-pink-500",
    featured: true,
  },
  {
    slug: "real-estate-platform",
    title: "Real Estate Platform",
    client: "HomeVista",
    category: "Web Development",
    description:
      "Property listing platform with virtual tours, mortgage calculators, and an AI-powered recommendation engine serving 50K monthly visitors.",
    tags: ["Next.js", "Prisma", "AWS"],
    gradient: "from-amber-400 to-orange-600",
    featured: false,
  },
  {
    slug: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    client: "DataPulse",
    category: "Web Development",
    description:
      "Real-time analytics dashboard for SaaS metrics with custom widgets, automated reporting, and team collaboration features.",
    tags: ["React", "D3.js", "GraphQL"],
    gradient: "from-sky-400 to-blue-600",
    featured: true,
  },
  {
    slug: "nonprofit-campaign",
    title: "Nonprofit Digital Campaign",
    client: "GreenFuture",
    category: "Digital Marketing",
    description:
      "Multi-channel awareness campaign that reached 2.5M people, generated 45K email signups, and raised $320K in donations within 3 months.",
    tags: ["Google Ads", "Meta Ads", "SEO"],
    gradient: "from-lime-400 to-emerald-600",
    featured: false,
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-24 pb-16 dark:bg-gray-950">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-3xl dark:bg-blue-900/15" />
          <div className="absolute -right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-teal-100/40 blur-3xl dark:bg-teal-900/10" />
        </div>
        <Container className="relative z-10">
          <FadeIn direction="up">
            <Badge variant="primary" className="mb-6">
              Our Work
            </Badge>
            <h1 className="mb-6 max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
              Projects That Speak{" "}
              <span className="text-blue-900 dark:text-blue-400">
                for Themselves
              </span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Explore our portfolio of successful digital products, from
              e-commerce platforms to mobile apps and marketing campaigns.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Filterable Grid */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <Container>
          {/* Filter Buttons */}
          <FadeIn direction="up">
            <div className="mb-12 flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-colors cursor-pointer ${
                    activeCategory === cat
                      ? "bg-blue-900 text-white dark:bg-blue-600"
                      : "bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Project Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, index) => (
              <FadeIn key={project.slug} direction="up" delay={index * 0.05}>
                <Link href={`/portfolio/${project.slug}`} className="group block">
                  <Card variant="bordered" hover className="overflow-hidden p-0">
                    {/* Gradient Image Placeholder */}
                    <div
                      className={`flex h-48 items-center justify-center bg-gradient-to-br ${project.gradient}`}
                    >
                      <span className="text-3xl font-bold text-white/80">
                        {project.client}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="mb-2 flex items-center gap-2">
                        <Badge variant="outline" size="sm">
                          {project.category}
                        </Badge>
                        {project.featured && (
                          <Badge variant="accent" size="sm">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-900 dark:text-white dark:group-hover:text-blue-400">
                        {project.title}
                      </h3>
                      <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-lg text-gray-500 dark:text-gray-400">
                No projects found in this category.
              </p>
            </div>
          )}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
