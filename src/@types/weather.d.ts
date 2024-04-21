interface IWeather {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
  };
  weather: [{ description: string; icon: string }];
}
export type WeatherContextType = {
  weather: IWeather | null;
  getWeather: () => void;
  loading: boolean;
};
