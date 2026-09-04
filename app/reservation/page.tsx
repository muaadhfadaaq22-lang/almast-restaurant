import { Reservation } from "@/components/Reservation";

export const metadata = {
  title: "Reserve a Table | Almast Turkish & Mediterranean Cuisine",
  description: "Book your table at Almast - authentic Turkish dining in Windsor.",
};

export default function ReservationPage() {
  return (
    <div className="pt-10">
      <div className="text-center mb-12 px-4">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-secondary mb-4">
          Reserve Your Table
        </h1>
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="h-px w-16 bg-[#D4AF37]" />
          <span className="text-[#D4AF37]">✦</span>
          <span className="h-px w-16 bg-[#D4AF37]" />
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Join us for an unforgettable dining experience. Book online and we'll confirm shortly.
        </p>
      </div>
      <Reservation />
    </div>
  );
}
