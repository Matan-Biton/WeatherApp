import { useAppSelector } from "../store/store";
import { WeatherResponse, ForecastResponse } from "../store/weatherApi";
import SingleDayWeather from "./SingleDayWeather";

function Data() {
  const { data, interest } = useAppSelector((state) => state.weather);
  const { error, isLoading } = useAppSelector((state) => state.ui);

  const forecastData = data as ForecastResponse;
  const weatherData = data as WeatherResponse;

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error || "Error fetching weather data"}</div>}

      {data ? (
        <div className="mt-4 p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
          <h2 className="text-2xl">
            {weatherData.name || forecastData.city.name}
          </h2>
          {forecastData.list ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {forecastData.list
                .filter(
                  (_, index) =>
                    index % 8 === 0 &&
                    index < parseInt(interest.split("-")[0]) * 8
                )
                .map((item) => (
                  <SingleDayWeather
                    key={item.dt}
                    temp={item.main.temp}
                    humidity={item.main.humidity}
                    weather={item.weather[0].description}
                    wind={item.wind.speed}
                    day={item.dt}
                  />
                ))}
            </div>
          ) : (
            <SingleDayWeather
              temp={weatherData.main.temp}
              humidity={weatherData.main.humidity}
              weather={weatherData.weather[0].description}
              wind={weatherData.wind.speed}
            />
          )}
        </div>
      ) : null}
    </div>
  );
}
export default Data;
