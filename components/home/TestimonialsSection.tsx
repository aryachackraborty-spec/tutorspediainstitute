"use client";

import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { TESTIMONIALS } from "@/constants/data";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={i < rating ? "text-amber-400" : "text-white/25"}
          fill={i < rating ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  // Duplicate testimonials once to enable seamless infinite scrolling marquee
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-20 sm:py-28 bg-[#0B4F9C] dark:bg-[#071F45] overflow-hidden text-white relative">
      <div className="section-container">
        <SectionHeading
          badge="What Parents & Students Say"
          title="Real Stories, "
          highlight="Real Results"
          subtitle="Don't take our word for it — hear from the families whose children have transformed at Tutorspedia."
          light
        />

        {/* Google Rating Badge */}
        <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8 mb-12 sm:mb-16">
          <div className="flex items-center gap-3 bg-white/10 border border-white/15 rounded-2xl px-5 py-3 shadow-sm backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-black text-white font-heading">4.9</div>
            <div>
              <div className="flex items-center gap-0.5 mb-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} className="text-amber-400" fill="currentColor" />
                ))}
              </div>
              <div className="text-[10px] sm:text-xs text-white/70">Google Rating · 200+ Reviews</div>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full overflow-hidden py-4 select-none mask-image">
        {/* Left & Right fade masks to make edges look premium */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0B4F9C] dark:from-[#071F45] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0B4F9C] dark:from-[#071F45] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee gap-6 flex">
          {duplicatedTestimonials.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className="w-[300px] sm:w-[400px] flex-shrink-0 bg-white/10 dark:bg-white/5 border border-white/10 p-6 sm:p-7 rounded-2xl flex flex-col relative backdrop-blur-md"
            >
              <Quote size={28} className="text-white/10 absolute top-5 right-5" />
              <StarRating rating={t.rating} />
              <p className="text-white/90 text-xs sm:text-sm leading-relaxed mt-4 mb-6 flex-1 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <div>
                  <div className="font-semibold text-white text-xs sm:text-sm">{t.name}</div>
                  <div className="text-[10px] sm:text-xs text-white/60">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
