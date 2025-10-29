import { motion } from "framer-motion";
import { Check, Crown, Star, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const plans = [
  {
    name: "Silver",
    icon: Star,
    price: "Free",
    period: "",
    description: "Perfect for getting started with rewards",
    features: [
      "Unlimited bill payments",
      "Earn 1 coin per ₹100 paid",
      "Access to 500+ brand offers",
      "Basic credit score tracking",
      "Email support",
      "Standard cashback rates",
    ],
    color: "secondary",
    recommended: false,
  },
  {
    name: "Gold",
    icon: Zap,
    price: "₹499",
    period: "/month",
    description: "Most popular choice for regular users",
    features: [
      "Everything in Silver",
      "Earn 2 coins per ₹100 paid",
      "Access to 1000+ exclusive offers",
      "Advanced credit score insights",
      "Priority support",
      "2x cashback on all payments",
      "Zero processing fees",
      "Birthday bonus coins",
    ],
    color: "primary",
    recommended: true,
  },
  {
    name: "Platinum",
    icon: Crown,
    price: "₹999",
    period: "/month",
    description: "Premium benefits for power users",
    features: [
      "Everything in Gold",
      "Earn 3 coins per ₹100 paid",
      "Unlimited brand partnerships",
      "Personal financial advisor",
      "24/7 VIP support",
      "5x cashback on all payments",
      "Luxury experience rewards",
      "Airport lounge access",
      "Concierge service",
      "Exclusive event invites",
    ],
    color: "accent",
    recommended: false,
  },
];

const Pricing = () => {
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
                Choose Your Plan
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Start free and upgrade anytime. All plans include unlimited bill payments and rewards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`relative glass rounded-3xl p-8 ${
                  plan.recommended ? "border-2 border-primary shadow-2xl" : ""
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className={`bg-gradient-${plan.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                  <plan.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>

                <div className="mb-8">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toast.success(`${plan.name} plan selected! Upgrade coming soon.`)}
                  className={`w-full py-4 rounded-xl font-semibold text-lg ${
                    plan.recommended
                      ? "bg-gradient-primary text-primary-foreground"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  {plan.price === "Free" ? "Get Started" : "Upgrade Now"}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Pricing FAQs</h2>
            <p className="text-xl text-muted-foreground">
              Common questions about our membership plans
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-2">Can I switch plans anytime?</h3>
              <p className="text-muted-foreground">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">
                We accept all major credit cards, debit cards, UPI, net banking, and wallets. All payments are secure and encrypted.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-2">Is there a free trial for paid plans?</h3>
              <p className="text-muted-foreground">
                Yes! All new users get a 30-day free trial of our Gold plan. No credit card required to start.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
