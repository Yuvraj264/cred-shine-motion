import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How do I create a KRED account?",
        a: "Download the KRED app from App Store or Play Store, enter your mobile number, verify with OTP, and complete your profile. The entire process takes less than 2 minutes!",
      },
      {
        q: "Is KRED free to use?",
        a: "Yes! KRED is completely free. We don't charge any fees for credit card bill payments. You earn rewards for every payment you make.",
      },
      {
        q: "How do I add my credit cards?",
        a: "Go to the Cards section, tap 'Add Card', enter your card details securely, and verify with OTP from your bank. We support all major credit cards in India.",
      },
    ],
  },
  {
    category: "Payments & Rewards",
    questions: [
      {
        q: "How do I earn KRED coins?",
        a: "You earn KRED coins every time you pay your credit card bills through the app. The more you pay, the more coins you earn. Coins are credited instantly after successful payment.",
      },
      {
        q: "What can I do with KRED coins?",
        a: "Redeem coins for cashback, brand vouchers, flight discounts, hotel bookings, dining offers, and exclusive experiences from 1000+ partner brands.",
      },
      {
        q: "Do KRED coins expire?",
        a: "KRED coins are valid for 365 days from the date of earning. We'll send you reminders before they expire so you can redeem them.",
      },
      {
        q: "Are there any payment limits?",
        a: "You can pay up to ₹1 lakh per transaction. Monthly limits depend on your account verification level and payment history.",
      },
    ],
  },
  {
    category: "Security & Privacy",
    questions: [
      {
        q: "Is my data safe with KRED?",
        a: "Absolutely! We use bank-grade 256-bit encryption, secure payment gateways, and comply with RBI guidelines. Your data is never shared with third parties without consent.",
      },
      {
        q: "How secure are online payments?",
        a: "All payments go through secure PCI-DSS compliant gateways. We use 2-factor authentication and don't store your CVV or card PIN.",
      },
      {
        q: "What if I forget my KRED PIN?",
        a: "You can reset your PIN anytime using your registered mobile number and OTP verification. For security, you'll need to re-verify your identity.",
      },
    ],
  },
  {
    category: "Troubleshooting",
    questions: [
      {
        q: "My payment failed but money was deducted. What do I do?",
        a: "Don't worry! If the payment failed, the amount will be auto-refunded to your account within 5-7 business days. Contact our support team if you need immediate assistance.",
      },
      {
        q: "I'm not receiving OTPs. How can I fix this?",
        a: "Check if your mobile number is correct, ensure you have network connectivity, and check your SMS inbox. If issues persist, try resending OTP or contact support.",
      },
      {
        q: "How do I update my registered mobile number?",
        a: "Go to Settings > Profile > Mobile Number. You'll need to verify both your old and new numbers with OTP for security.",
      },
    ],
  },
];

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q =>
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category => category.questions.length > 0);

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
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Frequently Asked
              </span>
              <br />
              <span className="text-foreground">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Got questions? We've got answers. Search or browse through our most common questions.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full glass pl-12 pr-4 py-4 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {filteredFaqs.length > 0 ? (
            <div className="space-y-12">
              {filteredFaqs.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                >
                  <h2 className="text-3xl font-bold mb-6 text-primary">{category.category}</h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${categoryIndex}-${index}`}
                        className="glass rounded-xl px-6 border-0"
                      >
                        <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary py-6">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base pb-6">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-muted-foreground">
                No results found for "{searchQuery}". Try a different search term.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Still have questions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our support team is here to help 24/7
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg"
            >
              Contact Support
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
