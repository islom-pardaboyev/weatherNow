import { useState } from "react";
import { useForm } from "react-hook-form";
import { useGetCurrentWeatherQuery } from "./store/api/get-current-weather-api";
import { IoSearch } from "react-icons/io5";
import { CountryWeatherData, weatherTypes } from "./utils";

type FormValues = {
  country_name: string;
};

function App() {
  const [countryName, setCountryName] = useState<string>("");
  const { data } = useGetCurrentWeatherQuery(countryName) as {
    data: CountryWeatherData;
  };
  const { register, handleSubmit, formState } = useForm<FormValues>();
  const { errors } = formState;
  const onSubmit = (data: FormValues) => {
    setCountryName(data.country_name);
  };
  console.log(data);
  console.log(data?.weather[0]?.main);
  return (
    <section className="bg-primary-blue h-screen w-screen flex flex-col items-center ">
      <form
        className="mt-[7%]"
        action=""
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div
          className={`w-[30vw] rounded-full px-4 py-2 space-x-2 bg-white border-2 border-transparent flex items-center ${
            errors.country_name ? " !border-[#F5004F]" : ""
          }`}
        >
          <input
            className="outline-none w-full"
            {...register("country_name", {
              required: {
                value: true,
                message: "Country name is required",
              },
            })}
            type="search"
            placeholder="Enter Here"
          />
          <IoSearch className="scale-150" />
        </div>
        <p className="text-[#F5004F]">{errors.country_name?.message}</p>
      </form>
      {/* {countryName ? <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}/> : "no data"} */}
      {data ? (
        <img
          src={
            weatherTypes[data.weather[0]?.main] || "no-image-placeholder.png"
          }
          alt={data.weather[0]?.main}
        />
      ) : (
        "No data"
      )}
    </section>
  );
}

export default App;
