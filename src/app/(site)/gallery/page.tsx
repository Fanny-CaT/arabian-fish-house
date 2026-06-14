"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "https://images.unsplash.com/photo-1544025162-811114bd311c?auto=format&fit=crop&q=80", category: "Food" },
  { src: "https://images.unsplash.com/photo-1560684352-8497838a2229?auto=format&fit=crop&q=80", category: "Atmosphere" },
  { src: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&q=80", category: "Food" },
  { src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80", category: "Food" },
  { src: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&q=80", category: "Atmosphere" },
  { src: "https://images.unsplash.com/photo-1579684947550-22e945225d9a?auto=format&fit=crop&q=80", category: "Events" },
  { src: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&q=80", category: "Atmosphere" },
  { src: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80", category: "Food" },
  { src: "https://images.unsplash.com/photo-1588665046200-85f269a91da5?auto=format&fit=crop&q=80", category: "Food" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState<number | null>(null);

  const filteredImages = filter === "All" ? images : images.filter(img => img.category === filter);

  const nextImage = () => setSelectedImg(prev => (prev === null ? null : (prev + 1) % filteredImages.length));
  const prevImage = () => setSelectedImg(prev => (prev === null ? null : (prev - 1 + filteredImages.length) % filteredImages.length));

  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-serif text-navy font-bold text-center mb-12 uppercase tracking-widest">
          Gallery
        </h1>

        <div className="flex justify-center space-x-4 mb-16 overflow-x-auto no-scrollbar pb-2">
          {["All", "Food", "Atmosphere", "Events"].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all border whitespace-nowrap ${
                filter === f ? "bg-navy text-white border-navy" : "bg-transparent text-navy border-navy hover:bg-navy/5"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredImages.map((img, idx) => (
              <motion.div
                layout
                key={img.src}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-sm"
                onClick={() => setSelectedImg(idx)}
              >
                <Image 
                  src={img.src} 
                  alt={`Gallery image ${idx}`} 
                  width={600} 
                  height={800} 
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold uppercase tracking-widest text-sm border-b border-gold pb-1">View</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy/95 flex items-center justify-center backdrop-blur-sm"
          >
            <button onClick={() => setSelectedImg(null)} className="absolute top-6 right-6 text-white/70 hover:text-white p-2">
              <X size={32} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4">
              <ChevronLeft size={48} />
            </button>
            <div className="relative w-[90vw] h-[80vh]" onClick={(e) => e.stopPropagation()}>
              <Image 
                src={filteredImages[selectedImg].src} 
                alt="Fullscreen gallery" 
                fill 
                className="object-contain"
              />
            </div>
            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4">
              <ChevronRight size={48} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
