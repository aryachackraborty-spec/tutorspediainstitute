import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Users,
  Calendar,
  Clock,
  Sparkles,
  ArrowRight,
  MapPin,
  HelpCircle,
  FileText,
  Award,
} from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { SITE_NAME, SITE_URL, BRANCHES, CONTACT } from "@/constants/data";

export const metadata: Metadata = {
  title: {
    absolute: "CBSE, ICSE & School Coaching in Kolkata | Tutorspedia Institute",
  },
  description:
    "Comprehensive academic tuition for Nursery to Class 12 across CBSE, ICSE, and West Bengal Board (WBBSE/WBCHSE) at Tutorspedia Institute Kolkata branches.",
  alternates: {
    canonical: "/courses/academic-coaching",
  },
  openGraph: {
    title: "CBSE, ICSE & School Coaching in Kolkata | Tutorspedia Institute",
    description:
      "Expert school coaching for Nursery–Class 12 in Dum Dum Park and Satgachi. Small batches, mock exams, and personalized attention.",
    url: `${SITE_URL}/courses/academic-coaching`,
    type: "website",
    images: [
      {
        url: "/assets/primary-class.jpg",
        width: 1200,
        height: 630,
        alt: "Academic Coaching at Tutorspedia Institute Kolkata",
      },
    ],
  },
};

const SYLLABUS_LEVELS = [
  {
    badge: "Foundation Level",
    title: "Primary School (Nursery to Class 5)",
    boards: "CBSE • ICSE • WBSE",
    desc: "Building rock-solid cognitive fundamentals with activity-based learning, phonics, mental math, science curiosity, and regular worksheet practice.",
    subjects: ["English Language & Literature", "Mathematics & Mental Math", "Environmental Studies (EVS) / Science", "Vernacular (Bengali / Hindi)"],
    duration: "Full Academic Year",
    batchSize: "Max 8–10 Students",
  },
  {
    badge: "Middle & High School",
    title: "Secondary Classes (Class 6 to 10)",
    boards: "CBSE • ICSE • WBBSE",
    desc: "Rigorous curriculum completion with chapter-by-chapter concept mastery, NCERT/reference book problem solving, and targeted Class 10 Board exam preparation.",
    subjects: ["Physics, Chemistry & Biology", "Mathematics (Standard & Basic)", "Social Sciences (History, Geography, Civics)", "English & Vernacular Languages"],
    duration: "Full Academic Year",
    batchSize: "Max 10–12 Students",
  },
  {
    badge: "Senior Secondary",
    title: "Higher Secondary (Class 11 & 12)",
    boards: "CBSE • ISC • WBCHSE",
    desc: "Specialized subject-matter faculty for Science, Commerce, and Arts streams with simultaneous board marks orientation and competitive foundation.",
    subjects: [
      "Science: Physics, Chemistry, Mathematics, Biology, Computer Science",
      "Commerce: Accountancy, Business Studies, Economics, Applied Math",
      "Humanities: Political Science, History, Sociology, English",
    ],
    duration: "Full Academic Year",
    batchSize: "Max 12 Students",
  },
];

const FAQS = [
  {
    q: "Which educational boards are covered at Tutorspedia Institute?",
    a: "We provide dedicated coaching for CBSE, ICSE / ISC, and the West Bengal Board (WBBSE for secondary and WBCHSE for higher secondary). Our study plans align precisely with each board's latest updated syllabus.",
  },
  {
    q: "What is the average batch size for academic coaching?",
    a: "We maintain small, focused batches capped at 8 to 12 students. This guarantees individual mentoring, frequent teacher-student interactions, and timely resolution of every student's doubts.",
  },
  {
    q: "How are student progress and board readiness evaluated?",
    a: "We conduct weekly chapter assessments, monthly unit tests, and full-length simulated board examinations. Detailed performance evaluations and parent-teacher meetings (PTMs) are organized regularly.",
  },
  {
    q: "At which Kolkata branches are academic coaching batches held?",
    a: "Academic coaching is conducted at both our learning centers: our Head Office at Shyamnagar Road (beside Diamond Plaza, Dum Dum Park) and our Panache Green City branch (Satgachi / near GD Goenka School).",
  },
  {
    q: "Can students attend a demo class before taking admission?",
    a: "Yes. We offer free diagnostic counseling and trial demo classes so students and parents can assess our classroom environment and teaching quality.",
  },
];

