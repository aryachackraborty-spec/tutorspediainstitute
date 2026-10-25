import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admission & Enrollment | Nursery to Class 12 & Skill Batches Kolkata",
  description:
    "Apply online for academic batches, brain stimulation programmes, and skill development classes at Tutorspedia Institute. Book a free demo class today.",
  alternates: {
    canonical: "/admissions",
  },
  openGraph: {
    title: "Admission & Enrollment | Tutorspedia Institute Kolkata",
    description:
      "Apply online for academic batches, brain stimulation programmes, and skill development classes at Tutorspedia Institute.",
    url: "/admissions",
  },
};

export default function AdmissionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
