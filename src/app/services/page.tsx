import type { Metadata } from "next";
import {
  Monitor,
  Smartphone,
  TrendingUp,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren from "@/components/animations/StaggerChildren";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Services | Kainth Solutions",
  description:
    "Explore our full range of digital services including web development, mobile app development, and digital marketing. End-to-end solutions for modern businesses.",
  openGraph: {
    title: "Services | Kainth Solutions",
    description:
      "Web development, mobile apps, and digital marketing services tailored to your business needs.",
    url: "https://kainthsolutions.com/services",
  },
  alternates: {
    canonical: "https://kainthsolutions.com/services",
  },
};

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    slug: "web-development",
    badge: "Most Popular",
    badgeVariant: "primary" as const,
    gradient: "from-blue-500 to-indigo-600",
    description:
      "We design and build high-performance, responsive websites and web applications that captivate users and drive conversions. From corporate sites to complex SaaS platforms, our full-stack team delivers pixel-perfect results using modern frameworks like Next.js, React, and Node.js.",
    features: [
      "Custom website design & development",
      "E-commerce platforms (Shopify, WooCommerce, custom)",
      "Progressive Web Apps (PWA)",
      "CMS integration (WordPress, Sanity, Strapi)",
      "API development & third-party integrations",
      "Performance optimization & Core Web Vitals",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    slug: "mobile-app-development",
    badge: "Cross-Platform",
    badgeVariant: "secondary" as const,
    gradient: "from-teal-400 to-cyan-600",
    description:
      "We build beautiful, high-performance mobile applications for iOS and Android. Using React Native and Flutter, we deliver cross-platform apps that feel truly native while keeping development costs efficient and time-to-market short.",
    features: [
      "iOS & Android native development",
      "Cross-platform with React Native & Flutter",
      "UI/UX design for mobile experiences",
      "Push notifications & real-time features",
      "App Store & Play Store submission",
      "Ongoing maintenance & updates",
    ],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    slug: "digital-marketing",
    badge: "ROI Focused",
    badgeVariant: "accent" as const,
    gradient: "from-orange-400 to-red-500",
    description:
      "We craft data-driven marketing strategies that increase your visibility, attract qualified leads, and convert them into loyal customers. Our team combines creative storytelling with analytical precision to maximize your return on investment.",
    features: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click advertising (Google Ads, Meta)",
      "Social media management & strategy",
      "Content marketing & copywriting",
      "Email marketing automation",
      "Analytics, reporting & conversion optimization",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-24 pb-16 dark:bg-gray-950">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-3xl dark:bg-blue-900/15" />
          <div className="absolute -right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-orange-100/40 blur-3xl dark:bg-orange-900/10" />
        </div>
        <Container className="relative z-10">
          <FadeIn direction="up">
            <Badge variant="primary" className="mb-6">
              Our Services
            </Badge>
            <h1 className="mb-6 max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
              End-to-End Digital Solutions for{" "}
              <span className="text-blue-900 dark:text-blue-400">
                Modern Businesses
              </span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Whether you need a stunning website, a powerful mobile app, or a
              results-driven marketing strategy, we have the expertise to bring
              your vision to life.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Services List */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <Container>
          <div className="space-y-16">
            {services.map((service, index) => (
              <FadeIn key={service.slug} direction="up" delay={index * 0.15}>
                <Card variant="bordered" className="overflow-hidden p-0">
                  <div className="grid lg:grid-cols-5">
                    {/* Left: Gradient accent */}
                    <div
                      className={`flex items-center justify-center bg-gradient-to-br ${service.gradient} p-8 lg:col-span-2`}
                    >
                      <div className="text-center text-white">
                        <service.icon className="mx-auto mb-4 h-16 w-16" />
                        <h2 className="text-2xl font-bold">{service.title}</h2>
                        <Badge
                          variant="outline"
                          className="mt-3 border-white/40 text-white"
                        >
                          {service.badge}
                        </Badge>
                      </div>
                    </div>

                    {/* Right: Details */}
                    <div className="p-8 lg:col-span-3">
                      <p className="mb-6 text-gray-600 leading-relaxed dark:text-gray-400">
                        {service.description}
                      </p>
                      <div className="mb-6 grid gap-3 sm:grid-cols-2">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-start gap-2"
                          >
                            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                      <Button
                        href={`/services/${service.slug}`}
                        variant="primary"
                        size="md"
                      >
                        Learn More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
