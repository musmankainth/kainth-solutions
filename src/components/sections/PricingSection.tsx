"use client";

import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import FadeIn from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

interface PricingTier {
  name: string;
  price: string;
  priceLabel?: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  highlighted?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$2,499",
    description: "Perfect for small businesses looking to establish their online presence.",
    features: [
      "5-page responsive website",
      "Mobile-friendly design",
      "Basic SEO setup",
      "Contact form integration",
      "1 month of support",
      "2-3 weeks delivery",
    ],
    cta: "Get Started",
    ctaHref: "/contact?plan=starter",
  },
  {
    name: "Professional",
    price: "$7,499",
    description: "Ideal for growing businesses that need advanced features and functionality.",
    features: [
      "Up to 15 pages",
      "Custom UI/UX design",
      "Content Management System",
      "Advanced SEO & Analytics",
      "eCommerce (up to 50 products)",
      "3 months of support",
      "4-6 weeks delivery",
    ],
    cta: "Get Started",
    ctaHref: "/contact?plan=professional",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceLabel: "Let's talk",
    description: "For organizations requiring a fully custom digital solution.",
    features: [
      "Unlimited pages",
      "Custom web application",
      "API integrations",
      "Dedicated project manager",
      "12 months of support",
      "Priority support",
    ],
    cta: "Contact Us",
    ctaHref: "/contact?plan=enterprise",
  },
];

export default function PricingSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950 lg:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            badge="Pricing"
            title="Transparent Pricing"
            description="Choose the plan that fits your business needs. No hidden fees, no surprises."
          />
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-3 items-stretch">
          {tiers.map((tier, index) => (
            <FadeIn key={tier.name} delay={index * 0.15}>
              <div
                className={cn(
                  "relative flex flex-col h-full rounded-2xl border bg-white p-8 transition-shadow duration-300 dark:bg-gray-900",
                  tier.highlighted
                    ? "border-orange-500 shadow-xl shadow-orange-500/10 dark:border-orange-400 dark:shadow-orange-400/10 scale-[1.02] md:scale-105 z-10"
                    : "border-gray-200 shadow-sm dark:border-gray-700 hover:shadow-md"
                )}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge variant="accent" size="md">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {tier.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {tier.description}
                  </p>
                </div>

                <div className="mb-8">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {tier.price}
                  </span>
                  {tier.priceLabel ? (
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                      {tier.priceLabel}
                    </span>
                  ) : (
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                      / project
                    </span>
                  )}
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className={cn(
                          "mt-0.5 h-5 w-5 shrink-0",
                          tier.highlighted
                            ? "text-orange-500 dark:text-orange-400"
                            : "text-teal-600 dark:text-teal-400"
                        )}
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  href={tier.ctaHref}
                  variant={tier.highlighted ? "accent" : "outline"}
                  size="lg"
                  className="w-full justify-center"
                >
                  {tier.cta}
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
