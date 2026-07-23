import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions of service for Tutorspedia Institute, Kolkata.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms & Conditions"
        subtitle="Last Updated: July 04, 2026"
        backgroundImage="/assets/infrastructure/infra-15.jpg"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]}
      />

      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="section-container max-w-3xl">
          <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-6 text-sm leading-relaxed">
            <h2 className="text-xl font-heading font-bold text-gray-900 dark:text-white mt-8">1. Acceptable Use of Services</h2>
            <p>
              By enrolling in Tutorspedia Institute coaching, skill development, or flagship brain stimulation classes, you agree to respect our code of conduct, class discipline policies, safety rules, and digital infrastructure guidelines.
            </p>

            <h2 className="text-xl font-heading font-bold text-gray-900 dark:text-white mt-8">2. Fee Payment & Billing</h2>
            <p>
              Batch fees, admission fees, and course materials are subject to monthly or term-based payment structures. All fees should be paid in advance by the stipulated due date to ensure continuous batch seating. Fees paid are non-refundable.
            </p>

            <h2 className="text-xl font-heading font-bold text-gray-900 dark:text-white mt-8">3. Attendance & Progress</h2>
            <p>
              Regular student attendance and weekly worksheet submission are key to concept-based educational growth. In the event of missed sessions due to health reasons, make-up doubt clearing classes can be scheduled with the faculty subject to availability.
            </p>

            <h2 className="text-xl font-heading font-bold text-gray-900 dark:text-white mt-8">4. Intellectual Property</h2>
            <p>
              All academic handouts, abacus formulas, robotics curriculum designs, website multimedia slides, coding project handouts, and logos belong to Tutorspedia Institute and cannot be replicated or distributed without written permission.
            </p>

            <h2 className="text-xl font-heading font-bold text-gray-900 dark:text-white mt-8">5. Contact Information</h2>
            <p>
              For clarify on our terms of service, billing policies, or class regulations, contact our administrative desk or email us at info@tutorspedia.in.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
