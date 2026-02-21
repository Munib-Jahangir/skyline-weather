/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { WeatherProvider, useWeather } from './context/WeatherContext';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { SplashScreen } from './components/SplashScreen';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SettingsPage } from './pages/SettingsPage';
import { motion, AnimatePresence } from 'motion/react';

function AnimatedBackground() {
  const { theme } = useWeather();
  const isDark = theme === 'dark';

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 transition-colors duration-1000">
      {/* Dynamic Gradients */}
      <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br transition-all duration-1000 ${isDark
        ? 'from-slate-900 via-blue-950 to-slate-900'
        : 'from-sky-300 via-blue-400 to-sky-500'
        }`}></div>

      {/* Animated Clouds */}
      <div className={`absolute top-[10%] -left-64 w-96 h-48 blur-[100px] rounded-full animate-cloud-slow transition-colors duration-1000 ${isDark ? 'bg-blue-400/10' : 'bg-white/40'
        }`}></div>
      <div className={`absolute top-[40%] -right-64 w-[30rem] h-64 blur-[120px] rounded-full animate-cloud-medium transition-colors duration-1000 ${isDark ? 'bg-indigo-400/10' : 'bg-white/30'
        }`}></div>
      <div className={`absolute bottom-[20%] left-1/4 w-80 h-40 blur-[80px] rounded-full animate-cloud-fast transition-colors duration-1000 ${isDark ? 'bg-blue-300/10' : 'bg-sky-200/20'
        }`}></div>

      {/* Subtle Glows */}
      <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] blur-[120px] rounded-full animate-pulse transition-colors duration-1000 ${isDark ? 'bg-blue-500/10' : 'bg-white/20'
        }`}></div>
      <div className={`absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] blur-[150px] rounded-full transition-colors duration-1000 ${isDark ? 'bg-indigo-500/10' : 'bg-blue-400/10'
        }`}></div>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative flex flex-col items-center">
      <AnimatedBackground />
      <SplashScreen />

      <Header />

      <main className="flex-1 w-full max-w-7xl mx-auto flex flex-col items-center relative z-10 px-6 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full flex flex-col items-center"
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Navbar />

      <footer className="w-full py-8 text-center text-white/40 text-[10px] font-bold tracking-[0.3em] uppercase relative z-10 mb-20">
        Skyline Weather • 2026 Edition
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <WeatherProvider>
      <Router>
        <AppContent />
      </Router>
    </WeatherProvider>
  );
}
