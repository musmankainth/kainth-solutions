import type {
  NavLink,
  Service,
  Project,
  BlogPost,
  Testimonial,
  PricingTier,
  ProcessStep,
  TechItem,
  SiteSettings,
} from "@/types";

// ─── Site Settings ───────────────────────────────────────────────────────────

export const siteSettings: SiteSettings = {
  siteName: "Kainth Solutions",
  siteUrl: "https://kainthsolutions.com",
  description:
    "Kainth Solutions is a full-service digital agency specializing in web development, mobile apps, UI/UX design, and digital marketing. We build products that scale.",
  ogImage: "/images/og-image.jpg",
  twitterHandle: "@kainthsolutions",
};

export const companyInfo = {
  name: "Kainth Solutions",
  tagline: "Transforming Ideas Into Digital Reality",
  email: "info@kainthsolutions.com",
  phone: "+923207551031",
  address: {
    street: "123 Innovation Drive, Suite 400",
    city: "San Francisco",
    state: "CA",
    zip: "94105",
    country: "United States",
  },
  founded: 2018,
};

// ─── Navigation ──────────────────────────────────────────────────────────────

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// ─── Social Links ────────────────────────────────────────────────────────────

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/kainthsolutions", icon: "Github" },
  { label: "LinkedIn", href: "https://linkedin.com/company/kainthsolutions", icon: "Linkedin" },
  { label: "Twitter", href: "https://twitter.com/kainthsolutions", icon: "Twitter" },
  { label: "Instagram", href: "https://instagram.com/kainthsolutions", icon: "Instagram" },
  { label: "YouTube", href: "https://youtube.com/@kainthsolutions", icon: "Youtube" },
];

// ─── Services ────────────────────────────────────────────────────────────────

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "We craft high-performance, scalable web applications using modern frameworks like Next.js, React, and Node.js. From dynamic SPAs to complex enterprise platforms, we deliver pixel-perfect results.",
    icon: "Globe",
    features: [
      "Custom web application development",
      "Progressive Web Apps (PWA)",
      "E-commerce solutions",
      "CMS development & integration",
      "API development & integration",
      "Performance optimization",
    ],
    href: "/services/web-development",
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    description:
      "Build native and cross-platform mobile applications that users love. We specialize in React Native and Flutter to deliver seamless experiences on both iOS and Android.",
    icon: "Smartphone",
    features: [
      "iOS & Android native apps",
      "Cross-platform development (React Native, Flutter)",
      "App Store & Play Store deployment",
      "Push notifications & real-time features",
      "Offline-first architecture",
      "App maintenance & updates",
    ],
    href: "/services/mobile-app-development",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Grow your online presence with data-driven digital marketing strategies. From SEO to paid advertising, we help you reach and convert your target audience.",
    icon: "TrendingUp",
    features: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click advertising (PPC)",
      "Social media marketing",
      "Content strategy & marketing",
      "Email marketing & automation",
      "Analytics & conversion optimization",
    ],
    href: "/services/digital-marketing",
  },
];

// ─── Pricing Tiers ───────────────────────────────────────────────────────────

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for small businesses and startups looking to establish their online presence.",
    price: "$2,999",
    period: "per project",
    features: [
      "Responsive website (up to 5 pages)",
      "Basic SEO setup",
      "Contact form integration",
      "Mobile-friendly design",
      "1 month of post-launch support",
      "Content Management System",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    id: "professional",
    name: "Professional",
    description: "Ideal for growing businesses that need a robust digital solution with custom features.",
    price: "$7,999",
    period: "per project",
    features: [
      "Custom web application",
      "Advanced UI/UX design",
      "API integrations",
      "E-commerce functionality",
      "Advanced SEO & analytics",
      "3 months of post-launch support",
      "Performance optimization",
      "Security audit",
    ],
    highlighted: true,
    cta: "Most Popular",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Comprehensive digital solutions for large organizations with complex requirements.",
    price: "Custom",
    period: "tailored pricing",
    features: [
      "Full-stack custom development",
      "Dedicated project manager",
      "Cloud infrastructure setup",
      "CI/CD pipeline configuration",
      "24/7 priority support",
      "SLA guarantees",
      "Scalability planning",
      "Training & documentation",
      "Ongoing maintenance & updates",
    ],
    highlighted: false,
    cta: "Contact Us",
  },
];

// ─── Process Steps ───────────────────────────────────────────────────────────

