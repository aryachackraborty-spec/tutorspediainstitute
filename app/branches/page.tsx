import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Clock, Navigation, ArrowRight, Building2, Star } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { BRANCHES, SITE_NAME, SITE_URL } from "@/constants/data";

export const metadata: Metadata = {
  title: {
    absolute: "Our Branches in Kolkata | Tutorspedia Institute",
  },
  description:
    "Find Tutorspedia Institute campuses across Kolkata: Shyamnagar Road Branch (beside Diamond Plaza, Dum Dum Park) and Panache Green City Branch (Satgachi).",
  alternates: {
    canonical: "/branches",
  },
  openGraph: {
    title: "Our Branches in Kolkata | Tutorspedia Institute",
    description:
      "Find Tutorspedia Institute campuses across Kolkata: Shyamnagar Road Branch (Dum Dum Park) and Panache Green City Branch (Satgachi).",
    url: `${SITE_URL}/branches`,
    type: "website",
  },
};

export default function BranchesIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
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
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        title="Our Kolkata Campuses"
        subtitle="Visit Tutorspedia Institute at our convenient learning centers in Dum Dum Park and Satgachi."
        backgroundImage="/assets/infrastructure/infra-01.jpg"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Branches" }]}
      />

      <section className="py-16 sm:py-24 bg-white dark:bg-gray-950">
        <div className="section-container">
          <SectionHeading
            badge="Two Prime Locations"
            title="Explore Tutorspedia "
            highlight="Institute Branches"
            subtitle="Both branches feature air-conditioned smart classrooms, experienced faculty, small batches, and comprehensive coaching."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {BRANCHES.map((b) => (
              <div
                key={b.id}
                className="card-premium rounded-3xl p-6 sm:p-8 border border-gray-150 dark:border-gray-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary-700 text-white shadow-sm flex items-center gap-1.5">
                      <Building2 size={13} />
                      {b.badge}
                    </span>
                    {b.rating && (
                      <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 px-3 py-1 rounded-full text-xs font-bold text-amber-700 dark:text-amber-300">
                        <Star size={13} fill="currentColor" className="text-amber-500" />
                        <span>{b.rating}</span>
                        <span className="text-gray-500 dark:text-gray-400 font-normal">
                          ({b.reviewsCount} Google reviews)
                        </span>
                      </div>
                    )}
                  </div>

                  <h2 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-2">
                    {b.name}
                  </h2>
                  <p className="text-xs font-semibold text-secondary mb-6">
                    {b.tagline}
                  </p>

                  <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-300 mb-8">
                    <li className="flex items-start gap-3">
                      <MapPin size={18} className="text-primary-600 dark:text-primary-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-gray-900 dark:text-white block mb-0.5">Address:</span>
                        <span className="leading-relaxed">{b.address}</span>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <Phone size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-gray-900 dark:text-white block mb-0.5">Contact Numbers:</span>
                        <div className="flex flex-col gap-0.5">
                          <a href={b.phoneHref} className="hover:text-primary-600 font-bold text-gray-900 dark:text-white">
                            {b.phone} <span className="text-[10px] uppercase bg-primary-100 dark:bg-primary-900/60 text-primary-700 dark:text-primary-300 font-bold px-1.5 py-0.5 rounded ml-1">Main</span>
                          </a>
                          <a href={b.secondaryPhoneHref} className="hover:text-primary-600 font-medium text-xs text-gray-600 dark:text-gray-400">
                            {b.secondaryPhone} <span className="text-[10px] text-gray-400 dark:text-gray-500">(Secondary)</span>
                          </a>
                        </div>
                      </div>
                    </li>

                    <li className="flex items-center gap-3">
                      <Clock size={18} className="text-amber-500 shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900 dark:text-white mr-2">Hours:</span>
                        <span>{b.hours}</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-150 dark:border-gray-800">
                  <Link
                    href={b.branchUrl}
                    className="flex-1 py-3 px-4 rounded-xl text-xs font-bold bg-primary-700 hover:bg-primary-800 text-white transition-colors text-center flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    View Branch Details <ArrowRight size={14} />
                  </Link>

                  <a
                    href={b.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors flex items-center gap-1.5"
                  >
                    <Navigation size={13} />
                    Directions
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
