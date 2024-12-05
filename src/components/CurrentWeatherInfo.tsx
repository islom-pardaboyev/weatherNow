import { CountryWeatherData, getWeatherIcon, kelvinToCelsius } from "../utils";
import { Droplets, Thermometer} from "lucide-react";
import MapComponent from "./MapComponents";
import { bouncy } from "ldrs";

bouncy.register();

function CurrentWeatherInfo({
  data,
  isLoading,
}: {
  data: CountryWeatherData;
  isLoading: boolean;
}) {

  return (
    <div>
      {data && (
        <div className="grid grid-cols-2 gap-x-10 items-start">
          {/* Weather Card */}
          <div className="bg-white col-span-1 rounded-xl p-5">
            <div className="flex items-center mb-3 justify-between">
              <h1 className="font-semibold text-xl ">
                {data.name}, {data.sys.country}
              </h1>
              <img
                src={`https://flagcdn.com/h60/${data.sys.country.toLocaleLowerCase()}.png`}
                alt={data.sys.country}
              />
            </div>
            <div className="w-[30vw] h-[40vh] grid grid-cols-2 gap-3">
              <div className="col-span-1 bg-primary-gray rounded-xl flex flex-col items-center justify-center">
                <Thermometer className="w-8 h-8 mb-2" />
                <span className="font-bold text-3xl">
                  {kelvinToCelsius(data.main.temp)}°C
                </span>
                <span className="text-sm text-slate-500">Temperature</span>
              </div>
              <div className="col-span-1 bg-primary-gray flex gap-2 flex-col items-center justify-center rounded-xl">
                {getWeatherIcon(data.weather[0].main)}
                <span className="capitalize text-sm text-slate-500">
                  {data.weather[0].description}
                </span>
              </div>
              <div className="col-span-2 bg-primary-gray flex items-center justify-center flex-col rounded-xl">
                <Droplets className="h-10 w-10 text-blue-500" />
                <span className="font-bold text-2xl">
                  {data.main.humidity}%
                </span>
                <span className="capitalize text-sm text-slate-500">
                  Humidity
                </span>
              </div>
            </div>
          </div>

          {/* Map Component */}
          <div className="w-[30vw] col-span-1 h-full">
            <MapComponent Lat={data.coord.lat} Lon={data.coord.lon} />
          </div>
        </div>
      )}
      {isLoading && <l-bouncy size="45" speed="1.75" color="black"></l-bouncy>}
    </div>
  );
}

export default CurrentWeatherInfo;
