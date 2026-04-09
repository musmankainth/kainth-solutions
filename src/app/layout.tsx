import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { JsonLd } from "@/components/seo/JsonLd";
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
    template: "%s | Kainth Solutions",
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
  verification: {
    google: "google-site-verification-code", // Update with actual verification code from Google Search Console
  },
  alternates: {
    canonical: "https://kainthsolutions.com",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kainth Solutions",
  url: "https://kainthsolutions.com",
  logo: "https://kainthsolutions.com/images/og-image.jpg",
  description:
    "Full-service digital agency specializing in web development, mobile apps, UI/UX design, and digital marketing.",
  sameAs: [
    "https://linkedin.com/company/kainthsolutions",
    "https://github.com/kainthsolutions",
    "https://twitter.com/kainthsolutions",
    "https://instagram.com/kainthsolutions",
    "https://youtube.com/@kainthsolutions",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+923207551031",
    contactType: "Customer Service",
    email: "info@kainthsolutions.com",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://kainthsolutions.com",
  name: "Kainth Solutions",
  description:
    "Full-service digital agency specializing in web development, mobile apps, UI/UX design, and digital marketing.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://kainthsolutions.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
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
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
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
          <WhatsAppButton />
        </ThemeProvider>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script id="google-analytics">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
