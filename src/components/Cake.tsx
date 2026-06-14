import { motion, AnimatePresence } from 'motion/react';

interface Props {
  onBlowOut: () => void;
  isBlownOut: boolean;
}

export function Cake({ onBlowOut, isBlownOut }: Props) {
  return (
    <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center animate-float">
      {/* Cake Base */}
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible drop-shadow-sm">
        {/* Plate */}
        <ellipse cx="100" cy="180" rx="90" ry="15" fill="#fdf5f6" stroke="#fbcfe8" strokeWidth="2" />
        
        {/* Bottom layer */}
        <path d="M40 180 C40 180, 100 190, 160 180 L160 140 C160 140, 100 150, 40 140 Z" fill="#ffc2d1" />
        <path d="M40 140 C40 150, 100 160, 160 140 C160 130, 100 120, 40 140 Z" fill="#ffb3c6" />
        
        {/* Top layer */}
        <path d="M55 140 C55 140, 100 148, 145 140 L145 100 C145 100, 100 108, 55 100 Z" fill="#ffb3c6" />
        <path d="M55 100 C55 108, 100 116, 145 100 C145 92, 100 84, 55 100 Z" fill="#ff8fab" />
        
        {/* Frosting drips */}
        <path d="M55 100 Q 64 115 73 100 Q 82 120 91 100 Q 100 130 109 100 Q 118 115 127 100 Q 136 125 145 100" fill="none" stroke="#fff0f3" strokeWidth="5" strokeLinecap="round" />
        <path d="M40 140 Q 52 155 64 140 Q 76 160 88 140 Q 100 165 112 140 Q 124 155 136 140 Q 148 160 160 140" fill="none" stroke="#fff0f3" strokeWidth="5" strokeLinecap="round" />

        {/* Candle */}
        <rect x="94" y="60" width="12" height="40" rx="3" fill="#fffcfd" />
        {/* Candle stripes */}
        <path d="M94 70 L106 65" stroke="#ffb3c6" strokeWidth="2" />
        <path d="M94 78 L106 73" stroke="#ffb3c6" strokeWidth="2" />
        <path d="M94 86 L106 81" stroke="#ffb3c6" strokeWidth="2" />
        
        {/* Wick */}
        <line x1="100" y1="60" x2="100" y2="54" stroke="#8a4b5b" strokeWidth="2" strokeLinecap="round" />
      </svg>
      
      {/* Flame - Clickable */}
      <AnimatePresence>
        {!isBlownOut && (
          <motion.div
            key="flame"
            className="absolute top-[17%] sm:top-[20%] left-1/2 -translate-x-1/2 w-6 h-8 cursor-pointer group flex items-center justify-center"
            onClick={onBlowOut}
            exit={{ opacity: 0, scale: 0, y: -10 }}
            title="Make a wish ✨"
          >
            <motion.div
              className="w-4 h-6 sm:w-5 sm:h-7 bg-gradient-to-t from-amber-400 via-orange-300 to-yellow-200 rounded-b-md rounded-t-[50%] blur-[0.5px] shadow-[0_0_15px_rgba(251,191,36,0.6)]"
              animate={{ 
                scale: [1, 1.1, 0.95, 1.05, 1],
                rotate: [0, -3, 3, -1, 0],
                opacity: [0.9, 1, 0.8, 1, 0.9]
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
              whileHover={{ scale: 1.25 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Smoke */}
      <AnimatePresence>
        {isBlownOut && (
          <motion.div
            key="smoke"
            className="absolute top-[5%] sm:top-[10%] left-1/2 -translate-x-1/2 w-8 h-16 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-4 h-4 bg-gray-200 rounded-full blur-[2px] opacity-60 absolute bottom-0 left-2"
              animate={{
                y: -50,
                x: [-10, 10, -5, 15],
                opacity: [0, 0.5, 0],
                scale: [1, 2, 3]
              }}
              transition={{
                duration: 2.5,
                ease: "easeOut",
              }}
            />
            <motion.div
              className="w-3 h-3 bg-gray-200 rounded-full blur-[2px] opacity-50 absolute bottom-2 left-3"
              animate={{
                y: -40,
                x: [5, -15, 5],
                opacity: [0, 0.4, 0],
                scale: [1, 1.5, 2]
              }}
              transition={{
                duration: 3,
                ease: "easeOut",
                delay: 0.2
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
