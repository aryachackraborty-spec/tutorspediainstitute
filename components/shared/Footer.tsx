"use client";

import Link from "next/link";
import {
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Clock,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import { CONTACT, BRANCHES, NAV_LINKS, SITE_NAME, SITE_TAGLINE } from "@/constants/data";

const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Courses", href: "/courses" },
    { label: "Faculty", href: "/faculty" },
    { label: "Gallery", href: "/gallery" },
    { label: "Admissions", href: "/admissions" },
  ],
  courses: [
    { label: "Academic Coaching", href: "/courses/academic-coaching" },
    { label: "Abacus & Mental Maths", href: "/courses/abacus-mental-maths" },
    { label: "Robotics, AI & Coding", href: "/courses/robotics-ai-coding" },
    { label: "Spoken English & Languages", href: "/courses/spoken-english-languages" },
    { label: "Public Speaking & Debate", href: "/courses/public-speaking" },
    { label: "All Programmes", href: "/courses" },
  ],
  policies: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Achievements", href: "/achievements" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Infrastructure", href: "/infrastructure" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 dark:bg-black text-white">
      {/* Top CTA Strip */}
      <div className="bg-primary-gradient">
        <div className="section-container py-8 sm:py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6">
          <div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-1">
              Ready to Transform Your Child&apos;s Future?
            </h3>
            <p className="text-white/80 text-sm">
              Join 5000+ students who have excelled with Tutorspedia Institute.
            </p>
          </div>
          <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 w-full sm:w-auto">
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-green-500 hover:bg-green-600 rounded-xl font-semibold text-white transition-colors text-sm sm:text-base"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
            <Link
              href="/admissions"
              className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-white text-primary-700 rounded-xl font-semibold hover:bg-primary-50 transition-colors text-sm sm:text-base"
            >
              Book Free Demo
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="section-container py-10 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-5">
              <div className="relative h-12 w-[180px]">
                <Image
                  src="/assets/logo/logo-full-white.png"
                  alt="Tutorspedia Institute"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {SITE_TAGLINE}. Premium education for Nursery to Class 12, skill development, and beyond.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={CONTACT.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-primary-700 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h3v-9h3.6l.4-3H12V6c0-.9.2-1.2 1-1.2h2V2h-3c-3 0-5 1.4-5 4.5V8z" />
                </svg>
              </a>
              <a
                href={CONTACT.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-primary-700 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
              >
                <svg className="w-4.5 h-4.5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href={CONTACT.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-primary-700 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
              >
                <svg className="w-4.5 h-4.5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" className="fill-current stroke-none" />
                </svg>
              </a>
              <a
                href={CONTACT.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-primary-700 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.2 2.4h3.3L14.3 11l8.5 11.3h-6.7L10.8 15.4 4.8 22.3H1.5l7.6-8.7L1 2.4h6.9l4.8 6.4 5.5-6.4zm-1.2 18h1.8L7.1 4.3H5.1l11.9 16.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-5 text-sm uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm flex items-center gap-2 group transition-colors"
                  >
                    <ArrowRight
                      size={12}
                      className="text-primary-500 group-hover:translate-x-1 transition-transform"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-5 text-sm uppercase tracking-widest">
              Our Courses
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.courses.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm flex items-center gap-2 group transition-colors"
                  >
                    <ArrowRight
                      size={12}
                      className="text-secondary group-hover:translate-x-1 transition-transform"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Branches */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-5 text-sm uppercase tracking-widest">
              Our Branches
            </h4>
            <div className="space-y-4 text-xs text-gray-400">
              {BRANCHES.map((b) => (
                <div key={b.id} className="border-b border-gray-800 pb-3 last:border-0 last:pb-0">
                  <Link
                    href={b.branchUrl}
                    className="font-bold text-white hover:text-primary-400 text-xs mb-1 flex items-center gap-1.5 transition-colors group"
                  >
                    <MapPin size={13} className="text-primary-400 shrink-0 group-hover:text-primary-300" />
                    <span className="group-hover:underline">{b.name}</span>
                  </Link>
                  <p className="text-gray-400 leading-relaxed mb-1.5">{b.address}</p>
                  <div className="flex items-center gap-2 mb-1 text-[11px]">
                    <Phone size={12} className="text-emerald-400 shrink-0" />
                    <a href={b.phoneHref} className="text-white hover:underline font-semibold">
                      {b.phone}
                    </a>
                    <span className="text-gray-600">/</span>
                    <a href={b.secondaryPhoneHref} className="text-gray-300 hover:text-white">
                      {b.secondaryPhone}
                    </a>
                  </div>
                  <p className="text-amber-400 text-[11px] font-medium mb-1.5">Hours: {b.hours}</p>
                  <div>
                    <Link
                      href={b.branchUrl}
                      className="text-[11px] text-primary-400 hover:text-primary-300 hover:underline inline-flex items-center gap-1 font-medium"
                    >
                      Branch Details & Directions →
                    </Link>
                  </div>
                </div>
              ))}
              <div className="pt-2 flex flex-col gap-1 text-xs">
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-primary-400 shrink-0" />
                  <a href={CONTACT.phoneHref} className="text-white font-bold hover:underline">
                    {CONTACT.phone} <span className="text-[10px] text-emerald-400">(Main)</span>
                  </a>
                </div>
                <div className="flex items-center gap-2 pl-5">
                  <a href={CONTACT.secondaryPhoneHref} className="text-gray-400 hover:text-white text-[11px]">
                    {CONTACT.secondaryPhone} (Secondary)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {footerLinks.policies.slice(0, 2).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-gray-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
