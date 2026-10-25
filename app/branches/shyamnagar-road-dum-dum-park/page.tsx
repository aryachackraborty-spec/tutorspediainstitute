import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  CheckCircle2,
  Calendar,
  BookOpen,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { SITE_NAME, SITE_URL, CONTACT, BRANCHES } from "@/constants/data";

const branch = BRANCHES[0]; // Shyamnagar Road Branch (Head Office)

export const metadata: Metadata = {
  title: {
    absolute: "CBSE & ICSE Coaching in Dum Dum Park | Tutorspedia Institute",
  },
  description:
    "Explore school coaching near Diamond Plaza on Shyamnagar Road, Bangur, Kolkata. Contact Tutorspedia Institute to enquire about available classes and batches.",
  alternates: {
    canonical: "/branches/shyamnagar-road-dum-dum-park",
  },
  openGraph: {
    title: "CBSE & ICSE Coaching in Dum Dum Park | Tutorspedia Institute",
    description:
      "Explore school coaching near Diamond Plaza on Shyamnagar Road, Bangur, Kolkata. Classes for Nursery–Class 12 & skill development.",
    url: `${SITE_URL}/branches/shyamnagar-road-dum-dum-park`,
    type: "website",
    images: [
      {
        url: "/assets/infrastructure/infra-01.jpg",
        width: 1200,
        height: 630,
        alt: "Tutorspedia Institute Shyamnagar Road Dum Dum Park Branch",
      },
    ],
  },
};

const FAQS = [
  {
    q: "Where is the Tutorspedia Shyamnagar Road branch located?",
    a: "Our head office is situated at Room No. 110, 1st Floor, Diamond Arcade, 1/72 Jessore Road, 112 Shyam Nagar Road, right beside Diamond Plaza in Bangur / Dum Dum Park, Kolkata (PIN 700055). It is easily accessible from Jessore Road, Lake Town, and Bangur Avenue.",
  },
  {
    q: "Which boards and classes are taught at the Dum Dum Park branch?",
    a: "We provide comprehensive academic coaching for Nursery through Class 12 across CBSE, ICSE, and West Bengal Board (WBBSE / WBCHSE) curriculums. Streams covered for Class 11–12 include Science, Commerce, and Humanities.",
  },
  {
    q: "What are the visiting and batch hours for this branch?",
    a: "The Shyamnagar Road branch is open Monday through Sunday from 8:00 AM to 8:00 PM. Batches operate in convenient morning, afternoon, and evening slots to accommodate school timings.",
  },
  {
    q: "Are skill development and brain stimulation courses available here?",
    a: "Yes. Our Dum Dum Park branch hosts specialized batches for Abacus & Mental Maths, AI for Kids, Robotics, Coding, Public Speaking, and Foreign Languages (French, German, etc.).",
  },
  {
    q: "How can parents book a free counseling session or demo class?",
    a: "You can call our helpdesk directly at +91 99037 90065, message our counselor on WhatsApp, or submit our online demo booking form. Our academic coordinators will schedule a free diagnostic assessment.",
  },
];

const LOCAL_AREAS = [
  "Dum Dum Park",
  "Bangur Avenue",
  "Shyam Nagar Road",
  "Diamond Plaza / Jessore Road",
  "Lake Town",
  "South Dum Dum",
  "Patipukur",
  "Kolkata 700055",
];

const HIGHLIGHTS = [
  {
    title: "Small Batch Sizes",
    desc: "Personalized mentor guidance with strictly capped student numbers per classroom batch.",
  },
  {
    title: "Smart Air-Conditioned Classrooms",
    desc: "Tech-enabled multimedia projectors, digital whiteboards, and comfortable modern seating.",
  },
  {
    title: "Weekly Diagnostic Tests",
    desc: "Continuous chapter-wise assessments with detailed parent feedback reports.",
  },
  {
    title: "Targeted Board Preparation",
    desc: "Specialized mock exam series, previous 10-year question solving, and doubt-clearing clinics.",
  },
];

export default function ShyamnagarRoadBranchPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/branches/shyamnagar-road-dum-dum-park#localbusiness`,
        name: `${SITE_NAME} - Shyamnagar Road Branch (Head Office)`,
        alternateName: "Tutorspedia Institute Dum Dum Park",
        description:
          "Premier coaching institute in Dum Dum Park, Kolkata offering CBSE, ICSE & West Bengal Board tuition for Nursery to Class 12, along with Abacus, Robotics, Coding, and Public Speaking.",
        url: `${SITE_URL}/branches/shyamnagar-road-dum-dum-park`,
        telephone: branch.phone,
        image: `${SITE_URL}/assets/infrastructure/infra-01.jpg`,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: branch.streetAddress,
          addressLocality: branch.addressLocality,
          addressRegion: branch.addressRegion,
          postalCode: branch.postalCode,
          addressCountry: branch.addressCountry,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: branch.geo.latitude,
          longitude: branch.geo.longitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "08:00",
            closes: "20:00",
          },
        ],
        hasMap: branch.directionsUrl,
        areaServed: branch.areaServed.map((area) => ({
          "@type": "AdministrativeArea",
          name: area,
        })),
        parentOrganization: {
          "@type": "EducationalOrganization",
          name: SITE_NAME,
          url: SITE_URL,
        },
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
            name: "Branches",
            item: `${SITE_URL}/branches`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Shyamnagar Road (Dum Dum Park)",
            item: `${SITE_URL}/branches/shyamnagar-road-dum-dum-park`,
          },
        ],
      },
    ],
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Tutorspedia Institute! I want to enquire about courses and admissions at the Shyamnagar Road / Dum Dum Park branch."
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        title="Shyamnagar Road Branch (Head Office)"
        subtitle="Premier CBSE, ICSE & School Tuition Center beside Diamond Plaza, Dum Dum Park, Kolkata."
        backgroundImage="/assets/infrastructure/infra-01.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Branches", href: "/branches" },
          { label: "Dum Dum Park Branch" },
        ]}
      />

      {/* ─── Hero Overview Bar ─────────────────────────────────────────── */}
      <section className="py-12 bg-white dark:bg-gray-950 border-b border-gray-150 dark:border-gray-800">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800">
                <Sparkles size={14} />
                <span>Head Office • Dum Dum Park / Bangur Location</span>
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                Coaching Centre in Dum Dum Park & Diamond Plaza
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                Welcome to Tutorspedia Institute&apos;s flagship learning campus. Located in Diamond Arcade right beside Diamond Plaza on Jessore Road and Shyamnagar Road, this centre provides premier academic coaching for Nursery through Class 12, along with industry-grade skill development programs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-900 to-primary-950 text-white rounded-3xl p-6 sm:p-7 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs text-white/60 uppercase tracking-wider font-semibold">Center Rating</p>
                  <p className="text-2xl font-bold font-heading flex items-center gap-1.5 mt-0.5">
                    <Star size={20} fill="#f59e0b" className="text-amber-400" />
                    4.8 <span className="text-xs text-white/60 font-normal">/ 5.0</span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-white/60 uppercase tracking-wider font-semibold">Hours</p>
                  <p className="text-sm font-semibold text-emerald-400 mt-1">8:00 AM – 8:00 PM</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={`tel:${branch.phone.replace(/[^0-9+]/g, "")}`}
                  className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-white text-primary-900 hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone size={16} className="text-primary-600" />
                  Call: {branch.phone}
                </a>

                <a
                  href={`https://wa.me/919903790065?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.979-.276-.1-.476-.15-.676.15-.2.301-.776.979-.951 1.18-.175.201-.351.226-.652.076-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.675-2.085-.176-.301-.019-.464.132-.614.135-.135.301-.351.451-.527.151-.176.201-.301.301-.502.101-.201.05-.377-.025-.527-.075-.15-.676-1.631-.926-2.233-.243-.587-.49-.508-.675-.518l-.576-.01c-.201 0-.527.075-.802.377-.276.301-1.053 1.029-1.053 2.509 0 1.481 1.078 2.91 1.229 3.111.15.201 2.122 3.24 5.14 4.544.718.31 1.278.496 1.716.634.721.23 1.378.197 1.9.12.58-.088 1.782-.728 2.033-1.431.25-.703.25-1.305.175-1.431-.075-.126-.276-.201-.577-.352z" />
                  </svg>
                  WhatsApp Admission Desk
                </a>

                <a
                  href={branch.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center gap-2 border border-white/15"
                >
                  <Navigation size={14} className="text-secondary" />
                  Get Google Maps Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Location & Verified NAP Card ──────────────────────────────── */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="section-container">
          <SectionHeading
            badge="Verified Location"
            title="Campus Address & "
            highlight="Access Details"
            subtitle="Strategically located near Diamond Plaza shopping mall, connecting Dum Dum Park and Bangur Avenue."
          />

          <div className="grid lg:grid-cols-2 gap-10 mt-12 items-start">
            {/* Address Details Card */}
            <div className="bg-white dark:bg-gray-950 rounded-3xl p-8 border border-gray-150 dark:border-gray-800 shadow-sm space-y-6">
              <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <MapPin className="text-primary-600" size={22} />
                Physical Address & Landmark
              </h3>

              <div className="p-4 rounded-2xl bg-primary-50/50 dark:bg-primary-950/20 border border-primary-100 dark:border-primary-900 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong className="block text-gray-900 dark:text-white font-semibold mb-1">
                  Diamond Arcade Campus:
                </strong>
                {branch.address}
              </div>

              <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white block">Direct Telephone:</span>
                    <a href={branch.phoneHref} className="text-primary-600 dark:text-primary-400 font-bold hover:underline">
                      {branch.phone} (Main Helpline)
                    </a>
                    <span className="mx-2 text-gray-400">•</span>
                    <a href={branch.secondaryPhoneHref} className="text-gray-700 dark:text-gray-300 hover:underline">
                      {branch.secondaryPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock size={16} />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white block">Official Timings:</span>
                    <span>Monday – Sunday: 8:00 AM – 8:00 PM (Daily Counseling Available)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Navigation size={16} />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white block">Prominent Landmark:</span>
                    <span>Diamond Arcade, directly adjacent to Diamond Plaza Mall, Bangur / Jessore Road crossing.</span>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="pt-4 border-t border-gray-150 dark:border-gray-800">
                <span className="text-xs uppercase tracking-wider font-bold text-gray-500 dark:text-gray-400 block mb-2.5">
                  Core Student Localities Served:
                </span>
                <div className="flex flex-wrap gap-2">
                  {LOCAL_AREAS.map((loc) => (
                    <span
                      key={loc}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Map Embed */}
            <div className="bg-white dark:bg-gray-950 rounded-3xl p-3 sm:p-4 border border-gray-150 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col h-full">
              <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden">
                <iframe
                  title="Tutorspedia Institute Shyamnagar Road Dum Dum Park Branch Map"
                  src={branch.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
              <div className="p-3 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>Coordinates: 22.617415° N, 88.409893° E</span>
                <a
                  href={branch.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1"
                >
                  Open in Google Maps <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Courses Available at This Branch ──────────────────────────── */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="section-container">
          <SectionHeading
            badge="Programs & Curriculum"
            title="Courses Conducted at "
            highlight="Dum Dum Park Branch"
            subtitle="All academic levels from pre-primary through senior secondary, plus future-ready skill tracks."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {/* Card 1 */}
            <div className="card-premium p-6 rounded-3xl border border-gray-150 dark:border-gray-800 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 inline-block">
                  Academic Foundation
                </span>
                <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white">
                  Primary School Coaching (Nursery–Class 5)
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Concept-based early foundations in English, Mathematics, Science, and EVS with worksheet practice and phonics training.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="text-[11px] font-semibold bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-gray-600 dark:text-gray-300">CBSE</span>
                  <span className="text-[11px] font-semibold bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-gray-600 dark:text-gray-300">ICSE</span>
                  <span className="text-[11px] font-semibold bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-gray-600 dark:text-gray-300">WBSE</span>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-100 dark:border-gray-800">
                <Link
                  href="/courses/academic-coaching"
                  className="text-primary-600 dark:text-primary-400 font-bold text-sm flex items-center gap-1.5 hover:underline"
                >
                  View Academic Curriculum <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card-premium p-6 rounded-3xl border border-gray-150 dark:border-gray-800 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 inline-block">
                  Board Preparation
                </span>
                <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white">
                  Secondary & High School (Class 6–10)
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Rigorous syllabus completion, question-bank practice, and mock test series for Class 10 Board examinations across CBSE, ICSE, and WBBSE.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="text-[11px] font-semibold bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-gray-600 dark:text-gray-300">Class 10 Boards</span>
                  <span className="text-[11px] font-semibold bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-gray-600 dark:text-gray-300">Mock Exams</span>
                  <span className="text-[11px] font-semibold bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-gray-600 dark:text-gray-300">Doubt Clinics</span>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-100 dark:border-gray-800">
                <Link
                  href="/courses/academic-coaching"
                  className="text-primary-600 dark:text-primary-400 font-bold text-sm flex items-center gap-1.5 hover:underline"
                >
                  View Class 6–10 Details <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card-premium p-6 rounded-3xl border border-gray-150 dark:border-gray-800 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 inline-block">
                  Senior Secondary
                </span>
                <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white">
                  Higher Secondary (Class 11 & 12)
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Specialized coaching for Science (Physics, Chemistry, Maths, Biology), Commerce, and Humanities with entrance exam orientation.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="text-[11px] font-semibold bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-gray-600 dark:text-gray-300">CBSE</span>
                  <span className="text-[11px] font-semibold bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-gray-600 dark:text-gray-300">ISC</span>
                  <span className="text-[11px] font-semibold bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-gray-600 dark:text-gray-300">WBCHSE</span>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-100 dark:border-gray-800">
                <Link
                  href="/courses/academic-coaching"
                  className="text-primary-600 dark:text-primary-400 font-bold text-sm flex items-center gap-1.5 hover:underline"
                >
                  View Senior Secondary <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 4 */}
            <div className="card-premium p-6 rounded-3xl border border-gray-150 dark:border-gray-800 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 inline-block">
                  Cognitive Boost
                </span>
                <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white">
                  Abacus & Mental Maths
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Japanese Soroban calculation methods that accelerate mental arithmetic, memory retention, focus, and speed calculation for ages 5–13.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-100 dark:border-gray-800">
                <Link
                  href="/courses/abacus-mental-maths"
                  className="text-primary-600 dark:text-primary-400 font-bold text-sm flex items-center gap-1.5 hover:underline"
                >
                  Explore Abacus Programme <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 5 */}
            <div className="card-premium p-6 rounded-3xl border border-gray-150 dark:border-gray-800 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-100 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 inline-block">
                  STEM & Coding
                </span>
                <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white">
                  Robotics, AI & Coding for Kids
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Hands-on engineering with sensors, LEGO kits, Scratch coding, Python programming, and Artificial Intelligence foundations.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-100 dark:border-gray-800">
                <Link
                  href="/courses/robotics-ai-coding"
                  className="text-primary-600 dark:text-primary-400 font-bold text-sm flex items-center gap-1.5 hover:underline"
                >
                  Explore Robotics & AI <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 6 */}
            <div className="card-premium p-6 rounded-3xl border border-gray-150 dark:border-gray-800 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 inline-block">
                  Communication
                </span>
                <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white">
                  Public Speaking & Spoken English
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Stage confidence, debate mastery, presentation delivery, and foreign languages (French DELF, German, Bengali, Hindi).
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-100 dark:border-gray-800">
                <Link
                  href="/courses/public-speaking"
                  className="text-primary-600 dark:text-primary-400 font-bold text-sm flex items-center gap-1.5 hover:underline"
                >
                  Explore Public Speaking <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Campus Photographs ────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="section-container">
          <SectionHeading
            badge="Campus Environment"
            title="Inside Our "
            highlight="Dum Dum Park Center"
            subtitle="Clean, air-conditioned, technology-integrated classrooms crafted for distraction-free learning."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-sm group">
              <Image
                src="/assets/infrastructure/infra-01.jpg"
                alt="Tutorspedia Institute Diamond Arcade Head Office reception and entrance"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                <span className="text-white text-xs font-semibold">Campus Entrance & Counseling Desk</span>
              </div>
            </div>

            <div className="relative h-64 rounded-3xl overflow-hidden shadow-sm group">
              <Image
                src="/assets/infrastructure/infra-05.jpg"
                alt="Smart air-conditioned classroom for academic batch coaching at Dum Dum Park"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                <span className="text-white text-xs font-semibold">Interactive Smart Classroom</span>
              </div>
            </div>

            <div className="relative h-64 rounded-3xl overflow-hidden shadow-sm group">
              <Image
                src="/assets/infrastructure/infra-09.jpg"
                alt="Robotics and AI innovation lab at Tutorspedia Institute Diamond Arcade"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                <span className="text-white text-xs font-semibold">STEM & Robotics Innovation Lab</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Frequently Asked Questions (Accordion) ────────────────────── */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="section-container max-w-4xl">
          <SectionHeading
            badge="Parent FAQs"
            title="Questions About "
            highlight="Dum Dum Park Branch"
            subtitle="Verified answers to help parents and students choose the right batch and schedule."
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

      {/* ─── Other Branch Link & Conversion Call-To-Action ─────────────── */}
      <section className="py-16 bg-primary-gradient text-white">
        <div className="section-container text-center max-w-3xl space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-tight">
            Book a Free Demo Class at Shyamnagar Road Branch
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed">
            Experience our interactive teaching methods firsthand. Meet our expert faculty and evaluate your child&apos;s learning style before enrollment.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/admissions"
              className="py-3.5 px-8 rounded-2xl bg-white text-primary-900 hover:bg-gray-100 font-bold text-sm transition-colors shadow-lg"
            >
              Book Free Demo Session
            </Link>
            <a
              href={`https://wa.me/919903790065?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-8 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm transition-colors shadow-lg flex items-center gap-2"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="pt-8 border-t border-white/20 text-xs text-white/70 flex flex-col sm:flex-row items-center justify-center gap-3">
            <span>Looking for our other Kolkata location?</span>
            <Link
              href="/branches/panache-green-city-satgachi"
              className="text-white font-bold underline hover:text-secondary transition-colors"
            >
              Visit Panache Green City Branch (Satgachi / Near GD Goenka) →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
