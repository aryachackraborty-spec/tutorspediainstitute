import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import OfferingsSection from "@/components/home/OfferingsSection";
import CoursesPreview from "@/components/home/CoursesPreview";
import BrainStimulation from "@/components/home/BrainStimulation";
import FacultyPreview from "@/components/home/FacultyPreview";
import AchievementsSection from "@/components/home/AchievementsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import AdmissionCTA from "@/components/home/AdmissionCTA";
import { SITE_NAME, SITE_DESCRIPTION, SITE_TAGLINE } from "@/constants/data";

export const metadata: Metadata = {
  title: `${SITE_NAME} | ${SITE_TAGLINE}`,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <OfferingsSection />
      <CoursesPreview />
      <BrainStimulation />
      <FacultyPreview />
      <AchievementsSection />
      <TestimonialsSection />
      <GalleryPreview />
      <AdmissionCTA />
    </>
  );
}
