import { api } from ".";
import { API_KEY } from "../../hook/useEnv";

export const dailyWeatherForecast = api.injectEndpoints({
    endpoints: (build) => ({
        getDailyWeatherForecast: build.query({
            query: (city_name) => ({
                url: `forecast?q=${city_name}&cnt=16&appid=${API_KEY}`,
            })
        })
    })
})

export const { useGetDailyWeatherForecastQuery } = dailyWeatherForecast