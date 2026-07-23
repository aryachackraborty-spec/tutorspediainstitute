"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { BRAIN_FEATURES } from "@/constants/data";

export default function BrainStimulation() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary-950" />

      <div className="relative z-10 section-container">
        <SectionHeading
          badge="Flagship Programme"
          title="Brain Stimulation "
          highlight="Programme"
          subtitle="Our award-winning cognitive development programme that uses neuroscience-backed techniques to unlock your child's full mental potential."
          light
        />

        <div className="mt-10 sm:mt-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Video showcase */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <video
                src="/assets/videos/video-03.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Second video thumbnail — hidden on mobile */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-40 h-28 rounded-2xl overflow-hidden shadow-xl border-2 border-white/20">
              <Image
                src="/assets/infrastructure/infra-14.jpg"
                alt="Brain activity"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <div>
            <p className="text-white/80 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              The <strong className="text-white">Blind Fold Activity</strong> and our other brain exercises are designed to stimulate both hemispheres of the brain simultaneously — resulting in dramatically improved memory, concentration, and learning speed.
            </p>

            <div className="glass rounded-3xl p-6 sm:p-8 mb-10 border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/[0.02] pointer-events-none" />
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {BRAIN_FEATURES.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3.5"
                  >
                    <div className="text-lg font-heading font-black text-secondary/80 mt-0.5 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-white text-sm sm:text-base mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3">
              <Link href="/admissions" className="btn-secondary inline-flex">
                Join the Programme
              </Link>
              <Link href="/courses#brain" className="text-white/80 hover:text-white text-sm font-medium underline-offset-2 hover:underline transition-colors">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
