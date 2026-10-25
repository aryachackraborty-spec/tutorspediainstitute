import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Cpu,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Code,
  Bot,
  Terminal,
  Zap,
} from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { SITE_NAME, SITE_URL, BRANCHES } from "@/constants/data";

export const metadata: Metadata = {
  title: {
    absolute: "Robotics, AI & Coding for Kids in Kolkata | Tutorspedia",
  },
  description:
    "Future-ready STEM learning for children ages 8–16. Hands-on Robotics, Arduino, Scratch, Python coding, and Artificial Intelligence at Tutorspedia Institute Kolkata.",
  alternates: {
    canonical: "/courses/robotics-ai-coding",
  },
  openGraph: {
    title: "Robotics, AI & Coding for Kids in Kolkata | Tutorspedia",
    description:
      "Empower your child with hands-on Robotics, Scratch, Python, and AI courses at Tutorspedia Institute's Dum Dum Park and Satgachi centers.",
    url: `${SITE_URL}/courses/robotics-ai-coding`,
    type: "website",
    images: [
      {
        url: "/assets/robotics-class.png",
        width: 1200,
        height: 630,
        alt: "Robotics, AI and Coding Classes at Tutorspedia Institute Kolkata",
      },
    ],
  },
};

const MODULES = [
  {
    icon: Bot,
    title: "Robotics & Hardware Engineering",
    desc: "Hands-on robot construction using sensors, motors, microcontrollers, and LEGO/Arduino kits. Learn how automation and mechanical gear systems operate.",
    topics: ["Sensors & Actuators", "Arduino Microcontroller Circuitry", "Autonomous Obstacle Avoiders", "Robotics Competitions Prep"],
  },
  {
    icon: Code,
    title: "Coding Fundamentals & Scratch",
    desc: "Visual block coding designed for younger learners to develop algorithmic problem-solving, loops, conditional logic, animations, and arcade games.",
    topics: ["Logic & Sequences", "Interactive Game Creation", "Variable States & Events", "Debugging Mindset"],
  },
  {
    icon: Terminal,
    title: "Python Programming & Web Basics",
    desc: "Transition to industry-standard textual programming. Write clean Python code, work with data structures, and create basic web interfaces with HTML/CSS.",
    topics: ["Python Syntax & Functions", "Data Collections & Math Libraries", "Mini Game Development", "Intro to Web Design"],
  },
  {
    icon: Cpu,
    title: "Artificial Intelligence for Kids",
    desc: "Demystify AI through fun, practical machine-learning demonstrations. Understand neural networks, image recognition, and ethical AI applications.",
    topics: ["Machine Learning Basics", "Computer Vision Demos", "Chatbots & Prompting", "Future Tech Ethics"],
  },
];

const FAQS = [
  {
    q: "Does my child need prior coding experience to join?",
    a: "No prior coding or electronics background is required. We start from foundational visual logic and progressively transition students to hardware assembly and textual programming.",
  },
  {
    q: "What age group is suitable for Robotics and AI?",
    a: "Our STEM programs are divided into age-appropriate tracks: Junior Innovators (ages 8–11) focusing on Scratch and modular robotics, and Senior Creators (ages 12–16) working with Arduino, Python, and AI.",
  },
  {
    q: "Are hardware kits and computers provided at the campus?",
    a: "Yes. Our Dum Dum Park and Satgachi innovation labs are fully equipped with student computers, robotics component kits, sensors, and microcontrollers for every session.",
  },
  {
    q: "At which branches are Robotics and AI classes held?",
    a: "Classes are held at both our Shyamnagar Road branch (beside Diamond Plaza, Dum Dum Park) and our Panache Green City branch (Satgachi).",
  },
  {
    q: "Do students build real working projects?",
    a: "Yes. Every module concludes with an interactive project showcase where students demonstrate their own programmed games, autonomous robots, or smart circuits.",
  },
];

