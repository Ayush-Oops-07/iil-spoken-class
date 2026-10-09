"use client";

import { site } from "@/config/site";
import { ArrowUpRight, Video, Users, Sparkles, CheckCircle2 } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function SocialSection() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#E7EAF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-xs font-bold text-pink-600 mb-3">
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>CONNECT ON INSTAGRAM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101828] tracking-tight">
            Follow Our Official Instagram Handles
          </h2>
          <p className="mt-3 text-base text-[#667085]">
            Daily English tips, reels, stage speeches, student interviews, and live updates straight from Gopalganj.
          </p>
        </div>

        {/* Dual Instagram Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Founder Profile Card */}
          <div className="group relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-white via-pink-50/20 to-purple-50/30 border border-[#E7EAF2] hover:border-pink-300 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full p-[2.5px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-md">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center p-1">
                    <InstagramIcon className="w-7 h-7 text-[#dc2743]" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-lg sm:text-xl font-bold text-[#101828]">
                      Aftab Alam
                    </h3>
                    <CheckCircle2 className="w-4 h-4 text-[#315CF5] fill-[#315CF5] text-white" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-pink-600 font-mono">
                    {site.instagramFounderHandle}
                  </p>
                  <span className="inline-block mt-0.5 text-[11px] font-medium text-gray-500">
                    Founder & Spoken English Mentor
                  </span>
                </div>
              </div>

              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-gray-500 bg-white px-2.5 py-1 rounded-full border border-gray-200">
                <Sparkles className="w-3 h-3 text-amber-500" />
                Mentor
              </span>
            </div>

            <p className="text-sm text-[#475467] mb-6">
              Watch Aftab Alam Sir share spoken English techniques, mindset coaching, podcast snippets, and personal guidance.
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <span className="text-xs font-semibold text-gray-500">
                100+ Motivating Reels & Clips
              </span>
              <a
                href={site.instagramFounder}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:opacity-95 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full shadow-md shadow-pink-500/20 transition-all hover:scale-105 active:scale-95"
              >
                <span>Follow Aftab Sir</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Institute Profile Card */}
          <div className="group relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 border border-[#E7EAF2] hover:border-indigo-300 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full p-[2.5px] bg-gradient-to-tr from-[#315CF5] via-[#4F46E5] to-[#25D366] shadow-md">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center p-1">
                    <InstagramIcon className="w-7 h-7 text-[#315CF5]" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-lg sm:text-xl font-bold text-[#101828]">
                      IIL Spoken Official
                    </h3>
                    <CheckCircle2 className="w-4 h-4 text-[#315CF5] fill-[#315CF5] text-white" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-[#315CF5] font-mono">
                    {site.instagramInstituteHandle}
                  </p>
                  <span className="inline-block mt-0.5 text-[11px] font-medium text-gray-500">
                    Official Academy Channel
                  </span>
                </div>
              </div>

              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-gray-500 bg-white px-2.5 py-1 rounded-full border border-gray-200">
                <Users className="w-3 h-3 text-[#315CF5]" />
                Campus
              </span>
            </div>

            <p className="text-sm text-[#475467] mb-6">
              Classroom roleplays, student debates, grammar drills, award days, and batch activities from our Gopalganj center.
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <span className="text-xs font-semibold text-gray-500">
                Daily Student Speaking Videos
              </span>
              <a
                href={site.instagramInstitute}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#315CF5] hover:bg-[#2547D0] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full shadow-md shadow-[#315CF5]/20 transition-all hover:scale-105 active:scale-95"
              >
                <span>Follow Institute</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
