import BookingForm from "@/components/reservations/BookingForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservations | Arabian Fish House",
  description: "Book your table at Arabian Fish House for an unforgettable dining experience.",
};

export default function ReservationsPage() {
  return (
    <>
      <div className="pt-24 bg-navy"></div>
      <div className="min-h-screen bg-cream py-12 px-6">
        <BookingForm />
      </div>
    </>
  );
}
