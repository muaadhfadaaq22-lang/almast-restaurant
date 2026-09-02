"use client";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Phone, ArrowDown, Menu, BookOpen, CheckCircle2, Award } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export function Hero() {
  const ref = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // تأثير Parallax
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  // Navbar الذكي: يختفي عند التمرير لأسفل، يظهر عند التمرير لأعلى
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const currentScroll = latest;
    if (currentScroll > lastScrollY && currentScroll > 0.05) {
      setIsNavbarVisible(false); // التمرير لأسفل → إخفاء
    } else {
      setIsNavbarVisible(true); // التمرير لأعلى → إظهار
    }
    setLastScrollY(currentScroll);
  });

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* الخلفية مع تأثير Parallax */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Almast Restaurant - Authentic Turkish Dining Experience"
          fill
          className="object-cover scale-105"
          priority
        />
      </motion.div>

      {/* التظليل السينمائي المتدرج */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#1A0F0A]/85 via-[#1A0F0A]/55 to-[#1A0F0A]/25" />

      {/* توهج دافئ في المنتصف */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.10)_0%,transparent_60%)]" />

      {/* =============== NAVBAR الذكي =============== */}
      <motion.nav
        initial={{ opacity: 0, y: -40 }}
        animate={{
          opacity: isNavbarVisible ? 1 : 0,
          y: isNavbarVisible ? 0 : -80,
        }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
        className="absolute top-0 left-0 right-0 z-30 px-6 md:px-10 py-5 pointer-events-auto"
        style={{ pointerEvents: isNavbarVisible ? "auto" : "none" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* الشعار */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#1A0F0A] font-serif text-xl font-bold shadow-lg">
              A
            </div>
            <span className="font-serif text-2xl font-bold text-white tracking-wide drop-shadow-lg">
              Almast
            </span>
          </div>

          {/* روابط التنقل - Desktop */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/85">
            <a href="#menu" className="hover:text-[#D4AF37] transition-colors duration-300 relative group">
              Menu
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#specials" className="hover:text-[#D4AF37] transition-colors duration-300 relative group">
              Specials
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#about" className="hover:text-[#D4AF37] transition-colors duration-300 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#reservation" className="hover:text-[#D4AF37] transition-colors duration-300 relative group">
              Reservation
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#location" className="hover:text-[#D4AF37] transition-colors duration-300 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
            </a>
          </div>

          {/* زر الحجز - Desktop */}
          <div className="hidden md:block">
            <Button
              className="bg-[#C74E2E] hover:bg-[#A83D22] text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Book a Table
            </Button>
          </div>

          {/* زر القائمة - Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* قائمة الجوال */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 bg-[#1A0F0A]/95 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4 text-white/90 text-lg">
              <a href="#menu" onClick={() => setIsMenuOpen(false)} className="hover:text-[#D4AF37] transition">Menu</a>
              <a href="#specials" onClick={() => setIsMenuOpen(false)} className="hover:text-[#D4AF37] transition">Specials</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-[#D4AF37] transition">About</a>
              <a href="#reservation" onClick={() => setIsMenuOpen(false)} className="hover:text-[#D4AF37] transition">Reservation</a>
              <a href="#location" onClick={() => setIsMenuOpen(false)} className="hover:text-[#D4AF37] transition">Contact</a>
              <Button className="bg-[#C74E2E] hover:bg-[#A83D22] text-white px-6 py-3 rounded-full">
                Book a Table
              </Button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* =============== المحتوى الرئيسي =============== */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-20 flex h-full flex-col items-center justify-center text-center px-4"
      >
        {/* شارات التميز */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex flex-wrap items-center gap-3 mb-5 justify-center"
        >
          {/* شارة Halal */}
          <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 px-4 py-1.5 rounded-full">
            <CheckCircle2 size={14} className="text-[#D4AF37]" />
            <span className="text-xs font-semibold text-white/90 tracking-wide uppercase">
              Halal Certified
            </span>
          </div>

          {/* شارة أفضل مطعم */}
          <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 px-4 py-1.5 rounded-full">
            <Award size={14} className="text-[#D4AF37]" />
            <span className="text-xs font-semibold text-white/90 tracking-wide uppercase">
              Best Turkish Restaurant 2024
            </span>
          </div>
        </motion.div>

        {/* شريط التقييم */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex items-center gap-2 mb-6"
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-[#D4AF37] text-[#D4AF37]" />
            ))}
          </div>
          <span className="text-sm text-white/85 font-medium">
            4.9 · 200+ Google Reviews
          </span>
        </motion.div>

        {/* العنوان الرئيسي */}
        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-4 tracking-tight"
          style={{ color: "#FDF8F3", textShadow: "0 4px 40px rgba(0,0,0,0.6)" }}
        >
          Almast
        </motion.h1>

        {/* فاصل زخرفي */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="flex items-center gap-3 mb-5"
        >
          <span className="h-px w-16 md:w-24 bg-[#D4AF37]" />
          <span className="text-[#D4AF37] text-sm">✦</span>
          <span className="h-px w-16 md:w-24 bg-[#D4AF37]" />
        </motion.div>

        {/* العنوان الفرعي */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.8 }}
          className="font-serif text-xl md:text-3xl mb-4 max-w-2xl"
          style={{ color: "rgba(253,248,243,0.92)", textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
        >
          Authentic Turkish & Mediterranean Cuisine
        </motion.p>

        {/* وصف مختصر */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="text-sm md:text-base mb-9 max-w-xl mx-auto"
          style={{ color: "rgba(253,248,243,0.65)" }}
        >
          Stone-oven pide, charcoal-grilled kebabs, and a luxurious Turkish breakfast experience in the heart of Windsor.
        </motion.p>

        {/* أزرار الدعوة */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7, ease: "easeOut" }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-[#C74E2E] hover:bg-[#A83D22] text-white px-8 py-6 text-lg rounded-full font-medium shadow-[0_10px_40px_rgba(199,78,46,0.45)] hover:shadow-[0_10px_50px_rgba(199,78,46,0.6)] transition-all duration-300 hover:scale-105"
          >
            Reserve Your Table
          </Button>

          {/* زر View Menu الجديد */}
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            View Menu
          </Button>

          <Button
            size="lg"
            variant="ghost"
            className="text-white/90 hover:text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now
          </Button>
        </motion.div>

        {/* معلومات سريعة */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.25, duration: 0.8 }}
          className="flex items-center gap-6 mt-9 text-sm text-white/60"
        >
          <span className="flex items-center gap-2">
            <MapPin size={14} className="text-[#D4AF37]" />
            4326 Walker Rd, Windsor
          </span>
          <span className="hidden md:inline-block w-px h-4 bg-white/20" />
          <span>Open Daily: 10 AM – 10 PM</span>
        </motion.div>
      </motion.div>

      {/* مؤشر التمرير */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.7, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/50 hover:text-white/80 cursor-pointer transition"
      >
        <ArrowDown size={22} />
      </motion.div>
    </section>
  );
}
