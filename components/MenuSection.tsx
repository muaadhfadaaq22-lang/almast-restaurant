"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { menuCategories } from "@/lib/menu-data";
import { motion } from "framer-motion";

export function MenuSection() {
  return (
    <section id="menu" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-4">Our Menu</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Crafted with halal ingredients and traditional Anatolian recipes.
        </p>
      </div>

      <Tabs defaultValue="kebabs" className="w-full">
        <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto p-0 mb-8">
          {menuCategories.map((cat) => (
            <TabsTrigger 
              key={cat.id} 
              value={cat.id}
              className="data-[state=active]:bg-primary data-[state=active]:text-white px-6 py-2 rounded-full text-base font-medium transition-all"
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
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {cat.items.map((item, idx) => (
                <Card key={idx} className="overflow-hidden border-border/50 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="font-serif text-xl">{item.name}</CardTitle>
                      <span className="text-primary font-bold text-lg">${item.price.toFixed(2)}</span>
                    </div>
                    {item.description && (
                      <CardDescription>{item.description}</CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
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