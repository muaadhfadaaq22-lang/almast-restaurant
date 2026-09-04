import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { Specials } from "@/components/Specials";
import { Reviews } from "@/components/Reviews";
import { About } from "@/components/About";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Specials />
      <MenuSection />
      <Reviews />
    </>
  );
}
