"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Monitor, Smartphone, TrendingUp, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import StaggerChildren from "@/components/animations/StaggerChildren";

interface Service {
  icon: React.ElementType;
  title: string;
  tagline: string;
  description: string;
  subServices: string[];
  href: string;
  gradient: string;
  iconBg: string;
}

const services: Service[] = [
  {
    icon: Monitor,
    title: "Web Development",
    tagline: "Websites That Convert",
    description:
      "We design and develop high-performance websites that captivate visitors and turn them into loyal customers. Our web solutions combine beautiful design with robust functionality to deliver measurable business results.",
    subServices: [
      "Custom Web Applications",
      "E-Commerce Platforms",
      "CMS Development",
      "Progressive Web Apps",
      "API Integration",
      "Performance Optimization",
    ],
    href: "/services/web-development",
    gradient: "from-blue-500 to-blue-700",
    iconBg: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "Apps People Love",
    description:
      "We build native and cross-platform mobile applications that users love to interact with. From concept to launch, our team delivers intuitive, performant apps that keep your audience engaged and coming back.",
    subServices: [
      "iOS Development",
      "Android Development",
      "Cross-Platform Apps",
      "App Prototyping",
      "UI/UX for Mobile",
      "App Store Optimization",
    ],
    href: "/services/mobile-app-development",
    gradient: "from-teal-500 to-teal-700",
    iconBg:
      "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-400",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    tagline: "Growth That Scales",
    description:
      "We craft data-driven marketing strategies that amplify your brand reach and maximize ROI. Our holistic approach combines creative storytelling with analytics to drive sustainable, scalable growth for your business.",
    subServices: [
      "SEO & Content Strategy",
      "PPC Campaign Management",
      "Social Media Marketing",
      "Email Marketing Automation",
      "Conversion Rate Optimization",
      "Analytics & Reporting",
    ],
    href: "/services/digital-marketing",
    gradient: "from-orange-500 to-orange-700",
    iconBg:
      "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400",
  },
];

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900"
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
    >
      {/* Gradient border effect on hover */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          "bg-gradient-to-br",
          service.gradient
        )}
        style={{ padding: "2px" }}
      >
        <div className="h-full w-full rounded-2xl bg-white dark:bg-gray-900" />
      </div>

      <div className="relative z-10">
        {/* Icon */}
        <div
          className={cn(
            "mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl",
            service.iconBg
          )}
        >
          <Icon className="h-7 w-7" />
        </div>

        {/* Title and tagline */}
        <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
          {service.title}
        </h3>
        <p
          className={cn(
            "mb-4 text-sm font-semibold bg-gradient-to-r bg-clip-text text-transparent",
            service.gradient
          )}
        >
          {service.tagline}
        </p>

        {/* Description */}
        <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-400">
          {service.description}
        </p>

        {/* Sub-services */}
        <ul className="mb-8 grid grid-cols-2 gap-x-4 gap-y-2">
          {service.subServices.map((sub) => (
            <li
              key={sub}
              className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
            >
              <span
                className={cn(
                  "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r",
                  service.gradient
                )}
              />
              {sub}
            </li>
          ))}
        </ul>

        {/* Link */}
        <Link
          href={service.href}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-900 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Hover shadow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 shadow-2xl transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-950 lg:py-28">
      <Container>
        <SectionHeading
          badge="What We Do"
          title="Our Services"
          description="We offer a comprehensive suite of digital services designed to help your business thrive in the modern landscape."
          align="center"
        />

        <StaggerChildren
          staggerDelay={0.15}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
