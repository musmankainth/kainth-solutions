"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import FadeIn from "@/components/animations/FadeIn";
import CTASection from "@/components/sections/CTASection";
import { formatDate } from "@/lib/utils";

const categories = ["All", "Web Development", "Mobile", "Marketing"];

const posts = [
  {
    slug: "future-of-web-development-2025",
    title: "The Future of Web Development: Trends Shaping 2025 and Beyond",
    excerpt:
      "From server components to edge computing, explore the technologies and patterns that are redefining how we build for the web. Learn what to adopt now and what to watch.",
    category: "Web Development",
    author: {
      name: "Arjun Kainth",
      role: "Founder & CEO",
      gradient: "from-blue-500 to-indigo-600",
    },
    publishedAt: "2025-01-15",
    readingTime: "8 min read",
    gradient: "from-blue-500 to-indigo-600",
    tags: ["Next.js", "React Server Components", "Edge Computing", "AI"],
  },
  {
    slug: "mobile-app-development-guide",
    title:
      "The Complete Guide to Mobile App Development: Native vs Cross-Platform in 2025",
    excerpt:
      "Should you go native or cross-platform? We break down the pros, cons, costs, and ideal use cases for React Native, Flutter, Swift, and Kotlin to help you make the right choice.",
    category: "Mobile",
    author: {
      name: "David Okonkwo",
      role: "Lead Mobile Developer",
      gradient: "from-emerald-400 to-teal-600",
    },
    publishedAt: "2025-02-03",
    readingTime: "12 min read",
    gradient: "from-teal-400 to-cyan-600",
    tags: [
      "React Native",
      "Flutter",
      "iOS",
      "Android",
      "Cross-Platform",
    ],
  },
  {
    slug: "digital-marketing-roi-strategies",
    title:
      "Maximizing Digital Marketing ROI: Data-Driven Strategies That Actually Work",
    excerpt:
      "Stop wasting your marketing budget. Learn the proven frameworks we use to deliver 3x+ ROAS for our clients, from attribution modeling to creative testing.",
    category: "Marketing",
    author: {
      name: "Sofia Rodriguez",
      role: "Head of Digital Marketing",
      gradient: "from-purple-400 to-pink-500",
    },
    publishedAt: "2025-03-10",
    readingTime: "10 min read",
    gradient: "from-orange-400 to-red-500",
    tags: ["SEO", "PPC", "Analytics", "Conversion Optimization"],
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-24 pb-16 dark:bg-gray-950">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-3xl dark:bg-blue-900/15" />
          <div className="absolute -right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-orange-100/40 blur-3xl dark:bg-orange-900/10" />
        </div>
        <Container className="relative z-10">
          <FadeIn direction="up">
            <Badge variant="primary" className="mb-6">
              Blog
            </Badge>
            <h1 className="mb-6 max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
              Insights, Guides &{" "}
              <span className="text-blue-900 dark:text-blue-400">
                Industry Trends
              </span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Practical insights from our team on web development, mobile apps,
              digital marketing, and growing your business in the digital age.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Blog Listing */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <Container>
          {/* Category Filter */}
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

          {/* Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post, index) => (
              <FadeIn key={post.slug} direction="up" delay={index * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <Card
                    variant="bordered"
                    hover
                    className="flex h-full flex-col overflow-hidden p-0"
                  >
                    {/* Gradient Header */}
                    <div
                      className={`flex h-48 items-center justify-center bg-gradient-to-br ${post.gradient} p-6`}
                    >
                      <Badge
                        variant="outline"
                        className="border-white/40 text-white"
                      >
                        {post.category}
                      </Badge>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-900 dark:text-white dark:group-hover:text-blue-400">
                        {post.title}
                      </h2>
                      <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                        {post.excerpt}
                      </p>

                      {/* Author & Meta */}
                      <div className="flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-800">
                        <div className="flex items-center gap-2">
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${post.author.gradient} text-xs font-bold text-white`}
                          >
                            {post.author.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                            {post.author.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                          <span>{formatDate(post.publishedAt)}</span>
                          <span>{post.readingTime}</span>
                        </div>
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
                No posts found in this category.
              </p>
            </div>
          )}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
