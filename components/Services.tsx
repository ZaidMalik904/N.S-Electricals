import { Home, Building2, Sliders, Lightbulb, Wrench, Zap, CheckCircle2 } from "lucide-react";

export default function Services() {
  const servicesList = [
    {
      id: 1,
      title: "House Wiring",
      subtitle: "Safe & Reliable",
      description: "Complete residential wiring, circuit protection, safety earthing, and rewiring for homes, apartments, and villas in Hadapsar, Pune, Maharashtra.",
      icon: Home,
      tag: "Residential Specialist",
    },
    {
      id: 2,
      title: "Commercial & Industrial",
      subtitle: "Smart Electrical Solutions",
      description: "High-capacity power distribution systems, 3-phase wiring, panel setups, and industrial machinery electrical solutions.",
      icon: Building2,
      tag: "Commercial / Industrial",
    },
    {
      id: 3,
      title: "Switch Board Installation",
      subtitle: "Modern & Stylish",
      description: "Installation of modern modular switchboards, touch switches, MCB/ELCB breakers, and socket fittings for sleek interiors.",
      icon: Sliders,
      tag: "Modular Fitting",
    },
    {
      id: 4,
      title: "Lighting Solutions",
      subtitle: "Brighten Your Space",
      description: "Designer LED profile lighting, ambient false ceiling spots, chandelier fitting, and energy-efficient commercial lights.",
      icon: Lightbulb,
      tag: "LED & Accent Light",
    },
    {
      id: 5,
      title: "Repair & Maintenance",
      subtitle: "Keep Your System Running",
      description: "Quick fault finding, short circuit repairs, tripping MCB fixes, wire burning troubleshooting, and regular electrical checkups.",
      icon: Wrench,
      tag: "Quick Repairs",
    },
    {
      id: 6,
      title: "New Installation & Upgradation",
      subtitle: "Better Performance",
      description: "Load capacity upgrades, old wiring replacement, meter board shifting, new property electrification, and safety compliance.",
      icon: Zap,
      tag: "Upgrade & Retrofit",
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-black text-[#0B192C] tracking-widest uppercase bg-yellow-100 text-[#0B192C] px-4 py-1.5 rounded-full border border-[#FACC15]/40 font-heading">
            OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B192C] font-heading">
            Professional Electrical Solutions in Hadapsar, Pune, Maharashtra
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Quality Service | Affordable Rates | On Time Delivery — Delivered by <strong>N.S Electrical&apos;s</strong>.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white p-7 rounded-3xl border border-slate-200 hover:border-[#FACC15] hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between transform hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Accent Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0B192C] group-hover:bg-[#FACC15] transition-colors" />

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#0B192C] group-hover:bg-[#FACC15] text-[#FACC15] group-hover:text-[#0B192C] flex items-center justify-center transition-colors duration-300 shadow-md">
                      <IconComponent className="w-7 h-7 stroke-[2.2]" />
                    </div>
                    <span className="text-[10px] font-black uppercase text-[#0B192C] bg-yellow-50 px-2.5 py-1 rounded-full border border-yellow-200">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-black text-[#0B192C] font-heading group-hover:text-[#EAB308] transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs font-bold text-[#FACC15] uppercase tracking-wider mt-0.5 mb-3">
                    {service.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Call to Action */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href="tel:+918668476768"
                    className="text-xs font-black text-[#0B192C] hover:text-[#EAB308] flex items-center gap-1 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FACC15]" />
                    <span>Get Free Quote</span>
                  </a>
                  <a
                    href="https://wa.me/918668476768?text=Hello%20Shashikant%20Bahule%2C%20I%20need%20service%20for%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-gray-400 hover:text-[#25D366] transition-colors"
                  >
                    WhatsApp →
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
