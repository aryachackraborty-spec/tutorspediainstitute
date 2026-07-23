"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { GALLERY_IMAGES } from "@/constants/data";

export default function GalleryPreview() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position of the section relative to viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Map vertical page scroll to horizontal track movement
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-35%"]);

  // Use a selection of 8 clean images for the horizontal scroll
  const previewImages = GALLERY_IMAGES.slice(0, 8);

  return (
    <section
      ref={containerRef}
      className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      <div className="section-container mb-10">
        <SectionHeading
          badge="Our Campus Life"
          title="A Glimpse of "
          highlight="Tutorspedia"
          subtitle="Explore our vibrant learning environment, student activities, events, and infrastructure."
        />
      </div>

      {/* Horizontal scrolling track container */}
      <div className="relative w-full overflow-hidden select-none cursor-grab active:cursor-grabbing py-4">
        <motion.div
          style={{ x }}
          className="flex gap-4 sm:gap-6 px-4 sm:px-8 w-max"
        >
          {previewImages.map((img) => (
            <div
              key={img.id}
              className="relative w-[280px] sm:w-[380px] aspect-[4/3] rounded-2xl overflow-hidden shadow-card border border-gray-200/50 dark:border-gray-800/50 flex-shrink-0 group bg-white dark:bg-gray-950"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 280px, 380px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority={img.id <= 2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 truncate">
                {img.alt}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="section-container mt-10 sm:mt-12 text-center">
        <Link
          href="/gallery"
          className="btn-primary inline-flex text-sm sm:text-base !px-8 !py-3.5 sm:!px-10 sm:!py-4"
        >
          View Full Gallery
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
