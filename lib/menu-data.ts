export interface MenuItem {
  name: string;
  description?: string;
  price: number;
  image?: string;
  featured?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "breakfast",
    title: "Turkish Breakfast",
    items: [
      { name: "Authentic Turkish Breakfast (For 2)", price: 59.99, description: "Complete traditional spread with Menemen, cheeses, olives, honey, and more." },
      { name: "Authentic Turkish Breakfast (For 4)", price: 119.99, description: "Includes extra mixed fries plate with tomato sauce." },
      { name: "Breakfast Plate (For 1)", price: 24.99, description: "Individual portion of our signature breakfast." },
      { name: "Plain Eggs", price: 9.99 },
      { name: "Eggs with Sucuk", price: 11.99 },
      { name: "Menemen", price: 10.99 },
      { name: "Menemen with Sucuk", price: 11.99 },
      { name: "Spinach & Cheese Omelette", price: 15.99 },
    ]
  },
  {
    id: "kebabs",
    title: "Signature Kebabs",
    items: [
      { name: "Adana Kebab (Spicy)", price: 22.99, description: "Hand-minced lamb with red peppers, grilled on skewers." },
      { name: "Urfa Kebab (Mild)", price: 22.99 },
      { name: "Iskender Kebab", price: 27.99, description: "Sliced doner on pita with tomato sauce & yogurt.", featured: true },
      { name: "Lamb Chops", price: 37.99, featured: true },
      { name: "Lamb Shish", price: 30.99 },
      { name: "Chicken Shish", price: 21.99 },
      { name: "Kofte (Meatballs)", price: 24.99 },
      { name: "Mixed Kebab for 2", price: 79.99 },
    ]
  },
  {
    id: "pide",
    title: "Pide (Turkish Pizza)",
    items: [
      { name: "Lamb Minced Pide", price: 21.99 },
      { name: "Ground Beef Pide", price: 19.99 },
      { name: "Cheese Pide", price: 16.99 },
      { name: "Kavurma Pide", price: 24.99, description: "Preserved beef, traditional style." },
      { name: "Veal & Lamb Doner Pide", price: 19.99 },
      { name: "Chicken Doner Pide", price: 18.99 },
    ]
  },
  {
    id: "doner",
    title: "Doner & Platters",
    items: [
      { name: "Chicken Doner", price: 21.99 },
      { name: "Veal & Lamb Doner", price: 23.99 },
      { name: "Mixed Doner", price: 23.99 },
      { name: "Mixed Kebab Platter (For 4)", price: 139.99 },
    ]
  }
];