"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) {
  const renderTitle = () => {
    if (!highlight) return title;
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className={cn(light ? "text-emerald-400 dark:text-emerald-400" : "gradient-text")}>
          {highlight}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className={cn(centered && "text-center", className)}
    >
      {badge && (
        <p
          className={cn(
            "section-label",
            light && "!text-white/60"
          )}
        >
          {badge}
        </p>
      )}
      <h2
        className={cn(
          "font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight",
          light ? "text-white" : "text-gray-900 dark:text-white"
        )}
      >
        {renderTitle()}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg max-w-2xl leading-relaxed",
            centered && "mx-auto",
            light ? "text-white/70" : "text-gray-500 dark:text-gray-400"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
