import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses & Programmes | CBSE, ICSE, Abacus, AI & Robotics in Kolkata",
  description:
    "Explore comprehensive academic coaching (Nursery to Class 12 for CBSE, ICSE, WBSE), STEM robotics, abacus mental maths, and language classes at Tutorspedia Institute Kolkata.",
  alternates: {
    canonical: "/courses",
  },
  openGraph: {
    title: "Courses & Programmes | Tutorspedia Institute Kolkata",
    description:
      "Explore comprehensive academic coaching, STEM robotics, abacus mental maths, and language classes at Tutorspedia Institute Kolkata.",
    url: "/courses",
  },
};

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
