export interface WeatherData {
  current: {
    temperature: number;
    windSpeed: number;
    weatherCode: number;
    time: string;
  };
  daily: {
    time: string[];
    temperatureMax: number[];
    temperatureMin: number[];
    weatherCode: number[];
  };
  location: {
    name: string;
    latitude: number;
    longitude: number;
  };
}

export type TemperatureUnit = 'celsius' | 'fahrenheit';
export type Theme = 'light' | 'dark';

export interface WeatherContextType {
  weather: WeatherData | null;
  loading: boolean;
  error: string | null;
  unit: TemperatureUnit;
  setUnit: (unit: TemperatureUnit) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isPrivacyMode: boolean;
  setPrivacyMode: (isPrivacyMode: boolean) => void;
  fetchWeatherByCoords: (lat: number, lon: number, name?: string) => Promise<void>;
  fetchWeatherByCity: (city: string) => Promise<void>;
}
