interface WeatherProps {
  temp: number;
  humidity: number;
  weather: string;
  wind: number;
  day?: number;
}

const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const SingleDayWeather = ({
  temp,
  humidity,
  weather,
  wind,
  day,
}: WeatherProps) => {
  const getWeatherIcon = (condition: string) => {
    const lowerCaseCondition = condition.toLowerCase();
    if (lowerCaseCondition.includes("rain")) {
      return "🌧️";
    } else if (lowerCaseCondition.includes("snow")) {
      return "❄️";
    } else if (lowerCaseCondition.includes("thunderstorm")) {
      return "⚡";
    } else if (lowerCaseCondition.includes("mist")) {
      return "🌫️";
    } else if (lowerCaseCondition.includes("clear")) {
      return "☀️";
    } else if (lowerCaseCondition.includes("clouds")) {
      return "☁️";
    } else {
      return "🌤️";
    }
  };

  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-3 hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between items-center border-b dark:border-gray-600 pb-2">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white">
            {day ? dayOfWeek[new Date(day).getDay()] : "Today"}
          </h2>
          <span className="text-3xl">{getWeatherIcon(weather)}</span>
        </div>

        <div className="text-center my-1">
          <span className="text-3xl font-bold text-blue-500">{temp}°C</span>
          <p className="text-gray-600 dark:text-gray-300 text-sm capitalize">
            {weather}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-1 justify-center">
            <span className="text-xl">💧</span>
            <div className="text-gray-600 dark:text-gray-300">
              <span className="text-sm font-semibold">{humidity}%</span>
            </div>
          </div>

          <div className="flex items-center gap-1 justify-center">
            <span className="text-xl">🌪️</span>
            <div className="text-gray-600 dark:text-gray-300">
              <span className="text-sm font-semibold">{wind} m/s</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDayWeather;
