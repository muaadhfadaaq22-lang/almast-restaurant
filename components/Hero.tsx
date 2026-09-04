"use client";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Phone, ArrowDown, BookOpen, CheckCircle2, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export function Hero() {
  const ref = useRef(null);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* الخلفية */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Almast Restaurant"
          fill
          className="object-cover scale-105"
          priority
        />
      </motion.div>

      {/* التظليل */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#1A0F0A]/80 via-[#1A0F0A]/50 to-[#1A0F0A]/20" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.10)_0%,transparent_60%)]" />

      {/* المحتوى */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-20 flex flex-col items-center justify-center text-center px-4 md:px-6 py-24 md:py-32 w-full max-w-5xl mx-auto"
      >
        {/* الشارات - تظهر عموديًا على الجوال */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex flex-col sm:flex-row flex-wrap items-center gap-2 sm:gap-3 mb-4 md:mb-5 justify-center"
        >
          <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 px-3 py-1.5 rounded-full">
            <CheckCircle2 size={14} className="text-[#D4AF37]" />
            <span className="text-xs font-semibold text-white/90 tracking-wide uppercase">
              Halal Certified
            </span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 px-3 py-1.5 rounded-full">
            <Award size={14} className="text-[#D4AF37]" />
            <span className="text-xs font-semibold text-white/90 tracking-wide uppercase">
              Best Turkish 2024
            </span>
          </div>
        </motion.div>

        {/* التقييم */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex items-center gap-2 mb-4 md:mb-6"
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-[#D4AF37] text-[#D4AF37]" />
            ))}
          </div>
          <span className="text-xs md:text-sm text-white/85 font-medium">
            4.9 · 200+ Reviews
          </span>
        </motion.div>

        {/* العنوان */}
        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-3 md:mb-4 tracking-tight"
          style={{ color: "#FDF8F3", textShadow: "0 4px 40px rgba(0,0,0,0.6)" }}
        >
          Almast
        </motion.h1>

        {/* فاصل */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="flex items-center gap-3 mb-3 md:mb-5"
        >
          <span className="h-px w-12 md:w-24 bg-[#D4AF37]" />
          <span className="text-[#D4AF37] text-xs md:text-sm">✦</span>
          <span className="h-px w-12 md:w-24 bg-[#D4AF37]" />
        </motion.div>

        {/* العنوان الفرعي */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.8 }}
          className="font-serif text-lg sm:text-xl md:text-3xl mb-2 md:mb-4 max-w-2xl px-2"
          style={{ color: "rgba(253,248,243,0.92)" }}
        >
          Authentic Turkish & Mediterranean Cuisine
        </motion.p>

        {/* وصف مختصر */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="text-xs sm:text-sm md:text-base mb-6 md:mb-9 max-w-lg md:max-w-xl px-2"
          style={{ color: "rgba(253,248,243,0.65)" }}
        >
          Stone-oven pide, charcoal-grilled kebabs, and a luxurious Turkish breakfast in Windsor.
        </motion.p>

        {/* الأزرار - عمودية على الجوال */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto sm:justify-center px-4 sm:px-0"
        >
          <Link href="/reservation" className="w-full sm:w-auto">
            <Button className="bg-[#C74E2E] hover:bg-[#A83D22] text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-full font-medium w-full sm:w-auto shadow-[0_10px_40px_rgba(199,78,46,0.45)] hover:scale-105 transition-all duration-300">
              Reserve Your Table
            </Button>
          </Link>
          <Link href="/menu" className="w-full sm:w-auto">
            <Button className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-full w-full sm:w-auto hover:scale-105 transition-all duration-300">
              <BookOpen className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              View Menu
            </Button>
          </Link>
          <Link href="tel:+15193656680" className="w-full sm:w-auto">
            <Button className="text-white/90 hover:text-white hover:bg-white/10 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-full w-full sm:w-auto hover:scale-105 transition-all duration-300">
              <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Call Now
            </Button>
          </Link>
        </motion.div>

        {/* معلومات سريعة - عمودية على الجوال */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.25, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 mt-6 md:mt-9 text-xs md:text-sm text-white/60"
        >
          <span className="flex items-center gap-2">
            <MapPin size={12} className="text-[#D4AF37]" />
            4326 Walker Rd, Windsor
          </span>
          <span className="hidden sm:inline-block w-px h-4 bg-white/20" />
          <span>Open Daily: 10 AM – 10 PM</span>
        </motion.div>
      </motion.div>

      {/* مؤشر التمرير - مخفي على الجوال */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.7, duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/50 hidden md:block"
      >
        <ArrowDown size={22} />
      </motion.div>
    </section>
  );
}
