import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Languages,
  BookOpen,
  MessageSquare,
  Users,
} from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { SITE_NAME, SITE_URL, BRANCHES } from "@/constants/data";

export const metadata: Metadata = {
  title: {
    absolute: "Spoken English & Foreign Language Classes in Kolkata | Tutorspedia",
  },
  description:
    "Master Spoken English, French (DELF prep), German, Bengali, Hindi, and Sanskrit with native-level educators at Tutorspedia Institute Kolkata branches.",
  alternates: {
    canonical: "/courses/spoken-english-languages",
  },
  openGraph: {
    title: "Spoken English & Foreign Language Classes in Kolkata | Tutorspedia",
    description:
      "Boost your fluency and global communication with structured English, French, and German language coaching in Dum Dum Park and Satgachi.",
    url: `${SITE_URL}/courses/spoken-english-languages`,
    type: "website",
    images: [
      {
        url: "/assets/infrastructure/infra-15.jpg",
        width: 1200,
        height: 630,
        alt: "Language Classes at Tutorspedia Institute Kolkata",
      },
    ],
  },
};

const LANGUAGES = [
  {
    title: "Spoken English & Fluency Mastery",
    desc: "Overcome hesitation, master conversational grammar, eliminate mother-tongue influence (MTI), and build effortless everyday communication fluency.",
    audience: "School students, college learners & working professionals",
    duration: "3 Months (Weekend & Evening Batches)",
  },
  {
    title: "French (Beginner to DELF A1/A2)",
    desc: "Comprehensive phonetics, conversational dialogues, listening comprehension, and official DELF certification preparation.",
    audience: "School second-language students & global study aspirants",
    duration: "4 Months Graded Levels",
  },
  {
    title: "German (Goethe Zertifikat A1/A2)",
    desc: "Structured grammatical foundations, sentence construction, workplace terminology, and communicative speaking drills.",
    audience: "Engineering, healthcare & European study seekers",
    duration: "4 Months Graded Levels",
  },
  {
    title: "Bengali, Hindi & Sanskrit School Support",
    desc: "Board syllabus alignment for 2nd and 3rd language curriculum across CBSE, ICSE, and West Bengal Board schools.",
    audience: "Nursery to Class 12 school students",
    duration: "Full Academic Year",
  },
];

const FAQS = [
  {
    q: "Who can enroll in the Spoken English classes?",
    a: "Our Spoken English batches cater to school students seeking conversational confidence, college students preparing for campus interviews, and working adults aiming for professional communication improvement.",
  },
  {
    q: "Do you prepare students for official DELF or Goethe language exams?",
    a: "Yes. Our French curriculum adheres to the CEFR framework aligning with DELF Prim / Junior / Tout Public, and our German modules prepare students for Goethe-Zertifikat exams.",
  },
  {
    q: "What is the class format for language sessions?",
    a: "Sessions are highly interactive and speaking-focused, featuring audio listening labs, roleplays, situational conversations, vocabulary flashcards, and personalized pronunciation feedback.",
  },
  {
    q: "At which branches are language batches available?",
    a: "Language programs are held at both the Shyamnagar Road branch (beside Diamond Plaza, Dum Dum Park) and the Panache Green City branch (Satgachi).",
  },
];

export default function SpokenEnglishLanguagesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        name: "Spoken English & Foreign Languages Training",
        description:
          "Conversational English, French (DELF prep), German, Bengali, Hindi, and Sanskrit coaching in Kolkata.",
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
              name: "Tutorspedia Institute - Dum Dum Park",
              address: BRANCHES[0].address,
            },
          },
          {
            "@type": "CourseInstance",
            courseMode: "onsite",
            location: {
              "@type": "Place",
              name: "Tutorspedia Institute - Satgachi",
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
            name: "Spoken English & Languages",
            item: `${SITE_URL}/courses/spoken-english-languages`,
          },
        ],
      },
    ],
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Tutorspedia Institute! I want to enquire about Spoken English and Foreign Language classes."
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        title="Spoken English & Language Learning"
        subtitle="Gain natural conversational fluency in English, French, German, and Indian vernacular languages."
        backgroundImage="/assets/infrastructure/infra-15.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/courses" },
          { label: "Spoken English & Languages" },
        ]}
      />

      {/* ─── Program Intro ────────────────────────────────────────────── */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2 space-y-4">
              <span className="section-label">Global Communication Track</span>
              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                Spoken English & Foreign Language Classes in Kolkata
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                Clear and articulate communication opens doors to academic excellence, higher career opportunities, and global mobility. At Tutorspedia Institute, our interactive language workshops break the barrier of hesitation through situational roleplays, active listening labs, and real-time pronunciation guidance.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800 flex items-start gap-3">
                  <MessageSquare className="text-primary-600 dark:text-primary-400 shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-bold text-sm text-gray-900 dark:text-white">Active Speaking Practice</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Every student speaks in every single session.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800 flex items-start gap-3">
                  <Globe className="text-secondary shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-bold text-sm text-gray-900 dark:text-white">Global Framework (CEFR)</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">DELF (French) and Goethe (German) preparation.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Card */}
            <div className="bg-gradient-to-br from-primary-900 to-primary-950 text-white rounded-3xl p-6 sm:p-7 shadow-xl space-y-4">
              <h3 className="font-heading font-bold text-xl text-white">Join a Language Batch</h3>
              <p className="text-white/80 text-xs leading-relaxed">
                Take a quick verbal assessment and get matched with learners at your current proficiency level.
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                  <span>Small conversational groups</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                  <span>Interactive audio & roleplay drills</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                  <span>Flexible weekend & evening timing</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col gap-2.5">
                <Link
                  href="/admissions"
                  className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-white text-primary-900 hover:bg-gray-100 transition-colors text-center shadow-sm"
                >
                  Book Free Assessment
                </Link>
                <a
                  href={`https://wa.me/919903790065?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white transition-colors text-center shadow-sm"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Language Programs Offered ────────────────────────────────── */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="section-container">
          <SectionHeading
            badge="Language Tracks"
            title="Offered Languages & "
            highlight="Proficiency Levels"
            subtitle="Tailored modules for school students, professionals, and foreign language enthusiasts."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {LANGUAGES.map((lang, idx) => (
              <div
                key={idx}
                className="card-premium p-6 sm:p-7 rounded-3xl border border-gray-150 dark:border-gray-800 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white">
                    {lang.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {lang.desc}
                  </p>
                  <div className="space-y-1.5 text-xs text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-100 dark:border-gray-800">
                    <p><strong className="text-gray-700 dark:text-gray-300">Target Learners:</strong> {lang.audience}</p>
                    <p><strong className="text-gray-700 dark:text-gray-300">Course Duration:</strong> {lang.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Campus Availability ──────────────────────────────────────── */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="section-container">
          <SectionHeading
            badge="Kolkata Campuses"
            title="Attend Language Sessions at "
            highlight="Either Branch"
            subtitle="Both learning centers are equipped with air-conditioned audio-visual classrooms."
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
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {b.address}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
                    <strong>Telephone:</strong> {b.phone}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center gap-3">
                  <Link
                    href={b.branchUrl}
                    className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold bg-primary-700 text-white hover:bg-primary-800 text-center transition-colors"
                  >
                    View Branch Details
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
            title="Language Learning "
            highlight="FAQs"
            subtitle="Answers to common questions regarding fluency, CEFR levels, and schedules."
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
            Speak Fluently and Confidently in Any Setting
          </h2>
          <p className="text-white/85 text-base leading-relaxed">
            Schedule a free diagnostic speech and language assessment at Tutorspedia Institute.
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
