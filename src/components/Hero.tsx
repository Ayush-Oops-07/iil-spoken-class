"use client";

import Image from "next/image";
import { site } from "@/config/site";
import { waLink, admissionMsg } from "@/lib/whatsapp";
import { 
  MessageCircle, 
  Play, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  Star,
  Award,
  ArrowRight
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-mesh-radial">
      {/* Subtle background ambient glow spheres */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#315CF5]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#25D366]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Copy & Conversion CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Editorial Brand Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E7EAF2] shadow-xs mb-6 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#315CF5] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#315CF5]">
                {site.short} — {site.name}
              </span>
              <span className="text-gray-300">·</span>
              <span className="text-xs font-medium text-[#667085] flex items-center gap-1">
                <MapPin className="w-3 h-3 text-red-500" />
                {site.city}
              </span>
            </div>

            {/* Expressive Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#101828] leading-[1.1] mb-6">
              Speak with <span className="text-[#315CF5] underline decoration-[#315CF5]/20 decoration-wavy underline-offset-8">Confidence</span>.
              <br />
              Grow with <span className="text-gradient-blue">Purpose</span>.
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-[#475467] leading-relaxed max-w-2xl mb-8 font-normal">
              Build stronger English communication skills, develop your personality, and take the next step towards becoming a more confident version of yourself.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <a
                href={waLink(admissionMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-white text-base font-bold px-7 py-4 rounded-2xl shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 gloss-reflection"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Enquire for Admission</span>
              </a>

              <a
                href="#reels"
                className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-gray-50 active:scale-[0.98] text-[#101828] text-base font-bold px-6 py-4 rounded-2xl border border-[#E7EAF2] hover:border-[#315CF5]/40 shadow-xs hover:shadow-md transition-all duration-300"
              >
                <Play className="w-4 h-4 text-[#315CF5] fill-[#315CF5]" />
                <span>Explore Our Reels</span>
              </a>
            </div>

            {/* Social Proof & Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#E7EAF2]/90">
              {site.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#101828] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold text-[#667085] mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Layered Authentic Imagery & Glass Cards (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg">
              {/* Outer Decorative Gradient Border */}
              <div className="relative rounded-3xl p-3 bg-gradient-to-b from-white via-white/80 to-[#EBF1FF] border border-[#E7EAF2] shadow-2xl">
                {/* Authentic Institute Photo */}
                <div className="relative w-full aspect-[4/4.2] rounded-2xl overflow-hidden bg-gray-100">
                  <Image
                    src="/img/group.jpg"
                    alt="Aftab Alam with student batch at Indian Institute of Language"
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover hover:scale-103 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Photo bottom caption */}
                  <div className="absolute bottom-3 inset-x-3 p-3 bg-black/40 backdrop-blur-md rounded-xl text-white text-xs font-medium flex items-center justify-between">
                    <span>Aftab Alam with IIL Students</span>
                    <span className="text-blue-300 font-semibold">Gopalganj, Bihar</span>
                  </div>
                </div>
              </div>

              {/* Floating Glass Pill 1: Batch Status */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-xl border border-white/80 p-3 sm:p-3.5 rounded-2xl shadow-xl flex items-center gap-3 animate-float">
                <span className="w-3 h-3 rounded-full bg-[#25D366] animate-ping shrink-0" />
                <div>
                  <p className="text-xs font-bold text-[#101828]">Admissions Open</p>
                  <p className="text-[11px] text-[#667085]">Morning & Evening Batches</p>
                </div>
              </div>

              {/* Floating Glass Pill 2: Founder Mentorship */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white/95 backdrop-blur-xl border border-white/80 p-3 sm:p-3.5 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#315CF5]">
                  <Image
                    src="/img/founder-crop.jpg"
                    alt="Aftab Alam"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <p className="text-xs font-bold text-[#101828]">Aftab Alam</p>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#315CF5]" />
                  </div>
                  <p className="text-[11px] text-[#667085]">Direct Mentorship</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
