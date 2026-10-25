import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Sparkles,
  ArrowRight,
  Star,
  Building2,
  AlertCircle,
} from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { SITE_NAME, SITE_URL, BRANCHES } from "@/constants/data";

const branch = BRANCHES[1]; // Panache Green City Branch

export const metadata: Metadata = {
  title: {
    absolute: "Coaching Centre in Satgachi, Kolkata | Tutorspedia Institute",
  },
  description:
    "Find Tutorspedia Institute at Panache Green City near GD Goenka School, Satgachi, Kolkata. Explore available school coaching and skill-development courses.",
  alternates: {
    canonical: "/branches/panache-green-city-satgachi",
  },
  openGraph: {
    title: "Coaching Centre in Satgachi, Kolkata | Tutorspedia Institute",
    description:
      "Find Tutorspedia Institute at Panache Green City near GD Goenka School, Satgachi, Kolkata. School coaching for Nursery–Class 12 and skill courses.",
    url: `${SITE_URL}/branches/panache-green-city-satgachi`,
    type: "website",
    images: [
      {
        url: "/assets/infrastructure/infra-15.jpg",
        width: 1200,
        height: 630,
        alt: "Tutorspedia Institute Panache Green City Satgachi Branch",
      },
    ],
  },
};

const FAQS = [
  {
    q: "Where is the Tutorspedia Panache Green City branch located in Satgachi?",
    a: "Our Satgachi branch is situated on the 1st Floor, Room No. 1, Panache Green City, 28 Shyam Nagar Road, Ward No. 23, Satgachi, Kolkata 700055. It is situated right along Shyam Nagar Road in close walking distance to GD Goenka School (used strictly as a geographical landmark).",
  },
  {
    q: "Is Tutorspedia Institute affiliated with GD Goenka School?",
    a: "No. Tutorspedia Institute is an independent premier coaching and educational institution. GD Goenka School is solely referenced as a familiar geographical neighborhood landmark for easy parent navigation.",
  },
  {
    q: "What classes and boards are offered at the Satgachi branch?",
    a: "We conduct interactive tuition classes for Nursery to Class 12 covering CBSE, ICSE, and West Bengal Board (WBBSE/WBCHSE) syllabi. Science, Commerce, and Humanities subjects are taught by dedicated faculty.",
  },
  {
    q: "What are the visiting hours for Panache Green City branch?",
    a: "Our Satgachi campus is open Monday through Sunday from 11:00 AM to 8:00 PM. Parents and students are welcome to visit during these hours for batch scheduling and counseling.",
  },
  {
    q: "Which skill programs are conducted at this branch?",
    a: "Students can enroll in our Abacus & Mental Maths, Robotics, AI, Coding, and Public Speaking modules, designed to develop computational thinking and stage confidence.",
  },
];

const LOCAL_AREAS = [
  "Satgachi",
  "Panache Green City",
  "Shyam Nagar Road",
  "Nagerbazar",
  "Dum Dum",
  "Ward No. 23",
  "Gorabazar",
  "Kolkata 700055",
];

export default function PanacheGreenCityBranchPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/branches/panache-green-city-satgachi#localbusiness`,
        name: `${SITE_NAME} - Panache Green City Branch`,
        alternateName: "Tutorspedia Institute Satgachi",
        description:
          "Comprehensive coaching centre at Panache Green City, 28 Shyam Nagar Road, Satgachi, Kolkata offering CBSE, ICSE & West Bengal Board coaching for Nursery to Class 12, along with Abacus and STEM learning.",
        url: `${SITE_URL}/branches/panache-green-city-satgachi`,
        telephone: branch.phone,
        image: `${SITE_URL}/assets/infrastructure/infra-15.jpg`,
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
            opens: "11:00",
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
            name: "Panache Green City (Satgachi)",
            item: `${SITE_URL}/branches/panache-green-city-satgachi`,
          },
        ],
      },
    ],
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Tutorspedia Institute! I want to enquire about classes and admissions at the Panache Green City / Satgachi branch."
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        title="Panache Green City Branch"
        subtitle="Tuition & Skill Development Centre near GD Goenka School, Satgachi, Shyam Nagar Road, Kolkata."
        backgroundImage="/assets/infrastructure/infra-15.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Branches", href: "/branches" },
          { label: "Satgachi Branch" },
        ]}
      />

      {/* ─── Hero Overview Bar ─────────────────────────────────────────── */}
      <section className="py-12 bg-white dark:bg-gray-950 border-b border-gray-150 dark:border-gray-800">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800">
                <Building2 size={14} />
                <span>Satgachi Campus • Panache Green City</span>
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                Coaching Centre in Satgachi & Shyam Nagar Road
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                Tutorspedia Institute&apos;s Panache Green City campus provides students in Satgachi, Nagerbazar, and surrounding Kolkata neighborhoods with top-tier academic coaching. Located along 28 Shyam Nagar Road near GD Goenka School, our modern facility offers small batches, structured worksheets, and concept-first mentoring.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-900 to-primary-950 text-white rounded-3xl p-6 sm:p-7 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs text-white/60 uppercase tracking-wider font-semibold">Campus Service</p>
                  <p className="text-xl font-bold font-heading text-white mt-0.5">
                    Satgachi Branch
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-white/60 uppercase tracking-wider font-semibold">Center Hours</p>
                  <p className="text-sm font-semibold text-emerald-400 mt-1">11:00 AM – 8:00 PM</p>
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
                  WhatsApp Satgachi Desk
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
            title="Panache Green City "
            highlight="Address & Landmarks"
            subtitle="Accessible location along Shyam Nagar Road in Ward No. 23, convenient for Satgachi and Nagerbazar residents."
          />

          <div className="grid lg:grid-cols-2 gap-10 mt-12 items-start">
            {/* Address Details Card */}
            <div className="bg-white dark:bg-gray-950 rounded-3xl p-8 border border-gray-150 dark:border-gray-800 shadow-sm space-y-6">
              <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <MapPin className="text-primary-600" size={22} />
                Physical Address & Guidance
              </h3>

              <div className="p-4 rounded-2xl bg-primary-50/50 dark:bg-primary-950/20 border border-primary-100 dark:border-primary-900 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong className="block text-gray-900 dark:text-white font-semibold mb-1">
                  Panache Green City Campus:
                </strong>
                {branch.address}
              </div>

              {/* Landmark Clarification Note */}
              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-3">
                <AlertCircle size={18} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Landmark Note:</strong> We are located near GD Goenka School on Shyam Nagar Road. Please note that Tutorspedia Institute is an independent academy and has no institutional affiliation with GD Goenka School; it serves as a neighborhood directional reference.
                </span>
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
                      {branch.secondaryPhone} (Branch Mobile)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock size={16} />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white block">Official Timings:</span>
                    <span>Monday – Sunday: 11:00 AM – 8:00 PM (Daily Batch & Counseling Sessions)</span>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="pt-4 border-t border-gray-150 dark:border-gray-800">
                <span className="text-xs uppercase tracking-wider font-bold text-gray-500 dark:text-gray-400 block mb-2.5">
                  Local Communities & Neighborhoods:
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
                  title="Tutorspedia Institute Panache Green City Satgachi Branch Map"
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
                <span>Coordinates: 22.614820° N, 88.407150° E</span>
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
            badge="Available Programs"
            title="Courses Conducted at "
            highlight="Satgachi Branch"
            subtitle="Comprehensive tuition for school boards and interactive student enrichment."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {/* Card 1 */}
            <div className="card-premium p-6 rounded-3xl border border-gray-150 dark:border-gray-800 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 inline-block">
                  School Coaching
                </span>
                <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white">
                  Class 1 to 12 All Subjects
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Regular subject tutoring for Science, Maths, Social Sciences, English, and Vernacular languages across CBSE, ICSE, and West Bengal Board.
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
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 inline-block">
                  Speed & Mental Math
                </span>
                <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white">
                  Abacus & Mental Arithmetic
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Soroban abacus drills and visualization techniques to eliminate math anxiety, increase concentration, and accelerate calculation speed.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-100 dark:border-gray-800">
                <Link
                  href="/courses/abacus-mental-maths"
                  className="text-primary-600 dark:text-primary-400 font-bold text-sm flex items-center gap-1.5 hover:underline"
                >
                  Explore Abacus Classes <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card-premium p-6 rounded-3xl border border-gray-150 dark:border-gray-800 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-100 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 inline-block">
                  STEM Skills
                </span>
                <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white">
                  Robotics, AI & Coding Lab
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Practical hands-on kits, logic building, block coding with Scratch, Python basics, and early Artificial Intelligence concepts.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-100 dark:border-gray-800">
                <Link
                  href="/courses/robotics-ai-coding"
                  className="text-primary-600 dark:text-primary-400 font-bold text-sm flex items-center gap-1.5 hover:underline"
                >
                  Explore STEM & Coding <ArrowRight size={14} />
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
            highlight="Satgachi Branch"
            subtitle="Spacious learning areas designed for interactive discussions and attentive teaching."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-sm group">
              <Image
                src="/assets/infrastructure/infra-15.jpg"
                alt="Panache Green City Satgachi branch learning room"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                <span className="text-white text-xs font-semibold">Classroom Learning Zone</span>
              </div>
            </div>

            <div className="relative h-64 rounded-3xl overflow-hidden shadow-sm group">
              <Image
                src="/assets/infrastructure/infra-02.jpg"
                alt="Individual study desk and small batch coaching at Satgachi"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                <span className="text-white text-xs font-semibold">Small Group Discussion Desk</span>
              </div>
            </div>

            <div className="relative h-64 rounded-3xl overflow-hidden shadow-sm group">
              <Image
                src="/assets/infrastructure/infra-06.jpg"
                alt="Technology-enabled workspace for kids robotics and coding"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                <span className="text-white text-xs font-semibold">Activity & Brain Training Area</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Frequently Asked Questions (Accordion) ────────────────────── */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="section-container max-w-4xl">
          <SectionHeading
            badge="Branch FAQs"
            title="Questions About "
            highlight="Satgachi Branch"
            subtitle="Verified details on location, batches, and enrollment for Satgachi parents."
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

      {/* ─── Conversion & Other Branch Link ────────────────────────────── */}
      <section className="py-16 bg-primary-gradient text-white">
        <div className="section-container text-center max-w-3xl space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-tight">
            Schedule a Visit to Panache Green City Branch
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed">
            Meet our teachers at Satgachi, review our syllabus schedule, and secure a convenient slot for your child.
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
            <span>Looking for our Head Office?</span>
            <Link
              href="/branches/shyamnagar-road-dum-dum-park"
              className="text-white font-bold underline hover:text-secondary transition-colors"
            >
              Visit Shyamnagar Road Branch (Dum Dum Park / Diamond Plaza) →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
