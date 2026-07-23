"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import { WHY_CHOOSE_US } from "@/constants/data";
import {
  GraduationCap,
  Monitor,
  Users,
  Target,
  Trophy,
  FileText,
  Brain,
  Mic,
  Cpu,
  MessageCircle,
  CalendarCheck,
  Compass,
  Building,
  Star,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Monitor,
  Users,
  Target,
  Trophy,
  FileText,
  Brain,
  Mic,
  Cpu,
  MessageCircle,
  CalendarCheck,
  Compass,
  Building,
  Star,
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-gray-950">
      <div className="section-container">
        <SectionHeading
          badge="Why Choose Tutorspedia"
          title="Everything Your Child Needs, "
          highlight="Under One Roof"
          subtitle="A comprehensive educational ecosystem designed to nurture academic excellence, skill development, and personal growth."
        />

        {/* Top row — 3 featured cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {WHY_CHOOSE_US.slice(0, 3).map((feature) => {
            const Icon = iconMap[feature.icon] || Star;
            return (
              <div
                key={feature.title}
                className="relative bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-7 sm:p-8 group hover:border-primary-300 dark:hover:border-primary-700 transition-colors duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-primary-600 dark:bg-primary-500 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-white" strokeWidth={2} />
                </div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Middle rows — 2-column layout */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_CHOOSE_US.slice(3, 11).map((feature) => {
            const Icon = iconMap[feature.icon] || Star;
            return (
              <div
                key={feature.title}
                className="flex items-start gap-4 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-5 sm:p-6 group hover:border-primary-300 dark:hover:border-primary-700 transition-colors duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/40 transition-colors">
                  <Icon
                    size={17}
                    className="text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                    strokeWidth={2}
                  />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-gray-900 dark:text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom row — 3 compact cards */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
          {WHY_CHOOSE_US.slice(11).map((feature) => {
            const Icon = iconMap[feature.icon] || Star;
            return (
              <div
                key={feature.title}
                className="flex items-center gap-4 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl px-6 py-5 group hover:border-primary-300 dark:hover:border-primary-700 transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/40 transition-colors">
                  <Icon
                    size={18}
                    className="text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                    strokeWidth={2}
                  />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-gray-900 dark:text-white mb-0.5">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
