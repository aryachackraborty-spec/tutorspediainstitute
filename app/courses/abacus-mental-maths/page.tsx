import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Clock,
  Users,
  Award,
  Zap,
} from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { SITE_NAME, SITE_URL, BRANCHES } from "@/constants/data";

export const metadata: Metadata = {
  title: {
    absolute: "Abacus & Mental Maths Classes for Kids in Kolkata | Tutorspedia",
  },
  description:
    "Speed up mental calculations and boost memory with ancient Japanese Soroban abacus training at Tutorspedia Institute Dum Dum Park & Satgachi branches.",
  alternates: {
    canonical: "/courses/abacus-mental-maths",
  },
  openGraph: {
    title: "Abacus & Mental Maths Classes for Kids in Kolkata | Tutorspedia",
    description:
      "Boost your child's arithmetic speed, concentration, and photographic memory with expert Soroban Abacus classes in Dum Dum and Satgachi.",
    url: `${SITE_URL}/courses/abacus-mental-maths`,
    type: "website",
    images: [
      {
        url: "/assets/abacus-maths.png",
        width: 1200,
        height: 630,
        alt: "Abacus & Mental Maths Classes at Tutorspedia Institute Kolkata",
      },
    ],
  },
};

const BENEFITS = [
  {
    title: "Lightning Mental Calculations",
    desc: "Children learn to compute addition, subtraction, multiplication, and division in seconds without pen, paper, or calculators.",
  },
  {
    title: "Enhanced Concentration & Focus",
    desc: "Soroban visualization trains sustained attention, helping students concentrate across all academic school subjects.",
  },
  {
    title: "Photographic & Spatial Memory",
    desc: "Stimulates right-brain visual processing, transforming numbers into virtual beads for long-term memory recall.",
  },
  {
    title: "Overcomes Math Anxiety",
    desc: "Early mastery builds confidence, turning mathematics from a feared subject into an enjoyable mental game.",
  },
];

const FAQS = [
  {
    q: "What is the recommended age to start Abacus training?",
    a: "The ideal age window for abacus and mental arithmetic is between 5 and 13 years, when a child's brain plasticity and neural connections are developing most rapidly.",
  },
  {
    q: "How does the Japanese Soroban Abacus method work?",
    a: "Students begin with physical tactile bead manipulation on a Soroban abacus. Gradually, they transition to 'Anzan' (mental abacus), creating a mental picture of the beads to perform lightning-fast calculations in their head.",
  },
  {
    q: "How long is the complete Abacus curriculum?",
    a: "The program spans progressive graded levels, typically taking 6 to 18 months depending on the child's entry age and practice consistency.",
  },
  {
    q: "Which branches conduct Abacus and Mental Math batches?",
    a: "Batches are conducted at both our Shyamnagar Road branch (beside Diamond Plaza, Dum Dum Park) and our Panache Green City branch (Satgachi, near GD Goenka School).",
  },
  {
    q: "Do students receive certificates upon completing levels?",
    a: "Yes. Students take level-completion assessments and earn recognized certificates and participation opportunities in regional mental arithmetic competitions.",
  },
];

export default function AbacusMentalMathsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        name: "Abacus & Mental Maths Training for Children",
        description:
          "Soroban abacus technique and mental arithmetic program for children aged 5–13 years to build speed calculation, focus, and memory.",
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
            name: "Abacus & Mental Maths",
            item: `${SITE_URL}/courses/abacus-mental-maths`,
          },
        ],
      },
    ],
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Tutorspedia Institute! I want to enquire about Abacus & Mental Maths batches for my child."
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        title="Abacus & Mental Maths Classes"
        subtitle="Unleash mental arithmetic speed, concentration, and photographic memory for children ages 5–13."
        backgroundImage="/assets/abacus-maths.png"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/courses" },
          { label: "Abacus & Mental Maths" },
        ]}
      />

      {/* ─── Program Intro ────────────────────────────────────────────── */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2 space-y-4">
              <span className="section-label">Brain Stimulation Track</span>
              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                Abacus Classes for Kids in Dum Dum & Satgachi, Kolkata
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                Tutorspedia Institute&apos;s Abacus & Mental Maths programme introduces children to the proven Japanese Soroban abacus methodology. By activating both the logical left brain and the creative right brain, students develop exceptional speed calculation, heightened visualization, sharper concentration, and enduring arithmetic confidence.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800 flex items-start gap-3">
                  <Zap className="text-amber-500 shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-bold text-sm text-gray-900 dark:text-white">Mental Speed Calculations</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Solve multi-digit sums mentally within seconds.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800 flex items-start gap-3">
                  <Brain className="text-primary-600 dark:text-primary-400 shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-bold text-sm text-gray-900 dark:text-white">Cognitive Focus & Memory</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Expands working memory and listening skills.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Card */}
            <div className="bg-gradient-to-br from-primary-900 to-primary-950 text-white rounded-3xl p-6 sm:p-7 shadow-xl space-y-4">
              <h3 className="font-heading font-bold text-xl text-white">Book Free Abacus Trial</h3>
              <p className="text-white/80 text-xs leading-relaxed">
                Let your child experience bead calculation in an interactive session with our certified abacus coach.
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                  <span>Age Group: 5 to 13 Years</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                  <span>Weekly 2 Sessions (Weekend / Weekday)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                  <span>Individual Soroban kit & worksheets provided</span>
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
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Core Cognitive Benefits ──────────────────────────────────── */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="section-container">
          <SectionHeading
            badge="Cognitive Benefits"
            title="How Soroban Abacus "
            highlight="Transforms Learning"
            subtitle="More than math tricks — a holistic mental workout for young learners."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {BENEFITS.map((item, idx) => (
              <div
                key={idx}
                className="card-premium p-6 rounded-3xl border border-gray-150 dark:border-gray-800 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-primary-100 dark:bg-primary-950/60 text-primary-700 dark:text-primary-300 flex items-center justify-center font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {item.desc}
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
            badge="Available Locations"
            title="Join Abacus Batches at "
            highlight="Our Kolkata Campuses"
            subtitle="Attend classes at whichever branch is most convenient for your family."
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
            badge="Common Queries"
            title="Abacus & Mental Maths "
            highlight="FAQs"
            subtitle="Frequently asked questions about our course structure, duration, and outcomes."
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
            Help Your Child Calculate Faster than a Calculator
          </h2>
          <p className="text-white/85 text-base leading-relaxed">
            Reserve a free diagnostic trial class at Tutorspedia Institute today.
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
