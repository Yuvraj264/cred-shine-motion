import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Gift, Award, Star, Crown } from "lucide-react";
import rewardsVisual from "@/assets/rewards-visual.jpg";
import { toast } from "sonner";

const rewards = [
  {
    icon: Gift,
    title: "Exclusive Brand Vouchers",
    description: "Redeem CRED coins for vouchers from 1000+ premium brands",
    value: "Up to ₹10,000",
  },
  {
    icon: Award,
    title: "Travel & Lifestyle",
    description: "Access to luxury hotels, flights, and lifestyle experiences",
    value: "Premium Access",
  },
  {
    icon: Star,
    title: "Cashback Rewards",
    description: "Direct cashback credited to your account instantly",
    value: "Up to 5%",
  },
  {
    icon: Crown,
    title: "VIP Membership",
    description: "Unlock premium benefits and priority customer support",
    value: "Exclusive",
  },
];

const RewardsSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image with Parallax */}
          <motion.div
            style={{ y, opacity }}
            className="relative"
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              src={rewardsVisual}
              alt="Abstract visualization of rewards program featuring coins and gifts in purple and pink gradients"
              className="w-full rounded-3xl shadow-premium glow-primary"
            />
            
            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-gradient-accent p-6 rounded-2xl shadow-premium glass"
            >
              <div className="text-3xl font-bold">1000+</div>
              <div className="text-sm text-muted-foreground">Brand Partners</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -top-6 -right-6 bg-gradient-primary p-6 rounded-2xl shadow-premium glass"
            >
              <div className="text-3xl font-bold">₹500Cr+</div>
              <div className="text-sm text-muted-foreground">Rewards Given</div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Unlock Premium
                </span>
                <br />
                <span className="text-foreground">Rewards</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Every payment earns you CRED coins. Redeem them for exclusive rewards,
                cashback, and premium experiences.
              </p>
            </motion.div>

            <div className="space-y-4">
              {rewards.map((reward, index) => (
                <motion.div
                  key={reward.title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="glass p-6 rounded-xl shadow-premium hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-primary p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <reward.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-foreground">
                          {reward.title}
                        </h3>
                        <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {reward.value}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {reward.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toast.success("Explore all rewards coming soon!")}
              className="mt-8 bg-gradient-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-lg hover:glow-primary transition-all"
            >
              Explore All Rewards
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
