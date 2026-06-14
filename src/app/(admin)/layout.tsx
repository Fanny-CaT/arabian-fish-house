"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import Link from "next/link";
import { Calendar, MessageSquare, LogOut, Loader2 } from "lucide-react";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<unknown | null>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: unknown) {
      setError((err as Error).message || "Failed to login");
    }
  };

  const handleLogout = () => signOut(auth);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-cream"><Loader2 className="animate-spin text-navy" size={40} /></div>;
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream px-6">
        <div className="bg-white p-8 rounded-sm shadow-xl border border-navy/10 w-full max-w-md">
          <h1 className="text-3xl font-serif text-navy font-bold text-center mb-8">Admin Access</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            {error && <div className="bg-red-50 text-red-500 p-3 rounded-sm text-sm text-center">{error}</div>}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-3 border border-navy/20 rounded-sm focus:border-gold outline-none" required />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-3 border border-navy/20 rounded-sm focus:border-gold outline-none" required />
            </div>
            <button type="submit" className="w-full bg-navy text-white py-3 rounded-sm font-bold uppercase tracking-wider hover:bg-navy-light transition-colors">Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-navy text-white flex flex-col min-h-screen sticky top-0">
        <div className="p-6 border-b border-white/10">
          <Link href="/" className="text-2xl font-serif font-bold text-gold">AFH Admin</Link>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin/reservations" className={`flex items-center gap-3 px-4 py-3 rounded-sm transition-colors ${pathname === '/admin/reservations' ? 'bg-gold text-navy font-bold' : 'hover:bg-white/5 text-white/70 hover:text-white'}`}>
            <Calendar size={18} />
            Reservations
          </Link>
          <Link href="/admin/messages" className={`flex items-center gap-3 px-4 py-3 rounded-sm transition-colors ${pathname === '/admin/messages' ? 'bg-gold text-navy font-bold' : 'hover:bg-white/5 text-white/70 hover:text-white'}`}>
            <MessageSquare size={18} />
            Messages
          </Link>
        </nav>
        <div className="p-4 border-t border-white/10">
          <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 w-full text-left text-white/70 hover:text-white hover:bg-white/5 rounded-sm transition-colors">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
