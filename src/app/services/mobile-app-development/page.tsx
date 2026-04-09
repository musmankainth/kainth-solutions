import type { Metadata } from "next";
import {
  Smartphone,
  Fingerprint,
  Wifi,
  BatteryCharging,
  Bell,
  ArrowRight,
  Paintbrush,
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
  title: "Mobile App Development Services | Kainth Solutions",
  description:
    "Build beautiful, high-performance mobile apps for iOS and Android with React Native and Flutter. From MVPs to enterprise apps, we deliver cross-platform excellence.",
  openGraph: {
    title: "Mobile App Development | Kainth Solutions",
    description:
      "Cross-platform mobile apps that users love. React Native & Flutter development.",
    url: "https://kainthsolutions.com/services/mobile-app-development",
  },
};

const features = [
  {
    icon: Smartphone,
    title: "Cross-Platform Development",
    description:
      "Build once, deploy everywhere. We use React Native and Flutter to create apps that run flawlessly on both iOS and Android from a single codebase.",
  },
  {
    icon: Paintbrush,
    title: "Native-Feel UI/UX",
    description:
      "Our designs follow platform-specific guidelines (Material Design, Human Interface) so your app feels native on every device.",
  },
  {
    icon: Bell,
    title: "Push Notifications & Real-Time",
    description:
      "Keep users engaged with push notifications, real-time chat, live updates, and WebSocket-powered features.",
  },
  {
    icon: Fingerprint,
    title: "Biometric & Secure Auth",
    description:
      "Face ID, fingerprint scanning, OAuth 2.0, and encrypted data storage to protect your users and their information.",
  },
  {
    icon: Wifi,
    title: "Offline-First Architecture",
    description:
      "Your app works even without an internet connection. Data syncs seamlessly when connectivity returns.",
  },
  {
    icon: BatteryCharging,
    title: "Performance Optimized",
    description:
      "Efficient memory management, lazy loading, and optimized animations to ensure smooth 60fps performance on any device.",
  },
];

const techStack = [
  { name: "React Native", category: "Framework" },
  { name: "Flutter", category: "Framework" },
  { name: "Swift", category: "iOS Native" },
  { name: "Kotlin", category: "Android Native" },
  { name: "TypeScript", category: "Language" },
  { name: "Firebase", category: "Backend" },
  { name: "GraphQL", category: "API" },
  { name: "Redux / Zustand", category: "State Mgmt" },
  { name: "Expo", category: "Toolchain" },
  { name: "Fastlane", category: "CI/CD" },
  { name: "App Center", category: "Distribution" },
  { name: "Sentry", category: "Monitoring" },
];

const process = [
  {
    step: 1,
    title: "Product Strategy & Planning",
    description:
      "We define your app's core value proposition, target audience, and feature roadmap. User personas and competitive analysis inform every decision.",
  },
  {
    step: 2,
    title: "UI/UX Design & Prototyping",
    description:
      "Interactive prototypes in Figma let you experience the app before development begins. We iterate on user flows, micro-interactions, and visual design.",
  },
  {
    step: 3,
    title: "Agile Development",
    description:
      "Two-week sprints with regular demo sessions. You see working builds frequently and can provide feedback that shapes the product in real time.",
  },
  {
    step: 4,
    title: "Testing & Quality Assurance",
    description:
      "Automated and manual testing across dozens of devices. Performance profiling, accessibility audits, and security penetration testing.",
  },
  {
    step: 5,
    title: "Store Submission & Launch",
    description:
      "We handle the entire App Store and Google Play submission process, including screenshots, descriptions, and compliance requirements.",
  },
  {
    step: 6,
    title: "Post-Launch Support",
    description:
      "Ongoing maintenance, crash monitoring, user analytics, and iterative feature updates to keep your app growing.",
  },
];

export default function MobileAppDevelopmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-24 pb-16 dark:bg-gray-950">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-teal-100/60 blur-3xl dark:bg-teal-900/20" />
          <div className="absolute -right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-100/50 blur-3xl dark:bg-cyan-900/15" />
        </div>
        <Container className="relative z-10">
          <FadeIn direction="up">
            <Badge variant="secondary" className="mb-6">
              Mobile App Development
            </Badge>
            <h1 className="mb-6 max-w-4xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
              Mobile Apps That Users{" "}
              <span className="text-teal-600 dark:text-teal-400">
                Love to Use
              </span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              We build beautiful, high-performance mobile applications for iOS
              and Android that delight users and drive business growth. From
              startups to enterprise, our apps are designed to scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="secondary" size="lg" href="/contact">
                Discuss Your App
                <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" href="/portfolio">
                View Case Studies
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <Container>
          <SectionHeading
            badge="Capabilities"
            title="Everything Your App Needs"
            description="From concept to App Store, we cover every aspect of mobile development with expertise and care."
          />
          <StaggerChildren
            staggerDelay={0.08}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature) => (
              <Card key={feature.title} variant="bordered" hover>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900/30">
                  <feature.icon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
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
            title="Technologies We Use"
            description="We choose the right tools for each project, whether it is cross-platform efficiency or native performance."
          />
          <FadeIn direction="up">
            <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-50 p-4 text-center transition-colors hover:border-teal-300 hover:bg-teal-50 dark:border-gray-700 dark:bg-gray-900 dark:hover:border-teal-600 dark:hover:bg-teal-900/20"
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
            title="From Idea to App Store in 6 Steps"
            description="Our structured approach ensures quality, transparency, and a smooth development experience."
          />
          <div className="space-y-8">
            {process.map((item, index) => (
              <FadeIn key={item.step} direction="up" delay={index * 0.1}>
                <div className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-600 text-lg font-bold text-white dark:bg-teal-500">
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
      <section className="bg-white py-20 dark:bg-gray-950">
        <Container className="text-center">
          <FadeIn direction="up">
            <SectionHeading
              badge="Investment"
              title="Flexible Pricing for Every Stage"
              description="Whether you are validating an idea or scaling a product, we have a plan that fits."
            />
            <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
              {[
                {
                  tier: "MVP",
                  range: "$10,000 - $30,000",
                  desc: "Validate your idea quickly",
                },
                {
                  tier: "Growth",
                  range: "$30,000 - $80,000",
                  desc: "Feature-rich cross-platform apps",
                },
                {
                  tier: "Enterprise",
                  range: "$80,000+",
                  desc: "Complex, mission-critical apps",
                },
              ].map((p) => (
                <Card key={p.tier} variant="bordered" className="text-center">
                  <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    {p.tier}
                  </h3>
                  <p className="mb-2 text-2xl font-extrabold text-teal-600 dark:text-teal-400">
                    {p.range}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {p.desc}
                  </p>
                </Card>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/contact" variant="secondary" size="lg">
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
