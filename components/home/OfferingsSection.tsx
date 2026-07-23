"use client";

import { CheckCircle, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

const OFFERINGS = [
  {
    title: "ICSE/ISC Board",
    theme: "primary",
    features: [
      "Class I to Class IV",
      "Class V to Class XII",
      "Arts, Commerce, Science",
      "Monthly Mock Test",
      "Skilled Teachers",
      "Doubt Clearing Session",
      "Extra Curriculum Activity",
      "100% Success Guarantee",
    ],
  },
  {
    title: "CBSE Board",
    theme: "dark",
    features: [
      "Class I to Class IV",
      "Class V to Class XII",
      "Arts, Commerce, Science",
      "Monthly Mock Test",
      "Skilled Teachers",
      "Doubt Clearing Session",
      "Extra Curriculum Activity",
      "100% Success Guarantee",
    ],
  },
  {
    title: "West Bengal Board",
    theme: "primary",
    features: [
      "Class I to Class IV",
      "Class V to Class XII",
      "Arts, Commerce, Science",
      "Monthly Mock Test",
      "Skilled Teachers",
      "Doubt Clearing Session",
      "Extra Curriculum Activity",
      "100% Success Guarantee",
    ],
  },
  {
    title: "Special Classes",
    theme: "dark",
    features: [
      "NEET",
      "JEE Main and Advance",
      "Competitive Exam",
      "Govt. Service Exam",
      "Abacus",
      "Doubt Clearing Session",
      "Extra Curriculum Activity",
      "100% Success Guarantee",
    ],
  },
];

export default function OfferingsSection() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="section-container">
        {/* Header */}
        <SectionHeading
          badge="Our Offerings"
          title="Wide Range of High Quality "
          highlight="Teaching & Activities"
          subtitle="Comprehensive academic boards and special classes designed to ensure your child's success and holistic development."
        />

        {/* Columns */}
        <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {OFFERINGS.map((offering, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              key={idx}
              className={`flex flex-col p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-card hover:-translate-y-1 transition-all duration-300 ${
                offering.theme === "primary"
                  ? "bg-primary-700 text-white"
                  : "bg-gray-900 dark:bg-black border border-gray-800 text-white"
              }`}
            >
              <h3 className="font-heading text-xl sm:text-2xl font-bold border-b border-white/20 pb-4 mb-6">
                {offering.title}
              </h3>
              
              <ul className="flex-grow space-y-3.5 mb-8">
                {offering.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-white/90">
                    <CheckCircle size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/admissions"
                className="mt-auto bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-sm py-3 px-5 rounded-xl inline-flex items-center justify-center w-full transition-colors group"
              >
                ENROLL NOW 
                <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
