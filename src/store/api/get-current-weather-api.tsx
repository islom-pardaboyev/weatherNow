import { api } from ".";
import { API_KEY } from "../../hook/useEnv";

export const currentWeatherApi = api.injectEndpoints({
    endpoints: (build) => ({
        getCurrentWeather: build.query({
            query: (body) => ({
                url: `/weather/?q=${body}&appid=${API_KEY}`,
            })
        })
    })
})

export const {useGetCurrentWeatherQuery} = currentWeatherApi