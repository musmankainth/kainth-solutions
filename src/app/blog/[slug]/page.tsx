import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, MessageSquare, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { formatDate } from "@/lib/utils";
import CTASection from "@/components/sections/CTASection";
import { client } from "@/lib/sanity/client";
import {
  getAllBlogPostsQuery,
  getBlogPostBySlugQuery,
} from "@/lib/sanity/queries";
import { urlForAvatar, urlForCover } from "@/lib/sanity/image";
import {
  PortableTextRenderer,
  estimateReadingTime,
} from "@/components/blog/PortableTextRenderer";
import type { BlogPostDetail, BlogPostListItem } from "@/lib/sanity/types";

export const revalidate = 60;

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

async function getPost(slug: string) {
  try {
    return await client.fetch<BlogPostDetail | null>(getBlogPostBySlugQuery, {
      slug,
    });
  } catch {
    return null;
  }
}

async function getRelated(currentSlug: string): Promise<BlogPostListItem[]> {
  try {
    const all = await client.fetch<BlogPostListItem[]>(getAllBlogPostsQuery, {
      start: 0,
      end: 10,
    });
    return all.filter((p) => p.slug.current !== currentSlug).slice(0, 2);
  } catch {
    return [];
  }
}

export async function generateStaticParams() {
  try {
    const posts = await client.fetch<{ slug: { current: string } }[]>(
      `*[_type == "blogPost" && defined(slug.current)]{ slug }`
    );
    return posts.map((p) => ({ slug: p.slug.current }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return { title: "Post Not Found | Kainth Solutions" };
  }

  const ogImage = post.seo?.ogImage
    ? urlForCover(post.seo.ogImage).url()
    : urlForCover(post.coverImage).url();

  return {
    title: `${post.seo?.metaTitle ?? post.title} | Blog | Kainth Solutions`,
    description: post.seo?.metaDescription ?? post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: post.author ? [post.author.name] : undefined,
      url: `https://kainthsolutions.com/blog/${slug}`,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const related = await getRelated(slug);
  const readingTime = estimateReadingTime(post.content);
  const coverUrl = urlForCover(post.coverImage).url();
  const authorAvatar = post.author?.image
    ? urlForAvatar(post.author.image).url()
    : null;

  return (
    <>
      <section className="relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0">
          <Image
            src={coverUrl}
            alt={post.coverImage?.alt ?? post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
        </div>
        <Container size="narrow" className="relative z-10">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          {post.category && (
            <Badge variant="outline" className="mb-4 border-white/40 text-white">
              {post.category.title}
            </Badge>
          )}
          <h1 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6">
            {post.author && (
              <div className="flex items-center gap-3">
                {authorAvatar ? (
                  <Image
                    src={authorAvatar}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-bold text-white">
                    {getInitials(post.author.name)}
                  </div>
                )}
                <div>
                  <p className="text-sm font-semibold text-white">
                    {post.author.name}
                  </p>
                  {post.author.role && (
                    <p className="text-xs text-white/70">{post.author.role}</p>
                  )}
                </div>
              </div>
            )}
            <div className="flex items-center gap-4 text-sm text-white/80">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {readingTime}
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 dark:bg-gray-950">
        <Container size="narrow">
          <article className="mx-auto max-w-none">
            <p className="mb-8 text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              {post.excerpt}
            </p>
            <PortableTextRenderer value={post.content} />
          </article>

          <div className="mt-12 flex items-center gap-4">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Share this article:
            </span>
            <a
              href={`https://twitter.com/intent/tweet?url=https://kainthsolutions.com/blog/${post.slug.current}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
              aria-label="Share on Twitter"
            >
              <MessageSquare className="h-4 w-4" />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=https://kainthsolutions.com/blog/${post.slug.current}`}
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

      {post.author && (
        <section className="bg-gray-50 py-12 dark:bg-gray-900">
          <Container size="narrow">
            <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
              {authorAvatar ? (
                <Image
                  src={authorAvatar}
                  alt={post.author.name}
                  width={56}
                  height={56}
                  className="h-14 w-14 shrink-0 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-lg font-bold text-white">
                  {getInitials(post.author.name)}
                </div>
              )}
              <div>
                <p className="font-bold text-gray-900 dark:text-white">
                  {post.author.name}
                </p>
                {post.author.role && (
                  <p className="text-sm text-blue-900 dark:text-blue-400">
                    {post.author.role}
                  </p>
                )}
                {post.author.bio && (
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {post.author.bio}
                  </p>
                )}
              </div>
            </div>
          </Container>
        </section>
      )}

      {related.length > 0 && (
        <section className="bg-white py-16 dark:bg-gray-950">
          <Container>
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
              Related Articles
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {related.map((r) => {
                const rCover = urlForCover(r.coverImage).url();
                return (
                  <Link key={r._id} href={`/blog/${r.slug.current}`} className="group">
                    <Card variant="bordered" hover className="overflow-hidden p-0">
                      <div className="relative aspect-[2/1]">
                        <Image
                          src={rCover}
                          alt={r.coverImage?.alt ?? r.title}
                          fill
                          sizes="(min-width: 768px) 50vw, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {r.category && (
                          <div className="absolute left-3 top-3">
                            <Badge variant="outline" className="border-white/40 text-white">
                              {r.category.title}
                            </Badge>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-blue-900 dark:text-white dark:group-hover:text-blue-400">
                          {r.title}
                        </h3>
                        <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                          {r.excerpt}
                        </p>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      <CTASection />
    </>
  );
}
