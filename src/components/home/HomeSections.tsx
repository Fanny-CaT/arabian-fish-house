"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Waves, Anchor, Sparkles } from "lucide-react";

export function SignatureStory() {
  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute inset-0 border-2 border-gold translate-x-4 translate-y-4 rounded-sm" />
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-sm z-10 bg-navy">
              <Image 
                src="https://images.unsplash.com/photo-1615141982883-c7da0e40cb0b?auto=format&fit=crop&q=80" 
                alt="Levantine Seafood" 
                fill 
                className="object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-8 font-bold leading-tight">
              A Journey Through<br />Levantine Waters
            </h2>
            <div className="space-y-6 text-navy/80 font-sans leading-relaxed">
              <p>
                At Arabian Fish House, we bring together the rich, aromatic flavors of Levantine cuisine with the freshest seafood from the Gulf. Our story is one of heritage, passion, and the eternal connection between the land and the sea.
              </p>
              <p>
                Every dish tells a story of generations past, carefully prepared using traditional recipes passed down through families. From our signature Fish Fatteh to the delicate spices of our Sayadiyah, we honor the culinary traditions of the Middle East.
              </p>
              <p>
                Join us for an unforgettable dining experience where warm hospitality meets culinary excellence, all set within an ambiance that reflects the timeless elegance of Arabian coastal life.
              </p>
            </div>
            <div className="mt-10">
              <Link href="/about" className="text-ocean font-bold uppercase tracking-widest text-sm hover:text-gold transition-colors flex items-center gap-2">
                Discover Our Story
                <span className="w-8 h-[1px] bg-gold block" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function MenuHighlights() {
  const highlights = [
    { name: "AFH Fish Fatteh", price: "60 QAR", img: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80" },
    { name: "Shrimp Caesar Salad", price: "56 QAR", img: "https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&q=80" },
    { name: "Kunafa AFH", price: "42 QAR", img: "https://images.unsplash.com/photo-1588665046200-85f269a91da5?auto=format&fit=crop&q=80" },
    { name: "Grilled Shrimps", price: "76 QAR", img: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&q=80" },
    { name: "Shakshoka Tray", price: "36 QAR", img: "https://images.unsplash.com/photo-1590137536968-386f5c88b50f?auto=format&fit=crop&q=80" },
    { name: "Umm Ali", price: "35 QAR", img: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?auto=format&fit=crop&q=80" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-bold uppercase tracking-widest text-sm mb-4"
          >
            Taste the Ocean
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-navy font-bold"
          >
            Menu Highlights
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative bg-cream rounded-sm overflow-hidden border border-navy/5 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image src={item.img} alt={item.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-60" />
              </div>
              <div className="p-6 relative bg-white group-hover:border-b-4 border-gold transition-all">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-serif font-bold text-navy">{item.name}</h3>
                  <span className="text-gold font-bold">{item.price}</span>
                </div>
                <Link href="/menu" className="text-sm font-sans text-ocean hover:text-navy transition-colors font-medium">
                  View Menu &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ParallaxDivider() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative h-[60vh] min-h-[400px] overflow-hidden flex items-center justify-center border-y-[6px] border-gold">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy/70 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&q=80')" }}
        />
      </motion.div>
      <div className="relative z-20 text-center">
        <h2 className="text-5xl md:text-7xl font-serif text-white font-bold tracking-wider">
          <span className="block mb-4" dir="rtl">صيد اليوم</span>
          <span className="text-gold block">Catch of the Day</span>
        </h2>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  const features = [
    { icon: Waves, title: "Fresh Daily Catch", desc: "Sourced directly from local fishermen every morning." },
    { icon: Anchor, title: "Levantine Heritage", desc: "Authentic recipes passed down through generations." },
    { icon: Sparkles, title: "Private Dining", desc: "Exclusive spaces for your special gatherings." },
    { icon: CheckCircle2, title: "Halal Certified", desc: "100% Halal ingredients prepared with strict standards." },
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-8 bg-white border border-navy/5 rounded-sm shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon size={40} className="text-gold mx-auto mb-6" />
              <h3 className="text-xl font-serif font-bold text-navy mb-4">{feature.title}</h3>
              <p className="text-navy/70 text-sm font-sans leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReservationCtaBand() {
  return (
    <section className="bg-navy py-16 border-y border-gold/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white text-center md:text-left">
            <h2 className="text-3xl font-serif font-bold mb-2">Ready to Join Us?</h2>
            <p className="text-cream/70 font-sans">Book your table now and ensure a memorable dining experience.</p>
          </div>
          <Link 
            href="/reservations" 
            className="bg-gold hover:bg-gold-light text-navy px-10 py-4 rounded-sm font-bold uppercase tracking-wider text-sm whitespace-nowrap transition-colors"
          >
            Book a Table
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <Waves className="mx-auto text-gold mb-8" size={32} />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-6 gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-6 h-6 text-gold fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <p className="text-2xl md:text-3xl font-serif italic text-navy leading-relaxed mb-8">
            &quot;The AFH Fish Fatteh is an absolute masterpiece. The blend of fresh seafood and Levantine spices took me right back to the Mediterranean coast.&quot;
          </p>
          <p className="font-sans font-bold text-ocean uppercase tracking-widest text-sm">— Ahmed M.</p>
        </motion.div>
      </div>
    </section>
  );
}

export function GalleryStrip() {
  const images = [
    "https://images.unsplash.com/photo-1544025162-811114bd311c?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1560684352-8497838a2229?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1579684947550-22e945225d9a?auto=format&fit=crop&q=80",
  ];

  return (
    <section className="flex overflow-x-auto no-scrollbar bg-navy">
      {images.map((src, i) => (
        <div key={i} className="min-w-[250px] md:min-w-[300px] w-1/6 aspect-square relative group overflow-hidden shrink-0">
          <Image src={src} alt="Gallery image" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Sparkles size={32} className="text-gold" />
          </div>
        </div>
      ))}
    </section>
  );
}
