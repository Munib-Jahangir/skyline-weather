import React from 'react';
import { Wind, Droplets, Thermometer, MapPin, Sun } from 'lucide-react';
import { useWeather } from '../context/WeatherContext';
import { getWeatherCondition } from '../utils/weatherCodes';
import { motion } from 'motion/react';

export const WeatherCard: React.FC = () => {
  const { weather, unit } = useWeather();

  if (!weather) return null;

  const condition = getWeatherCondition(weather.current.weatherCode);
  const Icon = condition.icon;

  const formatTemp = (temp: number) => {
    if (unit === 'fahrenheit') {
      return Math.round((temp * 9) / 5 + 32);
    }
    return Math.round(temp);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[2.5rem] p-8 md:p-10 w-full max-w-2xl shadow-2xl relative overflow-hidden group hover:scale-[1.01] transition-transform duration-500"
    >
      {/* Decorative Glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-sky-400/20 blur-[100px] rounded-full pointer-events-none group-hover:bg-sky-400/30 transition-colors duration-500"></div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-white/60 font-medium tracking-wide uppercase text-xs">
            <MapPin size={14} />
            {weather.location.name}
          </div>
          <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter">
            {formatTemp(weather.current.temperature)}°
          </h2>
          <p className="text-xl md:text-2xl text-white/80 font-medium">
            {condition.label}
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Icon className={`w-24 h-24 md:w-32 md:h-32 ${condition.color} drop-shadow-2xl animate-float`} />
          <div className="flex gap-4 text-white/60 font-medium">
            <span className="flex items-center gap-1">
              <Thermometer size={16} className="text-red-400" />
              {formatTemp(weather.daily.temperatureMax[0])}°
            </span>
            <span className="flex items-center gap-1">
              <Thermometer size={16} className="text-blue-400" />
              {formatTemp(weather.daily.temperatureMin[0])}°
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/10 relative z-10">
        <div className="flex flex-col items-center p-4 rounded-3xl bg-white/5 hover:bg-white/10 transition-colors">
          <Wind className="text-sky-300 mb-2" size={24} />
          <span className="text-white/40 text-xs uppercase font-bold tracking-widest mb-1">Wind</span>
          <span className="text-white font-semibold">{weather.current.windSpeed} km/h</span>
        </div>
        <div className="flex flex-col items-center p-4 rounded-3xl bg-white/5 hover:bg-white/10 transition-colors">
          <Droplets className="text-blue-400 mb-2" size={24} />
          <span className="text-white/40 text-xs uppercase font-bold tracking-widest mb-1">Humidity</span>
          <span className="text-white font-semibold">64%</span>
        </div>
        <div className="hidden md:flex flex-col items-center p-4 rounded-3xl bg-white/5 hover:bg-white/10 transition-colors">
          <Sun className="text-yellow-400 mb-2" size={24} />
          <span className="text-white/40 text-xs uppercase font-bold tracking-widest mb-1">UV Index</span>
          <span className="text-white font-semibold">Low</span>
        </div>
      </div>
    </motion.div>
  );
};
