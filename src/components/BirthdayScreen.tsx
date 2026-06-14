import { motion, AnimatePresence } from 'motion/react';
import { Cake } from './Cake';
import { useState } from 'react';
import confetti from 'canvas-confetti';

interface Props {
  key?: string | number;
}

export function BirthdayScreen({}: Props = {}) {
  const [isBlownOut, setIsBlownOut] = useState(false);
  const [showWish, setShowWish] = useState(false);
  const [showSecondWish, setShowSecondWish] = useState(false);
  
  const handleBlowOut = () => {
    setIsBlownOut(true);
    
    // Show the first message almost immediately after blowing out
    setTimeout(() => {
      setShowWish(true);
    }, 500);

    // Show the second message and confetti a few seconds later
    setTimeout(() => {
      setShowSecondWish(true);
      
      confetti({
        particleCount: 40,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffb3c6', '#ffcbf2', '#fde2e4', '#ffffff'],
        disableForReducedMotion: true,
        gravity: 0.8,
        scalar: 0.8
      });
    }, 4000);
  };

  return (
    <div className="min-h-[100dvh] pt-12 md:pt-20 pb-32 w-full px-4 md:px-0">
      <div className="max-w-4xl mx-auto space-y-24 md:space-y-32">
        
        {/* Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-center px-4"
        >
          <h1 className="text-3xl md:text-4xl mb-4 font-serif text-brand-accent leading-tight">
            Happy 22nd Birthday, <br className="md:hidden"/>Princess Lily 🌸
          </h1>
          <p className="text-xs md:text-sm italic opacity-60 tracking-widest uppercase">
            joyeux anniversaire, mon ange
          </p>
        </motion.div>

        {/* Main Grid / Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr_320px] gap-6 md:gap-8 items-start">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.5 }}
              className="bg-white rounded-[24px] shadow-[0_10px_25px_rgba(255,133,161,0.1)] p-8 border border-[rgba(255,133,161,0.1)] text-center relative overflow-hidden"
            >
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-6">Step 02: A Wish</div>
              <p className="text-sm leading-loose opacity-80 mb-6 font-sans">
                happy birthdayyy :)<br/><br/>
                i hope this year feels softer on your heart and kinder to your mind.
                thank you for existing and for being someone who makes ordinary days feel a little warmer.<br/><br/>
                i hope you laugh a lot, sleep peacefully, eat good food, and slowly become everything you dream about.<br/><br/>
                proud of you always 🤍
              </p>
              <div className="absolute top-2 right-4 text-xl opacity-50">✨</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="bg-white rounded-[24px] shadow-[0_10px_25px_rgba(255,133,161,0.1)] border border-[rgba(255,133,161,0.1)] h-48 flex flex-col justify-center p-8 text-center"
            >
              <h4 className="font-serif text-lg text-brand-accent mb-2">a tiny gift...</h4>
              <p className="text-[13px] leading-relaxed opacity-70">
                thank you for being you. and thank you for letting me celebrate your birthday, even from far away.
              </p>
            </motion.div>
          </div>

          {/* Center Column - Cake */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5 }}
            className="flex flex-col items-center justify-center py-12 md:py-0"
          >
            <div className="relative">
              <Cake onBlowOut={handleBlowOut} isBlownOut={isBlownOut} />
              
              {!isBlownOut && (
                <div className="absolute -bottom-4 w-full text-center text-xs opacity-40 uppercase tracking-tighter">
                  make a wish, princess lily ✨
                </div>
              )}
            </div>
            
            <div className="h-24 mt-12 flex flex-col items-center justify-center text-center px-4">
              <AnimatePresence mode="wait">
                {showWish && !showSecondWish && (
                  <motion.p
                    key="wish"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 1 }}
                    className="text-sm uppercase tracking-widest opacity-60"
                  >
                    make a wish, princess lily ✨
                  </motion.p>
                )}
                
                {showSecondWish && (
                  <motion.h2
                    key="gentle"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="font-serif text-2xl italic text-brand-text mb-4"
                  >
                    "i hope life is<br/>gentle with you this year"
                  </motion.h2>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.5 }}
              className="bg-white/50 backdrop-blur-sm rounded-[24px] p-8 border-dashed border-2 border-pink-200 text-center"
            >
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-6">Personal Message</div>
              
              <div className="space-y-4">
                <p className="text-[13px] italic leading-relaxed opacity-80">
                  "i wasn't sure what to give you, so i made this : )"
                </p>
                <p className="text-[13px] italic leading-relaxed opacity-80">
                  "i know this isn't exactly a real birthday gift. if we lived closer, i would've loved to give you something you could actually hold, but we're far away."
                </p>
                <p className="text-[13px] italic leading-relaxed opacity-80">
                  "If we ever meet, I'll owe you one. Something real that you can hold, not just another message from me."
                </p>
              </div>

              <div className="h-px w-full bg-pink-100 my-6"></div>
              
              <p className="font-medium text-[13px] opacity-90 leading-relaxed italic">
                "Until then, this is the best gift I can give you: a reminder that someone far away is thinking about you today and hoping you have an amazing birthday!"
              </p>
              
              <p className="mt-8 font-serif text-xl italic text-brand-text">from hika 🤍</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="rounded-[24px] h-32 flex items-center justify-center bg-brand-blush border-none p-6 text-center"
            >
              <p className="text-xs font-medium text-pink-500 max-w-[200px]">
                p.s. turning 22 does not make you less weird 😼
              </p>
            </motion.div>
          </div>

        </div>
        
        <footer className="w-full text-center mt-20">
          <p className="text-[10px] uppercase tracking-[0.4em] opacity-30">for lily — made with 🤍</p>
        </footer>
      </div>
    </div>
  );
}
