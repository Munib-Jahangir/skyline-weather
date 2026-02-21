import React from 'react';
import { motion } from 'motion/react';
import { Settings, Check, Thermometer, Bell, Shield, Moon } from 'lucide-react';
import { useWeather } from '../context/WeatherContext';

export const SettingsPage: React.FC = () => {
  const { unit, setUnit, theme, setTheme, isPrivacyMode, setPrivacyMode } = useWeather();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-2xl mx-auto px-4 py-12"
    >
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-4 bg-white/10 rounded-2xl">
            <Settings className="text-white w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold text-white">Settings</h1>
        </div>

        <div className="space-y-10">
          <section>
            <div className="flex items-center gap-2 mb-6">
              <Thermometer className="text-sky-400 w-4 h-4" />
              <h3 className="text-white/40 text-xs font-bold uppercase tracking-widest">Temperature Unit</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => setUnit('celsius')}
                className={`flex items-center justify-between p-6 rounded-3xl border transition-all ${unit === 'celsius'
                  ? 'bg-white/20 border-white/30 text-white shadow-xl'
                  : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'
                  }`}
              >
                <span className="font-bold text-lg">Celsius (°C)</span>
                {unit === 'celsius' && <Check size={24} className="text-sky-400" />}
              </button>
              <button
                onClick={() => setUnit('fahrenheit')}
                className={`flex items-center justify-between p-6 rounded-3xl border transition-all ${unit === 'fahrenheit'
                  ? 'bg-white/20 border-white/30 text-white shadow-xl'
                  : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'
                  }`}
              >
                <span className="font-bold text-lg">Fahrenheit (°F)</span>
                {unit === 'fahrenheit' && <Check size={24} className="text-sky-400" />}
              </button>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <Moon className="text-sky-400 w-4 h-4" />
              <h3 className="text-white/40 text-xs font-bold uppercase tracking-widest">Preferences</h3>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-full flex items-center justify-between p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="flex items-center gap-4 text-left">
                  <Moon className="text-white/60" />
                  <div>
                    <p className="text-white font-bold">Dark Mode</p>
                    <p className="text-xs text-white/40">Toggle between light and dark theme</p>
                  </div>
                </div>
                <div className={`w-12 h-6 rounded-full relative transition-colors ${theme === 'dark' ? 'bg-sky-500' : 'bg-white/10'}`}>
                  <motion.div
                    animate={{ x: theme === 'dark' ? 24 : 4 }}
                    className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm"
                  ></motion.div>
                </div>
              </button>

              <button
                onClick={() => setPrivacyMode(!isPrivacyMode)}
                className="w-full flex items-center justify-between p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="flex items-center gap-4 text-left">
                  <Shield className="text-white/60" />
                  <div>
                    <p className="text-white font-bold">Privacy Mode</p>
                    <p className="text-xs text-white/40">Hide precise location data</p>
                  </div>
                </div>
                <div className={`w-12 h-6 rounded-full relative transition-colors ${isPrivacyMode ? 'bg-sky-500' : 'bg-white/10'}`}>
                  <motion.div
                    animate={{ x: isPrivacyMode ? 24 : 4 }}
                    className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm"
                  ></motion.div>
                </div>
              </button>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};
