import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const SplashScreen: React.FC = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000); // Slightly longer for better view
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#0A0F1E] flex items-center justify-center overflow-hidden"
        >
          {/* Animated Background Gradient */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -left-[20%] w-[140%] h-[140%] bg-gradient-to-br from-sky-500/20 via-blue-600/20 to-indigo-900/20 blur-[100px]"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* Glassmorphism Container */}
            <div className="backdrop-blur-3xl bg-white/5 border border-white/10 rounded-[4rem] p-12 md:p-20 shadow-[0_0_80px_rgba(0,0,0,0.5)] flex flex-col items-center gap-10">
              <div className="relative group">
                {/* Glow Effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -inset-8 bg-sky-500/30 blur-[40px] rounded-full"
                ></motion.div>

                {/* Icon Container */}
                <motion.div
                  initial={{ scale: 0.8, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
                  className="w-32 h-32 md:w-48 md:h-48 relative z-10"
                >
                  <img src="/favicon.png" alt="Skyline Logo" className="w-full h-full object-contain drop-shadow-2xl" />
                </motion.div>
              </div>

              <div className="text-center space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tighter mb-1">
                    Skyline <span className="bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent">Weather</span>
                  </h1>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-white/40 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs"
                >
                  Premium Experience • 2026
                </motion.p>
              </div>

              {/* Progress Indicator */}
              <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden relative mt-4">
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
                  className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-sky-400 to-transparent"
                ></motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
