import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, SITE_TAGLINE, CONTACT } from "@/constants/data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "best coaching centre Kolkata",
    "CBSE coaching",
    "ICSE coaching",
    "WBSE coaching",
    "brain stimulation programme",
    "abacus classes",
    "robotics for kids",
    "public speaking",
    "AI for kids",
    "skill development",
    "tutorspedia",
    "nursery to class 12",
    "West Bengal coaching",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/assets/infrastructure/infra-01.jpg",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
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
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: SITE_NAME,
              description: SITE_DESCRIPTION,
              url: SITE_URL,
              logo: `${SITE_URL}/assets/logo.png`,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Room No. 110, 1st Floor, Diamond Arcade, 1/72 Jessore Road, 112 Shyam Nagar Rd, beside Diamond Plaza, Bangur",
                addressLocality: "Kolkata",
                addressRegion: "West Bengal",
                postalCode: "700055",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: CONTACT.phone,
                email: CONTACT.email,
                contactType: "admissions",
              },
              sameAs: [
                "https://facebook.com/tutorspedia",
                "https://instagram.com/tutorspedia",
                "https://youtube.com/@tutorspedia",
              ],
            }),
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
