"use client";

import { courses } from "@/config/site";
import { waLink, courseMsg } from "@/lib/whatsapp";
import { 
  BookOpen, 
  Sparkles, 
  Check, 
  MessageCircle, 
  ArrowRight,
  GraduationCap,
  Layers,
  Award,
  Mic,
  Briefcase,
  Presentation
} from "lucide-react";

export default function CoursesSection() {
  const getCourseIcon = (id: string) => {
    switch (id) {
      case "basic-grammar":
        return <BookOpen className="w-5 h-5 text-[#315CF5]" />;
      case "advance-grammar":
        return <Layers className="w-5 h-5 text-indigo-600" />;
      case "public-speaking":
        return <Mic className="w-5 h-5 text-emerald-600" />;
      case "vocabulary":
        return <Award className="w-5 h-5 text-amber-600" />;
      case "job-interview":
        return <Briefcase className="w-5 h-5 text-purple-600" />;
      case "presentation-skill":
        return <Presentation className="w-5 h-5 text-rose-600" />;
      default:
        return <GraduationCap className="w-5 h-5 text-[#315CF5]" />;
    }
  };

  return (
    <section id="courses" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#315CF5]/10 text-xs font-bold text-[#315CF5] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PRACTICAL LEARNING TRACKS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101828]">
              Find Your Path to Better Communication
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#667085]">
              Explore learning opportunities and contact IIL for current course details, batch schedules, and admission information.
            </p>
          </div>

          <div className="shrink-0">
            <span className="inline-block text-xs font-bold text-gray-500 bg-gray-100 px-3.5 py-1.5 rounded-full">
              ⚡ Offline Batches in Gopalganj
            </span>
          </div>
        </div>

        {/* 6-Card Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group rounded-3xl p-6 sm:p-8 bg-white border border-[#E7EAF2] hover:border-[#315CF5]/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Accent glow */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#315CF5]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header with Icon & Badge */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#315CF5]/10 transition-all duration-300">
                    {getCourseIcon(course.id)}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 group-hover:bg-[#315CF5]/10 group-hover:text-[#315CF5] transition-colors">
                    {course.badge}
                  </span>
                </div>

                <div className="mb-3">
                  <span className="text-xs font-bold text-[#315CF5]">
                    {course.tagline}
                  </span>
                  <h3 className="text-xl font-bold text-[#101828] group-hover:text-[#315CF5] transition-colors mt-0.5">
                    {course.title}
                  </h3>
                </div>

                <p className="text-sm text-[#475467] leading-relaxed mb-6">
                  {course.text}
                </p>

                {/* Key Syllabus Bullet Highlights */}
                <div className="space-y-2 mb-6 pt-4 border-t border-gray-100">
                  {course.topics.map((topic) => (
                    <div key={topic} className="flex items-center gap-2 text-xs font-medium text-gray-600">
                      <Check className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action CTA */}
              <div className="pt-4 border-t border-gray-100">
                <a
                  href={waLink(courseMsg(course.title))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#F8F9FC] hover:bg-[#25D366] text-[#101828] hover:text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl border border-[#E7EAF2] hover:border-transparent transition-all duration-200 group-hover:shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-white group-hover:fill-white transition-colors" />
                  <span>Enquire on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
