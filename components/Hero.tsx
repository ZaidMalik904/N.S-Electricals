import { ShieldCheck, Phone, ArrowRight, MapPin, Zap, CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "./FloatingContact";
import { LogoIcon } from "./Logo";

export default function Hero() {
  const whatsappUrl =
    "https://wa.me/918668476768?text=Hello%20Shashikant%20Bahule%2C%20I%20would%20like%20to%20inquire%20about%20electrical%20services%20in%20Hadapsar%2C%20Pune%2C%20Maharashtra.%20Please%20share%20details.";

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 text-white overflow-hidden">
      {/* Generated High-Resolution Electrical Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105"
        style={{ backgroundImage: `url('/images/hero-bg.jpg')` }}
      />
      {/* Cinematic dark gradient overlay for optimal readability & contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B192C]/95 via-[#0B192C]/88 to-[#071527]/92 z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B192C]/85 via-transparent to-[#071527] z-0" />

      {/* Background Electrical Glow & Ambient Accent Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FACC15]/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-0 right-0 bottom-0 w-1/3 bg-gradient-to-l from-[#FACC15]/5 to-transparent pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
            
            {/* Top Tagline Badge - Strictly in Single Line */}
            <div className="inline-flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-bold tracking-wide bg-[#FACC15]/15 text-[#FACC15] px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full max-w-full w-fit border border-[#FACC15]/30 shadow-sm backdrop-blur-md whitespace-nowrap overflow-x-auto no-scrollbar">
              <span className="inline-flex items-center gap-1.5 sm:gap-2 font-extrabold text-[#FACC15] shrink-0">
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current animate-pulse shrink-0" />
                <span>Electrical Solutions for a Better Tomorrow</span>
              </span>
              <span className="text-white/40 shrink-0">|</span>
              <span className="inline-flex items-center gap-1 text-white font-semibold text-xs shrink-0">
                <MapPin className="w-3.5 h-3.5 text-[#FACC15] shrink-0" />
                <span>Hadapsar, Pune, Maharashtra</span>
              </span>
            </div>

            {/* Main Brand Title & SEO H1 */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-heading leading-tight text-white">
                  N.S <span className="text-[#FACC15]">Electrical&apos;s</span>
                </h1>
              </div>

              {/* Tagline Bar */}
              <div className="flex items-center gap-2 pt-1 text-xs sm:text-sm md:text-base font-extrabold text-yellow-400 uppercase tracking-widest">
                <span className="w-6 h-[2px] bg-[#FACC15]" />
                <span>SAFE POWER &nbsp;|&nbsp; BRIGHTER TOMORROW</span>
                <span className="w-6 h-[2px] bg-[#FACC15]" />
              </div>

              <p className="text-xl sm:text-2xl font-bold text-gray-200 font-heading pt-2 leading-snug">
                Your Trusted Electrical Partner for Home & Business
              </p>
            </div>

            {/* Core Values Badge Strip */}
            <div className="bg-[#1E293B]/80 backdrop-blur-md border border-[#FACC15]/30 p-3 sm:p-4 rounded-2xl flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-bold text-white shadow-lg">
              <div className="flex items-center gap-2 text-yellow-400">
                <CheckCircle2 className="w-4 h-4 text-[#FACC15] shrink-0" />
                <span>Quality Service</span>
              </div>
              <span className="text-gray-600 hidden sm:inline">|</span>
              <div className="flex items-center gap-2 text-yellow-400">
                <CheckCircle2 className="w-4 h-4 text-[#FACC15] shrink-0" />
                <span>Affordable Rates</span>
              </div>
              <span className="text-gray-600 hidden sm:inline">|</span>
              <div className="flex items-center gap-2 text-yellow-400">
                <CheckCircle2 className="w-4 h-4 text-[#FACC15] shrink-0" />
                <span>On Time Delivery</span>
              </div>
            </div>

            {/* Contact Person Highlight Box */}
            <div className="flex items-center justify-between gap-3 bg-gradient-to-r from-[#FACC15] to-[#EAB308] text-[#0B192C] p-3.5 sm:p-4 rounded-2xl shadow-xl font-bold">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0B192C] text-[#FACC15] flex items-center justify-center font-black text-lg shrink-0 shadow-sm">
                  ⚡
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#0B192C]/80 font-black">Contact Person</div>
                  <div className="text-base sm:text-lg font-black leading-tight">Shashikant Bahule</div>
                </div>
              </div>

              <a
                href="tel:+918668476768"
                className="inline-flex items-center gap-2 bg-[#0B192C] text-[#FACC15] hover:bg-[#071527] px-4 py-2.5 rounded-xl font-extrabold text-sm shadow-md transition-all active:scale-95 shrink-0"
              >
                <Phone className="w-4 h-4 text-[#FACC15]" />
                <span>86684 76768</span>
              </a>
            </div>

            {/* CTA Buttons - Strictly in Single Line */}
            <div className="pt-2 flex flex-row items-center flex-nowrap gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-1">
              <a
                href="tel:+918668476768"
                className="inline-flex items-center justify-center gap-2 bg-[#FACC15] hover:bg-[#EAB308] text-[#0B192C] px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-full font-black text-xs sm:text-sm shadow-xl shadow-yellow-500/20 transition-all duration-200 active:scale-95 cursor-pointer shrink-0 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 fill-current shrink-0" />
                <span>Call (86684 76768)</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm shadow-xl shadow-emerald-500/20 transform hover:-translate-y-0.5 transition-all duration-200 active:scale-95 cursor-pointer shrink-0 whitespace-nowrap"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
                <span>WhatsApp</span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-1.5 border-2 border-white/20 text-white hover:border-[#FACC15] hover:bg-[#FACC15] hover:text-[#0B192C] px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 group shrink-0 whitespace-nowrap"
              >
                <span>Our Services</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
              </a>
            </div>

          </div>

          {/* Right Column - Electrical Poster Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FACC15]/40 bg-gradient-to-br from-[#0B192C] to-[#1E293B] p-6 sm:p-8 space-y-6 text-white group">
              
              {/* Badge Header inside Card */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <LogoIcon className="w-12 h-12 shrink-0" />
                  <div>
                    <div className="font-black text-xl text-white">N.S Electrical&apos;s</div>
                    <div className="text-xs text-[#FACC15] font-bold">Safe Power | Brighter Tomorrow</div>
                  </div>
                </div>
                <div className="bg-[#FACC15] text-[#0B192C] text-[10px] sm:text-xs font-black px-2.5 sm:px-3 py-1 rounded-full flex items-center gap-1 shrink-0">
                  <MapPin className="w-3 h-3" />
                  <span>HADAPSAR, PUNE</span>
                </div>
              </div>

              {/* Poster Service Highlights Grid */}
              <div className="space-y-3">
                <div className="text-xs font-extrabold text-[#FACC15] uppercase tracking-wider">Services List:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-semibold">
                  <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 flex items-center gap-2">
                    <span className="text-[#FACC15] font-bold">🏠</span>
                    <span>House Wiring</span>
                  </div>
                  <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 flex items-center gap-2">
                    <span className="text-[#FACC15] font-bold">🏢</span>
                    <span>Commercial & Industrial</span>
                  </div>
                  <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 flex items-center gap-2">
                    <span className="text-[#FACC15] font-bold">🔌</span>
                    <span>Switch Board Install</span>
                  </div>
                  <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 flex items-center gap-2">
                    <span className="text-[#FACC15] font-bold">💡</span>
                    <span>Lighting Solutions</span>
                  </div>
                  <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 flex items-center gap-2">
                    <span className="text-[#FACC15] font-bold">🔧</span>
                    <span>Repair & Maintenance</span>
                  </div>
                  <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 flex items-center gap-2">
                    <span className="text-[#FACC15] font-bold">⚡</span>
                    <span>New Installation</span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Contact Box */}
              <div className="bg-[#FACC15] text-[#0B192C] p-4 rounded-2xl flex items-center justify-between font-black text-sm">
                <div>
                  <div className="text-[10px] uppercase text-[#0B192C]/70">Call / WhatsApp</div>
                  <div className="text-base font-extrabold">Shashikant Bahule</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-black">8668476768</div>
                  <div className="text-[10px] underline">Contact Today!</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
