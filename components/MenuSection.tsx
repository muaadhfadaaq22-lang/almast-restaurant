"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { menuCategories } from "@/lib/menu-data";
import { motion } from "framer-motion";

export function MenuSection() {
  return (
    <section id="menu" className="py-10 md:py-20 px-3 md:px-4 max-w-7xl mx-auto">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-secondary mb-3 md:mb-4">
          Our Menu
        </h2>
        <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto px-4">
          Crafted with halal ingredients and traditional Anatolian recipes.
        </p>
      </div>

      <Tabs defaultValue="kebabs" className="w-full">
        {/* تبويبات أفقية قابلة للتمرير على الجوال */}
        <TabsList className="flex flex-nowrap overflow-x-auto gap-2 bg-transparent h-auto p-1 mb-6 md:mb-8 justify-start md:justify-center md:flex-wrap w-full scrollbar-hide">
          {menuCategories.map((cat) => (
            <TabsTrigger
              key={cat.id}
              value={cat.id}
              className="data-[state=active]:bg-primary data-[state=active]:text-white px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all whitespace-nowrap flex-shrink-0"
            >
              {cat.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {menuCategories.map((cat) => (
          <TabsContent key={cat.id} value={cat.id}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 px-2 md:px-0"
            >
              {cat.items.map((item, idx) => (
                <Card key={idx} className="overflow-hidden border-border/50 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2 px-4 md:px-6">
                    <div className="flex justify-between items-start gap-3">
                      <CardTitle className="font-serif text-base md:text-xl leading-tight">
                        {item.name}
                      </CardTitle>
                      <span className="text-primary font-bold text-base md:text-lg whitespace-nowrap">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                    {item.description && (
                      <CardDescription className="text-xs md:text-sm">{item.description}</CardDescription>
                    )}
                  </CardHeader>
                  <CardContent className="px-4 md:px-6 pb-4">
                    {item.featured && (
                      <span className="inline-block bg-accent/20 text-accent-foreground text-xs px-2 py-1 rounded-full">
                        Chef's Choice
                      </span>
                    )}
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
