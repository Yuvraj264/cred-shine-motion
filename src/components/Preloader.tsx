import { motion } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-hero"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 0.75, 1],
          }}
        >
          <img
            src="/Gemini_Generated_Image_q0z864q0z864q0z8.png"
            alt="KRED Logo"
            className="w-32 h-32 object-contain glow-primary"
          />
        </motion.div>
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            KRED
          </h2>
          <p className="text-muted-foreground mt-2">Loading your rewards...</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
