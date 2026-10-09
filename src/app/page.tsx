import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureStrip from "@/components/FeatureStrip";
import CoursesSection from "@/components/CoursesSection";
import Reels from "@/components/Reels";
import Gallery from "@/components/Gallery";
import FounderSection from "@/components/FounderSection";
import SocialSection from "@/components/SocialSection";
import MapSection from "@/components/MapSection";
import Enquiry from "@/components/Enquiry";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { site } from "@/config/site";
import { waLink, admissionMsg } from "@/lib/whatsapp";
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  Navigation, 
  Sparkles,
  CheckCircle2
} from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-[#315CF5] selection:text-white">
      {/* 1. Header & Navigation */}
      <Navbar />

      <main id="top" className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Core Competency Strip */}
        <FeatureStrip />

        {/* 4. Courses & Learning Tracks */}
        <CoursesSection />

        {/* 5. Auto-Scrolling Classroom Reels */}
        <Reels />

        {/* 6. Campus Photo Gallery & Lightbox */}
        <Gallery />

        {/* 7. Founder Profile: Aftab Alam */}
        <FounderSection />

        {/* 8. Instagram Social Showcase */}
        <SocialSection />

        {/* 9. Interactive Google Maps & Campus Location */}
        <MapSection />

        {/* 10. Bottom Enquiry & Admission Section */}
        <section id="contact" className="py-20 lg:py-28 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Heading & Contact Info (5 cols) */}
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25D366]/10 text-xs font-bold text-[#128C7E] mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>START YOUR TRANSFORMATION</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101828] leading-[1.15]">
                  Your Next Step Starts with a Conversation.
                </h2>

                <p className="mt-4 text-base sm:text-lg text-[#475467] leading-relaxed">
                  Have questions about English learning, batch timings, or admissions? Connect with the IIL team to learn more and secure your seat.
                </p>

                {/* Info Cards */}
                <div className="mt-8 space-y-4">
                  <div className="p-4 rounded-2xl bg-[#F8F9FC] border border-[#E7EAF2] flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <strong className="block text-[#101828]">Center Location</strong>
                      <span className="text-[#667085]">{site.address}</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F8F9FC] border border-[#E7EAF2] flex items-start gap-3.5">
                    <Clock className="w-5 h-5 text-[#315CF5] shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <strong className="block text-[#101828]">Class Timings</strong>
                      <span className="text-[#667085]">{site.timings}</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F8F9FC] border border-[#E7EAF2] flex items-start gap-3.5">
                    <Phone className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <strong className="block text-[#101828]">Direct Contact / WhatsApp</strong>
                      <span className="text-[#667085]">{site.phoneDisplay}</span>
                    </div>
                  </div>
                </div>

                {/* External Links */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#101828] text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl border border-[#E7EAF2] shadow-xs transition-colors"
                  >
                    <Navigation className="w-4 h-4 text-[#315CF5]" />
                    <span>Get Directions</span>
                  </a>

                  <a
                    href="https://www.instagram.com/iilbyaftabalam/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#101828] text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl border border-[#E7EAF2] shadow-xs transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4 text-pink-500" />
                    <span>Instagram (@iilbyaftabalam)</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Conversion Enquiry Form (7 cols) */}
              <div className="lg:col-span-7">
                <Enquiry />
              </div>
            </div>
          </div>
        </section>

        {/* 11. FAQ Accordion Section */}
        <FaqSection />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* 13. Floating WhatsApp Interaction Pill */}
      <FloatingWhatsApp />
    </div>
  );
}
