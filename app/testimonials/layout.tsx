import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parent & Student Reviews | Tutorspedia Institute Kolkata",
  description:
    "Read genuine reviews and experiences from parents and students who achieved academic excellence and personal growth with Tutorspedia Institute.",
  alternates: {
    canonical: "/testimonials",
  },
  openGraph: {
    title: "Parent & Student Reviews | Tutorspedia Institute Kolkata",
    description:
      "Read genuine reviews from parents and students of Tutorspedia Institute Kolkata.",
    url: "/testimonials",
  },
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
