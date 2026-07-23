"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ZoomIn, Eye, Sparkles } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { GALLERY_IMAGES } from "@/constants/data";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "All Media" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "activities", label: "Student Activities" },
  { id: "events", label: "Events & Festivals" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedMedia, setSelectedMedia] = useState<typeof GALLERY_IMAGES[0] | null>(null);

  const filteredMedia = GALLERY_IMAGES.filter((img) => {
    return activeFilter === "all" || img.category === activeFilter;
  });

  return (
    <>
      <PageHeader
        title="Institute Gallery"
        subtitle="Step inside Tutorspedia. Explore our campus, classrooms, laboratory, workshops, and student achievements."
        backgroundImage="/assets/infrastructure/infra-10.jpg"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      <section className="py-16 sm:py-24 bg-white dark:bg-gray-950">
        <div className="section-container">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-16 bg-gray-50 dark:bg-gray-900 p-1.5 rounded-2xl border border-gray-100 dark:border-gray-800 max-w-2xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={cn(
                  "px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200",
                  activeFilter === cat.id
                    ? "bg-primary-700 text-white shadow-md"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="masonry-grid">
            <AnimatePresence mode="popLayout">
              {filteredMedia.map((media, i) => (
                <motion.div
                  key={media.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.02 }}
                  className="masonry-item group relative overflow-hidden rounded-2xl shadow-card cursor-pointer border border-gray-100 dark:border-gray-850"
                  onClick={() => setSelectedMedia(media)}
                >
                  <div className="relative w-full" style={{ height: i % 3 === 0 ? "240px" : i % 2 === 0 ? "180px" : "210px" }}>
                    <Image
                      src={media.src}
                      alt={media.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex items-center justify-center backdrop-blur-xs">
                      <div className="w-12 h-12 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-300">
                        {media.category === "activities" ? <Play size={20} className="ml-0.5 text-white" fill="white" /> : <ZoomIn size={20} />}
                      </div>
                    </div>

                    {/* Category Label overlay */}
                    <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded-lg text-[9px] font-bold bg-black/50 text-white backdrop-blur-md border border-white/10 uppercase tracking-widest">
                      {media.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              onClick={() => setSelectedMedia(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 w-full max-w-4xl max-h-[85vh] flex flex-col items-center"
            >
              {/* Media viewer */}
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                {selectedMedia.category === "activities" ? (
                  <video
                    src="/assets/videos/video-03.mp4"
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <Image
                    src={selectedMedia.src}
                    alt={selectedMedia.alt}
                    fill
                    className="object-contain"
                  />
                )}
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white border border-white/20 transition-colors"
                aria-label="Close lightbox"
              >
                <X size={20} />
              </button>

              {/* Caption */}
              <div className="mt-4 text-center px-4">
                <p className="text-white text-base font-medium">{selectedMedia.alt}</p>
                <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider mt-1 block">
                  Category: {selectedMedia.category}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
