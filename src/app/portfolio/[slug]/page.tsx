import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Calendar,
  Users,
  Clock,
  Quote,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import CTASection from "@/components/sections/CTASection";

const projects = [
  {
    slug: "ecommerce-platform-redesign",
    title: "E-Commerce Platform Redesign",
    client: "Urban Threads",
    category: "E-Commerce",
    industry: "Fashion & Retail",
    duration: "4 months",
    team: "5 members",
    year: "2024",
    gradient: "from-blue-500 to-indigo-600",
    description:
      "Urban Threads needed a complete overhaul of their aging e-commerce platform. Their existing site was slow, difficult to navigate, and had an outdated checkout flow that was driving customers away.",
    challenge:
      "The existing platform was built on legacy technology with page load times averaging 8 seconds. The mobile experience was essentially broken, and the checkout abandonment rate had climbed to 78%. Urban Threads was losing market share to competitors with modern, fast-loading storefronts.",
    solution:
      "We rebuilt the entire platform from scratch using Next.js and Shopify Headless Commerce. Our approach included a mobile-first responsive design, server-side rendering for instant page loads, a streamlined one-page checkout, and integration with their existing inventory management system. We also implemented AI-powered product recommendations to increase average order value.",
    results: [
      { metric: "156%", label: "Increase in conversion rate" },
      { metric: "40%", label: "Faster page load times" },
      { metric: "89%", label: "Reduction in cart abandonment" },
      { metric: "$2.4M", label: "Revenue increase in first quarter" },
    ],
    techStack: [
      "Next.js",
      "Shopify Headless",
      "Tailwind CSS",
      "TypeScript",
      "Vercel",
      "Algolia",
      "Stripe",
      "Sanity CMS",
    ],
    testimonial: {
      quote:
        "Kainth Solutions transformed our entire online presence. The new platform is lightning fast and our customers love the experience. Our sales numbers speak for themselves.",
      name: "Jessica Park",
      role: "VP of Digital, Urban Threads",
    },
  },
  {
    slug: "fintech-mobile-app",
    title: "FinTech Mobile App",
    client: "PayFlow",
    category: "Mobile Apps",
    industry: "Financial Technology",
    duration: "6 months",
    team: "7 members",
    year: "2024",
    gradient: "from-teal-400 to-cyan-600",
    description:
      "PayFlow wanted to disrupt the mobile banking space with a next-generation app that makes money management simple, secure, and even enjoyable.",
    challenge:
      "The fintech space is crowded and highly regulated. PayFlow needed an app that could handle real-time transactions with bank-level security, pass rigorous compliance audits, and still deliver an intuitive user experience that would attract a younger demographic.",
    solution:
      "We developed a cross-platform app using React Native with a custom Node.js backend. Security features included biometric authentication, end-to-end encryption, and fraud detection. We designed a gamified savings experience with visual progress tracking and social challenges to boost engagement.",
    results: [
      { metric: "200K+", label: "Active users in 6 months" },
      { metric: "4.8", label: "App Store rating" },
      { metric: "$45M", label: "Transaction volume per month" },
      { metric: "12 min", label: "Average daily session time" },
    ],
    techStack: [
      "React Native",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Plaid API",
      "Stripe Connect",
      "Sentry",
    ],
    testimonial: {
      quote:
        "The team at Kainth Solutions understood our vision from day one. They built an app that not only meets all regulatory requirements but genuinely delights our users.",
      name: "Raj Mehta",
      role: "CEO, PayFlow",
    },
  },
  {
    slug: "healthcare-portal",
    title: "Healthcare Patient Portal",
    client: "MedConnect",
    category: "Web Development",
    industry: "Healthcare",
    duration: "5 months",
    team: "6 members",
    year: "2023",
    gradient: "from-emerald-400 to-green-600",
    description:
      "MedConnect required a HIPAA-compliant patient portal that would streamline appointment scheduling, telemedicine, and medical records access.",
    challenge:
      "Healthcare platforms demand the highest levels of security and compliance. MedConnect needed to integrate with multiple EHR systems while providing a simple, accessible interface for patients of all ages and technical abilities.",
    solution:
      "We built a React-based portal with a robust Express backend, implementing HIPAA-compliant data handling, role-based access control, and seamless EHR integration. The telemedicine feature supports HD video consultations with screen sharing for reviewing medical images.",
    results: [
      { metric: "60%", label: "Reduction in no-show appointments" },
      { metric: "35K", label: "Monthly active patients" },
      { metric: "4.7", label: "Patient satisfaction score" },
      { metric: "85%", label: "Telehealth adoption rate" },
    ],
    techStack: [
      "React",
      "Express",
      "MongoDB",
      "WebRTC",
      "AWS HIPAA",
      "Auth0",
      "HL7 FHIR",
      "Docker",
    ],
    testimonial: {
      quote:
        "Our patient engagement has skyrocketed since launching the portal. Kainth Solutions delivered a secure, intuitive platform that both our staff and patients love.",
      name: "Dr. Sarah Chen",
      role: "CTO, MedConnect",
    },
  },
  {
    slug: "restaurant-chain-website",
    title: "Restaurant Chain Website",
    client: "Savory Kitchen",
    category: "Web Development",
    industry: "Food & Beverage",
    duration: "3 months",
    team: "4 members",
    year: "2024",
    gradient: "from-orange-400 to-red-500",
    description:
      "Savory Kitchen, a growing restaurant chain with 25 locations, needed a modern website with online ordering and location-specific menus.",
    challenge:
      "Managing content across 25 locations with different menus, hours, and promotions was a nightmare with their old static site. They also lacked online ordering, missing out on significant revenue.",
    solution:
      "We built a dynamic Next.js site with Sanity CMS, allowing each location manager to update their own menus and promotions. Online ordering integrates directly with their POS system, and the site achieves 90+ Lighthouse scores across all metrics.",
    results: [
      { metric: "90+", label: "Lighthouse performance score" },
      { metric: "34%", label: "Increase in online orders" },
      { metric: "2.1s", label: "Average page load time" },
      { metric: "25", label: "Locations managed from one CMS" },
    ],
    techStack: [
      "Next.js",
      "Sanity CMS",
      "Stripe",
      "Tailwind CSS",
      "Vercel",
      "Square POS API",
      "Google Maps",
      "Twilio",
    ],
    testimonial: {
      quote:
        "Finally, a website that works as hard as we do. Managing 25 locations from one dashboard has been a game-changer for our operations team.",
      name: "Marco DeLuca",
      role: "COO, Savory Kitchen",
    },
  },
  {
    slug: "fitness-tracking-app",
    title: "Fitness Tracking App",
    client: "FitPulse",
    category: "Mobile Apps",
    industry: "Health & Fitness",
    duration: "5 months",
    team: "6 members",
    year: "2024",
    gradient: "from-purple-400 to-pink-500",
    description:
      "FitPulse wanted to create the most engaging fitness app on the market with AI-powered workout plans and social features.",
    challenge:
      "The fitness app market is saturated. FitPulse needed features that would differentiate them: truly personalized AI workout plans, seamless wearable integration, and social features that kept users coming back.",
    solution:
      "We built the app with Flutter for smooth cross-platform performance and integrated TensorFlow Lite for on-device AI workout recommendations. Social challenges, leaderboards, and achievement systems gamify the experience. Integration with Apple Health, Google Fit, and popular wearables ensures comprehensive tracking.",
    results: [
      { metric: "500K+", label: "Downloads in first 3 months" },
      { metric: "4.9", label: "App Store rating" },
      { metric: "68%", label: "30-day user retention" },
      { metric: "23 min", label: "Average daily usage" },
    ],
    techStack: [
      "Flutter",
      "Firebase",
      "TensorFlow Lite",
      "Node.js",
      "Apple HealthKit",
      "Google Fit",
      "RevenueCat",
      "Mixpanel",
    ],
    testimonial: {
      quote:
        "The AI workout feature alone sets us apart from every competitor. Kainth Solutions delivered something truly innovative that our users are obsessed with.",
      name: "Alex Rivera",
      role: "Founder, FitPulse",
    },
  },
  {
    slug: "real-estate-platform",
    title: "Real Estate Platform",
    client: "HomeVista",
    category: "Web Development",
    industry: "Real Estate",
    duration: "4 months",
    team: "5 members",
    year: "2023",
    gradient: "from-amber-400 to-orange-600",
    description:
      "HomeVista needed a modern property listing platform with virtual tours and intelligent property matching.",
    challenge:
      "Traditional real estate platforms feel outdated and generic. HomeVista wanted an immersive experience with virtual property tours, smart mortgage calculators, and AI-powered property recommendations based on user behavior.",
    solution:
      "We developed a Next.js platform with 3D virtual tour integration, an interactive mortgage calculator, and a recommendation engine powered by collaborative filtering. The admin panel lets agents manage listings, schedule showings, and track lead engagement.",
    results: [
      { metric: "50K", label: "Monthly active visitors" },
      { metric: "42%", label: "More lead conversions" },
      { metric: "3.5x", label: "Time on site increase" },
      { metric: "15K", label: "Active property listings" },
    ],
    techStack: [
      "Next.js",
      "Prisma",
      "AWS",
      "Three.js",
      "PostgreSQL",
      "Mapbox",
      "Elasticsearch",
      "Tailwind CSS",
    ],
    testimonial: {
      quote:
        "The virtual tour feature has been a revelation. Buyers can explore properties in detail before scheduling a visit, saving everyone time and increasing qualified leads.",
      name: "Linda Morrison",
      role: "Director of Technology, HomeVista",
    },
  },
  {
    slug: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    client: "DataPulse",
    category: "Web Development",
    industry: "SaaS / Analytics",
    duration: "5 months",
    team: "6 members",
    year: "2024",
    gradient: "from-sky-400 to-blue-600",
    description:
      "DataPulse required a real-time analytics dashboard to help SaaS companies track their most important metrics.",
    challenge:
      "SaaS companies struggle with fragmented data across multiple tools. DataPulse needed a unified dashboard that could ingest data from dozens of sources and present it in real-time with customizable views and automated alerts.",
    solution:
      "We built a React dashboard with D3.js visualizations and a GraphQL API layer that aggregates data from Stripe, Mixpanel, Intercom, and custom databases. Real-time WebSocket updates, drag-and-drop widget customization, and automated PDF reporting round out the feature set.",
    results: [
      { metric: "800+", label: "Companies using the platform" },
      { metric: "99.9%", label: "Uptime since launch" },
      { metric: "50ms", label: "Average API response time" },
      { metric: "NPS 72", label: "Net Promoter Score" },
    ],
    techStack: [
      "React",
      "D3.js",
      "GraphQL",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
    ],
    testimonial: {
      quote:
        "DataPulse has become the single source of truth for our SaaS metrics. The real-time dashboard Kainth Solutions built saves our team hours every week.",
      name: "Tom Bradley",
      role: "CEO, DataPulse",
    },
  },
  {
    slug: "nonprofit-campaign",
    title: "Nonprofit Digital Campaign",
    client: "GreenFuture",
    category: "Digital Marketing",
    industry: "Nonprofit / Environment",
    duration: "3 months",
    team: "4 members",
    year: "2024",
    gradient: "from-lime-400 to-emerald-600",
    description:
      "GreenFuture needed a multi-channel digital campaign to raise awareness and funds for their environmental conservation programs.",
    challenge:
      "As a nonprofit with a limited budget, GreenFuture needed maximum impact from every marketing dollar. They had low brand awareness, a small email list, and had never run paid digital campaigns before.",
    solution:
      "We developed a comprehensive digital marketing strategy spanning Google Ads (using the Ad Grants program), Meta advertising, SEO-optimized content marketing, and email automation. A compelling landing page with real-time donation tracking created urgency and social proof.",
    results: [
      { metric: "2.5M", label: "People reached" },
      { metric: "45K", label: "New email subscribers" },
      { metric: "$320K", label: "Donations raised" },
      { metric: "8.2x", label: "Return on ad spend" },
    ],
    techStack: [
      "Google Ads",
      "Meta Ads",
      "SEO",
      "Mailchimp",
      "Google Analytics",
      "Next.js",
      "Stripe",
      "Hotjar",
    ],
    testimonial: {
      quote:
        "We never imagined a digital campaign could have this kind of impact. Kainth Solutions helped us reach millions of people and raise more in 3 months than we did all of last year.",
      name: "Maria Santos",
      role: "Executive Director, GreenFuture",
    },
  },
];

