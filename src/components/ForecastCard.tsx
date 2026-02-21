import React from 'react';
import { useWeather } from '../context/WeatherContext';
import { getWeatherCondition } from '../utils/weatherCodes';
import { motion } from 'motion/react';

export const ForecastCard: React.FC = () => {
  const { weather, unit } = useWeather();

  if (!weather) return null;

  const formatTemp = (temp: number) => {
    if (unit === 'fahrenheit') {
      return Math.round((temp * 9) / 5 + 32);
    }
    return Math.round(temp);
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  // Skip the first day as it's the current day
  const forecastDays = weather.daily.time.slice(1, 6);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 mt-12">
      <h3 className="text-white/60 font-bold uppercase tracking-widest text-xs mb-6 px-4">5-Day Forecast</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {forecastDays.map((time, index) => {
          const actualIndex = index + 1;
          const condition = getWeatherCondition(weather.daily.weatherCode[actualIndex]);
          const Icon = condition.icon;

          return (
            <motion.div
              key={time}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 flex flex-col items-center gap-4 hover:bg-white/15 transition-all cursor-default group"
            >
              <span className="text-white/70 font-bold text-sm">{formatDate(time)}</span>
              <Icon className={`w-10 h-10 ${condition.color} group-hover:scale-110 transition-transform`} />
              <div className="flex flex-col items-center">
                <span className="text-white font-bold text-lg">{formatTemp(weather.daily.temperatureMax[actualIndex])}°</span>
                <span className="text-white/40 font-medium text-sm">{formatTemp(weather.daily.temperatureMin[actualIndex])}°</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