export default function AcademicCoachingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        name: "School Academic Coaching (Nursery to Class 12)",
        description:
          "Comprehensive board coaching for Nursery to Class 12 across CBSE, ICSE, and West Bengal Board (WBBSE/WBCHSE) curriculums in Kolkata.",
        provider: {
          "@type": "EducationalOrganization",
          name: SITE_NAME,
          sameAs: SITE_URL,
        },
        hasCourseInstance: [
          {
            "@type": "CourseInstance",
            courseMode: "onsite",
            location: {
              "@type": "Place",
              name: "Tutorspedia Institute - Dum Dum Park Branch",
              address: BRANCHES[0].address,
            },
          },
          {
            "@type": "CourseInstance",
            courseMode: "onsite",
            location: {
              "@type": "Place",
              name: "Tutorspedia Institute - Satgachi Branch",
              address: BRANCHES[1].address,
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Courses",
            item: `${SITE_URL}/courses`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Academic Coaching",
            item: `${SITE_URL}/courses/academic-coaching`,
          },
        ],
      },
    ],
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Tutorspedia Institute! I want to enquire about CBSE / ICSE / WBSE academic coaching batches."
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        title="CBSE, ICSE & WBSE Academic Coaching"
        subtitle="One-roof foundational coaching from Nursery to Class 12 with concept clarity and board excellence."
        backgroundImage="/assets/primary-class.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/courses" },
          { label: "Academic Coaching" },
        ]}
      />

      {/* ─── Program Overview ─────────────────────────────────────────── */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2 space-y-4">
              <span className="section-label">Academic Excellence</span>
              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                CBSE, ICSE & West Bengal Board School Coaching in Kolkata
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                At Tutorspedia Institute, our academic coaching is designed around deep conceptual understanding rather than rote memorization. Whether a student is building early primary literacy, preparing for Class 10 Board exams, or mastering senior secondary Science and Commerce streams, our verified subject mentors provide structured guidance, curated worksheets, and continuous diagnostic assessments.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800">
                  <p className="font-bold text-lg text-primary-700 dark:text-primary-300">CBSE</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">NCERT alignment & board pattern mock tests</p>
                </div>
                <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800">
                  <p className="font-bold text-lg text-primary-700 dark:text-primary-300">ICSE & ISC</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Analytical depth & structured literature study</p>
                </div>
                <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800">
                  <p className="font-bold text-lg text-primary-700 dark:text-primary-300">WB Board</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">WBBSE & WBCHSE syllabus mastery</p>
                </div>
              </div>
            </div>

            {/* Quick Enrollment Card */}
            <div className="bg-gradient-to-br from-primary-900 to-primary-950 text-white rounded-3xl p-6 sm:p-7 shadow-xl space-y-4">
              <h3 className="font-heading font-bold text-xl text-white">Enroll in Academic Batch</h3>
              <p className="text-white/80 text-xs leading-relaxed">
                Book a free diagnostic counseling session to identify learning gaps and choose the right batch timings.
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                  <span>Small batches (8–12 learners max)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                  <span>Regular chapter worksheets & mocks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                  <span>Both Dum Dum Park & Satgachi locations</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col gap-2.5">
                <Link
                  href="/admissions"
                  className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-white text-primary-900 hover:bg-gray-100 transition-colors text-center shadow-sm"
                >
                  Book Free Demo Class
                </Link>
                <a
                  href={`https://wa.me/919903790065?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white transition-colors text-center shadow-sm"
                >
                  Inquire on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Level-by-Level Syllabus Breakdown ──────────────────────────── */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="section-container">
          <SectionHeading
            badge="Curriculum Structure"
            title="Academic Levels & "
            highlight="Class Coverage"
            subtitle="Tailored pedagogical approaches for each development stage of school education."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {SYLLABUS_LEVELS.map((lvl, idx) => (
              <div
                key={idx}
                className="card-premium rounded-3xl p-6 sm:p-7 border border-gray-150 dark:border-gray-800 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300">
                      {lvl.badge}
                    </span>
                    <span className="text-[11px] font-semibold text-secondary">
                      {lvl.boards}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white">
                    {lvl.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {lvl.desc}
                  </p>

                  <div className="pt-2">
                    <p className="text-xs uppercase font-bold text-gray-500 dark:text-gray-400 mb-2">
                      Core Subjects Taught:
                    </p>
                    <ul className="space-y-1.5 text-xs text-gray-700 dark:text-gray-300">
                      {lvl.subjects.map((sub, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-150 dark:border-gray-800 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>{lvl.duration}</span>
                  <span className="font-semibold text-primary-600 dark:text-primary-400">{lvl.batchSize}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Available Locations ──────────────────────────────────────── */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="section-container">
          <SectionHeading
            badge="Campus Availability"
            title="Attend Academic Classes at "
            highlight="Either Kolkata Branch"
            subtitle="Convenient morning and evening batches held across our two centers."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {BRANCHES.map((b) => (
              <div
                key={b.id}
                className="p-6 sm:p-8 rounded-3xl border border-gray-150 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/60 flex flex-col justify-between"
              >
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary-700 text-white inline-block mb-3">
                    {b.badge}
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-2">
                    {b.name}
                  </h3>
                  <p className="text-xs text-secondary font-semibold mb-4">{b.tagline}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    <strong className="text-gray-900 dark:text-white">Address:</strong> {b.address}
                  </p>
                  <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1 mb-6">
                    <p><strong className="text-gray-800 dark:text-gray-200">Phone:</strong> {b.phone} / {b.secondaryPhone}</p>
                    <p><strong className="text-gray-800 dark:text-gray-200">Center Hours:</strong> {b.hours}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center gap-3">
                  <Link
                    href={b.branchUrl}
                    className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold bg-primary-700 text-white hover:bg-primary-800 text-center transition-colors"
                  >
                    View Branch Schedule
                  </Link>
                  <a
                    href={b.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                  >
                    Directions
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Frequently Asked Questions ────────────────────────────────── */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="section-container max-w-4xl">
          <SectionHeading
            badge="Frequently Asked Questions"
            title="Academic Coaching "
            highlight="FAQs"
            subtitle="Everything parents want to know about our school coaching batches in Kolkata."
          />

          <div className="space-y-4 mt-12">
            {FAQS.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 open:shadow-md transition-all"
              >
                <summary className="font-heading font-bold text-base sm:text-lg text-gray-900 dark:text-white cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{faq.q}</span>
                  <span className="w-7 h-7 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0 text-gray-500 group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-800 pt-3">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Conversion Strip ─────────────────────────────────────────── */}
      <section className="py-16 bg-primary-gradient text-white">
        <div className="section-container text-center max-w-3xl space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-tight">
            Give Your Child the Advantage of Personalized Coaching
          </h2>
          <p className="text-white/85 text-base leading-relaxed">
            Admissions are open for current and upcoming academic sessions. Book your free counseling session today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/admissions"
              className="py-3.5 px-8 rounded-2xl bg-white text-primary-900 hover:bg-gray-100 font-bold text-sm transition-colors shadow-lg"
            >
              Book Free Trial Session
            </Link>
            <a
              href={`https://wa.me/919903790065?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-8 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm transition-colors shadow-lg"
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
