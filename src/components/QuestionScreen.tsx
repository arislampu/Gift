import { motion } from 'motion/react';
import { useState, useRef, useEffect } from 'react';

interface Props {
  onYes: () => void;
  key?: string | number;
}

export function QuestionScreen({ onYes }: Props) {
  const [noCount, setNoCount] = useState(0);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  const getQuestionText = () => {
    if (noCount === 0) return "do you miss me sometimes? 😼";
    if (noCount === 1) return "are you sure?";
    if (noCount === 2) return "princess lily, think carefully 😼";
    return "incorrect answer detected\nplease try again";
  };
  
  const handleNoHoverOrClick = () => {
    if (noCount >= 3) {
      if (containerRef.current) {
        const x = (Math.random() - 0.5) * 200;
        const y = (Math.random() - 0.5) * 200;
        setNoPos({ x, y });
      }
    }
    setNoCount(prev => prev + 1);
  };

  return (
    <motion.div 
      className="flex flex-col items-center justify-center min-h-[100dvh] text-center px-4 overflow-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
    >
      <div className="bg-white rounded-[24px] shadow-[0_10px_25px_rgba(255,133,161,0.1)] border border-[rgba(255,133,161,0.1)] p-8 md:p-12 max-w-md w-full relative overflow-hidden">
        <div className="text-[10px] font-bold text-brand-text uppercase tracking-widest opacity-40 mb-6">Step 01: The Truth</div>
        
        <div className="min-h-[100px] flex items-center justify-center mb-8">
          <motion.p 
            className="text-2xl md:text-3xl text-brand-text font-serif whitespace-pre-wrap leading-tight"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            key={noCount}
            transition={{ type: "spring", stiffness: 100 }}
          >
            {getQuestionText()}
          </motion.p>
        </div>
        
        <div 
          ref={containerRef} 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 relative w-full h-[150px] sm:h-[60px]"
        >
          <motion.button
            onClick={onYes}
            className="z-10 px-8 py-3 bg-brand-accent text-white rounded-full font-semibold text-sm shadow-[0_10px_25px_rgba(255,133,161,0.2)] hover:-translate-y-0.5 transition-all active:scale-95 border-none flex items-center justify-center min-w-[120px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            YES 🤍
          </motion.button>
          
          <motion.button
            onClick={handleNoHoverOrClick}
            onMouseEnter={noCount >= 3 ? handleNoHoverOrClick : undefined}
            animate={{ x: noPos.x, y: noPos.y }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="z-20 px-8 py-3 bg-white text-brand-accent border border-brand-accent rounded-full font-semibold text-sm shadow-sm hover:shadow-[0_4px_12px_rgba(255,133,161,0.1)] transition-all active:scale-95 flex items-center justify-center min-w-[120px]"
          >
            NO 😼
          </motion.button>
        </div>
        <div className="absolute top-4 right-4 text-2xl opacity-80">✨</div>
        <div className="absolute bottom-4 left-6 text-xl opacity-80">🌸</div>
      </div>
    </motion.div>
  );
}
