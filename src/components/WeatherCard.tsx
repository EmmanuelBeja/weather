import { useEffect, useContext } from 'react';

import Loading from './Loading';
import { FormattedMessage } from 'react-intl';

import { WeatherContext } from '../utils/store/weatherContext';
import { WeatherContextType } from '../@types/weather';

const Card = () => {
  const { getWeather, weather, loading } = useContext(
    WeatherContext
  ) as WeatherContextType;

  useEffect(() => {
    getWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <span className="w-[250px] h-[200px] z-10 text-[black] flex flex-col bg-[white] rounded-[5px] py-[20px] px-[10px] justify-center items-center">
      {weather && weather.name ? (
        <>
          <div className="h-[160px] w-[180px] font-[200] text-[18px]">
            <span>{weather.name}</span>
          </div>
          <div className="h-[160px] w-[180px] text-xl">
            {Math.round(weather?.main?.temp)}
            <sup>&deg;C</sup>
          </div>
          {weather?.weather && weather.weather.length ? (
            <>
              <img
                className="weather-icon"
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
              />
              <p className="h-[160px] w-[180px] text-[darkgrey]">
                {weather.weather[0].description}
              </p>
            </>
          ) : (
            ''
          )}
        </>
      ) : (
        <div className="text-center text-[13px]">
          <FormattedMessage id="app.noweather" />
        </div>
      )}
    </span>
  );
};

export default Card;
