import { setInputMethod } from "../store/locationSlice";
import { setInterest } from "../store/weatherSlice";
import { setShowSettings, toggleTheme } from "../store/UISlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import Selection from "./Selection";

const Settings = () => {
  const dispatch = useAppDispatch();
  const { inputMethod } = useAppSelector((state) => state.location);
  const { interest } = useAppSelector((state) => state.weather);
  const { showSettings, theme } = useAppSelector((state) => state.ui);

  if (!showSettings) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full sm:w-96 dark:text-white">
        <h2 className="text-xl font-bold mb-4">Settings</h2>
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Input Method</h3>
          <Selection
            options={[
              {
                name: "City Name",
                isSelected: inputMethod === "city",
                onClick: () => dispatch(setInputMethod("city")),
              },
              {
                name: "Coordinates",
                isSelected: inputMethod === "coordinates",
                onClick: () => dispatch(setInputMethod("coordinates")),
              },
            ]}
          />
        </div>
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Forecast Type</h3>
          <Selection
            options={[
              {
                name: "Today",
                isSelected: interest === "1-day",
                onClick: () => dispatch(setInterest("1-day")),
              },
              {
                name: "3 Days",
                isSelected: interest === "3-days",
                onClick: () => dispatch(setInterest("3-days")),
              },
              {
                name: "5 Days",
                isSelected: interest === "5-days",
                onClick: () => dispatch(setInterest("5-days")),
              },
            ]}
          />
        </div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold mb-2">Theme Mode:</h3>
          <button
            onClick={() => dispatch(toggleTheme())}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            {theme === "light" ? "🌞 Light" : "🌙 Dark"}
          </button>
        </div>
        <button
          onClick={() => dispatch(setShowSettings(false))}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Settings;
