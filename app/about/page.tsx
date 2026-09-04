import { About } from "@/components/About";
import { Reviews } from "@/components/Reviews";

export const metadata = {
  title: "About Us | Almast Turkish & Mediterranean Cuisine",
  description: "Discover the story behind Almast - authentic Turkish cuisine in Windsor.",
};

export default function AboutPage() {
  return (
    <div className="pt-10">
      <div className="text-center mb-12 px-4">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-secondary mb-4">
          Our Story
        </h1>
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="h-px w-16 bg-[#D4AF37]" />
          <span className="text-[#D4AF37]">✦</span>
          <span className="h-px w-16 bg-[#D4AF37]" />
        </div>
      </div>
      <About />
      <Reviews />
    </div>
  );
}
