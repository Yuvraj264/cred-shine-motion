import { motion } from "framer-motion";
import { Shield, Zap, Gift, TrendingUp, Lock, CreditCard } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: CreditCard,
    title: "Easy Bill Payments",
    description: "Pay all your credit card bills in one place with just a few taps. Quick, secure, and hassle-free.",
    color: "text-primary",
    bgGradient: "from-primary/20 to-transparent",
  },
  {
    icon: Gift,
    title: "Exclusive Rewards",
    description: "Earn CRED coins on every payment and redeem them for exciting rewards from premium brands.",
    color: "text-accent",
    bgGradient: "from-accent/20 to-transparent",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Your data is protected with 256-bit encryption and secure payment gateways. Trusted by millions.",
    color: "text-secondary",
    bgGradient: "from-secondary/20 to-transparent",
  },
  {
    icon: Zap,
    title: "Instant Cashback",
    description: "Get instant cashback on every successful payment. More you pay, more you earn.",
    color: "text-primary",
    bgGradient: "from-primary/20 to-transparent",
  },
  {
    icon: TrendingUp,
    title: "Credit Score Tracking",
    description: "Monitor your credit score in real-time and get personalized tips to improve it.",
    color: "text-accent",
    bgGradient: "from-accent/20 to-transparent",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "We never share your personal data. Your information stays private and secure, always.",
    color: "text-secondary",
    bgGradient: "from-secondary/20 to-transparent",
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Why Choose CRED?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the most rewarding way to manage your credit cards and build financial wellness.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              <div className="glass p-8 rounded-2xl shadow-premium h-full transition-all duration-300 group-hover:shadow-2xl group-hover:glow-primary">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`${feature.color} mb-4 bg-muted/50 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
