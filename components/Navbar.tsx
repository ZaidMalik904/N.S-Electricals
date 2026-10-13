"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";
import { Phone, Menu, X, ChevronLeft, ChevronRight, MapPin, Zap } from "lucide-react";
import { WhatsAppIcon } from "./FloatingContact";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const announcements = [
    {
      id: 1,
      content: (
        <span>
          <span className="text-[#FACC15] font-black uppercase">Your Trusted Electrical Partner</span> For Home & Business
        </span>
      ),
      highlight: "HADAPSAR, PUNE",
      icon: <MapPin className="w-3.5 h-3.5 text-[#FACC15] inline shrink-0" />,
    },
    {
      id: 2,
      content: (
        <span>
          Quality Service | <span className="text-[#FACC15] font-black uppercase underline">Affordable Rates</span> | On Time Delivery
        </span>
      ),
      highlight: "PROMISE",
      icon: "⚡",
    },
    {
      id: 3,
      content: (
        <span>
          <span className="text-[#FACC15] font-black uppercase">Services:</span> House Wiring | Commercial & Industrial | Switchboards | Lighting
        </span>
      ),
      highlight: "EXPERT",
      icon: "🔌",
    },
    {
      id: 4,
      content: (
        <span>
          Shashikant Bahule: <a href="tel:+918668476768" className="text-[#FACC15] font-black hover:underline">86684 76768</a> (Call / WhatsApp)
        </span>
      ),
      highlight: "DIRECT CONTACT",
      icon: "📞",
    },
    {
      id: 5,
      content: (
        <span>
          <span className="text-[#FACC15] font-black uppercase">Free Site Visit & Quote</span> Available Across Hadapsar, Pune, Maharashtra
        </span>
      ),
      highlight: "FREE QUOTE",
      icon: "⚡",
    },
  ];

  const [tickerIndex, setTickerIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % announcements.length);
    }, 3800);

    return () => clearInterval(timer);
  }, [isPaused, announcements.length]);

  const handlePrevTicker = () => {
    setTickerIndex((prev) =>
      prev === 0 ? announcements.length - 1 : prev - 1
    );
  };

  const handleNextTicker = () => {
    setTickerIndex((prev) => (prev + 1) % announcements.length);
  };

  const currentTicker = announcements[tickerIndex];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "services", "work", "gallery", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Why Us", href: "#why-us", id: "why-us" },
    { name: "Our Work", href: "#work", id: "work" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const whatsappUrl =
    "https://wa.me/918668476768?text=Hello%20Shashikant%20Bahule%2C%20I%20would%20like%20to%20inquire%20about%20electrical%20services%20in%20Hadapsar%2C%20Pune%2C%20Maharashtra.%20Please%20share%20details.";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white ${
          scrolled || mobileMenuOpen
            ? "shadow-md pt-1.5 pb-0"
            : "pt-2 pb-0 border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-1.5">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Logo size="md" />

            {/* Center Nav Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative py-1 text-sm font-semibold transition-colors duration-200 ${
                      isActive
                        ? "text-[#FACC15]"
                        : "text-[#334155] hover:text-[#0B192C]"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#FACC15] rounded-full animate-pulse" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Buttons (WhatsApp + Call) */}
            <div className="hidden sm:flex items-center gap-3">
              {/* WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-full font-bold text-xs shadow-md transform hover:-translate-y-0.5 transition-all duration-200 active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>WhatsApp</span>
              </a>

              {/* Direct Call Button */}
              <a
                href="tel:+918668476768"
                className="inline-flex items-center justify-center gap-2 bg-[#0B192C] hover:bg-[#071527] text-white border border-[#FACC15]/30 px-4 py-2 rounded-full font-bold text-xs shadow-md transform hover:-translate-y-0.5 transition-all duration-200 active:scale-95"
              >
                <Phone className="w-3.5 h-3.5 text-[#FACC15]" />
                <span>86684 76768</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
                className="p-2.5 rounded-xl bg-yellow-50 text-[#FACC15] hover:bg-yellow-100 transition-colors focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#0B192C]" />
                ) : (
                  <Menu className="w-6 h-6 text-[#0B192C]" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* High-Focus Auto-Rotating Bottom Navbar / Ticker Bar - Sleek Height & Red Background */}
        <div className="bg-[#DC2626] text-white py-0.5 px-2 sm:px-4 border-t border-red-700/60 font-sans shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-1.5 sm:gap-3">
            
            {/* Left Arrow Button */}
            <button
              onClick={handlePrevTicker}
              aria-label="Previous announcement"
              className="p-0.5 rounded-full bg-black/20 hover:bg-white text-white hover:text-[#DC2626] transition-colors duration-200 shrink-0 focus:outline-none active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-3 h-3 stroke-[2.5]" />
            </button>

            {/* Center Text Banner */}
            <div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="flex-1 overflow-hidden text-center h-5 flex items-center justify-center cursor-default"
            >
              <div
                key={currentTicker.id}
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold tracking-wide transition-all duration-300 ease-in-out animate-in fade-in"
              >
                <span className="text-[11px] sm:text-xs shrink-0">{currentTicker.icon}</span>
                <span className="bg-[#FACC15] text-[#0B192C] text-[8.5px] sm:text-[9.5px] font-black uppercase px-1.5 py-0.2 rounded shrink-0 hidden xs:inline-block shadow-xs">
                  {currentTicker.highlight}
                </span>
                <span className="text-white font-extrabold max-w-full truncate sm:whitespace-normal">
                  {currentTicker.content}
                </span>
              </div>
            </div>

            {/* Right Arrow Button */}
            <button
              onClick={handleNextTicker}
              aria-label="Next announcement"
              className="p-0.5 rounded-full bg-black/20 hover:bg-white text-white hover:text-[#DC2626] transition-colors duration-200 shrink-0 focus:outline-none active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-3 h-3 stroke-[2.5]" />
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden flex justify-end">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Drawer Panel */}
          <div className="relative w-4/5 max-w-sm bg-white h-full shadow-2xl p-6 flex flex-col justify-between z-10 animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                <Logo size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 text-gray-500 hover:text-[#FACC15] hover:bg-gray-100 rounded-xl transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-6 flex flex-col gap-3">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                        isActive
                          ? "bg-yellow-50 text-[#0B192C] font-black border-l-4 border-[#FACC15]"
                          : "text-[#334155] hover:bg-gray-50 hover:text-[#0B192C]"
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 flex flex-col gap-3">
              {/* Location & Contact Info Card */}
              <div className="p-3 bg-[#0B192C] text-white rounded-2xl text-center text-xs space-y-1.5 border border-[#FACC15]/30">
                <div className="font-extrabold text-[#FACC15] flex items-center justify-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#FACC15]" />
                  <span>Serving Hadapsar, Pune, Maharashtra</span>
                </div>
                <div className="text-gray-200 font-medium">
                  Shashikant Bahule: <span className="text-[#FACC15] font-bold">86684 76768</span>
                </div>
              </div>

              {/* WhatsApp Mobile Action */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 rounded-full font-bold shadow-md active:scale-95 transition-all"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Direct Call Action */}
              <a
                href="tel:+918668476768"
                className="w-full flex items-center justify-center gap-2 bg-[#0B192C] hover:bg-[#071527] text-[#FACC15] border border-[#FACC15] py-3 rounded-full font-bold shadow-md active:scale-95 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Shashikant Bahule</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
