import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-white mb-4">Almast</h3>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Authentic Turkish & Mediterranean cuisine in Windsor. Experience the taste of Anatolia.
            </p>
            <div className="flex gap-4 mt-6">
              {/* Instagram SVG */}
              <a href="#" className="text-white/80 hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* Facebook SVG */}
              <a href="#" className="text-white/80 hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li><Link href="#menu" className="hover:text-white transition">Menu</Link></li>
              <li><Link href="#specials" className="hover:text-white transition">Specials</Link></li>
              <li><Link href="#reservation" className="hover:text-white transition">Reservations</Link></li>
              <li><Link href="#location" className="hover:text-white transition">Location</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>4326 Walker Rd, Windsor, ON N8W 3T5</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <a href="tel:+15193656680" className="hover:text-white">+1 (519) 365-6680</a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-0.5 shrink-0" />
                <span>Daily: 10:00 AM – 10:00 PM</span>
              </li>
            </ul>
          </div>

          {/* WhatsApp */}
          <div>
            <h4 className="font-medium text-white mb-4">Order via WhatsApp</h4>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Send us a message to place your order for pickup.
            </p>
            <a
              href="https://wa.me/15193656680?text=Hi%20Almast%2C%20I'd%20like%20to%20place%20an%20order"
              target="_blank"
              className="inline-block bg-[#25D366] hover:bg-[#128C7E] text-white font-medium px-4 py-2 rounded-full text-sm transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-secondary-foreground/60">
          <p>© {new Date().getFullYear()} Almast Turkish & Mediterranean Cuisine. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Designed with <span className="text-primary">♥</span> in Windsor
          </p>
        </div>
      </div>
    </footer>
  );
}