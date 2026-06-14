"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Anchor, Sparkles, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-navy/60 z-10" />
          <Image 
            src="https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&q=80" 
            alt="About us background" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="relative z-20 text-center text-white mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold tracking-wider mb-4"
          >
            Our Story
            <span className="block mt-4 text-4xl text-gold" dir="rtl">قصتنا</span>
          </motion.h1>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 bg-white border border-navy/5 shadow-sm rounded-sm">
            <Anchor size={40} className="text-gold mx-auto mb-6" />
            <h3 className="text-2xl font-serif text-navy font-bold mb-4">Heritage</h3>
            <p className="text-navy/70 font-sans text-sm leading-relaxed">Honoring the rich culinary traditions of the Levant, bringing authentic recipes passed down through generations to your table.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-8 bg-white border border-navy/5 shadow-sm rounded-sm">
            <Sparkles size={40} className="text-gold mx-auto mb-6" />
            <h3 className="text-2xl font-serif text-navy font-bold mb-4">Freshness</h3>
            <p className="text-navy/70 font-sans text-sm leading-relaxed">Sourcing only the finest, freshest catch daily from local fishermen to ensure unparalleled quality in every bite.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="p-8 bg-white border border-navy/5 shadow-sm rounded-sm">
            <Heart size={40} className="text-gold mx-auto mb-6" />
            <h3 className="text-2xl font-serif text-navy font-bold mb-4">Hospitality</h3>
            <p className="text-navy/70 font-sans text-sm leading-relaxed">Embracing the true spirit of Arabian generosity, where every guest is treated like family from the moment they arrive.</p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white border-y border-navy/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-serif text-navy font-bold text-center mb-16">Our Journey</h2>
          
          <div className="space-y-16 relative">
            <div className="absolute left-1/2 -ml-px w-0.5 h-full bg-gold/30 hidden md:block" />
            
            {[
              { year: "2015", title: "The Beginning", desc: "Started as a humble family kitchen sharing authentic Levantine seafood recipes with the local community." },
              { year: "2018", title: "First Location", desc: "Opened our doors in the heart of Doha, introducing our signature Fish Fatteh to overwhelming acclaim." },
              { year: "2021", title: "Expansion", desc: "Expanded our menu to include 'Sail Your Way', offering a personalized dining experience." },
              { year: "Today", title: "A Culinary Landmark", desc: "Recognized as a premier dining destination where the sea truly meets the Levant." }
            ].map((milestone, idx) => (
              <motion.div 
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`flex flex-col md:flex-row items-center justify-between w-full ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="w-full md:w-5/12" />
                <div className="w-12 h-12 rounded-full bg-gold text-navy font-bold flex items-center justify-center z-10 my-4 md:my-0 shadow-lg border-4 border-white">
                  <Anchor size={18} />
                </div>
                <div className={`w-full md:w-5/12 bg-cream p-6 rounded-sm border border-navy/10 ${idx % 2 === 0 ? "md:text-right" : "md:text-left"} text-center`}>
                  <span className="text-gold font-bold uppercase tracking-widest text-xs mb-2 block">{milestone.year}</span>
                  <h3 className="text-xl font-serif text-navy font-bold mb-3">{milestone.title}</h3>
                  <p className="text-navy/70 font-sans text-sm">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
