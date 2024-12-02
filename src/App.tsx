import { useState } from "react";
import { useForm } from "react-hook-form";
import { useGetCurrentWeatherQuery } from "./store/api/get-current-weather-api";
import { CountryWeatherData } from "./utils";
import { ring2 } from "ldrs";
import {
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudRainWind,
  Droplets,
  Haze,
  Snowflake,
  Sun,
  Thermometer,
  Tornado,
} from "lucide-react";
import MapComponents from "./components/MapComponents";
import MapComponent from "./components/MapComponents";

ring2.register();

type FormValues = {
  country_name: string;
};

function App() {
  const kelvinToCelsius = (k: number) => (k - 273.15).toFixed(2);
  const getWeatherIcon = (condition: string) => {
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
  const [countryName, setCountryName] = useState<string>("");
  const { data, isLoading } = useGetCurrentWeatherQuery(countryName) as {
    data: CountryWeatherData;
    isLoading: boolean;
    isError: boolean;
  };
  const { register, handleSubmit, formState } = useForm<FormValues>();
  const { errors } = formState;
  const onSubmit = (data: FormValues) => {
    setCountryName(data.country_name);
  };
  return (
<section className="bg-primary-blue h-screen w-screen flex flex-col items-center ">
  <form
    className="mt-[7%]"
    action=""
    onSubmit={handleSubmit(onSubmit)}
    noValidate
  >
    <div className="flex items-center space-x-5">
      <input
        className={`w-[30vw] outline-none capitalize select-none hover:outline-4 hover:outline-black/30 rounded-lg px-4 py-2 space-x-2 bg-white border-2 border-transparent flex items-center ${
          errors.country_name ? " !border-[#F5004F]" : ""
        }`}
        autoComplete="off"
        {...register("country_name", {
          required: {
            value: true,
            message: "Country name is required",
          },
        })}
        type="search"
        placeholder="Enter Country Name"
      />
      <button className="bg-black p-3 rounded-lg hover:bg-black/80 text-white font-medium">
        Get Weather
      </button>
    </div>
    <p className="text-[#F5004F]">{errors.country_name?.message}</p>
  </form>

  {isLoading && (
    <div className="mt-5">
      <l-ring-2
        size="40"
        stroke="5"
        stroke-length="0.25"
        bg-opacity="0.1"
        speed="0.8"
        color="white"
      ></l-ring-2>
    </div>
  )}

  {data && (
    <div className="flex gap-5 mt-10 items-start">
      {/* Weather Card */}
      <div className="bg-white rounded-xl p-5">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-xl mb-3">
            {data.name}, {data.sys.country}
          </h1>
          <img
            src={`https://flagsapi.com/${data.sys.country}/flat/64.png`}
            alt="Country flag"
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
            <span className="font-bold text-2xl">{data.main.humidity}%</span>
            <span className="capitalize text-sm text-slate-500">
              Humidity
            </span>
          </div>
        </div>
      </div>

      {/* Map Component */}
      <div className="w-[30vw] h-full">
        <MapComponent Lat={data.coord.lat} Lon={data.coord.lon} />
      </div>
    </div>
  )}
</section>

  );
}

export default App;
