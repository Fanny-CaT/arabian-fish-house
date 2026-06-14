"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import Image from "next/image";

const reservationSchema = z.object({
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  partySize: z.number().min(1).max(20),
  seating: z.enum(["Indoor", "Outdoor", "Private Dining", "No preference"]),
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(8, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  occasion: z.enum(["None", "Birthday", "Anniversary", "Business", "Other"]),
  specialRequests: z.string().max(500).optional(),
});

type ReservationFormValues = z.infer<typeof reservationSchema>;

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState<string | null>(null);

  const form = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      partySize: 2,
      seating: "No preference",
      occasion: "None",
      specialRequests: "",
    },
    mode: "onChange",
  });

  const generateTimeSlots = () => {
    const slots = [];
    for (let i = 12; i <= 22; i++) {
      slots.push(`${i}:00`);
      slots.push(`${i}:30`);
    }
    return slots;
  };

  const nextStep = async () => {
    const fieldsToValidate = step === 1 
      ? ["date", "time", "partySize", "seating"] as const
      : ["name", "phone", "email", "occasion"] as const;
      
    const isValid = await form.trigger(fieldsToValidate);
    if (isValid) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const onSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call to Firebase
    await new Promise(resolve => setTimeout(resolve, 2000));
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setConfirmationCode(code);
    setIsSubmitting(false);
    setStep(4);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-[80vh] bg-white rounded-sm shadow-xl overflow-hidden border border-navy/10 max-w-6xl mx-auto my-12">
      
      {/* Left Panel */}
      <div className="w-full lg:w-2/5 bg-navy text-white p-12 relative flex flex-col justify-between">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80" alt="Restaurant interior" fill className="object-cover" />
        </div>
        <div className="relative z-10">
          <h2 className="text-4xl font-serif text-gold mb-6">Reserve a Table</h2>
          <p className="font-sans text-white/80 mb-12">Join us for an unforgettable Levantine seafood experience in the heart of Qatar.</p>
          
          <div className="space-y-6 font-sans text-sm text-white/70">
            <div>
              <h4 className="text-gold font-bold uppercase tracking-wider mb-2">Hours</h4>
              <p>Sun-Wed: 12:00 PM - 11:30 PM</p>
              <p>Thu-Sat: 12:00 PM - 12:30 AM</p>
            </div>
            <div>
              <h4 className="text-gold font-bold uppercase tracking-wider mb-2">Contact</h4>
              <p>+974 1234 5678</p>
              <p>info@arabianfishhouse.qa</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-3/5 p-8 lg:p-12 relative">
        {step < 4 && (
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-navy/10">
            {[1, 2, 3].map((num) => (
              <div key={num} className={`flex items-center ${step >= num ? "text-navy" : "text-navy/30"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step === num ? "bg-gold text-navy" : step > num ? "bg-navy text-white" : "border-2 border-navy/20"}`}>
                  {step > num ? <CheckCircle2 size={16} /> : num}
                </div>
                <span className="ml-2 font-bold uppercase tracking-widest text-xs hidden sm:block">
                  {num === 1 ? "Details" : num === 2 ? "Guest" : "Confirm"}
                </span>
                {num < 3 && <div className={`w-8 sm:w-16 h-[1px] mx-4 ${step > num ? "bg-navy" : "bg-navy/20"}`} />}
              </div>
            ))}
          </div>
        )}

        <form onSubmit={form.handleSubmit(onSubmit)} className="h-full">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: Details */}
            {step === 1 && (
              <motion.div key="step1" initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-20}} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">Date</label>
                    <input type="date" {...form.register("date")} className="w-full p-3 border border-navy/20 rounded-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none" min={new Date().toISOString().split('T')[0]} />
                    {form.formState.errors.date && <p className="text-red-500 text-xs mt-1">{form.formState.errors.date.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">Time</label>
                    <select {...form.register("time")} className="w-full p-3 border border-navy/20 rounded-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none bg-white">
                      <option value="">Select a time</option>
                      {generateTimeSlots().map(time => <option key={time} value={time}>{time}</option>)}
                    </select>
                    {form.formState.errors.time && <p className="text-red-500 text-xs mt-1">{form.formState.errors.time.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">Party Size</label>
                  <div className="flex items-center border border-navy/20 rounded-sm w-max">
                    <button type="button" onClick={() => form.setValue("partySize", Math.max(1, form.getValues("partySize") - 1))} className="px-4 py-3 hover:bg-navy/5 text-navy font-bold">-</button>
                    <div className="px-6 py-3 border-x border-navy/20 font-bold text-navy w-16 text-center">{form.watch("partySize")}</div>
                    <button type="button" onClick={() => form.setValue("partySize", Math.min(20, form.getValues("partySize") + 1))} className="px-4 py-3 hover:bg-navy/5 text-navy font-bold">+</button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">Seating Preference</label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Indoor", "Outdoor", "Private Dining", "No preference"].map(pref => (
                      <button 
                        key={pref} 
                        type="button"
                        onClick={() => form.setValue("seating", pref as "Indoor" | "Outdoor" | "Private Dining" | "No preference")}
                        className={`p-3 border rounded-sm text-sm transition-colors ${form.watch("seating") === pref ? "border-gold bg-gold/10 text-navy font-bold" : "border-navy/20 hover:border-navy text-navy/70"}`}
                      >
                        {pref}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-6 flex justify-end">
                  <button type="button" onClick={nextStep} className="bg-navy text-white px-8 py-3 rounded-sm font-bold uppercase tracking-wider text-sm hover:bg-navy-light transition-colors">Next Step</button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Guest Info */}
            {step === 2 && (
              <motion.div key="step2" initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-20}} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">Full Name</label>
                  <input type="text" {...form.register("name")} className="w-full p-3 border border-navy/20 rounded-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none" placeholder="John Doe" />
                  {form.formState.errors.name && <p className="text-red-500 text-xs mt-1">{form.formState.errors.name.message}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">Phone Number</label>
                    <div className="flex">
                      <span className="p-3 border border-r-0 border-navy/20 bg-navy/5 text-navy/70 rounded-l-sm font-mono">+974</span>
                      <input type="tel" {...form.register("phone")} className="w-full p-3 border border-navy/20 rounded-r-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none" placeholder="1234 5678" />
                    </div>
                    {form.formState.errors.phone && <p className="text-red-500 text-xs mt-1">{form.formState.errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">Email Address</label>
                    <input type="email" {...form.register("email")} className="w-full p-3 border border-navy/20 rounded-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none" placeholder="john@example.com" />
                    {form.formState.errors.email && <p className="text-red-500 text-xs mt-1">{form.formState.errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">Occasion</label>
                  <select {...form.register("occasion")} className="w-full p-3 border border-navy/20 rounded-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none bg-white">
                    <option value="None">None</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Business">Business</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">Special Requests (Optional)</label>
                  <textarea {...form.register("specialRequests")} rows={3} className="w-full p-3 border border-navy/20 rounded-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none resize-none" placeholder="Dietary requirements, seating preferences, etc." />
                </div>

                <div className="pt-6 flex justify-between">
                  <button type="button" onClick={prevStep} className="text-navy font-bold uppercase tracking-wider text-sm hover:text-gold transition-colors">Back</button>
                  <button type="button" onClick={nextStep} className="bg-navy text-white px-8 py-3 rounded-sm font-bold uppercase tracking-wider text-sm hover:bg-navy-light transition-colors">Review Details</button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Confirm */}
            {step === 3 && (
              <motion.div key="step3" initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-20}} className="space-y-8">
                <div className="bg-cream p-6 rounded-sm border border-gold/30">
                  <h3 className="text-xl font-serif text-navy font-bold mb-4">Reservation Summary</h3>
                  <div className="grid grid-cols-2 gap-y-4 text-sm font-sans">
                    <div>
                      <span className="block text-navy/50 uppercase tracking-widest text-[10px] font-bold mb-1">Date & Time</span>
                      <span className="font-bold text-navy">{form.getValues("date")} at {form.getValues("time")}</span>
                    </div>
                    <div>
                      <span className="block text-navy/50 uppercase tracking-widest text-[10px] font-bold mb-1">Party Size</span>
                      <span className="font-bold text-navy">{form.getValues("partySize")} Guests</span>
                    </div>
                    <div>
                      <span className="block text-navy/50 uppercase tracking-widest text-[10px] font-bold mb-1">Guest Details</span>
                      <span className="font-bold text-navy block">{form.getValues("name")}</span>
                      <span className="text-navy/70">+974 {form.getValues("phone")}</span>
                    </div>
                    <div>
                      <span className="block text-navy/50 uppercase tracking-widest text-[10px] font-bold mb-1">Preferences</span>
                      <span className="font-bold text-navy block">{form.getValues("seating")}</span>
                      {form.getValues("occasion") !== "None" && <span className="text-navy/70 text-xs">Occasion: {form.getValues("occasion")}</span>}
                    </div>
                  </div>
                </div>

                <div className="pt-6 flex justify-between items-center">
                  <button type="button" onClick={prevStep} disabled={isSubmitting} className="text-navy font-bold uppercase tracking-wider text-sm hover:text-gold transition-colors disabled:opacity-50">Back</button>
                  <button type="submit" disabled={isSubmitting} className="bg-gold text-navy px-8 py-3 rounded-sm font-bold uppercase tracking-wider text-sm hover:bg-gold-light transition-colors disabled:opacity-70 flex items-center gap-2">
                    {isSubmitting && <Loader2 size={18} className="animate-spin" />}
                    {isSubmitting ? "Processing..." : "Confirm Reservation"}
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 4: Success */}
            {step === 4 && (
              <motion.div key="step4" initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} className="text-green-600" />
                </div>
                <h2 className="text-3xl font-serif text-navy font-bold mb-4">Reservation Confirmed!</h2>
                <p className="text-navy/70 font-sans mb-8 max-w-md">
                  Thank you, {form.getValues("name")}. Your table has been successfully booked. We&apos;ve sent a confirmation email to {form.getValues("email")}.
                </p>
                <div className="bg-cream border border-gold/30 px-8 py-4 rounded-sm mb-8 inline-block">
                  <p className="text-xs text-navy/50 font-bold uppercase tracking-widest mb-1">Confirmation Code</p>
                  <p className="text-2xl font-mono font-bold text-navy tracking-widest">{confirmationCode}</p>
                </div>
                <button type="button" onClick={() => window.location.href = '/'} className="text-ocean font-bold uppercase tracking-wider text-sm hover:text-navy transition-colors">
                  Return to Home
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </form>
      </div>
    </div>
  );
}
