"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { site } from "@/config/site";
import { waLink, admissionMsg } from "@/lib/whatsapp";
import { 
  Menu, 
  X, 
  MessageCircle, 
  PhoneCall, 
  MapPin, 
  ArrowRight,
  GraduationCap
} from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Courses", href: "#courses" },
    { label: "Reels", href: "#reels" },
    { label: "Gallery", href: "#gallery" },
    { label: "Founder", href: "#founder" },
    { label: "Location & Map", href: "#location" },
    { label: "Enquiry", href: "#contact" },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#101828] text-white text-xs sm:text-sm py-2 px-4 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-block w-2 h-2 rounded-full bg-[#25D366] animate-pulse shrink-0" />
            <span className="font-medium text-gray-200 text-xs sm:text-sm truncate">
              {site.announcement}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs shrink-0 text-gray-300">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#315CF5]" />
              {site.city}
            </span>
            <span className="text-gray-500">|</span>
            <a 
              href={site.instagramFounder} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
              {site.instagramFounderHandle}
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl border-b border-[#E7EAF2] shadow-sm py-2.5"
            : "bg-white/95 backdrop-blur-md border-b border-[#E7EAF2]/80 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a href="#top" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#315CF5] rounded-xl p-1">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden ring-2 ring-[#315CF5]/20 shadow-md group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/img/logo.jpg"
                alt="IIL Indian Institute of Language"
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#101828] group-hover:text-[#315CF5] transition-colors">
                  IIL
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider bg-[#315CF5]/10 text-[#315CF5] px-1.5 py-0.5 rounded-md">
                  Institute
                </span>
              </div>
              <span className="text-[11px] font-medium text-[#667085] hidden sm:block tracking-tight">
                Indian Institute of Language
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Primary" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-[#475467] hover:text-[#315CF5] hover:bg-[#315CF5]/5 px-3.5 py-2 rounded-lg transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <a
              href={waLink(admissionMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-semibold px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-full shadow-md shadow-[#25D366]/25 hover:shadow-lg hover:shadow-[#25D366]/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] gloss-reflection"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span className="hidden sm:inline">Enquire on WhatsApp</span>
              <span className="sm:hidden">Admission</span>
            </a>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl text-[#475467] hover:text-[#101828] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#315CF5]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown / Slide-out Menu */}
        {mobileOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[calc(100%)] bg-white/95 backdrop-blur-2xl border-b border-[#E7EAF2] shadow-2xl transition-all duration-300 px-5 py-6">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between text-base font-semibold text-[#101828] hover:text-[#315CF5] hover:bg-[#315CF5]/5 p-3 rounded-xl transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#667085]" />
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-[#E7EAF2] flex flex-col gap-3">
                <a
                  href={waLink(admissionMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 rounded-xl shadow-md"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Direct WhatsApp Admission</span>
                </a>

                <div className="pt-2">
                  <a
                    href={site.instagramFounder}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 text-xs font-semibold py-3 px-4 bg-gradient-to-r from-pink-50 via-purple-50 to-pink-50 border border-pink-200 rounded-xl text-pink-700 hover:bg-pink-100 transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4 text-pink-600" />
                    <span>Follow {site.instagramFounderHandle} on Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
