"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, CheckCircle2, Phone } from "lucide-react";

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative w-full h-72 sm:h-96 min-h-[288px] sm:min-h-[384px] shrink-0 bg-[#0B192C]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-black/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="inline-block bg-[#FACC15] text-[#0B192C] text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-2">
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-base text-gray-700 leading-relaxed">
            {project.description} Professionally executed by <strong>N.S Electrical&apos;s</strong> in Hadapsar, Pune, Maharashtra using high-grade safety wiring, certified breakers, and standardized fittings.
          </p>

          <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#0B192C] font-extrabold">
              <CheckCircle2 className="w-4 h-4 text-[#FACC15]" />
              <span>Safe Power & Quality</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#0B192C] font-extrabold">
              <CheckCircle2 className="w-4 h-4 text-[#FACC15]" />
              <span>Affordable Rates</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#0B192C] font-extrabold">
              <CheckCircle2 className="w-4 h-4 text-[#FACC15]" />
              <span>On Time Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#0B192C] font-extrabold">
              <CheckCircle2 className="w-4 h-4 text-[#FACC15]" />
              <span>Hadapsar, Pune, Maharashtra</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#0B192C] text-white p-4 rounded-2xl">
            <div className="text-xs text-gray-200">
              <span className="font-extrabold text-[#FACC15] block">Shashikant Bahule</span>
              <span>Need similar electrical work in Hadapsar, Pune, Maharashtra?</span>
            </div>
            <a
              href="tel:+918668476768"
              className="inline-flex items-center gap-2 bg-[#FACC15] hover:bg-[#EAB308] text-[#0B192C] px-5 py-2.5 rounded-xl font-black text-xs shadow-md transition-all active:scale-95 shrink-0"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Call 86684 76768</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
