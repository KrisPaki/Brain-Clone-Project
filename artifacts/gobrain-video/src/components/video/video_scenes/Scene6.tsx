import { motion } from 'framer-motion';

export function Scene6() {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center relative z-10">
        <motion.h2 
          className="text-[3vw] font-body text-[var(--color-text-muted)] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Zauważalne efekty już po
        </motion.h2>
        
        <motion.div 
          className="text-[12vw] font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-primary)] to-[#00aaff]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, type: "spring", bounce: 0.4, delay: 0.8 }}
        >
          4-8
        </motion.div>
        
        <motion.h2 
          className="text-[4vw] font-display font-bold text-[var(--color-text-main)] mt-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          tygodniach
        </motion.h2>
      </div>

      <motion.div
        className="absolute w-[60vw] h-[60vw] bg-[var(--color-brand-primary)] rounded-full opacity-5 blur-[80px] pointer-events-none"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.07 }}
        transition={{ duration: 2, delay: 1 }}
      />
    </motion.div>
  );
}
