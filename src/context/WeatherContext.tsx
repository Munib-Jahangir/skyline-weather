import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { WeatherData, WeatherContextType, TemperatureUnit, Theme } from '../types/weather';
import { weatherService } from '../services/weatherService';
import { useLocalStorage } from '../hooks/useLocalStorage';

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [unit, setUnit] = useLocalStorage<TemperatureUnit>('weather-unit', 'celsius');
  const [theme, setTheme] = useLocalStorage<Theme>('weather-theme', 'dark');
  const [isPrivacyMode, setPrivacyMode] = useLocalStorage<boolean>('privacy-mode', false);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const fetchWeatherByCoords = useCallback(async (lat: number, lon: number, name: string = 'Current Location') => {
    setLoading(true);
    setError(null);
    try {
      const data = await weatherService.getWeatherData(lat, lon, name);
      setWeather(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchWeatherByCity = useCallback(async (city: string) => {
    setLoading(true);
    setError(null);
    try {
      const cityData = await weatherService.searchCity(city);
      const data = await weatherService.getWeatherData(cityData.latitude, cityData.longitude, cityData.name);
      setWeather(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'City not found');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const initWeather = async () => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            fetchWeatherByCoords(position.coords.latitude, position.coords.longitude);
          },
          () => {
            // Fallback to London if geolocation is denied
            fetchWeatherByCity('London');
          }
        );
      } else {
        fetchWeatherByCity('London');
      }
    };

    initWeather();
  }, [fetchWeatherByCoords, fetchWeatherByCity]);

  return (
    <WeatherContext.Provider value={{
      weather,
      loading,
      error,
      unit,
      setUnit,
      theme,
      setTheme,
      isPrivacyMode,
      setPrivacyMode,
      fetchWeatherByCoords,
      fetchWeatherByCity
    }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
};
