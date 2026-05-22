"use client";

import { useMemo, useState } from "react";
import FadeIn from "@/components/animations/FadeIn";
import { BlogCard } from "@/components/blog/BlogCard";
import type { BlogCategory, BlogPostListItem } from "@/lib/sanity/types";

export function BlogFilter({
  posts,
  categories,
}: {
  posts: BlogPostListItem[];
  categories: BlogCategory[];
}) {
  const [active, setActive] = useState<string>("all");

  const visible = useMemo(() => {
    if (active === "all") return posts;
    return posts.filter((p) => p.category?.slug?.current === active);
  }, [active, posts]);

  return (
    <>
      <FadeIn direction="up">
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          <FilterButton
            label="All"
            active={active === "all"}
            onClick={() => setActive("all")}
          />
          {categories.map((cat) => (
            <FilterButton
              key={cat._id}
              label={cat.title}
              active={active === cat.slug.current}
              onClick={() => setActive(cat.slug.current)}
            />
          ))}
        </div>
      </FadeIn>

      {visible.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-lg text-gray-500 dark:text-gray-400">
            No posts found in this category.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((post, index) => (
            <FadeIn key={post._id} direction="up" delay={index * 0.05}>
              <BlogCard post={post} />
            </FadeIn>
          ))}
        </div>
      )}
    </>
  );
}

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-5 py-2 text-sm font-medium transition-colors cursor-pointer ${
        active
          ? "bg-blue-900 text-white dark:bg-blue-600"
          : "bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
      }`}
    >
      {label}
    </button>
  );
}
