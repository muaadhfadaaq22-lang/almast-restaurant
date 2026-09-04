"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/reservation", label: "Reservation" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // إغلاق القائمة عند تغيير الصفحة
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // تأثير خلفية عند التمرير
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-[#1A0F0A]/95 backdrop-blur-xl shadow-lg" : "bg-[#1A0F0A]/70 backdrop-blur-md"
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        {/* الشعار */}
        <Link href="/" className="flex items-center gap-2 md:gap-3">
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#1A0F0A] font-serif text-lg md:text-xl font-bold">
            A
          </div>
          <span className="font-serif text-xl md:text-2xl font-bold text-white">Almast</span>
        </Link>

        {/* روابط Desktop */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 relative group ${
                pathname === link.href ? "text-[#D4AF37]" : "text-white/80 hover:text-[#D4AF37]"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-[#D4AF37] transition-all duration-300 ${
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* زر الحجز - Desktop */}
        <div className="hidden lg:block">
          <Button className="bg-[#C74E2E] hover:bg-[#A83D22] text-white px-5 py-2 rounded-full text-sm font-medium">
            Book a Table
          </Button>
        </div>

        {/* زر الجوال */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* قائمة الجوال */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#1A0F0A]/98 border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg py-2 border-b border-white/5 ${
                    pathname === link.href ? "text-[#D4AF37]" : "text-white/85"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <Button className="bg-[#C74E2E] hover:bg-[#A83D22] text-white px-6 py-3 rounded-full w-full">
                  Book a Table
                </Button>
                <Button variant="outline" className="border-[#D4AF37]/40 text-white hover:bg-white/10 rounded-full w-full">
                  <Phone size={16} className="mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}