import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";
import { Container } from "@/components/ui/Container";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
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
  },
  {
    icon: Mail,
    label: "Email Us",
    value: companyInfo.email,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Fri: 9:00 AM - 6:00 PM PST",
  },
];

export default function ContactPage() {
  return (
    <>
      <ContactSection />

      {/* Map & Info Section */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Map Placeholder */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
              <div className="flex h-80 items-center justify-center bg-gray-200 dark:bg-gray-800 lg:h-full">
                <div className="text-center">
                  <MapPin className="mx-auto mb-3 h-12 w-12 text-gray-400 dark:text-gray-500" />
                  <p className="text-lg font-semibold text-gray-500 dark:text-gray-400">
                    Interactive Map
                  </p>
                  <p className="mt-1 text-sm text-gray-400 dark:text-gray-500">
                    123 Innovation Drive, Tech Valley, CA 94043
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="grid gap-6 sm:grid-cols-2">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                    <item.icon className="h-5 w-5 text-blue-900 dark:text-blue-400" />
                  </div>
                  <h3 className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
                    {item.label}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
