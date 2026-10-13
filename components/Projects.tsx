"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, Tag, ChevronDown, ChevronUp, Zap, CheckCircle2 } from "lucide-react";

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface ProjectsProps {
  onSelectProject?: (project: ProjectItem) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [showAll, setShowAll] = useState(false);

  const projects: ProjectItem[] = [
    {
      id: 1,
      title: "Complete Residential House Wiring",
      category: "House Wiring",
      image: "/images/work/work-house-wiring.jpg",
      description: "Full safety concealed wiring setup with circuit protection & copper earthing for 3BHK villa in Hadapsar, Pune, Maharashtra.",
    },
    {
      id: 2,
      title: "3-Phase Commercial Panel Installation",
      category: "Commercial & Industrial",
      image: "/images/work/work-commercial-panel.jpg",
      description: "Heavy-duty main distribution panel board wiring with main isolator breakers for retail showroom.",
    },
    {
      id: 3,
      title: "Modular Switchboard Fitting",
      category: "Switch Board Installation",
      image: "/images/work/work-modular-switchboard.jpg",
      description: "Sleek touch-sensitive & modular glass-finish switchboard installations with USB charging ports.",
    },
    {
      id: 4,
      title: "Designer LED & False Ceiling Lights",
      category: "Lighting Solutions",
      image: "/images/work/work-ceiling-lights.jpg",
      description: "Warm recessed LED spot lighting, magnetic profile channels, and chandelier fitting for living rooms.",
    },
    {
      id: 5,
      title: "Industrial Machinery Power Setup",
      category: "Commercial & Industrial",
      image: "/images/work/work-industrial-power.jpg",
      description: "High-voltage industrial cabling, motor starter wiring, and emergency tripping safety switches.",
    },
    {
      id: 6,
      title: "Complete Home Electrical Upgradation",
      category: "New Installation & Upgradation",
      image: "/images/work/work-mcb-upgrade.jpg",
      description: "Old wire replacement, digital energy meter board shifting, and MCB load capacity upgrade.",
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="work" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-black text-[#0B192C] tracking-widest uppercase bg-yellow-100 text-[#0B192C] px-4 py-1.5 rounded-full border border-[#FACC15]/40 font-heading">
            RECENT EXECUTION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B192C] font-heading">
            Our Completed Electrical Work
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Featured site projects completed across Hadapsar, Pune, Maharashtra — house wiring, switchboard fittings, commercial electrical panels & lighting.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject && onSelectProject(project)}
              className="bg-[#F8FAFC] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col transform hover:-translate-y-1.5 border border-slate-200"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-[#0B192C] shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-500 ease-out opacity-85 group-hover:opacity-100"
                />

                {/* Hover Overlay Icon */}
                <div className="absolute inset-0 bg-[#0B192C]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#FACC15] text-[#0B192C] flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300 font-black">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-[#0B192C]/90 backdrop-blur-xs text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5 border border-[#FACC15]/30">
                  <Zap className="w-3 h-3 text-[#FACC15] shrink-0" />
                  <span>{project.category}</span>
                </div>
              </div>

              {/* Caption Below Card */}
              <div className="p-6 flex flex-col justify-between flex-1 bg-white">
                <div>
                  <h3 className="text-lg font-black text-[#0B192C] font-heading group-hover:text-[#EAB308] transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#0B192C] font-black group-hover:text-[#FACC15] transition-colors">
                  <span>View Project Details</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
