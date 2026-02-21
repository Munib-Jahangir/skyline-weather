import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { useWeather } from '../context/WeatherContext';
import { useLocation, useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const { fetchWeatherByCity, fetchWeatherByCoords } = useWeather();
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      fetchWeatherByCity(searchValue);
      setSearchValue('');
    }
  };

  const handleLocationClick = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        fetchWeatherByCoords(pos.coords.latitude, pos.coords.longitude);
      });
    }
  };

  return (
    <header className="w-full max-w-4xl mx-auto px-4 pt-16 pb-8 flex flex-col items-center gap-12 relative z-20">
      {/* Brand Section */}
      <div
        onClick={() => navigate('/')}
        className="flex flex-col items-center gap-6 cursor-pointer group"
      >
        <div className="w-20 h-20 md:w-24 md:h-24 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10 group-hover:border-white/20">
          <img src="/favicon.png" alt="Skyline" className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-transform duration-500 group-hover:rotate-6" />
        </div>

        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-2">
            Skyline <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Weather</span>
          </h1>
          <p className="text-white/30 text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase transition-colors group-hover:text-sky-400/50">
            The Sky Reimagined
          </p>
        </div>
      </div>

      {/* Search Bar Container - Conditional */}
      {isHome && (
        <div className="flex items-center gap-3 w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <form onSubmit={handleSearch} className="relative flex-1 group">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search your city..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:bg-white/10 backdrop-blur-xl transition-all duration-300"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 w-5 h-5 transition-colors group-focus-within:text-sky-400" />
          </form>

          <button
            onClick={handleLocationClick}
            className="p-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-white transition-all duration-300 active:scale-95 group relative overflow-hidden"
            title="Use current location"
          >
            <div className="absolute inset-0 bg-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <MapPin className="w-5 h-5 text-white/40 group-hover:text-sky-400 transition-colors relative z-10" />
          </button>
        </div>
      )}
    </header>
  );
};
