"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Award, AwardIcon, GraduationCap, Clock, X, Heart, MessageSquare } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { FACULTY } from "@/constants/data";
import { FacultyMember } from "@/types";

export default function FacultyPage() {
  const [selectedMember, setSelectedMember] = useState<FacultyMember | null>(null);

  return (
    <>
      <PageHeader
        title="Meet Our Faculty"
        subtitle="Qualified educators, subject matter experts, and dedicated mentors committed to your child's success."
        backgroundImage="/assets/infrastructure/infra-07.jpg"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Faculty" }]}
      />

      <section className="py-16 sm:py-24 bg-white dark:bg-gray-950">
        <div className="section-container">
          <SectionHeading
            badge="Inspiring Minds"
            title="The Leadership & "
            highlight="Teaching Team"
            subtitle="Our faculty members are handpicked for their academic brilliance, pedagogical expertise, and passion for mentorship."
          />

          {/* Faculty Grid */}
          <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {FACULTY.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group card-premium overflow-hidden flex flex-col items-center text-center cursor-pointer"
                onClick={() => setSelectedMember(member as FacultyMember)}
              >
                {/* Photo & Exp Badge */}
                <div className="relative pt-8 pb-4 px-8 w-full">
                  <div className="relative w-32 h-32 mx-auto rounded-3xl overflow-hidden shadow-premium border-2 border-gray-100 dark:border-gray-800 group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <span className="absolute top-5 right-5 bg-primary-700 text-white text-xs font-bold px-3 py-1 rounded-xl shadow-md flex items-center gap-1">
                    <Clock size={12} />
                    {member.experience}
                  </span>
                </div>

                {/* Info */}
                <div className="p-6 pt-0 flex flex-col flex-1 w-full">
                  <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors duration-200">
                    {member.name}
                  </h3>
                  <p className="text-secondary font-semibold text-sm mb-4">
                    {member.qualification}
                  </p>

                  {/* Subjects */}
                  <div className="flex flex-wrap gap-1.5 justify-center mb-5">
                    {member.subjects.map((sub) => (
                      <span
                        key={sub}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-400 border border-primary-100 dark:border-primary-900"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>

                  {/* Top Achievement */}
                  <div className="flex items-center justify-center gap-2 bg-gray-50 dark:bg-gray-900 py-2.5 px-4 rounded-xl text-xs text-gray-600 dark:text-gray-400 font-medium mb-6">
                    <Award size={14} className="text-amber-500 shrink-0" />
                    <span>{member.achievements[0]}</span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedMember(member as FacultyMember);
                    }}
                    className="w-full btn-primary text-sm !py-2.5 mt-auto group-hover:shadow-glow transition-all"
                  >
                    View Full Profile
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Lightbox Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedMember(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative z-10 w-full max-w-2xl bg-white dark:bg-gray-900 rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[92vh]"
            >
              {/* Header/Close */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-25 w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 flex items-center justify-center text-gray-700 dark:text-white transition-colors"
              >
                <X size={18} />
              </button>

              <div className="grid md:grid-cols-[220px,1fr] overflow-y-auto max-h-[90vh]">
                {/* Photo Column */}
                <div className="relative bg-primary-gradient p-8 text-center flex flex-col justify-center items-center">
                  <div className="relative w-32 h-32 rounded-3xl overflow-hidden shadow-lg border-2 border-white/25 mb-4">
                    <Image
                      src={selectedMember.photo}
                      alt={selectedMember.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <h4 className="font-heading font-bold text-white text-lg leading-tight">
                    {selectedMember.name}
                  </h4>
                  <p className="text-secondary-300 text-xs mt-1">
                    {selectedMember.experience} Experience
                  </p>
                </div>

                {/* Details Column */}
                <div className="p-8 space-y-6 overflow-y-auto max-h-[85vh]">
                  <div>
                    <h3 className="text-xs font-black text-primary-700 dark:text-primary-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                      <GraduationCap size={14} />
                      Qualifications
                    </h3>
                    <p className="text-gray-800 dark:text-gray-200 text-base font-semibold">
                      {selectedMember.qualification}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-black text-primary-700 dark:text-primary-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <MessageSquare size={14} />
                      Subjects Taught
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedMember.subjects.map((sub) => (
                        <span
                          key={sub}
                          className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-black text-primary-700 dark:text-primary-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <AwardIcon size={14} />
                      Key Achievements
                    </h3>
                    <ul className="space-y-1.5">
                      {selectedMember.achievements.map((ach) => (
                        <li key={ach} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300 font-medium">
                          <Star size={14} className="text-amber-500 shrink-0 mt-0.5" fill="currentColor" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xs font-black text-primary-700 dark:text-primary-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                      <Heart size={14} />
                      Teaching Philosophy
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed italic">
                      &ldquo;{selectedMember.bio}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
