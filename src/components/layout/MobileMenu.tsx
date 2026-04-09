"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Monitor, Smartphone, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import ThemeToggle from "@/components/layout/ThemeToggle";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const serviceIcons: Record<string, React.ReactNode> = {
  "Web Development": <Monitor className="h-4 w-4" />,
  "Mobile App Development": <Smartphone className="h-4 w-4" />,
  "Digital Marketing": <TrendingUp className="h-4 w-4" />,
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const panelVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "spring" as const, damping: 30, stiffness: 300 },
  },
  exit: {
    x: "100%",
    transition: { type: "spring" as const, damping: 30, stiffness: 300 },
  },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close menu on route change
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-white dark:bg-gray-950 lg:hidden"
          >
            {/* Header */}
            <div className="flex h-16 items-center justify-between border-b border-gray-200 px-6 dark:border-gray-800">
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                Menu
              </span>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button
                  onClick={onClose}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Navigation */}
            <motion.nav
              variants={listVariants}
              initial="hidden"
              animate="visible"
              className="flex-1 overflow-y-auto px-6 py-6"
            >
              <ul className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  const hasChildren = link.children && link.children.length > 0;

                  return (
                    <motion.li key={link.href} variants={itemVariants}>
                      {/* Parent link */}
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className={cn(
                          "flex items-center rounded-lg px-4 py-3 text-base font-medium transition-colors",
                          isActive
                            ? "bg-blue-50 text-blue-900 dark:bg-blue-900/20 dark:text-blue-400"
                            : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                        )}
                      >
                        {link.label}
                      </Link>

                      {/* Children (expanded, no dropdown) */}
                      {hasChildren && (
                        <ul className="ml-4 mt-1 space-y-1 border-l-2 border-gray-100 pl-4 dark:border-gray-800">
                          {link.children!.map((child) => {
                            const childActive = pathname === child.href;
                            return (
                              <motion.li key={child.href} variants={itemVariants}>
                                <Link
                                  href={child.href}
                                  onClick={onClose}
                                  className={cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
                                    childActive
                                      ? "bg-blue-50 text-blue-900 dark:bg-blue-900/20 dark:text-blue-400"
                                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                  )}
                                >
                                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800">
                                    {serviceIcons[child.label] ?? (
                                      <Monitor className="h-4 w-4" />
                                    )}
                                  </span>
                                  {child.label}
                                </Link>
                              </motion.li>
                            );
                          })}
                        </ul>
                      )}
                    </motion.li>
                  );
                })}
              </ul>
            </motion.nav>

            {/* CTA */}
            <div className="border-t border-gray-200 p-6 dark:border-gray-800">
              <Button
                href="/contact"
                variant="accent"
                size="lg"
                className="w-full justify-center"
              >
                Get a Quote
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
