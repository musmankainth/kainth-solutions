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
  title: "Web Development Packages | Kainth Solutions",
  description: "Flexible web development packages for startups, growing businesses, and enterprises. Choose the perfect plan for your needs.",
  openGraph: {
    title: "Web Development Packages",
    url: "https://kainthsolutions.com/services/web-development/packages",
  },
  alternates: {
    canonical: "https://kainthsolutions.com/services/web-development/packages",
  },
};

const packages = [
  {
    id: "startup",
    name: "Startup",
    price: "$3,999",
    period: "one-time",
    description: "Perfect for new businesses launching their online presence",
    features: [
      "5-8 page responsive website",
      "Mobile-first design",
      "SEO optimization",
      "Contact form & integrations",
      "SSL certificate",
      "1 month support",
      "Content upload",
    ],
    highlighted: false,
  },
  {
    id: "growth",
    name: "Growth",
    price: "$9,999",
    period: "one-time",
    description: "For growing businesses needing advanced features",
    features: [
      "10-15 page custom website",
      "Advanced UI/UX design",
      "CMS integration (Sanity/Contentful)",
      "E-commerce capability (up to 500 products)",
      "Advanced SEO & analytics",
      "API integrations",
      "Performance optimization",
      "3 months support",
      "Monthly updates",
    ],
    highlighted: true,
    badge: "Most Popular",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "quote-based",
    description: "Fully custom web applications and complex solutions",
    features: [
      "Unlimited pages/functionality",
      "Custom web application",
      "Advanced architecture design",
      "API development & integration",
      "Real-time features (WebSockets)",
      "Advanced security & compliance",
      "Load balancing & scaling",
      "12 months support & maintenance",
      "Dedicated project manager",
      "Training & documentation",
    ],
    highlighted: false,
  },
];

const addOns = [
  { name: "E-commerce Setup", price: "+$2,000" },
  { name: "Advanced Analytics", price: "+$1,500" },
  { name: "API Integration", price: "+$1,000" },
  { name: "AI/Chatbot", price: "+$3,000" },
  { name: "Mobile App", price: "+$8,000" },
  { name: "Maintenance Plan (monthly)", price: "+$500-2000" },
];

export default function Packages() {
  return (
    <>
      <section className="py-16 lg:py-20">
        <Container>
          <FadeIn>
            <SectionHeading
              badge="Pricing"
              title="Web Development Packages"
              description="Transparent, flexible pricing for every business size. Choose what works for you."
              align="center"
            />
          </FadeIn>

          {/* Pricing Cards */}
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
                    </div>
                  </div>

                  <div className="mt-8 flex-1">
                    <ul className="space-y-3">
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3"
                        >
                          <Check className="mt-1 h-5 w-5 flex-shrink-0 text-blue-900 dark:text-blue-400" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {feature}
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

          {/* Add-ons */}
          <div className="mt-20">
            <FadeIn>
              <h3 className="text-center text-2xl font-bold text-gray-900 dark:text-white">
                Add-ons & Extras
              </h3>
              <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
                Customize your package with these optional features
              </p>
            </FadeIn>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <StaggerChildren staggerDelay={0.1}>
                {addOns.map((addon) => (
                  <Card
                    key={addon.name}
                    className="flex items-center justify-between p-4"
                  >
                    <span className="font-medium text-gray-900 dark:text-white">
                      {addon.name}
                    </span>
                    <span className="text-blue-900 dark:text-blue-400 font-semibold">
                      {addon.price}
                    </span>
                  </Card>
                ))}
              </StaggerChildren>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-20 max-w-3xl mx-auto">
            <FadeIn>
              <h3 className="text-center text-2xl font-bold text-gray-900 dark:text-white">
                Frequently Asked Questions
              </h3>
            </FadeIn>

            <div className="mt-8 space-y-6">
              {[
                {
                  q: "Can I upgrade my package later?",
                  a: "Yes! You can upgrade anytime. We'll prorate the difference based on your timeline.",
                },
                {
                  q: "What's included in support?",
                  a: "Bug fixes, security updates, and performance optimization. Feature requests are billed separately.",
                },
                {
                  q: "Do you offer payment plans?",
                  a: "Yes, we offer flexible payment plans. Contact us to discuss your budget.",
                },
                {
                  q: "What about hosting and domain?",
                  a: "Hosting is not included. We recommend Vercel (free tier available) or help you set up your preferred provider.",
                },
              ].map((item, idx) => (
                <div key={idx} className="border-b border-gray-200 pb-6 dark:border-gray-800">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {item.q}
                  </h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
