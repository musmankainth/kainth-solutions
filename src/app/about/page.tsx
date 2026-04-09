import type { Metadata } from "next";
import {
  Users,
  Target,
  Lightbulb,
  Heart,
  Shield,
  Rocket,
  Calendar,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SlideIn";
import StaggerChildren from "@/components/animations/StaggerChildren";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Us | Kainth Solutions",
  description:
    "Learn about Kainth Solutions — our mission, team, values, and the journey from a startup to a global digital agency serving clients worldwide.",
  openGraph: {
    title: "About Us | Kainth Solutions",
    description:
      "Meet the team behind Kainth Solutions and discover our mission to build the digital future.",
    url: "https://kainthsolutions.com/about",
  },
};

const teamMembers = [
  {
    name: "Arjun Kainth",
    role: "Founder & CEO",
    bio: "Visionary leader with 12+ years in digital innovation. Arjun founded Kainth Solutions to bridge the gap between cutting-edge technology and business growth.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    name: "Priya Sharma",
    role: "Head of Engineering",
    bio: "Full-stack architect passionate about scalable systems. Priya leads our engineering team in building robust, future-proof solutions.",
    gradient: "from-teal-400 to-cyan-600",
  },
  {
    name: "Marcus Chen",
    role: "Creative Director",
    bio: "Award-winning designer who transforms complex ideas into elegant interfaces. Marcus ensures every pixel serves a purpose.",
    gradient: "from-orange-400 to-red-500",
  },
  {
    name: "Sofia Rodriguez",
    role: "Head of Digital Marketing",
    bio: "Data-driven strategist with a talent for storytelling. Sofia crafts campaigns that connect brands with their ideal audiences.",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    name: "David Okonkwo",
    role: "Lead Mobile Developer",
    bio: "Cross-platform specialist who builds seamless mobile experiences. David has shipped apps with millions of downloads.",
    gradient: "from-emerald-400 to-teal-600",
  },
  {
    name: "Emma Johansson",
    role: "Project Manager",
    bio: "Certified PMP who keeps projects on track and stakeholders aligned. Emma ensures every deliverable exceeds expectations.",
    gradient: "from-amber-400 to-orange-600",
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We embrace emerging technologies and creative approaches to solve complex challenges in ways others haven't imagined.",
  },
  {
    icon: Heart,
    title: "Client Partnership",
    description:
      "We treat every project as a true partnership. Your success is our success, and we go the extra mile to deliver exceptional results.",
  },
  {
    icon: Shield,
    title: "Quality & Integrity",
    description:
      "We write clean, maintainable code and deliver transparent communication. No shortcuts, no surprises.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Every decision we make is backed by data and focused on measurable outcomes that drive real business growth.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Great work happens when diverse minds come together. We foster an inclusive environment where every voice matters.",
  },
  {
    icon: Rocket,
    title: "Continuous Growth",
    description:
      "We invest in learning and development to stay at the forefront of technology and deliver cutting-edge solutions.",
  },
];

const timeline = [
  {
    year: "2018",
    title: "Founded in a Garage",
    description:
      "Arjun Kainth started with a laptop and a vision to make premium digital services accessible to businesses of all sizes.",
  },
  {
    year: "2019",
    title: "First Major Client",
    description:
      "Secured our first enterprise contract with a Fortune 500 retail company, building their customer-facing web platform.",
  },
  {
    year: "2020",
    title: "Team of 10",
    description:
      "Expanded the team and moved into our first office. Launched our mobile development division during the remote-work boom.",
  },
  {
    year: "2021",
    title: "Digital Marketing Launch",
    description:
      "Added a full-service digital marketing arm, offering SEO, PPC, and social media management alongside our dev services.",
  },
  {
    year: "2023",
    title: "50+ Clients Milestone",
    description:
      "Celebrated serving over 50 clients across 12 industries with a 98% client satisfaction rate.",
  },
  {
    year: "2025",
    title: "Global Expansion",
    description:
      "Opened satellite offices in London and Toronto. Team grew to 35+ talented professionals serving clients worldwide.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-24 pb-16 dark:bg-gray-950">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-3xl dark:bg-blue-900/15" />
          <div className="absolute -right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-teal-100/40 blur-3xl dark:bg-teal-900/10" />
        </div>
        <Container className="relative z-10">
          <FadeIn direction="up">
            <Badge variant="primary" className="mb-6">
              About Us
            </Badge>
            <h1 className="mb-6 max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
              Building the Digital Future,{" "}
              <span className="text-blue-900 dark:text-blue-400">
                One Project at a Time
              </span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              We are a team of designers, engineers, and strategists who are
              passionate about crafting digital experiences that make a real
              difference. Since 2018, we have helped businesses across the globe
              transform their ideas into powerful digital products.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <SlideIn direction="left">
              <Card variant="bordered" className="h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
                  <Target className="h-6 w-6 text-blue-900 dark:text-blue-400" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed dark:text-gray-400">
                  To empower businesses with innovative digital solutions that
                  drive growth, enhance user experience, and create lasting
                  competitive advantages. We believe technology should be a
                  catalyst for success, not a barrier.
                </p>
              </Card>
            </SlideIn>
            <SlideIn direction="right">
              <Card variant="bordered" className="h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900/30">
                  <Rocket className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed dark:text-gray-400">
                  To be the most trusted digital partner for ambitious businesses
                  worldwide. We envision a future where every company, regardless
                  of size, has access to world-class digital tools and
                  strategies.
                </p>
              </Card>
            </SlideIn>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="bg-white py-20 dark:bg-gray-950">
        <Container>
          <SectionHeading
            badge="Our Team"
            title="Meet the People Behind the Work"
            description="Our diverse team brings together expertise from engineering, design, marketing, and strategy to deliver exceptional results."
          />
          <StaggerChildren
            staggerDelay={0.1}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {teamMembers.map((member) => (
              <Card key={member.name} variant="bordered" hover>
                <div className="mb-4 flex items-center gap-4">
                  <div
                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${member.gradient} text-xl font-bold text-white`}
                  >
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-blue-900 dark:text-blue-400">
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {member.bio}
                </p>
              </Card>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <Container>
          <SectionHeading
            badge="Our Values"
            title="What Drives Us Every Day"
            description="These core principles guide every decision we make and every line of code we write."
          />
          <StaggerChildren
            staggerDelay={0.08}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {values.map((value) => (
              <Card key={value.title} variant="bordered" hover>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
                  <value.icon className="h-6 w-6 text-blue-900 dark:text-blue-400" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </Card>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* Timeline */}
      <section className="bg-white py-20 dark:bg-gray-950">
        <Container size="narrow">
          <SectionHeading
            badge="Our Journey"
            title="From Startup to Global Agency"
            description="A look at the milestones that shaped who we are today."
          />
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 sm:left-1/2 sm:-translate-x-px" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <FadeIn
                  key={item.year}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 0.1}
                >
                  <div
                    className={`relative flex items-start gap-6 sm:gap-12 ${
                      index % 2 === 0
                        ? "sm:flex-row"
                        : "sm:flex-row-reverse sm:text-right"
                    }`}
                  >
                    <div className="hidden flex-1 sm:block" />
                    {/* Dot */}
                    <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-900 ring-4 ring-white dark:bg-blue-500 dark:ring-gray-950 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                      <Calendar className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <Badge variant="accent" size="sm" className="mb-2">
                        {item.year}
                      </Badge>
                      <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
