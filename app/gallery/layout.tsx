import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campus Gallery & Activities | Tutorspedia Institute Kolkata",
  description:
    "View photos of our classroom sessions, robotics workshops, abacus training, student events, and learning activities across Tutorspedia Kolkata campuses.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Campus Gallery & Activities | Tutorspedia Institute Kolkata",
    description:
      "View photos of classroom sessions, robotics workshops, abacus training, student events, and learning activities.",
    url: "/gallery",
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
