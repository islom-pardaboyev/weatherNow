import { ForecastWeatherData } from "../utils"

function ForecastWeather({data, isLoading}:{data: ForecastWeatherData, isLoading: boolean}) {
  console.log(data)
  return (
    <div>ForecastWeather</div>
  )
}

export default ForecastWeather