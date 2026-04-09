import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren from "@/components/animations/StaggerChildren";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Digital Marketing FAQ | Kainth Solutions",
  description: "Frequently asked questions about digital marketing services, ROI, and pricing.",
  openGraph: {
    title: "Digital Marketing FAQ",
    url: "https://kainthsolutions.com/services/digital-marketing/faq",
  },
};

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How long does it take to see results?",
        a: "SEO takes 3-6 months to show significant results. PPC can generate leads within days. Email marketing shows results in 4-8 weeks. We focus on sustainable growth, not quick fixes.",
      },
      {
        q: "What's your process?",
        a: "We start with an audit of your current marketing, identify opportunities, create a strategy, and execute campaigns with continuous optimization. You get weekly or monthly reports.",
      },
      {
        q: "Do I need a website before working with you?",
        a: "A website helps, but it's not required. We can build one or optimize your existing site as part of the strategy. Everything should work together.",
      },
      {
        q: "How is success measured?",
        a: "We define KPIs upfront: traffic, leads, conversions, revenue, etc. We provide transparent reporting with Google Analytics dashboards and monthly strategy reviews.",
      },
    ],
  },
  {
    category: "Channels & Strategies",
    questions: [
      {
        q: "What's the difference between SEO and SEM?",
        a: "SEO (organic) takes time but costs less long-term. SEM (paid ads) is faster but requires ongoing budget. We often combine both for best results.",
      },
      {
        q: "Should I run Facebook or Google ads?",
        a: "It depends on your audience. Google Ads work for high-intent searches (buying now). Facebook/Instagram target interests and awareness (buying later). Ideal strategy uses both.",
      },
      {
        q: "Is email marketing still effective?",
        a: "Yes! Email has the highest ROI of any channel (~$42 per $1 spent). The key is segmentation and personalization, not spamming everyone.",
      },
      {
        q: "Do you do TikTok and social media marketing?",
        a: "Yes, we manage Instagram, TikTok, LinkedIn, and other platforms. Strategy depends on your audience and goals. Younger audiences = TikTok/Instagram. B2B = LinkedIn.",
      },
    ],
  },
  {
    category: "Budget & ROI",
    questions: [
      {
        q: "What's a realistic budget to start?",
        a: "For meaningful results, we recommend $2,000-5,000/month. This covers management + ad spend. Smaller budgets work but results are limited.",
      },
      {
        q: "What ROI can I expect?",
        a: "Depends on your industry and sales cycle. E-commerce typically sees 3-5x ROI. B2B SaaS sees 2-4x. Lead generation varies widely. We optimize continuously.",
      },
      {
        q: "Why do my ads cost so much?",
        a: "Competition in your industry, your target audience size, and seasonality affect costs. We use best practices to get the lowest CPC while maintaining quality.",
      },
      {
        q: "What if my ads aren't profitable?",
        a: "We analyze where the problem is: traffic quality, landing page, offer, or targeting. We then optimize systematically. If it can't work, we pivot to other channels.",
      },
    ],
  },
  {
    category: "Team & Process",
    questions: [
      {
        q: "Who will manage my account?",
        a: "A dedicated account manager will oversee your campaigns. They work with specialists in SEO, PPC, content, etc. You have one point of contact.",
      },
      {
        q: "How often do we communicate?",
        a: "Weekly or bi-weekly depending on your package. We provide dashboards for real-time data and monthly strategy reviews to adjust approach.",
      },
      {
        q: "Can we pause or cancel anytime?",
        a: "Most packages have minimum terms (3-6 months) to ensure we have time to show results. After that, we work month-to-month. Early exit fees may apply.",
      },
      {
        q: "Will you manage my ads if I provide the budget?",
        a: "Yes! We can manage any ad platform with your budget. Budget can be separate from our service fee.",
      },
    ],
  },
  {
    category: "Strategy & Optimization",
    questions: [
      {
        q: "How do you handle competitor analysis?",
        a: "We identify what competitors are ranking for, what keywords they target, their ad copy, landing pages, and more. We find gaps you can exploit.",
      },
      {
        q: "What's A/B testing?",
        a: "We test different versions (ads, landing pages, emails) to see what performs best. Data-driven decisions beat guessing.",
      },
      {
        q: "How often should we update our strategy?",
        a: "Monthly reviews at minimum. We adjust based on performance data, seasonality, market changes, and new opportunities.",
      },
      {
        q: "What tools do you use?",
        a: "Google Analytics, Google Ads, Facebook Ads Manager, SEMrush, Ahrefs, HubSpot, Mailchimp, and more. We'll teach you how to use them.",
      },
    ],
  },
  {
    category: "Data & Privacy",
    questions: [
      {
        q: "Who owns my data?",
        a: "You do. We can export all data anytime. We follow GDPR and data privacy regulations. Transparency is key.",
      },
      {
        q: "How do you handle leads?",
        a: "Leads go to your CRM or email. We can integrate with most platforms or set up new ones. You own all lead data.",
      },
      {
        q: "Do you track conversions?",
        a: "Yes! We implement conversion tracking (pixels, goals, etc.) to measure ROI accurately. Without it, we're flying blind.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <>
      <section className="py-16 lg:py-20">
        <Container size="narrow">
          <FadeIn>
            <SectionHeading
              badge="Questions?"
              title="Digital Marketing FAQ"
              description="Everything you need to know about strategies, ROI, pricing, and our process."
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

          <div className="mt-16 rounded-lg bg-blue-50 p-8 text-center dark:bg-blue-950">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Ready to grow?
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Schedule a free 30-minute strategy call with our team.
            </p>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-block rounded-lg bg-blue-900 px-8 py-3 font-semibold text-white transition hover:bg-blue-800 dark:bg-blue-700 dark:hover:bg-blue-600"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
