"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  ShieldCheck,
  CheckCircle,
  Maximize2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  X,
  ExternalLink,
  FileCheck2,
  Calendar,
  Building,
  Sparkles,
} from "lucide-react";

export interface CertificateItem {
  id: string;
  title: string;
  shortTitle: string;
  category: "all" | "iso" | "olympiad" | "technical" | "arts-chess";
  categoryLabel: string;
  issuer: string;
  awardedTo: string;
  regNumber: string;
  validity?: string;
  issueDate?: string;
  highlights: string[];
  description: string;
  imageSrc: string;
  orientation: "portrait" | "landscape";
  badge: string;
  badgeTone: string; // Tailwind colors for the category badge
}

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "iso-9001",
    title: "ISO 9001:2015 Quality Management System Certification",
    shortTitle: "ISO 9001:2015 Certified",
    category: "iso",
    categoryLabel: "ISO Accreditation",
    issuer: "United Kingdom Accreditation Forum Cert Limited (UKAF London, UK)",
    awardedTo: "Eboard Academy Private Limited",
    regNumber: "UK-ARCT-25-143111168 (Company No: 16637500)",
    validity: "17 Feb 2026 – 16 Feb 2029",
    issueDate: "17 Feb 2026",
    highlights: [
      "Assessed & found conforming to ISO 9001:2015 Quality Management Standards",
      "Comprehensive scope covering competitive exams, school entrance, and public speaking",
      "Certified for Vedic maths, abacus, coding, robotics & Olympiad mentoring",
      "Internationally recognized UKAF London quality accreditation",
    ],
    description:
      "Official ISO 9001:2015 certificate awarded to Eboard Academy Private Limited (Diamond Arcade, Bangur Avenue, Kolkata) by UKAF CERT Limited. Validates our rigorous institutional teaching benchmarks, safety, curriculum delivery, and operational excellence.",
    imageSrc: "/assets/certificates/certificate-iso-9001.png",
    orientation: "portrait",
    badge: "International ISO 9001:2015",
    badgeTone: "bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-700/60",
  },
  {
    id: "sbds-chess",
    title: "Sara Bangla Daba Sangstha (Affiliated to All India Chess Federation)",
    shortTitle: "AICF & SBDS Chess Affiliation",
    category: "arts-chess",
    categoryLabel: "Chess & Sports",
    issuer: "Sara Bangla Daba Sangstha (Affiliate to All India Chess Federation - AICF)",
    awardedTo: "E Board Academy Private Limited",
    regNumber: "WB Reg. No. S0018425",
    validity: "Active Affiliation",
    highlights: [
      "Affiliated directly to All India Chess Federation (AICF)",
      "Official gateway for FIDE-rated tournaments and state championships",
      "Structured grandmaster-endorsed chess curriculum for young minds",
      "Authorised to host official district & state chess competitions",
    ],
    description:
      "Official Certificate of Affiliation issued by Sara Bangla Daba Sangstha (AICF affiliate) to E Board Academy Private Limited. Gives our chess academy students formal credentials, tournament exposure, and national chess ranking opportunities.",
    imageSrc: "/assets/certificates/certificate-sbds-chess.png",
    orientation: "landscape",
    badge: "AICF / SBDS Affiliated",
    badgeTone: "bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-700/60",
  },
  {
    id: "crest-olympiads",
    title: "CREST Olympiads Strategic Alliance Partnership",
    shortTitle: "CREST Olympiads Strategic Partner",
    category: "olympiad",
    categoryLabel: "Olympiad Partnership",
    issuer: "CREST Olympiads (Assessment Square)",
    awardedTo: "Eboard Academy Pvt Ltd",
    regNumber: "Strategic Partner Appointment (Kolkata WB)",
    validity: "Valid Till 22nd August 2026",
    highlights: [
      "Appointed Strategic Partner for Kolkata, West Bengal",
      "Conducts Asia's top online Science, Maths, English & Cyber Olympiads",
      "Exclusive mock tests, past papers, and national ranking analytics",
      "Special guidance and Olympiad medal-track mentoring",
    ],
    description:
      "Certificate of Strategic Alliance Partnership appointing Eboard Academy Pvt Ltd as the official strategic partner for Kolkata, West Bengal. Issued by CREST Olympiads, enabling our students to compete at national and international Olympiad levels.",
    imageSrc: "/assets/certificates/certificate-crest-olympiads.png",
    orientation: "landscape",
    badge: "Strategic Partner Kolkata",
    badgeTone: "bg-sky-100 text-sky-900 border-sky-300 dark:bg-sky-950/60 dark:text-sky-300 dark:border-sky-700/60",
  },
  {
    id: "naicctc-computer",
    title: "National All India Council for Computer Training Centre (N.A.I.C.C.T.C.)",
    shortTitle: "Govt. Regd. Computer Council",
    category: "technical",
    categoryLabel: "Technical & Computer Education",
    issuer: "National All India Council For Computer Training Centre (Govt. of India Registered)",
    awardedTo: "Tutorspedia Institute (Eboard Academy Pvt Ltd)",
    regNumber: "Registration No: WBKO235\\2025\\100235 | ASC Code: WBKO235",
    validity: "04.04.2025 – 04.04.2026",
    issueDate: "21/07/2025",
    highlights: [
      "Authorised Affiliated Computer Training Institute (N.A.I.C.C.T.C.)",
      "Autonomous body registered under Public Trust Act - Govt. of India, N.C.T. New Delhi",
      "Assigned Authorized Study Centre Code: WBKO235",
      "Nationally valid diploma & certificate issuance authority",
    ],
    description:
      "Certificate of Affiliation formally recognizing Tutorspedia Institute as an Authorised Affiliated Computer Training Centre under N.A.I.C.C.T.C. (Govt. of India registered, ISO 9001:2015 certified) under Authorised Director Prity Agarwal.",
    imageSrc: "/assets/certificates/certificate-naicctc-computer.png",
    orientation: "portrait",
    badge: "Govt. Regd. Council (ASC WBKO235)",
    badgeTone: "bg-purple-100 text-purple-900 border-purple-300 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-700/60",
  },
  {
    id: "suro-bharati",
    title: "Suro Bharati Sangeet Kala Kendra Examination Centre",
    shortTitle: "Music & Fine Arts Examination Centre",
    category: "arts-chess",
    categoryLabel: "Music & Fine Arts",
    issuer: "Suro Bharati Sangeet Kala Kendra (Estd. 1993, ISO 9001:2015)",
    awardedTo: "Eboard Academy Pvt Ltd (Dum Dum Park, Kolkata - 700055)",
    regNumber: "Centre Code: C-24-6080 | Govt Reg: S/74127 (1993-1994)",
    validity: "Affiliated Examination Centre",
    issueDate: "29/02/2024",
    highlights: [
      "Government Registered Examination Body of Music & Fine Arts Education",
      "Official Examination Centre (Code: C-24-6080, Principal: Prity Agarwal)",
      "Covers Classical & Vocal Music, Fine Arts, Dance, Recitation, Crafts & Yoga",
      "Accredited by International Organization for Standardization (ISO 9001:2015)",
    ],
    description:
      "Certificate of Affiliation issued by Suro Bharati Sangeet Kala Kendra declaring Eboard Academy Pvt Ltd (Dum Dum Park, Kolkata) as an official examination centre. Allows students to appear for government-registered board exams and receive certified diplomas.",
    imageSrc: "/assets/certificates/certificate-suro-bharati.png",
    orientation: "portrait",
    badge: "Govt. Regd. Exam Centre C-24-6080",
    badgeTone: "bg-rose-100 text-rose-900 border-rose-300 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-700/60",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Certifications (5)" },
  { id: "iso", label: "ISO & Accreditation" },
  { id: "olympiad", label: "Olympiad Partnership" },
  { id: "technical", label: "Computer Council" },
  { id: "arts-chess", label: "Chess & Fine Arts" },
] as const;

