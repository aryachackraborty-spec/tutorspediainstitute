"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, MessageCircle } from "lucide-react";
import { CONTACT } from "@/constants/data";

const slides = [
  {
    type: "video" as const,
    src: "/assets/videos/video-01.mp4",
    poster: "/assets/infrastructure/infra-01.jpg",
    headline: "Brain Stimulation",
    headlineHighlight: "Programme",
    sub: "Blind Fold Activity",
  },
  {
    type: "image" as const,
    src: "/assets/infrastructure/infra-03.jpg",
    headline: "Premium",
    headlineHighlight: "Education",
    sub: "Nursery to Class 12 & Beyond",
  },
  {
    type: "video" as const,
    src: "/assets/videos/video-02.mp4",
    poster: "/assets/infrastructure/infra-05.jpg",
    headline: "Skill",
    headlineHighlight: "Development",
    sub: "AI • Robotics • Abacus",
  },
  {
    type: "image" as const,
    src: "/assets/infrastructure/infra-07.jpg",
    headline: "Expert",
    headlineHighlight: "Faculty",
    sub: "Personalized Mentorship & Guidance",
  },
];

const floatCards = [
  { value: "5000+", label: "Students" },
  { value: "20+", label: "Faculty" },
  { value: "30+", label: "Courses" },
  { value: "100%", label: "Satisfaction" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => next(), 7000);
  };

  const next = () => setCurrent((p) => (p + 1) % slides.length);
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
    // eslint-disable-next-line
  }, [current]);

  const slide = slides[current];

  return (
    <section className="relative w-full h-screen min-h-[580px] max-h-[900px] overflow-hidden">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0"
        >
          {slide.type === "video" ? (
            <video
              ref={videoRef}
              src={slide.src}
              poster={slide.poster}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={slide.src}
              alt={slide.headline}
              fill
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Slide Content */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="section-container w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              key={`badge-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 sm:mb-6"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-white/15 text-white border border-white/25 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-secondary animate-pulse" />
                Now Enrolling — Limited Seats Available
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              key={`h1-${current}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none mb-2 sm:mb-3"
            >
              {slide.headline}{" "}
              <span className="text-white">
                {slide.headlineHighlight}
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.div
              key={`sub-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white/80 mb-4 sm:mb-6"
            >
              {slide.sub}
            </motion.div>

            {/* Description — hidden on very small screens */}
            <motion.p
              key={`desc-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="hidden sm:block text-white/70 text-base lg:text-lg max-w-xl mb-8 leading-relaxed"
            >
              Helping Students Learn Smarter Through Personalized Education, Skill Development, and Modern Learning Techniques.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              key={`cta-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex flex-col xs:flex-row flex-wrap items-start xs:items-center gap-3"
            >
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 px-5 py-3 sm:px-8 sm:py-4 bg-primary-700 hover:bg-primary-600 text-white font-bold rounded-2xl shadow-glow hover:shadow-xl transition-all duration-300 text-sm sm:text-base active:scale-95"
              >
                Book Free Demo
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-5 py-3 sm:px-8 sm:py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl border border-white/30 backdrop-blur-sm transition-all duration-300 text-sm sm:text-base active:scale-95"
              >
                Explore Courses
              </Link>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-2xl transition-all duration-300 text-sm sm:text-base active:scale-95"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Stats Cards — desktop only */}
      <div className="absolute bottom-20 right-4 lg:right-12 z-20 hidden lg:flex flex-col gap-2.5">
        {floatCards.map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.15 }}
            className="glass flex items-center gap-3 px-4 py-2.5 rounded-xl min-w-[140px]"
          >
            <div>
              <div className="text-white font-black text-base leading-none font-heading">{card.value}</div>
              <div className="text-white/60 text-[11px] mt-0.5">{card.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile stat strip */}
      <div className="absolute bottom-16 left-0 right-0 z-20 flex lg:hidden justify-center gap-3 px-4 overflow-x-auto pb-1">
        {floatCards.map((card) => (
          <div
            key={card.label}
            className="glass flex flex-col items-center px-3 py-2 rounded-xl flex-shrink-0 min-w-[64px]"
          >
            <div className="text-white font-bold text-sm leading-none">{card.value}</div>
            <div className="text-white/70 text-[9px] mt-0.5 text-center">{card.label}</div>
          </div>
        ))}
      </div>

      {/* Slide Controls */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        <button
          onClick={prev}
          className="w-8 h-8 rounded-lg glass text-white flex items-center justify-center hover:bg-white/20 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={16} />
        </button>
        <div className="flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current ? "w-6 h-2 bg-secondary" : "w-2 h-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-8 h-8 rounded-lg glass text-white flex items-center justify-center hover:bg-white/20 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </section>
  );
}
