"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  gradient: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Kainth Solutions transformed our SaaS platform from concept to a product our users genuinely love. Their technical depth and strategic thinking set them apart from every agency we have worked with.",
    name: "Marcus Chen",
    role: "CEO",
    company: "CloudSync Technologies",
    initials: "MC",
    gradient: "from-blue-500 to-indigo-600",
    rating: 5,
  },
  {
    quote:
      "Our eCommerce revenue jumped 180% within three months of launching the new Shopify store they built. The attention to conversion optimization and user experience was outstanding.",
    name: "Sarah Mitchell",
    role: "Founder",
    company: "GreenGrow Organics",
    initials: "SM",
    gradient: "from-emerald-500 to-teal-600",
    rating: 5,
  },
  {
    quote:
      "They built our telemedicine platform to be HIPAA-compliant, scalable, and incredibly intuitive. Our patient satisfaction scores increased by 40% after the launch.",
    name: "Dr. Priya Sharma",
    role: "CTO",
    company: "HealthHub Medical",
    initials: "PS",
    gradient: "from-rose-500 to-pink-600",
    rating: 5,
  },
  {
    quote:
      "The EdTech platform Kainth Solutions delivered handles 50,000 concurrent users without breaking a sweat. Their engineering team is genuinely world-class.",
    name: "James Okonkwo",
    role: "Head of Product",
    company: "EduLearn Academy",
    initials: "JO",
    gradient: "from-amber-500 to-orange-600",
    rating: 5,
  },
  {
    quote:
      "From our mobile banking app to the admin dashboard, everything was delivered on time and exceeded our security and performance requirements. A truly reliable partner.",
    name: "Elena Rodriguez",
    role: "VP of Engineering",
    company: "NovaPay Fintech",
    initials: "ER",
    gradient: "from-purple-500 to-violet-600",
    rating: 5,
  },
  {
    quote:
      "Their digital marketing expertise helped us dominate local search results. We went from page three to the top spot for our key terms in under six months.",
    name: "David Park",
    role: "Managing Director",
    company: "Luxe Living Realty",
    initials: "DP",
    gradient: "from-sky-500 to-blue-600",
    rating: 5,
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((prev) =>
        dir > 0
          ? (prev + 1) % testimonials.length
          : (prev - 1 + testimonials.length) % testimonials.length
      );
    },
    []
  );

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [isPaused, paginate]);

  const testimonial = testimonials[current];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gray-50 py-20 sm:py-28 dark:bg-gray-900"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute top-0 left-1/4 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-100/40 blur-3xl dark:bg-blue-900/20" />
      <div className="pointer-events-none absolute right-1/4 bottom-0 h-96 w-96 translate-y-1/2 rounded-full bg-teal-100/40 blur-3xl dark:bg-teal-900/20" />

      <Container size="narrow">
        <FadeIn>
          <SectionHeading
            badge="Testimonials"
            title="What Our Clients Say"
            description="We measure success by the impact we create for our clients. Here is what they have to say."
          />
        </FadeIn>

        <FadeIn delay={0.15}>
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Card */}
            <div className="relative mx-auto min-h-[340px] sm:min-h-[300px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.25 },
                  }}
                  className="absolute inset-0"
                >
                  <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10 dark:border-gray-700 dark:bg-gray-800">
                    {/* Quote icon */}
                    <Quote className="absolute top-6 right-6 h-10 w-10 text-gray-100 dark:text-gray-700" />

                    {/* Stars */}
                    <div className="mb-5 flex gap-1">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-amber-400 text-amber-400"
                          />
                        )
                      )}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg leading-relaxed text-gray-700 sm:text-xl dark:text-gray-300">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="mt-8 flex items-center gap-4">
                      {/* Avatar */}
                      <div
                        className={cn(
                          "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white",
                          testimonial.gradient
                        )}
                      >
                        {testimonial.initials}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-center gap-4">
              {/* Prev */}
              <button
                onClick={() => paginate(-1)}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-colors hover:border-blue-300 hover:text-blue-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-blue-600 dark:hover:text-blue-400"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={cn(
                      "h-2.5 cursor-pointer rounded-full transition-all duration-300",
                      i === current
                        ? "w-8 bg-blue-900 dark:bg-blue-500"
                        : "w-2.5 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500"
                    )}
                  />
                ))}
              </div>

              {/* Next */}
              <button
                onClick={() => paginate(1)}
                aria-label="Next testimonial"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-colors hover:border-blue-300 hover:text-blue-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-blue-600 dark:hover:text-blue-400"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
