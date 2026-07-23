"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";
import SectionHeading from "@/components/shared/SectionHeading";
import { STATS } from "@/constants/data";

export default function AchievementsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 sm:py-24 bg-primary-950 dark:bg-black">
      <div className="section-container">
        <SectionHeading
          badge="Our Impact"
          title="Numbers That Tell "
          highlight="Our Story"
          subtitle="A decade of excellence, thousands of transformed lives, and a legacy of academic achievement."
          light
        />

        <div
          ref={ref}
          className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-3 gap-0 border border-white/10 rounded-2xl overflow-hidden"
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="group px-6 sm:px-10 py-8 sm:py-12 border-r border-b border-white/10 last:border-r-0 even:last:border-r-0 lg:[&:nth-child(3n)]:border-r-0 hover:bg-white/5 transition-colors duration-200"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-heading leading-none mb-2 tabular-nums">
                {inView ? (
                  <CountUp end={stat.value} duration={2.2} delay={i * 0.08} />
                ) : (
                  "0"
                )}
                <span className="text-secondary-400 text-3xl sm:text-4xl">{stat.suffix}</span>
              </div>
              <div className="text-white/50 text-xs sm:text-sm font-medium uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