function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  const prev = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;
  return { prev, next };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project Not Found | Kainth Solutions" };
  }

  return {
    title: `${project.title} | Portfolio | Kainth Solutions`,
    description: project.description,
    openGraph: {
      title: `${project.title} - Case Study`,
      description: project.description,
      url: `https://kainthsolutions.com/portfolio/${slug}`,
    },
  };
}

export default async function PortfolioCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <>
      {/* Hero */}
      <section
        className={`relative overflow-hidden bg-gradient-to-br ${project.gradient} pt-24 pb-16`}
      >
        <div className="pointer-events-none absolute inset-0 bg-black/20" />
        <Container className="relative z-10">
          <Link
            href="/portfolio"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
          <h1 className="mb-4 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/90">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-white/80">
              <Users className="h-5 w-5" />
              <span className="text-sm">{project.client}</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Clock className="h-5 w-5" />
              <span className="text-sm">{project.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Calendar className="h-5 w-5" />
              <span className="text-sm">{project.year}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Client Info Bar */}
      <section className="border-b border-gray-200 bg-white py-8 dark:border-gray-800 dark:bg-gray-950">
        <Container>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Client
              </p>
              <p className="mt-1 text-base font-bold text-gray-900 dark:text-white">
                {project.client}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Industry
              </p>
              <p className="mt-1 text-base font-bold text-gray-900 dark:text-white">
                {project.industry}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Duration
              </p>
              <p className="mt-1 text-base font-bold text-gray-900 dark:text-white">
                {project.duration}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Team Size
              </p>
              <p className="mt-1 text-base font-bold text-gray-900 dark:text-white">
                {project.team}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Challenge & Solution */}
      <section className="bg-white py-20 dark:bg-gray-950">
        <Container size="narrow">
          <div className="space-y-16">
            <div>
              <Badge variant="accent" className="mb-4">
                The Challenge
              </Badge>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
                Understanding the Problem
              </h2>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {project.challenge}
              </p>
            </div>

            <div>
              <Badge variant="secondary" className="mb-4">
                Our Solution
              </Badge>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
                How We Solved It
              </h2>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {project.solution}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Results */}
      <section className="bg-gray-900 py-16 dark:bg-gray-800">
        <Container>
          <h2 className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">
            The Results
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {project.results.map((r) => (
              <div key={r.label} className="text-center">
                <p className="text-3xl font-extrabold text-blue-400 sm:text-4xl">
                  {r.metric}
                </p>
                <p className="mt-2 text-sm text-gray-300">{r.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tech Stack */}
      <section className="bg-white py-16 dark:bg-gray-950">
        <Container size="narrow">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
            Technologies Used
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonial */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900">
        <Container size="narrow">
          <div className="mx-auto max-w-2xl text-center">
            <Quote className="mx-auto mb-6 h-10 w-10 text-blue-900/20 dark:text-blue-400/20" />
            <blockquote className="mb-6 text-xl font-medium leading-relaxed text-gray-900 italic dark:text-white">
              &ldquo;{project.testimonial.quote}&rdquo;
            </blockquote>
            <div>
              <p className="font-bold text-gray-900 dark:text-white">
                {project.testimonial.name}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {project.testimonial.role}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Next/Prev Navigation */}
      <section className="border-t border-gray-200 bg-white py-12 dark:border-gray-800 dark:bg-gray-950">
        <Container>
          <div className="flex items-center justify-between">
            {prev ? (
              <Link
                href={`/portfolio/${prev.slug}`}
                className="group flex items-center gap-3 text-left"
              >
                <ArrowLeft className="h-5 w-5 text-gray-400 transition-transform group-hover:-translate-x-1" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Previous
                  </p>
                  <p className="text-sm font-bold text-gray-900 group-hover:text-blue-900 dark:text-white dark:group-hover:text-blue-400">
                    {prev.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/portfolio/${next.slug}`}
                className="group flex items-center gap-3 text-right"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Next
                  </p>
                  <p className="text-sm font-bold text-gray-900 group-hover:text-blue-900 dark:text-white dark:group-hover:text-blue-400">
                    {next.title}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
