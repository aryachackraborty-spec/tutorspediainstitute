// ─── Brand & Site Info ──────────────────────────────────────────────
export const SITE_NAME = "Tutorspedia Institute";
export const SITE_TAGLINE = "One Roof Solution for Nursery to Class 12 & Skill Development";
export const SITE_DESCRIPTION =
  "Tutorspedia Institute offers premium coaching for Nursery to Class 12 (CBSE, ICSE, WBSE, ISC), Skill Development, Brain Stimulation Programmes, and Language Courses. Join 5000+ students and experience personalized, concept-based learning.";
export const SITE_URL = "https://tutorspedia.in";

// ─── Contact Details ─────────────────────────────────────────────────
export const CONTACT = {
  phone: "+91 99037 90065",
  phoneHref: "tel:+919903790065",
  whatsapp: "+91 99037 90065",
  whatsappHref: "https://wa.me/919903790065",
  email: "info@tutorspedia.in",
  address: "Room No. 110, 1st Floor, Diamond Arcade, 1/72 Jessore Road, 112 Shyam Nagar Rd, beside Diamond Plaza, Bangur, Kolkata, West Bengal 700055",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.475254921644!2d88.409893!3d22.617415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027668efebfa3b%3A0x4a4768ed1e5e01c7!2sDiamond%20Arcade!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  officeHours: "Mon–Sun: 8:00 AM – 8:00 PM",
  social: {
    facebook: "https://facebook.com/tutorspedia",
    instagram: "https://instagram.com/tutorspedia",
    youtube: "https://youtube.com/@tutorspedia",
    twitter: "https://twitter.com/tutorspedia",
  },
};

