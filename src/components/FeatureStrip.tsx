"use client";

import { 
  Sparkles, 
  MessageSquare, 
  Award, 
  Mic, 
  Briefcase, 
  Users, 
  Zap, 
  Target 
} from "lucide-react";

export default function FeatureStrip() {
  const features = [
    { label: "Spoken English Fluency", icon: MessageSquare },
    { label: "Public Speaking & Podium Practice", icon: Mic },
    { label: "Personality Development", icon: Sparkles },
    { label: "Job Interview Cracking", icon: Briefcase },
    { label: "Stage Fear Elimination", icon: Zap },
    { label: "Vocabulary & Daily Phrasing", icon: Target },
    { label: "Group Discussions & Debates", icon: Users },
    { label: "Professional Body Language", icon: Award },
  ];

  return (
    <div className="border-y border-[#E7EAF2] bg-white py-5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.label}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F9FC] border border-[#E7EAF2] hover:border-[#315CF5]/30 hover:bg-white text-xs sm:text-sm font-semibold text-[#344054] transition-all hover:shadow-xs select-none"
              >
                <Icon className="w-3.5 h-3.5 text-[#315CF5]" />
                <span>{feat.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
