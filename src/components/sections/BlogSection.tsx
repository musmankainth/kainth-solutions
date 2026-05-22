import { ArrowRight } from "lucide-react";
import { client } from "@/lib/sanity/client";
import { getAllBlogPostsQuery } from "@/lib/sanity/queries";
import type { BlogPostListItem } from "@/lib/sanity/types";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren from "@/components/animations/StaggerChildren";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { BlogCard } from "@/components/blog/BlogCard";

async function fetchLatestPosts(): Promise<BlogPostListItem[]> {
  try {
    return await client.fetch<BlogPostListItem[]>(getAllBlogPostsQuery, {
      start: 0,
      end: 3,
    });
  } catch {
    return [];
  }
}

export default async function BlogSection() {
  const posts = await fetchLatestPosts();

  return (
    <section className="py-20 bg-white dark:bg-gray-950 lg:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            badge="Blog"
            title="Latest From Our Blog"
            description="Insights, tips, and trends from our team of digital experts."
          />
        </FadeIn>

        {posts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-16 text-center dark:border-gray-700 dark:bg-gray-900">
            <p className="text-base text-gray-600 dark:text-gray-400">
              No blog posts yet — check back soon.
            </p>
          </div>
        ) : (
          <StaggerChildren
            staggerDelay={0.15}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {posts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </StaggerChildren>
        )}

        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <Button href="/blog" variant="outline" size="lg">
              View All Articles
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
