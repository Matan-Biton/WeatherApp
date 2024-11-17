import { useAppSelector } from "../store/store";

function Data() {
  const { data, interest } = useAppSelector((state) => state.weather);
  const { error, isLoading } = useAppSelector((state) => state.ui);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error || "Error fetching weather data"}</div>}

      {data ? (
        <div className="mt-4 p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
          <h2 className="text-2xl">{data.name || data.city.name}</h2>
          {data.list ? (
            <div>
              {data.list
                .filter((_, index) => index % 8 === 0)
                .map((item) => (
                  <div key={item.dt}>
                    <p>
                      {new Date(item.dt * 1000).toLocaleTimeString("en-US", {
                        day: "numeric",
                        month: "short",
                      })}
                    </p>
                    <p>
                      Temperature: {item.main.temp}°C, , Humidity:{" "}
                      {item.main.humidity}% Weather Condition:{" "}
                      {item.weather[0].description} Wind: {item.wind.speed}{" "}
                      meter/sec
                    </p>
                  </div>
                ))}
            </div>
          ) : (
            <>
              <p>Temperature: {data.main?.temp}°C</p>
              <p>
                Humidity: {data.main?.humidity || data.list[0].main.humidity}%
              </p>
              <p>
                Weather:{" "}
                {data.weather?.[0].description ||
                  data.list[0].weather[0].description}
              </p>
              <p>
                Wind Speed: {data.wind?.speed || data.list[0].wind.speed}{" "}
                meter/sec
              </p>
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default Data;
