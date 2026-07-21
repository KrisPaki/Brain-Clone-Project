import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene2() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 1500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="text-center">
        <motion.div 
          className="mb-8 overflow-hidden rounded-2xl mx-auto w-[12vw] h-[12vw] bg-black/5 border border-black/10 flex items-center justify-center"
          initial={{ opacity: 0, rotateX: 90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            className="flex gap-2"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-1.5 h-8 bg-[var(--color-brand-primary)] rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
            <div className="w-1.5 h-16 bg-[var(--color-brand-accent)] rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
            <div className="w-1.5 h-10 bg-[var(--color-brand-primary)] rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
            <div className="w-1.5 h-14 bg-[#1a1a1a] rounded-full animate-pulse" style={{ animationDelay: '450ms' }} />
            <div className="w-1.5 h-6 bg-[var(--color-brand-accent)] rounded-full animate-pulse" style={{ animationDelay: '600ms' }} />
          </motion.div>
        </motion.div>

        <motion.h2 
          className="text-[2vw] font-body text-[var(--color-text-muted)] tracking-[0.2em] uppercase mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 1 }}
        >
          Przedstawiamy
        </motion.h2>
        
        <motion.h1 
          className="text-[6vw] font-bold font-display tracking-tight text-[var(--color-text-main)] leading-none mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, type: "spring", damping: 20 }}
        >
          ITS GoBrain
        </motion.h1>

        <motion.p
          className="text-[2.5vw] font-light text-[var(--color-brand-primary)]"
          initial={{ opacity: 0 }}
          animate={phase >= 2 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >interaktywny trening słuchowy</motion.p>
      </div>
    </motion.div>
  );
}
