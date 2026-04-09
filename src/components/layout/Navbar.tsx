"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown, Monitor, Smartphone, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import ThemeToggle from "@/components/layout/ThemeToggle";
import MobileMenu from "@/components/layout/MobileMenu";
import type { NavLink } from "@/types";

const serviceIcons: Record<string, React.ReactNode> = {
  "Web Development": <Monitor className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
  "Mobile App Development": <Smartphone className="h-5 w-5 text-teal-600 dark:text-teal-400" />,
  "Digital Marketing": <TrendingUp className="h-5 w-5 text-orange-500 dark:text-orange-400" />,
};

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: 8,
    scale: 0.96,
    transition: { duration: 0.15, ease: "easeIn" as const },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: "easeOut" as const },
  },
};

function NavItem({ link }: { link: NavLink }) {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isActive =
    pathname === link.href ||
    (link.children && link.children.some((child) => pathname === child.href));

  const hasChildren = link.children && link.children.length > 0;

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  const handleClick = () => {
    if (hasChildren) {
      setDropdownOpen((prev) => !prev);
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  if (!hasChildren) {
    return (
      <Link
        href={link.href}
        className={cn(
          "relative px-3 py-2 text-sm font-medium transition-colors",
          isActive
            ? "text-blue-900 dark:text-blue-400"
            : "text-gray-700 hover:text-blue-900 dark:text-gray-300 dark:hover:text-blue-400"
        )}
      >
        {link.label}
        {isActive && (
          <motion.span
            layoutId="activeNav"
            className="absolute inset-x-1 -bottom-0.5 h-0.5 rounded-full bg-blue-900 dark:bg-blue-400"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </Link>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={handleClick}
        className={cn(
          "inline-flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors cursor-pointer",
          isActive
            ? "text-blue-900 dark:text-blue-400"
            : "text-gray-700 hover:text-blue-900 dark:text-gray-300 dark:hover:text-blue-400"
        )}
        aria-expanded={dropdownOpen}
        aria-haspopup="true"
      >
        {link.label}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200",
            dropdownOpen && "rotate-180"
          )}
        />
        {isActive && (
          <motion.span
            layoutId="activeNav"
            className="absolute inset-x-1 -bottom-0.5 h-0.5 rounded-full bg-blue-900 dark:bg-blue-400"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </button>

      <AnimatePresence>
        {dropdownOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute left-1/2 top-full z-50 mt-2 w-72 -translate-x-1/2 rounded-xl border border-gray-200 bg-white p-2 shadow-xl dark:border-gray-700 dark:bg-gray-900"
          >
            {link.children!.map((child) => {
              const childActive = pathname === child.href;
              return (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setDropdownOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition-colors",
                    childActive
                      ? "bg-blue-50 text-blue-900 dark:bg-blue-900/20 dark:text-blue-400"
                      : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                  )}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                    {serviceIcons[child.label] ?? <Monitor className="h-5 w-5" />}
                  </span>
                  <span className="font-medium">{child.label}</span>
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-gray-200/60 bg-white/80 shadow-sm backdrop-blur-lg dark:border-gray-800/60 dark:bg-gray-950/80"
            : "bg-transparent"
        )}
      >
        <Container>
          <nav className="flex h-16 items-center justify-between lg:h-18">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Kainth{" "}
              <span className="text-blue-900 dark:text-blue-400">Solutions</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <NavItem key={link.href} link={link} />
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <ThemeToggle className="hidden sm:inline-flex" />

              <Button
                href="/contact"
                variant="accent"
                size="sm"
                className="hidden lg:inline-flex"
              >
                Get a Quote
              </Button>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 lg:hidden cursor-pointer"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </nav>
        </Container>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16 lg:h-18" />

      {/* Mobile Menu */}
      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
