import * as React from 'react';
import { WeatherContextType, IWeather } from '../../@types/weather';
import { fetchWeather } from '../api/weather';

export const WeatherContext = React.createContext<WeatherContextType | null>(
  null
);

const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [weather, setWeather] = React.useState<IWeather | null>(null);
  const [loading, setLoading] = React.useState(false);
  const getWeather = async () => {
    setLoading(true);
    const newWeather = await fetchWeather('Nairobi');
    setWeather(newWeather);
    setLoading(false);
  };

  return (
    <WeatherContext.Provider value={{ weather, getWeather, loading }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
