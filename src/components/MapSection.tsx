"use client";

import { site } from "@/config/site";
import { waLink, admissionMsg } from "@/lib/whatsapp";
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Phone, 
  ExternalLink,
  Building,
  CheckCircle2
} from "lucide-react";

export default function MapSection() {
  return (
    <section id="location" className="py-20 lg:py-28 bg-[#F8F9FC] relative border-t border-[#E7EAF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#315CF5]/10 text-xs font-bold text-[#315CF5] mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>VISIT OUR CAMPUS IN GOPALGANJ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101828]">
            Find Us on the Map
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#667085]">
            Conveniently located in the heart of Gopalganj. Walk into our center for free counseling or batch demo sessions.
          </p>
        </div>

        {/* Map & Info Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address, Highlights & Actions (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7EAF2] shadow-lg shadow-gray-200/40 relative overflow-hidden">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#315CF5]/10 flex items-center justify-center text-[#315CF5] shrink-0">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#101828]">
                    {site.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#315CF5] uppercase tracking-wide">
                    Spoken English & Personality Academy
                  </p>
                </div>
              </div>

              {/* Address details */}
              <div className="space-y-4 text-sm text-[#475467]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#101828]">Official Campus Address:</strong>
                    <p className="mt-0.5">{site.address}</p>
                    <span className="inline-block mt-1 text-xs font-semibold bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md">
                      Landmark: {site.landmark}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#315CF5] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#101828]">Academy Hours & Batches:</strong>
                    <p className="mt-0.5">{site.timings}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#101828]">Helpline & WhatsApp:</strong>
                    <p className="mt-0.5">{site.phoneDisplay}</p>
                  </div>
                </div>
              </div>

              {/* Quick Perks */}
              <div className="mt-6 pt-6 border-t border-[#E7EAF2] grid grid-cols-2 gap-3 text-xs font-semibold text-[#344054]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>Air-cooled Classes</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>Podium & Stage</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>Daily Mock Practice</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>Personal Attention</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#315CF5] hover:bg-[#2547D0] text-white font-bold py-3 px-5 rounded-xl shadow-md transition-all text-xs sm:text-sm"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                </a>
                <a
                  href={waLink(admissionMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 px-5 rounded-xl shadow-md transition-all text-xs sm:text-sm"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed (7 cols) */}
          <div className="lg:col-span-7">
            <div className="h-full min-h-[380px] sm:min-h-[460px] rounded-3xl overflow-hidden border border-[#E7EAF2] shadow-xl relative bg-white">
              {/* Google Maps universal iframe */}
              <iframe
                title="IIL Gopalganj Location Map"
                src={site.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "380px" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
              />

              {/* Floating Map Pin Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-[#E7EAF2] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                <span className="text-xs font-bold text-[#101828]">IIL Gopalganj Academy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
