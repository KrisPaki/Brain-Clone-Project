import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const bars = [0.4, 0.75, 0.55, 0.9, 0.65, 0.45, 0.8, 0.6, 0.7, 0.5];

export function Scene5() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 600),
      setTimeout(() => setPhase(2), 2200),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 1 }}
    >
      <motion.p
        className="text-[1.8vw] font-body tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Model
      </motion.p>

      <motion.h1
        className="text-[5.5vw] font-display font-bold text-[var(--color-text-main)] tracking-tight mb-14 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15 }}
      >
        Działa jak gra
      </motion.h1>

      {/* Sound-wave bar visualizer */}
      <motion.div
        className="flex items-end gap-[0.6vw] h-[10vw]"
        initial={{ opacity: 0 }}
        animate={phase >= 1 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="w-[1.4vw] rounded-full"
            initial={{ scaleY: 0.1 }}
            animate={phase >= 1
              ? { scaleY: [h * 0.5, h, h * 0.6, h * 0.85, h * 0.5] }
              : { scaleY: 0.1 }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.08,
            }}
            style={{
              height: '10vw',
              originY: 1,
              backgroundColor: i % 3 === 1 ? 'var(--color-brand-accent)' : 'var(--color-brand-primary)',
              opacity: 0.85 + i * 0.015,
            }}
          />
        ))}
      </motion.div>

      <motion.p
        className="mt-14 text-[2.2vw] font-light text-[var(--color-text-muted)] text-center"
        initial={{ opacity: 0 }}
        animate={phase >= 2 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        Automatycznie dopasowuje{' '}
        <span className="text-[var(--color-brand-accent)] font-semibold">poziom trudności</span>
      </motion.p>
    </motion.div>
  );
}
