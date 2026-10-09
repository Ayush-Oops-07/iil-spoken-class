"use client";

import Image from "next/image";
import { site } from "@/config/site";
import { CheckCircle2, Sparkles, MessageCircle, Quote } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { waLink, admissionMsg } from "@/lib/whatsapp";

export default function FounderSection() {
  return (
    <section id="founder" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Founder Portrait (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer glow background */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#315CF5]/20 via-pink-400/10 to-[#25D366]/20 rounded-3xl blur-2xl opacity-70" />

              {/* Photo Card with Glass Frame */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/90 shadow-2xl bg-white">
                <div className="relative w-full aspect-[4/5] min-h-[420px]">
                  <Image
                    src="/img/founder.jpg"
                    alt="Aftab Alam, Founder of Indian Institute of Language"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-top hover:scale-102 transition-transform duration-500"
                    priority
                  />
                </div>

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-4 inset-x-4 bg-white/90 backdrop-blur-xl border border-white/80 p-4 rounded-2xl shadow-lg flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-extrabold text-[#101828] text-base">
                        Aftab Alam
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-[#315CF5] fill-[#315CF5] text-white" />
                    </div>
                    <p className="text-xs font-semibold text-[#667085]">
                      Founder & Chief Mentor
                    </p>
                  </div>

                  <a
                    href={site.instagramFounder}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 to-purple-600 text-white flex items-center justify-center hover:scale-105 transition-transform shadow-sm"
                    title="Visit Aftab Alam on Instagram"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Floating top badge */}
              <div className="absolute -top-3 -right-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-[#E7EAF2] flex items-center gap-1.5 text-xs font-bold text-[#101828]">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>10+ Years Mentoring</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#315CF5]/10 text-xs font-bold text-[#315CF5] mb-4">
              <Quote className="w-3.5 h-3.5" />
              <span>MEET THE FOUNDER</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101828] leading-[1.15]">
              Building Confidence Through Communication
            </h2>

            <div className="mt-4 flex items-center gap-2 text-base font-semibold text-[#315CF5]">
              <span>Aftab Alam</span>
              <span className="text-gray-300">·</span>
              <span className="text-[#475467] font-normal">
                Founder, Indian Institute of Language (IIL)
              </span>
            </div>

            <p className="mt-6 text-base sm:text-lg text-[#475467] leading-relaxed">
              At the Indian Institute of Language in Gopalganj, our mission is straightforward: to help every student break free from language hesitation and express themselves fearlessly in English.
            </p>

            <p className="mt-4 text-base text-[#667085] leading-relaxed">
              Language is not just about memorizing rules; it is about building self-assurance, projecting voice on stage, and commanding respect in job interviews, social circles, and career milestones.
            </p>

            {/* Core Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {site.pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-4 rounded-2xl bg-[#F8F9FC] border border-[#E7EAF2] hover:border-[#315CF5]/30 hover:bg-white transition-all"
                >
                  <h4 className="font-bold text-sm text-[#101828] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#315CF5]" />
                    {pillar.title}
                  </h4>
                  <p className="mt-1 text-xs text-[#667085]">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 pt-6 border-t border-[#E7EAF2] flex flex-wrap items-center gap-4">
              <a
                href={site.instagramFounder}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:opacity-95 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-md shadow-pink-500/20 transition-all hover:scale-105 active:scale-95"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Follow Aftab Alam on Instagram ({site.instagramFounderHandle})</span>
              </a>

              <a
                href={waLink(admissionMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#101828] hover:text-[#25D366] bg-white border border-[#E7EAF2] hover:border-[#25D366]/40 px-5 py-3.5 rounded-full shadow-xs transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Talk with Aftab Sir</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
