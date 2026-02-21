import React from 'react';
import { X, Check } from 'lucide-react';
import { useWeather } from '../context/WeatherContext';
import { motion, AnimatePresence } from 'motion/react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const { unit, setUnit } = useWeather();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-[#1a1a1a] border border-white/10 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden"
          >
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-sky-500/10 to-transparent pointer-events-none"></div>

            <div className="flex justify-between items-center mb-8 relative z-10">
              <h2 className="text-2xl font-bold text-white">Settings</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-full text-white/60 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-8 relative z-10">
              <section>
                <h3 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">Temperature Unit</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setUnit('celsius')}
                    className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                      unit === 'celsius'
                        ? 'bg-sky-500/20 border-sky-500/50 text-white'
                        : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'
                    }`}
                  >
                    <span className="font-medium">Celsius (°C)</span>
                    {unit === 'celsius' && <Check size={20} className="text-sky-400" />}
                  </button>
                  <button
                    onClick={() => setUnit('fahrenheit')}
                    className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                      unit === 'fahrenheit'
                        ? 'bg-sky-500/20 border-sky-500/50 text-white'
                        : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'
                    }`}
                  >
                    <span className="font-medium">Fahrenheit (°F)</span>
                    {unit === 'fahrenheit' && <Check size={20} className="text-sky-400" />}
                  </button>
                </div>
              </section>

              <section>
                <h3 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">About Skyline</h3>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-white/60 text-sm leading-relaxed">
                    Skyline Weather provides accurate real-time weather data powered by Open-Meteo. 
                    Designed for clarity and elegance.
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] text-white/30 uppercase font-bold tracking-tighter">
                    <span>Version 1.0.0</span>
                    <span>© 2026 Skyline Team</span>
                  </div>
                </div>
              </section>
            </div>

            <button
              onClick={onClose}
              className="w-full mt-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-2xl transition-all active:scale-[0.98] shadow-lg shadow-sky-500/20"
            >
              Done
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
