import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Kainth Solutions",
  description:
    "Explore our portfolio of successful digital projects including e-commerce platforms, mobile apps, web applications, and digital marketing campaigns.",
  openGraph: {
    title: "Portfolio | Kainth Solutions",
    description:
      "Case studies and project highlights from Kainth Solutions.",
    url: "https://kainthsolutions.com/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