// ─── Navigation ──────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Courses",
    href: "/courses",
    children: [
      {
        group: "Academic",
        items: [
          { label: "Primary (Nursery–Class 5)", href: "/courses#primary" },
          { label: "Secondary (Class 6–10)", href: "/courses#secondary" },
          { label: "Higher Secondary (Class 11–12)", href: "/courses#higher" },
          { label: "CBSE Coaching", href: "/courses#cbse" },
          { label: "ICSE Coaching", href: "/courses#icse" },
          { label: "WBSE Coaching", href: "/courses#wbse" },
        ],
      },
      {
        group: "Skill Development",
        items: [
          { label: "AI for Kids", href: "/courses#ai" },
          { label: "Robotics", href: "/courses#robotics" },
          { label: "Public Speaking", href: "/courses#speaking" },
          { label: "Chess", href: "/courses#chess" },
          { label: "Abacus & Mental Maths", href: "/courses#abacus" },
          { label: "Digital Marketing", href: "/courses#digital" },
          { label: "Coding", href: "/courses#coding" },
        ],
      },
      {
        group: "Language",
        items: [
          { label: "English", href: "/courses#english" },
          { label: "Hindi", href: "/courses#hindi" },
          { label: "Bengali", href: "/courses#bengali" },
          { label: "French", href: "/courses#french" },
          { label: "German", href: "/courses#german" },
          { label: "Sanskrit", href: "/courses#sanskrit" },
        ],
      },
    ],
  },
  { label: "Faculty", href: "/faculty" },
  { label: "Gallery", href: "/gallery" },
  { label: "Achievements", href: "/achievements" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

// ─── Statistics / Counters ────────────────────────────────────────────
export const STATS = [
  { value: 5000, suffix: "+", label: "Students Trained", icon: "Users" },
  { value: 10, suffix: "+", label: "Years of Experience", icon: "Calendar" },
  { value: 30, suffix: "+", label: "Courses Offered", icon: "BookOpen" },
  { value: 30, suffix: "+", label: "Expert Faculty", icon: "GraduationCap" },
  { value: 100, suffix: "%", label: "Parent Satisfaction", icon: "Heart" },
  { value: 500, suffix: "+", label: "Competition Winners", icon: "Trophy" },
];

export const WHY_CHOOSE_US = [
  {
    icon: "GraduationCap",
    title: "Experienced Faculty",
    desc: "Highly qualified teachers with years of teaching excellence and subject mastery.",
    color: "bg-blue-600",
  },
  {
    icon: "Monitor",
    title: "Smart Classrooms",
    desc: "Tech-enabled interactive classrooms with projectors, digital boards and modern tools.",
    color: "bg-teal-600",
  },
  {
    icon: "Users",
    title: "Small Batch Size",
    desc: "Limited students per batch ensures personalized attention for every learner.",
    color: "bg-purple-600",
  },
  {
    icon: "Target",
    title: "Weekly Assessments",
    desc: "Regular tests and feedback help track progress and identify improvement areas.",
    color: "bg-red-600",
  },
  {
    icon: "Trophy",
    title: "Olympiad Preparation",
    desc: "Dedicated training for national and international olympiads and competitions.",
    color: "bg-amber-500",
  },
  {
    icon: "FileText",
    title: "Worksheet Practice",
    desc: "Curated worksheets and practice material for concept reinforcement.",
    color: "bg-rose-500",
  },
  {
    icon: "Brain",
    title: "Brain Stimulation",
    desc: "Unique blindfold & memory programmes to boost cognitive performance.",
    color: "bg-indigo-600",
  },
  {
    icon: "Mic",
    title: "Public Speaking",
    desc: "Build confidence and communication skills through guided speaking sessions.",
    color: "bg-sky-600",
  },
  {
    icon: "Cpu",
    title: "AI & Digital Skills",
    desc: "Future-ready training in AI, robotics, coding and digital tools.",
    color: "bg-emerald-600",
  },
  {
    icon: "MessageCircle",
    title: "Doubt Solving",
    desc: "Dedicated doubt-clearing sessions — no question left unanswered.",
    color: "bg-fuchsia-600",
  },
  {
    icon: "CalendarCheck",
    title: "Parent Meetings",
    desc: "Regular parent-teacher meetings to keep families informed and engaged.",
    color: "bg-indigo-500",
  },
  {
    icon: "Compass",
    title: "Career Guidance",
    desc: "Expert counseling on streams, colleges and future career pathways.",
    color: "bg-green-600",
  },
  {
    icon: "Building",
    title: "Modern Infrastructure",
    desc: "Safe, clean, air-conditioned learning spaces with a library and activity rooms.",
    color: "bg-slate-600",
  },
  {
    icon: "Star",
    title: "Concept-Based Learning",
    desc: "Deep understanding over rote learning — our method ensures concepts stick.",
    color: "bg-yellow-500",
  },
];

// ─── Courses ──────────────────────────────────────────────────────────
export const COURSES = [
  // Academic
  {
    id: "nursery",
    category: "academic",
    title: "Nursery & KG",
    description:
      "A playful, activity-based early education programme focusing on phonics, numbers, drawing, and cognitive development.",
    duration: "Full Academic Year",
    ageGroup: "2.5 – 5 years",
    image: "/assets/nursery-kg.jpg",
    boards: ["Activity Based"],
    benefits: ["Phonics & Reading Readiness", "Number Concepts", "Art & Craft", "Social Skills"],
    featured: true,
  },
  {
    id: "primary",
    category: "academic",
    title: "Primary (Class 1–5)",
    description:
      "Strong foundational coaching in English, Maths, EVS and Science with concept clarity and worksheet practice.",
    duration: "Full Academic Year",
    ageGroup: "6 – 11 years",
    image: "/assets/primary-class.jpg",
    boards: ["CBSE", "ICSE", "WBSE"],
    benefits: ["Concept-Based Teaching", "Regular Tests", "Worksheet Practice", "Individual Attention"],
    featured: true,
  },
  {
    id: "secondary",
    category: "academic",
    title: "Secondary (Class 6–10)",
    description:
      "Comprehensive coaching for all subjects — Science, Maths, Social Studies, English — with board exam preparation.",
    duration: "Full Academic Year",
    ageGroup: "12 – 16 years",
    image: "/assets/infrastructure/infra-05.jpg",
    boards: ["CBSE", "ICSE", "WBSE"],
    benefits: ["Board Exam Prep", "Mock Tests", "Case Study Learning", "Doubt Sessions"],
    featured: true,
  },
  {
    id: "higher",
    category: "academic",
    title: "Higher Secondary (Class 11–12)",
    description:
      "Expert coaching for Science, Commerce and Arts streams with focus on board marks and entrance exams.",
    duration: "Full Academic Year",
    ageGroup: "17 – 18 years",
    image: "/assets/higher-secondary-class.jpg",
    boards: ["CBSE", "ISC", "WBSE"],
    benefits: ["Stream Coaching", "Entrance Prep", "Career Guidance", "Expert Faculty"],
    featured: true,
  },
  // Skill Development
  {
    id: "ai",
    category: "skill",
    title: "AI for Kids",
    description:
      "Hands-on introduction to Artificial Intelligence concepts, machine learning basics, and fun AI projects.",
    duration: "3 Months",
    ageGroup: "8 – 15 years",
    image: "/assets/infrastructure/infra-09.jpg",
    boards: [],
    benefits: ["AI Concepts", "Hands-on Projects", "Future Ready", "Certificate"],
    featured: true,
  },
  {
    id: "robotics",
    category: "skill",
    title: "Robotics",
    description:
      "Build and program robots using LEGO kits, Arduino and sensors. Develop logical thinking and engineering skills.",
    duration: "3 Months",
    ageGroup: "8 – 16 years",
    image: "/assets/robotics-class.png",
    boards: [],
    benefits: ["Hands-on Building", "Programming Basics", "Competition Ready", "STEM Skills"],
    featured: true,
  },
  {
    id: "abacus",
    category: "skill",
    title: "Abacus & Mental Maths",
    description:
      "Speed up mental calculations using the ancient Japanese abacus technique. Build number confidence.",
    duration: "6 Months",
    ageGroup: "5 – 13 years",
    image: "/assets/abacus-maths.png",
    boards: [],
    benefits: ["Speed Maths", "Concentration", "Memory Boost", "International Levels"],
    featured: true,
  },
  {
    id: "chess",
    category: "skill",
    title: "Chess",
    description:
      "Strategic thinking and patience through chess — from beginner rules to advanced tournament play.",
    duration: "3 Months",
    ageGroup: "6 – 18 years",
    image: "/assets/chess-class.jpg",
    boards: [],
    benefits: ["Strategic Thinking", "Patience", "Tournament Prep", "IQ Development"],
    featured: true,
  },
  {
    id: "speaking",
    category: "skill",
    title: "Public Speaking",
    description:
      "Overcome stage fear and develop powerful communication skills through guided speaking, debates and presentations.",
    duration: "2 Months",
    ageGroup: "8 – 18 years",
    image: "/assets/public-speaking-v2.png",
    boards: [],
    benefits: ["Confidence Building", "Debate Skills", "Presentation", "Leadership"],
    featured: true,
  },
  {
    id: "coding",
    category: "skill",
    title: "Coding",
    description:
      "Learn programming from scratch — Scratch, Python, HTML/CSS and web development fundamentals.",
    duration: "3 Months",
    ageGroup: "8 – 18 years",
    image: "/assets/coding-lab.jpg",
    boards: [],
    benefits: ["Scratch/Python", "Web Basics", "Problem Solving", "Project Building"],
    featured: true,
  },
  // Language
  {
    id: "english",
    category: "language",
    title: "Spoken English",
    description:
      "Conversational English with grammar, pronunciation, vocabulary and fluency building through daily practice.",
    duration: "3 Months",
    ageGroup: "All Ages",
    image: "/assets/spoken-english.png",
    boards: [],
    benefits: ["Fluency", "Grammar", "Vocabulary", "Confidence"],
    featured: true,
  },
  {
    id: "french",
    category: "language",
    title: "French",
    description:
      "Beginner to intermediate French — reading, writing, speaking and listening with cultural context.",
    duration: "6 Months",
    ageGroup: "All Ages",
    image: "/assets/french-course.png",
    boards: ["DELF Prep"],
    benefits: ["A1–B1 Levels", "DELF Prep", "Cultural Learning", "Certificate"],
    featured: true,
  },
];

// ─── Faculty ──────────────────────────────────────────────────────────
export const FACULTY = [
  {
    id: 1,
    name: "Ms. Shovona Bhattacharya Moulik",
    qualification: "Masters in Clinical Psychology, Registered PhD Scholar",
    experience: "7+ Years",
    subjects: ["Psychology", "Class 11"],
    achievements: ["Registered PhD Scholar", "7 Years College Teaching Experience"],
    photo: "/assets/faculty/faculty-13.jpg",
    bio: "A registered PhD scholar and clinical psychologist with 7 years of college teaching experience, specializing in Clinical Psychology and student guidance.",
  },
  {
    id: 2,
    name: "Ms. Rupsha Santra",
    qualification: "Masters and B.Ed in English Language and Literature",
    experience: "10 Years",
    subjects: ["English Language", "English Literature", "Class 11", "Class 12"],
    achievements: ["10 Years School Experience", "ICSE & CBSE Board Specialist"],
    photo: "/assets/faculty/faculty-14-v2.jpg",
    bio: "An expert English educator with a decade of experience teaching in leading ICSE and CBSE schools.",
  },
  {
    id: 3,
    name: "Mr. Arunava Sarkar",
    qualification: "B.Sc. Chemistry Hons",
    experience: "20+ Years",
    subjects: ["Chemistry", "Physics"],
    achievements: ["20+ Years Mentorship", "Board Prep Specialist"],
    photo: "/assets/faculty/faculty-15-v2.jpg",
    bio: "Highly experienced science educator specializing in Chemistry and Physics coaching for secondary and higher secondary levels.",
  },
  {
    id: 4,
    name: "Ms. Pushpa Prajapati",
    qualification: "M.A. in English",
    experience: "18 Years",
    subjects: ["English (Grades 4–10 & Graduate)", "Social Studies (Grades 8–10)"],
    achievements: ["18 Years Teaching Experience", "English Honours Specialist"],
    photo: "/assets/faculty/faculty-16.jpg",
    bio: "Accomplished educator with 18 years of experience teaching English Literature, Language, and Social Studies from Grade 4 through Graduate level English Honours.",
  },
  {
    id: 5,
    name: "Mr. Preetam Mukherjee",
    qualification: "B.Sc. Physics Hons (Calcutta University)",
    experience: "14 Years",
    subjects: ["Physics"],
    achievements: ["14 Years Mentorship", "Calcutta University Graduate"],
    photo: "/assets/faculty/faculty-17.jpg",
    bio: "Dedicated Physics educator with 14 years of experience guiding students through fundamental and advanced Physics concepts.",
  },
  {
    id: 6,
    name: "Ms. Pratima Shaw",
    qualification: "B.Ed in Hindi (Jain College)",
    experience: "3 Years",
    subjects: ["Hindi"],
    achievements: ["B.Ed Specialist in Hindi", "Concept-Based Language Mentorship"],
    photo: "/assets/faculty/faculty-18.jpg",
    bio: "Passionate Hindi educator specializing in Hindi grammar, literature, and language development for school students.",
  },
  {
    id: 7,
    name: "Mr. Dinesh Kumar Gupta",
    qualification: "B.Com (Calcutta University), CA Final Group 1",
    experience: "40+ Years",
    subjects: ["Accountancy"],
    achievements: ["40+ Years Teaching Experience", "CA Final Grp 1 Specialist"],
    photo: "/assets/faculty/faculty-19.jpg",
    bio: "Senior Accountancy educator with over 40 years of teaching excellence, guiding Commerce students towards academic and professional mastery.",
  },
  {
    id: 8,
    name: "Ms. Jayashree Chatterjee",
    qualification: "M.Sc. in Botany",
    experience: "12 Years",
    subjects: ["Biology (Class 11 & 12 Boards)", "NEET Preparation"],
    achievements: ["NEET & Board Exam Specialist", "12 Years Biology Mentorship"],
    photo: "/assets/faculty/faculty-20.jpg",
    bio: "Expert Biology mentor specializing in Class 11-12 Board preparation and competitive NEET coaching.",
  },
  {
    id: 9,
    name: "Mr. Deepak Kumar Shaw",
    qualification: "B.Com (Hons.) from Calcutta University",
    experience: "25+ Years",
    subjects: ["Economics"],
    achievements: ["25+ Years Mentorship", "Economics Specialist"],
    photo: "/assets/faculty/faculty-21.jpg",
    bio: "Veteran Economics educator with 25+ years of experience simplifying micro & macro economics for secondary and higher secondary learners.",
  },
  {
    id: 10,
    name: "Ms. Debadrita Ghosh",
    qualification: "M.Sc. (Calcutta University)",
    experience: "10 Years",
    subjects: ["Science", "Biology"],
    achievements: ["M.Sc. Calcutta University", "10 Years Science Mentorship"],
    photo: "/assets/faculty/faculty-22.jpg",
    bio: "Experienced Science & Biology mentor dedicated to concept-driven learning for school students.",
  },
  {
    id: 11,
    name: "Ms. Akshita Jaiswal",
    qualification: "B.Com (Hons.) Computer Application, FA Tally",
    experience: "10+ Years",
    subjects: ["Junior Section (All Subjects & Phonics)", "Class 1–3 Foundation"],
    achievements: ["Phonics & Early Learning Expert", "10+ Years Foundation Coaching"],
    photo: "/assets/faculty/faculty-23.jpg",
    bio: "Early education and phonics specialist mentoring junior section students through Class 3 across all core subjects.",
  },
  {
    id: 12,
    name: "Ms. Kalpita Banerjee",
    qualification: "Professional Communication & Soft Skills Trainer",
    experience: "15+ Years",
    subjects: ["Public Speaking", "English Communication Skills", "Interview Skills"],
    achievements: ["15+ Years Training Experience", "Public Speaking & Personality Mentor"],
    photo: "/assets/faculty/faculty-24.jpg",
    bio: "Veteran communication trainer with 15+ years guiding young professionals and school students in public speaking, English communication, and interview skills.",
  },
  {
    id: 13,
    name: "Mr. Debargha Sur",
    qualification: "Ph.D. Scholar (ISI Kolkata), Dept of Mathematics",
    experience: "6 Years",
    subjects: ["Mathematics"],
    achievements: ["GATE AIR 9 & 54", "CSIR NET JRF (2x)", "NBHM / TIFR / CMI Fellow"],
    photo: "/assets/faculty/faculty-25.jpg",
    bio: "Distinguished Mathematics educator and ISI Kolkata PhD Scholar with top national ranks (GATE AIR 9, CSIR NET JRF 2x), specializing in advanced Mathematics mentoring.",
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sunita Banerjee",
    role: "Parent of Class 10 Student",
    rating: 5,
    text: "Tutorspedia completely transformed my daughter's confidence and academic performance. She scored 94% in her boards! The personal attention given by every teacher is remarkable.",
    avatar: "/assets/faculty/faculty-07.jpg",
  },
  {
    id: 2,
    name: "Rohit Chatterjee",
    role: "Parent of Class 8 Student",
    rating: 5,
    text: "The Brain Stimulation Programme is simply amazing. My son's memory and concentration have improved dramatically. I can see the difference in his school performance every week.",
    avatar: "/assets/faculty/faculty-08.jpg",
  },
  {
    id: 3,
    name: "Priya Gupta",
    role: "Student, Class 12 Science",
    rating: 5,
    text: "The faculty here are incredible. They don't just teach — they mentor you. I got into my dream college after coaching here. Thank you Tutorspedia!",
    avatar: "/assets/faculty/faculty-09.jpg",
  },
  {
    id: 4,
    name: "Amit Sarkar",
    role: "Parent of Class 5 Student",
    rating: 5,
    text: "My child started abacus classes and within 3 months, her calculation speed increased 5x. The teachers are patient and encouraging. Highly recommended!",
    avatar: "/assets/faculty/faculty-10.jpg",
  },
  {
    id: 5,
    name: "Meera Devi",
    role: "Parent of Class 3 Student",
    rating: 5,
    text: "The environment is so warm and nurturing. My son loves coming to Tutorspedia every day. The blend of academics and skill development is unique and very effective.",
    avatar: "/assets/faculty/faculty-11.jpg",
  },
  {
    id: 6,
    name: "Arjun Singh",
    role: "Student, Class 9 CBSE",
    rating: 5,
    text: "I used to hate Mathematics. After joining Tutorspedia, I actually look forward to Maths class! The teachers make it so easy to understand concepts.",
    avatar: "/assets/faculty/faculty-12.jpg",
  },
];

// ─── Gallery ──────────────────────────────────────────────────────────
export const GALLERY_IMAGES = Array.from({ length: 21 }, (_, i) => ({
  id: i + 1,
  src: `/assets/infrastructure/infra-${String(i + 1).padStart(2, "0")}.jpg`,
  category: i < 8 ? "infrastructure" : i < 14 ? "activities" : "events",
  alt: `Tutorspedia Institute - ${i < 8 ? "Classroom & Infrastructure" : i < 14 ? "Student Activities" : "Events & Programmes"}`,
}));

// ─── Brain Stimulation Features ───────────────────────────────────────
export const BRAIN_FEATURES = [
  {
    icon: "Eye",
    title: "Blind Fold Activity",
    desc: "Heighten sensory awareness and brain activation through guided blindfold exercises.",
    color: "bg-purple-600",
  },
  {
    icon: "Zap",
    title: "Memory Enhancement",
    desc: "Science-backed memory techniques to improve retention and recall speed.",
    color: "bg-amber-500",
  },
  {
    icon: "Focus",
    title: "Concentration Training",
    desc: "Focused exercises to increase attention span and eliminate distractions.",
    color: "bg-blue-600",
  },
  {
    icon: "Lightbulb",
    title: "Logical Thinking",
    desc: "Problem-solving challenges that develop analytical and critical thinking.",
    color: "bg-teal-600",
  },
  {
    icon: "Brain",
    title: "Cognitive Development",
    desc: "Holistic brain training spanning left and right brain functions.",
    color: "bg-rose-500",
  },
  {
    icon: "Sparkles",
    title: "Visual Learning",
    desc: "Mind mapping and visual techniques to make learning faster and more effective.",
    color: "bg-indigo-600",
  },
];

// ─── Admission Steps ──────────────────────────────────────────────────
export const ADMISSION_STEPS = [
  {
    step: "01",
    title: "Book Free Demo",
    desc: "Attend a complimentary demo class to experience our teaching methodology firsthand.",
    icon: "Calendar",
  },
  {
    step: "02",
    title: "Counseling Session",
    desc: "Our expert counselors assess your child's needs and recommend the ideal programme.",
    icon: "MessageSquare",
  },
  {
    step: "03",
    title: "Course Selection",
    desc: "Choose from academic, skill development or language courses based on goals.",
    icon: "BookOpen",
  },
  {
    step: "04",
    title: "Enrollment & Begin",
    desc: "Complete enrollment formalities and start your transformative learning journey.",
    icon: "CheckCircle",
  },
];
