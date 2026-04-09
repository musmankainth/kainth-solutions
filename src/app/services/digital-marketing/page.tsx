import type { Metadata } from "next";
import {
  Search,
  BarChart3,
  Mail,
  Share2,
  ArrowRight,
  PenTool,
  MousePointer,
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
  title: "Digital Marketing Services | Kainth Solutions",
  description:
    "Data-driven digital marketing strategies that deliver real ROI. SEO, PPC, social media, content marketing, and email automation for growth-focused businesses.",
  openGraph: {
    title: "Digital Marketing Services | Kainth Solutions",
    description:
      "Marketing that drives real revenue growth. SEO, PPC, and multi-channel campaigns.",
    url: "https://kainthsolutions.com/services/digital-marketing",
  },
  alternates: {
    canonical: "https://kainthsolutions.com/services/digital-marketing",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing",
  description:
    "Data-driven digital marketing strategies that deliver real ROI. SEO, PPC, social media, content marketing, and email automation.",
  provider: {
    "@type": "Organization",
    name: "Kainth Solutions",
    url: "https://kainthsolutions.com",
  },
  serviceType: "Digital Marketing",
  areaServed: "Worldwide",
  hasOfferingType: "Service",
};

const features = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    description:
      "Dominate search results with technical SEO, content strategy, link building, and local SEO. We track rankings and deliver measurable growth.",
  },
  {
    icon: MousePointer,
    title: "Pay-Per-Click Advertising",
    description:
      "Targeted Google Ads and Meta campaigns that maximize your ad spend. We optimize bids, audiences, and creatives for peak ROAS.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Strategic content creation and community management across Instagram, LinkedIn, Twitter, and TikTok to build your brand voice.",
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    description:
      "Blog posts, whitepapers, case studies, and video content that establish thought leadership and attract organic traffic.",
  },
  {
    icon: Mail,
    title: "Email Marketing Automation",
    description:
      "Personalized email campaigns, drip sequences, and newsletter strategies that nurture leads and drive repeat conversions.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Custom dashboards with real-time KPI tracking. Monthly reports with actionable insights, not just vanity metrics.",
  },
];

const results = [
  { metric: "3.2x", label: "Average ROAS for PPC clients" },
  { metric: "187%", label: "Average organic traffic increase" },
  { metric: "45%", label: "Average reduction in cost per lead" },
  { metric: "92%", label: "Client retention rate" },
];

const process = [
  {
    step: 1,
    title: "Audit & Research",
    description:
      "We conduct a thorough audit of your current digital presence, competitor landscape, and market opportunities. This forms the foundation of your custom strategy.",
  },
  {
    step: 2,
    title: "Strategy Development",
    description:
      "Based on our research, we create a comprehensive marketing plan with clear KPIs, channel mix, content calendar, and budget allocation.",
  },
  {
    step: 3,
    title: "Execution & Optimization",
    description:
      "Our team implements the strategy across all channels. We continuously A/B test, optimize campaigns, and refine targeting for maximum impact.",
  },
  {
    step: 4,
    title: "Reporting & Scaling",
    description:
      "Transparent monthly reporting with clear ROI metrics. We identify winning strategies and scale them while sunsetting underperformers.",
  },
];

export default function DigitalMarketingPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-24 pb-16 dark:bg-gray-950">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-orange-100/60 blur-3xl dark:bg-orange-900/20" />
          <div className="absolute -right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-red-100/50 blur-3xl dark:bg-red-900/15" />
        </div>
        <Container className="relative z-10">
          <FadeIn direction="up">
            <Badge variant="accent" className="mb-6">
              Digital Marketing
            </Badge>
            <h1 className="mb-6 max-w-4xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
              Marketing That Drives{" "}
              <span className="text-orange-500 dark:text-orange-400">
                Real Revenue Growth
              </span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Stop guessing and start growing. Our data-driven marketing
              strategies combine creativity with analytics to attract qualified
              leads, boost conversions, and maximize your return on investment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="accent" size="lg" href="/contact">
                Get a Free Audit
                <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" href="/portfolio">
                See Results
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Results Bar */}
      <section className="bg-gray-900 py-12 dark:bg-gray-800">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {results.map((r) => (
              <FadeIn key={r.label} direction="up">
                <div className="text-center">
                  <p className="text-3xl font-extrabold text-orange-400 sm:text-4xl">
                    {r.metric}
                  </p>
                  <p className="mt-1 text-sm text-gray-300">{r.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <Container>
          <SectionHeading
            badge="Services"
            title="Full-Funnel Marketing Solutions"
            description="From awareness to conversion, we cover every stage of the customer journey with targeted strategies."
          />
          <StaggerChildren
            staggerDelay={0.08}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature) => (
              <Card key={feature.title} variant="bordered" hover>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 dark:bg-orange-900/30">
                  <feature.icon className="h-6 w-6 text-orange-500 dark:text-orange-400" />
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

      {/* Process */}
      <section className="bg-white py-20 dark:bg-gray-950">
        <Container size="narrow">
          <SectionHeading
            badge="Our Approach"
            title="A Proven 4-Step Framework"
            description="Our methodology is built on transparency, data, and continuous improvement."
          />
          <div className="space-y-8">
            {process.map((item, index) => (
              <FadeIn key={item.step} direction="up" delay={index * 0.1}>
                <div className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white dark:bg-orange-400 dark:text-gray-900">
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

      {/* Pricing */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <Container className="text-center">
          <FadeIn direction="up">
            <SectionHeading
              badge="Investment"
              title="Marketing Plans That Scale"
              description="Choose a plan that fits your growth stage, or let us build a custom package."
            />
            <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
              {[
                {
                  tier: "Starter",
                  range: "$2,000/mo",
                  desc: "SEO + social media basics",
                },
                {
                  tier: "Growth",
                  range: "$5,000/mo",
                  desc: "Multi-channel + PPC campaigns",
                },
                {
                  tier: "Scale",
                  range: "$10,000+/mo",
                  desc: "Full-funnel enterprise strategy",
                },
              ].map((p) => (
                <Card key={p.tier} variant="bordered" className="text-center">
                  <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    {p.tier}
                  </h3>
                  <p className="mb-2 text-2xl font-extrabold text-orange-500 dark:text-orange-400">
                    {p.range}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {p.desc}
                  </p>
                </Card>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/contact" variant="accent" size="lg">
                Get a Free Strategy Call
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
