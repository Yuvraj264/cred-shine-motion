import { motion } from "framer-motion";
import { useState } from "react";
import { Gift, ShoppingBag, Plane, Utensils, Home, Sparkles, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const categories = [
  { id: "all", name: "All Rewards", icon: Sparkles },
  { id: "shopping", name: "Shopping", icon: ShoppingBag },
  { id: "travel", name: "Travel", icon: Plane },
  { id: "dining", name: "Dining", icon: Utensils },
  { id: "lifestyle", name: "Lifestyle", icon: Home },
];

const rewards = [
  {
    id: 1,
    title: "Amazon Voucher",
    category: "shopping",
    coins: 500,
    value: "₹500",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=600&h=400&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Flight Discount",
    category: "travel",
    coins: 1000,
    value: "₹2000",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
    featured: true,
  },
  {
    id: 3,
    title: "Zomato Gold",
    category: "dining",
    coins: 750,
    value: "3 Months",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    id: 4,
    title: "Netflix Premium",
    category: "lifestyle",
    coins: 600,
    value: "1 Month",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&h=400&fit=crop",
    featured: true,
  },
  {
    id: 5,
    title: "Flipkart Voucher",
    category: "shopping",
    coins: 400,
    value: "₹500",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    id: 6,
    title: "Hotel Stay",
    category: "travel",
    coins: 2000,
    value: "₹5000",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop",
    featured: true,
  },
  {
    id: 7,
    title: "Swiggy Voucher",
    category: "dining",
    coins: 300,
    value: "₹300",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    id: 8,
    title: "Spotify Premium",
    category: "lifestyle",
    coins: 450,
    value: "3 Months",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop",
    featured: false,
  },
];

const Rewards = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredRewards = selectedCategory === "all" 
    ? rewards 
    : rewards.filter(r => r.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero -z-10" />
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Rewards Catalog
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Redeem your KRED coins for exclusive rewards, cashback, and premium experiences from 1000+ brands.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="glass px-6 py-3 rounded-full">
                <span className="text-muted-foreground">Your Balance:</span>
                <span className="text-2xl font-bold text-primary ml-2">2,450</span>
                <span className="text-muted-foreground ml-1">coins</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sticky top-20 bg-background/80 backdrop-blur-lg z-40 border-b border-border">
        <div className="container mx-auto">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === category.id
                    ? "bg-gradient-primary text-primary-foreground shadow-lg"
                    : "glass text-foreground hover:border-primary"
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRewards.map((reward, index) => (
              <motion.div
                key={reward.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={reward.image}
                    alt={reward.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {reward.featured && (
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{reward.title}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold text-primary">{reward.coins}</div>
                      <div className="text-sm text-muted-foreground">coins</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-accent">{reward.value}</div>
                      <div className="text-sm text-muted-foreground">value</div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => toast.success(`${reward.title} added to cart!`)}
                    className="w-full bg-gradient-primary text-primary-foreground py-3 rounded-lg font-semibold"
                  >
                    Redeem Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rewards;
