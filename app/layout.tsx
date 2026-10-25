import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, SITE_TAGLINE, CONTACT, BRANCHES } from "@/constants/data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | CBSE, ICSE & School Coaching in Kolkata`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "best coaching centre Kolkata",
    "coaching centre in Dum Dum Park",
    "CBSE coaching centre in Dum Dum Park",
    "ICSE tuition in Satgachi",
    "school tuition near Diamond Plaza",
    "tuition classes near Panache Green City",
    "CBSE coaching Kolkata",
    "ICSE coaching Kolkata",
    "WBSE coaching Kolkata",
    "abacus classes for kids in Dum Dum",
    "mental maths classes Kolkata",
    "robotics classes for children in Kolkata",
    "AI classes for kids in Kolkata",
    "public speaking classes Kolkata",
    "spoken English classes in Dum Dum",
    "nursery to class 12 tuition Kolkata",
    "coaching centre Shyamnagar Road Kolkata",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | CBSE, ICSE & School Coaching in Kolkata`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/assets/infrastructure/infra-01.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Kolkata Campuses`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | CBSE, ICSE & School Coaching in Kolkata`,
    description: SITE_DESCRIPTION,
    images: ["/assets/infrastructure/infra-01.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "K-2embh5LRSWXteIGleNR8r4NkKtI0LHhG5zb7KrPZo",
  },
  other: {
    "geo.region": "IN-WB",
    "geo.placename": "Kolkata",
    "geo.position": "22.617415;88.409893",
    "ICBM": "22.617415, 88.409893",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredDataGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "EducationalOrganization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        alternateName: ["Tutorspedia", "Eboard Academy Pvt Ltd"],
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/assets/logo/logo-full.png`,
          caption: SITE_NAME,
        },
        image: `${SITE_URL}/assets/infrastructure/infra-01.jpg`,
        description: SITE_DESCRIPTION,
        telephone: CONTACT.phone,
        email: CONTACT.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Room No. 110, 1st Floor, Diamond Arcade, 1/72 Jessore Road, 112 Shyam Nagar Rd, beside Diamond Plaza, Bangur",
          addressLocality: "Kolkata",
          addressRegion: "West Bengal",
          postalCode: "700055",
          addressCountry: "IN",
        },
        sameAs: [
          CONTACT.social.facebook,
          CONTACT.social.instagram,
          CONTACT.social.youtube,
          CONTACT.social.twitter,
        ],
        subOrganization: [
          { "@id": `${SITE_URL}${BRANCHES[0].branchUrl}#branch` },
          { "@id": `${SITE_URL}${BRANCHES[1].branchUrl}#branch` },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}${BRANCHES[0].branchUrl}#branch`,
        name: `${SITE_NAME} - ${BRANCHES[0].name}`,
        url: `${SITE_URL}${BRANCHES[0].branchUrl}`,
        image: `${SITE_URL}/assets/infrastructure/infra-11.jpg`,
        telephone: BRANCHES[0].phone,
        priceRange: "₹₹",
        parentOrganization: {
          "@id": `${SITE_URL}/#organization`,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: BRANCHES[0].streetAddress,
          addressLocality: BRANCHES[0].addressLocality,
          addressRegion: BRANCHES[0].addressRegion,
          postalCode: BRANCHES[0].postalCode,
          addressCountry: BRANCHES[0].addressCountry,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: BRANCHES[0].geo.latitude,
          longitude: BRANCHES[0].geo.longitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "08:00",
            closes: "20:00",
          },
        ],
        areaServed: BRANCHES[0].areaServed,
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}${BRANCHES[1].branchUrl}#branch`,
        name: `${SITE_NAME} - ${BRANCHES[1].name}`,
        url: `${SITE_URL}${BRANCHES[1].branchUrl}`,
        image: `${SITE_URL}/assets/infrastructure/infra-15.jpg`,
        telephone: BRANCHES[1].phone,
        priceRange: "₹₹",
        parentOrganization: {
          "@id": `${SITE_URL}/#organization`,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: BRANCHES[1].streetAddress,
          addressLocality: BRANCHES[1].addressLocality,
          addressRegion: BRANCHES[1].addressRegion,
          postalCode: BRANCHES[1].postalCode,
          addressCountry: BRANCHES[1].addressCountry,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: BRANCHES[1].geo.latitude,
          longitude: BRANCHES[1].geo.longitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "11:00",
            closes: "20:00",
          },
        ],
        areaServed: BRANCHES[1].areaServed,
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="K-2embh5LRSWXteIGleNR8r4NkKtI0LHhG5zb7KrPZo"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredDataGraph),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body
        className="font-body antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100"
      >
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
