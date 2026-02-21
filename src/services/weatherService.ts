import { WeatherData } from '../types/weather';

const BASE_URL = 'https://api.open-meteo.com/v1/forecast';
const GEO_URL = 'https://geocoding-api.open-meteo.com/v1/search';

export const weatherService = {
  async getWeatherData(lat: number, lon: number, locationName: string): Promise<WeatherData> {
    const response = await fetch(
      `${BASE_URL}?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const data = await response.json();

    return {
      current: {
        temperature: data.current_weather.temperature,
        windSpeed: data.current_weather.windspeed,
        weatherCode: data.current_weather.weathercode,
        time: data.current_weather.time,
      },
      daily: {
        time: data.daily.time,
        temperatureMax: data.daily.temperature_2m_max,
        temperatureMin: data.daily.temperature_2m_min,
        weatherCode: data.daily.weathercode,
      },
      location: {
        name: locationName,
        latitude: lat,
        longitude: lon,
      },
    };
  },

  async searchCity(city: string) {
    const response = await fetch(`${GEO_URL}?name=${encodeURIComponent(city)}&count=1&language=en&format=json`);
    
    if (!response.ok) {
      throw new Error('City search failed');
    }

    const data = await response.json();
    
    if (!data.results || data.results.length === 0) {
      throw new Error('City not found');
    }

    return data.results[0];
  }
};
