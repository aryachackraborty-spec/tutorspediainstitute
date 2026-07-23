"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle, ArrowRight, Quote } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

const pillars = [
  "Concept-Based Learning over Rote",
  "Small Batch Sizes for Individual Attention",
  "Activity-Based Teaching",
  "Weekly Progress Reports to Parents",
  "Expert Faculty with Real-World Experience",
  "Modern Infrastructure & Smart Classrooms",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export default function AboutSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  // Calculate smooth translation based on scroll progress
  const xTranslation = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="section-container">
        {/* Top: Image + Story */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 sm:mb-24">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-premium">
              <Image
                src="/assets/infrastructure/infra-01.jpg"
                alt="Tutorspedia classroom"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
            </div>
            {/* Floating secondary image - hidden on small screens */}
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-40 h-28 sm:w-48 sm:h-36 rounded-2xl overflow-hidden shadow-premium border-4 border-white dark:border-gray-900">
              <Image
                src="/assets/infrastructure/infra-02.jpg"
                alt="Activity at Tutorspedia"
                fill
                className="object-cover"
              />
            </div>
            {/* Stats badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 glass-light dark:glass px-4 py-3 rounded-2xl shadow-card"
            >
              <div className="text-2xl sm:text-3xl font-black text-primary-700 dark:text-white font-heading">10+</div>
              <div className="text-[10px] sm:text-xs font-semibold text-gray-600 dark:text-gray-300 mt-0.5">Years of Excellence</div>
            </motion.div>
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeading
              badge="Our Story"
              title="Where Learning Meets "
              highlight="Excellence"
              centered={false}
            />
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-5 mb-4 text-sm sm:text-base">
              Tutorspedia Institute was founded with a singular vision — to transform the way students learn. In a world dominated by rote memorization and exam pressure, we chose a different path: <strong>concept-based, student-centric education</strong> that builds real understanding and lasting skills.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-sm sm:text-base">
              From Nursery to Class 12 and beyond, our programmes span academic coaching, skill development, and cognitive enhancement — making us truly <em>one roof solution</em>.
            </p>

            {/* Founder Quote */}
            <div className="bg-primary-50 dark:bg-primary-950 rounded-2xl p-5 sm:p-6 border-l-4 border-primary-700 mb-6 relative">
              <Quote size={28} className="text-primary-200 dark:text-primary-800 absolute top-4 right-4" />
              <p className="text-gray-700 dark:text-gray-300 italic text-sm leading-relaxed mb-2">
                &ldquo;Every child is gifted. Our role is to create the right environment where that gift can shine.&rdquo;
              </p>
              <div className="font-semibold text-primary-700 dark:text-primary-400 text-xs sm:text-sm">
                — Founder, Tutorspedia Institute
              </div>
            </div>

            <Link href="/about" className="btn-primary inline-flex text-sm sm:text-base">
              Read Our Full Story
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {[
            {
              label: "Our Mission",
              accent: "border-blue-600 dark:border-blue-400",
              labelColor: "text-blue-700 dark:text-blue-400",
              text: "To provide accessible, high-quality, personalized education that nurtures every child's unique potential.",
              bg: "bg-white dark:bg-gray-900",
            },
            {
              label: "Our Vision",
              accent: "border-emerald-600 dark:border-emerald-400",
              labelColor: "text-emerald-700 dark:text-emerald-400",
              text: "To be the most trusted educational institute in West Bengal, known for innovation and transformational impact.",
              bg: "bg-white dark:bg-gray-900",
            },
            {
              label: "Our Values",
              accent: "border-violet-600 dark:border-violet-400",
              labelColor: "text-violet-700 dark:text-violet-400",
              text: "Excellence, Empathy, Innovation, Integrity, and Individual Attention — the five principles behind everything we do.",
              bg: "bg-white dark:bg-gray-900",
            },
          ].map((card, i) => (
            <div
              key={card.label}
              className={`${card.bg} border border-gray-100 dark:border-gray-800 rounded-2xl p-6 sm:p-8 border-l-4 ${card.accent}`}
            >
              <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${card.labelColor}`}>
                {card.label}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Parents Trust */}
      <div ref={scrollRef} className="mt-20 sm:mt-28 overflow-hidden bg-gray-50/50 dark:bg-gray-950/30 py-16 sm:py-24 border-t border-b border-gray-100 dark:border-gray-900">
        <div className="section-container mb-12 sm:mb-16">
          <div className="text-center max-w-3xl mx-auto px-4">
            <SectionHeading
              badge="Why Parents Choose Us"
              title="Built on Trust, "
              highlight="Proven Results"
              centered={true}
              subtitle="We don't just promise excellence — we deliver it."
            />
            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3"
            >
              {pillars.map((p) => (
                <motion.li
                  key={p}
                  variants={item}
                  className="flex items-center gap-2 bg-white dark:bg-gray-900 px-4 py-2 rounded-full border border-gray-100 dark:border-gray-800 shadow-sm"
                >
                  <CheckCircle size={14} className="text-secondary flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-medium">{p}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* Scroll-linked horizontal slider with uniform shapes */}
        <div className="relative py-4 select-none">
          <motion.div
            style={{ x: xTranslation }}
            className="flex gap-4 sm:gap-6 w-max px-[5vw]"
          >
            {[
              "/assets/infrastructure/infra-08.jpg",
              "/assets/infrastructure/infra-09.jpg",
              "/assets/infrastructure/infra-10.jpg",
              "/assets/infrastructure/infra-03.jpg",
              "/assets/infrastructure/infra-05.jpg",
              "/assets/infrastructure/infra-06.jpg",
              "/assets/infrastructure/infra-13.jpg",
              "/assets/infrastructure/infra-14.jpg",
              "/assets/infrastructure/infra-15.jpg",
            ].map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden shadow-premium rounded-2xl aspect-[4/3] w-64 sm:w-80 flex-shrink-0 border border-gray-100 dark:border-gray-800"
              >
                <Image
                  src={img}
                  alt={`Institute image ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
