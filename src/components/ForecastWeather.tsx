import {
  ForecastWeatherData,
  getWeatherIcon,
  kelvinToCelsius,
  listWeatherForecast,
  showForecastDay,
} from "../utils";
import { bouncy } from "ldrs";

bouncy.register();

function ForecastWeather({
  data,
  isLoading,
}: {
  data: ForecastWeatherData;
  isLoading: boolean;
}) {
  
  if (isLoading) {
    return <l-bouncy size="45" speed="1.75" color="black"></l-bouncy>;
  }

  if (!data || !data.list || data.list.length === 0) {
    return <p>No data available</p>;
  }
  return (
    <div className="w-[50vw] p-4 rounded-md mb-10 overflow-y-auto bg-white">
      <p className="font-bold my-2 text-xl">
        {data.city.name}{" "}
        <span className="font-normal capitalize">weather forecast</span>
      </p>
      <div className="border p-3 rounded-lg select-none">
        <div id="forecastWeather" className="flex pb-2 items-center justify-between overflow-x-auto gap-5">
          {data.list.map((forecast: listWeatherForecast, inx: number) => (
            <div key={inx} className="border rounded-lg p-3 min-w-[200px]">
              <p className="font-bold mb-3">{showForecastDay(forecast.dt)}</p>
              {getWeatherIcon(forecast.weather[0].main)}
              <div className="flex items-center mt-3 gap-2">
                <b>{kelvinToCelsius(forecast.main.temp_max)}°C</b>
                <span>/</span>
                <p>{kelvinToCelsius(forecast.main.temp_min)}°C</p>
              </div>
              <p>{forecast.weather[0].main}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ForecastWeather;
