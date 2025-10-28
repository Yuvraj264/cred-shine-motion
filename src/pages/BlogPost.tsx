import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Share2, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import AIKeywordGenerator from "@/components/AIKeywordGenerator";

const BlogPost = () => {
  const { slug } = useParams();

  // Mock blog post data
  const post = {
    title: "10 Smart Ways to Improve Your Credit Score",
    author: "Priya Sharma",
    date: "October 25, 2025",
    category: "Credit Tips",
    readTime: "5 min read",
    content: `
      <p>Your credit score is one of the most important financial metrics that affects your ability to secure loans, credit cards, and even housing. Here are 10 proven strategies to improve your credit score:</p>

      <h2>1. Pay Your Bills on Time</h2>
      <p>Payment history is the single most important factor in your credit score, accounting for 35% of your FICO score. Set up automatic payments or reminders to ensure you never miss a due date.</p>

      <h2>2. Keep Credit Utilization Low</h2>
      <p>Try to use less than 30% of your available credit. For example, if you have a ₹100,000 credit limit, keep your balance below ₹30,000. Lower utilization shows lenders you're responsible with credit.</p>

      <h2>3. Don't Close Old Credit Cards</h2>
      <p>The length of your credit history matters. Keep old accounts open even if you don't use them frequently, as they contribute to a longer average account age.</p>

      <h2>4. Diversify Your Credit Mix</h2>
      <p>Having different types of credit (credit cards, personal loans, auto loans) can positively impact your score, as it shows you can manage various credit types responsibly.</p>

      <h2>5. Limit Hard Inquiries</h2>
      <p>Each time you apply for credit, it creates a hard inquiry on your report. Too many inquiries in a short period can lower your score. Only apply for credit when necessary.</p>

      <h2>6. Check Your Credit Report Regularly</h2>
      <p>Monitor your credit report for errors or fraudulent activity. You're entitled to free credit reports, so take advantage of this to catch issues early.</p>

      <h2>7. Become an Authorized User</h2>
      <p>If someone with good credit adds you as an authorized user on their account, their positive payment history can help boost your score.</p>

      <h2>8. Pay Down Debt Strategically</h2>
      <p>Focus on paying down high-interest debt first while maintaining minimum payments on other accounts. This reduces your overall debt load faster.</p>

      <h2>9. Negotiate with Creditors</h2>
      <p>If you're struggling with payments, contact your creditors. Many are willing to work out payment plans or settle debts, which is better than missing payments.</p>

      <h2>10. Use CRED for Timely Payments</h2>
      <p>CRED makes it easy to pay all your credit card bills on time in one place, helping you build a consistent payment history while earning rewards.</p>

      <h2>Conclusion</h2>
      <p>Improving your credit score takes time and discipline, but the benefits are worth it. Start implementing these strategies today, and you'll see positive changes in your credit profile over time.</p>
    `,
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: "Check out this article from CRED Blog",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-12 px-4">
        <article className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold">
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
              <span className="text-muted-foreground text-sm">{post.readTime}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border">
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleShare}
                className="flex items-center gap-2 bg-muted hover:bg-primary hover:text-primary-foreground px-4 py-2 rounded-lg transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Share
              </motion.button>
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* AI Keyword Generator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-12 border-t border-border"
          >
            <AIKeywordGenerator />
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
