import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import ProcessSection from "@/components/sections/ProcessSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TechStackSection from "@/components/sections/TechStackSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import BlogSection from "@/components/sections/BlogSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Kainth Solutions - Web Development & Digital Marketing Agency",
  description:
    "Transform your business with expert web development, mobile app development, and digital marketing services. We build scalable solutions that drive growth.",
  keywords: [
    "web development",
    "digital marketing",
    "mobile app development",
    "Next.js",
    "React",
    "digital agency",
    "web agency",
    "software development",
  ],
  openGraph: {
    title: "Kainth Solutions - Web Development & Digital Marketing Agency",
    description:
      "Transform your business with expert web development, mobile app development, and digital marketing services.",
    url: "https://kainthsolutions.com",
  },
  alternates: {
    canonical: "https://kainthsolutions.com",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <PortfolioSection />
      <TechStackSection />
      <TestimonialsSection />
      <PricingSection />
      <BlogSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