export const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    step: 1,
    title: "Discovery & Strategy",
    description:
      "We start by deeply understanding your business goals, target audience, and competitive landscape. Through workshops and research, we define a clear roadmap for success.",
    icon: "Search",
  },
  {
    id: "planning",
    step: 2,
    title: "Planning & Architecture",
    description:
      "Our team creates detailed project plans, technical architecture documents, and timelines. We define milestones and set clear expectations from the start.",
    icon: "FileText",
  },
  {
    id: "design",
    step: 3,
    title: "UI/UX Design",
    description:
      "We craft wireframes, prototypes, and high-fidelity designs that bring your vision to life. Every design decision is backed by user research and best practices.",
    icon: "Palette",
  },
  {
    id: "development",
    step: 4,
    title: "Development",
    description:
      "Our engineers build your solution using modern, scalable technologies. We follow agile methodologies with regular demos and feedback loops.",
    icon: "Code",
  },
  {
    id: "testing",
    step: 5,
    title: "Quality Assurance",
    description:
      "Rigorous testing across devices, browsers, and scenarios ensures your product is rock-solid. We perform automated and manual testing for complete coverage.",
    icon: "CheckCircle",
  },
  {
    id: "launch",
    step: 6,
    title: "Launch & Deployment",
    description:
      "We handle the entire deployment process including server setup, domain configuration, SSL, and performance optimization for a smooth go-live.",
    icon: "Rocket",
  },
  {
    id: "support",
    step: 7,
    title: "Support & Growth",
    description:
      "Post-launch, we provide ongoing support, monitoring, and iterative improvements. We help you analyze data and continuously optimize for better results.",
    icon: "HeartHandshake",
  },
];

// ─── Tech Stack ──────────────────────────────────────────────────────────────

export const techStack: TechItem[] = [
  // Frontend
  { name: "React", icon: "/images/tech/react.svg", category: "Frontend" },
  { name: "Next.js", icon: "/images/tech/nextjs.svg", category: "Frontend" },
  { name: "TypeScript", icon: "/images/tech/typescript.svg", category: "Frontend" },
  { name: "Tailwind CSS", icon: "/images/tech/tailwind.svg", category: "Frontend" },
  { name: "Vue.js", icon: "/images/tech/vue.svg", category: "Frontend" },
  { name: "Angular", icon: "/images/tech/angular.svg", category: "Frontend" },

  // Backend
  { name: "Node.js", icon: "/images/tech/nodejs.svg", category: "Backend" },
  { name: "Python", icon: "/images/tech/python.svg", category: "Backend" },
  { name: "Go", icon: "/images/tech/go.svg", category: "Backend" },
  { name: "Rust", icon: "/images/tech/rust.svg", category: "Backend" },
  { name: "GraphQL", icon: "/images/tech/graphql.svg", category: "Backend" },
  { name: "REST APIs", icon: "/images/tech/rest.svg", category: "Backend" },

  // Mobile
  { name: "React Native", icon: "/images/tech/react-native.svg", category: "Mobile" },
  { name: "Flutter", icon: "/images/tech/flutter.svg", category: "Mobile" },
  { name: "Swift", icon: "/images/tech/swift.svg", category: "Mobile" },
  { name: "Kotlin", icon: "/images/tech/kotlin.svg", category: "Mobile" },

  // Cloud & DevOps
  { name: "AWS", icon: "/images/tech/aws.svg", category: "Cloud & DevOps" },
  { name: "Google Cloud", icon: "/images/tech/gcp.svg", category: "Cloud & DevOps" },
  { name: "Docker", icon: "/images/tech/docker.svg", category: "Cloud & DevOps" },
  { name: "Kubernetes", icon: "/images/tech/kubernetes.svg", category: "Cloud & DevOps" },
  { name: "Terraform", icon: "/images/tech/terraform.svg", category: "Cloud & DevOps" },
  { name: "GitHub Actions", icon: "/images/tech/github-actions.svg", category: "Cloud & DevOps" },

  // Database
  { name: "PostgreSQL", icon: "/images/tech/postgresql.svg", category: "Database" },
  { name: "MongoDB", icon: "/images/tech/mongodb.svg", category: "Database" },
  { name: "Redis", icon: "/images/tech/redis.svg", category: "Database" },
  { name: "Supabase", icon: "/images/tech/supabase.svg", category: "Database" },

  // CMS & Tools
  { name: "Sanity", icon: "/images/tech/sanity.svg", category: "CMS & Tools" },
  { name: "Figma", icon: "/images/tech/figma.svg", category: "CMS & Tools" },
  { name: "Stripe", icon: "/images/tech/stripe.svg", category: "CMS & Tools" },
  { name: "Vercel", icon: "/images/tech/vercel.svg", category: "CMS & Tools" },
];

