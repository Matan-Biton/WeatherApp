import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setData } from "./weatherSlice";
import { setError, setIsLoading } from "./UISlice";

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export interface WeatherResponse {
  main: {
    temp: number;
    humidity: number;
  };
  weather: Array<{
    main: string;
    description: string;
  }>;
  wind: {
    speed: number;
  };
  name: string;
  dt: number;
}

export interface ForecastResponse {
  list: WeatherResponse[];
  city: {
    name: string;
  };
}

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5",
  }),
  keepUnusedDataFor: 300,
  endpoints: (builder) => ({
    getWeather: builder.query<
      WeatherResponse | ForecastResponse,
      {
        type: string;
        params: { q: string } | { lat: number | null; lon: number | null };
      }
    >({
      query: (queryParams) => ({
        url: `/${queryParams.type}`,
        params: {
          ...queryParams.params,
          appid: WEATHER_API_KEY,
          units: "metric",
        },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(setIsLoading(true));
        try {
          const { data } = await queryFulfilled;
          dispatch(setData(data));
          dispatch(setError(null));
        } catch (error) {
          dispatch(
            setError(
              (error as { error: { data: { message: string } } }).error.data
                .message
            )
          );
        } finally {
          dispatch(setIsLoading(false));
        }
      },
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApi;
