import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const PROBLEMS = [
  { emoji: "👂", text: "Słyszy, ale nie słucha" },
  { emoji: "🗣️", text: "Nie rozumie poleceń i wymaga powtarzania" },
  { emoji: "📖", text: "Problemy z czytaniem i pisaniem" },
  { emoji: "🎯", text: "Trudności z koncentracją i uwagą" },
  { emoji: "🔊", text: "Wrażliwe na dźwięki (CAPD)" },
  { emoji: "⚡", text: "ADHD – wspiera terapię" },
  { emoji: "🧩", text: "Zaburzenia ze spektrum autyzmu (ASD)" },
  { emoji: "💬", text: "Pacjenci logopedyczni (alalia, DLD, afazja)" },
  { emoji: "🏫", text: "Dziecko zbyt głośne lub wycofane" },
  { emoji: "🏥", text: "Po usunięciu trzeciego migdałka lub drenach" },
  { emoji: "✍️", text: "Problemy z głoskowaniem i wymową" },
  { emoji: "🧠", text: "Słaba pamięć słuchowa i rozumienie" },
];

export default function ProblemCycler() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx(i => (i + 1) % PROBLEMS.length), 2800);
    return () => clearInterval(t);
  }, [paused]);

  const go = (i: number) => {
    setIdx(i);
    setPaused(true);
    setTimeout(() => setPaused(false), 4000);
  };

  return (
    <div className="space-y-5">
      <div
        className="relative h-28 rounded-2xl bg-primary/5 border border-primary/20 overflow-hidden cursor-pointer select-none"
        onClick={() => setIdx(i => (i + 1) % PROBLEMS.length)}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center gap-5 px-6"
          >
            <span className="text-5xl shrink-0">{PROBLEMS[idx].emoji}</span>
            <p className="text-xl font-semibold text-foreground leading-snug">{PROBLEMS[idx].text}</p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          key={`bar-${idx}`}
          className="absolute bottom-0 left-0 h-0.5 bg-primary"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: paused ? 0 : 2.8, ease: "linear" }}
        />
      </div>

      <div className="flex flex-wrap gap-1.5">
        {PROBLEMS.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? "w-6 bg-primary" : "w-1.5 bg-primary/25 hover:bg-primary/50"}`}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 pt-1">
        {PROBLEMS.map((p, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`flex items-center gap-2 text-left text-sm transition-all duration-200 ${i === idx ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"}`}
          >
            <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 transition-colors ${i === idx ? "text-primary" : "text-muted-foreground/40"}`} />
            <span className="leading-snug">{p.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
