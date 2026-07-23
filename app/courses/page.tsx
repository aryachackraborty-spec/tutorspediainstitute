"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Users, CheckCircle, Search, Sparkles } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { COURSES } from "@/constants/data";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "All Programmes" },
  { id: "academic", label: "Academic Courses" },
  { id: "skill", label: "Skill Development" },
  { id: "language", label: "Language Classes" },
];

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = COURSES.filter((course) => {
    const matchesTab = activeTab === "all" || course.category === activeTab;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.benefits.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  return (
    <>
      <PageHeader
        title="Our Courses & Programmes"
        subtitle="Explore our comprehensive curriculum across academic coaching, next-gen digital skills, and languages."
        backgroundImage="/assets/infrastructure/infra-05.jpg"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Courses" }]}
      />

      <section className="py-16 sm:py-24 bg-white dark:bg-gray-950">
        <div className="section-container">
          {/* Filters & Search */}
          <div className="flex flex-col items-stretch sm:flex-row sm:items-center justify-between gap-4 mb-10 sm:mb-16">
            {/* Tabs */}
            <div className="flex flex-wrap items-center gap-2 bg-gray-50 dark:bg-gray-900 p-1.5 rounded-2xl border border-gray-100 dark:border-gray-800 w-full md:w-auto justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={cn(
                    "px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200",
                    activeTab === cat.id
                      ? "bg-primary-700 text-white shadow-md"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10" size={18} />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full !pl-11 pr-4 py-2.5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm transition-all shadow-sm"
              />
            </div>
          </div>

          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
              {filteredCourses.map((course, i) => (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="group card-premium overflow-hidden flex flex-col"
                  id={course.id}
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    
                    {course.featured && (
                      <span className="absolute top-3 left-3 bg-secondary text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                        <Sparkles size={10} />
                        Flagship
                      </span>
                    )}

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

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-2 leading-tight">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                      {course.description}
                    </p>

                    {/* Meta */}
                    <div className="grid grid-cols-2 gap-3 mb-5 py-3 border-y border-gray-100 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="text-primary-500" />
                        <div>
                          <p className="text-[10px] text-gray-400 leading-none">DURATION</p>
                          <p className="font-semibold text-gray-700 dark:text-gray-300 mt-1">{course.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={14} className="text-secondary" />
                        <div>
                          <p className="text-[10px] text-gray-400 leading-none">AGE GROUP</p>
                          <p className="font-semibold text-gray-700 dark:text-gray-300 mt-1">{course.ageGroup}</p>
                        </div>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Key Highlights</h4>
                      <ul className="grid grid-cols-1 gap-2">
                        {course.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                            <CheckCircle size={14} className="text-secondary flex-shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center gap-3 mt-auto">
                      <Link
                        href={`/admissions?course=${course.id}`}
                        className="flex-1 text-center btn-primary text-sm !py-3"
                      >
                        Enroll Now
                      </Link>
                      <Link
                        href="/contact"
                        className="flex-1 text-center btn-ghost text-sm !py-3 border border-primary-100 dark:border-primary-800"
                      >
                        Inquire
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-dashed border-gray-200 dark:border-gray-800">
              <p className="text-gray-500 dark:text-gray-400 mb-4">No programmes found matching your criteria.</p>
              <button
                onClick={() => {
                  setActiveTab("all");
                  setSearchQuery("");
                }}
                className="btn-primary text-sm"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
