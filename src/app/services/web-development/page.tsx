import type { Metadata } from "next";
import {
  Code2,
  Palette,
  ShieldCheck,
  ArrowRight,
  Globe,
  ShoppingCart,
  Gauge,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren from "@/components/animations/StaggerChildren";
import CTASection from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Web Development Services | Kainth Solutions",
  description:
    "Custom web development services using Next.js, React, and TypeScript. From marketing sites to complex web applications, we build fast, scalable, SEO-optimized websites.",
  openGraph: {
    title: "Web Development Services | Kainth Solutions",
    description:
      "Websites that perform, engage, and convert. Full-stack web development with modern technologies.",
    url: "https://kainthsolutions.com/services/web-development",
  },
  alternates: {
    canonical: "https://kainthsolutions.com/services/web-development",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Development",
  description:
    "Custom web development services using Next.js, React, and TypeScript. From marketing sites to complex web applications.",
  provider: {
    "@type": "Organization",
    name: "Kainth Solutions",
    url: "https://kainthsolutions.com",
  },
  serviceType: "Web Development",
  areaServed: "Worldwide",
  hasOfferingType: "Service",
};

const features = [
  {
    icon: Palette,
    title: "Custom Design",
    description:
      "Every website we build starts with a bespoke design tailored to your brand identity, target audience, and business goals.",
  },
  {
    icon: Code2,
    title: "Clean, Modern Code",
    description:
      "We use Next.js, React, TypeScript, and Tailwind CSS to write maintainable, performant code that scales with your business.",
  },
  {
    icon: Gauge,
    title: "Performance Optimized",
    description:
      "Lightning-fast load times with perfect Core Web Vitals scores. We optimize images, fonts, and scripts for maximum speed.",
  },
  {
    icon: Globe,
    title: "SEO-First Architecture",
    description:
      "Server-side rendering, semantic HTML, structured data, and optimized meta tags to help you rank higher in search results.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Reliability",
    description:
      "Enterprise-grade security with HTTPS, input validation, CSRF protection, and regular dependency audits.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Ready",
    description:
      "From Shopify storefronts to custom checkout flows, we build e-commerce experiences that convert browsers into buyers.",
  },
];

const techStack = [
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "Library" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Node.js", category: "Runtime" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Prisma", category: "ORM" },
  { name: "Vercel", category: "Hosting" },
  { name: "Sanity", category: "CMS" },
  { name: "Stripe", category: "Payments" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
];

const process = [
  {
    step: 1,
    title: "Discovery & Strategy",
    description:
      "We begin with an in-depth consultation to understand your business, audience, competitors, and goals. We map out a comprehensive project plan with clear milestones.",
  },
  {
    step: 2,
    title: "Design & Prototyping",
    description:
      "Our design team creates wireframes and high-fidelity mockups in Figma. You review interactive prototypes and provide feedback before a single line of code is written.",
  },
  {
    step: 3,
    title: "Development & Testing",
    description:
      "We build your site using agile sprints with regular demos. Rigorous QA testing across devices and browsers ensures a flawless launch experience.",
  },
  {
    step: 4,
    title: "Launch & Optimization",
    description:
      "We handle deployment, DNS configuration, and performance optimization. Post-launch, we monitor analytics and continuously improve based on real user data.",
  },
];

export default function WebDevelopmentPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-24 pb-16 dark:bg-gray-950">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-3xl dark:bg-blue-900/20" />
          <div className="absolute -right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-indigo-100/50 blur-3xl dark:bg-indigo-900/15" />
        </div>
        <Container className="relative z-10">
          <FadeIn direction="up">
            <Badge variant="primary" className="mb-6">
              Web Development
            </Badge>
            <h1 className="mb-6 max-w-4xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
              Websites That{" "}
              <span className="text-blue-900 dark:text-blue-400">
                Perform, Engage, and Convert
              </span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              From blazing-fast marketing sites to complex web applications, we
              build digital experiences that look stunning and deliver measurable
              results. Our full-stack team uses the latest technologies to
              create solutions that grow with your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="/contact">
                Start Your Project
                <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" href="/portfolio">
                See Our Work
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <Container>
          <SectionHeading
            badge="What We Offer"
            title="Full-Stack Web Development Services"
            description="Everything you need to establish a powerful online presence, from design to deployment and beyond."
          />
          <StaggerChildren
            staggerDelay={0.08}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature) => (
              <Card key={feature.title} variant="bordered" hover>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
                  <feature.icon className="h-6 w-6 text-blue-900 dark:text-blue-400" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </Card>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* Tech Stack */}
      <section className="bg-white py-20 dark:bg-gray-950">
        <Container>
          <SectionHeading
            badge="Tech Stack"
            title="Built with Modern Technologies"
            description="We leverage battle-tested tools and frameworks to deliver reliable, scalable solutions."
          />
          <FadeIn direction="up">
            <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-50 p-4 text-center transition-colors hover:border-blue-300 hover:bg-blue-50 dark:border-gray-700 dark:bg-gray-900 dark:hover:border-blue-600 dark:hover:bg-blue-900/20"
                >
                  <span className="text-base font-semibold text-gray-900 dark:text-white">
                    {tech.name}
                  </span>
                  <span className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {tech.category}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <Container size="narrow">
          <SectionHeading
            badge="Our Process"
            title="From Concept to Launch in 4 Steps"
            description="Our proven development process ensures transparency, quality, and on-time delivery."
          />
          <div className="space-y-8">
            {process.map((item, index) => (
              <FadeIn key={item.step} direction="up" delay={index * 0.1}>
                <div className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-900 text-lg font-bold text-white dark:bg-blue-600">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing mention */}
      <section className="bg-white py-20 dark:bg-gray-950">
        <Container className="text-center">
          <FadeIn direction="up">
            <SectionHeading
              badge="Pricing"
              title="Transparent, Flexible Pricing"
              description="Every project is unique. We offer competitive rates tailored to your scope and requirements."
            />
            <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
              {[
                {
                  tier: "Starter",
                  range: "$5,000 - $15,000",
                  desc: "Marketing sites & landing pages",
                },
                {
                  tier: "Professional",
                  range: "$15,000 - $50,000",
                  desc: "Web apps & e-commerce platforms",
                },
                {
                  tier: "Enterprise",
                  range: "$50,000+",
                  desc: "Complex platforms & SaaS products",
                },
              ].map((p) => (
                <Card key={p.tier} variant="bordered" className="text-center">
                  <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    {p.tier}
                  </h3>
                  <p className="mb-2 text-2xl font-extrabold text-blue-900 dark:text-blue-400">
                    {p.range}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {p.desc}
                  </p>
                </Card>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Get a Custom Quote
                <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
