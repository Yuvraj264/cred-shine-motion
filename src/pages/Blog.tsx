import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    id: 1,
    title: "10 Smart Ways to Improve Your Credit Score",
    excerpt: "Discover proven strategies to boost your credit score and unlock better financial opportunities.",
    author: "Priya Sharma",
    date: "October 25, 2025",
    category: "Credit Tips",
    readTime: "5 min read",
    slug: "improve-credit-score",
  },
  {
    id: 2,
    title: "Maximize Your Credit Card Rewards in 2025",
    excerpt: "Learn how to earn maximum cashback and rewards on your everyday purchases.",
    author: "Rahul Verma",
    date: "October 22, 2025",
    category: "Rewards",
    readTime: "7 min read",
    slug: "maximize-rewards",
  },
  {
    id: 3,
    title: "Understanding Credit Card Bill Payment Due Dates",
    excerpt: "Never miss a payment again with these essential tips and reminders.",
    author: "Anjali Gupta",
    date: "October 18, 2025",
    category: "Bill Payment",
    readTime: "4 min read",
    slug: "payment-due-dates",
  },
  {
    id: 4,
    title: "The Psychology Behind Premium Rewards Programs",
    excerpt: "Why do rewards programs work so well? Dive into the behavioral economics.",
    author: "Vikram Singh",
    date: "October 15, 2025",
    category: "Insights",
    readTime: "8 min read",
    slug: "psychology-rewards",
  },
  {
    id: 5,
    title: "Building Financial Wellness with CRED",
    excerpt: "Transform your financial habits and build a healthier relationship with money.",
    author: "Neha Reddy",
    date: "October 12, 2025",
    category: "Financial Wellness",
    readTime: "6 min read",
    slug: "financial-wellness",
  },
  {
    id: 6,
    title: "Credit Card Security: Best Practices for 2025",
    excerpt: "Protect yourself from fraud with these essential security measures.",
    author: "Arjun Patel",
    date: "October 8, 2025",
    category: "Security",
    readTime: "5 min read",
    slug: "card-security",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                CRED Blog
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert insights on credit cards, rewards, and financial wellness
            </p>
          </motion.div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Link to={`/blog/${blogPosts[0].slug}`}>
              <div className="glass p-8 md:p-12 rounded-3xl shadow-premium hover:shadow-2xl hover:glow-primary transition-all duration-300 group">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="bg-gradient-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  <span className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Tag className="w-4 h-4" />
                    {blogPosts[0].category}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {blogPosts[0].author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {blogPosts[0].date}
                  </span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="glass p-6 rounded-2xl shadow-premium hover:shadow-2xl hover:glow-primary transition-all duration-300 h-full group">
                    <div className="mb-4">
                      <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold bg-primary/10 px-3 py-1 rounded-full">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
