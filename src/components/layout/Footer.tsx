"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUp,
  Send,
  Globe,
  MessageSquare,
  Camera,
  Users,
  Code2,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { companyInfo, socialLinks } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "Mobile Apps", href: "/services/mobile-app-development" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
];

const contactMethods = [
  { label: "Email", value: companyInfo.email, href: `mailto:${companyInfo.email}` },
  { label: "Phone", value: companyInfo.phone, href: `tel:${companyInfo.phone}` },
  { label: "WhatsApp", value: "Chat with us", href: "https://wa.me/923207551031?text=Hello%20Kainth%20Solutions%2C%20I%20would%20like%20to%20discuss%20a%20project" },
];

const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github: Code2,
  Linkedin: Users,
  Twitter: MessageSquare,
  Instagram: Camera,
  Youtube: Globe,
};

const footerSocialLinks = socialLinks.map((link) => ({
  icon: socialIconMap[link.icon] || Globe,
  href: link.href,
  label: link.label,
}));

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 400);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-blue-900 text-white shadow-lg transition-colors hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // In production, integrate with your email service
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-3">
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="min-w-0 flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-500 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:border-blue-400 dark:focus:ring-blue-400"
          aria-label="Email address"
        />
        <Button type="submit" variant="accent" size="sm" className="shrink-0">
          <Send className="h-4 w-4" />
          <span className="sr-only sm:not-sr-only">Subscribe</span>
        </Button>
      </div>
      <AnimatePresence>
        {submitted && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="text-sm text-green-600 dark:text-green-400"
          >
            Thanks for subscribing!
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}

export default function Footer() {
  return (
    <>
      <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
        <Container className="py-12 lg:py-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link
                href="/"
                className="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                Kainth{" "}
                <span className="text-blue-900 dark:text-blue-400">Solutions</span>
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                We craft exceptional digital experiences that drive growth. Our team
                combines creativity and technology to deliver solutions that make an
                impact.
              </p>

              {/* Social Icons */}
              <div className="mt-6 flex items-center gap-3">
                {footerSocialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
                {/* WhatsApp */}
                <a
                  href="https://wa.me/923207551031?text=Hello%20Kainth%20Solutions%2C%20I%20would%20like%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500 text-white transition-colors hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700"
                  title="Chat with us on WhatsApp"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 transition-colors hover:text-blue-900 dark:text-gray-400 dark:hover:text-blue-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                Services
              </h3>
              <ul className="mt-4 space-y-3">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="text-sm text-gray-600 transition-colors hover:text-blue-900 dark:text-gray-400 dark:hover:text-blue-400"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3.5: Contact Methods */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                Get in Touch
              </h3>
              <ul className="mt-4 space-y-3">
                {contactMethods.map((method) => (
                  <li key={method.label}>
                    <a
                      href={method.href}
                      target={method.href.startsWith("https://") ? "_blank" : undefined}
                      rel={method.href.startsWith("https://") ? "noopener noreferrer" : undefined}
                      className="text-sm text-gray-600 transition-colors hover:text-blue-900 dark:text-gray-400 dark:hover:text-blue-400"
                    >
                      {method.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                Newsletter
              </h3>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Stay updated with our latest insights, tips, and project launches.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </Container>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800">
          <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; 2025 Kainth Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
          </Container>
        </div>
      </footer>

      <BackToTop />
    </>
  );
}
