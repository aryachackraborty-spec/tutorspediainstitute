// Navigation types
export interface NavItem {
  label: string;
  href: string;
  children?: {
    group: string;
    items: { label: string; href: string }[];
  }[];
}

// Course types
export interface Course {
  id: string;
  category: "academic" | "skill" | "language";
  title: string;
  description: string;
  duration: string;
  ageGroup: string;
  image: string;
  boards: string[];
  benefits: string[];
  featured: boolean;
}

// Faculty types
export interface FacultyMember {
  id: number;
  name: string;
  qualification: string;
  experience: string;
  subjects: string[];
  achievements: string[];
  photo: string;
  bio: string;
}

// Testimonial types
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar: string;
  video?: string;
}

// Gallery types
export interface GalleryImage {
  id: number;
  src: string;
  category: "infrastructure" | "activities" | "events" | "photos" | "videos";
  alt: string;
}

// Stats types
export interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

// Why Choose Us
export interface Feature {
  icon: string;
  title: string;
  desc: string;
  color: string;
}

// Brain stimulation feature
export interface BrainFeature {
  icon: string;
  title: string;
  desc: string;
  color: string;
}

// Admission step
export interface AdmissionStep {
  step: string;
  title: string;
  desc: string;
  icon: string;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface AdmissionFormData {
  studentName: string;
  parentName: string;
  phone: string;
  email: string;
  class: string;
  board: string;
  course: string;
  message: string;
}
