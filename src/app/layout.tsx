import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@/styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kainth Solutions - Web & Mobile Development Agency",
    template: "%s | Kainth Solutions - Web & Mobile Development Agency",
  },
  description:
    "Kainth Solutions is a full-service digital agency specializing in web development, mobile apps, UI/UX design, and digital marketing. We build products that scale.",
  keywords: [
    "web development",
    "mobile app development",
    "UI/UX design",
    "digital agency",
    "Next.js",
    "React",
    "Kainth Solutions",
  ],
  authors: [{ name: "Kainth Solutions" }],
  creator: "Kainth Solutions",
  metadataBase: new URL("https://kainthsolutions.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kainthsolutions.com",
    siteName: "Kainth Solutions",
    title: "Kainth Solutions - Web & Mobile Development Agency",
    description:
      "Full-service digital agency specializing in web development, mobile apps, UI/UX design, and digital marketing.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kainth Solutions - Web & Mobile Development Agency",
    description:
      "Full-service digital agency specializing in web development, mobile apps, UI/UX design, and digital marketing.",
    creator: "@kainthsolutions",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
