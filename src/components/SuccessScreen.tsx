import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

interface Props {
  onNext: () => void;
  key?: string | number;
}

export function SuccessScreen({ onNext }: Props) {
  useEffect(() => {
    const end = Date.now() + 1.5 * 1000;
    const colors = ['#ffb3c6', '#ffcbf2', '#fde2e4'];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
        disableForReducedMotion: true
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
        disableForReducedMotion: true
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }, []);

  return (
    <motion.div 
      className="flex flex-col items-center justify-center min-h-[100dvh] text-center px-4 overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.8 } }}
    >
      <motion.p 
        className="text-2xl md:text-3xl text-brand-text font-serif font-medium mb-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        YEAYYY I KNEW IT 😌🤍
      </motion.p>
      
      <motion.p 
        className="text-lg md:text-xl text-brand-text opacity-70 font-light mb-12"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        thank you for admitting it, princess lily
      </motion.p>
      
      <motion.button
        onClick={onNext}
        className="px-8 py-3 bg-brand-accent text-white rounded-full font-semibold shadow-[0_10px_25px_rgba(255,133,161,0.2)] hover:-translate-y-0.5 transition-all active:scale-95 text-sm flex items-center justify-center gap-2 border-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
      >
        Open Birthday Gift 🎂
      </motion.button>
    </motion.div>
  );
}
