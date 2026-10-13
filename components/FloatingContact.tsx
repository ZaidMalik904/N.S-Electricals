"use client";

import { Phone, X } from "lucide-react";
import { useState } from "react";

export function WhatsAppIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.306A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.737 0-3.344-.482-4.717-1.319l-.338-.205-2.793.732.745-2.723-.225-.357A7.954 7.954 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
    </svg>
  );
}

export default function FloatingContact() {
  const [showNumbers, setShowNumbers] = useState(false);

  const whatsappUrl =
    "https://wa.me/918668476768?text=Hello%20Shashikant%20Bahule%2C%20I%20would%20like%20to%20discuss%20an%20electrical%20work%20requirement%20in%20Hadapsar%2C%20Pune%2C%20Maharashtra.";

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col items-end gap-3 font-sans">
      {/* Call Popup Drawer */}
      {showNumbers && (
        <div className="bg-[#0B192C] text-white rounded-2xl shadow-2xl p-4 border border-[#FACC15]/40 mb-2 w-64 animate-in slide-in-from-bottom duration-200">
          <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
            <span className="text-xs font-black text-[#FACC15] uppercase tracking-wider">
              Call Direct (Hadapsar, Pune)
            </span>
            <button
              onClick={() => setShowNumbers(false)}
              className="text-gray-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2.5">
            <a
              href="tel:+918668476768"
              className="flex items-center justify-between p-3 rounded-xl bg-yellow-500/20 text-[#FACC15] hover:bg-yellow-500/30 transition-colors border border-[#FACC15]/40"
            >
              <div>
                <div className="text-xs font-bold text-gray-200">Shashikant Bahule</div>
                <div className="text-sm font-black text-[#FACC15]">+91 86684 76768</div>
              </div>
              <Phone className="w-4 h-4 text-[#FACC15]" />
            </a>
          </div>
        </div>
      )}

      {/* Stacked Vertical Buttons */}
      <div className="flex flex-col items-center gap-3">
        {/* WhatsApp Floating Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group relative border-2 border-white"
        >
          <WhatsAppIcon className="w-8 h-8 fill-current" />
          <span className="absolute right-16 bg-[#25D366] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            WhatsApp Shashikant
          </span>
        </a>

        {/* Call Floating Button */}
        <button
          onClick={() => setShowNumbers(!showNumbers)}
          aria-label="Call Shashikant Bahule"
          className="w-14 h-14 rounded-full bg-[#0B192C] text-[#FACC15] border-2 border-[#FACC15] flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group relative cursor-pointer"
        >
          <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          <span className="absolute right-16 bg-[#0B192C] text-[#FACC15] text-xs font-extrabold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-[#FACC15]">
            Call 8668476768
          </span>
        </button>
      </div>
    </div>
  );
}
