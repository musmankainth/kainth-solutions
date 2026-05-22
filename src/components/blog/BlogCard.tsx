"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { urlForCover, urlForAvatar } from "@/lib/sanity/image";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { BlogPostListItem } from "@/lib/sanity/types";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

const badgeVariantByCategory: Record<string, "primary" | "secondary" | "accent"> = {
  Design: "primary",
  Mobile: "secondary",
  Marketing: "accent",
  "Web Development": "primary",
};

export function BlogCard({ post }: { post: BlogPostListItem }) {
  const categoryTitle = post.category?.title ?? "Article";
  const coverUrl = urlForCover(post.coverImage).url();
  const avatarUrl = post.author?.image ? urlForAvatar(post.author.image).url() : null;
  const variant = badgeVariantByCategory[categoryTitle] ?? "primary";

  return (
    <Card variant="bordered" hover className="flex h-full flex-col overflow-hidden p-0">
      <Link href={`/blog/${post.slug.current}`} className="group flex h-full flex-col">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={coverUrl}
            alt={post.coverImage?.alt ?? post.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute left-3 top-3">
            <Badge variant={variant} size="sm">
              {categoryTitle}
            </Badge>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-2 flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
            <Calendar className="h-3.5 w-3.5" />
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          </div>

          <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-900 dark:text-white dark:group-hover:text-blue-400">
            {post.title}
          </h3>

          <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {post.excerpt}
          </p>

          {post.author && (
            <div className="mt-auto flex items-center gap-3 border-t border-gray-100 pt-4 dark:border-gray-800">
              {avatarUrl ? (
                <Image
                  src={avatarUrl}
                  alt={post.author.name}
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-xs font-bold text-white">
                  {getInitials(post.author.name)}
                </div>
              )}
              <div className="min-w-0">
                <p className="truncate text-xs font-medium text-gray-700 dark:text-gray-300">
                  {post.author.name}
                </p>
                {post.author.role && (
                  <p className="truncate text-xs text-gray-500 dark:text-gray-400">
                    {post.author.role}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </Link>
    </Card>
  );
}
