import type { Metadata } from "next";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren from "@/components/animations/StaggerChildren";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Digital Marketing Case Studies | Kainth Solutions",
  description: "See real results from our digital marketing campaigns. Increased traffic, leads, and revenue for our clients.",
  openGraph: {
    title: "Digital Marketing Case Studies",
    url: "https://kainthsolutions.com/services/digital-marketing/case-studies",
  },
};

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Growth Campaign",
    industry: "Fashion & Apparel",
    client: "Sustainable Fashion Brand",
    results: [
      { metric: "Organic Traffic", value: "+320%" },
      { metric: "Revenue", value: "+$2.5M" },
      { metric: "ROAS", value: "8:1" },
    ],
    challenges: [
      "Low organic visibility in competitive market",
      "High CAC due to broad targeting",
      "Poor conversion rate (1.2%)",
    ],
    solution: [
      "Implemented comprehensive SEO strategy targeting long-tail keywords",
      "Launched precision Google & Facebook ads with audience segmentation",
      "Optimized landing pages and checkout flow (conversion rate → 3.8%)",
    ],
    timeline: "6 months",
    strategies: ["SEO", "SEM", "Social Media Ads", "Email Marketing"],
  },
  {
    id: 2,
    title: "SaaS Lead Generation",
    industry: "Software as a Service",
    client: "B2B Analytics Platform",
    results: [
      { metric: "Qualified Leads", value: "+1,250" },
      { metric: "CAC Reduction", value: "-42%" },
      { metric: "Demo Bookings", value: "+890%" },
    ],
    challenges: [
      "Cold market awareness",
      "Complex B2B sales cycle",
      "Limited marketing budget",
    ],
    solution: [
      "Built content marketing engine with 50+ resources",
      "LinkedIn campaign targeting decision makers",
      "Optimized landing pages with personalization",
    ],
    timeline: "4 months",
    strategies: ["Content Marketing", "LinkedIn Ads", "Email Nurture", "Landing Pages"],
  },
  {
    id: 3,
    title: "Local Service Expansion",
    industry: "Home Services",
    client: "HVAC Service Company",
    results: [
      { metric: "Service Calls", value: "+450" },
      { metric: "Local Pack Visibility", value: "Top 3" },
      { metric: "Review Score", value: "4.9★" },
    ],
    challenges: [
      "Low online visibility",
      "Competing against larger brands",
      "Seasonal demand fluctuations",
    ],
    solution: [
      "Google Business Profile optimization",
      "Localized SEO for 5 service areas",
      "Review management program",
    ],
    timeline: "3 months",
    strategies: ["Local SEO", "Google Ads", "Review Management", "Website Optimization"],
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
              title="Digital Marketing Case Studies"
              description="Real campaigns that delivered measurable results for businesses across industries."
              align="center"
            />
          </FadeIn>

          <div className="mt-16 space-y-12">
            <StaggerChildren staggerDelay={0.2}>
              {caseStudies.map((study) => (
                <Card key={study.id} hover>
                  <div className="grid gap-8 md:grid-cols-2">
                    {/* Left: Info */}
                    <div>
                      <Badge variant="primary" size="sm">
                        {study.industry}
                      </Badge>
                      <h3 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
                        {study.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        {study.client}
                      </p>

                      <div className="mt-6 space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            Challenges
                          </h4>
                          <ul className="mt-2 space-y-1">
                            {study.challenges.map((c) => (
                              <li
                                key={c}
                                className="text-sm text-gray-600 dark:text-gray-400"
                              >
                                • {c}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            Solution
                          </h4>
                          <ul className="mt-2 space-y-1">
                            {study.solution.map((s) => (
                              <li
                                key={s}
                                className="text-sm text-gray-600 dark:text-gray-400"
                              >
                                • {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {study.strategies.map((s) => (
                          <Badge key={s} variant="secondary" size="sm">
                            {s}
                          </Badge>
                        ))}
                      </div>

                      <p className="mt-6 text-sm font-medium text-gray-600 dark:text-gray-400">
                        Timeline: {study.timeline}
                      </p>
                    </div>

                    {/* Right: Results */}
                    <div className="flex flex-col justify-center">
                      <div className="space-y-6">
                        {study.results.map((result) => (
                          <div key={result.metric}>
                            <div className="flex items-baseline gap-2">
                              <span className="text-4xl font-bold text-blue-900 dark:text-blue-400">
                                {result.value}
                              </span>
                            </div>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                              {result.metric}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          <strong>Impact:</strong> This campaign generated significant ROI
                          and set the foundation for continued growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </StaggerChildren>
          </div>

          <div className="mt-12 text-center">
            <Button href="/portfolio" variant="outline">
              View All Campaigns <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
