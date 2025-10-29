import { motion } from "framer-motion";
import { Smartphone, CreditCard, Gift, TrendingUp, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const steps = [
  {
    icon: Smartphone,
    step: "Step 1",
    title: "Download & Sign Up",
    description: "Download the KRED app and create your account in under 2 minutes. Add your credit cards securely.",
    color: "primary",
  },
  {
    icon: CreditCard,
    step: "Step 2",
    title: "Pay Your Bills",
    description: "Pay all your credit card bills in one place. Set reminders and never miss a due date again.",
    color: "secondary",
  },
  {
    icon: Gift,
    step: "Step 3",
    title: "Earn KRED Coins",
    description: "Every payment earns you KRED coins. The more you pay, the more you earn.",
    color: "accent",
  },
  {
    icon: TrendingUp,
    step: "Step 4",
    title: "Redeem Rewards",
    description: "Use your coins for cashback, brand vouchers, exclusive experiences, and premium benefits.",
    color: "primary",
  },
];

const benefits = [
  "Zero fees for credit card payments",
  "Instant rewards on every transaction",
  "Real-time credit score tracking",
  "Bank-grade security & encryption",
  "Priority customer support",
  "Exclusive partner offers",
];

const HowItWorks = () => {
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
                How KRED Works
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Getting rewarded for paying bills is simple. Here's how you can start earning today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toast.success("Download feature coming soon!")}
              className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg"
            >
              Get Started Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="glass p-12 rounded-3xl flex items-center justify-center">
                    <motion.div
                      animate={{
                        y: [0, -20, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className={`bg-gradient-${step.color} p-8 rounded-2xl shadow-premium`}
                    >
                      <step.icon className="w-24 h-24 text-primary-foreground" />
                    </motion.div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="text-sm font-semibold text-primary mb-2">{step.step}</div>
                  <h2 className="text-4xl font-bold mb-4">{step.title}</h2>
                  <p className="text-xl text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose KRED?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              More than just bill payments - it's a complete financial wellness platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass p-6 rounded-xl flex items-start gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toast.success("Download feature coming soon!")}
              className="bg-gradient-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-lg"
            >
              Start Earning Rewards
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
