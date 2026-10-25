import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert Faculty Directory | Experienced Teachers at Tutorspedia Institute",
  description:
    "Meet our team of 30+ passionate, qualified educators specializing in CBSE, ICSE, WBSE school coaching, psychology, languages, and STEM subjects in Kolkata.",
  alternates: {
    canonical: "/faculty",
  },
  openGraph: {
    title: "Expert Faculty Directory | Tutorspedia Institute Kolkata",
    description:
      "Meet our team of 30+ passionate, qualified educators specializing in CBSE, ICSE, WBSE school coaching and skill development.",
    url: "/faculty",
  },
};

export default function FacultyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
