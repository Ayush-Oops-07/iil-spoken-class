"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { reels, site } from "@/config/site";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  Maximize2,
  X,
  Share2
} from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function Reels() {
  const [active, setActive] = useState(0);
  const [muted, setMuted] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [modalReel, setModalReel] = useState<typeof reels[0] | null>(null);
  const [modalMuted, setModalMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const autoPlayTimer = useRef<NodeJS.Timeout | null>(null);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  const total = reels.length;

  const nextReel = useCallback(() => {
    setActive((prev) => (prev + 1) % total);
    setProgress(0);
  }, [total]);

  const prevReel = useCallback(() => {
    setActive((prev) => (prev - 1 + total) % total);
    setProgress(0);
  }, [total]);

  // Auto-scroll loop
  useEffect(() => {
    if (!isAutoPlaying) {
      if (progressInterval.current) clearInterval(progressInterval.current);
      if (autoPlayTimer.current) clearTimeout(autoPlayTimer.current);
      return;
    }

    const DURATION = 6000; // 6 seconds per reel
    const INTERVAL = 50;
    const step = (INTERVAL / DURATION) * 100;

    progressInterval.current = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          return 0;
        }
        return old + step;
      });
    }, INTERVAL);

    autoPlayTimer.current = setTimeout(() => {
      nextReel();
    }, DURATION);

    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current);
      if (autoPlayTimer.current) clearTimeout(autoPlayTimer.current);
    };
  }, [active, isAutoPlaying, nextReel]);

  // Video play & scroll centering
  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      if (i === active) {
        vid.muted = muted;
        vid.play().catch(() => {});
      } else {
        vid.pause();
        if (Math.abs(i - active) > 2) {
          vid.currentTime = 0;
        }
      }
    });

    const activeEl = cardRefs.current[active];
    const rail = containerRef.current;
    if (activeEl && rail) {
      const scrollTarget =
        activeEl.offsetLeft - (rail.clientWidth - activeEl.clientWidth) / 2;
      rail.scrollTo({
        left: scrollTarget,
        behavior: "smooth",
      });
    }
  }, [active, muted]);

  return (
    <section id="reels" className="py-20 lg:py-28 bg-[#F8F9FC] relative overflow-hidden border-y border-[#E7EAF2]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#315CF5]/10 via-[#25D366]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E7EAF2] text-xs font-bold text-[#315CF5] shadow-xs mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#315CF5]" />
              <span>REAL STUDENT TRANSFORMATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101828]">
              Life at IIL, in Motion
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#667085] max-w-2xl font-normal">
              Real moments. Shared learning. A community growing together. Watch our daily classroom energy and public speaking practice.
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#E7EAF2] hover:bg-gray-50 text-xs font-semibold text-[#374151] shadow-xs transition-colors"
              title={isAutoPlaying ? "Pause Auto-scroll" : "Resume Auto-scroll"}
            >
              {isAutoPlaying ? <Pause className="w-3.5 h-3.5 text-[#315CF5]" /> : <Play className="w-3.5 h-3.5 text-[#25D366]" />}
              <span>{isAutoPlaying ? "Auto-scroll ON" : "Paused"}</span>
            </button>

            <button
              onClick={() => setMuted(!muted)}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#E7EAF2] hover:bg-gray-50 text-xs font-semibold text-[#374151] shadow-xs transition-colors"
              title={muted ? "Unmute sound" : "Mute sound"}
            >
              {muted ? <VolumeX className="w-4 h-4 text-gray-500" /> : <Volume2 className="w-4 h-4 text-[#315CF5]" />}
              <span className="hidden sm:inline">{muted ? "Muted" : "Sound On"}</span>
            </button>

            <div className="flex items-center gap-1.5 ml-2">
              <button
                onClick={prevReel}
                className="w-10 h-10 rounded-xl bg-white border border-[#E7EAF2] hover:border-[#315CF5]/40 hover:bg-[#315CF5]/5 flex items-center justify-center text-[#101828] shadow-xs transition-all active:scale-95"
                aria-label="Previous reel"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextReel}
                className="w-10 h-10 rounded-xl bg-white border border-[#E7EAF2] hover:border-[#315CF5]/40 hover:bg-[#315CF5]/5 flex items-center justify-center text-[#101828] shadow-xs transition-all active:scale-95"
                aria-label="Next reel"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Auto Scroll Progress Bar Indicator */}
        <div className="w-full bg-gray-200/80 h-1.5 rounded-full overflow-hidden mb-8">
          <div
            className="h-full bg-gradient-to-r from-[#315CF5] to-[#25D366] transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Reels Track / Carousel Container */}
        <div
          ref={containerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto pb-6 pt-2 px-2 no-scrollbar snap-x snap-mandatory scroll-smooth"
          role="region"
          aria-label="Student Reels Carousel"
        >
          {reels.map((reel, index) => {
            const isActive = index === active;
            return (
              <div
                key={reel.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`relative shrink-0 snap-center rounded-3xl overflow-hidden transition-all duration-500 select-none group cursor-pointer ${
                  isActive
                    ? "w-[260px] sm:w-[290px] h-[460px] sm:h-[510px] ring-4 ring-[#315CF5] shadow-2xl scale-[1.02] z-20"
                    : "w-[230px] sm:w-[250px] h-[420px] sm:h-[460px] opacity-75 hover:opacity-100 hover:scale-[0.98] shadow-md z-10"
                }`}
                onClick={() => {
                  if (isActive) {
                    setModalReel(reel);
                  } else {
                    setActive(index);
                    setProgress(0);
                  }
                }}
              >
                {/* Poster / Video Element */}
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={Math.abs(index - active) <= 2 ? reel.src : undefined}
                  poster={reel.poster}
                  playsInline
                  loop
                  muted={muted}
                  preload="none"
                  className="w-full h-full object-cover rounded-3xl bg-black"
                />

                {/* Subtle top & bottom vignette overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/85 pointer-events-none" />

                {/* Top Badge: Category & Expand */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10 pointer-events-none">
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white px-2.5 py-1 rounded-full border border-white/20">
                    {reel.category}
                  </span>
                  {isActive && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setModalReel(reel);
                      }}
                      className="w-8 h-8 rounded-full bg-white/25 backdrop-blur-md hover:bg-white/40 flex items-center justify-center text-white pointer-events-auto transition-transform hover:scale-110"
                      title="Open full video"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Play Button Indicator (when inactive or hover) */}
                {!isActive && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md shadow-xl flex items-center justify-center text-[#101828] group-hover:scale-110 group-hover:bg-[#315CF5] group-hover:text-white transition-all duration-300">
                      <Play className="w-6 h-6 ml-1 fill-current" />
                    </div>
                  </div>
                )}

                {/* Bottom Caption & Stats */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-white z-10">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-300 mb-1">
                    <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                    <span>{site.instagramFounderHandle}</span>
                    <span className="text-gray-400">· {reel.duration}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold leading-snug line-clamp-2 text-white text-shadow-sm">
                    {reel.title}
                  </h3>
                </div>

                {/* Active Glowing Border Reflection */}
                {isActive && (
                  <div className="absolute inset-0 rounded-3xl pointer-events-none border border-white/30" />
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom indicator & Instagram button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E7EAF2]">
          <div className="flex items-center gap-2 text-xs text-[#667085] font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-[#315CF5] animate-ping" />
            <span>Currently playing {active + 1} of {total} reels</span>
          </div>

          <a
            href={site.instagramInstitute}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#101828] hover:text-[#315CF5] bg-white border border-[#E7EAF2] hover:border-[#315CF5]/30 px-4 py-2.5 rounded-full shadow-xs hover:shadow-sm transition-all"
          >
            <InstagramIcon className="w-4 h-4 text-pink-500" />
            <span>Watch 100+ Reels on Instagram ({site.instagramInstituteHandle})</span>
          </a>
        </div>
      </div>

      {/* Fullscreen Video Modal Lightbox */}
      {modalReel && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          onClick={() => setModalReel(null)}
        >
          <div 
            className="relative w-full max-w-sm sm:max-w-md h-[85vh] max-h-[780px] bg-black rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="absolute top-4 inset-x-4 flex items-center justify-between z-20">
              <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs font-semibold">
                <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                <span>{modalReel.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setModalMuted(!modalMuted)}
                  className="w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center transition-colors"
                >
                  {modalMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setModalReel(null)}
                  className="w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Video Player */}
            <video
              src={modalReel.src}
              autoPlay
              controls
              loop
              muted={modalMuted}
              className="w-full h-full object-contain bg-black"
            />

            {/* Modal Footer */}
            <div className="absolute bottom-4 inset-x-4 bg-black/60 backdrop-blur-md p-4 rounded-2xl text-white flex items-center justify-between gap-3">
              <div>
                <p className="text-xs text-gray-300 font-medium">IIL Classroom Reel</p>
                <h4 className="text-sm font-bold text-white line-clamp-1">{modalReel.title}</h4>
              </div>
              <a
                href={site.instagramInstitute}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold px-3 py-2 rounded-xl hover:opacity-95"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
