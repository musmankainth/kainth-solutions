import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  MessageSquare,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { formatDate } from "@/lib/utils";
import CTASection from "@/components/sections/CTASection";

const posts = [
  {
    slug: "future-of-web-development-2025",
    title: "The Future of Web Development: Trends Shaping 2025 and Beyond",
    excerpt:
      "From server components to edge computing, explore the technologies and patterns that are redefining how we build for the web.",
    category: "Web Development",
    author: {
      name: "Arjun Kainth",
      role: "Founder & CEO",
      gradient: "from-blue-500 to-indigo-600",
    },
    publishedAt: "2025-01-15",
    readingTime: "8 min read",
    gradient: "from-blue-500 to-indigo-600",
    tags: ["Next.js", "React Server Components", "Edge Computing", "AI"],
    content: `
The web development landscape is evolving at an unprecedented pace. As we look at 2025 and beyond, several transformative trends are reshaping how we think about building digital experiences.

## 1. React Server Components Go Mainstream

React Server Components (RSCs) have moved from experimental to essential. With Next.js leading the charge, RSCs allow developers to render components on the server, drastically reducing the JavaScript sent to the client. This means faster initial page loads, better SEO, and improved Core Web Vitals scores.

The key insight is that not every component needs to be interactive. By defaulting to server rendering and opting into client-side interactivity only when needed, we can build applications that are both feature-rich and performant.

## 2. Edge Computing Becomes the Default

Edge computing is no longer a nice-to-have; it is the standard deployment model for modern web applications. Platforms like Vercel, Cloudflare Workers, and Deno Deploy make it trivial to run server-side logic close to your users, reducing latency from hundreds of milliseconds to single digits.

This shift enables new patterns like edge-rendered personalization, real-time A/B testing, and geographically-aware content delivery without the complexity of managing a global infrastructure.

## 3. AI-Augmented Development

AI is not replacing developers; it is making them dramatically more productive. Tools like GitHub Copilot, Cursor, and Claude Code are changing how we write, debug, and refactor code. The developers who learn to leverage these tools effectively will have a significant competitive advantage.

Beyond code generation, AI is powering new user-facing features: intelligent search, personalized content recommendations, natural language interfaces, and automated accessibility testing.

## 4. The Rise of Type-Safe Full-Stack Frameworks

The boundary between frontend and backend continues to blur. Frameworks like Next.js, Remix, and SvelteKit provide end-to-end type safety from database queries to UI components. Combined with ORMs like Prisma and Drizzle, developers can catch entire categories of bugs at compile time rather than in production.

## 5. Performance as a First-Class Citizen

Google's Core Web Vitals are now firmly established as ranking factors. In 2025, performance optimization is not an afterthought; it is baked into every architectural decision. Techniques like streaming SSR, partial prerendering, and optimistic UI updates are becoming standard practice.

## What This Means for Your Business

These trends are not just technical curiosities. They translate directly into business outcomes: faster websites convert better, AI-powered features increase engagement, and modern architectures reduce long-term maintenance costs.

If your web presence was built more than two years ago, it is worth evaluating whether a modern rebuild could deliver meaningful improvements to your bottom line. The performance and user experience gap between legacy and modern web applications has never been wider.
    `,
    relatedSlugs: [
      "mobile-app-development-guide",
      "digital-marketing-roi-strategies",
    ],
  },
  {
    slug: "mobile-app-development-guide",
    title:
      "The Complete Guide to Mobile App Development: Native vs Cross-Platform in 2025",
    excerpt:
      "Should you go native or cross-platform? We break down the pros, cons, costs, and ideal use cases for each approach.",
    category: "Mobile",
    author: {
      name: "David Okonkwo",
      role: "Lead Mobile Developer",
      gradient: "from-emerald-400 to-teal-600",
    },
    publishedAt: "2025-02-03",
    readingTime: "12 min read",
    gradient: "from-teal-400 to-cyan-600",
    tags: ["React Native", "Flutter", "iOS", "Android", "Cross-Platform"],
    content: `
Choosing the right mobile development approach is one of the most consequential technology decisions a business can make. The wrong choice can lead to doubled costs, missed deadlines, and subpar user experiences. This guide will help you make the right call.

## The Current Landscape

In 2025, you have three primary options for mobile app development:

1. **Native Development** (Swift for iOS, Kotlin for Android)
2. **Cross-Platform with React Native**
3. **Cross-Platform with Flutter**

Each approach has distinct strengths, and the best choice depends on your specific requirements, budget, and timeline.

## Native Development: When Quality is Non-Negotiable

Native development gives you the deepest access to platform-specific APIs and the most polished user experience. If your app relies heavily on device hardware (camera, sensors, AR), requires the absolute best performance (gaming, video editing), or needs to feel indistinguishable from built-in OS apps, native is the way to go.

**Pros:** Best performance, full API access, platform-specific design patterns, largest talent pool for each platform.

**Cons:** Two separate codebases to maintain, higher development costs (roughly 2x), longer time to market, separate teams needed.

**Best for:** Games, AR/VR apps, hardware-intensive applications, apps where platform-specific UX is critical.

## React Native: The JavaScript Advantage

React Native allows you to build mobile apps using JavaScript and React, sharing up to 80% of code between iOS and Android. With the New Architecture (Fabric renderer and TurboModules), React Native has closed much of the performance gap with native development.

**Pros:** Large ecosystem, code sharing with web (React), hot reloading, strong community, access to native modules when needed.

**Cons:** Slightly lower performance ceiling than native, occasional platform-specific bugs, dependency on third-party libraries for some features.

**Best for:** Apps with shared business logic, teams already using React, content-driven apps, social media apps, fintech apps.

## Flutter: The UI Powerhouse

Flutter takes a different approach by rendering its own UI layer rather than using native components. This gives you pixel-perfect consistency across platforms and exceptional animation performance.

**Pros:** Consistent UI across platforms, excellent animation support, fast development with hot reload, growing ecosystem, single codebase for mobile + web + desktop.

**Cons:** Larger app size, Dart language has a smaller community than JavaScript, custom UI may not feel perfectly native.

**Best for:** Design-heavy apps, apps requiring complex animations, startups wanting to target multiple platforms quickly, apps where brand consistency matters more than platform conformity.

## Making the Decision

Ask yourself these questions:

1. **Budget:** Do you have the budget for two native teams, or is a shared codebase necessary?
2. **Timeline:** How quickly do you need to launch? Cross-platform is typically 30-40% faster.
3. **Complexity:** Does your app need deep hardware integration or complex native features?
4. **Team:** What skills does your existing team have?
5. **Long-term:** How important is long-term maintainability and a single codebase?

For most business applications, cross-platform development offers the best balance of quality, cost, and speed. We recommend React Native for teams with JavaScript expertise and Flutter for teams prioritizing UI consistency and animation quality.
    `,
    relatedSlugs: [
      "future-of-web-development-2025",
      "digital-marketing-roi-strategies",
    ],
  },
  {
    slug: "digital-marketing-roi-strategies",
    title:
      "Maximizing Digital Marketing ROI: Data-Driven Strategies That Actually Work",
    excerpt:
      "Stop wasting your marketing budget. Learn the proven frameworks we use to deliver 3x+ ROAS for our clients.",
    category: "Marketing",
    author: {
      name: "Sofia Rodriguez",
      role: "Head of Digital Marketing",
      gradient: "from-purple-400 to-pink-500",
    },
    publishedAt: "2025-03-10",
    readingTime: "10 min read",
    gradient: "from-orange-400 to-red-500",
    tags: ["SEO", "PPC", "Analytics", "Conversion Optimization"],
    content: `
After managing millions of dollars in digital ad spend across dozens of clients, we have distilled our approach into a framework that consistently delivers 3x or better return on ad spend. Here is how we do it.

## The ROI-First Mindset

Most marketing agencies report on vanity metrics: impressions, clicks, followers. We report on revenue generated. Every strategy, campaign, and piece of content is evaluated against a single question: "Does this drive profitable growth?"

This mindset shift changes everything about how you approach marketing.

## Strategy 1: Full-Funnel Attribution

The biggest mistake businesses make is attributing conversions to the last touch point. A customer might discover you through a blog post (SEO), see a retargeting ad (paid social), receive a nurture email (email marketing), and finally convert after a branded search (paid search).

If you only credit the branded search, you will cut the top-of-funnel activities that actually drove the conversion. Implement a multi-touch attribution model to understand the true value of each channel.

## Strategy 2: The 70/20/10 Budget Framework

Allocate your marketing budget like this:

- **70%** on proven channels that consistently deliver ROI
- **20%** on promising channels that show early positive signals
- **10%** on experimental channels to discover the next growth lever

This ensures you are maximizing current returns while continuously testing for new opportunities.

## Strategy 3: Creative Testing at Scale

We have seen creative changes drive a 300% improvement in cost per acquisition. The secret is systematic testing, not random experimentation.

Test one variable at a time: headline, image, CTA, audience. Run each test with statistical significance before declaring a winner. Document everything. Over time, you build an institutional knowledge base of what resonates with your audience.

## Strategy 4: Landing Page Optimization

Driving traffic to a poorly optimized landing page is like pouring water into a leaky bucket. Before increasing ad spend, ensure your landing pages are optimized:

- Sub-3-second load time
- Clear, compelling headline matching ad copy
- Social proof (testimonials, logos, case studies)
- Single, prominent call-to-action
- Mobile-optimized design (60%+ of traffic is mobile)

We typically see a 25-40% conversion rate improvement from landing page optimization alone.

## Strategy 5: Email as a Revenue Engine

Email marketing consistently delivers the highest ROI of any digital channel (roughly 36:1 on average). Yet most businesses treat it as an afterthought.

Build automated email sequences for:
- Welcome series for new subscribers
- Abandoned cart recovery
- Post-purchase upsell
- Re-engagement for dormant customers
- Educational drip sequences for leads

## Measuring Success

Track these metrics weekly:
- **ROAS** (Return on Ad Spend) by channel
- **CAC** (Customer Acquisition Cost)
- **LTV:CAC ratio** (should be 3:1 or better)
- **Conversion rate** by funnel stage
- **Attribution-adjusted channel performance**

The businesses that win in digital marketing are not the ones with the biggest budgets. They are the ones that measure everything, test relentlessly, and double down on what works.
    `,
    relatedSlugs: [
      "future-of-web-development-2025",
      "mobile-app-development-guide",
    ],
  },
];

