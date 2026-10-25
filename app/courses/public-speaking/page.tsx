import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Mic,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Award,
  Video,
  Users,
  Compass,
} from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { SITE_NAME, SITE_URL, BRANCHES } from "@/constants/data";

export const metadata: Metadata = {
  title: {
    absolute: "Public Speaking & Debate Classes for Kids in Kolkata | Tutorspedia",
  },
  description:
    "Overcome stage fear, master speech delivery, debate tactics, and body language at Tutorspedia Institute's Public Speaking academy in Dum Dum Park & Satgachi.",
  alternates: {
    canonical: "/courses/public-speaking",
  },
  openGraph: {
    title: "Public Speaking & Debate Classes for Kids in Kolkata | Tutorspedia",
    description:
      "Transform your child into an articulate, confident speaker and debater. Guided practice, podium training, and video feedback in Kolkata.",
    url: `${SITE_URL}/courses/public-speaking`,
    type: "website",
    images: [
      {
        url: "/assets/public-speaking-v2.png",
        width: 1200,
        height: 630,
        alt: "Public Speaking Classes at Tutorspedia Institute Kolkata",
      },
    ],
  },
};

const MODULES = [
  {
    title: "Overcoming Stage Fright & Anxiety",
    desc: "Breathing techniques, posture alignment, and gradual desensitization exercises that transform nervous energy into poised presence on stage.",
  },
  {
    title: "Vocal Modulation, Diction & Projection",
    desc: "Pitch control, strategic pausing, tone modulation, and clear articulation to ensure every spoken word is impactful and memorable.",
  },
  {
    title: "Speech Structure & Persuasion",
    desc: "How to craft compelling introductions, organize logical arguments, use relatable anecdotes, and deliver memorable calls-to-action.",
  },
  {
    title: "Parliamentary Debate & Impromptu Speaking",
    desc: "Cross-examination tactics, active rebuttal framing, extempore speech handling, and school competition readiness.",
  },
];

const FAQS = [
  {
    q: "At what age should children begin public speaking training?",
    a: "Our public speaking courses are ideal for students aged 8 to 18 years. Early intervention helps overcome natural shyness before high-stakes school presentations and interviews.",
  },
  {
    q: "How are classes structured to ensure every student participates?",
    a: "We maintain small batch limits of 8 to 10 students. Every student is given podium time in every single class, followed by immediate constructive feedback.",
  },
  {
    q: "Do you provide recorded speech video analysis?",
    a: "Yes. Students are periodically recorded during presentations so they can review their own body language, eye contact, and vocal pace alongside their mentor.",
  },
  {
    q: "Which branches conduct public speaking sessions?",
    a: "Batches are conducted at both our Shyamnagar Road branch (Dum Dum Park / Diamond Plaza) and our Panache Green City branch (Satgachi).",
  },
];

export default function PublicSpeakingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        name: "Public Speaking, Debate & Stage Confidence",
        description:
          "Public speaking and communication coaching for school students aged 8–18 in Kolkata covering speech delivery, debate, and personality development.",
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
            name: "Public Speaking",
            item: `${SITE_URL}/courses/public-speaking`,
          },
        ],
      },
    ],
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Tutorspedia Institute! I want to enquire about Public Speaking and Stage Confidence classes."
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        title="Public Speaking & Debate Coaching"
        subtitle="Cultivate fearless stage presence, persuasive articulation, and leadership communication skills."
        backgroundImage="/assets/public-speaking-v2.png"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/courses" },
          { label: "Public Speaking" },
        ]}
      />

      {/* ─── Program Intro ────────────────────────────────────────────── */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2 space-y-4">
              <span className="section-label">Leadership & Expression</span>
              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                Public Speaking Classes for Children & Youth in Kolkata
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                Stage fear is one of the most common obstacles holding intelligent young minds back. At Tutorspedia Institute, we provide a warm, encouraging environment where children practice speaking before an audience every week. Through structured debate drills, storytelling techniques, and extempore practice, students blossom into confident leaders.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800 flex items-start gap-3">
                  <Mic className="text-primary-600 dark:text-primary-400 shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-bold text-sm text-gray-900 dark:text-white">Podium & Mic Practice</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Hands-on microphone handling and stage projection.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800 flex items-start gap-3">
                  <Video className="text-secondary shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-bold text-sm text-gray-900 dark:text-white">Video Self-Review</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Recorded feedback to refine gestures and eye contact.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Card */}
            <div className="bg-gradient-to-br from-primary-900 to-primary-950 text-white rounded-3xl p-6 sm:p-7 shadow-xl space-y-4">
              <h3 className="font-heading font-bold text-xl text-white">Book Free Demo Session</h3>
              <p className="text-white/80 text-xs leading-relaxed">
                Watch your child take the stage during an interactive trial speech workshop.
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                  <span>Age Group: 8 to 18 Years</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                  <span>Small batches (Max 8–10 learners)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                  <span>Debates, extempore & MUN prep</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col gap-2.5">
                <Link
                  href="/admissions"
                  className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-white text-primary-900 hover:bg-gray-100 transition-colors text-center shadow-sm"
                >
                  Book Free Speech Demo
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

      {/* ─── Training Pillars ──────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="section-container">
          <SectionHeading
            badge="Curriculum Pillars"
            title="Core Dimensions of "
            highlight="Speech Mastery"
            subtitle="A systematic journey from overcoming hesitation to winning school debate championships."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {MODULES.map((mod, idx) => (
              <div
                key={idx}
                className="card-premium p-6 sm:p-7 rounded-3xl border border-gray-150 dark:border-gray-800 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-primary-100 dark:bg-primary-950/60 text-primary-700 dark:text-primary-300 flex items-center justify-center font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white">
                    {mod.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {mod.desc}
                  </p>
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
            title="Public Speaking Batches at "
            highlight="Our Learning Centers"
            subtitle="Attend weekly interactive speech sessions at your preferred branch."
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
            title="Public Speaking "
            highlight="FAQs"
            subtitle="Answers to common queries from parents seeking to build their child's stage confidence."
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
            Turn Hesitation into Confident Self-Expression
          </h2>
          <p className="text-white/85 text-base leading-relaxed">
            Reserve a free diagnostic speech trial session at Tutorspedia Institute today.
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
