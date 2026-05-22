import type { PortableTextBlock } from '@portabletext/react';

export type SanitySlug = { current: string };

export type SanityImage = {
  _type?: 'image';
  asset?: { _ref: string; _type: 'reference' };
  alt?: string;
  caption?: string;
  hotspot?: { x: number; y: number; height: number; width: number };
};

export type SanityAuthorRef = {
  _id: string;
  name: string;
  slug?: SanitySlug;
  image?: SanityImage | null;
  role?: string | null;
  bio?: string | null;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  } | null;
};

export type SanityCategoryRef = {
  _id: string;
  title: string;
  slug?: SanitySlug;
};

export type BlogPostListItem = {
  _id: string;
  title: string;
  slug: SanitySlug;
  excerpt: string;
  coverImage: SanityImage;
  publishedAt: string;
  featured?: boolean;
  category: SanityCategoryRef | null;
  author: SanityAuthorRef | null;
};

export type BlogPostDetail = BlogPostListItem & {
  content: PortableTextBlock[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: SanityImage;
  };
  author: (SanityAuthorRef & { bio?: string | null }) | null;
};

export type BlogCategory = {
  _id: string;
  title: string;
  slug: SanitySlug;
  description?: string;
};
