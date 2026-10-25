"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  breadcrumb?: { label: string; href?: string }[];
}

export default function PageHeader({
  title,
  subtitle,
  backgroundImage = "/assets/infrastructure/infra-01.jpg",
  breadcrumb,
}: PageHeaderProps) {
  return (
    <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-900/70 to-primary-900/90" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        {breadcrumb && (
          <nav className="mb-4 flex items-center gap-2 text-white/60 text-sm" aria-label="Breadcrumb">
            {breadcrumb.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {item.href ? (
                  <Link
                    href={item.href}
                    className={cn(
                      "hover:text-white transition-colors underline-offset-4 hover:underline",
                      i === breadcrumb.length - 1 && "text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className={cn(i === breadcrumb.length - 1 && "text-white")}>
                    {item.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-base sm:text-lg max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}
