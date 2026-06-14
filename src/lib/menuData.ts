export type MenuCategory = 
  | "Breakfast" 
  | "Flavours of the Levant" 
  | "Cold Appetizers" 
  | "Fatteh" 
  | "Soups" 
  | "Hot Appetizers" 
  | "Salads" 
  | "Fish Appetizers" 
  | "From the Sea" 
  | "Sail Your Way" 
  | "Main Course" 
  | "Desserts" 
  | "Hot Drinks" 
  | "Refreshments";

export interface MenuItem {
  name: string;
  nameAr?: string;
  description?: string;
  price: string;
  category: MenuCategory;
  dietary?: ("V" | "G" | "D" | "S")[];
  featured?: boolean;
}

export const menuData: MenuItem[] = [
  // BREAKFAST
  { name: "Chef's Tray", price: "60 QAR", category: "Breakfast", featured: true },
  { name: "Hamsat Lahm with Truffle Tray", description: "Truffle cooked with tomatoes, onions, peppers, and lamb, served with vegetables and bread", price: "60 QAR", category: "Breakfast" },
  { name: "Eggs with Meat Awarma Tray", description: "Two scrambled eggs with minced meat, served with vegetables and bread", price: "50 QAR", category: "Breakfast" },
  { name: "Eggs with Potato Tray", price: "36 QAR", category: "Breakfast" },
  { name: "Shakshoka Tray", price: "36 QAR", category: "Breakfast", featured: true },
  { name: "Cheese with Herbs Tray", price: "38 QAR", category: "Breakfast", dietary: ["D"] },
  { name: "Chicken Liver Tray", price: "40 QAR", category: "Breakfast" },
  { name: "Eggs Your Way Tray", price: "32 QAR", category: "Breakfast" },
  { name: "Foul with Tahini", price: "30 QAR", category: "Breakfast", dietary: ["V"] },
  { name: "Foul Bel Zait", price: "30 QAR", category: "Breakfast", dietary: ["V"] },
  { name: "Musabahaa", price: "30 QAR", category: "Breakfast", dietary: ["V"] },
  { name: "Falafel", price: "30 QAR", category: "Breakfast", dietary: ["V"] },
  { name: "Cream and Honey", price: "36 QAR", category: "Breakfast", dietary: ["D"] },

  // MANAKISH
  { name: "Chef's Manakish Tray", price: "34 QAR", category: "Flavours of the Levant", featured: true },
  { name: "Meat", price: "33 QAR", category: "Flavours of the Levant" },
  { name: "Meat with Cheese", price: "34 QAR", category: "Flavours of the Levant", dietary: ["D"] },
  { name: "Kashkawan Cheese", price: "30 QAR", category: "Flavours of the Levant", dietary: ["D"] },
  { name: "Chicken with Cheese", price: "32 QAR", category: "Flavours of the Levant", dietary: ["D"] },
  { name: "Feta Cheese Za'atar Vegetables", price: "29 QAR", category: "Flavours of the Levant", dietary: ["D", "V"] },
  { name: "Egg with Cheese", price: "29 QAR", category: "Flavours of the Levant", dietary: ["D"] },
  { name: "Akawi Cheese", price: "29 QAR", category: "Flavours of the Levant", dietary: ["D", "V"] },
  { name: "Labneh with Vegetables", price: "28 QAR", category: "Flavours of the Levant", dietary: ["D", "V"] },
  { name: "Labneh with Za'atar", price: "28 QAR", category: "Flavours of the Levant", dietary: ["D", "V"] },
  { name: "Za'atar", price: "25 QAR", category: "Flavours of the Levant", dietary: ["V"] },
  { name: "Mix Cheese", price: "29 QAR", category: "Flavours of the Levant", dietary: ["D", "V"] },
  { name: "Muhammara", price: "28 QAR", category: "Flavours of the Levant", dietary: ["V"] },
  { name: "Muhammara with Cheese", price: "29 QAR", category: "Flavours of the Levant", dietary: ["D"] },
  { name: "Nabulsi Cheese with Za'atar Jabali", price: "29 QAR", category: "Flavours of the Levant", dietary: ["D", "V"] },
  { name: "Falafel", price: "28 QAR", category: "Flavours of the Levant", dietary: ["V"] },
  { name: "Spinach", price: "25 QAR", category: "Flavours of the Levant", dietary: ["V"] },
  { name: "Cream with Rose Jam", price: "30 QAR", category: "Flavours of the Levant", dietary: ["D"] },
  { name: "Cream with Honey", price: "30 QAR", category: "Flavours of the Levant", dietary: ["D"] },
  { name: "Kraft Cheese with Honey", price: "30 QAR", category: "Flavours of the Levant", dietary: ["D"] },
  { name: "Kraft Cheese with Omani Chips", price: "30 QAR", category: "Flavours of the Levant", dietary: ["D"] },
  { name: "Nutella Marshmallow", price: "30 QAR", category: "Flavours of the Levant", dietary: ["D"] },

  // COLD APPETIZERS
  { name: "Hummus AFH", description: "Hummus with sun-dried tomatoes, pine nuts, and olive oil", price: "36 QAR", category: "Cold Appetizers", dietary: ["V"], featured: true },
  { name: "Mutabal Beetroot", price: "30 QAR", category: "Cold Appetizers", dietary: ["V"] },
  { name: "Yalanji (Stuffed Vine Leaves, 8 pcs)", price: "30 QAR", category: "Cold Appetizers", dietary: ["V"] },
  { name: "Muhammara", price: "28 QAR", category: "Cold Appetizers", dietary: ["V"] },
  { name: "Mutabal", price: "33 QAR", category: "Cold Appetizers", dietary: ["V"] },
  { name: "Hummus", price: "33 QAR", category: "Cold Appetizers", dietary: ["V"] },
  { name: "Makdous", price: "28 QAR", category: "Cold Appetizers", dietary: ["V"] },
  { name: "Labneh Balls with Olive Oil", price: "30 QAR", category: "Cold Appetizers", dietary: ["D", "V"] },
  { name: "Labneh", price: "28 QAR", category: "Cold Appetizers", dietary: ["D", "V"] },
  { name: "Baba Ghanouj", price: "30 QAR", category: "Cold Appetizers", dietary: ["V"] },

  // FATTEH
  { name: "Fatteh Hummus", price: "40 QAR", category: "Fatteh", dietary: ["D", "V"] },
  { name: "Meat Fatteh", price: "50 QAR", category: "Fatteh", dietary: ["D"] },
  { name: "Fatteh Vine Leaves", price: "36 QAR", category: "Fatteh", dietary: ["D", "V"] },
  { name: "AFH Fish Fatteh", price: "60 QAR", category: "Fatteh", dietary: ["D", "S"], featured: true },
  { name: "Fatteh Shrimps", price: "60 QAR", category: "Fatteh", dietary: ["D", "S"] },

  // SOUPS
  { name: "Chef's Signature Seafood Soup", price: "43 QAR", category: "Soups", dietary: ["S"], featured: true },
  { name: "Clear Seafood Soup", price: "40 QAR", category: "Soups", dietary: ["S"] },
  { name: "Special Soup of the Day", price: "27 QAR", category: "Soups" },

  // HOT APPETIZERS
  { name: "Grilled Kibbeh", price: "43 QAR", category: "Hot Appetizers" },
  { name: "Musakhan Rolls", price: "30 QAR", category: "Hot Appetizers" },
  { name: "Cheese Burek", price: "30 QAR", category: "Hot Appetizers", dietary: ["D", "V"] },
  { name: "Fried Kibbeh", price: "38 QAR", category: "Hot Appetizers" },
  { name: "Harra Esbao", price: "30 QAR", category: "Hot Appetizers", dietary: ["V"] },
  { name: "Hummus with Meat", price: "40 QAR", category: "Hot Appetizers" },
  { name: "Fried Potato", price: "30 QAR", category: "Hot Appetizers", dietary: ["V"] },
  { name: "Batata Harra", price: "33 QAR", category: "Hot Appetizers", dietary: ["V"] },

  // SALADS
  { name: "Shrimp Caesar Salad", price: "56 QAR", category: "Salads", dietary: ["S", "D"], featured: true },
  { name: "Beetroot Salad", price: "45 QAR", category: "Salads", dietary: ["V"] },
  { name: "Fattoush", price: "38 QAR", category: "Salads", dietary: ["V"] },
  { name: "Watermelon Salad", price: "33 QAR", category: "Salads", dietary: ["V"] },
  { name: "Rocca Salad", price: "38 QAR", category: "Salads", dietary: ["V"] },
  { name: "Green Salad", price: "32 QAR", category: "Salads", dietary: ["V"] },
  { name: "Taboulah", price: "35 QAR", category: "Salads", dietary: ["V"] },

  // FISH APPETIZERS
  { name: "Fried Bazri", price: "42 QAR", category: "Fish Appetizers", dietary: ["S"] },
  { name: "Clams with Special Sauce", price: "45 QAR", category: "Fish Appetizers", dietary: ["S"] },
  { name: "Fried Calamari", price: "50 QAR", category: "Fish Appetizers", dietary: ["S"] },
  { name: "Fried Shrimps", price: "50 QAR", category: "Fish Appetizers", dietary: ["S"] },
  { name: "Fried Lady Fish", price: "50 QAR", category: "Fish Appetizers", dietary: ["S"] },
  { name: "Herring with Tahini", price: "45 QAR", category: "Fish Appetizers", dietary: ["S"] },
  { name: "Shrimp Provencal", price: "50 QAR", category: "Fish Appetizers", dietary: ["S"] },
  { name: "Calamari Provencal", price: "57 QAR", category: "Fish Appetizers", dietary: ["S"] },
  { name: "Dynamite Shrimps", price: "50 QAR", category: "Fish Appetizers", dietary: ["S"], featured: true },
  { name: "Safi Biscuit (Seasonal)", price: "60 QAR", category: "Fish Appetizers", dietary: ["S"] },
  { name: "Tagen Samak", price: "52 QAR", category: "Fish Appetizers", dietary: ["S"] },
  { name: "Fried Hobool (Seasonal)", price: "50 QAR", category: "Fish Appetizers", dietary: ["S"] },

  // FROM THE SEA
  { name: "Grilled Shrimps", price: "76 QAR", category: "From the Sea", dietary: ["S"], featured: true },
  { name: "Seabass / Seabream", price: "86 QAR", category: "From the Sea", dietary: ["S"] },
  { name: "Seabass Fillet Lemon Caprese", price: "86 QAR", category: "From the Sea", dietary: ["S", "D"] },
  { name: "Hamsat Robyan", price: "75 QAR", category: "From the Sea", dietary: ["S"] },
  { name: "Machboos Samak", description: "As per fish weight", price: "VARIES", category: "From the Sea", dietary: ["S"] },
  { name: "Fish & Chips", price: "80 QAR", category: "From the Sea", dietary: ["S"] },
  { name: "Samak Sayadiyah", price: "82 QAR", category: "From the Sea", dietary: ["S"] },
  { name: "Shish Fish (Chef's Choice)", price: "80 QAR", category: "From the Sea", dietary: ["S"] },
  { name: "Lemon Shrimp", price: "76 QAR", category: "From the Sea", dietary: ["S"] },

  // MAIN COURSE
  { name: "Charcoal Chicken (Whole)", price: "60 QAR", category: "Main Course" },
  { name: "Arayes Laham", price: "56 QAR", category: "Main Course" },
  { name: "Fakharat Kifteh with Tahina", price: "56 QAR", category: "Main Course" },
  { name: "Kebab Khashkhash", price: "56 QAR", category: "Main Course" },
  { name: "Shish Towouk", price: "55 QAR", category: "Main Course" },
  { name: "Shish Barak", price: "53 QAR", category: "Main Course", dietary: ["D"] },
  { name: "Kibbeh Laban", price: "55 QAR", category: "Main Course", dietary: ["D"] },

  // DESSERTS
  { name: "Dessert of the Day", price: "35 QAR", category: "Desserts", dietary: ["D", "V"] },
  { name: "Mahalabia", price: "35 QAR", category: "Desserts", dietary: ["D", "V"] },
  { name: "Kunafa", price: "38 QAR", category: "Desserts", dietary: ["D", "V"] },
  { name: "AFH Kunafa", price: "42 QAR", category: "Desserts", dietary: ["D", "V"], featured: true },
  { name: "Halawa El Jibin with Arabic Ice Cream", price: "40 QAR", category: "Desserts", dietary: ["D", "V"] },
  { name: "Lazy Cake", price: "30 QAR", category: "Desserts", dietary: ["D", "V"] },
  { name: "Luqaimat", price: "30 QAR", category: "Desserts", dietary: ["V"] },
  { name: "Rice with Milk", price: "38 QAR", category: "Desserts", dietary: ["D", "V"] },
  { name: "Umm Ali", price: "35 QAR", category: "Desserts", dietary: ["D", "V"], featured: true },

  // HOT DRINKS
  { name: "Karak", price: "30 QAR", category: "Hot Drinks" },
  { name: "Sulaimani", price: "25 QAR", category: "Hot Drinks" },
  { name: "Turkish Coffee", price: "20 QAR", category: "Hot Drinks" },
  { name: "Latte / Cappuccino", price: "24 QAR", category: "Hot Drinks" },
  
  // REFRESHMENTS
  { name: "Mojito (Dry Black Lime / Lemon Mint)", price: "25 QAR", category: "Refreshments" },
  { name: "Fresh Juices", price: "32 QAR", category: "Refreshments" },
  { name: "Milkshakes", price: "30 QAR", category: "Refreshments" },
];
