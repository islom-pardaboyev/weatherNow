import Sun from "../assets/images/sun.png";
import Cloud from "../assets/images/cloud.png";
import Rain from "../assets/images/rain.png";
import Thunderstorm from "../assets/images/thunderstorm.png";
export type CountryWeatherData = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export const weatherTypes: Record<string, string> = {
    Clear: Sun,
    Clouds: Cloud,
    Rain: Rain,
    Drizzle: Rain,
    Thunderstorm: Thunderstorm,
    Snow: "",
    Mist: "",
    Smoke: "",
    Haze: "",
    Dust: "",
    Fog: "",
    Sand: "",
    Ash: "",
    Squall: "",
    Tornado: "",
  };