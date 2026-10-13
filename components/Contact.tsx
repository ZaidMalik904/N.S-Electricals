import { Phone, MapPin, UserCheck, Clock, Zap } from "lucide-react";
import { WhatsAppIcon } from "./FloatingContact";

export default function Contact() {
  const whatsappUrl =
    "https://wa.me/918668476768?text=Hello%20Shashikant%20Bahule%2C%20I%20would%20like%20to%20discuss%20an%20electrical%20work%20requirement%20in%20Hadapsar%2C%20Pune%2C%20Maharashtra.";

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-black text-[#0B192C] tracking-widest uppercase bg-yellow-100 text-[#0B192C] px-4 py-1.5 rounded-full border border-[#FACC15]/40 font-heading">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B192C] font-heading">
            Contact Shashikant Bahule
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            For house wiring, commercial electrical setups, switchboard installations, and repairs across Hadapsar, Pune, Maharashtra, call or WhatsApp us today!
          </p>
        </div>

        {/* 2 Main Direct Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          
          {/* Shashikant Bahule Call Card */}
          <div className="bg-[#0B192C] text-white p-8 sm:p-10 rounded-3xl border-2 border-[#FACC15]/40 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FACC15]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-16 h-16 rounded-2xl bg-[#FACC15] text-[#0B192C] flex items-center justify-center shadow-md font-black">
                  <UserCheck className="w-8 h-8 stroke-[2.2]" />
                </div>
                <span className="text-xs font-black bg-[#FACC15] text-[#0B192C] px-3 py-1 rounded-full uppercase">
                  HADAPSAR, PUNE SPECIALIST
                </span>
              </div>
              
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                  Proprietor / Lead Electrician
                </span>
                <h3 className="text-3xl font-black text-white font-heading mt-1">
                  Shashikant Bahule
                </h3>
                <p className="text-xs text-[#FACC15] font-extrabold mt-1">
                  N.S Electrical&apos;s — Safe Power | Brighter Tomorrow
                </p>
              </div>
            </div>

            <a
              href="tel:+918668476768"
              className="mt-8 inline-flex items-center justify-center gap-3 bg-[#FACC15] hover:bg-[#EAB308] text-[#0B192C] py-4 px-8 rounded-full font-black text-base shadow-lg transition-all active:scale-95 cursor-pointer relative z-10"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>Call: 86684 76768</span>
            </a>
          </div>

          {/* Instant WhatsApp Support Card */}
          <div className="bg-[#25D366] text-white p-8 sm:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-16 h-16 rounded-2xl bg-white/20 text-white flex items-center justify-center shadow-md">
                  <WhatsAppIcon className="w-9 h-9 fill-current" />
                </div>
                <span className="text-xs font-black bg-white text-[#25D366] px-3 py-1 rounded-full uppercase">
                  INSTANT RESPONSE
                </span>
              </div>
              
              <div>
                <span className="text-xs font-bold text-white/90 uppercase tracking-wider block">
                  Direct WhatsApp Chat
                </span>
                <h3 className="text-3xl font-black font-heading text-white mt-1">
                  WhatsApp Consultation
                </h3>
                <p className="text-xs text-emerald-100 font-semibold mt-1">
                  Send your site location or electrical requirement for an instant quote
                </p>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-3 bg-white text-[#25D366] hover:bg-emerald-50 py-4 px-8 rounded-full font-black text-base shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Location & Service Details (2 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* Service Area Card */}
          <div className="bg-[#F8FAFC] p-8 rounded-3xl border border-slate-200 flex flex-col justify-between space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0B192C] text-[#FACC15] flex items-center justify-center shadow-xs font-black">
              <MapPin className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                Primary Service Area
              </span>
              <p className="text-2xl font-black text-[#0B192C] font-heading mt-1">
                Hadapsar, Pune, Maharashtra & Surrounding Regions
              </p>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Providing fast, reliable electrical services for residential apartments, independent bungalows, shops, offices, and industrial units across Hadapsar, Pune, Maharashtra.
              </p>
            </div>
            <div className="pt-2 inline-flex items-center gap-2 text-xs font-black text-yellow-900 bg-yellow-100/90 px-3.5 py-1.5 rounded-full w-fit border border-yellow-300">
              <Zap className="w-3.5 h-3.5 text-[#EAB308] fill-current" />
              <span>Free Site Inspection & Quote in Hadapsar, Pune, Maharashtra</span>
            </div>
          </div>

          {/* Core Commitments Card */}
          <div className="bg-[#0B192C] text-white p-8 rounded-3xl shadow-md flex flex-col justify-between space-y-4 border border-[#FACC15]/30">
            <div className="w-12 h-12 rounded-2xl bg-[#FACC15]/20 text-[#FACC15] flex items-center justify-center font-black">
              <Clock className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <span className="text-xs font-extrabold text-[#FACC15] uppercase tracking-wider block">
                Our Guarantee
              </span>
              <div className="mt-3 space-y-2 text-xs sm:text-sm">
                <div className="flex items-center justify-between font-bold text-gray-100 bg-white/5 p-3 rounded-xl border border-white/10">
                  <span>Quality Service:</span>
                  <span className="text-[#FACC15] font-extrabold">Safe & Certified</span>
                </div>
                <div className="flex items-center justify-between font-bold text-gray-100 bg-white/5 p-3 rounded-xl border border-white/10">
                  <span>Rates:</span>
                  <span className="text-emerald-400 font-extrabold">Affordable</span>
                </div>
                <div className="flex items-center justify-between font-bold text-gray-100 bg-white/5 p-3 rounded-xl border border-white/10">
                  <span>Timelines:</span>
                  <span className="text-[#FACC15] font-extrabold">On Time Delivery</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