// ─── Testimonials (Mock Data) ────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Sarah Chen",
    role: "CTO",
    company: "FinovateX",
    avatar: "/images/testimonials/sarah-chen.jpg",
    content:
      "Kainth Solutions transformed our outdated banking platform into a sleek, modern fintech application. Their team's expertise in React and Node.js was evident from day one. The project was delivered on time and exceeded our performance benchmarks by 40%.",
    rating: 5,
    project: "FinovateX Banking Platform",
  },
  {
    id: "testimonial-2",
    name: "Marcus Rivera",
    role: "Founder & CEO",
    company: "GreenLeaf Marketplace",
    avatar: "/images/testimonials/marcus-rivera.jpg",
    content:
      "Working with Kainth Solutions was a game-changer for our e-commerce business. They built a custom marketplace that handles thousands of transactions daily without a hitch. Their attention to UX detail and performance optimization is second to none.",
    rating: 5,
    project: "GreenLeaf E-commerce Platform",
  },
  {
    id: "testimonial-3",
    name: "Dr. Aisha Patel",
    role: "Head of Digital",
    company: "MedConnect Health",
    avatar: "/images/testimonials/aisha-patel.jpg",
    content:
      "The telemedicine platform Kainth Solutions developed for us has been instrumental in expanding our reach to rural communities. Their understanding of HIPAA compliance and healthcare workflows made the entire process seamless and stress-free.",
    rating: 5,
    project: "MedConnect Telemedicine App",
  },
  {
    id: "testimonial-4",
    name: "James O'Connor",
    role: "VP of Engineering",
    company: "LogiTrack Systems",
    avatar: "/images/testimonials/james-oconnor.jpg",
    content:
      "Kainth Solutions helped us modernize our logistics platform with a microservices architecture and real-time tracking. Their DevOps expertise cut our deployment time from days to minutes. Truly exceptional technical talent.",
    rating: 5,
    project: "LogiTrack Logistics Dashboard",
  },
  {
    id: "testimonial-5",
    name: "Elena Kowalski",
    role: "Marketing Director",
    company: "Artisan Collective",
    avatar: "/images/testimonials/elena-kowalski.jpg",
    content:
      "The website and digital marketing strategy Kainth Solutions created for us increased our online sales by 180% in just six months. They don't just build beautiful websites; they build revenue-generating machines.",
    rating: 5,
    project: "Artisan Collective Brand Website",
  },
  {
    id: "testimonial-6",
    name: "David Nakamura",
    role: "Product Manager",
    company: "EduSpark Learning",
    avatar: "/images/testimonials/david-nakamura.jpg",
    content:
      "Kainth Solutions built our AI-powered learning platform from the ground up. Their ability to integrate complex machine learning models into an intuitive interface was impressive. Student engagement went up 65% after launch.",
    rating: 5,
    project: "EduSpark AI Learning Platform",
  },
];

// ─── Portfolio Projects (Mock Data) ──────────────────────────────────────────

