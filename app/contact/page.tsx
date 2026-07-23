"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, Loader2, CheckCircle, ArrowRight } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { CONTACT } from "@/constants/data";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid 10-digit number required"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(5, "Message is too short"),
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with Tutorspedia. Reach out for admission queries, demo classes, or job applications."
        backgroundImage="/assets/infrastructure/infra-15.jpg"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      {/* Main Grid */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-950">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Contact Details & Maps */}
            <div className="space-y-10">
              <div>
                <SectionHeading
                  badge="Get in Touch"
                  title="Reach Out to "
                  highlight="Our Campus"
                  centered={false}
                  subtitle="Drop by for a counseling session or talk to our educational advisors."
                />
              </div>

              {/* Cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: MapPin, title: "Our Location", text: CONTACT.address, color: "text-blue-500 bg-blue-50 dark:bg-blue-950/40" },
                  { icon: Phone, title: "Phone Support", text: CONTACT.phone, color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40" },
                  { icon: Mail, title: "Email Address", text: CONTACT.email, color: "text-violet-500 bg-violet-50 dark:bg-violet-950/40" },
                  { icon: Clock, title: "Office Hours", text: CONTACT.officeHours, color: "text-amber-500 bg-amber-50 dark:bg-amber-950/40" },
                ].map((item, i) => (
                  <div key={item.title} className="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 hover:-translate-y-0.5 transition-all">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${item.color}`}>
                      <item.icon size={18} />
                    </div>
                    <h3 className="font-heading font-bold text-gray-900 dark:text-white mb-1.5 text-sm">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed font-medium">{item.text}</p>
                  </div>
                ))}
              </div>

              {/* Maps Embed */}
              <div className="rounded-3xl overflow-hidden shadow-card border border-gray-100 dark:border-gray-800 aspect-video relative">
                <iframe
                  src={CONTACT.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tutorspedia Campus Location"
                />
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800 rounded-3xl p-8 sm:p-12 shadow-premium"
            >
              <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-2">Send Us a Message</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">Got general questions? Fill up the form and our representative will write back.</p>

              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle size={56} className="text-secondary mx-auto mb-4" />
                  <h4 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xs mx-auto">
                    We&apos;ll read your inquiry and reply to your email address shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Your Name *</label>
                    <input
                      {...register("name")}
                      placeholder="John Doe"
                      className="input-premium"
                    />
                    {errors.name && <span className="text-xs text-red-500 mt-1 block">{errors.name.message}</span>}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Email Address *</label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="john@example.com"
                        className="input-premium"
                      />
                      {errors.email && <span className="text-xs text-red-500 mt-1 block">{errors.email.message}</span>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Phone Number *</label>
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        className="input-premium"
                      />
                      {errors.phone && <span className="text-xs text-red-500 mt-1 block">{errors.phone.message}</span>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Subject *</label>
                    <input
                      {...register("subject")}
                      placeholder="Inquiry about secondary coaching"
                      className="input-premium"
                    />
                    {errors.subject && <span className="text-xs text-red-500 mt-1 block">{errors.subject.message}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Message *</label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      placeholder="Write your query here in detail..."
                      className="input-premium"
                    />
                    {errors.message && <span className="text-xs text-red-500 mt-1 block">{errors.message.message}</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center !py-3.5 !text-sm shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Inquiry Message
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
