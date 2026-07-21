import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene4() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 2500),
      setTimeout(() => setPhase(4), 3500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex items-center pl-[15vw]"
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      exit={{ opacity: 0, x: "20%" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div>
        <motion.h2
          className="text-[2.5vw] font-body text-[var(--color-text-muted)] tracking-wider uppercase mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.8 }}
        >
          Systematyczny trening poprawia
        </motion.h2>

        <div className="flex flex-col gap-6">
          <BenefitItem text="Koncentrację" active={phase >= 2} />
          <BenefitItem text="Pamięć słuchową" active={phase >= 3} />
          <BenefitItem text="Mowę i komunikację" active={phase >= 4} />
        </div>
      </div>
    </motion.div>
  );
}

function BenefitItem({ text, active }: { text: string; active: boolean }) {
  return (
    <motion.div 
      className="flex items-center gap-6"
      initial={{ opacity: 0, x: -30 }}
      animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      <div className={`w-3 h-3 rounded-full ${active ? 'bg-[var(--color-brand-accent)]' : 'bg-black/15'}`} />
      <h3 className="text-[4.5vw] font-display font-medium text-[var(--color-text-main)] tracking-tight">
        {text}
      </h3>
    </motion.div>
  );
}
