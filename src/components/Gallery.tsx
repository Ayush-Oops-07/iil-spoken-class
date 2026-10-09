"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { gallery } from "@/config/site";
import { 
  Camera, 
  Maximize2, 
  ChevronLeft, 
  ChevronRight, 
  X,
  Sparkles
} from "lucide-react";

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % gallery.length);
    }
  }, [lightboxIndex]);

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + gallery.length) % gallery.length);
    }
  }, [lightboxIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#315CF5]/10 text-xs font-bold text-[#315CF5] mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>CAMPUS MEMORIES & MOMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101828]">
            Inside the IIL Experience
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#667085]">
            A closer look at the people, moments, and experiences that make IIL. Our students speaking on stage, learning in batches, and celebrating achievements.
          </p>
        </div>

        {/* Dynamic Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {gallery.map((item, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={item.src}
                onClick={() => openLightbox(index)}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-gray-100 border border-[#E7EAF2] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 ${
                  isFeatured ? "sm:col-span-2 lg:col-span-2 sm:row-span-2 min-h-[380px] sm:min-h-[460px]" : "min-h-[280px]"
                }`}
              >
                {/* Photo */}
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes={isFeatured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Glassy reflection highlight */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md text-[11px] font-bold text-[#101828] shadow-xs">
                    <Sparkles className="w-3 h-3 text-[#315CF5]" />
                    {item.tag}
                  </span>
                </div>

                {/* Expand Hover Icon */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white z-10">
                  <p className="text-xs sm:text-sm font-medium text-gray-200 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
        >
          <div 
            className="relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 sm:top-2 sm:right-2 z-30 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Close image modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev & Next navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white flex items-center justify-center transition-all focus:outline-none active:scale-90"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white flex items-center justify-center transition-all focus:outline-none active:scale-90"
              aria-label="Next photo"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Current Active Image */}
            <div className="relative w-full h-[65vh] sm:h-[75vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40">
              <Image
                src={gallery[lightboxIndex].src}
                alt={gallery[lightboxIndex].alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Lightbox Caption Bar */}
            <div className="mt-4 w-full bg-white/10 backdrop-blur-md border border-white/15 px-6 py-3.5 rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
              <div>
                <span className="text-xs font-bold text-blue-300 uppercase tracking-wider block">
                  {gallery[lightboxIndex].tag}
                </span>
                <p className="text-sm font-medium text-gray-100">
                  {gallery[lightboxIndex].caption}
                </p>
              </div>
              <span className="text-xs text-gray-400 font-mono shrink-0">
                {lightboxIndex + 1} / {gallery.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
