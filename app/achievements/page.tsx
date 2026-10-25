"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Award, TrendingUp, Users, Target, BookOpen, Clock, Heart } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { STATS } from "@/constants/data";
import CountUp from "react-countup";
import { useRef } from "react";
import { useInView } from "framer-motion";
import CertificatesShowcase from "@/components/achievements/CertificatesShowcase";

const results = [
  { student: "Ananya Sen", board: "ICSE (Class 10)", score: "98.8%", school: "Don Bosco School", rank: "School Topper" },
  { student: "Siddharth Roy", board: "CBSE (Class 12)", score: "97.4%", school: "Delhi Public School", rank: "Science Topper" },
  { student: "Debjit Paul", board: "WBSE (Class 10)", score: "96.8%", school: "Kolkata High School", rank: "Rank 15 in State" },
  { student: "Pritam Ghosh", board: "ISC (Class 12)", score: "96.5%", school: "St. Xavier's School", rank: "Commerce Topper" },
  { student: "Sneha Mukherjee", board: "CBSE (Class 10)", score: "96.2%", school: "Sushila Birla High School", rank: "Distinction" },
  { student: "Sourav Das", board: "WBSE (Class 12)", score: "95.6%", school: "Jodhpur Park High School", rank: "Arts Topper" },
];

const awards = [
  { title: "Best Skill Development Centre", year: "2023", body: "Awarded by the West Bengal Educational Council for our Abacus and Brain Stimulation programmes." },
  { title: "Academic Excellence Award", year: "2022", body: "Recognized for delivering the highest board score improvements in Secondary school tutoring." },
  { title: "Innovative Teaching Award", year: "2021", body: "Presented at the Global Education Summit for successful integration of AI & Coding for kids." },
];

export default function AchievementsPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <>
      <PageHeader
        title="Our Achievements"
        subtitle="A celebration of board toppers, national affiliations, science Olympiad partnerships, and prestigious accreditations."
        backgroundImage="/assets/infrastructure/infra-15.jpg"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Achievements" }]}
      />

      {/* Stats Counter grid */}
      <section ref={ref} className="py-16 sm:py-24 bg-white dark:bg-gray-950">
        <div className="section-container">
          <SectionHeading
            badge="By The Numbers"
            title="Track Record of "
            highlight="Excellence"
            subtitle="Our statistics reflect the dedication of our students, the expertise of our faculty, and our educational ecosystem."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-16">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-center hover:shadow-card transition-shadow"
              >
                <div className="text-4xl sm:text-5xl font-black text-primary-700 dark:text-white font-heading mb-2">
                  {inView ? <CountUp end={stat.value} duration={2} /> : "0"}
                  <span className="text-secondary">{stat.suffix}</span>
                </div>
                <div className="text-gray-500 dark:text-gray-400 text-sm font-semibold uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Certificates & Affiliations Showcase */}
      <CertificatesShowcase />

      {/* Board Results Table / Grid */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-950">
        <div className="section-container">
          <SectionHeading
            badge="Board Examination Results"
            title="Outstanding Academic "
            highlight="Performances"
            subtitle="Meet some of our brightest minds who topped their schools and boards under Tutorspedia guidance."
          />

          <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {results.map((res, i) => (
              <motion.div
                key={res.student}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-gray-50 dark:bg-gray-800/80 rounded-2xl p-6 shadow-card border border-gray-100 dark:border-gray-700 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-400">
                      {res.board}
                    </span>
                    <span className="text-xl font-black text-secondary font-heading">{res.score}</span>
                  </div>
                  <h3 className="font-heading font-bold text-gray-900 dark:text-white text-lg mb-1">{res.student}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mb-3">{res.school}</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-secondary-700 dark:text-secondary-400 mt-2 bg-secondary/5 dark:bg-secondary-950/20 py-1.5 px-3 rounded-lg w-max">
                  <Trophy size={12} />
                  {res.rank}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <SectionHeading
            badge="Industry Awards"
            title="Awards & Public "
            highlight="Recognitions"
            subtitle="Our persistent pursuit of high educational standards has earned us prestigious industry awards."
          />

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {awards.map((award, i) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-primary-950 text-white rounded-3xl p-8 relative overflow-hidden shadow-premium border border-white/10"
              >
                {/* Decorative glow */}
                <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-secondary opacity-20 blur-xl" />

                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                    <Award size={24} className="text-secondary" />
                  </div>
                  <span className="font-heading font-black text-2xl text-secondary">{award.year}</span>
                </div>

                <h3 className="font-heading font-bold text-lg mb-3 leading-tight">{award.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{award.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
