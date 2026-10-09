"use client";

import { useState } from "react";
import { waLink, admissionMsg } from "@/lib/whatsapp";
import { MessageCircle, X } from "lucide-react";
import { site } from "@/config/site";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-5 sm:right-6 z-50 flex items-end flex-col gap-2 pointer-events-none">
      {/* Interactive Tooltip bubble */}
      {showTooltip && (
        <div className="pointer-events-auto bg-white/95 backdrop-blur-xl border border-[#E7EAF2] p-3 rounded-2xl shadow-xl shadow-gray-400/20 max-w-xs flex items-center justify-between gap-3 text-xs text-[#101828] animate-bounce-gentle">
          <div>
            <div className="flex items-center gap-1.5 font-bold text-gray-900">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span>Need Admission Help?</span>
            </div>
            <p className="text-[11px] text-[#667085] mt-0.5">
              Chat directly with Aftab Sir on WhatsApp!
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-gray-600 p-1 rounded-md"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={waLink(admissionMsg)}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto relative group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-all duration-300 gloss-reflection"
        aria-label="Chat with IIL on WhatsApp"
      >
        {/* Unread notification ping */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] text-white font-extrabold items-center justify-center">
            1
          </span>
        </span>

        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="hidden sm:inline text-sm">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
