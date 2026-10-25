import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Our Branches | Shyamnagar Road & Satgachi Centres Kolkata",
  description:
    "Get in touch with Tutorspedia Institute at our Dum Dum Park / Shyamnagar Road Head Office or Panache Green City Satgachi branch. Call +91 99037 90065 or visit us today.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Our Branches | Tutorspedia Institute Kolkata",
    description:
      "Get in touch with Tutorspedia Institute at our Dum Dum Park / Shyamnagar Road Head Office or Panache Green City Satgachi branch. Call +91 99037 90065.",
    url: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
