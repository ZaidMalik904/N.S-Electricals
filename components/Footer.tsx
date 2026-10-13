import Logo from "./Logo";
import { Phone, MapPin, Zap } from "lucide-react";
import { WhatsAppIcon } from "./FloatingContact";

export default function Footer() {
  const whatsappUrl =
    "https://wa.me/918668476768?text=Hello%20Shashikant%20Bahule%2C%20I%20would%20like%20to%20discuss%20an%20electrical%20work%20requirement%20in%20Hadapsar%2C%20Pune%2C%20Maharashtra.";

  return (
    <footer className="bg-[#0B192C] text-white pt-16 pb-8 border-t border-[#FACC15]/30 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="light" size="lg" />

            <p className="text-sm font-black text-[#FACC15] uppercase tracking-wider">
              SAFE POWER | BRIGHTER TOMORROW
            </p>

            <p className="text-xs text-gray-300 max-w-md leading-relaxed">
              Your trusted electrical partner for home & business in Hadapsar, Pune, Maharashtra. Specializing in house wiring, commercial & industrial solutions, switchboard installations, lighting, and emergency repairs.
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs text-emerald-400 font-extrabold">
              <Zap className="w-4 h-4 text-[#FACC15] fill-current shrink-0" />
              <span>Quality Service | Affordable Rates | On Time Delivery</span>
            </div>
          </div>

          {/* Quick Anchor Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-sm font-black text-[#FACC15] font-heading uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs font-semibold text-gray-300">
              <li>
                <a href="#home" className="hover:text-[#FACC15] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FACC15] transition-colors">
                  About N.S Electrical&apos;s
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FACC15] transition-colors">
                  Our Electrical Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#FACC15] transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#FACC15] transition-colors">
                  Completed Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FACC15] transition-colors">
                  Contact Shashikant Bahule
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-sm font-black text-[#FACC15] font-heading uppercase tracking-wider">
              Contact Details
            </h3>
            <div className="space-y-3.5 text-xs text-gray-300">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#FACC15] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Shashikant Bahule:</div>
                  <a href="tel:+918668476768" className="hover:text-[#FACC15] font-extrabold text-white transition-colors">
                    +91 86684 76768
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0 fill-current" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] font-extrabold transition-colors"
                >
                  WhatsApp: 86684 76768
                </a>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-[#FACC15] shrink-0" />
                <span>Service Location: Hadapsar, Pune, Maharashtra</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 text-center space-y-2">
          <div className="text-sm font-black tracking-wider text-white font-heading">
            N.S Electrical&apos;s <span className="text-[#FACC15]">•</span> Safe Power | Brighter Tomorrow
          </div>
          <p className="text-[11px] text-gray-400">
            © {new Date().getFullYear()} N.S Electrical&apos;s. All Rights Reserved. Hadapsar, Pune, Maharashtra.
          </p>
        </div>

      </div>
    </footer>
  );
}
