import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { MenuSection } from "@/components/MenuSection";
import { Specials } from "@/components/Specials";
import { Reservation } from "@/components/Reservation";
import { Location } from "@/components/Location";
import { Reviews } from "@/components/Reviews";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <MenuSection />
      <Specials />
      <Reservation />
      <Location />
      <Reviews />
      <Footer />
    </main>
  );
}