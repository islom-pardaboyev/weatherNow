import { Cloud, CloudDrizzle, CloudFog, CloudLightning, CloudRainWind, Haze, Snowflake, Sun, Thermometer, Tornado } from "lucide-react";

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
  snow?: {
    "1h": number;
  };
  rain?: {
    "1h": number;
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
export type NavbarContext = { id: number; name: string; path: string };
export type ForecastWeatherData = { 
  cod: string;
  message: number;
  ctn: number;
  list: listWeatherForecast[];
  city: {
    id: number;
    name: string;
    coord: {
      lon: number;
      lat: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
};
export type listWeatherForecast = {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
};
export const monthNames:string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'uni', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
export const getWeatherIcon = (condition: string) => {
  switch (condition) {
    case "Clear":
      return <Sun className="h-10 w-10 text-yellow-500" />;
    case "Clouds":
      return <Cloud className="h-10 w-10 text-gray-500" />;
    case "Rain":
      return <CloudRainWind className="h-10 w-10 text-blue-500" />;
    case "Drizzle":
      return <CloudDrizzle className="h-10 w-10 text-blue-500" />;
    case "Thunderstorm":
      return <CloudLightning className="h-10 w-10 text-yellow-500" />;
    case "Snow":
      return <Snowflake className="h-10 w-10 text-blue-500" />;
    case "Mist":
      return <CloudFog className="h-10 w-10 text-gray-500" />;
    case "Haze":
      return <Haze className="h-10 w-10 text-yellow-500" />;
    case "Fog":
      return <CloudFog className="h-10 w-10 text-gray-500" />;
    case "Tornado":
      return <Tornado className="h-10 w-10 text-gray-500" />;
    default:
      return <Thermometer className="h-10 w-10 text-gray-500" />;
  }
};
export const kelvinToCelsius = (k: number) => (k - 273.15).toFixed(2);
export const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export function showForecastDay(dt: number): string {
  const date = new Date(dt * 1000);
  return `${dayNames[date.getDay()]}, ${date.getDate()} ${monthNames[date.getMonth()]}`;
}