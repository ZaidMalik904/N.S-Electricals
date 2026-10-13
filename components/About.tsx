import { CheckCircle2, ShieldCheck, MapPin, Phone, Zap } from "lucide-react";
import { LogoIcon } from "./Logo";

export default function About() {
  const servicesList = [
    "House Wiring (Safe & Reliable)",
    "Commercial & Industrial Solutions",
    "Switch Board Installation (Modern & Stylish)",
    "Lighting Solutions (Brighten Your Space)",
    "Repair & Maintenance Services",
    "New Installation & Upgradation",
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#0B192C] bg-gradient-to-br from-[#0B192C] to-[#1E293B] p-8 text-white group">
              <div className="space-y-6">
                
                <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                  <LogoIcon className="w-16 h-16 shrink-0" />
                  <div>
                    <h3 className="text-2xl font-black text-white">N.S Electrical&apos;s</h3>
                    <p className="text-xs text-[#FACC15] font-extrabold uppercase tracking-wider">SAFE POWER | BRIGHTER TOMORROW</p>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-gray-200">
                  <div className="flex items-center gap-3">
                    <span className="p-2 bg-[#FACC15]/20 text-[#FACC15] rounded-lg">👤</span>
                    <div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase">Owner / Specialist</div>
                      <div className="font-extrabold text-white text-base">Shashikant Bahule</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="p-2 bg-[#FACC15]/20 text-[#FACC15] rounded-lg">📍</span>
                    <div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase">Location</div>
                      <div className="font-extrabold text-white">Hadapsar, Pune, Maharashtra</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="p-2 bg-[#FACC15]/20 text-[#FACC15] rounded-lg">📞</span>
                    <div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase">Phone & WhatsApp</div>
                      <a href="tel:+918668476768" className="font-extrabold text-[#FACC15] hover:underline text-base">86684 76768</a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-gray-300">
                  <span>Quality Service</span>
                  <span>•</span>
                  <span>Affordable Rates</span>
                  <span>•</span>
                  <span>On Time</span>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Text Content & Key Service Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-black text-[#0B192C] tracking-widest uppercase bg-yellow-100 text-[#0B192C] px-3.5 py-1.5 rounded-full border border-[#FACC15]/40 font-heading">
                ABOUT N.S ELECTRICAL&apos;S
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B192C] font-heading mt-3 mb-4">
                Your Trusted Electrical Partner for Home & Business
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                <strong>N.S Electrical&apos;s</strong>, founded and operated by <strong>Shashikant Bahule</strong>, is a premier electrical contractor based in <strong>Hadapsar, Pune, Maharashtra</strong>. We specialize in providing safe, reliable, and affordable electrical solutions for homes, commercial complexes, and industrial spaces.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-3">
                From complete residential house wiring and stylish switchboard installations to complex industrial power distribution, lighting design, and emergency repair maintenance, we take pride in delivering top-notch craftsmanship on time.
              </p>
            </div>

            {/* Key Services Pill Grid */}
            <div className="pt-2">
              <h3 className="text-xs font-extrabold text-[#0B192C] uppercase tracking-wider mb-3">
                Our Core Electrical Specializations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {servicesList.map((service, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2.5 bg-[#F8FAFC] hover:bg-yellow-50 text-[#0B192C] text-xs sm:text-sm font-bold p-3 rounded-xl transition-colors border border-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#FACC15] shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Highlights Bar */}
            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-extrabold text-[#0B192C]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FACC15]" />
                <span>Serving Hadapsar, Pune, Maharashtra</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FACC15]" />
                <span>Call Shashikant Bahule: 8668476768</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
