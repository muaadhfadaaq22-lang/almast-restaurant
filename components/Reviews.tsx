"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

// بيانات مؤقتة - يمكن استبدالها بـ API حقيقي من Google Reviews لاحقاً
const reviews = [
  {
    author: "Sarah M.",
    rating: 5,
    text: "Absolutely the best Turkish breakfast in Windsor! The family platter is a feast. Everything fresh and delicious. The Menemen is to die for.",
    date: "2 weeks ago",
  },
  {
    author: "Michael T.",
    rating: 5,
    text: "Iskender Kebab was incredible. Perfectly seasoned, generous portions, and the service was warm and welcoming. Highly recommended!",
    date: "1 month ago",
  },
  {
    author: "Layla H.",
    rating: 4,
    text: "Great ambiance and authentic food. Loved the Lamb Pide and the mixed grill platter. Will definitely come back for the breakfast.",
    date: "3 weeks ago",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-4">
          What Our Guests Say
        </h2>
        <div className="flex items-center justify-center gap-1 text-accent">
          <Star className="fill-current" />
          <Star className="fill-current" />
          <Star className="fill-current" />
          <Star className="fill-current" />
          <Star className="fill-current" />
          <span className="ml-2 text-muted-foreground">4.9 (200+ Google Reviews)</span>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((review, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="h-full border-border/50 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < review.rating ? "fill-accent text-accent" : "fill-muted text-muted"}
                    />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{review.text}"</p>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span className="font-medium text-secondary">{review.author}</span>
                  <span>{review.date}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href="https://g.page/r/your-place-id/review" // استبدل بمعرف المكان الحقيقي
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
        >
          Leave a Review on Google
          <Star size={16} />
        </a>
      </div>
    </section>
  );
}