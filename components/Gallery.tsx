"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Eye, ChevronLeft, ChevronRight, X, Image as ImageIcon, Sparkles, Zap } from "lucide-react";

export interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: "House Wiring" | "Switch Board Installation" | "Lighting Solutions" | "Commercial & Industrial";
}

const galleryItems: GalleryItem[] = [
  { id: 1, src: "/images/gallery/gallery-house-wiring.jpg", title: "Residential House Wiring", category: "House Wiring" },
  { id: 2, src: "/images/gallery/gallery-commercial-panel.jpg", title: "Commercial Electrical Panel", category: "Commercial & Industrial" },
  { id: 3, src: "/images/gallery/gallery-modular-switchboard.jpg", title: "Modular Switchboard Fitting", category: "Switch Board Installation" },
  { id: 4, src: "/images/gallery/gallery-ceiling-lights.jpg", title: "Designer Ceiling LED Lights", category: "Lighting Solutions" },
  { id: 5, src: "/images/gallery/gallery-conduit-wiring.jpg", title: "Concealed Conduit Wiring", category: "House Wiring" },
  { id: 6, src: "/images/gallery/gallery-industrial-power.jpg", title: "Industrial Power Distribution", category: "Commercial & Industrial" },
  { id: 7, src: "/images/gallery/gallery-touch-switch.jpg", title: "Modern Touch Switchboards", category: "Switch Board Installation" },
  { id: 8, src: "/images/gallery/gallery-profile-spots.jpg", title: "Profile & Spot Lighting Setup", category: "Lighting Solutions" },
  { id: 9, src: "/images/gallery/gallery-mcb-upgrade.jpg", title: "Safety Earthing & MCB Box", category: "House Wiring" },
  { id: 10, src: "/images/gallery/gallery-shop-fitting.jpg", title: "Shop Electrical Fitting", category: "Commercial & Industrial" },
  { id: 11, src: "/images/gallery/gallery-circuit-breaker.jpg", title: "High-Power Circuit Breaker", category: "Commercial & Industrial" },
  { id: 12, src: "/images/gallery/gallery-chandelier.jpg", title: "Chandelier & Ambient Light", category: "Lighting Solutions" },
];

const categories = [
  "All",
  "House Wiring",
  "Switch Board Installation",
  "Lighting Solutions",
  "Commercial & Industrial",
] as const;

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState<number>(8);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  const visibleItems = filteredItems.slice(0, visibleCount);

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! === 0 ? filteredItems.length - 1 : prev! - 1));
  }, [lightboxIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! === filteredItems.length - 1 ? 0 : prev! + 1));
  }, [lightboxIndex, filteredItems.length]);

  const handleClose = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, handleClose, handlePrev, handleNext]);

  return (
    <section id="gallery" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-[#0B192C] text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#FACC15]/40 font-heading">
            <Zap className="w-3.5 h-3.5 fill-[#FACC15] text-[#FACC15]" />
            <span>PROJECT GALLERY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B192C] font-heading">
            Electrical Work Photo Gallery
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Authentic photographs of wiring, switchboard fittings, lighting setups, and commercial electrical installations in Hadapsar, Pune, Maharashtra.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            const count = cat === "All"
              ? galleryItems.length
              : galleryItems.filter((item) => item.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(8);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-[#0B192C] text-[#FACC15] shadow-md scale-105 border border-[#FACC15]"
                    : "bg-white text-gray-700 hover:bg-yellow-50 hover:text-[#0B192C] border border-slate-200"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-black ${
                    isActive ? "bg-[#FACC15] text-[#0B192C]" : "bg-slate-200 text-slate-700"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {visibleItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col transform hover:-translate-y-2 border border-slate-200"
            >
              {/* Image Container */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-[#0B192C] shrink-0">
                <Image
                  src={item.src}
                  alt={`${item.title} - N.S Electrical's Hadapsar, Pune, Maharashtra`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-500 ease-out opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />

                {/* Hover Dark Overlay */}
                <div className="absolute inset-0 bg-[#0B192C]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="w-12 h-12 rounded-full bg-[#FACC15] text-[#0B192C] flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300 font-black">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-[#0B192C]/90 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-[#FACC15]/30">
                  {item.category}
                </div>
              </div>

              {/* Title Caption Bar */}
              <div className="p-4 bg-white flex items-center justify-between border-t border-slate-100">
                <h3 className="text-sm font-extrabold text-[#0B192C] font-heading group-hover:text-[#EAB308] transition-colors truncate">
                  {item.title}
                </h3>
                <span className="text-xs text-[#FACC15] font-bold shrink-0 ml-2 group-hover:translate-x-0.5 transition-transform">
                  View →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {visibleCount < filteredItems.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 8)}
              className="inline-flex items-center gap-2 bg-[#0B192C] hover:bg-[#071527] text-[#FACC15] font-black text-sm px-8 py-3.5 rounded-full shadow-lg border border-[#FACC15] transform hover:-translate-y-0.5 transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <ImageIcon className="w-4 h-4" />
              <span>View More Photos ({filteredItems.length - visibleCount} remaining)</span>
            </button>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={handleClose}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            aria-label="Close photo viewer"
            className="absolute top-5 right-5 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all focus:outline-none cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Photo Counter */}
          <div className="absolute top-5 left-5 z-20 text-[#FACC15] text-xs sm:text-sm font-extrabold bg-[#0B192C]/80 px-4 py-2 rounded-full border border-[#FACC15]/30 backdrop-blur-md">
            Photo {lightboxIndex + 1} of {filteredItems.length}
          </div>

          {/* Previous Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous photo"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-all focus:outline-none cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Next Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next photo"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-all focus:outline-none cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Main Image Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh] sm:h-[75vh] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={filteredItems[lightboxIndex].src}
                alt={`${filteredItems[lightboxIndex].title} - N.S Electrical's`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Caption Info Bar */}
            <div className="mt-4 text-center text-white space-y-1">
              <span className="inline-block bg-[#FACC15] text-[#0B192C] text-[10px] font-black uppercase tracking-widest px-3 py-0.5 rounded-full">
                {filteredItems[lightboxIndex].category}
              </span>
              <h3 className="text-lg sm:text-xl font-black font-heading">
                {filteredItems[lightboxIndex].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
