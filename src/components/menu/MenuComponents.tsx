"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuCategory, menuData } from "@/lib/menuData";

const categories: MenuCategory[] = [
  "Breakfast", "Flavours of the Levant", "Cold Appetizers", "Fatteh", 
  "Soups", "Hot Appetizers", "Salads", "Fish Appetizers", "From the Sea", 
  "Main Course", "Desserts", "Hot Drinks", "Refreshments"
];

export function MenuContainer() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("Breakfast");
  const [filter, setFilter] = useState<"All" | "Vegetarian" | "Seafood">("All");

  const filteredItems = menuData.filter(item => {
    if (item.category !== activeCategory) return false;
    if (filter === "Vegetarian" && !item.dietary?.includes("V")) return false;
    if (filter === "Seafood" && !item.dietary?.includes("S")) return false;
    return true;
  });

  return (
    <div className="py-24 bg-cream min-h-screen">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-serif text-navy font-bold text-center mb-12 uppercase tracking-widest">
          Our Menu
        </h1>

        <div className="sticky top-[80px] z-30 bg-cream/90 backdrop-blur-md py-4 mb-8 border-b border-navy/10 overflow-x-auto no-scrollbar">
          <div className="flex space-x-6 min-w-max px-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm font-sans uppercase tracking-widest pb-2 border-b-2 transition-colors whitespace-nowrap ${
                  activeCategory === cat ? "border-gold text-navy font-bold" : "border-transparent text-navy/50 hover:text-navy"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center space-x-4 mb-12">
          {(["All", "Vegetarian", "Seafood"] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                filter === f ? "bg-navy text-white border-navy" : "bg-transparent text-navy border-navy hover:bg-navy/5"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-serif text-gold mb-8 border-b border-gold/30 pb-4">{activeCategory}</h2>
          
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map(item => (
                <motion.div
                  key={item.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-6 rounded-sm shadow-sm border border-navy/5 relative group"
                >
                  {item.featured && (
                    <div className="absolute top-0 right-0 bg-gold text-navy text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-bl-sm">
                      Signature
                    </div>
                  )}
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-serif font-bold text-navy max-w-[70%]">{item.name}</h3>
                    <span className="text-ocean font-bold whitespace-nowrap ml-4">{item.price}</span>
                  </div>
                  {item.description && (
                    <p className="text-sm font-sans text-navy/60 italic mb-4 leading-relaxed">{item.description}</p>
                  )}
                  {item.dietary && item.dietary.length > 0 && (
                    <div className="flex gap-2 mt-3">
                      {item.dietary.map(d => (
                        <span key={d} className="w-6 h-6 rounded-full bg-cream border border-navy/10 flex items-center justify-center text-xs font-bold text-navy/70" title={d === 'V' ? 'Vegetarian' : d === 'S' ? 'Seafood' : d === 'D' ? 'Dairy' : 'Gluten'}>
                          {d}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
            {filteredItems.length === 0 && (
              <p className="text-navy/50 font-sans italic col-span-full">No items found matching the current filters.</p>
            )}
          </motion.div>
        </div>

        {activeCategory === "From the Sea" && (
          <SailYourWay />
        )}
      </div>
    </div>
  );
}

function SailYourWay() {
  const steps = ["Choose Fish", "Cooking Method", "Sides & Sauces"];
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="mt-24 p-8 bg-navy text-white rounded-sm relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524824267900-2fa9cbf7a506?auto=format&fit=crop&q=80')", backgroundSize: "cover" }} />
      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-gold mb-4">Sail Your Way</h2>
          <p className="font-sans text-white/70 max-w-2xl mx-auto">Customize your seafood experience exactly how you like it. Priced by weight.</p>
        </div>
        
        <div className="flex justify-center mb-12">
          {steps.map((step, idx) => (
            <div key={step} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold font-serif ${activeStep >= idx ? "bg-gold text-navy" : "bg-white/10 text-white"}`}>
                {idx + 1}
              </div>
              <span className={`ml-3 text-sm font-sans uppercase tracking-widest hidden md:block ${activeStep >= idx ? "text-gold" : "text-white/50"}`}>{step}</span>
              {idx < steps.length - 1 && <div className={`w-12 md:w-24 h-[1px] mx-4 ${activeStep > idx ? "bg-gold" : "bg-white/10"}`} />}
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-sm">
          {activeStep === 0 && (
            <motion.div initial={{opacity:0}} animate={{opacity:1}} className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Hamour", "Seabream", "Seabass", "Jash", "Halwayo", "Safi"].map(fish => (
                <button key={fish} className="p-4 border border-white/20 hover:border-gold hover:bg-gold/10 transition-colors text-center font-serif text-lg">{fish}</button>
              ))}
            </motion.div>
          )}
          {activeStep === 1 && (
            <motion.div initial={{opacity:0}} animate={{opacity:1}} className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["Grilled", "Fried", "Salt Baked", "Oven Baked", "Samak Harra"].map(method => (
                <button key={method} className="p-4 border border-white/20 hover:border-gold hover:bg-gold/10 transition-colors text-center font-serif text-lg">{method}</button>
              ))}
            </motion.div>
          )}
          {activeStep === 2 && (
            <motion.div initial={{opacity:0}} animate={{opacity:1}} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-gold font-bold mb-4 uppercase tracking-widest text-sm">Sides</h4>
                <div className="grid grid-cols-2 gap-3">
                  {["Machboos Rice", "Sayadieh Rice", "White Rice", "Fries"].map(side => (
                    <button key={side} className="p-3 border border-white/20 hover:border-gold text-sm">{side}</button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-gold font-bold mb-4 uppercase tracking-widest text-sm">Sauces</h4>
                <div className="grid grid-cols-2 gap-3">
                  {["Lemon Garlic", "AFH Special", "Tartar", "Tahini"].map(sauce => (
                    <button key={sauce} className="p-3 border border-white/20 hover:border-gold text-sm">{sauce}</button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          <div className="flex justify-between mt-12">
            <button 
              onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
              className={`px-6 py-2 border border-white/30 text-sm uppercase tracking-wider ${activeStep === 0 ? "opacity-0 pointer-events-none" : ""}`}
            >
              Back
            </button>
            <button 
              onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
              className={`px-6 py-2 bg-gold text-navy font-bold text-sm uppercase tracking-wider ${activeStep === steps.length - 1 ? "opacity-0 pointer-events-none" : ""}`}
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
