"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy/60 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&q=80')" }}
        />
      </motion.div>

      <div className="relative z-20 container mx-auto px-6 text-center text-white flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0 }}
          className="mb-6"
        >
          <div className="w-16 h-1 bg-gold mx-auto mb-6" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-[96px] font-serif font-bold uppercase tracking-widest leading-none mb-6"
        >
          Arabian<br className="md:hidden" /> Fish House
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl font-serif italic mb-12 text-cream/90"
        >
          Where the Sea Meets the Levant
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Link
            href="/reservations"
            className="bg-gold hover:bg-gold-light text-navy px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-sm transition-all"
          >
            Reserve a Table
          </Link>
          <Link
            href="/menu"
            className="border border-white/50 hover:border-white hover:bg-white/10 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-sm transition-all"
          >
            Explore Menu
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={32} className="text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
