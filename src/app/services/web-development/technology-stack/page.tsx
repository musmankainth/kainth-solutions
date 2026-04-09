import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren from "@/components/animations/StaggerChildren";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Technology Stack | Kainth Solutions",
  description: "Modern web development technologies we use: Next.js, React, TypeScript, Node.js, AWS, PostgreSQL, and more.",
  openGraph: {
    title: "Web Development Technology Stack",
    url: "https://kainthsolutions.com/services/web-development/technology-stack",
  },
};

const techStack = [
  {
    category: "Frontend",
    items: [
      {
        name: "Next.js",
        description: "React framework with server-side rendering, static generation, and API routes for full-stack development.",
      },
      {
        name: "React",
        description: "Component-based UI library for building interactive, dynamic user interfaces.",
      },
      {
        name: "TypeScript",
        description: "Superset of JavaScript that adds static typing for safer, more maintainable code.",
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework for rapid, responsive UI development.",
      },
      {
        name: "Framer Motion",
        description: "Animation library for smooth, performant animations and page transitions.",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        description: "JavaScript runtime for building scalable server-side applications.",
      },
      {
        name: "Express.js",
        description: "Minimal web framework for building APIs and web servers.",
      },
      {
        name: "GraphQL",
        description: "Query language for APIs that allows clients to request exactly what they need.",
      },
      {
        name: "REST APIs",
        description: "Standard architectural style for building web services.",
      },
    ],
  },
  {
    category: "Database",
    items: [
      {
        name: "PostgreSQL",
        description: "Powerful open-source relational database with advanced features.",
      },
      {
        name: "MongoDB",
        description: "NoSQL database for flexible, document-based data storage.",
      },
      {
        name: "Redis",
        description: "In-memory data store for caching and real-time features.",
      },
      {
        name: "Firebase",
        description: "Google's platform for real-time database, authentication, and hosting.",
      },
    ],
  },
  {
    category: "Cloud & Deployment",
    items: [
      {
        name: "Vercel",
        description: "Optimal hosting for Next.js with automatic deployments and serverless functions.",
      },
      {
        name: "AWS",
        description: "Amazon's cloud services including EC2, S3, Lambda, RDS, and more.",
      },
      {
        name: "Google Cloud",
        description: "Google's cloud platform for compute, storage, and managed services.",
      },
      {
        name: "Docker",
        description: "Containerization for consistent development and production environments.",
      },
      {
        name: "Kubernetes",
        description: "Container orchestration for scaling applications.",
      },
    ],
  },
  {
    category: "CMS & Content",
    items: [
      {
        name: "Sanity",
        description: "Headless CMS with real-time collaboration and structured content management.",
      },
      {
        name: "Contentful",
        description: "Headless CMS with flexible content modeling and powerful APIs.",
      },
      {
        name: "Strapi",
        description: "Open-source headless CMS with customizable APIs.",
      },
    ],
  },
  {
    category: "E-commerce",
    items: [
      {
        name: "Shopify",
        description: "Complete e-commerce platform with themes, apps, and payment processing.",
      },
      {
        name: "Stripe",
        description: "Payment processing and billing platform for accepting payments.",
      },
      {
        name: "WooCommerce",
        description: "WordPress plugin for e-commerce functionality.",
      },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      {
        name: "Git & GitHub",
        description: "Version control and collaboration platform.",
      },
      {
        name: "CI/CD",
        description: "Continuous integration and deployment with GitHub Actions or GitLab CI.",
      },
      {
        name: "Webpack",
        description: "Module bundler for optimizing JavaScript and assets.",
      },
      {
        name: "Jest",
        description: "JavaScript testing framework for unit and integration tests.",
      },
      {
        name: "ESLint",
        description: "Code quality tool for maintaining consistent code standards.",
      },
    ],
  },
  {
    category: "Monitoring & Analytics",
    items: [
      {
        name: "Google Analytics",
        description: "Web analytics to understand user behavior and traffic.",
      },
      {
        name: "Sentry",
        description: "Error tracking and performance monitoring.",
      },
      {
        name: "DataDog",
        description: "Infrastructure monitoring and application performance tracking.",
      },
    ],
  },
];

export default function TechnologyStack() {
  return (
    <>
      <section className="py-16 lg:py-20">
        <Container>
          <FadeIn>
            <SectionHeading
              badge="Tech Stack"
              title="Modern Web Development Technologies"
              description="We use cutting-edge technologies to build fast, scalable, and secure web applications."
              align="center"
            />
          </FadeIn>

          <div className="mt-16 space-y-16">
            {techStack.map((category, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  {category.category}
                </h3>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <StaggerChildren staggerDelay={0.1}>
                    {category.items.map((tech) => (
                      <Card key={tech.name} hover>
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                            <span className="text-lg font-bold text-blue-900 dark:text-blue-300">
                              {tech.name.charAt(0)}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              {tech.name}
                            </h4>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                              {tech.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </StaggerChildren>
                </div>
              </div>
            ))}
          </div>

          {/* Why these technologies? */}
          <div className="mt-20 rounded-lg bg-gray-50 p-8 dark:bg-gray-900">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Why These Technologies?
            </h3>
            <div className="mt-6 grid gap-8 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Performance</h4>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Next.js and React enable fast, optimized apps. TypeScript catches errors early. Cloud hosting ensures global speed.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Scalability</h4>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Our stack handles growth seamlessly. From 100 to 1 million users, your app scales automatically.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Security</h4>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  TypeScript prevents type errors, frameworks include security best practices, and cloud providers handle infrastructure security.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Maintainability</h4>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Strong typing, modern tooling, and industry standards make code easy to maintain and hand off to other developers.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
