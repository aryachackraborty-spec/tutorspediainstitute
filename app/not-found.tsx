"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, GraduationCap, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col justify-center items-center px-6 py-12 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary-700/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-secondary/5 blur-3xl" />

      <div className="relative z-10 text-center max-w-lg">
        {/* Animated Icon */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="w-20 h-20 rounded-3xl bg-primary-700 flex items-center justify-center text-white mx-auto mb-8 shadow-glow"
        >
          <GraduationCap size={36} />
        </motion.div>

        {/* 404 Title */}
        <h1 className="font-heading font-black text-8xl text-primary-700 dark:text-white leading-none tracking-tight mb-4">
          404
        </h1>

        <h2 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-3">
          Page Not Found
        </h2>

        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let&apos;s get you back on track!
        </p>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="btn-primary inline-flex text-sm w-full sm:w-auto justify-center"
          >
            <Home size={16} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-ghost inline-flex text-sm border border-gray-200 dark:border-gray-800 w-full sm:w-auto justify-center"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
