import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Classrooms & Campus Infrastructure | Tutorspedia Kolkata",
  description:
    "Explore our modern air-conditioned learning spaces, digital smart boards, robotics lab, library, and child-safe facilities in Dum Dum Park and Satgachi.",
  alternates: {
    canonical: "/infrastructure",
  },
  openGraph: {
    title: "Smart Classrooms & Campus Infrastructure | Tutorspedia Kolkata",
    description:
      "Explore our modern air-conditioned learning spaces, digital smart boards, robotics lab, and child-safe facilities.",
    url: "/infrastructure",
  },
};

export default function InfrastructureLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