export const portfolioProjects: Project[] = [
  {
    id: "project-1",
    title: "FinovateX Banking Platform",
    slug: "finovatex-banking-platform",
    description:
      "A comprehensive digital banking platform featuring real-time transactions, advanced analytics dashboards, and AI-powered fraud detection. Built with Next.js and a microservices backend.",
    category: "Web Development",
    tags: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Fintech"],
    image: "/images/portfolio/finovatex.jpg",
    liveUrl: "https://finovatex.com",
    client: "FinovateX",
    testimonial: "testimonial-1",
    featured: true,
  },
  {
    id: "project-2",
    title: "GreenLeaf Marketplace",
    slug: "greenleaf-marketplace",
    description:
      "A sustainable products marketplace connecting eco-conscious consumers with verified green vendors. Features real-time inventory, smart recommendations, and carbon-offset tracking.",
    category: "E-commerce",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
    image: "/images/portfolio/greenleaf.jpg",
    liveUrl: "https://greenleafmarket.com",
    client: "GreenLeaf Marketplace",
    testimonial: "testimonial-2",
    featured: true,
  },
  {
    id: "project-3",
    title: "MedConnect Telemedicine",
    slug: "medconnect-telemedicine",
    description:
      "A HIPAA-compliant telemedicine platform enabling video consultations, digital prescriptions, and patient record management. Serves over 50,000 patients across rural communities.",
    category: "Mobile App",
    tags: ["React Native", "Python", "WebRTC", "AWS", "Healthcare"],
    image: "/images/portfolio/medconnect.jpg",
    liveUrl: "https://medconnecthealth.com",
    client: "MedConnect Health",
    testimonial: "testimonial-3",
    featured: true,
  },
  {
    id: "project-4",
    title: "LogiTrack Logistics Dashboard",
    slug: "logitrack-logistics-dashboard",
    description:
      "An enterprise logistics management system with real-time fleet tracking, route optimization, and predictive maintenance alerts. Reduced delivery times by 25%.",
    category: "Web Development",
    tags: ["Next.js", "Go", "Kubernetes", "Google Maps", "IoT"],
    image: "/images/portfolio/logitrack.jpg",
    liveUrl: "https://logitrack.io",
    client: "LogiTrack Systems",
    testimonial: "testimonial-4",
    featured: true,
  },
  {
    id: "project-5",
    title: "Artisan Collective Brand Site",
    slug: "artisan-collective-brand-site",
    description:
      "A visually stunning brand website and e-commerce experience for a luxury artisan goods collective. Features immersive product showcases with 3D viewers and seamless checkout.",
    category: "UI/UX Design",
    tags: ["Next.js", "Three.js", "Sanity CMS", "Stripe", "GSAP"],
    image: "/images/portfolio/artisan.jpg",
    liveUrl: "https://artisancollective.co",
    client: "Artisan Collective",
    testimonial: "testimonial-5",
    featured: false,
  },
  {
    id: "project-6",
    title: "EduSpark AI Learning Platform",
    slug: "eduspark-ai-learning-platform",
    description:
      "An adaptive learning platform powered by AI that personalizes curriculum paths for each student. Includes live tutoring, progress analytics, and gamified learning modules.",
    category: "AI & Machine Learning",
    tags: ["React", "Python", "TensorFlow", "PostgreSQL", "EdTech"],
    image: "/images/portfolio/eduspark.jpg",
    liveUrl: "https://eduspark.io",
    client: "EduSpark Learning",
    testimonial: "testimonial-6",
    featured: true,
  },
  {
    id: "project-7",
    title: "CloudVault File Manager",
    slug: "cloudvault-file-manager",
    description:
      "A secure, enterprise-grade cloud file management system with end-to-end encryption, granular permissions, version history, and real-time collaborative editing.",
    category: "Cloud & DevOps",
    tags: ["Vue.js", "Rust", "AWS S3", "Docker", "WebSocket"],
    image: "/images/portfolio/cloudvault.jpg",
    liveUrl: "https://cloudvault.dev",
    client: "CloudVault Inc.",
    featured: false,
  },
  {
    id: "project-8",
    title: "FitPulse Fitness App",
    slug: "fitpulse-fitness-app",
    description:
      "A comprehensive fitness and wellness mobile app featuring AI-powered workout plans, nutrition tracking, wearable device integration, and social challenges with friends.",
    category: "Mobile App",
    tags: ["Flutter", "Node.js", "Firebase", "HealthKit", "Wearables"],
    image: "/images/portfolio/fitpulse.jpg",
    liveUrl: "https://fitpulse.app",
    client: "FitPulse Wellness",
    featured: false,
  },
];

// ─── Blog Posts (Mock Data) ──────────────────────────────────────────────────

export const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "The Future of Web Development: What to Expect in 2026 and Beyond",
    slug: "future-of-web-development-2026",
    excerpt:
      "Explore the cutting-edge trends shaping web development in 2026, from server components and edge computing to AI-assisted coding and WebAssembly adoption.",
    content: "",
    category: "Web Development",
    tags: ["Next.js", "React", "Web Development", "Trends", "Server Components"],
    image: "/images/blog/future-web-dev.jpg",
    author: {
      name: "Arjun Kainth",
      avatar: "/images/team/arjun-kainth.jpg",
      role: "Founder & Lead Developer",
    },
    publishedAt: "2026-03-15",
    readingTime: "8 min read",
  },
  {
    id: "post-2",
    title: "Building Scalable Microservices: Lessons from 50+ Enterprise Projects",
    slug: "building-scalable-microservices",
    excerpt:
      "Drawing from our experience building microservices for enterprises, we share practical lessons on architecture patterns, deployment strategies, and common pitfalls to avoid.",
    content: "",
    category: "Backend",
    tags: ["Microservices", "Architecture", "DevOps", "Kubernetes", "Scalability"],
    image: "/images/blog/microservices.jpg",
    author: {
      name: "Priya Sharma",
      avatar: "/images/team/priya-sharma.jpg",
      role: "Senior Backend Engineer",
    },
    publishedAt: "2026-02-28",
    readingTime: "12 min read",
  },
  {
    id: "post-3",
    title: "Designing for Accessibility: A Practical Guide for Modern Web Apps",
    slug: "designing-for-accessibility",
    excerpt:
      "Accessibility is not an afterthought; it is a fundamental part of great design. Learn how to build inclusive web experiences that work for everyone, with practical code examples.",
    content: "",
    category: "UI/UX Design",
    tags: ["Accessibility", "a11y", "WCAG", "Inclusive Design", "UX"],
    image: "/images/blog/accessibility.jpg",
    author: {
      name: "Maya Rodriguez",
      avatar: "/images/team/maya-rodriguez.jpg",
      role: "Lead UI/UX Designer",
    },
    publishedAt: "2026-02-10",
    readingTime: "10 min read",
  },
];
