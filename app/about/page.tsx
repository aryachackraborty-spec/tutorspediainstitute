import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Quote,
  Target,
  Sparkles,
  Award,
  Lightbulb,
  Heart,
  Handshake,
  Shield,
  Sprout,
  GraduationCap,
} from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Tutorspedia Institute — our story, mission, vision, teaching philosophy, and the dedicated team behind our students' success.",
};

const values = [
  { icon: Award, title: "Excellence", desc: "We set the highest standards in teaching, learning, and student outcomes." },
  { icon: Lightbulb, title: "Innovation", desc: "We continuously evolve our methods to incorporate the best modern pedagogies." },
  { icon: Heart, title: "Empathy", desc: "Every student's journey is unique. We listen, understand, and support." },
  { icon: Handshake, title: "Integrity", desc: "Transparency, honesty, and trust form the bedrock of everything we do." },
  { icon: GraduationCap, title: "Research-Backed", desc: "Our programmes are grounded in neuroscience and evidence-based learning research." },
  { icon: Sprout, title: "Growth Mindset", desc: "We nurture a love for learning that extends far beyond the classroom." },
];

const milestones = [
  { year: "2014", event: "Tutorspedia Institute Founded", desc: "Started with a small batch of 20 students and a big dream." },
  { year: "2016", event: "First Board Toppers", desc: "Our students achieved district-level ranks in CBSE and WBSE exams." },
  { year: "2018", event: "Brain Stimulation Programme Launch", desc: "Introduced our flagship cognitive enhancement programme." },
  { year: "2020", event: "Digital Learning Integration", desc: "Seamlessly transitioned to hybrid learning during the pandemic." },
  { year: "2022", event: "Skill Development Wing", desc: "Launched Robotics, AI for Kids, Coding and Public Speaking programmes." },
  { year: "2024", event: "5000+ Students Milestone", desc: "Celebrating a decade of transforming young minds." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Tutorspedia"
        subtitle="A decade of transforming young minds through innovative, personalized education."
        backgroundImage="/assets/infrastructure/infra-01.jpg"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Story Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-950">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <SectionHeading
                badge="Our Story"
                title="More Than a Coaching Centre — "
                highlight="A Movement"
                centered={false}
              />
              <div className="space-y-4 mt-8 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  Tutorspedia Institute was born from a simple but powerful belief: <strong className="text-gray-900 dark:text-white">every child deserves education that truly works for them</strong>. In a system dominated by rote learning and exam pressure, our founders chose a different path.
                </p>
                <p>
                  Starting in 2014 with a small batch of 20 students, Tutorspedia has grown into one of the most trusted educational institutes in the region — serving 5000+ students across Nursery to Class 12, skill development, and language programmes.
                </p>
                <p>
                  Our secret? We see every student as an individual — not a roll number. We invest in understanding how they think, where they struggle, and what ignites their curiosity. Then we build learning experiences around that understanding.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className={`relative rounded-2xl overflow-hidden shadow-card ${n % 2 === 0 ? "aspect-square mt-8" : "aspect-[4/3]"}`}>
                  <Image
                    src={`/assets/infrastructure/infra-${String(n + 5).padStart(2, "0")}.jpg`}
                    alt={`Institute image ${n}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-14 sm:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <SectionHeading
            badge="What We Stand For"
            title="Mission, Vision & "
            highlight="Values"
          />
          <div className="mt-10 sm:mt-16 grid md:grid-cols-2 gap-5 sm:gap-8 mb-10 sm:mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-card border border-gray-100 dark:border-gray-700">
              <div className="w-14 h-14 rounded-2xl bg-primary-700 flex items-center justify-center mb-6 text-white">
                <Target size={26} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To provide accessible, high-quality, personalized education that nurtures every child&apos;s unique potential and prepares them for a rapidly evolving world — academically, professionally, and as human beings.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-card border border-gray-100 dark:border-gray-700">
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 text-white">
                <Sparkles size={26} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To be the most trusted and innovative educational institution in West Bengal, recognized globally for producing confident, capable, and compassionate leaders who shape the future.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-card border border-gray-100 dark:border-gray-700 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-950/50 text-primary-700 dark:text-primary-400 flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </div>
                  <h4 className="font-heading font-bold text-gray-900 dark:text-white mb-2">{v.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-14 sm:py-20 bg-white dark:bg-gray-950">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <SectionHeading badge="Founder's Message" title="A Message From " highlight="Our Founder" />
            <div className="mt-8 sm:mt-12 bg-primary-50/50 dark:bg-primary-950/20 rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-primary-100 dark:border-primary-800 relative">
              <Quote size={60} className="text-primary-200 dark:text-primary-800 absolute top-6 right-8" />
              <div className="grid md:grid-cols-[200px,1fr] gap-8 items-start">
                <div className="text-center">
                  <div className="relative w-36 h-36 mx-auto rounded-2xl overflow-hidden shadow-card mb-3">
                    <Image src="/assets/founder.jpg" alt="Founder" fill className="object-cover" />
                  </div>
                  <div className="font-bold text-gray-900 dark:text-white text-sm">Founder & Director</div>
                  <div className="text-primary-600 dark:text-primary-400 text-xs">Tutorspedia Institute</div>
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic mb-4">
                    &ldquo;When I started Tutorspedia, I made one promise to myself — that every child who walks through our doors would leave feeling more capable, more confident, and more curious than before.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic mb-4">
                    Education is not a transaction. It is a transformation. And transformation requires time, patience, the right tools, and above all — genuine belief in the student.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                    That belief drives us every single day.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <SectionHeading badge="Our Journey" title="A Decade of " highlight="Excellence" />
          <div className="mt-16 max-w-3xl mx-auto">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-8 mb-10 relative">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-primary-700 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-glow">
                    {m.year}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-primary-200 dark:bg-primary-800 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h4 className="font-heading font-bold text-gray-900 dark:text-white mb-1">{m.event}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="section-container">
          <SectionHeading
            badge="How We Teach"
            title="Modern Teaching "
            highlight="Methodology"
            subtitle="We combine time-tested educational principles with cutting-edge neuroscience to create learning experiences that stick."
          />
          <div className="mt-12 sm:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {[
              { num: "01", title: "Concept-Based Learning", desc: "Understanding over memorization. We ensure students grasp the 'why' behind every concept." },
              { num: "02", title: "Personalized Attention", desc: "Small batches mean every student gets individual guidance and customized feedback." },
              { num: "03", title: "Data-Driven Progress", desc: "Weekly assessments and detailed reports help us tailor teaching to each student's needs." },
              { num: "04", title: "Activity-Based Teaching", desc: "Hands-on experiments, case studies, and projects make abstract concepts tangible." },
              { num: "05", title: "Multi-Sensory Learning", desc: "Visual, auditory, and kinesthetic approaches ensure learning happens for every type of learner." },
              { num: "06", title: "Socratic Method", desc: "We ask questions, encourage inquiry, and build critical thinking through guided discussion." },
            ].map((m) => (
              <div key={m.title} className="border-t-2 border-primary-600/20 dark:border-primary-400/20 pt-6 transition-colors hover:border-primary-600 dark:hover:border-primary-400">
                <span className="text-xs font-bold tracking-widest text-primary-600 dark:text-primary-400 block mb-2 font-heading">{m.num}</span>
                <h4 className="font-heading font-bold text-gray-900 dark:text-white text-base mb-2">{m.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-gradient">
        <div className="section-container text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Become Part of the Tutorspedia Family?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Join thousands of students who have already transformed their academic journey.
          </p>
          <Link href="/admissions" className="btn-outline inline-flex !px-10 !py-4 text-base font-bold">
            Book Free Demo
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
