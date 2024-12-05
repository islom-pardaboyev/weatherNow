import { Thermometer, Wind } from "lucide-react";
import {
  ForecastWeatherData,
  getWeatherIcon,
  kelvinToCelsius,
  listWeatherForecast,
  monthNames,
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
      <p className="font-bold my-2 text-xl">{data.city.name} <span className="font-normal capitalize">weather forecast</span></p>
      <div className="border p-3 rounded-lg">
          <div className="flex items-center justify-between overflow-x-auto gap-5">
            {data.list.map((forecast:listWeatherForecast, inx:number) => <div className="border rounded-lg p-3 min-w-[200px]">{inx + 1}</div>)}
          </div>
      </div>
    </div>
  );
}

export default ForecastWeather;
