import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-white dark:bg-gray-950">
      <Container className="text-center">
        <div className="mx-auto max-w-lg">
          {/* Large 404 */}
          <h1 className="mb-2 text-[10rem] font-extrabold leading-none tracking-tighter text-gray-200 dark:text-gray-800 sm:text-[12rem]">
            404
          </h1>
          <h2 className="-mt-8 mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Page Not Found
          </h2>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
            Sorry, we could not find the page you are looking for. It may have
            been moved or no longer exists.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/" variant="primary" size="lg">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Support
            </Button>
          </div>

          {/* Quick navigation links */}
          <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
            <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
              Popular pages you might be looking for:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: "Services", href: "/services" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "About", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-blue-900 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