function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return { title: "Post Not Found | Kainth Solutions" };
  }

  return {
    title: `${post.title} | Blog | Kainth Solutions`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      url: `https://kainthsolutions.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = post.relatedSlugs
    .map((s) => posts.find((p) => p.slug === s))
    .filter(Boolean) as typeof posts;

  // Simple markdown-like rendering: split by ## for headings and paragraphs
  const contentSections = post.content
    .trim()
    .split("\n\n")
    .filter((s) => s.trim());

  return (
    <>
      {/* Hero */}
      <section
        className={`relative overflow-hidden bg-gradient-to-br ${post.gradient} pt-24 pb-16`}
      >
        <div className="pointer-events-none absolute inset-0 bg-black/20" />
        <Container size="narrow" className="relative z-10">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          <Badge
            variant="outline"
            className="mb-4 border-white/40 text-white"
          >
            {post.category}
          </Badge>
          <h1 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${post.author.gradient} text-sm font-bold text-white`}
              >
                {post.author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  {post.author.name}
                </p>
                <p className="text-xs text-white/70">{post.author.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-white/80">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readingTime}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Article Content */}
      <section className="bg-white py-16 dark:bg-gray-950">
        <Container size="narrow">
          <article className="prose prose-lg prose-gray mx-auto max-w-none dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:leading-relaxed prose-li:leading-relaxed prose-strong:text-gray-900 dark:prose-strong:text-white">
            {contentSections.map((section, index) => {
              const trimmed = section.trim();

              if (trimmed.startsWith("## ")) {
                return (
                  <h2
                    key={index}
                    className="text-2xl font-bold text-gray-900 mt-10 mb-4 dark:text-white"
                  >
                    {trimmed.replace("## ", "")}
                  </h2>
                );
              }

              if (trimmed.startsWith("- **")) {
                // Render as a list
                const items = trimmed.split("\n").filter((l) => l.trim());
                return (
                  <ul
                    key={index}
                    className="my-4 space-y-2 text-gray-600 dark:text-gray-400"
                  >
                    {items.map((item, i) => (
                      <li key={i} className="leading-relaxed">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: item
                              .replace(/^- /, "")
                              .replace(
                                /\*\*(.*?)\*\*/g,
                                '<strong class="text-gray-900 dark:text-white">$1</strong>'
                              ),
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                );
              }

              if (
                trimmed.startsWith("1. ") ||
                trimmed.startsWith("2. ") ||
                trimmed.startsWith("3. ")
              ) {
                const items = trimmed.split("\n").filter((l) => l.trim());
                return (
                  <ol
                    key={index}
                    className="my-4 list-decimal space-y-2 pl-6 text-gray-600 dark:text-gray-400"
                  >
                    {items.map((item, i) => (
                      <li key={i} className="leading-relaxed">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: item
                              .replace(/^\d+\.\s/, "")
                              .replace(
                                /\*\*(.*?)\*\*/g,
                                '<strong class="text-gray-900 dark:text-white">$1</strong>'
                              ),
                          }}
                        />
                      </li>
                    ))}
                  </ol>
                );
              }

              return (
                <p
                  key={index}
                  className="my-4 text-gray-600 leading-relaxed dark:text-gray-400"
                  dangerouslySetInnerHTML={{
                    __html: trimmed.replace(
                      /\*\*(.*?)\*\*/g,
                      '<strong class="text-gray-900 dark:text-white">$1</strong>'
                    ),
                  }}
                />
              );
            })}
          </article>

          {/* Tags */}
          <div className="mt-12 flex flex-wrap gap-2 border-t border-gray-200 pt-8 dark:border-gray-800">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" size="sm">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Share */}
          <div className="mt-8 flex items-center gap-4">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Share this article:
            </span>
            <a
              href={`https://twitter.com/intent/tweet?url=https://kainthsolutions.com/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
              aria-label="Share on Twitter"
            >
              <MessageSquare className="h-4 w-4" />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=https://kainthsolutions.com/blog/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
              aria-label="Share on LinkedIn"
            >
              <Users className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </section>

      {/* Author Bio */}
      <section className="bg-gray-50 py-12 dark:bg-gray-900">
        <Container size="narrow">
          <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
            <div
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${post.author.gradient} text-lg font-bold text-white`}
            >
              {post.author.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <p className="font-bold text-gray-900 dark:text-white">
                {post.author.name}
              </p>
              <p className="text-sm text-blue-900 dark:text-blue-400">
                {post.author.role}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                A member of the Kainth Solutions team passionate about sharing
                insights and helping businesses grow through technology and
                digital strategy.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-white py-16 dark:bg-gray-950">
          <Container>
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
              Related Articles
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group"
                >
                  <Card
                    variant="bordered"
                    hover
                    className="overflow-hidden p-0"
                  >
                    <div
                      className={`flex h-32 items-center justify-center bg-gradient-to-br ${related.gradient}`}
                    >
                      <Badge
                        variant="outline"
                        className="border-white/40 text-white"
                      >
                        {related.category}
                      </Badge>
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-blue-900 dark:text-white dark:group-hover:text-blue-400">
                        {related.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {related.excerpt}
                      </p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection />
    </>
  );
}
