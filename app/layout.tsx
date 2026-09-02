import type { Metadata } from "next";
import { Inter, Playfair_Display, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Almast Turkish & Mediterranean Cuisine | Windsor",
  description: "Authentic stone oven pide, premium kebabs & traditional Turkish breakfast in Windsor. Order online or reserve your table.",
  keywords: "Turkish restaurant Windsor, Mediterranean food, kebab, pide, halal Windsor",
  openGraph: {
    title: "Almast Turkish Cuisine",
    description: "Experience the finest Turkish & Mediterranean dishes in Windsor.",
    url: "https://almastcuisine.com",
    siteName: "Almast Cuisine",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        geist.variable,
        playfair.variable
      )}>
        {children}
      </body>
    </html>
  );
}