import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Tutorspedia Institute. Read about how we handle, collect, and protect your data.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="Last Updated: July 04, 2026"
        backgroundImage="/assets/infrastructure/infra-15.jpg"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />

      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="section-container max-w-3xl">
          <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-6 text-sm leading-relaxed">
            <h2 className="text-xl font-heading font-bold text-gray-900 dark:text-white mt-8">1. Information We Collect</h2>
            <p>
              Tutorspedia Institute collects details when you register on our site, apply for admissions, book a free demo, or subscribe to our newsletter. We collect student names, guardian names, email addresses, contact phone numbers, and academic levels.
            </p>

            <h2 className="text-xl font-heading font-bold text-gray-900 dark:text-white mt-8">2. How We Use Your Information</h2>
            <p>
              The information we gather is used to customize your learning recommendation, manage academic batch setups, provide weekly progress notifications, and process demo class enrollment details.
            </p>

            <h2 className="text-xl font-heading font-bold text-gray-900 dark:text-white mt-8">3. Protecting Student Privacy</h2>
            <p>
              We implement comprehensive physical, digital, and structural safety precautions to secure the privacy of all student and parent records. We never sell, rent, or trade your personally identifiable records to marketing agencies or third parties.
            </p>

            <h2 className="text-xl font-heading font-bold text-gray-900 dark:text-white mt-8">4. Cookies Policy</h2>
            <p>
              Our website uses cookies to store browser preferences and help us identify return visits. This helps customize site aesthetics and speed up loading performance. You can choose to disable cookies in your web browser setup.
            </p>

            <h2 className="text-xl font-heading font-bold text-gray-900 dark:text-white mt-8">5. Changes to This Privacy Policy</h2>
            <p>
              Tutorspedia reserves the right to modify this privacy statement at any time. Any changes will be updated on this page with an updated timestamp.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
