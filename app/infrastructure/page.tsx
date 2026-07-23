"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ZoomIn, Info, Monitor, BookOpen, Shield, Coffee } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { GALLERY_IMAGES } from "@/constants/data";

const facilities = [
  { icon: Monitor, title: "Smart Classrooms", desc: "Equipped with interactive projectors, high-definition audio systems, and digital teaching aids." },
  { icon: BookOpen, title: "In-House Library", desc: "A curated space with academic journals, reference guides, coding publications, and literature." },
  { icon: Shield, title: "Safe & Air-Conditioned Campus", desc: "Fully air-conditioned corridors and classrooms with round-the-clock CCTV surveillance." },
  { icon: Coffee, title: "Activity & Play Room", desc: "A creative, hands-on arena where abacus, chess, and robotics students build and test projects." },
];

export default function InfrastructurePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Extract infrastructure photos specifically (the first 8)
  const infraImages = GALLERY_IMAGES.filter(img => img.category === "infrastructure");

  return (
    <>
      <PageHeader
        title="Our Infrastructure"
        subtitle="Explore our modern, air-conditioned smart campus designed to inspire learning, safety, and focus."
        backgroundImage="/assets/infrastructure/infra-03.jpg"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Infrastructure" }]}
      />

      {/* Facilities Highlight */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="section-container">
          <SectionHeading
            badge="Learning Spaces"
            title="Premium Infrastructure for "
            highlight="Active Minds"
            subtitle="Tutorspedia's facilities are engineered to support modern pedagogical styles, with space dedicated to academic growth and skills training."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {facilities.map((fac, i) => {
              const Icon = fac.icon;
              return (
                <motion.div
                  key={fac.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary-700 flex items-center justify-center text-white mb-6 shadow-glow">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-heading font-bold text-gray-900 dark:text-white text-lg mb-3 leading-tight">{fac.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{fac.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Campus Video Tour */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                badge="Campus Video Tour"
                title="A Digital Tour Inside "
                highlight="Our Institute"
                centered={false}
              />
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-6 mb-8">
                Take a look around our classrooms and learning facilities. Our spaces are curated to offer optimal teacher-student interactions, small batch settings, and state-of-the-art multimedia presentation capability.
              </p>
              <div className="flex flex-wrap gap-4 items-center text-sm font-semibold text-gray-700 dark:text-gray-300">
                <span className="flex items-center gap-2 bg-white dark:bg-gray-800 py-2.5 px-4 rounded-xl shadow-xs">
                  <Info size={16} className="text-primary-700" />
                  Smart Projection Systems
                </span>
                <span className="flex items-center gap-2 bg-white dark:bg-gray-800 py-2.5 px-4 rounded-xl shadow-xs">
                  <Info size={16} className="text-secondary" />
                  CCTV Enabled Safe Campus
                </span>
              </div>
            </div>

            {/* Video Container */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-premium border border-gray-200 dark:border-gray-700 bg-black group"
            >
              <video
                src="/assets/videos/video-01.mp4"
                poster="/assets/infrastructure/infra-08.jpg"
                controls
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center cursor-pointer pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-white/25 backdrop-blur-xs flex items-center justify-center text-white border border-white/20 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <Play size={24} className="ml-1" fill="currentColor" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Showcase Grid */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="section-container">
          <SectionHeading
            badge="Campus Showcase"
            title="Classrooms & Infrastructure "
            highlight="In Detail"
            subtitle="Explore pictures of our state-of-the-art desks, abacus training tools, robotics kits, and coding workstations."
          />

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {infraImages.map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl shadow-card aspect-square cursor-pointer"
                onClick={() => setSelectedImage(img.src)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-all">
                    <ZoomIn size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-xs"
              onClick={() => setSelectedImage(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 w-full max-w-4xl max-h-[85vh] aspect-video"
            >
              <Image
                src={selectedImage}
                alt="Infrastructure"
                fill
                className="object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white border border-white/20 transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
