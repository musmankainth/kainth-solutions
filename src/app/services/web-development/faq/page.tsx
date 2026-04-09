import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren from "@/components/animations/StaggerChildren";
import CTASection from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Web Development FAQ | Kainth Solutions",
  description: "Frequently asked questions about our web development services, process, and pricing.",
  openGraph: {
    title: "Web Development FAQ",
    url: "https://kainthsolutions.com/services/web-development/faq",
    description: "Find answers to common questions about web development, process, and technologies.",
  },
  alternates: {
    canonical: "https://kainthsolutions.com/services/web-development/faq",
  },
};

const faqs = [
  {
    category: "Process & Timeline",
    questions: [
      {
        q: "How long does a typical web development project take?",
        a: "Most projects take 8-16 weeks depending on complexity. A simple 5-page website: 4-6 weeks. Custom web app: 12-20 weeks. We provide detailed timelines after the discovery phase.",
      },
      {
        q: "What's your development process?",
        a: "We follow agile methodology: Discovery → Design → Development → Testing → Launch. You get bi-weekly demos, regular feedback sessions, and full transparency throughout.",
      },
      {
        q: "Can you work with my existing design?",
        a: "Absolutely! We can implement designs from Figma, Adobe XD, or any design tool. We also offer design services if you don't have designs yet.",
      },
      {
        q: "Do you use agile or waterfall?",
        a: "We use agile with 2-week sprints. This allows flexibility, frequent feedback, and iterative improvements throughout the project.",
      },
    ],
  },
  {
    category: "Technology & Capabilities",
    questions: [
      {
        q: "What technologies do you use?",
        a: "We primarily use Next.js, React, TypeScript, Node.js, PostgreSQL, and modern cloud platforms like AWS & Vercel. We're flexible and can work with other tech stacks if needed.",
      },
      {
        q: "Can you build e-commerce sites?",
        a: "Yes! We build custom e-commerce with Shopify, WooCommerce, or completely custom solutions. We integrate payment processing (Stripe, PayPal), inventory management, and analytics.",
      },
      {
        q: "Do you build mobile apps?",
        a: "Yes, we build cross-platform mobile apps with React Native and Flutter. We also build Progressive Web Apps (PWAs) that work on all devices.",
      },
      {
        q: "Can you handle high-traffic websites?",
        a: "Yes! We build scalable architecture with load balancing, caching strategies, CDNs, and database optimization to handle millions of requests.",
      },
    ],
  },
  {
    category: "SEO & Performance",
    questions: [
      {
        q: "How do you ensure SEO optimization?",
        a: "We build with SEO best practices from day one: semantic HTML, fast load times, mobile responsiveness, structured data, sitemap, robots.txt, and more. Next.js gives us perfect SEO scores.",
      },
      {
        q: "What are Core Web Vitals?",
        a: "These are Google's metrics for user experience: LCP (loading), FID (interactivity), CLS (visual stability). We optimize for all three and typically score 90+ on Lighthouse.",
      },
      {
        q: "How do you improve page speed?",
        a: "Image optimization (WebP, lazy loading), code splitting, minification, caching, CDN delivery, database query optimization, and choosing performant frameworks like Next.js.",
      },
      {
        q: "Do you set up Google Analytics?",
        a: "Yes, we set up Google Analytics 4, Google Search Console, and custom tracking for your goals. We provide dashboards to monitor performance.",
      },
    ],
  },
  {
    category: "Support & Maintenance",
    questions: [
      {
        q: "What support is included after launch?",
        a: "Included: bug fixes, security updates, and dependency updates. Available: ongoing maintenance plans ($500-2000/month) for feature development, optimization, and scaling.",
      },
      {
        q: "How long do you provide support?",
        a: "Support lengths vary by package (1-12 months). After included support ends, you can sign up for an ongoing maintenance plan.",
      },
      {
        q: "Can you migrate an existing site?",
        a: "Yes! We migrate from any platform (WordPress, Wix, Shopify, etc.) while preserving SEO, data, and user experience. This typically adds 1-2 weeks to timeline.",
      },
      {
        q: "What if I need to update content?",
        a: "We integrate CMS systems (Sanity, Contentful) so you can manage content without coding. Or we provide training on how to update your site.",
      },
    ],
  },
  {
    category: "Pricing & Budget",
    questions: [
      {
        q: "Why does web development cost so much?",
        a: "Quality web development involves expertise, infrastructure, testing, security, and scalability. We deliver code that lasts years, handles growth, and generates ROI.",
      },
      {
        q: "Do you offer payment plans?",
        a: "Yes! Typical structure: 50% deposit to start, 50% upon launch. Larger projects can have milestone-based payments. Contact us to discuss options.",
      },
      {
        q: "What if my budget is limited?",
        a: "Start with our Startup package ($3,999) or let's scope a minimum viable product (MVP). We can phase features over time.",
      },
      {
        q: "Do you do fixed-price or hourly projects?",
        a: "We prefer fixed-price (better for everyone). For ongoing support/maintenance, we offer hourly rates at $100-200/hour depending on services.",
      },
    ],
  },
  {
    category: "Security & Compliance",
    questions: [
      {
        q: "How do you handle security?",
        a: "We use HTTPS/SSL, secure authentication, password hashing, CORS, input validation, SQL injection prevention, and regular security audits. We follow OWASP best practices.",
      },
      {
        q: "Is my data secure?",
        a: "Yes. We use encrypted databases, backup systems, and enterprise-grade hosting (AWS, Vercel). We never store sensitive data unencrypted.",
      },
      {
        q: "Are you GDPR compliant?",
        a: "We build with GDPR in mind. We implement consent management, data deletion, privacy policies, and comply with data protection regulations.",
      },
      {
        q: "Do you get backups?",
        a: "Yes! Automated daily backups, version control with Git, and disaster recovery plans are standard.",
      },
    ],
  },
];

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap((category) =>
    category.questions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

export default function FAQ() {
  return (
    <>
      <JsonLd data={faqPageSchema} />
      <section className="py-16 lg:py-20">
        <Container size="narrow">
          <FadeIn>
            <SectionHeading
              badge="Questions?"
              title="Web Development FAQ"
              description="Everything you need to know about our process, technology, pricing, and support."
              align="center"
            />
          </FadeIn>

          <div className="mt-16 space-y-12">
            {faqs.map((category, categoryIdx) => (
              <div key={categoryIdx}>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white border-b border-gray-200 pb-4 dark:border-gray-800">
                  {category.category}
                </h3>

                <div className="mt-6 space-y-4">
                  <StaggerChildren staggerDelay={0.08}>
                    {category.questions.map((item, idx) => (
                      <details
                        key={idx}
                        className="group border border-gray-200 rounded-lg dark:border-gray-800 overflow-hidden hover:border-blue-900 dark:hover:border-blue-400 transition-colors"
                      >
                        <summary className="flex cursor-pointer items-center justify-between bg-gray-50 p-6 dark:bg-gray-900">
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {item.q}
                          </h4>
                          <ChevronDown className="h-5 w-5 text-gray-600 transition group-open:rotate-180 dark:text-gray-400" />
                        </summary>
                        <div className="border-t border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
                          <p className="text-gray-600 dark:text-gray-400">
                            {item.a}
                          </p>
                        </div>
                      </details>
                    ))}
                  </StaggerChildren>
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions? */}
          <div className="mt-16 rounded-lg bg-blue-50 p-8 text-center dark:bg-blue-950">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Still have questions?
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Our team is ready to discuss your project and answer any specific questions.
            </p>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-block rounded-lg bg-blue-900 px-8 py-3 font-semibold text-white transition hover:bg-blue-800 dark:bg-blue-700 dark:hover:bg-blue-600"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
