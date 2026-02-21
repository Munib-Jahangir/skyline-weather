import { 
  Sun, 
  Cloud, 
  CloudRain, 
  CloudLightning, 
  CloudSnow, 
  CloudDrizzle, 
  CloudFog,
  LucideIcon 
} from 'lucide-react';

export interface WeatherCondition {
  label: string;
  icon: LucideIcon;
  color: string;
}

export const getWeatherCondition = (code: number): WeatherCondition => {
  if (code === 0) return { label: 'Clear Sky', icon: Sun, color: 'text-yellow-400' };
  if (code >= 1 && code <= 3) return { label: 'Partly Cloudy', icon: Cloud, color: 'text-sky-300' };
  if (code >= 45 && code <= 48) return { label: 'Foggy', icon: CloudFog, color: 'text-gray-400' };
  if (code >= 51 && code <= 55) return { label: 'Drizzle', icon: CloudDrizzle, color: 'text-blue-300' };
  if (code >= 61 && code <= 65) return { label: 'Rainy', icon: CloudRain, color: 'text-blue-500' };
  if (code >= 71 && code <= 77) return { label: 'Snowy', icon: CloudSnow, color: 'text-indigo-200' };
  if (code >= 80 && code <= 82) return { label: 'Rain Showers', icon: CloudRain, color: 'text-blue-600' };
  if (code >= 85 && code <= 86) return { label: 'Snow Showers', icon: CloudSnow, color: 'text-indigo-300' };
  if (code >= 95 && code <= 99) return { label: 'Thunderstorm', icon: CloudLightning, color: 'text-purple-500' };
  
  return { label: 'Unknown', icon: Cloud, color: 'text-gray-400' };
};
