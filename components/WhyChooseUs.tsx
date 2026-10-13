import { ShieldCheck, MapPin, Clock, Award, Building2, CheckCircle2, Zap, DollarSign } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Safe Power & Quality Standards",
      desc: "Strict adherence to safety codes, heavy-duty copper wiring, and certified circuit breakers for 100% hazard-free power.",
      icon: ShieldCheck,
    },
    {
      title: "Quality Service | Affordable Rates",
      desc: "Fair, transparent pricing with no hidden charges. Premium electrical work at pocket-friendly rates.",
      icon: DollarSign,
    },
    {
      title: "On Time Delivery Guarantee",
      desc: "We respect your time. Every house wiring or commercial setup job is completed on or before schedule.",
      icon: Clock,
    },
    {
      title: "Skilled Technicians & Expertise",
      desc: "Led by Shashikant Bahule, our team brings deep technical knowledge for residential & commercial electrical systems.",
      icon: Award,
    },
    {
      title: "Home & Business Solutions",
      desc: "Customized electrical installations for apartments, villas, retail outlets, offices, and industrial plants in Hadapsar, Pune, Maharashtra.",
      icon: Building2,
    },
    {
      title: "Free Site Visit & Consultation",
      desc: "Available across Hadapsar, Pune, Maharashtra for quick site measurement, load calculation, and instant project estimate.",
      icon: MapPin,
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-black text-[#0B192C] tracking-widest uppercase bg-yellow-100 text-[#0B192C] px-4 py-1.5 rounded-full border border-[#FACC15]/40 font-heading">
            WHY CHOOSE N.S ELECTRICAL&apos;S
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B192C] font-heading">
            Your Trusted Electrical Partner in Hadapsar, Pune, Maharashtra
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Safe Power | Brighter Tomorrow — Backed by professional approach, skilled technicians, and customer satisfaction.
          </p>
        </div>

        {/* 6 Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8FAFC] p-7 rounded-3xl border border-slate-200 hover:border-[#FACC15] hover:bg-white hover:shadow-xl transition-all duration-300 group flex items-start gap-4"
              >
                <div className="w-13 h-13 rounded-2xl bg-[#0B192C] group-hover:bg-[#FACC15] text-[#FACC15] group-hover:text-[#0B192C] flex items-center justify-center shrink-0 shadow-md transition-colors duration-300">
                  <Icon className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-[#0B192C] font-heading group-hover:text-[#EAB308] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
