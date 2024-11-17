import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import {
  setInputMethod,
  setCity,
  setCoordinates,
} from "../store/locationSlice";
import { useGetWeatherQuery } from "../store/weatherApi";

const Form = () => {
  const dispatch = useAppDispatch();
  const { city, coordinates, inputMethod } = useAppSelector(
    (state) => state.location
  );
  const { type } = useAppSelector((state) => state.weather);

  const cityRef = useRef<HTMLInputElement>(null);
  const latRef = useRef<HTMLInputElement>(null);
  const lonRef = useRef<HTMLInputElement>(null);

  const params =
    inputMethod === "city"
      ? { q: city }
      : {
          lat: coordinates.lat,
          lon: coordinates.lon,
        };

  useGetWeatherQuery(
    { type, params },
    {
      skip:
        // Skip the query if neither city or coordinates are provided
        (inputMethod === "city" && !city) ||
        (inputMethod === "coordinates" &&
          (!coordinates.lat || !coordinates.lon)),
    }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (inputMethod === "city" && cityRef.current) {
      dispatch(setCity(cityRef.current.value));
    } else if (
      inputMethod === "coordinates" &&
      latRef.current &&
      lonRef.current
    ) {
      const lat = parseFloat(latRef.current.value);
      const lon = parseFloat(lonRef.current.value);

      dispatch(setCoordinates({ lat, lon }));
    }
  };

  const getCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(setInputMethod("coordinates"));
        dispatch(
          setCoordinates({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          })
        );
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
        <div className="flex gap-4 mb-4">
          <button
            type="button"
            onClick={() => dispatch(setInputMethod("city"))}
            className={`flex-1 p-2 rounded ${
              inputMethod === "city" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            City
          </button>
          <button
            type="button"
            onClick={() => dispatch(setInputMethod("coordinates"))}
            className={`flex-1 p-2 rounded ${
              inputMethod === "coordinates"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Coordinates
          </button>
          <button
            type="button"
            onClick={getCurrentLocation}
            className="flex-1 p-2 rounded bg-green-500 text-white"
          >
            Current Location
          </button>
        </div>

        {inputMethod === "city" ? (
          <input
            ref={cityRef}
            type="text"
            placeholder="Enter city name"
            className="w-full p-2 border rounded mb-4"
          />
        ) : (
          <div className="space-y-2 mb-4">
            <input
              ref={latRef}
              type="number"
              step="any"
              placeholder="Latitude"
              className="w-full p-2 border rounded"
            />
            <input
              ref={lonRef}
              type="number"
              step="any"
              placeholder="Longitude"
              className="w-full p-2 border rounded"
            />
          </div>
        )}

        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Get {type}
        </button>
      </form>
    </>
  );
};
export default Form;
