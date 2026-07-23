"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote, Play } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { TESTIMONIALS } from "@/constants/data";

const videoReviews = [
  { id: 1, title: "Parent Review - Class 10 Board prep", poster: "/assets/infrastructure/infra-11.jpg", duration: "1:45" },
  { id: 2, title: "Brain Stimulation Programme Testimonial", poster: "/assets/infrastructure/infra-13.jpg", duration: "2:10" },
  { id: 3, title: "Abacus Success Story - Primary student", poster: "/assets/infrastructure/infra-15.jpg", duration: "1:15" },
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        title="Testimonials & Reviews"
        subtitle="Read real stories of academic growth and skill mastery from parents and students."
        backgroundImage="/assets/infrastructure/infra-12.jpg"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Testimonials" }]}
      />

      {/* Google Ratings Strip */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900 border-b border-gray-150 dark:border-gray-800">
        <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center font-black text-2xl text-gray-900 dark:text-white shadow-sm font-heading">
              G
            </div>
            <div>
              <h3 className="font-heading font-bold text-gray-900 dark:text-white leading-tight">Google Reviews</h3>
              <div className="flex items-center gap-1 mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="text-amber-400" fill="currentColor" />
                ))}
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-1.5 font-medium">4.9 out of 5 stars (200+ ratings)</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs !px-5 !py-2.5 shadow-sm"
            >
              Write a Review
            </a>
          </div>
        </div>
      </section>

      {/* Video Reviews */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-950">
        <div className="section-container">
          <SectionHeading
            badge="Video Testimonials"
            title="Hear Directly From "
            highlight="Parents"
            subtitle="Watch video feedback from parents sharing their experience with Tutorspedia faculty and flagship programmes."
          />

          <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {videoReviews.map((vid, i) => (
              <motion.div
                key={vid.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden shadow-card aspect-video cursor-pointer border border-gray-100 dark:border-gray-800"
              >
                <Image
                  src={vid.poster}
                  alt={vid.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-4 transition-colors group-hover:bg-black/50">
                  <span className="bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded-lg border border-white/10 w-max">
                    {vid.duration}
                  </span>

                  <div className="w-12 h-12 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white mx-auto shadow-lg group-hover:bg-white/30 transition-all scale-95 group-hover:scale-100">
                    <Play size={20} className="ml-0.5 text-white" fill="white" />
                  </div>

                  <p className="text-white text-xs font-semibold leading-relaxed truncate">
                    {vid.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Text Reviews Grid */}
      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <SectionHeading
            badge="Written Reviews"
            title="Stories of Educational "
            highlight="Transformation"
            subtitle="Detailed reviews and feedback from our parents, school students, and adult language learners."
          />

          <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 relative border border-gray-100 dark:border-gray-700 flex flex-col justify-between"
              >
                <Quote size={40} className="text-primary-500/10 dark:text-primary-400/5 absolute top-6 right-6" />

                <div>
                  <div className="flex items-center gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, r) => (
                      <Star key={r} size={13} className="text-amber-400" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="relative w-10 h-10 rounded-xl overflow-hidden shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-gray-900 dark:text-white text-sm">{t.name}</h4>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-none mt-0.5">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
