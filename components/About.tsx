"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="/images/about-interior.jpg" // استبدل بصورة داخلية للمطعم أو طبق فاخر
            alt="Almast Restaurant Interior"
            fill
            className="object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-6">
            A Taste of Anatolia <br /> in the Heart of Windsor
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Nestled on Walker Road, Almast brings the rich culinary heritage of Turkey and the Mediterranean to your table. Our name, meaning "diamond" in Turkish, reflects our commitment to exceptional quality and craftsmanship in every dish.
            </p>
            <p>
              From our stone-oven baked Pide to our succulent Lamb Shish and authentic Turkish breakfast spreads, every ingredient is carefully selected and prepared according to traditional recipes. We use only halal meats and the freshest local produce.
            </p>
            <p>
              Whether you're joining us for a family feast, a business lunch, or a romantic dinner, our warm hospitality and elegant ambiance will transport you to the shores of the Bosphorus.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="font-serif text-xl italic text-secondary">"Afiyet olsun"</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}