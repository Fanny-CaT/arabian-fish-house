"use client";


import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Clock, Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(8, "Valid phone number is required"),
  subject: z.enum(["General Inquiry", "Feedback", "Careers", "Press", "Other"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { subject: "General Inquiry" },
  });

  const onSubmit = async () => {
    // Simulate API
    await new Promise(resolve => setTimeout(resolve, 1500));
    alert("Message sent successfully!");
    form.reset();
  };

  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-serif text-navy font-bold text-center mb-16 uppercase tracking-widest">
          Contact Us
        </h1>

        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-sm shadow-sm border border-navy/5 overflow-hidden">
          {/* Left: Map */}
          <div className="w-full lg:w-1/2 min-h-[400px] relative bg-navy/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115409.11717804473!2d51.44222047466336!3d25.284000305101662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x44d9319f78cfd4b1!2sDoha%2C%20Qatar!5e0!3m2!1sen!2sus!4v1709664531234!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: "100%", position: "absolute", inset: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Right: Form */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12">
            <h2 className="text-3xl font-serif text-navy font-bold mb-6">Send a Message</h2>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">Name</label>
                  <input type="text" {...form.register("name")} className="w-full p-3 border border-navy/20 rounded-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none" />
                  {form.formState.errors.name && <p className="text-red-500 text-xs mt-1">{form.formState.errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">Phone</label>
                  <input type="tel" {...form.register("phone")} className="w-full p-3 border border-navy/20 rounded-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none" />
                  {form.formState.errors.phone && <p className="text-red-500 text-xs mt-1">{form.formState.errors.phone.message}</p>}
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">Email</label>
                <input type="email" {...form.register("email")} className="w-full p-3 border border-navy/20 rounded-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none" />
                {form.formState.errors.email && <p className="text-red-500 text-xs mt-1">{form.formState.errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">Subject</label>
                <select {...form.register("subject")} className="w-full p-3 border border-navy/20 rounded-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none bg-white">
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Careers">Careers</option>
                  <option value="Press">Press</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">Message</label>
                <textarea {...form.register("message")} rows={4} className="w-full p-3 border border-navy/20 rounded-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none resize-none" />
                {form.formState.errors.message && <p className="text-red-500 text-xs mt-1">{form.formState.errors.message.message}</p>}
              </div>

              <button type="submit" disabled={form.formState.isSubmitting} className="w-full bg-navy text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-sm hover:bg-navy-light transition-colors flex items-center justify-center gap-2">
                <Send size={18} />
                {form.formState.isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-8 border border-navy/5 shadow-sm rounded-sm text-center">
            <MapPin size={32} className="text-gold mx-auto mb-4" />
            <h3 className="text-lg font-serif font-bold text-navy mb-2">Location</h3>
            <p className="text-navy/70 font-sans text-sm">Doha, Qatar<br />(Full address here)</p>
          </div>
          <div className="bg-white p-8 border border-navy/5 shadow-sm rounded-sm text-center">
            <Clock size={32} className="text-gold mx-auto mb-4" />
            <h3 className="text-lg font-serif font-bold text-navy mb-2">Hours</h3>
            <p className="text-navy/70 font-sans text-sm">Sun-Wed: 12:00 PM - 11:30 PM<br />Thu-Sat: 12:00 PM - 12:30 AM</p>
          </div>
          <div className="bg-white p-8 border border-navy/5 shadow-sm rounded-sm text-center">
            <Phone size={32} className="text-gold mx-auto mb-4" />
            <h3 className="text-lg font-serif font-bold text-navy mb-2">Contact</h3>
            <p className="text-navy/70 font-sans text-sm">+974 1234 5678<br />info@arabianfishhouse.qa</p>
          </div>
        </div>
      </div>
    </div>
  );
}
