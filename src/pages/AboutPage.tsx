import React from 'react';
import { motion } from 'motion/react';
import { Info, Github, Twitter, Globe, Heart } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-2xl mx-auto px-4 py-12"
    >
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 bg-white/10 rounded-2xl">
            <Info className="text-white w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">About Skyline</h1>
            <p className="text-white/60 font-medium">Version 1.0.0 • 2026 Edition</p>
          </div>
        </div>

        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Skyline is a premium weather experience designed for those who appreciate both accuracy and aesthetics. 
            We believe that checking the weather shouldn't just be functional—it should be a moment of delight.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-white font-bold mb-2">Real-time Data</h3>
              <p className="text-sm text-white/60">Powered by Open-Meteo's high-resolution weather models for global coverage.</p>
            </div>
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-white font-bold mb-2">Privacy First</h3>
              <p className="text-sm text-white/60">Your location data never leaves your device. We don't track you.</p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col items-center gap-6">
            <div className="flex gap-4">
              <button className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl transition-colors">
                <Github className="w-5 h-5" />
              </button>
              <button className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl transition-colors">
                <Globe className="w-5 h-5" />
              </button>
            </div>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40">
              Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> by Skyline Team
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
