import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Kainth Solutions",
  description:
    "Insights, guides, and industry trends on web development, mobile apps, digital marketing, and growing your business in the digital age.",
  openGraph: {
    title: "Blog | Kainth Solutions",
    description:
      "Practical insights from the Kainth Solutions team on technology and digital strategy.",
    url: "https://kainthsolutions.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
