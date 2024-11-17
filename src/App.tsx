import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/store";
import Form from "./components/Form";
import Settings from "./components/Settings";
import Data from "./components/Data";
import { setShowSettings } from "./store/UISlice";

function App() {
  const dispatch = useAppDispatch();
  const { showSettings, theme } = useAppSelector((state) => state.ui);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen bg-white dark:bg-gray-800 dark:text-white transition-colors duration-200">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold">Weather App</h1>
        <button
          onClick={() => dispatch(setShowSettings(true))}
          className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          ⚙️ Settings
        </button>
      </div>

      <Form />
      <Data />

      {showSettings && <Settings />}
    </div>
  );
}

export default App;