export default function RoboticsAiCodingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        name: "Robotics, AI & Coding for Kids",
        description:
          "STEM hands-on program teaching Robotics, Arduino, Scratch, Python programming, and Artificial Intelligence for students aged 8 to 16.",
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
            name: "Robotics, AI & Coding",
            item: `${SITE_URL}/courses/robotics-ai-coding`,
          },
        ],
      },
    ],
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Tutorspedia Institute! I want to enquire about Robotics, AI & Coding courses for my child."
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        title="Robotics, AI & Coding for Kids"
        subtitle="Empower the next generation of innovators with practical STEM engineering, coding, and artificial intelligence."
        backgroundImage="/assets/robotics-class.png"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/courses" },
          { label: "Robotics, AI & Coding" },
        ]}
      />

      {/* ─── Program Intro ────────────────────────────────────────────── */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2 space-y-4">
              <span className="section-label">Future Skills Lab</span>
              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                Robotics & Coding Classes for Children in Kolkata
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                Rather than simply consuming technology, students at Tutorspedia Institute learn how to invent it. Our hands-on STEM curriculum bridges software programming and mechanical engineering through engaging real-world projects—from autonomous obstacle-dodging robots to Python games and intelligent AI models.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800 flex items-start gap-3">
                  <Bot className="text-primary-600 dark:text-primary-400 shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-bold text-sm text-gray-900 dark:text-white">Hands-on Hardware Kits</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Build and wire circuits with Arduino, motors, and sensors.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800 flex items-start gap-3">
                  <Terminal className="text-secondary shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-bold text-sm text-gray-900 dark:text-white">Scratch to Python Ladder</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Smooth progression from visual drag-and-drop to clean code.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Card */}
            <div className="bg-gradient-to-br from-primary-900 to-primary-950 text-white rounded-3xl p-6 sm:p-7 shadow-xl space-y-4">
              <h3 className="font-heading font-bold text-xl text-white">Book a STEM Trial Class</h3>
              <p className="text-white/80 text-xs leading-relaxed">
                Let your child assemble their first robot and code an interactive animation in our lab.
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                  <span>Age Group: 8 to 16 Years</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                  <span>Interactive lab workstations provided</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                  <span>Certificate upon project completion</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col gap-2.5">
                <Link
                  href="/admissions"
                  className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-white text-primary-900 hover:bg-gray-100 transition-colors text-center shadow-sm"
                >
                  Book Free STEM Demo
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

      {/* ─── Modular STEM Tracks ──────────────────────────────────────── */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="section-container">
          <SectionHeading
            badge="Course Modules"
            title="Comprehensive STEM "
            highlight="Learning Tracks"
            subtitle="Four focused dimensions that prepare children for the digital and engineering future."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {MODULES.map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <div
                  key={idx}
                  className="card-premium p-6 sm:p-7 rounded-3xl border border-gray-150 dark:border-gray-800 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary-100 dark:bg-primary-950/60 text-primary-700 dark:text-primary-300 flex items-center justify-center">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white">
                      {mod.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {mod.desc}
                    </p>

                    <div className="pt-2">
                      <p className="text-xs uppercase font-bold text-gray-500 dark:text-gray-400 mb-2">
                        Key Skills & Projects:
                      </p>
                      <ul className="space-y-1.5 text-xs text-gray-700 dark:text-gray-300">
                        {mod.topics.map((top, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-2">
                            <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                            <span>{top}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Campus Availability ──────────────────────────────────────── */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="section-container">
          <SectionHeading
            badge="Innovation Labs"
            title="Attend STEM Classes at "
            highlight="Dum Dum Park or Satgachi"
            subtitle="Both Kolkata campuses are equipped with dedicated coding and robotics equipment."
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
            title="Robotics & Coding "
            highlight="FAQs"
            subtitle="Clear answers about hardware kits, age guidelines, and lab scheduling."
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
            Spark Your Child&apos;s Passion for Technology & Coding
          </h2>
          <p className="text-white/85 text-base leading-relaxed">
            Reserve a free trial session at our innovation lab and discover how fun engineering can be.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/admissions"
              className="py-3.5 px-8 rounded-2xl bg-white text-primary-900 hover:bg-gray-100 font-bold text-sm transition-colors shadow-lg"
            >
              Book Free STEM Demo
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
