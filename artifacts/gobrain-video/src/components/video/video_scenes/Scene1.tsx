import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="text-center w-[80vw]">
        <motion.h1 
          className="text-[4vw] font-light leading-tight font-display tracking-tight text-[var(--color-text-main)]"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Twoje dziecko słyszy,
        </motion.h1>
        
        <motion.h1 
          className="text-[5vw] font-medium leading-tight font-display tracking-tighter gradient-text-primary mt-4"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={phase >= 2 ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          ale nie słucha?
        </motion.h1>
      </div>
    </motion.div>
  );
}
