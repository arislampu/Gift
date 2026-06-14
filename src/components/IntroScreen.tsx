import { motion } from 'motion/react';

interface Props {
  onNext: () => void;
  key?: string | number;
}

export function IntroScreen({ onNext }: Props) {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center min-h-screen text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
    >
      <motion.p 
        className="text-xl md:text-2xl text-brand-accent font-serif tracking-wide mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        before opening your birthday gift...
      </motion.p>
      
      <motion.p 
        className="text-lg md:text-xl text-brand-text opacity-70 font-light mb-12"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        one important question first
      </motion.p>
      
      <motion.button
        onClick={onNext}
        className="px-8 py-3 bg-brand-accent text-white rounded-full font-semibold text-sm shadow-[0_10px_25px_rgba(255,133,161,0.2)] hover:-translate-y-0.5 transition-transform active:scale-95 border-none"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3.5, duration: 0.8 }}
      >
        Continue
      </motion.button>
    </motion.div>
  );
}
