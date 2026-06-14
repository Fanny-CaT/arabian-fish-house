"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, query, orderBy, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { Loader2, Search } from "lucide-react";

export default function AdminReservations() {
  const [reservations, setReservations] = useState<Record<string, unknown>[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    const q = query(collection(db, "reservations"), orderBy("date", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const resData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setReservations(resData);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching reservations:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      await updateDoc(doc(db, "reservations", id), { status: newStatus });
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const filteredReservations = reservations.filter((res: Record<string, unknown>) => {
    const resName = typeof res.name === 'string' ? res.name : '';
    const resCode = typeof res.confirmationCode === 'string' ? res.confirmationCode : '';
    const matchesSearch = resName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          resCode.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || res.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="bg-white rounded-sm shadow-sm border border-navy/10 min-h-[80vh]">
      <div className="p-6 border-b border-navy/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-serif text-navy font-bold">Reservations</h1>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-navy/40" size={18} />
            <input 
              type="text" 
              placeholder="Search name or code..." 
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-navy/20 rounded-sm text-sm focus:border-gold outline-none w-full"
            />
          </div>
          <select 
            value={statusFilter} 
            onChange={e => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-navy/20 rounded-sm text-sm focus:border-gold outline-none bg-white"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      <div className="p-0 overflow-x-auto">
        {loading ? (
          <div className="flex justify-center p-12"><Loader2 className="animate-spin text-navy" size={32} /></div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-cream text-navy font-bold uppercase tracking-widest text-[10px]">
                <th className="p-4 border-b border-navy/10">Date & Time</th>
                <th className="p-4 border-b border-navy/10">Guest</th>
                <th className="p-4 border-b border-navy/10">Details</th>
                <th className="p-4 border-b border-navy/10">Code</th>
                <th className="p-4 border-b border-navy/10">Status</th>
                <th className="p-4 border-b border-navy/10 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredReservations.map(res => (
                <tr key={res.id as string} className="border-b border-navy/5 hover:bg-navy/5 transition-colors text-sm">
                  <td className="p-4">
                    <div className="font-bold text-navy">{res.date as string}</div>
                    <div className="text-navy/60">{res.time as string}</div>
                  </td>
                  <td className="p-4">
                    <div className="font-bold text-navy">{res.name as string}</div>
                    <div className="text-navy/60">{res.phone as string}</div>
                  </td>
                  <td className="p-4">
                    <div>{res.partySize as number} Guests</div>
                    <div className="text-navy/60 text-xs">{res.seating as string}</div>
                  </td>
                  <td className="p-4 font-mono font-bold text-navy/70">{res.confirmationCode as string}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      res.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                      res.status === 'cancelled' ? 'bg-red-100 text-red-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {(res.status as string) || 'pending'}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <select 
                      value={(res.status as string) || 'pending'} 
                      onChange={(e) => updateStatus(res.id as string, e.target.value)}
                      className="px-2 py-1 text-xs border border-navy/20 rounded-sm bg-white outline-none cursor-pointer"
                    >
                      <option value="pending">Mark Pending</option>
                      <option value="confirmed">Confirm</option>
                      <option value="cancelled">Cancel</option>
                    </select>
                  </td>
                </tr>
              ))}
              {filteredReservations.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-navy/50 italic">No reservations found.</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
