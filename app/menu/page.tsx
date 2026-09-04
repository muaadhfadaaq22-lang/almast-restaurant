import { MenuSection } from "@/components/MenuSection";
import { Specials } from "@/components/Specials";

export const metadata = {
  title: "Menu | Almast Turkish & Mediterranean Cuisine",
  description: "Explore our authentic Turkish breakfast, kebabs, pide, and doner menu.",
};

export default function MenuPage() {
  return (
    <div className="pt-10">
      {/* رأس الصفحة */}
      <div className="text-center mb-12 px-4">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-secondary mb-4">
          Our Menu
        </h1>
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="h-px w-16 bg-[#D4AF37]" />
          <span className="text-[#D4AF37]">✦</span>
          <span className="h-px w-16 bg-[#D4AF37]" />
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Crafted with halal ingredients and traditional Anatolian recipes.
        </p>
      </div>

      <MenuSection />
      <Specials />
    </div>
  );
}
