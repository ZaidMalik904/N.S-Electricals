"use client";

import { Phone, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export function WhatsAppIcon({
  className = "w-6 h-6",
  alt = "WhatsApp",
}: {
  className?: string;
  alt?: string;
}) {
  return (
    <Image
      src="/images/whatsapp.png"
      alt={alt}
      width={48}
      height={48}
      className={`object-contain shrink-0 inline-block ${className}`}
    />
  );
}

export default function FloatingContact() {
  const [showNumbers, setShowNumbers] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappUrl =
    "https://wa.me/918668476768?text=Hello%20Shashikant%20Bahule%2C%20I%20would%20like%20to%20discuss%20an%20electrical%20work%20requirement%20in%20Hadapsar%2C%20Pune%2C%20Maharashtra.";

  useEffect(() => {
    const handleScroll = () => {
      // Appear when user scrolls down past 120px
      setScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Listen to menu-open class on body
  useEffect(() => {
    const checkMenu = () => {
      setMenuOpen(document.body.classList.contains("menu-open"));
    };

    const observer = new MutationObserver(checkMenu);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    checkMenu();

    return () => observer.disconnect();
  }, []);

  if (!scrolled || menuOpen) return null;

  return (
    <div className="floating-contact-container">
      {/* Mobile Bottom Fixed Action Bar (Appears on Scroll) */}
      <div className="fixed bottom-3 left-3 right-3 z-50 flex md:hidden items-center gap-2 bg-[#0B192C]/95 backdrop-blur-md p-2 rounded-2xl border border-[#FACC15]/40 shadow-2xl animate-in slide-in-from-bottom duration-300">
        <a
          href="tel:+918668476768"
          className="flex-1 flex items-center justify-center gap-2 bg-[#FACC15] hover:bg-[#EAB308] text-[#0B192C] py-2.5 px-3 rounded-xl font-black text-xs shadow-md active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 fill-current" />
          <span>Call 86684 76768</span>
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 px-3 rounded-xl font-bold text-xs shadow-md active:scale-95 transition-transform shadow-emerald-500/20"
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>

      {/* Desktop Floating Action Buttons (Appears on Scroll) */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col items-end gap-3 font-sans animate-in fade-in slide-in-from-bottom-3 duration-300">
        {/* Call Popup Drawer */}
        {showNumbers && (
          <div className="bg-[#0B192C] text-white rounded-2xl shadow-2xl p-4 border border-[#FACC15]/40 mb-2 w-64 animate-in slide-in-from-bottom duration-200">
            <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
              <span className="text-xs font-black text-[#FACC15] uppercase tracking-wider">
                Call Direct (Hadapsar, Pune)
              </span>
              <button
                onClick={() => setShowNumbers(false)}
                className="text-gray-400 hover:text-white p-1 cursor-pointer"
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
            className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group relative drop-shadow-xl"
          >
            <WhatsAppIcon className="w-14 h-14" />
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
    </div>
  );
}
