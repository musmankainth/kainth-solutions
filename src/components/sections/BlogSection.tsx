"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";
import StaggerChildren from "@/components/animations/StaggerChildren";
import FadeIn from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: {
    name: string;
    initials: string;
  };
  gradientFrom: string;
  gradientTo: string;
}

const posts: BlogPost[] = [
  {
    slug: "10-web-design-trends-2025",
    title: "10 Web Design Trends Dominating 2025",
    excerpt:
      "Discover the latest web design trends that are shaping the digital landscape, from AI-driven interfaces to immersive 3D experiences.",
    category: "Design",
    date: "2025-01-15",
    author: { name: "Sarah Chen", initials: "SC" },
    gradientFrom: "from-blue-900",
    gradientTo: "to-teal-600",
  },
  {
    slug: "why-your-business-needs-mobile-app-2025",
    title: "Why Your Business Needs a Mobile App in 2025",
    excerpt:
      "Mobile apps are no longer a luxury — they're a necessity. Learn why investing in a mobile app can drive growth and customer engagement.",
    category: "Mobile",
    date: "2025-02-03",
    author: { name: "James Patel", initials: "JP" },
    gradientFrom: "from-teal-600",
    gradientTo: "to-blue-900",
  },
  {
    slug: "complete-guide-seo-small-businesses",
    title: "The Complete Guide to SEO for Small Businesses",
    excerpt:
      "A step-by-step guide to improving your search engine rankings and driving organic traffic to your small business website.",
    category: "Marketing",
    date: "2025-02-20",
    author: { name: "Emily Kainth", initials: "EK" },
    gradientFrom: "from-orange-500",
    gradientTo: "to-red-500",
  },
];

const categoryVariant: Record<string, "primary" | "secondary" | "accent"> = {
  Design: "primary",
  Mobile: "secondary",
  Marketing: "accent",
};

export default function BlogSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950 lg:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            badge="Blog"
            title="Latest From Our Blog"
            description="Insights, tips, and trends from our team of digital experts."
          />
        </FadeIn>

        <StaggerChildren
          staggerDelay={0.15}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map((post) => (
            <Card key={post.slug} variant="bordered" hover>
              <Link href={`/blog/${post.slug}`} className="group block">
                {/* Gradient placeholder image */}
                <div
                  className={`relative mb-5 h-48 overflow-hidden rounded-xl bg-gradient-to-br ${post.gradientFrom} ${post.gradientTo}`}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <div className="h-32 w-32 rounded-full border-4 border-white" />
                  </div>
                  <div className="absolute top-3 left-3">
                    <Badge
                      variant={categoryVariant[post.category] ?? "primary"}
                      size="sm"
                    >
                      {post.category}
                    </Badge>
                  </div>
                </div>

                {/* Date */}
                <div className="mb-2 flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                  <Calendar className="h-3.5 w-3.5" />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-900 dark:text-white dark:group-hover:text-blue-400 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-900 transition-colors group-hover:text-teal-600 dark:text-blue-400 dark:group-hover:text-teal-400">
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>

                {/* Author */}
                <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-4 dark:border-gray-800">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${post.gradientFrom} ${post.gradientTo} text-xs font-bold text-white`}
                  >
                    {post.author.initials}
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {post.author.name}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <Button href="/blog" variant="outline" size="lg">
              View All Articles
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
