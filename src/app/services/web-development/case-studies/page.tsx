import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren from "@/components/animations/StaggerChildren";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Web Development Case Studies | Kainth Solutions",
  description: "See real-world examples of successful web development projects. From startups to enterprises, explore our case studies.",
  openGraph: {
    title: "Web Development Case Studies",
    url: "https://kainthsolutions.com/services/web-development/case-studies",
  },
  alternates: {
    canonical: "https://kainthsolutions.com/services/web-development/case-studies",
  },
};

const caseStudies = [
  {
    id: 1,
    title: "Luxe Living - Real Estate Platform",
    category: "SaaS / Real Estate",
    client: "Luxury Real Estate Startup",
    image: "bg-gradient-to-br from-blue-600 to-blue-900",
    results: [
      { label: "Property Listings", value: "10K+" },
      { label: "Monthly Users", value: "50K+" },
      { label: "Conversion Rate", value: "+45%" },
    ],
    challenge:
      "Build a high-performance real estate platform that could handle thousands of listings with advanced filtering and virtual tours.",
    solution:
      "Developed a Next.js-based SaaS platform with TypeScript, PostgreSQL, and Redis. Implemented serverless image optimization and real-time notifications.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "AWS"],
  },
  {
    id: 2,
    title: "CloudSync - SaaS Dashboard",
    category: "Enterprise SaaS",
    client: "Cloud Integration Company",
    image: "bg-gradient-to-br from-purple-600 to-indigo-900",
    results: [
      { label: "API Integrations", value: "30+" },
      { label: "Enterprise Clients", value: "500+" },
      { label: "Uptime", value: "99.99%" },
    ],
    challenge:
      "Create an analytics dashboard that integrates with 30+ third-party APIs and handles millions of data points in real-time.",
    solution:
      "Built with React, GraphQL, and node-based architecture. Implemented WebSocket connections for real-time data and advanced caching strategies.",
    tech: ["React", "GraphQL", "Node.js", "MongoDB", "Docker"],
  },
  {
    id: 3,
    title: "GreenGrow - eCommerce Store",
    category: "eCommerce",
    client: "Organic Products Retailer",
    image: "bg-gradient-to-br from-green-600 to-emerald-900",
    results: [
      { label: "Monthly Revenue", value: "$500K+" },
      { label: "Products", value: "2K+" },
      { label: "Customer Satisfaction", value: "4.8/5★" },
    ],
    challenge:
      "Migrate from WooCommerce to Shopify with custom features for subscription boxes and inventory management.",
    solution:
      "Custom Shopify theme development with Liquid templating, metafields for products, and automated inventory sync.",
    tech: ["Shopify", "Liquid", "React", "Node.js", "GraphQL"],
  },
];

export default function CaseStudies() {
  return (
    <>
      <section className="py-16 lg:py-20">
        <Container>
          <FadeIn>
            <SectionHeading
              badge="Success Stories"
              title="Web Development Case Studies"
              description="Real-world examples of successful projects that delivered measurable business impact."
              align="center"
            />
          </FadeIn>

          <div className="mt-16 space-y-12">
            <StaggerChildren staggerDelay={0.2}>
              {caseStudies.map((study) => (
                <Card
                  key={study.id}
                  className="overflow-hidden"
                  hover
                >
                  <div className="grid gap-8 md:grid-cols-2">
                    {/* Image */}
                    <div
                      className={`${study.image} flex items-center justify-center min-h-[300px] rounded-lg`}
                    >
                      <div className="text-center text-white">
                        <h3 className="text-2xl font-bold">{study.title}</h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-between">
                      <div>
                        <Badge variant="primary" size="sm">
                          {study.category}
                        </Badge>
                        <h3 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
                          {study.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                          {study.client}
                        </p>

                        {/* Challenge & Solution */}
                        <div className="mt-6 space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              Challenge
                            </h4>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                              {study.challenge}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              Solution
                            </h4>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                              {study.solution}
                            </p>
                          </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {study.tech.map((t) => (
                            <Badge key={t} variant="secondary" size="sm">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Results */}
                      <div className="mt-8 grid grid-cols-3 gap-4 border-t border-gray-200 pt-6 dark:border-gray-800">
                        {study.results.map((result) => (
                          <div key={result.label}>
                            <p className="text-lg font-bold text-blue-900 dark:text-blue-400">
                              {result.value}
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              {result.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </StaggerChildren>
          </div>

          {/* View All Link */}
          <div className="mt-12 text-center">
            <Button href="/portfolio" variant="outline">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
