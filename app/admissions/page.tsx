"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Info, Calendar, Phone, Mail, FileText, Check, Loader2, ArrowRight } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { ADMISSION_STEPS } from "@/constants/data";

const schema = z.object({
  studentName: z.string().min(2, "Student Name is required"),
  parentName: z.string().min(2, "Parent/Guardian Name is required"),
  phone: z.string().min(10, "Provide a valid 10-digit phone number"),
  email: z.string().email("Provide a valid email address"),
  class: z.string().min(1, "Please select Class/Grade"),
  board: z.string().min(1, "Please select Board"),
  course: z.string().min(1, "Please select Course Interest"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const requiredDocs = [
  "Birth Certificate of the student (copy)",
  "Last academic progress report/mark sheet (if applicable)",
  "Two passport-sized photographs of the student",
  "Aadhaar card of both student & parent (copy)",
  "School transfer certificate (for mid-term admissions)",
];

export default function AdmissionsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState("");

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const lines = [
      `*New Admission Application - Tutorspedia Institute*`,
      ``,
      `• *Student Name:* ${data.studentName}`,
      `• *Parent/Guardian Name:* ${data.parentName}`,
      `• *Contact Phone:* ${data.phone}`,
      `• *Email:* ${data.email}`,
      `• *Class / Standard:* ${data.class}`,
      `• *School Board:* ${data.board}`,
      `• *Desired Course:* ${data.course}`,
      data.message ? `• *Additional Info:* ${data.message}` : null,
    ].filter(Boolean);

    const message = lines.join("\n");
    const whatsappUrl = `https://wa.me/919903790065?text=${encodeURIComponent(message)}`;

    setWhatsappLink(whatsappUrl);
    setSubmitted(true);
    reset();

    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <>
      <PageHeader
        title="Admission & Enrollment"
        subtitle="Apply for our academic batches, digital skill classes, or flagship brain programmes today."
        backgroundImage="/assets/infrastructure/infra-11.jpg"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Admissions" }]}
      />

      {/* Admission Steps */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-950">
        <div className="section-container">
          <SectionHeading
            badge="Admission Process"
            title="Your Gateway to "
            highlight="Exceptional Learning"
            subtitle="Our enrollment process is designed to be streamlined, helping you pick the perfect program for your child."
          />

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mt-10 sm:mt-16">
            {ADMISSION_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-center hover:shadow-card transition-shadow"
              >
                <div className="text-sm font-black text-secondary uppercase tracking-widest mb-2">Step {step.step}</div>
                <h3 className="font-heading font-bold text-gray-900 dark:text-white text-lg mb-3 leading-tight">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Required & Eligibility */}
      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Documents */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-card border border-gray-100 dark:border-gray-700"
            >
              <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <FileText size={24} className="text-primary-700" />
                Documents Required
              </h3>
              <ul className="space-y-4">
                {requiredDocs.map((doc) => (
                  <li key={doc} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-medium">{doc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Eligibility & Batch Policy */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <SectionHeading
                  badge="Admission Guidelines"
                  title="Eligibility & "
                  highlight="Batch Policies"
                  centered={false}
                />
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-6">
                  We believe in keeping our batch sizes small to ensure maximum individual attention. Batches are allocated based on student level assessments and class schedule availability.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                  <h4 className="font-heading font-bold text-gray-900 dark:text-white text-sm">Age Criteria</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed mt-1">
                    Nursery classes admit children from 2.5 years. Skill programs (Abacus, Coding, Robotics) accept children aged 5 to 16 years.
                  </p>
                </div>

                <div className="p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                  <h4 className="font-heading font-bold text-gray-900 dark:text-white text-sm">Session Commencement</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed mt-1">
                    Academic programs line up with school sessions. Skill and language development programs enroll students on rolling batches starting every month.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Online Application Form */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="section-container max-w-4xl">
          <SectionHeading
            badge="Online Admission Desk"
            title="Submit Your Batch "
            highlight="Application"
            subtitle="Apply online using the form below, and our administration office will contact you for confirming seat availability."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-150 dark:border-gray-800 p-8 sm:p-12 shadow-premium"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-secondary/15 text-secondary flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={36} />
                </div>
                <h3 className="font-heading text-3xl font-bold text-gray-900 dark:text-white mb-3">Application Submitted!</h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-6">
                  Thank you for applying to Tutorspedia Institute. Your application details have been forwarded to our official WhatsApp (+91 99037 90065).
                </p>
                {whatsappLink && (
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center gap-2 !py-3.5 !px-8 shadow-glow text-base"
                    >
                      Open WhatsApp to Complete Submission →
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="btn-secondary !py-3.5 !px-6 text-sm"
                    >
                      Submit Another Application
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Student Name *</label>
                    <input
                      {...register("studentName")}
                      placeholder="Enter student's full name"
                      className="input-premium"
                    />
                    {errors.studentName && <span className="text-xs text-red-500 mt-1 block">{errors.studentName.message}</span>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Parent/Guardian Name *</label>
                    <input
                      {...register("parentName")}
                      placeholder="Enter parent/guardian's name"
                      className="input-premium"
                    />
                    {errors.parentName && <span className="text-xs text-red-500 mt-1 block">{errors.parentName.message}</span>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Contact Phone *</label>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="Enter 10-digit mobile number"
                      className="input-premium"
                    />
                    {errors.phone && <span className="text-xs text-red-500 mt-1 block">{errors.phone.message}</span>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Email Address *</label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="Enter email address"
                      className="input-premium"
                    />
                    {errors.email && <span className="text-xs text-red-500 mt-1 block">{errors.email.message}</span>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Class / Standard *</label>
                    <select {...register("class")} className="input-premium">
                      <option value="">Select standard</option>
                      {["Nursery/KG", "Primary (1-5)", "Middle (6-8)", "Class 9", "Class 10", "Class 11", "Class 12"].map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    {errors.class && <span className="text-xs text-red-500 mt-1 block">{errors.class.message}</span>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">School Board *</label>
                    <select {...register("board")} className="input-premium">
                      <option value="">Select board</option>
                      {["CBSE", "ICSE", "ISC", "WBSE", "Other / None"].map(b => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                    {errors.board && <span className="text-xs text-red-500 mt-1 block">{errors.board.message}</span>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Desired Course *</label>
                    <select {...register("course")} className="input-premium">
                      <option value="">Select program</option>
                      {["Academic Coaching", "Brain Stimulation", "Abacus & Mental Maths", "Robotics & STEM", "Coding & Tech Skills", "Public Speaking", "Language Courses", "Other"].map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    {errors.course && <span className="text-xs text-red-500 mt-1 block">{errors.course.message}</span>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Additional Information (Optional)</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Provide details of any prior tutoring or academic background..."
                    className="input-premium"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center !py-4 !text-base shadow-glow hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      Submit Application Form
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
