import { useRoutes } from "react-router";
import CurrentWeatherInfo from "../components/CurrentWeatherInfo";
import ForecastWeather from "../components/ForecastWeather";
import Home from "../pages/Home/Home";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useGetCurrentWeatherQuery } from "../store/api/get-current-weather-api";
import { useGetDailyWeatherForecastQuery } from "../store/api/get-daily-weather-forecast-api";

function CustomRoutes() {
  const cityName = useSelector((state:RootState) => state.cityName)
  const {data:CurrentlyWeatherInfo, isLoading:CurrentlyWeatherInfoLoading} = useGetCurrentWeatherQuery(cityName)
  const {data:ForecastWeatherInfo, isLoading:ForecastWeatherInfoLoading} = useGetDailyWeatherForecastQuery(cityName)
  return (
    <div>
      {useRoutes([
        {
          path: "/",
          element: <Home />,
          children: [
            {
              path: "current",
              element: <CurrentWeatherInfo isLoading={CurrentlyWeatherInfoLoading} data={CurrentlyWeatherInfo} />,
            },
            {
              path: "forecast",
              element: <ForecastWeather isLoading={ForecastWeatherInfoLoading} data={ForecastWeatherInfo}/>,
            },
          ],
        },
      ])}
    </div>
  );
}

export default CustomRoutes;
