"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

const specials = [
  {
    title: "Family Breakfast Feast",
    subtitle: "For 4 People",
    price: "$119.99",
    description: "Complete traditional spread with Menemen, Sucuk & Eggs, 3 cheeses, honey, olives, Boregi, fruits, and an extra mixed fries plate.",
    image: "/images/family-breakfast.jpg",
    cta: "Order Now",
  },
  {
    title: "Iskender Kebab",
    subtitle: "Chef's Signature",
    price: "$27.99",
    description: "Thinly sliced doner meat on crispy pita bread, topped with rich tomato sauce, yogurt, and sizzling butter.",
    image: "/images/iskender.jpg",
    cta: "Add to Order",
  },
  {
    title: "Mixed Kebab Platter",
    subtitle: "For 2 People",
    price: "$79.99",
    description: "A generous selection of Adana, Urfa, Chicken Shish, Lamb Chops, and Kofte, served with bulgur and salad.",
    image: "/images/mixed-kebab.jpg",
    cta: "Order Now",
  },
];

export function Specials() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-4">
            Today's Specials & Best Sellers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most loved dishes, perfect for sharing with family and friends.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {specials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="overflow-hidden h-full border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-64 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium uppercase tracking-wider opacity-90">
                      {item.subtitle}
                    </p>
                    <h3 className="font-serif text-2xl font-bold">{item.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-3xl font-serif font-bold text-primary">
                      {item.price}
                    </span>
                    <span className="bg-accent/20 text-accent-foreground text-xs px-3 py-1 rounded-full">
                      Best Seller
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-6">{item.description}</p>
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                    {item.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}