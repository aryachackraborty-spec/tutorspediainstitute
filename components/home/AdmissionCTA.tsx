"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X, CheckCircle, ArrowRight, Calendar, Loader2, Phone } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { ADMISSION_STEPS, CONTACT } from "@/constants/data";

const schema = z.object({
  studentName: z.string().min(2, "Required"),
  parentName: z.string().min(2, "Required"),
  phone: z.string().min(10, "Valid phone required"),
  email: z.string().email("Valid email required"),
  class: z.string().min(1, "Required"),
  course: z.string().min(1, "Required"),
});

type FormData = z.infer<typeof schema>;

export default function AdmissionCTA() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    setTimeout(() => { setModalOpen(false); setSubmitted(false); reset(); }, 3000);
  };

  return (
    <>
      <section className="pt-16 sm:pt-24 pb-0 bg-white dark:bg-gray-950">
        <div className="section-container">
          <SectionHeading
            badge="Join Tutorspedia"
            title="Start Your "
            highlight="Learning Journey"
            subtitle="Simple, transparent, and welcoming — our admission process is designed for you."
          />

          {/* Steps */}
          <div className="mt-10 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-16 relative">
            {/* Connector line — desktop only */}
            <div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gray-200 dark:bg-gray-700 z-0" />

            {ADMISSION_STEPS.map((step, i) => (
              <div
                key={step.step}
                className="flex flex-col items-center text-center relative z-10"
              >
                <div className="w-12 h-12 rounded-full border-2 border-primary-700 dark:border-primary-400 flex items-center justify-center mb-4 bg-white dark:bg-gray-950">
                  <span className="text-sm font-black text-primary-700 dark:text-primary-400 font-heading">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-gray-900 dark:text-white mb-1.5 text-sm sm:text-base">
                  {step.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner - Full Width Edge-to-Edge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-primary-950 dark:bg-black py-16 sm:py-24 px-4 text-center mt-12 sm:mt-20 border-y border-primary-900/30"
        >
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-5xl font-black text-white mb-3 sm:mb-4">
              Book Your <span className="text-secondary-400">FREE Demo Class</span> Today
            </h2>
            <p className="text-white/80 text-sm sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              Experience Tutorspedia&apos;s teaching style — no commitment, no pressure. Just learning.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-primary-700 font-bold rounded-xl sm:rounded-2xl hover:bg-primary-50 active:scale-95 transition-all shadow-premium text-sm sm:text-base"
              >
                <Calendar size={18} />
                Book Free Demo
              </button>
              <a
                href={CONTACT.phoneHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl sm:rounded-2xl active:scale-95 transition-all shadow-md text-sm sm:text-base"
              >
                <Phone size={18} />
                Call 9903790065
              </a>
              <a
                href="/admissions"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-white text-white font-bold rounded-xl sm:rounded-2xl hover:bg-white/10 active:scale-95 transition-all text-sm sm:text-base"
              >
                Apply Now
                <ArrowRight size={16} />
              </a>
            </div>

            <p className="mt-6 text-white/80 text-xs sm:text-sm flex items-center justify-center gap-2 flex-wrap">
              <span>Direct Admissions Helpline:</span>
              <a
                href={CONTACT.phoneHref}
                className="text-secondary-400 hover:text-secondary-300 font-bold underline underline-offset-4 inline-flex items-center gap-1"
              >
                <Phone size={13} className="inline shrink-0" />
                9903790065
              </a>
              <span className="text-white/40">|</span>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 font-bold underline underline-offset-4 inline-flex items-center gap-1"
              >
                WhatsApp Us
              </a>
            </p>
          </div>
        </motion.div>
      </section>

      {/* Demo Booking Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative z-10 w-full sm:max-w-lg bg-white dark:bg-gray-900 rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto"
            >
              {submitted ? (
                <div className="p-10 text-center">
                  <CheckCircle size={56} className="text-secondary mx-auto mb-4" />
                  <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-2">Demo Booked! 🎉</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">We&apos;ll contact you within 24 hours to confirm your free demo class.</p>
                </div>
              ) : (
                <>
                  <div className="bg-primary-gradient p-5 sm:p-6 sticky top-0">
                    {/* drag handle for mobile */}
                    <div className="w-10 h-1 rounded-full bg-white/30 mx-auto mb-4 sm:hidden" />
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-white">Book Free Demo Class</h3>
                      <button
                        onClick={() => setModalOpen(false)}
                        className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white hover:bg-white/30"
                      >
                        <X size={18} />
                      </button>
                    </div>
                    <p className="text-white/80 text-sm mt-1">Fill out the form and we&apos;ll set up your complimentary class.</p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="p-5 sm:p-6 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Student Name *</label>
                        <input {...register("studentName")} placeholder="Child's name" className="input-premium" />
                        {errors.studentName && <p className="text-xs text-red-500 mt-1">{errors.studentName.message}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Parent Name *</label>
                        <input {...register("parentName")} placeholder="Your name" className="input-premium" />
                        {errors.parentName && <p className="text-xs text-red-500 mt-1">{errors.parentName.message}</p>}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Phone *</label>
                        <input {...register("phone")} type="tel" placeholder="+91 XXXXX XXXXX" className="input-premium" />
                        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Email</label>
                        <input {...register("email")} type="email" placeholder="email@example.com" className="input-premium" />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Class / Grade *</label>
                        <select {...register("class")} className="input-premium">
                          <option value="">Select class</option>
                          {["Nursery/KG", "Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"].map(c => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                        {errors.class && <p className="text-xs text-red-500 mt-1">{errors.class.message}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Course Interest *</label>
                        <select {...register("course")} className="input-premium">
                          <option value="">Select course</option>
                          {["Academic Coaching", "Brain Stimulation", "Abacus", "Robotics", "Coding", "Public Speaking", "AI for Kids", "Language Course"].map(c => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                        {errors.course && <p className="text-xs text-red-500 mt-1">{errors.course.message}</p>}
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full justify-center !py-3 sm:!py-3.5 !text-sm sm:!text-base disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <><Loader2 size={16} className="animate-spin" />Booking...</>
                      ) : (
                        <><Calendar size={16} />Book My Free Demo</>
                      )}
                    </button>
                    <p className="text-center text-xs text-gray-500 dark:text-gray-400 pt-1">
                      Prefer to talk directly? Call us at{" "}
                      <a href={CONTACT.phoneHref} className="text-primary-600 dark:text-primary-400 font-bold hover:underline">
                        9903790065
                      </a>
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
