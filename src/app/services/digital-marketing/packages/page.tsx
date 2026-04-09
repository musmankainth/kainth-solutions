import type { Metadata } from "next";
import { Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren from "@/components/animations/StaggerChildren";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Digital Marketing Packages | Kainth Solutions",
  description: "Flexible digital marketing packages for SEO, PPC, social media, and content marketing. Scaled for your budget.",
  openGraph: {
    title: "Digital Marketing Packages",
    url: "https://kainthsolutions.com/services/digital-marketing/packages",
  },
  alternates: {
    canonical: "https://kainthsolutions.com/services/digital-marketing/packages",
  },
};

const packages = [
  {
    id: "starter",
    name: "Starter",
    price: "$1,500",
    period: "per month",
    description: "Perfect for small businesses starting their digital marketing journey",
    services: [
      "Basic SEO optimization",
      "Google Business Profile setup",
      "Social media audit",
      "Monthly reporting",
      "Email strategy",
      "Basic keyword research",
    ],
    commitment: "3 months minimum",
    highlighted: false,
  },
  {
    id: "growth",
    name: "Growth",
    price: "$3,500",
    period: "per month",
    description: "For growing businesses ready to scale with integrated campaigns",
    services: [
      "Comprehensive SEO strategy",
      "Google Ads campaign ($1500 ad spend)",
      "Facebook/Instagram Ads ($1000 ad spend)",
      "Content calendar (8 posts/month)",
      "Email marketing campaigns",
      "Weekly reporting dashboard",
      "Conversion optimization",
      "Competitor analysis",
    ],
    commitment: "6 months minimum",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    id: "premium",
    name: "Premium",
    price: "$7,500+",
    period: "per month",
    description: "Comprehensive marketing for serious growth and market dominance",
    services: [
      "Full-service digital marketing",
      "SEO + SEM + Social Media",
      "Paid ads ($5000+ ad spend)",
      "Content marketing (20+ pieces/month)",
      "Video marketing",
      "Email marketing automation",
      "Marketing automation setup",
      "Dedicated account manager",
      "Daily reporting & optimization",
      "A/B testing & conversion focus",
      "Influencer partnerships",
      "PR & media outreach",
    ],
    commitment: "6-12 months",
    highlighted: false,
  },
];

const addOnServices = [
  { name: "Google Ads Campaign", price: "+$500-5000/mo" },
  { name: "Facebook/Instagram Ads", price: "+$300-3000/mo" },
  { name: "LinkedIn Ads", price: "+$1000-5000/mo" },
  { name: "Content Creation (per piece)", price: "+$300-1000" },
  { name: "Video Production", price: "+$2000-10000" },
  { name: "Influencer Campaign", price: "+$5000-50000" },
];

export default function Packages() {
  return (
    <>
      <section className="py-16 lg:py-20">
        <Container>
          <FadeIn>
            <SectionHeading
              badge="Pricing"
              title="Digital Marketing Packages"
              description="Flexible, scalable packages designed for businesses at every growth stage."
              align="center"
            />
          </FadeIn>

          {/* Packages */}
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <StaggerChildren staggerDelay={0.15}>
              {packages.map((pkg) => (
                <Card
                  key={pkg.id}
                  className={`relative flex flex-col ${
                    pkg.highlighted
                      ? "border-2 border-blue-900 dark:border-blue-400 md:scale-105"
                      : ""
                  }`}
                  hover
                >
                  {pkg.highlighted && (
                    <Badge
                      variant="accent"
                      size="md"
                      className="absolute -top-3 left-1/2 -translate-x-1/2"
                    >
                      {pkg.badge}
                    </Badge>
                  )}

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {pkg.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {pkg.description}
                    </p>

                    <div className="mt-6">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        {pkg.price}
                      </span>
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                        {pkg.period}
                      </span>
                      <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                        {pkg.commitment}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex-1">
                    <ul className="space-y-3">
                      {pkg.services.map((service) => (
                        <li key={service} className="flex items-start gap-3">
                          <Check className="mt-1 h-5 w-5 flex-shrink-0 text-blue-900 dark:text-blue-400" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {service}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    href="/contact"
                    variant={pkg.highlighted ? "primary" : "outline"}
                    size="lg"
                    className="mt-8 w-full"
                  >
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Card>
              ))}
            </StaggerChildren>
          </div>

          {/* Add-on Services */}
          <div className="mt-20">
            <FadeIn>
              <h3 className="text-center text-2xl font-bold text-gray-900 dark:text-white">
                À La Carte Services
              </h3>
              <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
                Add these services to any package or start your own custom plan
              </p>
            </FadeIn>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <StaggerChildren staggerDelay={0.1}>
                {addOnServices.map((service) => (
                  <Card
                    key={service.name}
                    className="flex items-center justify-between p-4"
                  >
                    <span className="font-medium text-gray-900 dark:text-white">
                      {service.name}
                    </span>
                    <span className="text-blue-900 dark:text-blue-400 font-semibold">
                      {service.price}
                    </span>
                  </Card>
                ))}
              </StaggerChildren>
            </div>
          </div>

          {/* ROI & Results */}
          <div className="mt-20 rounded-lg bg-blue-50 p-8 dark:bg-blue-950">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              What You Can Expect
            </h3>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Starter Package
                </h4>
                <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• 10-30% increase in organic traffic (3-6 months)</li>
                  <li>• Improved Google Business visibility</li>
                  <li>• Brand awareness building</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Growth Package
                </h4>
                <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• 50-150% increase in qualified leads (3-4 months)</li>
                  <li>• $3-5 ROI on ad spend</li>
                  <li>• Consistent pipeline growth</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
