"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Code2,
  Users,
  MessageSquare,
  Camera,
  Globe,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import FadeIn from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@kainthsolutions.com",
    href: "mailto:hello@kainthsolutions.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Innovation Drive, Suite 400\nSan Francisco, CA 94105",
  },
];

const socialLinks = [
  { icon: Users, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: MessageSquare, href: "https://twitter.com", label: "Twitter" },
  { icon: Camera, href: "https://instagram.com", label: "Instagram" },
  { icon: Globe, href: "https://facebook.com", label: "Facebook" },
  { icon: Code2, href: "https://github.com", label: "GitHub" },
];

const serviceOptions = [
  { value: "", label: "Select a service" },
  { value: "web-development", label: "Web Development" },
  { value: "mobile-app", label: "Mobile App Development" },
  { value: "digital-marketing", label: "Digital Marketing" },
  { value: "other", label: "Other" },
];

const budgetOptions = [
  { value: "", label: "Select your budget" },
  { value: "under-5k", label: "Under $5,000" },
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k-plus", label: "$50,000+" },
];

const inputStyles =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/20";

const labelStyles =
  "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300";

const errorStyles = "mt-1 text-xs text-red-500 dark:text-red-400";

export default function ContactSection() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setSubmitStatus("idle");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setSubmitStatus("success");
      reset();
    } catch {
      setSubmitStatus("error");
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950 lg:py-28" id="contact">
      <Container>
        <FadeIn>
          <SectionHeading
            badge="Contact"
            title="Get In Touch"
            description="Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
          />
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left: Contact info */}
          <FadeIn direction="left" className="lg:col-span-2">
            <div className="space-y-8">
              {/* Contact details */}
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-900/10 text-blue-900 dark:bg-blue-400/15 dark:text-blue-400">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-medium text-gray-900 transition-colors hover:text-blue-900 dark:text-white dark:hover:text-blue-400"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="whitespace-pre-line text-sm font-medium text-gray-900 dark:text-white">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Business hours */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-teal-600/10 text-teal-600 dark:bg-teal-400/15 dark:text-teal-400">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Business Hours
                  </p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Mon - Fri: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Sat - Sun: Closed
                  </p>
                </div>
              </div>

              {/* Social links */}
              <div>
                <p className="mb-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition-colors hover:border-blue-900 hover:bg-blue-900 hover:text-white dark:border-gray-700 dark:text-gray-400 dark:hover:border-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900"
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: Contact form */}
          <FadeIn direction="right" className="lg:col-span-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 dark:border-gray-700 dark:bg-gray-900">
              {submitStatus === "success" && (
                <div className="mb-6 flex items-center gap-3 rounded-lg bg-green-50 p-4 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  <p className="text-sm font-medium">
                    Thank you! Your message has been sent successfully. We&apos;ll
                    get back to you within 24 hours.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 flex items-center gap-3 rounded-lg bg-red-50 p-4 text-red-700 dark:bg-red-900/20 dark:text-red-400">
                  <AlertCircle className="h-5 w-5 shrink-0" />
                  <p className="text-sm font-medium">
                    Something went wrong. Please try again or email us directly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Name & Email */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelStyles}>
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      className={cn(
                        inputStyles,
                        errors.name && "border-red-500 dark:border-red-400"
                      )}
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className={errorStyles}>{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className={labelStyles}>
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className={cn(
                        inputStyles,
                        errors.email && "border-red-500 dark:border-red-400"
                      )}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className={errorStyles}>{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Phone & Service */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className={labelStyles}>
                      Phone <span className="text-gray-400">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className={inputStyles}
                      {...register("phone")}
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className={labelStyles}>
                      Service <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      className={cn(
                        inputStyles,
                        "appearance-none",
                        errors.service && "border-red-500 dark:border-red-400"
                      )}
                      {...register("service")}
                    >
                      {serviceOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className={errorStyles}>{errors.service.message}</p>
                    )}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className={labelStyles}>
                    Budget <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="budget"
                    className={cn(
                      inputStyles,
                      "appearance-none",
                      errors.budget && "border-red-500 dark:border-red-400"
                    )}
                    {...register("budget")}
                  >
                    {budgetOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p className={errorStyles}>{errors.budget.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className={labelStyles}>
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your project..."
                    className={cn(
                      inputStyles,
                      "resize-none",
                      errors.message && "border-red-500 dark:border-red-400"
                    )}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className={errorStyles}>{errors.message.message}</p>
                  )}
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={isSubmitting}
                  className="w-full justify-center"
                >
                  <Send className="h-5 w-5" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
