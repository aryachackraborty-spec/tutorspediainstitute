"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Sun,
  Moon,
  GraduationCap,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import { useScrolled } from "@/hooks/useScrolled";
import { NAV_LINKS, CONTACT } from "@/constants/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const scrolled = useScrolled(60);
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  useEffect(() => setMounted(true), []);
  useEffect(() => setMobileOpen(false), [pathname]);

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  const isHome = pathname === "/";
  const transparent = false;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          transparent
            ? "bg-transparent"
            : "bg-white/95 dark:bg-gray-950/95 backdrop-blur-md shadow-md border-b border-gray-100 dark:border-gray-800"
        )}
      >
        {/* Top Bar */}
        <div
          className={cn(
            "hidden lg:block text-xs transition-all duration-300",
            transparent
              ? "bg-white/10 backdrop-blur-sm text-white/80"
              : "bg-primary-700 text-white"
          )}
        >
          <div className="section-container flex items-center justify-between py-1.5">
            <span className="flex items-center gap-4">
              <a
                href={`mailto:info@tutorspedia.in`}
                className="hover:text-accent-300 transition-colors"
              >
                info@tutorspedia.in
              </a>
              <span className="opacity-40">|</span>
              <span>Mon–Sat: 8:00 AM – 8:00 PM</span>
            </span>
            <span className="flex items-center gap-3">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-1 hover:text-accent-300 transition-colors"
              >
                <Phone size={12} />
                {CONTACT.phone}
              </a>
            </span>
          </div>
        </div>

        {/* Main Nav */}
        <nav className="section-container flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-12 w-[160px] group-hover:opacity-90 transition-opacity duration-200">
              <Image
                src={
                  transparent || (mounted && currentTheme === "dark")
                    ? "/assets/logo/logo-full-white.png"
                    : "/assets/logo/logo-full.png"
                }
                alt="Tutorspedia Institute"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-6">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setMegaMenuOpen(link.label)}
                  onMouseLeave={() => setMegaMenuOpen(null)}
                >
                  <button
                    className={cn(
                      "relative flex items-center gap-1 py-1.5 px-0.5 text-sm font-medium transition-all duration-200",
                      "text-gray-700 dark:text-gray-200 hover:text-primary-700 dark:hover:text-primary-300",
                      "after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary-700 dark:after:bg-primary-300 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left",
                      pathname.startsWith(link.href) && "text-primary-700 dark:text-primary-300 after:scale-x-100"
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={cn(
                        "transition-transform duration-200",
                        megaMenuOpen === link.label && "rotate-180"
                      )}
                    />
                  </button>

                  {/* Mega Menu */}
                  <AnimatePresence>
                    {megaMenuOpen === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] bg-white dark:bg-gray-900 rounded-2xl shadow-premium border border-gray-100 dark:border-gray-800 p-6 grid grid-cols-3 gap-6"
                      >
                        {link.children.map((group) => (
                          <div key={group.group}>
                            <h4 className="text-xs font-bold text-primary-700 dark:text-primary-400 uppercase tracking-widest mb-3">
                              {group.group}
                            </h4>
                            <ul className="space-y-1">
                              {group.items.map((item) => (
                                <li key={item.label}>
                                  <Link
                                    href={item.href}
                                    className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-300 hover:pl-1 transition-all duration-150 py-0.5"
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <div className="col-span-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                          <Link
                            href="/courses"
                            className="text-sm font-semibold text-primary-700 dark:text-primary-400 hover:underline"
                          >
                            View All Courses →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "relative py-1.5 px-0.5 text-sm font-medium transition-all duration-200",
                    "text-gray-700 dark:text-gray-200 hover:text-primary-700 dark:hover:text-primary-300",
                    "after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary-700 dark:after:bg-primary-300 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left",
                    pathname === link.href && "text-primary-700 dark:text-primary-300 after:scale-x-100"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden xl:flex items-center gap-3">
            {/* Dark mode toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
                className={cn(
                  "w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200",
                  transparent
                    ? "text-white/80 hover:text-white hover:bg-white/10"
                    : "text-gray-600 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900"
                )}
                aria-label="Toggle theme"
              >
                {currentTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200",
                transparent
                  ? "bg-white/15 text-white border border-white/30 hover:bg-white/25"
                  : "bg-green-50 text-green-700 border border-green-200 hover:bg-green-100 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800"
              )}
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>

            <Link
              href="/admissions"
              className="btn-primary text-sm !px-5 !py-2.5"
            >
              Book Free Demo
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="flex xl:hidden items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
                className={cn(
                  "w-9 h-9 rounded-lg flex items-center justify-center",
                  transparent ? "text-white" : "text-gray-700 dark:text-gray-300"
                )}
                aria-label="Toggle theme"
              >
                {currentTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "w-9 h-9 rounded-lg flex items-center justify-center",
                transparent ? "text-white" : "text-gray-700 dark:text-gray-300"
              )}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 xl:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white dark:bg-gray-950 z-50 xl:hidden overflow-y-auto shadow-2xl"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-100 dark:border-gray-800">
                <div className="flex items-center">
                  <div className="relative h-10 w-[140px]">
                    <Image
                      src={
                        mounted && currentTheme === "dark"
                          ? "/assets/logo/logo-full-white.png"
                          : "/assets/logo/logo-full.png"
                      }
                      alt="Tutorspedia Institute"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer links */}
              <nav className="p-4 space-y-1">
                {NAV_LINKS.map((link) =>
                  link.children ? (
                    <div key={link.label}>
                      <button
                        onClick={() =>
                          setMobileAccordion(
                            mobileAccordion === link.label ? null : link.label
                          )
                        }
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900"
                      >
                        {link.label}
                        <ChevronDown
                          size={16}
                          className={cn(
                            "transition-transform",
                            mobileAccordion === link.label && "rotate-180"
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileAccordion === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            {link.children.map((group) => (
                              <div key={group.group} className="pl-4 py-2">
                                <p className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider px-4 mb-2">
                                  {group.group}
                                </p>
                                {group.items.map((item) => (
                                  <Link
                                    key={item.label}
                                    href={item.href}
                                    className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-300 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-950"
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={cn(
                        "block px-4 py-3 rounded-xl text-sm font-semibold transition-colors",
                        pathname === link.href
                          ? "bg-primary-50 text-primary-700 dark:bg-primary-950 dark:text-primary-300"
                          : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900"
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </nav>

              {/* Drawer CTA */}
              <div className="p-5 border-t border-gray-100 dark:border-gray-800 space-y-3">
                <a href={CONTACT.phoneHref} className="btn-outline w-full justify-center !text-primary-700 !border-primary-700 hover:!bg-primary-700 hover:!text-white">
                  <Phone size={16} />
                  Call Now
                </a>
                <Link href="/admissions" className="btn-primary w-full justify-center">
                  Book Free Demo
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
