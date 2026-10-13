"use client";

import { useState, useEffect } from "react";
import { ShieldCheck, Wrench, ThumbsUp, Clock, HeartHandshake } from "lucide-react";

export default function TrustHighlights() {
  const highlights = [
    {
      title: "Trusted Service",
      desc: "Safe & reliable electrical solutions you can trust.",
      icon: ShieldCheck,
    },
    {
      title: "Skilled Technicians",
      desc: "Expertly trained electricians for any project.",
      icon: Wrench,
    },
    {
      title: "Professional Approach",
      desc: "Clean, standardized & modern installations.",
      icon: ThumbsUp,
    },
    {
      title: "On Time Delivery",
      desc: "Punctual & fast turnaround on all service jobs.",
      icon: Clock,
    },
    {
      title: "Customer Satisfaction",
      desc: "100% committed to quality work across Hadapsar, Pune, Maharashtra.",
      icon: HeartHandshake,
    },
  ];

  const [mobileIndex, setMobileIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % highlights.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [highlights.length]);

  return (
    <section className="py-6 sm:py-10 bg-[#0B192C] border-y border-[#FACC15]/30 font-sans text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile View: Auto-animating Single Line Ticker */}
        <div className="md:hidden bg-[#1E293B] px-4 py-3 rounded-2xl border border-[#FACC15]/30 shadow-xs overflow-hidden">
          <div
            key={mobileIndex}
            className="flex items-center gap-3 animate-in fade-in slide-in-from-right duration-500"
          >
            {(() => {
              const current = highlights[mobileIndex];
              const Icon = current.icon;
              return (
                <>
                  <div className="w-9 h-9 rounded-xl bg-[#FACC15] text-[#0B192C] flex items-center justify-center shrink-0 font-extrabold shadow-sm">
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-extrabold text-xs text-[#FACC15] truncate font-heading">
                        {current.title}
                      </h3>
                      <span className="text-[9px] font-bold text-[#0B192C] bg-[#FACC15] px-2 py-0.5 rounded-full shrink-0">
                        {mobileIndex + 1}/{highlights.length}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-300 truncate mt-0.5">
                      {current.desc}
                    </p>
                  </div>
                </>
              );
            })()}
          </div>
        </div>

        {/* Desktop View: 5 Grid Cards */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#1E293B]/80 p-5 rounded-2xl border border-[#FACC15]/20 shadow-md hover:border-[#FACC15] transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FACC15]/10 text-[#FACC15] group-hover:bg-[#FACC15] group-hover:text-[#0B192C] flex items-center justify-center mb-3 transition-colors duration-300 shadow-xs font-bold">
                  <Icon className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="font-extrabold text-sm sm:text-base text-white font-heading mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
