import { Location } from "@/components/Location";
import { Reviews } from "@/components/Reviews";

export const metadata = {
  title: "Contact Us | Almast Turkish & Mediterranean Cuisine",
  description: "Visit Almast at 4326 Walker Rd, Windsor. Call us or order via WhatsApp.",
};

export default function ContactPage() {
  return (
    <div className="pt-10">
      <div className="text-center mb-12 px-4">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-secondary mb-4">
          Contact Us
        </h1>
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="h-px w-16 bg-[#D4AF37]" />
          <span className="text-[#D4AF37]">✦</span>
          <span className="h-px w-16 bg-[#D4AF37]" />
        </div>
      </div>
      <Location />
      <Reviews />
    </div>
  );
}
