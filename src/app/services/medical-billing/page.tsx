import type { Metadata } from "next";
import {
  ClipboardCheck,
  FileText,
  Send,
  CircleDollarSign,
  RotateCcw,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren from "@/components/animations/StaggerChildren";
import CTASection from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Medical Billing & RCM Services | Kainth Solutions",
  description:
    "End-to-end medical billing and revenue cycle management. HIPAA-compliant eligibility verification, medical coding, claims submission, and denial management that maximize clean-claim rates and accelerate reimbursements.",
  openGraph: {
    title: "Medical Billing & Revenue Cycle Management | Kainth Solutions",
    description:
      "Get paid faster with HIPAA-compliant medical billing, coding, and denial management for practices, clinics, and labs.",
    url: "https://kainthsolutions.com/services/medical-billing",
  },
  alternates: {
    canonical: "https://kainthsolutions.com/services/medical-billing",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Medical Billing & Revenue Cycle Management",
  description:
    "End-to-end medical billing and revenue cycle management including eligibility verification, medical coding, claims submission, payment posting, and denial management.",
  provider: {
    "@type": "Organization",
    name: "Kainth Solutions",
    url: "https://kainthsolutions.com",
  },
  serviceType: "Medical Billing",
  areaServed: "United States",
  hasOfferingType: "Service",
};

const features = [
  {
    icon: ClipboardCheck,
    title: "Eligibility & Benefits Verification",
    description:
      "We verify patient coverage, copays, deductibles, and prior authorizations before the visit, eliminating the leading cause of claim denials and surprise balances.",
  },
  {
    icon: FileText,
    title: "Medical Coding (ICD-10, CPT & HCPCS)",
    description:
      "Certified coders translate every encounter into accurate ICD-10, CPT, and HCPCS codes with the correct modifiers, keeping claims clean and compliant with payer rules.",
  },
  {
    icon: Send,
    title: "Claims Submission & Scrubbing",
    description:
      "Charges are scrubbed for errors and submitted electronically as ANSI 837 files through our clearinghouse, so clean claims reach payers fast and rejections drop.",
  },
  {
    icon: CircleDollarSign,
    title: "Payment Posting & Reconciliation",
    description:
      "We post ERA/EOB payments line by line, reconcile against contracted rates, and flag underpayments so every dollar of allowed reimbursement is captured.",
  },
  {
    icon: RotateCcw,
    title: "Denial Management & Appeals",
    description:
      "Denied and rejected claims are researched, corrected, and appealed with supporting documentation, turning lost revenue into collected payments.",
  },
  {
    icon: ShieldCheck,
    title: "HIPAA-Compliant Workflows",
    description:
      "Protected Health Information is handled under strict HIPAA safeguards across every step, with audit trails, secure access controls, and signed BAAs.",
  },
];

const techStack = [
  { name: "AdvancedMD", category: "Practice Mgmt" },
  { name: "Kareo / Tebra", category: "Billing" },
  { name: "DrChrono", category: "EHR" },
  { name: "Athenahealth", category: "RCM Platform" },
  { name: "Availity", category: "Clearinghouse" },
  { name: "Change Healthcare", category: "Clearinghouse" },
  { name: "ICD-10-CM", category: "Code Set" },
  { name: "CPT / HCPCS", category: "Code Set" },
  { name: "ANSI 837 / 835", category: "EDI" },
  { name: "Epic", category: "EHR" },
  { name: "NextGen", category: "EHR" },
  { name: "Office Ally", category: "Clearinghouse" },
];

const process = [
  {
    step: 1,
    title: "Patient Pre-Authorization",
    description:
      "We confirm that planned services require authorization and secure prior approval from the payer, preventing avoidable denials before care is delivered.",
  },
  {
    step: 2,
    title: "Eligibility & Benefits Verification",
    description:
      "Insurance coverage, plan limits, copays, and deductibles are validated at the time of service so the patient and provider know their financial responsibility upfront.",
  },
  {
    step: 3,
    title: "Medical Coding",
    description:
      "Encounters are coded with accurate ICD-10 diagnosis and CPT/HCPCS procedure codes, applying the correct modifiers for full, compliant reimbursement.",
  },
  {
    step: 4,
    title: "Charge Entry & Claims Submission",
    description:
      "Charges, modifiers, and dates of service are entered, scrubbed for errors, and submitted electronically to payers through our integrated clearinghouse.",
  },
  {
    step: 5,
    title: "Payment Posting",
    description:
      "Insurance and patient payments are posted from ERAs and EOBs, balances are reconciled, and any contractual adjustments are recorded accurately.",
  },
  {
    step: 6,
    title: "Denial Management",
    description:
      "We reconcile denials and rejections, correct root causes, and submit timely appeals so revenue that would otherwise be written off is recovered.",
  },
  {
    step: 7,
    title: "AR Follow-Up & Reporting",
    description:
      "Aging accounts are worked at 30, 60, and 90 days, with transparent reporting on collections, denial trends, and KPIs that keep your revenue cycle healthy.",
  },
];

export default function MedicalBillingPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-24 pb-16 dark:bg-gray-950">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-emerald-100/60 blur-3xl dark:bg-emerald-900/20" />
          <div className="absolute -right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-green-100/50 blur-3xl dark:bg-green-900/15" />
        </div>
        <Container className="relative z-10">
          <FadeIn direction="up">
            <Badge variant="secondary" className="mb-6">
              Medical Billing &amp; RCM
            </Badge>
            <h1 className="mb-6 max-w-4xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
              Get Paid Faster, With{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                Fewer Denials
              </span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              We run the full revenue cycle for practices, clinics, and labs, from
              eligibility verification to denial management. Our HIPAA-compliant
              billers and certified coders raise clean-claim rates and accelerate
              reimbursements so you can focus on patient care.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="secondary" size="lg" href="/contact">
                Get a Free Billing Audit
                <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" href="/portfolio">
                View Case Studies
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <Container>
          <SectionHeading
            badge="Capabilities"
            title="Everything Your Revenue Cycle Needs"
            description="From the front desk to final payment, we cover every step of medical billing with accuracy and compliance."
          />
          <StaggerChildren
            staggerDelay={0.08}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature) => (
              <Card key={feature.title} variant="bordered" hover>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/30">
                  <feature.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </Card>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* Platforms */}
      <section className="bg-white py-20 dark:bg-gray-950">
        <Container>
          <SectionHeading
            badge="Systems We Work In"
            title="Platforms &amp; Standards"
            description="We work inside the EHR, practice management, and clearinghouse tools your team already uses, following industry code sets and EDI standards."
          />
          <FadeIn direction="up">
            <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-50 p-4 text-center transition-colors hover:border-emerald-300 hover:bg-emerald-50 dark:border-gray-700 dark:bg-gray-900 dark:hover:border-emerald-600 dark:hover:bg-emerald-900/20"
                >
                  <span className="text-base font-semibold text-gray-900 dark:text-white">
                    {tech.name}
                  </span>
                  <span className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {tech.category}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <Container size="narrow">
          <SectionHeading
            badge="The Revenue Cycle"
            title="How We Manage Your Billing in 7 Steps"
            description="A structured, transparent process that keeps claims clean, denials low, and reimbursements on time."
          />
          <div className="space-y-8">
            {process.map((item, index) => (
              <FadeIn key={item.step} direction="up" delay={index * 0.1}>
                <div className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-lg font-bold text-white dark:bg-emerald-500">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing */}
      <section className="bg-white py-20 dark:bg-gray-950">
        <Container className="text-center">
          <FadeIn direction="up">
            <SectionHeading
              badge="Pricing"
              title="Simple, Performance-Aligned Pricing"
              description="We win when you collect more. Choose the model that fits your practice."
            />
            <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
              {[
                {
                  tier: "Percentage of Collections",
                  range: "4% - 7%",
                  desc: "Full-service billing, billed only on what you collect",
                },
                {
                  tier: "Per-Claim",
                  range: "$3 - $6 / claim",
                  desc: "Coding & submission for higher-volume practices",
                },
                {
                  tier: "Dedicated Team",
                  range: "Custom",
                  desc: "End-to-end RCM with a dedicated account manager",
                },
              ].map((p) => (
                <Card key={p.tier} variant="bordered" className="text-center">
                  <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    {p.tier}
                  </h3>
                  <p className="mb-2 text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">
                    {p.range}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {p.desc}
                  </p>
                </Card>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/contact" variant="secondary" size="lg">
                Get a Custom Quote
                <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
