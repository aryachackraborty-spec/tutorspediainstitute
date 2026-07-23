"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Users, ArrowRight, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { COURSES } from "@/constants/data";

const categoryLabel: Record<string, string> = {
  academic: "Academic",
  skill: "Skill Development",
  language: "Language",
};
const categoryColor: Record<string, string> = {
  academic: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  skill: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  language: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
};

export default function CoursesPreview() {
  const featured = COURSES.filter((c) => c.featured).slice(0, 6);

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-gray-950">
      <div className="section-container">
        <SectionHeading
          badge="Our Programmes"
          title="Courses Designed for "
          highlight="Every Learner"
          subtitle="From early childhood education to advanced skill development — find the perfect programme for your child."
        />

        <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {featured.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group card-premium overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span
                  className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold ${categoryColor[course.category]}`}
                >
                  {categoryLabel[course.category]}
                </span>
                {course.boards.length > 0 && (
                  <div className="absolute bottom-3 left-3 flex gap-1">
                    {course.boards.map((b) => (
                      <span
                        key={b}
                        className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/20 text-white backdrop-blur-sm border border-white/20"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {course.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-4 text-xs text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users size={13} />
                    {course.ageGroup}
                  </span>
                </div>

                {/* Benefits */}
                <ul className="grid grid-cols-2 gap-1.5 mb-5">
                  {course.benefits.slice(0, 4).map((b) => (
                    <li key={b} className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400">
                      <CheckCircle size={11} className="text-secondary flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-3 mt-auto">
                  <Link
                    href={`/courses#${course.id}`}
                    className="flex-1 text-center btn-primary text-sm !py-2.5"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/admissions"
                    className="flex-1 text-center btn-ghost text-sm !py-2.5 border border-primary-100 dark:border-primary-800"
                  >
                    Enroll Now
                  </Link>
                </div>
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
          <Link href="/courses" className="btn-secondary inline-flex text-base !px-10 !py-4">
            View All Courses
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
