import type { Metadata } from "next";
import Link from "next/link";
import ContactSection from "@/components/sections/ContactSection";
import { Container } from "@/components/ui/Container";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { companyInfo } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Kainth Solutions",
  description:
    "Get in touch with Kainth Solutions. Tell us about your project and we will get back to you within 24 hours with a free consultation.",
  openGraph: {
    title: "Contact Us | Kainth Solutions",
    description:
      "Start your next digital project with Kainth Solutions. Free consultations available.",
    url: "https://kainthsolutions.com/contact",
  },
  alternates: {
    canonical: "https://kainthsolutions.com/contact",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Kainth Solutions",
  image: "https://kainthsolutions.com/images/og-image.jpg",
  description:
    "Full-service digital agency specializing in web development, mobile apps, UI/UX design, and digital marketing.",
  telephone: companyInfo.phone,
  email: companyInfo.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: companyInfo.address.street,
    addressLocality: companyInfo.address.city,
    addressRegion: companyInfo.address.state,
    postalCode: companyInfo.address.zip,
    addressCountry: companyInfo.address.country,
  },
  url: "https://kainthsolutions.com",
  sameAs: [
    "https://linkedin.com/company/kainthsolutions",
    "https://github.com/kainthsolutions",
    "https://twitter.com/kainthsolutions",
    "https://instagram.com/kainthsolutions",
  ],
};

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: `${companyInfo.address.street}, ${companyInfo.address.city}, ${companyInfo.address.state} ${companyInfo.address.zip}`,
  },
  {
    icon: Phone,
    label: "Call Us",
    value: companyInfo.phone,
    href: `tel:${companyInfo.phone}`,
  },
  {
    icon: Mail,
    label: "Email Us",
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp Us",
    value: "Chat on WhatsApp",
    href: `https://wa.me/923207551031?text=Hello%20Kainth%20Solutions%2C%20I%20would%20like%20to%20discuss%20a%20project`,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Fri: 9:00 AM - 6:00 PM PKT",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <ContactSection />

      {/* Map & Info Section */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Map */}
            {(() => {
              const lat = 31.5081;
              const lon = 74.3756;
              const delta = 0.01;
              const bbox = `${lon - delta},${lat - delta},${lon + delta},${lat + delta}`;
              const osmSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`;
              const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                `${companyInfo.address.street}, ${companyInfo.address.city}, ${companyInfo.address.country}`
              )}`;
              const fullAddress = `${companyInfo.address.street}, ${companyInfo.address.city}, ${companyInfo.address.state} ${companyInfo.address.zip}, ${companyInfo.address.country}`;
              return (
                <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
                  <iframe
                    title={`Map showing ${companyInfo.name} location`}
                    src={osmSrc}
                    loading="lazy"
                    className="h-80 w-full border-0 lg:h-[460px] dark:[color-scheme:light]"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="flex items-start justify-between gap-4 border-t border-gray-200 p-4 dark:border-gray-700">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-900 dark:text-blue-400" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          {companyInfo.name}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {fullAddress}
                        </p>
                      </div>
                    </div>
                    <Link
                      href={directionsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 rounded-lg bg-blue-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500"
                    >
                      Get directions
                    </Link>
                  </div>
                </div>
              );
            })()}

            {/* Contact Info Cards */}
            <div className="grid gap-6 sm:grid-cols-2">
              {contactInfo.map((item) => {
                const cardContent = (
                  <>
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                      <item.icon className="h-5 w-5 text-blue-900 dark:text-blue-400" />
                    </div>
                    <h3 className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
                      {item.label}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {item.value}
                    </p>
                  </>
                );

                return (
                  <div key={item.label}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        target={item.href.startsWith("https://") ? "_blank" : undefined}
                        rel={item.href.startsWith("https://") ? "noopener noreferrer" : undefined}
                        className="block rounded-xl border border-gray-200 bg-white p-6 transition hover:border-blue-900 hover:bg-blue-50 dark:border-gray-700 dark:bg-gray-900 dark:hover:border-blue-400 dark:hover:bg-gray-800"
                      >
                        {cardContent}
                      </Link>
                    ) : (
                      <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
                        {cardContent}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
