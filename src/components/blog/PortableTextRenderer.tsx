import Image from "next/image";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/react";
import { urlForImage } from "@/lib/sanity/image";

type CodeBlockValue = {
  language?: string;
  filename?: string;
  code?: string;
};

type ImageValue = {
  asset?: { _ref: string };
  alt?: string;
  caption?: string;
};

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-10 mb-4 text-2xl font-bold text-gray-900 dark:text-white">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 mb-3 text-xl font-bold text-gray-900 dark:text-white">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-6 mb-2 text-lg font-bold text-gray-900 dark:text-white">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="my-4 leading-relaxed text-gray-700 dark:text-gray-300">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-blue-500 bg-blue-50 px-5 py-3 text-gray-700 italic dark:border-blue-400 dark:bg-blue-900/20 dark:text-gray-300">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-4 list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="my-4 list-decimal space-y-2 pl-6 text-gray-700 dark:text-gray-300">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-900 dark:text-white">
        {children}
      </strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-pink-600 dark:bg-gray-800 dark:text-pink-400">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const href = (value as { href?: string })?.href ?? "#";
      const external = href.startsWith("http");
      return (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="text-blue-700 underline underline-offset-2 transition-colors hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }: { value: ImageValue }) => {
      if (!value?.asset) return null;
      const url = urlForImage(value).width(1200).url();
      return (
        <figure className="my-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
            <Image
              src={url}
              alt={value.alt ?? ""}
              fill
              sizes="(min-width: 1024px) 800px, 100vw"
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    codeBlock: ({ value }: { value: CodeBlockValue }) => {
      if (!value?.code) return null;
      return (
        <div className="my-6 overflow-hidden rounded-xl border border-gray-200 bg-gray-900 dark:border-gray-700">
          {(value.filename || value.language) && (
            <div className="flex items-center justify-between border-b border-gray-700/50 bg-gray-800 px-4 py-2 text-xs text-gray-300">
              <span className="font-mono">{value.filename ?? "code"}</span>
              {value.language && (
                <span className="rounded bg-gray-700 px-2 py-0.5 uppercase tracking-wider">
                  {value.language}
                </span>
              )}
            </div>
          )}
          <pre className="overflow-x-auto p-4 text-sm">
            <code className="font-mono text-gray-100">{value.code}</code>
          </pre>
        </div>
      );
    },
  },
};

export function PortableTextRenderer({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}

export function estimateReadingTime(blocks: PortableTextBlock[] | undefined): string {
  if (!blocks?.length) return "1 min read";
  const text = blocks
    .filter((b) => b._type === "block")
    .flatMap((b) => {
      const block = b as PortableTextBlock & { children?: { text?: string }[] };
      return (block.children ?? []).map((c) => c.text ?? "");
    })
    .join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return `${minutes} min read`;
}
