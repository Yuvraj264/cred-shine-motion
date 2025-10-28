import { Link } from "react-router-dom";
import { CreditCard, Facebook, Instagram, Twitter, Mail, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const Footer = () => {
  const handleShare = (platform: string) => {
    const url = window.location.href;
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=Check out CRED!`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
    }

    window.open(shareUrl, "_blank", "width=600,height=400");
    toast.success(`Sharing on ${platform}!`);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-primary p-2 rounded-xl">
                <CreditCard className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                CRED
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Earn rewards for paying credit card bills on time. Join millions of members.
            </p>
            {/* Social Media Links */}
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted p-2 rounded-lg hover:bg-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted p-2 rounded-lg hover:bg-accent transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted p-2 rounded-lg hover:bg-secondary transition-colors duration-300"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Product</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Rewards
                </Link>
              </li>
              <li>
                <Link to="/analytics" className="hover:text-primary transition-colors">
                  Analytics
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter & Share */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Stay Connected</h3>
            <div className="space-y-4">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const email = (e.target as HTMLFormElement).email.value;
                  if (email) {
                    toast.success("Thanks for subscribing! We'll keep you updated.");
                    (e.target as HTMLFormElement).reset();
                  }
                }}
                className="flex gap-2"
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="flex-1 bg-muted border border-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                />
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-primary text-primary-foreground p-2 rounded-lg hover:glow-primary transition-all"
                >
                  <Mail className="w-5 h-5" />
                </motion.button>
              </form>
              <div>
                <p className="text-muted-foreground text-sm mb-2">Share this page:</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleShare("facebook")}
                    className="bg-muted p-2 rounded-lg hover:bg-primary transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className="bg-muted p-2 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} CRED. All rights reserved.
          </p>
          <div className="flex gap-6 text-muted-foreground text-sm">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
