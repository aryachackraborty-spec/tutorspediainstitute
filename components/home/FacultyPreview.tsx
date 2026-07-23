"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { FACULTY } from "@/constants/data";

export default function FacultyPreview() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <SectionHeading
          badge="Our Educators"
          title="Meet Our "
          highlight="Expert Faculty"
          subtitle="Qualified, passionate, and dedicated educators who go beyond the textbook to inspire every student."
        />

        <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {FACULTY.slice(0, 3).map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group card-premium overflow-hidden text-center"
            >
              {/* Photo */}
              <div className="relative pt-8 pb-0 px-8">
                <div className="relative w-28 h-28 mx-auto rounded-2xl overflow-hidden shadow-card">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Qualification badge */}
                <div className="absolute top-5 right-5 bg-primary-700 text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                  {member.experience}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 text-sm font-medium mb-3">
                  {member.qualification}
                </p>

                {/* Subjects */}
                <div className="flex flex-wrap gap-1.5 justify-center mb-4">
                  {member.subjects.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-secondary/10 text-secondary-700 dark:text-secondary-400"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Achievement */}
                <div className="flex items-center justify-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mb-5">
                  <Star size={12} className="text-amber-400" fill="currentColor" />
                  {member.achievements[0]}
                </div>

                <Link
                  href="/faculty"
                  className="inline-flex items-center gap-2 text-primary-700 dark:text-primary-400 text-sm font-semibold hover:underline"
                >
                  View Profile
                  <ExternalLink size={13} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="/faculty" className="btn-primary inline-flex text-base !px-10 !py-4">
            Meet All Faculty
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
