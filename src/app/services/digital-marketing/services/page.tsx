import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Search,
  TrendingUp,
  Users,
  Mail,
  Video,
  BarChart3,
} from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren from "@/components/animations/StaggerChildren";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Kainth Solutions",
  description: "Full-service digital marketing: SEO, SEM, social media, content marketing, email marketing, and analytics.",
  openGraph: {
    title: "Digital Marketing Services",
    url: "https://kainthsolutions.com/services/digital-marketing/services",
  },
};

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description:
      "Rank higher in Google and drive consistent organic traffic to your website.",
    benefits: [
      "Long-term, sustainable growth",
      "Higher quality traffic",
      "Lower cost per lead",
      "Build authority in your industry",
    ],
    deliverables: [
      "Keyword research and strategy",
      "On-page optimization",
      "Technical SEO",
      "Content creation",
      "Link building",
      "Monthly reports",
    ],
    timeline: "3-6 months to see results",
  },
  {
    icon: TrendingUp,
    title: "Search & Social Advertising (PPC)",
    description:
      "Get immediate results with targeted Google and Facebook ads that convert.",
    benefits: [
      "Immediate traffic",
      "Precise targeting",
      "Measurable ROI",
      "Complete control",
    ],
    deliverables: [
      "Campaign strategy",
      "Ad copy and creative",
      "Landing page optimization",
      "Bid management",
      "Conversion tracking",
      "Weekly optimization",
    ],
    timeline: "Results within days",
  },
  {
    icon: Users,
    title: "Social Media Marketing",
    description:
      "Build engaged communities and amplify your brand across Instagram, TikTok, LinkedIn, and more.",
    benefits: [
      "Brand awareness",
      "Community building",
      "Customer loyalty",
      "Viral potential",
    ],
    deliverables: [
      "Content calendar",
      "Post creation (text + graphics)",
      "Community management",
      "Influencer partnerships",
      "Social listening",
      "Performance analytics",
    ],
    timeline: "4-8 weeks to see engagement lift",
  },
  {
    icon: Mail,
    title: "Email Marketing & Automation",
    description:
      "Stay connected with customers through personalized email campaigns and automation.",
    benefits: [
      "Highest ROI of any channel",
      "Personalization at scale",
      "Customer retention",
      "Repeat sales",
    ],
    deliverables: [
      "Email list strategy",
      "Campaign creation",
      "Automation workflows",
      "Segmentation",
      "A/B testing",
      "Performance tracking",
    ],
    timeline: "Quick wins in 4 weeks",
  },
  {
    icon: Video,
    title: "Content Marketing & Video",
    description:
      "Create valuable content that educates, entertains, and converts your audience.",
    benefits: [
      "Establish thought leadership",
      "Multiple formats (blogs, videos, podcasts)",
      "Higher engagement",
      "Long-term value",
    ],
    deliverables: [
      "Content strategy",
      "Blog posts and articles",
      "Video scripts and production",
      "Infographics",
      "Podcasts",
      "Distribution across channels",
    ],
    timeline: "Ongoing, compounding results",
  },
  {
    icon: BarChart3,
    title: "Analytics & Conversion Optimization",
    description:
      "Understand your customers and optimize every step of their journey.",
    benefits: [
      "Data-driven decisions",
      "Reduce wasted spending",
      "Increase conversion rates",
      "Understand customer behavior",
    ],
    deliverables: [
      "Analytics implementation",
      "Conversion tracking setup",
      "Custom dashboards",
      "A/B testing",
      "Heat mapping",
      "Monthly insights reports",
    ],
    timeline: "Continuous improvement",
  },
];

const integratedApproach = [
  {
    step: "1. Audit",
    description: "Analyze current marketing efforts, competitors, and opportunities.",
  },
  {
    step: "2. Strategy",
    description: "Define goals, identify best channels, and create integrated plan.",
  },
  {
    step: "3. Build",
    description: "Create campaigns, content, and infrastructure for success.",
  },
  {
    step: "4. Launch",
    description: "Execute campaigns with confidence across all channels.",
  },
  {
    step: "5. Optimize",
    description: "Continuously test, learn, and improve performance.",
  },
  {
    step: "6. Scale",
    description: "Double down on winning strategies and expand reach.",
  },
];

export default function Services() {
  return (
    <>
      <section className="py-16 lg:py-20">
        <Container>
          <FadeIn>
            <SectionHeading
              badge="Services"
              title="Digital Marketing Services"
              description="Comprehensive services to grow your business online. From SEO to paid ads to content."
              align="center"
            />
          </FadeIn>

          {/* Service Cards */}
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <StaggerChildren staggerDelay={0.1}>
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card key={service.title} hover>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Icon className="h-6 w-6 text-blue-900 dark:text-blue-300" />
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {service.description}
                    </p>

                    <div className="mt-6">
                      <p className="text-xs font-semibold uppercase text-gray-700 dark:text-gray-300">
                        Key Benefits
                      </p>
                      <ul className="mt-3 space-y-2">
                        {service.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="text-sm text-gray-600 dark:text-gray-400"
                          >
                            ✓ {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 border-t border-gray-200 pt-6 dark:border-gray-800">
                      <p className="text-xs font-semibold uppercase text-gray-700 dark:text-gray-300">
                        Deliverables
                      </p>
                      <ul className="mt-3 space-y-1">
                        {service.deliverables.map((d) => (
                          <li
                            key={d}
                            className="text-xs text-gray-600 dark:text-gray-400"
                          >
                            • {d}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 border-t border-gray-200 pt-6 dark:border-gray-800">
                      <Badge variant="secondary" size="sm">
                        {service.timeline}
                      </Badge>
                    </div>
                  </Card>
                );
              })}
            </StaggerChildren>
          </div>

          {/* Integrated Approach */}
          <div className="mt-20">
            <FadeIn>
              <h3 className="text-center text-2xl font-bold text-gray-900 dark:text-white">
                Our Integrated Approach
              </h3>
              <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
                Services work better together. We combine strategies for maximum impact.
              </p>
            </FadeIn>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <StaggerChildren staggerDelay={0.1}>
                {integratedApproach.map((item) => (
                  <Card key={item.step} className="flex flex-col items-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                      <span className="font-bold text-blue-900 dark:text-blue-300">
                        {item.step.split(".")[0]}
                      </span>
                    </div>
                    <h4 className="mt-4 font-semibold text-gray-900 dark:text-white">
                      {item.step}
                    </h4>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </Card>
                ))}
              </StaggerChildren>
            </div>
          </div>

          {/* Why Digital Marketing */}
          <div className="mt-20 rounded-lg bg-blue-50 p-8 dark:bg-blue-950">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Why Digital Marketing Matters
            </h3>
            <div className="mt-6 grid gap-8 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Measurable Results
                </h4>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Every campaign is tracked. You see exactly how much you spent and what you got back. No guessing.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Right Audience
                </h4>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Reach people actively looking for what you offer, not random people who don't care.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Cost Effective
                </h4>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Digital marketing is cheaper than traditional advertising. You only pay for results.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Scale Quickly
                </h4>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Find what works and scale it. Double your budget, often double your results.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