export default function CertificatesShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedCertIndex, setSelectedCertIndex] = useState<number | null>(null);
  const [zoomScale, setZoomScale] = useState<number>(1);

  const filteredCerts =
    activeCategory === "all"
      ? CERTIFICATES
      : CERTIFICATES.filter((c) => c.category === activeCategory);

  const selectedCert =
    selectedCertIndex !== null ? CERTIFICATES[selectedCertIndex] : null;

  const handleOpenModal = (certId: string) => {
    const index = CERTIFICATES.findIndex((c) => c.id === certId);
    if (index !== -1) {
      setSelectedCertIndex(index);
      setZoomScale(1);
    }
  };

  const handleCloseModal = useCallback(() => {
    setSelectedCertIndex(null);
    setZoomScale(1);
  }, []);

  const handleNext = useCallback(() => {
    if (selectedCertIndex === null) return;
    setSelectedCertIndex((selectedCertIndex + 1) % CERTIFICATES.length);
    setZoomScale(1);
  }, [selectedCertIndex]);

  const handlePrev = useCallback(() => {
    if (selectedCertIndex === null) return;
    setSelectedCertIndex(
      (selectedCertIndex - 1 + CERTIFICATES.length) % CERTIFICATES.length
    );
    setZoomScale(1);
  }, [selectedCertIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedCertIndex === null) return;
      if (e.key === "Escape") handleCloseModal();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "+" || e.key === "=") {
        setZoomScale((prev) => Math.min(prev + 0.25, 2.5));
      }
      if (e.key === "-") {
        setZoomScale((prev) => Math.max(prev - 0.25, 1));
      }
    };

    if (selectedCertIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCertIndex, handleCloseModal, handleNext, handlePrev]);

  return (
    <section id="certificates" className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900 relative">
      <div className="section-container">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck size={14} className="text-emerald-600 dark:text-emerald-400" />
            Verified Institutional Accreditations
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Official Affiliations & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Tutorspedia Institute (Eboard Academy Pvt Ltd) is an ISO 9001:2015 certified, government-registered institution officially affiliated with premier national and international academic bodies.
          </p>
        </div>

        {/* Institutional Trust Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-14">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-5 border border-gray-100 dark:border-gray-700 shadow-sm flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center shrink-0 text-amber-600">
              <Award size={22} />
            </div>
            <div>
              <div className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide">
                Quality Assured
              </div>
              <div className="font-heading font-bold text-sm sm:text-base text-gray-900 dark:text-white mt-0.5">
                ISO 9001:2015
              </div>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">UKAF London Certified</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-5 border border-gray-100 dark:border-gray-700 shadow-sm flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center shrink-0 text-emerald-600">
              <Sparkles size={22} />
            </div>
            <div>
              <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                Chess Federation
              </div>
              <div className="font-heading font-bold text-sm sm:text-base text-gray-900 dark:text-white mt-0.5">
                AICF / SBDS
              </div>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">FIDE Tournament Gateway</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-5 border border-gray-100 dark:border-gray-700 shadow-sm flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/50 flex items-center justify-center shrink-0 text-sky-600">
              <CheckCircle size={22} />
            </div>
            <div>
              <div className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wide">
                Strategic Partner
              </div>
              <div className="font-heading font-bold text-sm sm:text-base text-gray-900 dark:text-white mt-0.5">
                CREST Olympiads
              </div>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">Official Kolkata Partner</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-5 border border-gray-100 dark:border-gray-700 shadow-sm flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/50 flex items-center justify-center shrink-0 text-purple-600">
              <Building size={22} />
            </div>
            <div>
              <div className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wide">
                Govt. Registered
              </div>
              <div className="font-heading font-bold text-sm sm:text-base text-gray-900 dark:text-white mt-0.5">
                NAICCTC & Suro Bharati
              </div>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">Official Exam Centres</p>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-primary-700 text-white shadow-md shadow-primary-700/25 scale-[1.02]"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-750 border border-gray-200 dark:border-gray-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCerts.map((cert, i) => (
            <motion.div
              key={cert.id}
              layout
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover border border-gray-100 dark:border-gray-700/80 flex flex-col justify-between transition-all duration-300 group"
            >
              {/* Top Certificate Frame / Preview */}
              <div className="p-4 sm:p-5 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-850 dark:to-gray-900 border-b border-gray-100 dark:border-gray-700/60">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${cert.badgeTone}`}
                  >
                    <FileCheck2 size={13} />
                    {cert.badge}
                  </span>
                  <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {cert.orientation === "landscape" ? "Landscape" : "Portrait"}
                  </span>
                </div>

                {/* Mounted Certificate Container (Ensures 100% visibility, never cropped) */}
                <div
                  onClick={() => handleOpenModal(cert.id)}
                  className={`relative w-full rounded-2xl overflow-hidden bg-white dark:bg-gray-950 p-2 sm:p-3 border-2 border-dashed border-gray-200 dark:border-gray-700 shadow-inner cursor-pointer group/preview ${
                    cert.orientation === "landscape" ? "h-64 sm:h-72" : "h-80 sm:h-96"
                  }`}
                  title="Click to view full certificate"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={cert.imageSrc}
                      alt={cert.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain drop-shadow transition-transform duration-300 group-hover/preview:scale-[1.03]"
                      priority={i < 2}
                    />
                  </div>

                  {/* Hover Overlay with Inspect prompt */}
                  <div className="absolute inset-0 bg-primary-950/40 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-gray-900 text-xs sm:text-sm font-bold shadow-lg transform -translate-y-2 group-hover/preview:translate-y-0 transition-transform duration-300">
                      <Maximize2 size={16} className="text-primary-700" />
                      Click to Enlarge
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body & Details */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-gray-900 dark:text-white leading-snug mb-2">
                    {cert.title}
                  </h3>

                  <div className="space-y-1.5 text-xs text-gray-600 dark:text-gray-300 mb-4 pb-4 border-b border-gray-100 dark:border-gray-700/60">
                    <div className="flex items-start gap-2">
                      <Building size={14} className="text-primary-600 dark:text-primary-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-gray-900 dark:text-white">Issuer:</strong> {cert.issuer}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <ShieldCheck size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-gray-900 dark:text-white">Reg / Code:</strong> {cert.regNumber}
                      </span>
                    </div>
                    {cert.validity && (
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-amber-600 dark:text-amber-400 shrink-0" />
                        <span>
                          <strong className="text-gray-900 dark:text-white">Validity:</strong> {cert.validity}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Highlights Bullets */}
                  <div className="mb-5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">
                      Key Highlights & Authorization
                    </div>
                    <ul className="space-y-1.5">
                      {cert.highlights.slice(0, 3).map((hl, hIdx) => (
                        <li key={hIdx} className="text-xs text-gray-600 dark:text-gray-300 flex items-start gap-2 leading-relaxed">
                          <CheckCircle size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => handleOpenModal(cert.id)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary-700 hover:bg-primary-800 text-white font-bold text-xs sm:text-sm transition-all shadow-sm active:scale-95 cursor-pointer"
                  >
                    <Maximize2 size={15} />
                    Inspect Certificate
                  </button>
                  <a
                    href={cert.imageSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-650 text-gray-700 dark:text-gray-200 text-xs transition-colors"
                    title="Open original high-res image in new tab"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verification Note Footer */}
        <div className="mt-12 sm:mt-16 bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-950/60 border border-primary-200 dark:border-primary-800 flex items-center justify-center text-primary-700 dark:text-primary-300 shrink-0">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base sm:text-lg text-gray-900 dark:text-white">
                Authentic & Transparent Credentials
              </h4>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-2xl">
                All certificates, affiliations, and examination centre charters can be verified directly with the respective issuing councils and boards. Physical documents are available for inspection at our Diamond Arcade and Satgachi / Dum Dum centres.
              </p>
            </div>
          </div>
          <a
            href="/contact"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-sm shrink-0"
          >
            Visit Our Centre
          </a>
        </div>
      </div>

      {/* Fullscreen Interactive Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[120] flex flex-col justify-between bg-black/95 backdrop-blur-md text-white p-3 sm:p-6 overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3 pr-4">
                <span className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-secondary-400">
                  <Award size={20} />
                </span>
                <div>
                  <h3 className="font-heading font-bold text-sm sm:text-lg leading-tight line-clamp-1">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs text-white/60">
                    Certificate {selectedCertIndex !== null ? selectedCertIndex + 1 : 1} of {CERTIFICATES.length} • {selectedCert.issuer}
                  </p>
                </div>
              </div>

              {/* Action Controls */}
              <div className="flex items-center gap-2 shrink-0">
                {/* Zoom Controls */}
                <div className="hidden sm:flex items-center bg-white/10 rounded-xl p-1 gap-1 border border-white/10">
                  <button
                    onClick={() => setZoomScale((prev) => Math.max(prev - 0.25, 0.75))}
                    className="p-1.5 rounded-lg hover:bg-white/20 transition-colors cursor-pointer text-white/80 hover:text-white"
                    title="Zoom out (-)"
                  >
                    <ZoomOut size={16} />
                  </button>
                  <span className="text-xs font-mono px-1.5 min-w-[3rem] text-center">
                    {Math.round(zoomScale * 100)}%
                  </span>
                  <button
                    onClick={() => setZoomScale((prev) => Math.min(prev + 0.25, 2.5))}
                    className="p-1.5 rounded-lg hover:bg-white/20 transition-colors cursor-pointer text-white/80 hover:text-white"
                    title="Zoom in (+)"
                  >
                    <ZoomIn size={16} />
                  </button>
                  <button
                    onClick={() => setZoomScale(1)}
                    className="p-1.5 rounded-lg hover:bg-white/20 transition-colors cursor-pointer text-white/80 hover:text-white"
                    title="Reset zoom"
                  >
                    <RotateCcw size={16} />
                  </button>
                </div>

                {/* Open Raw File */}
                <a
                  href={selectedCert.imageSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold transition-colors"
                >
                  <ExternalLink size={14} />
                  Open High-Res
                </a>

                {/* Close Button */}
                <button
                  onClick={handleCloseModal}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors cursor-pointer"
                  title="Close (Esc)"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Body / Canvas */}
            <div className="relative flex-1 flex items-center justify-center overflow-auto my-2 p-2 sm:p-4 select-none">
              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-all shadow-lg cursor-pointer"
                title="Previous certificate (Left arrow)"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-all shadow-lg cursor-pointer"
                title="Next certificate (Right arrow)"
              >
                <ChevronRight size={24} />
              </button>

              {/* Scalable Certificate Container */}
              <motion.div
                key={selectedCert.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="relative max-w-full max-h-[72vh] sm:max-h-[76vh] flex items-center justify-center p-2 rounded-2xl bg-white/5 border border-white/10 shadow-2xl"
                style={{
                  transform: `scale(${zoomScale})`,
                  transformOrigin: "center center",
                  transition: "transform 0.2s ease-out",
                }}
              >
                <img
                  src={selectedCert.imageSrc}
                  alt={selectedCert.title}
                  className="max-h-[68vh] sm:max-h-[72vh] w-auto max-w-[90vw] object-contain rounded-lg shadow-2xl bg-white"
                />
              </motion.div>
            </div>

            {/* Modal Footer / Details Bar */}
            <div className="pt-3 border-t border-white/10 shrink-0">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-1 rounded-md bg-secondary-500/20 text-secondary-300 font-bold">
                    {selectedCert.badge}
                  </span>
                  <span className="text-white/60">
                    <strong>Reg/Code:</strong> {selectedCert.regNumber}
                  </span>
                  {selectedCert.validity && (
                    <span className="text-white/60">
                      <strong>Validity:</strong> {selectedCert.validity}
                    </span>
                  )}
                  <span className="text-white/60">
                    <strong>Entity:</strong> {selectedCert.awardedTo}
                  </span>
                </div>

                <div className="flex items-center gap-2 self-end md:self-auto">
                  <p className="text-white/50 text-[11px] hidden sm:block">
                    Use <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono">→</kbd> keys to navigate • <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono">Esc</kbd> to exit
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
