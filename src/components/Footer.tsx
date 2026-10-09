"use client";

import Image from "next/image";
import { site, courses } from "@/config/site";
import { waLink, admissionMsg } from "@/lib/whatsapp";
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  Heart, 
  ArrowUp
} from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-[#E7EAF2] pt-16 pb-12 text-[#475467]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#E7EAF2]">
          {/* Col 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#315CF5]/20">
                <Image
                  src="/img/logo.jpg"
                  alt="IIL Logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-xl font-extrabold text-[#101828] tracking-tight block">
                  {site.name}
                </span>
                <span className="text-xs text-[#667085]">
                  Founded by Aftab Alam · Gopalganj, Bihar
                </span>
              </div>
            </div>

            <p className="text-sm text-[#475467] leading-relaxed max-w-sm mb-6">
              Indian Institute of Language (IIL) is Gopalganj&apos;s premier spoken English, grammar, and personality grooming institute dedicated to empowering youth with fluent communication.
            </p>

            {/* Social handles */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/iilbyaftabalam/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-pink-50 hover:bg-pink-100 text-pink-600 flex items-center justify-center transition-colors"
                title="Follow @iilbyaftabalam on Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={waLink(admissionMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-green-50 hover:bg-green-100 text-[#25D366] flex items-center justify-center transition-colors"
                title="WhatsApp Support"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#101828] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#courses" className="hover:text-[#315CF5] transition-colors">Courses</a>
              </li>
              <li>
                <a href="#reels" className="hover:text-[#315CF5] transition-colors">Student Reels</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#315CF5] transition-colors">Campus Gallery</a>
              </li>
              <li>
                <a href="#founder" className="hover:text-[#315CF5] transition-colors">Meet the Founder</a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#315CF5] transition-colors">Google Map & Location</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#315CF5] transition-colors">Admissions Enquiry</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#101828] mb-4">
              Training Tracks
            </h4>
            <ul className="space-y-2.5 text-sm">
              {courses.slice(0, 5).map((c) => (
                <li key={c.id}>
                  <a href="#courses" className="hover:text-[#315CF5] transition-colors line-clamp-1">
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Campus Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#101828] mb-4">
              Campus Info
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>{site.address}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#315CF5] shrink-0 mt-0.5" />
                <span>{site.timings}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <span>{site.phoneDisplay}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <a
                href={waLink(admissionMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#128C7E] bg-green-50 px-3.5 py-2 rounded-xl hover:bg-green-100 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-[#128C7E]" />
                <span>Direct WhatsApp Helpline</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#667085]">
          <p>
            © {new Date().getFullYear()} {site.name} (IIL). All rights reserved. Founded & mentored by Aftab Alam.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-gray-500 hover:text-[#315CF5] transition-colors"
              title="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
