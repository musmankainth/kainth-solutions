import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import FadeIn from "@/components/animations/FadeIn";
import CTASection from "@/components/sections/CTASection";
import { BlogFilter } from "@/components/blog/BlogFilter";
import { client } from "@/lib/sanity/client";
import {
  getAllBlogPostsQuery,
  getAllCategoriesQuery,
} from "@/lib/sanity/queries";
import type { BlogCategory, BlogPostListItem } from "@/lib/sanity/types";

export const metadata: Metadata = {
  title: "Blog | Kainth Solutions",
  description:
    "Insights, guides, and industry trends from our team on web development, mobile apps, digital marketing, and growing your business.",
};

export const revalidate = 60;

async function getData() {
  try {
    const [posts, categories] = await Promise.all([
      client.fetch<BlogPostListItem[]>(getAllBlogPostsQuery, {
        start: 0,
        end: 100,
      }),
      client.fetch<BlogCategory[]>(getAllCategoriesQuery),
    ]);
    return { posts, categories };
  } catch {
    return { posts: [], categories: [] };
  }
}

export default async function BlogPage() {
  const { posts, categories } = await getData();

  return (
    <>
      <section className="relative overflow-hidden bg-white pt-24 pb-16 dark:bg-gray-950">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-3xl dark:bg-blue-900/15" />
          <div className="absolute -right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-orange-100/40 blur-3xl dark:bg-orange-900/10" />
        </div>
        <Container className="relative z-10">
          <FadeIn direction="up">
            <Badge variant="primary" className="mb-6">
              Blog
            </Badge>
            <h1 className="mb-6 max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
              Insights, Guides &{" "}
              <span className="text-blue-900 dark:text-blue-400">
                Industry Trends
              </span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Practical insights from our team on web development, mobile apps,
              digital marketing, and growing your business in the digital age.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <Container>
          {posts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-20 text-center dark:border-gray-700 dark:bg-gray-950">
              <h2 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
                No posts yet
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Articles will appear here once they&apos;re published in the
                Studio.
              </p>
            </div>
          ) : (
            <BlogFilter posts={posts} categories={categories} />
          )}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
