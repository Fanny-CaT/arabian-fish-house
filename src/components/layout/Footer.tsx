import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-cream pt-16 pb-8 border-t-[3px] border-gold">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1">
            <h2 className="text-3xl font-serif font-bold text-gold mb-4">AFH</h2>
            <p className="font-serif italic text-lg mb-4">
              Where the Sea Meets the Levant
            </p>
            <p className="text-sm opacity-80 mb-6 font-sans">
              Experience the finest seafood and authentic Levantine heritage in the heart of Qatar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cream hover:text-gold transition-colors" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="text-cream hover:text-gold transition-colors" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-cream hover:text-gold transition-colors" aria-label="X (Twitter)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-gold font-bold uppercase tracking-wider mb-6 text-sm">Navigation</h3>
            <ul className="space-y-3 font-sans text-sm">
              <li><Link href="/" className="hover:text-gold transition-colors opacity-90">Home</Link></li>
              <li><Link href="/menu" className="hover:text-gold transition-colors opacity-90">Full Menu</Link></li>
              <li><Link href="/about" className="hover:text-gold transition-colors opacity-90">Our Story</Link></li>
              <li><Link href="/gallery" className="hover:text-gold transition-colors opacity-90">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors opacity-90">Contact Us</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-gold font-bold uppercase tracking-wider mb-6 text-sm">Hours</h3>
            <ul className="space-y-3 font-sans text-sm opacity-90">
              <li className="flex justify-between"><span>Sunday - Wednesday</span> <span>12:00 PM - 11:30 PM</span></li>
              <li className="flex justify-between"><span>Thursday - Saturday</span> <span>12:00 PM - 12:30 AM</span></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-gold font-bold uppercase tracking-wider mb-6 text-sm">Contact</h3>
            <ul className="space-y-3 font-sans text-sm opacity-90">
              <li>Doha, Qatar</li>
              <li>+974 1234 5678</li>
              <li>info@arabianfishhouse.qa</li>
            </ul>
            <div className="mt-8">
              <p className="font-serif text-2xl text-gold text-right" dir="rtl">
                أريبيان فيش هاوس
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-light pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-60 font-sans">
          <p>&copy; {new Date().getFullYear()} Arabian Fish House. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with craft</p>
        </div>
      </div>
    </footer>
  );
}
