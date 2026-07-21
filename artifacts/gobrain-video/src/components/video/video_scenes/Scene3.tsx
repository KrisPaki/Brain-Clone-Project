import { motion } from 'framer-motion';

export function Scene3() {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center bg-[var(--color-brand-primary)]"
      initial={{ clipPath: "circle(0% at 50% 50%)" }}
      animate={{ clipPath: "circle(150% at 50% 50%)" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
    >
      <div className="text-center w-full max-w-[80vw]">
        <motion.h1 
          className="text-[5vw] font-display font-medium text-white tracking-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Stworzony dla dzieci
        </motion.h1>
        <motion.div
          className="mt-8 text-[7vw] font-display font-bold text-white bg-white/10 py-6 px-12 rounded-full inline-block backdrop-blur-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, type: "spring" }}
        >od 5 roku życia
</motion.div>
      </div>
    </motion.div>
  );
}
