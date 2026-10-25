import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Achievements & Affiliated Exam Centres | Tutorspedia Kolkata",
  description:
    "Explore our student board examination results, olympiad winners, and institutional certifications as an official examination centre in Kolkata.",
  alternates: {
    canonical: "/achievements",
  },
  openGraph: {
    title: "Student Achievements & Affiliated Exam Centres | Tutorspedia Kolkata",
    description:
      "Explore student board exam results, olympiad winners, and institutional certifications at Tutorspedia Institute Kolkata.",
    url: "/achievements",
  },
};

export default function AchievementsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
