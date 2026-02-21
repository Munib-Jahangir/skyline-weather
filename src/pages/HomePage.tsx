import React from 'react';
import { WeatherCard } from '../components/WeatherCard';
import { ForecastCard } from '../components/ForecastCard';
import { Loader } from '../components/Loader';
import { ErrorMessage } from '../components/ErrorMessage';
import { useWeather } from '../context/WeatherContext';
import { motion, AnimatePresence } from 'motion/react';

export const HomePage: React.FC = () => {
  const { loading, error, fetchWeatherByCity, weather } = useWeather();

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex-1 flex items-center justify-center w-full"
        >
          <Loader />
        </motion.div>
      ) : error ? (
        <motion.div
          key="error"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="flex-1 flex items-center justify-center w-full"
        >
          <ErrorMessage message={error} onRetry={() => fetchWeatherByCity('London')} />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full flex flex-col items-center gap-8 py-8"
        >
          <WeatherCard />
          <ForecastCard />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
