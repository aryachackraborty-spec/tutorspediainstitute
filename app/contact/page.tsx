"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Loader2,
  CheckCircle,
  Star,
  Navigation,
  Building2,
} from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { CONTACT, BRANCHES } from "@/constants/data";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid 10-digit number required"),
  branch: z.string().min(1, "Please select a branch"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(5, "Message is too short"),
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [activeBranchId, setActiveBranchId] = useState<string>("dumdum");

  const activeBranch =
    BRANCHES.find((b) => b.id === activeBranchId) || BRANCHES[0];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      branch: "Dum Dum Park Branch (Head Office)",
    },
  });

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <PageHeader
        title="Contact Us & Our Branches"
        subtitle="Visit our campuses or reach out to our educational advisors across Kolkata."
        backgroundImage="/assets/infrastructure/infra-15.jpg"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-16 sm:py-24 bg-white dark:bg-gray-950">
        <div className="section-container">

          {/* ─── Branch Offices Section ────────────────────────────── */}
          <div className="mb-16">
            <SectionHeading
              badge="Our Campuses"
              title="Visit Tutorspedia "
              highlight="Institute Branches"
              subtitle="We have two fully equipped learning centers in Kolkata to serve students with excellence."
            />

            <div className="grid md:grid-cols-2 gap-8 mt-10">
              {BRANCHES.map((branch) => {
                const isSelected = activeBranchId === branch.id;
                return (
                  <motion.div
                    key={branch.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`relative rounded-3xl p-6 sm:p-8 border-2 transition-all duration-300 flex flex-col justify-between ${
                      isSelected
                        ? "bg-primary-50/50 dark:bg-primary-950/20 border-primary-600 shadow-xl"
                        : "bg-gray-50 dark:bg-gray-900 border-gray-150 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-700"
                    }`}
                  >
                    <div>
                      {/* Badge & Rating Header */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary-700 text-white shadow-sm flex items-center gap-1.5">
                          <Building2 size={13} />
                          {branch.badge}
                        </span>

                        {branch.rating && (
                          <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 px-3 py-1 rounded-full text-xs font-bold text-amber-700 dark:text-amber-300">
                            <Star size={13} fill="currentColor" className="text-amber-500" />
                            <span>{branch.rating}</span>
                            <span className="text-gray-500 dark:text-gray-400 font-normal">
                              ({branch.reviewsCount} Google reviews)
                            </span>
                          </div>
                        )}
                      </div>

                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-gray-900 dark:text-white mb-2">
                        {branch.name}
                      </h3>
                      <p className="text-xs font-semibold text-secondary mb-6">
                        {branch.tagline}
                      </p>

                      {/* Info List */}
                      <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-300 mb-8">
                        <li className="flex items-start gap-3">
                          <MapPin size={18} className="text-primary-600 dark:text-primary-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-gray-900 dark:text-white block mb-0.5">
                              Address:
                            </span>
                            <span className="leading-relaxed">{branch.address}</span>
                          </div>
                        </li>

                        <li className="flex items-start gap-3">
                          <Phone size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-gray-900 dark:text-white block mb-0.5">Contact Numbers:</span>
                            <div className="flex flex-col gap-0.5">
                              <a href={branch.phoneHref} className="hover:text-primary-600 font-bold text-gray-900 dark:text-white">
                                {branch.phone} <span className="text-[10px] uppercase bg-primary-100 dark:bg-primary-900/60 text-primary-700 dark:text-primary-300 font-bold px-1.5 py-0.5 rounded ml-1">Main</span>
                              </a>
                              <a href={branch.secondaryPhoneHref} className="hover:text-primary-600 font-medium text-xs text-gray-600 dark:text-gray-400">
                                {branch.secondaryPhone} <span className="text-[10px] text-gray-400 dark:text-gray-500">(Secondary)</span>
                              </a>
                            </div>
                          </div>
                        </li>

                        <li className="flex items-center gap-3">
                          <Clock size={18} className="text-amber-500 shrink-0" />
                          <div>
                            <span className="font-semibold text-gray-900 dark:text-white mr-2">Hours:</span>
                            <span>{branch.hours}</span>
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
                      <button
                        type="button"
                        onClick={() => setActiveBranchId(branch.id)}
                        className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all text-center ${
                          isSelected
                            ? "bg-primary-700 text-white shadow-md"
                            : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {isSelected ? "Map View Selected" : "View Map Location"}
                      </button>

                      <a
                        href={branch.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-4 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors flex items-center gap-1.5"
                      >
                        <Navigation size={13} />
                        Get Directions
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ─── Map & Contact Form Grid ───────────────────────────── */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            
            {/* Map & Quick Contacts */}
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <MapPin className="text-primary-600" size={22} />
                  Campus Location Map
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                  Showing interactive map for: <strong className="text-gray-800 dark:text-gray-200">{activeBranch.name}</strong>
                </p>
              </div>

              {/* Map Switcher Tabs */}
              <div className="flex items-center gap-2 p-1.5 bg-gray-100 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
                {BRANCHES.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setActiveBranchId(b.id)}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                      activeBranchId === b.id
                        ? "bg-white dark:bg-gray-800 text-primary-700 dark:text-primary-400 shadow-sm"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    {b.badge}
                  </button>
                ))}
              </div>

              {/* Maps Embed */}
              <div className="rounded-3xl overflow-hidden shadow-card border border-gray-200 dark:border-gray-800 aspect-video relative">
                <iframe
                  src={activeBranch.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${activeBranch.name} Map`}
                />
              </div>

              {/* General Contact Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800 rounded-2xl p-4">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-500 flex items-center justify-center mb-2">
                    <Phone size={16} />
                  </div>
                  <h4 className="font-heading font-bold text-xs text-gray-900 dark:text-white mb-1">
                    Central Phone Helpline
                  </h4>
                  <div className="flex flex-col gap-0.5 text-xs font-semibold">
                    <a href={CONTACT.phoneHref} className="text-gray-900 dark:text-white font-bold hover:text-primary-600">
                      {CONTACT.phone} <span className="text-[10px] text-emerald-600 font-bold">(Main)</span>
                    </a>
                    <a href={CONTACT.secondaryPhoneHref} className="text-gray-500 dark:text-gray-400 font-normal hover:text-primary-600">
                      {CONTACT.secondaryPhone} (Secondary)
                    </a>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800 rounded-2xl p-4">
                  <div className="w-8 h-8 rounded-lg bg-violet-50 dark:bg-violet-950/40 text-violet-500 flex items-center justify-center mb-2">
                    <Mail size={16} />
                  </div>
                  <h4 className="font-heading font-bold text-xs text-gray-900 dark:text-white mb-1">
                    Email Inquiries
                  </h4>
                  <a href={`mailto:${CONTACT.email}`} className="text-xs font-semibold text-gray-600 dark:text-gray-300 hover:text-primary-600">
                    {CONTACT.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800 rounded-3xl p-8 sm:p-10 shadow-premium"
            >
              <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Send Us an Inquiry
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                Select your preferred branch and send us your query. Our academic advisors will respond promptly.
              </p>

              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle size={56} className="text-secondary mx-auto mb-4" />
                  <h4 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xs mx-auto">
                    Thank you for reaching out to Tutorspedia Institute. We will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                      Target Branch *
                    </label>
                    <select {...register("branch")} className="input-premium">
                      {BRANCHES.map((b) => (
                        <option key={b.id} value={b.name}>
                          {b.name}
                        </option>
                      ))}
                      <option value="General Query / Either Branch">
                        General Query / Both Branches
                      </option>
                    </select>
                    {errors.branch && (
                      <span className="text-xs text-red-500 mt-1 block">
                        {errors.branch.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      {...register("name")}
                      placeholder="e.g. Rahul Sharma"
                      className="input-premium"
                    />
                    {errors.name && (
                      <span className="text-xs text-red-500 mt-1 block">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="rahul@example.com"
                        className="input-premium"
                      />
                      {errors.email && (
                        <span className="text-xs text-red-500 mt-1 block">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        className="input-premium"
                      />
                      {errors.phone && (
                        <span className="text-xs text-red-500 mt-1 block">
                          {errors.phone.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                      Subject *
                    </label>
                    <input
                      {...register("subject")}
                      placeholder="e.g. Class 10 Board Prep / Abacus Class Query"
                      className="input-premium"
                    />
                    {errors.subject && (
                      <span className="text-xs text-red-500 mt-1 block">
                        {errors.subject.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      placeholder="Write your details or questions here..."
                      className="input-premium"
                    />
                    {errors.message && (
                      <span className="text-xs text-red-500 mt-1 block">
                        {errors.message.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center !py-3.5 !text-sm shadow-glow disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Submitting Inquiry...
                      </>
                    ) : (
                      <>
                        Submit Inquiry Message
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
